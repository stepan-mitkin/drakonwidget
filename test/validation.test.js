// Run with: npm test   (node --test, Node 18+)
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const path = require("path");

const V = require("../validation/drakon-validator.js");
require("../validation/rules/structure-rules.js");
require("../validation/rules/content-rules.js");
const defaultConfig = require("../validation/rules-config.js");

function loadExamples() {
    const src = fs.readFileSync(path.join(__dirname, "../js/examples.js"), "utf8");
    return new Function(src + "\nreturn createExamples();")();
}

function base() {
    return {
        name: "T",
        items: {
            "1": { type: "end" },
            "2": { type: "branch", branchId: 0, one: "3" },
            "3": { type: "action", content: "Do it", one: "4" },
            "4": { type: "question", content: "Done?", one: "1", two: "3", flag1: 1 }
        }
    };
}

function run(diagram, config) {
    return V.createValidator(config || defaultConfig).validate(diagram);
}

function ruleIds(result) {
    return result.issues.map(i => i.ruleId);
}

function expectRule(diagram, ruleId, itemId) {
    const result = run(diagram);
    const hit = result.issues.find(i => i.ruleId === ruleId && (itemId === undefined || i.itemId === itemId));
    assert.ok(hit, `expected ${ruleId}${itemId ? " on " + itemId : ""}, got ${JSON.stringify(result.issues)}`);
    return hit;
}

test("bundled examples have no issues", () => {
    for (const d of loadExamples()) {
        const r = run(d);
        assert.deepEqual(r.issues, [], d.name);
    }
});

test("base fixture and empty diagram are clean", () => {
    assert.deepEqual(run(base()).issues, []);
    assert.deepEqual(run({ name: "new", items: {} }).issues, []);
});

test("accepts a JSON string (exportJson output)", () => {
    assert.equal(run(JSON.stringify(base())).ok, true);
});

// ---- structure pack -------------------------------------------------

test("single-end: none or two", () => {
    const d = base(); delete d.items["1"]; d.items["4"].one = "3";
    expectRule(d, "single-end");
    const d2 = base(); d2.items["9"] = { type: "end" };
    expectRule(d2, "single-end");
});

test("has-branch", () => {
    expectRule({ items: { "1": { type: "end" } } }, "has-branch");
});

test("unique-branch-ids", () => {
    const d = base();
    d.items["4"].two = "5";
    d.items["5"] = { type: "branch", branchId: 0, content: "B", one: "1" };
    expectRule(d, "unique-branch-ids", "5");
});

test("links-resolve: missing target and self link", () => {
    const d = base(); d.items["3"].one = "99";
    expectRule(d, "links-resolve", "3");
    const d2 = base(); d2.items["3"].one = "3";
    expectRule(d2, "links-resolve", "3");
});

test("required-exits: question without No, end with exit", () => {
    const d = base(); delete d.items["4"].two;
    expectRule(d, "required-exits", "4");
    const d2 = base(); d2.items["1"].one = "3";
    expectRule(d2, "required-exits", "1");
});

test("link-target-types: select must point to case", () => {
    const d = base();
    d.items["3"].one = "5";
    d.items["5"] = { type: "select", content: "Which?", one: "4" };
    expectRule(d, "link-target-types", "5");
});

test("reachable: reports only the entry of an orphan region", () => {
    const d = base();
    d.items["7"] = { type: "action", content: "Orphan", one: "8" };
    d.items["8"] = { type: "action", content: "Orphan 2", one: "1" };
    const hits = run(d).issues.filter(i => i.ruleId === "reachable");
    assert.equal(hits.length, 1);
    assert.equal(hits[0].itemId, "7");
    assert.match(hits[0].message, /and 1 item/);
});

test("end-reachable", () => {
    const d = base(); d.items["4"].one = "3";
    expectRule(d, "end-reachable", "1");
});

test("select-cases and case-values", () => {
    const d = base();
    d.items["3"].one = "5";
    d.items["5"] = { type: "select", content: "Which?", one: "6" };
    d.items["6"] = { type: "case", content: "A", one: "4", two: "7" };
    d.items["7"] = { type: "case", content: "a", one: "4" };
    expectRule(d, "case-values", "7");            // duplicate (case-insensitive)
    d.items["7"].content = "";
    assert.ok(!ruleIds(run(d)).includes("case-values"), "empty last case allowed");
    delete d.items["6"].two; delete d.items["7"];
    expectRule(d, "select-cases", "5");
});

test("loop-balance and parallel-balance", () => {
    const d = base();
    d.items["3"].one = "5";
    d.items["5"] = { type: "loopbegin", content: "For each", one: "4" };
    expectRule(d, "loop-balance");
    const p = base();
    p.items["3"].one = "5";
    p.items["5"] = { type: "parbegin", one: "4" };
    expectRule(p, "parallel-balance");
});

test("known-types", () => {
    const d = base(); d.items["3"].type = "teleport";
    expectRule(d, "known-types", "3");
});

// ---- content pack ---------------------------------------------------

test("content rules", () => {
    const d = base(); d.items["3"].content = " ";
    expectRule(d, "text-required", "3");

    const q = base(); q.items["4"].content = "Done";
    expectRule(q, "question-form", "4");

    const b = base();
    b.items["4"].two = "5";
    b.items["5"] = { type: "branch", branchId: 1, content: "", one: "1" };
    expectRule(b, "branch-names", "5");
    b.items["2"].content = "Same"; b.items["5"].content = "same";
    expectRule(b, "unique-branch-names", "5");
});

// ---- config / extensibility -----------------------------------------

test("config can disable, re-grade and re-parameterize rules", () => {
    const d = base(); d.items["4"].content = "Done";
    assert.ok(!ruleIds(run(d, { rules: { "question-form": { enabled: false } } })).includes("question-form"));
    const r = run(d, { rules: { "question-form": { severity: "error" } } });
    assert.equal(r.ok, false);
    const r2 = run(d, { rules: { "question-form": { options: { pattern: "^Done$" } } } });
    assert.ok(!ruleIds(r2).includes("question-form"));
});

test("runtime API: enableRule / setSeverity / setOptions / addRule / removeRule", () => {
    const v = V.createValidator({});
    v.setOptions("action-length", { max: 3 });
    assert.ok(v.validate(base()).issues.some(i => i.ruleId === "action-length"));
    v.enableRule("action-length", false);
    assert.ok(!v.validate(base()).issues.some(i => i.ruleId === "action-length"));
    v.addRule({ id: "no-do", kind: "forbiddenWords", types: ["action"], severity: "warning", options: { words: ["do"] } });
    assert.ok(v.validate(base()).issues.some(i => i.ruleId === "no-do"));
    v.setSeverity("no-do", "info");
    assert.equal(v.validate(base()).issues.find(i => i.ruleId === "no-do").severity, "info");
    v.removeRule("no-do");
    assert.ok(!v.listRules().some(r => r.id === "no-do"));
    assert.ok(v.getConfig().rules["action-length"]);
});

test("every declarative kind works from config", () => {
    const d = base();
    d.items["9"] = { type: "action", content: "do IT", one: "1" };
    const custom = [
        { id: "k-required", kind: "required", types: ["end"], severity: "info" },
        { id: "k-pattern", kind: "pattern", types: ["action"], options: { pattern: "^\\p{Ll}", flags: "u" } },
        { id: "k-max", kind: "maxLength", types: ["action"], options: { max: 2 } },
        { id: "k-forbidden", kind: "forbiddenWords", types: ["action"], options: { words: ["DO"] } },
        { id: "k-unique", kind: "unique", types: ["action"] },
        { id: "k-count", kind: "typeCount", options: { type: "question", max: 0 } }
    ];
    const ids = ruleIds(run(d, { custom }));
    for (const c of custom) {
        assert.ok(ids.includes(c.id), c.id);
    }
    // forbiddenWords matches whole words only
    assert.ok(!ruleIds(run(d, { custom: [{ id: "w", kind: "forbiddenWords", options: { words: ["it"] }, types: ["question"] }] })).includes("w"));
});

test("custom rule with an existing id replaces the pack rule", () => {
    const d = base(); d.items["4"].content = "Done";
    const r = run(d, { custom: [{ id: "question-form", kind: "pattern", types: ["question"], options: { pattern: "." } }] });
    assert.ok(!ruleIds(r).includes("question-form"));
});

test("code rules can be registered as a new pack", () => {
    V.registerPack("test-pack", [{
        id: "max-actions", severity: "warning", options: { max: 0 },
        check(ctx, o, report) {
            const n = ctx.byType("action").length;
            if (n > o.max) { report(null, `${n} actions`); }
        }
    }]);
    const v = V.createValidator({}, { packs: ["structure", "test-pack"] });
    assert.ok(v.validate(base()).issues.some(i => i.ruleId === "max-actions"));
    assert.ok(!v.listRules().some(r => r.pack === "content"));
});

test("blocking flag is passed through to issues and listRules", () => {
    const d = base(); d.items["4"].content = "Done";
    const v = V.createValidator({ rules: { "question-form": { blocking: true } } });
    assert.equal(v.validate(d).issues.find(i => i.ruleId === "question-form").blocking, true);
    assert.equal(v.listRules().find(r => r.id === "question-form").blocking, true);
    assert.equal(v.listRules().find(r => r.id === "single-end").blocking, null);
});

test("bad config is rejected early", () => {
    assert.throws(() => V.createValidator({ custom: [{ id: "x", kind: "nope" }] }), /unknown kind/);
    assert.throws(() => V.createValidator({ rules: { "single-end": { severity: "fatal" } } }), /Unknown severity/);
    assert.throws(() => V.createValidator({ custom: [{ kind: "required" }] }), /without id/);
});

test("a crashing rule becomes a warning instead of breaking validation", () => {
    const r = run(base(), { custom: [{ id: "bad-re", kind: "pattern", types: ["action"], options: { pattern: "(" } }] });
    const hit = r.issues.find(i => i.ruleId === "bad-re");
    assert.equal(hit.severity, "warning");
    assert.match(hit.message, /Rule crashed/);
});

test("DRAKON rules are skipped for other diagram types", () => {
    assert.deepEqual(run({ type: "graf", items: { "1": { type: "idea" } } }).issues, []);
});
