/*
 * Rule pack "content": rules about the text inside icons.
 *
 * Almost all of these are declarative (kind + options), so the same rules
 * could be written in the config file instead. They live here as defaults.
 */
(function (root, factory) {
    var isNode = typeof module === "object" && module.exports;
    var V = isNode ? require("../drakon-validator.js") : root.DrakonValidator;
    var rules = factory();
    V.registerPack("content", rules);
    if (isNode) { module.exports = rules; }
})(typeof self !== "undefined" ? self : this, function () {
    "use strict";

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
            id: "text-required",
            description: "Icons that state something are not empty.",
            kind: "required",
            severity: "warning",
            types: ["action", "question", "select", "insertion", "loopbegin", "shelf",
                "process", "input", "output", "timer", "pause"],
            options: { message: "{type} has no text" }
        },
        {
            id: "branch-names",
            description: "When a diagram has several branches, each branch has a name.",
            kind: "required",
            severity: "warning",
            types: ["branch"],
            options: { onlyWhenMultipleBranches: true, message: "Branch has no name" }
        },
        {
            id: "unique-branch-names",
            description: "Branch names are unique (addresses refer to branches by name).",
            kind: "unique",
            severity: "error",
            types: ["branch"],
            options: { message: "Duplicate branch name '{value}' (also item {other})" }
        },
        {
            id: "question-form",
            description: "Question and Select text is phrased as a question.",
            kind: "pattern",
            severity: "warning",
            types: ["question", "select"],
            options: { pattern: "\\?\\s*$", message: "{type} text should end with '?'" }
        },
        {
            id: "action-length",
            description: "Action text stays short enough to read at a glance.",
            kind: "maxLength",
            severity: "info",
            types: ["action"],
            options: { max: 300 }
        },
        {
            id: "case-values",
            description: "Case values under one Select are filled in and unique (last case may be empty = 'else').",
            severity: "error",
            options: { allowEmptyLastCase: true, caseSensitive: false },
            check: function (ctx, o, report) {
                ctx.byType("select").forEach(function (selectId) {
                    var chain = caseChain(ctx, selectId);
                    var seen = {};
                    chain.forEach(function (id, index) {
                        var value = ctx.text(ctx.items[id]);
                        if (!value) {
                            var isLast = index === chain.length - 1;
                            if (!(isLast && o.allowEmptyLastCase)) {
                                report(id, "Case has no value");
                            }
                            return;
                        }
                        var key = o.caseSensitive ? value : value.toLowerCase();
                        if (seen[key]) {
                            report(id, "Duplicate case value '" + value + "' (also item " + seen[key] + ")");
                        } else {
                            seen[key] = id;
                        }
                    });
                });
            }
        }
    ];
});
