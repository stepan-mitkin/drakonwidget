/*
 * DrakonValidator — rule-based validation for DrakonWidget diagrams.
 *
 * The engine knows nothing about specific DRAKON rules. Rules come from:
 *   1. rule packs   — JavaScript files that call DrakonValidator.registerPack()
 *   2. a config     — plain JSON that enables/disables rules, changes their
 *                     severity and options, and adds declarative rules
 *                     (no code needed) built from registered "kinds".
 *
 * Works in the browser (global `DrakonValidator`) and in Node (require()).
 * Load order in the browser: this file, then rule packs, then the config.
 */
(function (root, factory) {
    var api = factory();
    if (typeof module === "object" && module.exports) {
        module.exports = api;
    } else {
        root.DrakonValidator = api;
    }
})(typeof self !== "undefined" ? self : this, function () {
    "use strict";

    var VERSION = "0.1.0";
    var SEVERITIES = ["error", "warning", "info"];
    var SEVERITY_RANK = { error: 0, warning: 1, info: 2 };
    var LINK_FIELDS = ["one", "two", "side"];

    // Icons that float freely on the canvas and are not part of the flow.
    var FREE_TYPES = {
        "group-duration": true, "rectangle": true, "line": true, "text": true,
        "f_begin": true, "rounded": true, "f_ptr_right": true, "f_ptr_left": true,
        "callout": true, "frame": true, "connection": true
    };

    var packs = {};   // pack name -> array of rule definitions
    var packOrder = [];
    var kinds = {};   // declarative kind name -> { description, build(def) -> check }

    // ------------------------------------------------------------------
    // Registry
    // ------------------------------------------------------------------

    function registerPack(name, rules) {
        if (!name || !Array.isArray(rules)) {
            throw new Error("registerPack(name, rules[]) expected");
        }
        rules.forEach(function (rule) { checkRuleShape(rule, name); });
        if (!(name in packs)) {
            packOrder.push(name);
        }
        packs[name] = rules.slice();
    }

    function registerKind(name, kind) {
        if (!name || !kind || typeof kind.build !== "function") {
            throw new Error("registerKind(name, {build}) expected");
        }
        kinds[name] = kind;
    }

    function listPacks() {
        return packOrder.slice();
    }

    function listKinds() {
        return Object.keys(kinds).map(function (name) {
            return { kind: name, description: kinds[name].description || "", options: kinds[name].options || {} };
        });
    }

    function checkRuleShape(rule, packName) {
        if (!rule || !rule.id) {
            throw new Error("Rule without id in pack " + packName);
        }
        if (typeof rule.check !== "function" && !rule.kind) {
            throw new Error("Rule " + rule.id + " needs either check() or kind");
        }
        if (rule.severity && SEVERITIES.indexOf(rule.severity) === -1) {
            throw new Error("Rule " + rule.id + " has unknown severity " + rule.severity);
        }
    }

    // ------------------------------------------------------------------
    // Diagram context: graph helpers shared by all rules
    // ------------------------------------------------------------------

    function buildContext(diagram) {
        if (typeof diagram === "string") {
            diagram = JSON.parse(diagram);
        }
        diagram = diagram || {};
        var items = diagram.items || {};
        var ids = Object.keys(items);
        var byTypeCache = null;
        var predCache = null;

        function item(id) {
            return Object.prototype.hasOwnProperty.call(items, id) ? items[id] : undefined;
        }

        function isFree(it) {
            if (!it) { return false; }
            if (FREE_TYPES[it.type]) { return true; }
            return typeof it.x === "number" && typeof it.y === "number";
        }

        function byType(type) {
            if (!byTypeCache) {
                byTypeCache = {};
                ids.forEach(function (id) {
                    var t = items[id].type;
                    (byTypeCache[t] = byTypeCache[t] || []).push(id);
                });
            }
            return (byTypeCache[type] || []).slice();
        }

        function hasLink(value) {
            return value !== undefined && value !== null && value !== "";
        }

        function successors(id, includeSide) {
            var it = item(id);
            var result = [];
            if (!it) { return result; }
            ["one", "two"].forEach(function (f) {
                if (hasLink(it[f])) { result.push(String(it[f])); }
            });
            if (includeSide && hasLink(it.side)) {
                result.push(String(it.side));
            }
            return result;
        }

        function predecessors(id) {
            if (!predCache) {
                predCache = {};
                ids.forEach(function (from) {
                    LINK_FIELDS.forEach(function (f) {
                        var to = items[from][f];
                        if (hasLink(to)) {
                            to = String(to);
                            (predCache[to] = predCache[to] || []).push({ from: from, field: f });
                        }
                    });
                });
            }
            return (predCache[id] || []).slice();
        }

        function reachableFrom(startIds, includeSide) {
            var seen = {};
            var stack = [].concat(startIds);
            while (stack.length) {
                var id = stack.pop();
                if (seen[id] || !item(id)) { continue; }
                seen[id] = true;
                successors(id, includeSide).forEach(function (n) { stack.push(n); });
            }
            return seen;
        }

        var branches = byType("branch").sort(function (a, b) {
            return (items[a].branchId || 0) - (items[b].branchId || 0);
        });

        function text(it, field) {
            var v = it ? it[field || "content"] : undefined;
            return v === undefined || v === null ? "" : String(v).trim();
        }

        return {
            diagram: diagram,
            diagramType: diagram.type || "drakon",
            items: items,
            ids: ids,
            item: item,
            isFree: isFree,
            flowIds: ids.filter(function (id) { return !isFree(items[id]); }),
            byType: byType,
            branches: branches,
            firstBranch: branches[0],
            successors: successors,
            predecessors: predecessors,
            reachableFrom: reachableFrom,
            hasLink: hasLink,
            text: text,
            isEmpty: ids.length === 0
        };
    }

    // ------------------------------------------------------------------
    // Validator instance
    // ------------------------------------------------------------------

    function clone(obj) {
        return obj === undefined ? undefined : JSON.parse(JSON.stringify(obj));
    }

    function format(template, values) {
        return String(template).replace(/\{(\w+)\}/g, function (m, key) {
            return values[key] === undefined ? m : String(values[key]);
        });
    }

    function createValidator(config, options) {
        options = options || {};
        var activePacks = options.packs || listPacks();
        var currentConfig = normalizeConfig(config);
        var rules = [];

        function normalizeConfig(cfg) {
            cfg = clone(cfg) || {};
            cfg.rules = cfg.rules || {};
            cfg.custom = cfg.custom || [];
            return cfg;
        }

        function compile() {
            var list = [];
            var byId = {};
            activePacks.forEach(function (packName) {
                (packs[packName] || []).forEach(function (def) {
                    var rule = materialize(def, packName);
                    byId[rule.id] = list.length;
                    list.push(rule);
                });
            });
            currentConfig.custom.forEach(function (def) {
                checkRuleShape(def, "config.custom");
                var rule = materialize(def, "custom");
                if (rule.id in byId) {
                    list[byId[rule.id]] = rule;
                } else {
                    byId[rule.id] = list.length;
                    list.push(rule);
                }
            });
            list.forEach(function (rule) {
                var o = currentConfig.rules[rule.id];
                if (!o) { return; }
                if (o.enabled !== undefined) { rule.enabled = !!o.enabled; }
                if (o.severity) {
                    if (SEVERITIES.indexOf(o.severity) === -1) {
                        throw new Error("Unknown severity '" + o.severity + "' for rule " + rule.id);
                    }
                    rule.severity = o.severity;
                }
                if (o.options) { rule.options = Object.assign({}, rule.options, o.options); }
                if (o.blocking !== undefined) { rule.blocking = !!o.blocking; }
            });
            rules = list;
        }

        function materialize(def, packName) {
            var rule = {
                id: def.id,
                pack: packName,
                description: def.description || "",
                severity: def.severity || "error",
                enabled: def.enabled !== false,
                diagramTypes: def.diagramTypes || ["drakon"],
                types: def.types,
                kind: def.kind,
                blocking: def.blocking,
                options: Object.assign({}, def.options),
                check: def.check
            };
            if (!rule.check) {
                var kind = kinds[def.kind];
                if (!kind) {
                    throw new Error("Rule " + def.id + " uses unknown kind '" + def.kind + "'");
                }
                rule.check = kind.build(rule);
            }
            return rule;
        }

        function validate(diagram) {
            var ctx = buildContext(diagram);
            var issues = [];
            rules.forEach(function (rule) {
                if (!rule.enabled) { return; }
                if (rule.diagramTypes.indexOf(ctx.diagramType) === -1) { return; }
                var report = function (itemId, message, extra) {
                    var issue = Object.assign({
                        ruleId: rule.id,
                        pack: rule.pack,
                        severity: rule.severity,
                        itemId: itemId === undefined || itemId === null ? null : String(itemId),
                        message: message
                    }, extra || {});
                    if (rule.blocking !== undefined) { issue.blocking = rule.blocking; }
                    issues.push(issue);
                };
                try {
                    rule.check(ctx, rule.options, report, rule);
                } catch (ex) {
                    issues.push({
                        ruleId: rule.id, pack: rule.pack, severity: "warning", itemId: null,
                        message: "Rule crashed: " + ex.message
                    });
                }
            });
            issues.sort(function (a, b) {
                return (SEVERITY_RANK[a.severity] - SEVERITY_RANK[b.severity]) ||
                    (a.ruleId < b.ruleId ? -1 : a.ruleId > b.ruleId ? 1 : 0);
            });
            var counts = { error: 0, warning: 0, info: 0 };
            issues.forEach(function (i) { counts[i.severity]++; });
            return { ok: counts.error === 0, counts: counts, issues: issues };
        }

        function listRules() {
            return rules.map(function (r) {
                return {
                    id: r.id, pack: r.pack, description: r.description, severity: r.severity,
                    enabled: r.enabled, blocking: r.blocking === undefined ? null : r.blocking,
                    kind: r.kind || null, types: r.types || null,
                    options: clone(r.options)
                };
            });
        }

        function override(id, patch) {
            var o = currentConfig.rules[id] = currentConfig.rules[id] || {};
            Object.assign(o, patch);
            compile();
        }

        compile();

        return {
            validate: validate,
            listRules: listRules,
            getConfig: function () { return clone(currentConfig); },
            setConfig: function (cfg) { currentConfig = normalizeConfig(cfg); compile(); },
            enableRule: function (id, enabled) { override(id, { enabled: enabled !== false }); },
            setSeverity: function (id, severity) { override(id, { severity: severity }); },
            setOptions: function (id, opts) {
                var o = currentConfig.rules[id] || {};
                override(id, { options: Object.assign({}, o.options, opts) });
            },
            addRule: function (def) {
                currentConfig.custom = currentConfig.custom.filter(function (d) { return d.id !== def.id; });
                currentConfig.custom.push(clone(def));
                compile();
            },
            removeRule: function (id) {
                currentConfig.custom = currentConfig.custom.filter(function (d) { return d.id !== id; });
                compile();
            }
        };
    }

    // ------------------------------------------------------------------
    // Built-in declarative kinds (usable from config without code)
    // ------------------------------------------------------------------

    function appliesTo(rule, it) {
        return !rule.types || rule.types.indexOf(it.type) !== -1;
    }

    function eachTarget(ctx, rule, fn) {
        ctx.ids.forEach(function (id) {
            var it = ctx.items[id];
            if (appliesTo(rule, it)) { fn(id, it); }
        });
    }

    registerKind("required", {
        description: "Field must not be empty for the listed item types.",
        options: { field: "content", message: "{type} has no text" },
        build: function (rule) {
            return function (ctx, o, report) {
                var field = o.field || "content";
                eachTarget(ctx, rule, function (id, it) {
                    if (o.onlyWhenMultipleBranches && ctx.branches.length < 2) { return; }
                    if (!ctx.text(it, field)) {
                        report(id, format(o.message || "{type} has no {field}", { type: it.type, field: field }));
                    }
                });
            };
        }
    });

    registerKind("pattern", {
        description: "Non-empty field must match (or, with negate, must not match) a regular expression.",
        options: { field: "content", pattern: "", flags: "", negate: false, message: "" },
        build: function (rule) {
            return function (ctx, o, report) {
                var field = o.field || "content";
                var re = new RegExp(o.pattern, o.flags || "");
                eachTarget(ctx, rule, function (id, it) {
                    var value = ctx.text(it, field);
                    if (!value) { return; }
                    var matches = re.test(value);
                    if (matches === !!o.negate) {
                        report(id, format(o.message || "{type} text does not match {pattern}",
                            { type: it.type, pattern: o.pattern, value: value }));
                    }
                });
            };
        }
    });

    registerKind("maxLength", {
        description: "Field length must not exceed max characters.",
        options: { field: "content", max: 200 },
        build: function (rule) {
            return function (ctx, o, report) {
                var field = o.field || "content";
                eachTarget(ctx, rule, function (id, it) {
                    var len = ctx.text(it, field).length;
                    if (len > o.max) {
                        report(id, format(o.message || "{type} text is {length} characters (max {max})",
                            { type: it.type, length: len, max: o.max }));
                    }
                });
            };
        }
    });

    registerKind("forbiddenWords", {
        description: "Field must not contain any of the listed words.",
        options: { field: "content", words: [], caseSensitive: false },
        build: function (rule) {
            return function (ctx, o, report) {
                var field = o.field || "content";
                var words = o.words || [];
                eachTarget(ctx, rule, function (id, it) {
                    var value = ctx.text(it, field);
                    var hay = o.caseSensitive ? value : value.toLowerCase();
                    words.forEach(function (w) {
                        var needle = o.caseSensitive ? w : String(w).toLowerCase();
                        var re = new RegExp("(^|[^\\p{L}\\p{N}_])" + escapeRe(needle) + "($|[^\\p{L}\\p{N}_])", "u");
                        if (re.test(hay)) {
                            report(id, format(o.message || "{type} contains forbidden word '{word}'",
                                { type: it.type, word: w }));
                        }
                    });
                });
            };
        }
    });

    registerKind("unique", {
        description: "Non-empty field values must be unique among the listed item types.",
        options: { field: "content", caseSensitive: false },
        build: function (rule) {
            return function (ctx, o, report) {
                var field = o.field || "content";
                var seen = {};
                eachTarget(ctx, rule, function (id, it) {
                    var value = ctx.text(it, field);
                    if (!value) { return; }
                    var key = o.caseSensitive ? value : value.toLowerCase();
                    if (seen[key]) {
                        report(id, format(o.message || "Duplicate {type} text '{value}' (also in item {other})",
                            { type: it.type, value: value, other: seen[key] }));
                    } else {
                        seen[key] = id;
                    }
                });
            };
        }
    });

    registerKind("typeCount", {
        description: "Number of items of a type must be within [min, max].",
        options: { type: "", min: 0, max: null },
        build: function () {
            return function (ctx, o, report) {
                if (ctx.isEmpty) { return; }
                var n = ctx.byType(o.type).length;
                var tooFew = o.min !== undefined && o.min !== null && n < o.min;
                var tooMany = o.max !== undefined && o.max !== null && n > o.max;
                if (tooFew || tooMany) {
                    report(null, format(o.message || "Expected {range} '{type}' items, found {n}", {
                        type: o.type, n: n,
                        range: (o.min === o.max) ? String(o.min) : (o.min || 0) + ".." + (o.max === null || o.max === undefined ? "∞" : o.max)
                    }));
                }
            };
        }
    });

    function escapeRe(s) {
        return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    return {
        version: VERSION,
        severities: SEVERITIES.slice(),
        registerPack: registerPack,
        registerKind: registerKind,
        listPacks: listPacks,
        listKinds: listKinds,
        buildContext: buildContext,
        createValidator: createValidator,
        util: { format: format }
    };
});
