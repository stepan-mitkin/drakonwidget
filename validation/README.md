# DRAKON rules validation

A separate, pluggable module that checks DrakonWidget diagrams against DRAKON
rules. It does not modify the widget (`libs/drakonwidget.js`); it plugs into
the widget's public API (`EditSender`, `exportJson`, `undo`, `showItem`).

The widget already prevents most syntax errors while editing (icons can only be
inserted into valid sockets). This module adds what the widget does not do:

- checks diagrams loaded from JSON (files, databases, other tools, LLM output);
- semantic and text rules (branch names, case values, question form, …);
- your own rules, changeable without touching code.

## Files

| File | Role | Edit it when… |
|---|---|---|
| `drakon-validator.js` | Engine: rule registry, config merge, graph helpers, declarative rule kinds. No DRAKON rules inside. | you need a new *kind* of declarative rule |
| `rules/structure-rules.js` | Rule pack `structure`: graph and syntax rules | you change structural rules in code |
| `rules/content-rules.js` | Rule pack `content`: text rules | you change text rules in code |
| `rules-config.js` | **Editable config**: turn rules on/off, change severity/options, add rules without code | everyday rule changes |
| `drakon-validation-ui.js` + `.css` | Issue panel, Report/Strict modes, click-to-show item | you change how results are shown |
| `example.html` | Minimal integration example | — |
| `../test/validation.test.js` | Tests (`npm test`) | you add or change a rule |

Every file works in the browser (script tags) and in Node (`require`), except the UI.

## Using it with the widget

```html
<script src="libs/drakonwidget.js"></script>
<script src="validation/drakon-validator.js"></script>
<script src="validation/rules/structure-rules.js"></script>
<script src="validation/rules/content-rules.js"></script>
<script src="validation/rules-config.js"></script>
<script src="validation/drakon-validation-ui.js"></script>
```

```js
var validator = DrakonValidator.createValidator(DrakonValidator.defaultConfig)
var validation = DrakonValidationUI.create({
    validator: validator,
    getWidget: function () { return drakon },
    mount: document.body,
    mode: "report"                  // "report" | "strict" | "off"
})

drakon.setDiagram(id, diagram, validation.wrapEditSender(mySender), false)
    .then(function () { validation.validateNow() })
```

The panel sits in the **top-right corner**:

- **Mode: Report** re-validates after each edit and lists issues. Nothing is
  blocked or saved; click an issue to scroll the canvas to the item.
- **Mode: Strict** also undoes any edit that adds new *blocking* issues. By
  default blocking = severity `error` from the `structure` pack. Set
  `"blocking": true` (or `false`) on any rule in the config to change that.
- **Off** (`mode: "off"` or `ui.setMode("off")`) skips validation and hides the panel.
- **?** opens a short explanation and a **Copy issues** button that puts the
  current list on the clipboard as text. Results are shown only in the panel.
- **▴ / ▾** collapses the panel to one line.

The panel never writes styles into the diagram, so highlighting is not saved
with the document. `DrakonValidationUI.modes` lists the modes with labels and
one-line hints, for use in your own menus.

In the demo (`index.html`):

- the main menu has a **Validation** section: mode (Report / Strict / Off) with
  an explanation, **Edit rules...** and **How it works**;
- the explanation opens automatically on the first visit;
- **Rules…** / **Edit rules...** opens the full rule set as JSON. Changes are
  checked before saving, stored in `localStorage` (`drakon-validation-config`),
  and clearing the text restores the defaults.

## Using it without the widget (Node, CI, server)

```js
const DrakonValidator = require("./validation/drakon-validator.js")
require("./validation/rules/structure-rules.js")
require("./validation/rules/content-rules.js")
const config = require("./validation/rules-config.js")

const result = DrakonValidator.createValidator(config).validate(diagramJson)
// { ok: false, counts: { error: 1, warning: 0, info: 0 },
//   issues: [{ ruleId, pack, severity, itemId, message, blocking? }] }
```

`validate()` accepts the diagram object or the string from `exportJson()`.

## Changing rules

### In the config (no code)

```js
{
    "rules": {
        "question-form": { "severity": "error", "blocking": true },
        "action-length": { "options": { "max": 120 } },
        "reachable":     { "enabled": false }
    },
    "custom": [
        {
            "id": "no-vague-words",
            "kind": "forbiddenWords",
            "types": ["action"],
            "severity": "warning",
            "options": { "words": ["etc", "somehow"] }
        }
    ]
}
```

- `rules` overrides any rule by id: `enabled`, `severity` (`error` | `warning` | `info`), `blocking`, `options` (merged with the rule's defaults).
- `custom` adds declarative rules. A custom rule with the same id as a pack rule replaces it.
- `types` limits a declarative rule to these item types (omit for all).

Declarative kinds:

| kind | options | Fails when |
|---|---|---|
| `required` | `field` (default `content`), `onlyWhenMultipleBranches`, `message` | field is empty |
| `pattern` | `pattern`, `flags`, `negate`, `field`, `message` | non-empty field does not match (or matches, with `negate`) |
| `maxLength` | `max`, `field`, `message` | text is longer than `max` |
| `forbiddenWords` | `words`, `caseSensitive`, `field`, `message` | a listed whole word appears |
| `unique` | `field`, `caseSensitive`, `message` | two items have the same non-empty value |
| `typeCount` | `type`, `min`, `max`, `message` | count of `type` items is outside `[min, max]` |

Messages accept placeholders: `{type}`, `{value}`, `{max}`, `{length}`, `{word}`, `{other}`, `{n}`, `{pattern}`.

### At runtime (JavaScript)

```js
validator.enableRule("reachable", false)
validator.setSeverity("question-form", "error")
validator.setOptions("action-length", { max: 120 })
validator.addRule({ id: "x", kind: "maxLength", types: ["branch"], options: { max: 30 } })
validator.removeRule("x")
validator.listRules()     // all rules with their current settings
validator.getConfig()     // current config, ready to save
validator.setConfig(cfg)
```

### As code (a new rule pack)

```js
DrakonValidator.registerPack("my-rules", [{
    id: "max-actions-per-branch",
    description: "Keep branches short.",
    severity: "warning",
    options: { max: 12 },
    check: function (ctx, options, report) {
        ctx.branches.forEach(function (branchId) { /* … */ })
        // report(itemId | null, message)
    }
}])
```

Load the file after `drakon-validator.js`. Pick packs per validator with
`createValidator(config, { packs: ["structure", "my-rules"] })` (default: all
registered packs).

`ctx` gives: `items`, `ids`, `item(id)`, `byType(type)`, `branches` (sorted by
`branchId`), `firstBranch`, `successors(id, includeSide)`, `predecessors(id)`,
`reachableFrom(ids, includeSide)`, `text(item, field)`, `isFree(item)`,
`flowIds`, `diagramType`, `isEmpty`.

New declarative kinds: `DrakonValidator.registerKind(name, { description, options, build(rule) → check })`.

## Built-in rules

| id | pack | severity | Checks |
|---|---|---|---|
| `known-types` | structure | warning | item type is one DrakonWidget knows |
| `single-end` | structure | error | exactly one End |
| `has-branch` | structure | error | at least one branch |
| `unique-branch-ids` | structure | error | `branchId` present and unique |
| `links-resolve` | structure | error | `one`/`two`/`side` point to existing items, not to themselves |
| `required-exits` | structure | error | each type has the exits it needs (Question: Yes and No; End: none) |
| `link-target-types` | structure | error | Select→Case, Case→Case, parbegin→parbegin, side→Duration; flow never jumps into a Case |
| `reachable` | structure | warning | every flow icon is reachable from the first branch (reports the entry of each orphan region) |
| `end-reachable` | structure | error | End is reachable |
| `select-cases` | structure | warning | Select has at least `minCases` cases |
| `loop-balance` | structure | error | loop starts = loop ends |
| `parallel-balance` | structure | error | parallel blocks = parallel ends |
| `text-required` | content | warning | statement icons have text |
| `branch-names` | content | warning | with 2+ branches, each branch is named |
| `unique-branch-names` | content | error | branch names are unique |
| `question-form` | content | warning | Question/Select text ends with `?` |
| `action-length` | content | info | action text ≤ `max` characters |
| `case-values` | content | error | case values are present and unique (last case may be empty = else) |

`loop-balance` and `parallel-balance` compare counts, not nesting. Rules apply
to diagrams of type `drakon` (the default); set `diagramTypes` on a rule to use
it for other types.
