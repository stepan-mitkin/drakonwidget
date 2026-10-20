/*
 * Editable validation config. This is the file to change rules WITHOUT code.
 *
 * "rules"  — override any rule by id: { enabled, severity, options }
 *            severity: "error" | "warning" | "info"
 * "custom" — add new declarative rules (or replace a pack rule with the same id).
 *            kinds: required, pattern, maxLength, forbiddenWords, unique, typeCount
 *            (see validation/README.md for each kind's options)
 *
 * The body is plain JSON, so the same object can be pasted into the demo's
 * "Validation rules..." editor or stored anywhere else.
 */
(function (root, config) {
    if (typeof module === "object" && module.exports) {
        module.exports = config;
    } else {
        root.DrakonValidator.defaultConfig = config;
    }
})(typeof self !== "undefined" ? self : this,
{
    "rules": {
        "question-form": { "severity": "warning" },
        "action-length": { "options": { "max": 300 } },
        "select-cases": { "options": { "minCases": 2 } }
    },
    "custom": [
        {
            "id": "no-vague-words",
            "description": "Avoid vague words in actions (example custom rule, disabled).",
            "kind": "forbiddenWords",
            "enabled": false,
            "severity": "info",
            "types": ["action"],
            "options": { "words": ["etc", "somehow", "maybe"] }
        },
        {
            "id": "action-capitalized",
            "description": "Action text starts with a capital letter (example custom rule, disabled).",
            "kind": "pattern",
            "enabled": false,
            "severity": "info",
            "types": ["action"],
            "options": { "pattern": "^\\p{Lu}", "flags": "u", "message": "Action should start with a capital letter" }
        }
    ]
});
