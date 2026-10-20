/*
 * Rule pack "structure": graph and syntax rules for DRAKON diagrams.
 *
 * Each rule: { id, description, severity, options, check(ctx, options, report) }
 * or a declarative rule: { id, kind, types, options } (see drakon-validator.js).
 * Severity / enabled / options can be overridden from the config without
 * touching this file.
 */
(function (root, factory) {
    var isNode = typeof module === "object" && module.exports;
    var V = isNode ? require("../drakon-validator.js") : root.DrakonValidator;
    var rules = factory();
    V.registerPack("structure", rules);
    if (isNode) { module.exports = rules; }
})(typeof self !== "undefined" ? self : this, function () {
    "use strict";

    var KNOWN_TYPES = [
        "action", "question", "select", "case", "foreach", "loopbegin", "loopend",
        "branch", "address", "end", "header", "insertion", "comment", "parbegin", "parend",
        "shelf", "timer", "pause", "duration", "input", "output", "process",
        "ctrlstart", "ctrlend", "simpleinput", "simpleoutput", "arrow-loop", "junction",
        "drakon-image"
    ];

    // Which link fields an item of a given type must have (and must not have).
    var EXITS = {
        "question": { required: ["one", "two"] },
        "parbegin": { required: ["one"] },
        "case": { required: ["one"] },
        "end": { required: [], forbidden: ["one", "two"] },
        "duration": { required: [], forbidden: ["one", "two"] }
    };
    var SINGLE_EXIT = { required: ["one"], forbidden: ["two"] };

    function exitsFor(type) {
        if (EXITS[type]) { return EXITS[type]; }
        if (type === "select" || type === "branch") { return { required: ["one"], forbidden: ["two"] }; }
        return SINGLE_EXIT;
    }

    // Allowed target types for specific links. "*" = any flow type except the listed exclusions.
    function targetAllowed(fromType, field, toType) {
        if (field === "side") { return toType === "duration"; }
        if (fromType === "select" && field === "one") { return toType === "case"; }
        if (fromType === "case" && field === "two") { return toType === "case"; }
        if (fromType === "parbegin" && field === "two") { return toType === "parbegin"; }
        // Ordinary flow links must not jump into a case or a duration.
        return toType !== "case" && toType !== "duration";
    }

    function caseChain(ctx, selectId) {
        var chain = [];
        var seen = {};
        var id = ctx.item(selectId).one;
        while (ctx.hasLink(id) && !seen[id] && ctx.item(id) && ctx.item(id).type === "case") {
            seen[id] = true;
            chain.push(String(id));
            id = ctx.item(id).two;
        }
        return chain;
    }

    return [
        {
            id: "known-types",
            description: "Every item has a type that DrakonWidget knows.",
            severity: "warning",
            options: { extraTypes: [] },
            check: function (ctx, o, report) {
                var known = KNOWN_TYPES.concat(o.extraTypes || []);
                ctx.ids.forEach(function (id) {
                    var it = ctx.items[id];
                    if (!it.type) {
                        report(id, "Item has no type");
                    } else if (!ctx.isFree(it) && known.indexOf(it.type) === -1) {
                        report(id, "Unknown item type '" + it.type + "'");
                    }
                });
            }
        },
        {
            id: "single-end",
            description: "A non-empty diagram has exactly one End icon.",
            kind: "typeCount",
            severity: "error",
            options: { type: "end", min: 1, max: 1, message: "Diagram must have exactly one End, found {n}" }
        },
        {
            id: "has-branch",
            description: "A non-empty diagram has at least one branch (the start).",
            kind: "typeCount",
            severity: "error",
            options: { type: "branch", min: 1, max: null, message: "Diagram has no branch to start from" }
        },
        {
            id: "unique-branch-ids",
            description: "branchId values are unique (they define branch order).",
            severity: "error",
            check: function (ctx, o, report) {
                var seen = {};
                ctx.byType("branch").forEach(function (id) {
                    var bid = ctx.items[id].branchId;
                    if (bid === undefined || bid === null) {
                        report(id, "Branch has no branchId");
                    } else if (seen[bid] !== undefined) {
                        report(id, "Duplicate branchId " + bid + " (also item " + seen[bid] + ")");
                    } else {
                        seen[bid] = id;
                    }
                });
            }
        },
        {
            id: "links-resolve",
            description: "Every one/two/side link points to an existing item, never to itself.",
            severity: "error",
            check: function (ctx, o, report) {
                ctx.ids.forEach(function (id) {
                    var it = ctx.items[id];
                    ["one", "two", "side"].forEach(function (f) {
                        if (!ctx.hasLink(it[f])) { return; }
                        var to = String(it[f]);
                        if (to === id) {
                            report(id, "Link '" + f + "' points to the item itself");
                        } else if (!ctx.item(to)) {
                            report(id, "Link '" + f + "' points to missing item " + to);
                        }
                    });
                });
            }
        },
        {
            id: "required-exits",
            description: "Each icon has exactly the exits its type needs (e.g. Question has Yes and No).",
            severity: "error",
            check: function (ctx, o, report) {
                ctx.flowIds.forEach(function (id) {
                    var it = ctx.items[id];
                    if (KNOWN_TYPES.indexOf(it.type) === -1) { return; }
                    var spec = exitsFor(it.type);
                    spec.required.forEach(function (f) {
                        if (!ctx.hasLink(it[f])) {
                            report(id, it.type + " is missing its '" + f + "' exit");
                        }
                    });
                    (spec.forbidden || []).forEach(function (f) {
                        if (ctx.hasLink(it[f])) {
                            report(id, it.type + " must not have a '" + f + "' exit");
                        }
                    });
                });
            }
        },
        {
            id: "link-target-types",
            description: "Links go to allowed icon types (Select→Case, Case→Case, side→Duration, …).",
            severity: "error",
            check: function (ctx, o, report) {
                ctx.ids.forEach(function (id) {
                    var it = ctx.items[id];
                    ["one", "two", "side"].forEach(function (f) {
                        if (!ctx.hasLink(it[f])) { return; }
                        var target = ctx.item(String(it[f]));
                        if (!target) { return; } // reported by links-resolve
                        if (!targetAllowed(it.type, f, target.type)) {
                            report(id, it.type + "." + f + " must not point to a " + target.type +
                                " (item " + it[f] + ")");
                        }
                    });
                });
            }
        },
        {
            id: "reachable",
            description: "Every flow icon can be reached from the first branch.",
            severity: "warning",
            check: function (ctx, o, report) {
                if (!ctx.firstBranch) { return; }
                var seen = ctx.reachableFrom([ctx.firstBranch], true);
                var unreachable = ctx.flowIds.filter(function (id) { return !seen[id]; });
                if (!unreachable.length) { return; }
                var inSet = {};
                unreachable.forEach(function (id) { inSet[id] = true; });
                // Report only the entry points of unreachable regions, not every item in them.
                var roots = unreachable.filter(function (id) {
                    return !ctx.predecessors(id).some(function (p) { return inSet[p.from]; });
                });
                if (!roots.length) { roots = [unreachable[0]]; }
                roots.forEach(function (id) {
                    var region = ctx.reachableFrom([id], true);
                    var size = Object.keys(region).filter(function (k) { return inSet[k]; }).length;
                    var it = ctx.items[id];
                    var label = it.type === "branch" && it.content ? " '" + String(it.content).trim() + "'" : "";
                    report(id, "Unreachable " + it.type + label +
                        (size > 1 ? " (and " + (size - 1) + " item(s) after it)" : ""));
                });
            }
        },
        {
            id: "end-reachable",
            description: "The End icon can be reached from the first branch.",
            severity: "error",
            check: function (ctx, o, report) {
                var ends = ctx.byType("end");
                if (!ctx.firstBranch || ends.length !== 1) { return; }
                var seen = ctx.reachableFrom([ctx.firstBranch], false);
                if (!seen[ends[0]]) {
                    report(ends[0], "End cannot be reached from the first branch");
                }
            }
        },
        {
            id: "select-cases",
            description: "A Select (Choice) has at least minCases Case icons.",
            severity: "warning",
            options: { minCases: 2 },
            check: function (ctx, o, report) {
                ctx.byType("select").forEach(function (id) {
                    var n = caseChain(ctx, id).length;
                    if (n < o.minCases) {
                        report(id, "Select has " + n + " case(s), expected at least " + o.minCases);
                    }
                });
            }
        },
        {
            id: "loop-balance",
            description: "Every loop start has a matching loop end.",
            severity: "error",
            check: function (ctx, o, report) {
                var begins = ctx.byType("loopbegin").length;
                var ends = ctx.byType("loopend").length;
                if (begins !== ends) {
                    report(null, "Loop starts (" + begins + ") and loop ends (" + ends + ") do not match");
                }
            }
        },
        {
            id: "parallel-balance",
            description: "Every parallel block (chain of parbegin) has exactly one parend.",
            severity: "error",
            check: function (ctx, o, report) {
                var parbegins = ctx.byType("parbegin");
                var targeted = {};
                parbegins.forEach(function (id) {
                    var two = ctx.items[id].two;
                    if (ctx.hasLink(two)) { targeted[String(two)] = true; }
                });
                var blocks = parbegins.filter(function (id) { return !targeted[id]; }).length;
                var ends = ctx.byType("parend").length;
                if (blocks !== ends) {
                    report(null, "Parallel blocks (" + blocks + ") and parallel ends (" + ends + ") do not match");
                }
            }
        }
    ];
});
