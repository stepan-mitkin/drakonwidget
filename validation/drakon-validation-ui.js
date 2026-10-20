/*
 * DrakonValidationUI — attaches a DrakonValidator to a DrakonWidget instance.
 *
 *   var ui = DrakonValidationUI.create({
 *       validator: DrakonValidator.createValidator(config),
 *       getWidget: function () { return drakon },   // the DrakonWidget
 *       mount: document.getElementById("main"),     // where the panel goes
 *       mode: "report",                             // "report" | "strict" | "off"
 *       helpOpen: false,                            // show the "?" help at start
 *       onEditRules: function (evt) { ... },        // optional "Rules..." button
 *       onModeChanged: function (mode) { ... },     // optional
 *       onHelpToggled: function (open) { ... },     // optional
 *       isBlocking: function (issue) { ... }        // optional, see below
 *   })
 *   sender = ui.wrapEditSender(sender)             // before drakon.setDiagram(...)
 *   ui.validateNow()                                // after drakon.setDiagram(...)
 *
 * Modes (also in DrakonValidationUI.modes, for menus):
 *   report — every edit is re-validated and the panel lists the problems.
 *   strict — like report, but an edit that adds new blocking issues is undone.
 *            A rule is blocking if its config says "blocking": true; otherwise
 *            blocking = severity "error" from the "structure" pack.
 *   off    — no validation, panel hidden.
 *
 * Results are shown only in the panel. The UI never writes anything into the
 * diagram (highlighting would otherwise be saved with the document).
 */
(function (root) {
    "use strict";

    var MODES = [
        {
            id: "report",
            label: "Report",
            hint: "Checks the diagram after every change and lists problems in the panel (top right). " +
                "Nothing is blocked or saved; click a problem to jump to its icon."
        },
        {
            id: "strict",
            label: "Strict",
            hint: "Like Report, but a change that adds a blocking problem (a structural error, " +
                "or a rule marked \"blocking\") is undone automatically."
        },
        {
            id: "off",
            label: "Off",
            hint: "No checks; the panel is hidden."
        }
    ];

    var HELP = [
        ["This panel", "checks the open diagram against DRAKON rules after every change."],
        ["Results", "are shown only here. Nothing is written into the diagram. Click a problem to jump to its icon; Copy puts the list on the clipboard."],
        ["Report", "lists problems; every edit is allowed."],
        ["Strict", "undoes an edit that adds a blocking problem (structural error, or a rule marked \"blocking\")."],
        ["Rules…", "turn rules on/off, change severity and options, add your own."],
        ["Severity", "error = broken diagram, warning = likely mistake, info = style hint."]
    ];

    function modeIds() {
        return MODES.map(function (m) { return m.id; });
    }

    function create(options) {
        var validator = options.validator;
        var getWidget = options.getWidget;
        var mode = modeIds().indexOf(options.mode) === -1 ? "report" : options.mode;
        var isBlocking = options.isBlocking || function (issue) {
            if (issue.blocking !== undefined) { return issue.blocking; }
            return issue.severity === "error" && issue.pack === "structure";
        };
        var last = null;
        var lastName = "";
        var acceptedBlocking = 0;
        var undoing = false;
        var scheduled = false;
        var collapsed = false;
        var helpOpen = !!options.helpOpen;

        var panel = el("div", "dv-panel");
        var header = el("div", "dv-header");
        var title = el("div", "dv-title");
        var summary = el("span", "dv-summary");
        var toggleButton = button("dv-toggle", "", "Collapse / expand");
        var controls = el("div", "dv-controls");
        var modeLabel = el("span", "dv-label");
        var modeGroup = el("div", "dv-segmented");
        var modeButtons = {};
        var helpButton = button("dv-help-button", "?", "What is this?");
        var rulesButton = button("", "Rules…", "Edit validation rules");
        var help = el("div", "dv-help");
        var notice = el("div", "dv-notice");
        var list = el("ul", "dv-list");

        modeLabel.textContent = "Mode";
        MODES.filter(function (m) { return m.id !== "off"; }).forEach(function (m) {
            var b = button("dv-seg", m.label, m.hint);
            b.addEventListener("click", function () { setMode(m.id); });
            modeButtons[m.id] = b;
            modeGroup.appendChild(b);
        });

        title.appendChild(summary);
        title.appendChild(toggleButton);
        header.appendChild(title);
        controls.appendChild(modeLabel);
        controls.appendChild(modeGroup);
        controls.appendChild(helpButton);
        if (options.onEditRules) { controls.appendChild(rulesButton); }
        header.appendChild(controls);
        buildHelp();
        panel.appendChild(header);
        panel.appendChild(help);
        panel.appendChild(notice);
        panel.appendChild(list);
        (options.mount || document.body).appendChild(panel);

        rulesButton.addEventListener("click", function (evt) { options.onEditRules(evt); });
        helpButton.addEventListener("click", function () { setHelpOpen(!helpOpen); });
        toggleButton.addEventListener("click", function () {
            collapsed = !collapsed;
            render();
        });

        function el(tag, className) {
            var e = document.createElement(tag);
            if (className) { e.className = className; }
            return e;
        }

        function button(className, text, tooltip) {
            var b = el("button", "dv-button" + (className ? " " + className : ""));
            b.type = "button";
            b.textContent = text;
            if (tooltip) { b.title = tooltip; }
            return b;
        }

        function buildHelp() {
            var dl = el("dl", "dv-help-list");
            HELP.forEach(function (row) {
                var dt = el("dt");
                dt.textContent = row[0];
                var dd = el("dd");
                dd.textContent = row[1];
                dl.appendChild(dt);
                dl.appendChild(dd);
            });
            var actions = el("div", "dv-help-actions");
            var copyButton = button("", "Copy issues", "Copy the current list as text");
            var closeButton = button("", "Hide help");
            copyButton.addEventListener("click", copyIssues);
            closeButton.addEventListener("click", function () { setHelpOpen(false); });
            actions.appendChild(copyButton);
            actions.appendChild(closeButton);
            help.appendChild(dl);
            help.appendChild(actions);
        }

        function setHelpOpen(open) {
            helpOpen = !!open;
            if (helpOpen) { collapsed = false; }
            render();
            if (options.onHelpToggled) { options.onHelpToggled(helpOpen); }
        }

        function currentDiagram() {
            var widget = getWidget();
            if (!widget || !widget.exportJson) { return null; }
            try {
                return JSON.parse(widget.exportJson());
            } catch (ex) {
                return null;
            }
        }

        function countBlocking(result) {
            return result.issues.filter(isBlocking).length;
        }

        function validateNow() {
            if (mode === "off") { last = null; render(); return null; }
            var diagram = currentDiagram();
            if (!diagram) { return null; }
            lastName = diagram.name || "";
            last = validator.validate(diagram);
            acceptedBlocking = countBlocking(last);
            render();
            if (options.onResult) { options.onResult(last); }
            return last;
        }

        function afterEdit() {
            scheduled = false;
            if (mode === "off") { return; }
            var diagram = currentDiagram();
            if (!diagram) { return; }
            var result = validator.validate(diagram);
            var blocking = countBlocking(result);
            if (mode === "strict" && !undoing && blocking > acceptedBlocking) {
                var reasons = result.issues.filter(isBlocking).map(function (i) { return i.message; });
                undoing = true;
                getWidget().undo();
                setTimeout(function () {
                    undoing = false;
                    validateNow();
                    showNotice("Edit undone (Strict mode): " + reasons.slice(0, 3).join("; "));
                }, 0);
                return;
            }
            lastName = diagram.name || "";
            last = result;
            acceptedBlocking = blocking;
            render();
            if (options.onResult) { options.onResult(last); }
        }

        function wrapEditSender(sender) {
            return {
                stop: function () { if (sender.stop) { sender.stop(); } },
                pushEdit: function (edit) {
                    sender.pushEdit(edit);
                    // The widget applies the edit to its model after pushEdit
                    // returns, so validate on the next tick.
                    if (!scheduled) {
                        scheduled = true;
                        setTimeout(afterEdit, 0);
                    }
                }
            };
        }

        function setMode(newMode) {
            if (modeIds().indexOf(newMode) === -1) { newMode = "report"; }
            var changed = newMode !== mode;
            mode = newMode;
            // Re-validate so Strict starts from the current state as its baseline.
            validateNow();
            render();
            if (changed && options.onModeChanged) { options.onModeChanged(mode); }
        }

        var noticeTimer = null;
        function showNotice(text) {
            notice.textContent = text;
            notice.style.display = "block";
            clearTimeout(noticeTimer);
            noticeTimer = setTimeout(function () { notice.style.display = "none"; }, 6000);
        }

        function plural(n, word) {
            return n + " " + word + (n === 1 ? "" : "s");
        }

        function summaryText() {
            if (!last) { return "Validation"; }
            var c = last.counts;
            if (last.issues.length === 0) { return "✓ No issues"; }
            return [plural(c.error, "error"), plural(c.warning, "warning"), c.info + " info"].join(" · ");
        }

        function issuesAsText() {
            var lines = ["DRAKON validation" + (lastName ? " of \"" + lastName + "\"" : "") +
                " (" + mode + " mode): " + summaryText()];
            (last ? last.issues : []).forEach(function (i) {
                lines.push("- [" + i.severity + "] " + i.message + " (" + i.ruleId +
                    (i.itemId ? ", item " + i.itemId : "") + ")");
            });
            return lines.join("\n");
        }

        function copyIssues() {
            var text = issuesAsText();
            var done = function () { showNotice("Copied " + (last ? last.issues.length : 0) + " issue(s) to the clipboard"); };
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text, done); });
            } else {
                fallbackCopy(text, done);
            }
        }

        function fallbackCopy(text, done) {
            var ta = el("textarea");
            ta.value = text;
            ta.style.position = "fixed";
            ta.style.opacity = "0";
            document.body.appendChild(ta);
            ta.select();
            try {
                document.execCommand("copy");
                done();
            } catch (ex) {
                showNotice("Copy failed");
            }
            document.body.removeChild(ta);
        }

        function render() {
            panel.style.display = mode === "off" ? "none" : "";
            Object.keys(modeButtons).forEach(function (id) {
                modeButtons[id].classList.toggle("dv-active", id === mode);
            });
            toggleButton.textContent = collapsed ? "▾" : "▴";
            helpButton.classList.toggle("dv-active", helpOpen);
            panel.classList.toggle("dv-collapsed", collapsed);
            panel.classList.toggle("dv-help-open", helpOpen);
            summary.textContent = summaryText();
            panel.classList.toggle("dv-has-errors", !!last && last.counts.error > 0);
            list.innerHTML = "";
            if (!last) { return; }
            last.issues.forEach(function (issue) {
                var li = el("li", "dv-issue dv-" + issue.severity);
                var badge = el("span", "dv-badge");
                badge.textContent = issue.severity;
                var msg = el("span", "dv-message");
                msg.textContent = issue.message;
                var rule = el("span", "dv-rule");
                rule.textContent = issue.ruleId + (issue.itemId ? " · item " + issue.itemId : "");
                li.appendChild(badge);
                li.appendChild(msg);
                li.appendChild(rule);
                if (issue.itemId) {
                    li.classList.add("dv-clickable");
                    li.title = "Show item " + issue.itemId;
                    li.addEventListener("click", function () { showItem(issue.itemId); });
                }
                list.appendChild(li);
            });
        }

        function showItem(itemId) {
            try {
                getWidget().showItem(itemId);
            } catch (ex) {
                // Items that are not drawn (e.g. broken links) cannot be shown.
                showNotice("Item " + itemId + " is not visible on the canvas");
            }
        }

        render();

        return {
            wrapEditSender: wrapEditSender,
            validateNow: validateNow,
            setMode: setMode,
            getMode: function () { return mode; },
            setHelpOpen: setHelpOpen,
            setCollapsed: function (value) { collapsed = !!value; render(); },
            copyIssues: copyIssues,
            issuesAsText: issuesAsText,
            getLastResult: function () { return last; },
            setValidator: function (v) { validator = v; return validateNow(); },
            destroy: function () { panel.parentNode && panel.parentNode.removeChild(panel); }
        };
    }

    root.DrakonValidationUI = {
        create: create,
        modes: MODES.map(function (m) { return { id: m.id, label: m.label, hint: m.hint }; })
    };
})(typeof self !== "undefined" ? self : this);
