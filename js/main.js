(function () {
    var widgets
    function main() {
        widgets = createSimpleWidgets()
        widgets.init()
        initToolbar()
    }

    function initToolbar() {
        var toolbar = get("left-toolbar")
        addIconButton(toolbar, "menu.png", showMenu, "Menu")
        addVSpace(toolbar)
        addIconButton(toolbar, "undo.png", undo, "Undo")
        addIconButton(toolbar, "redo.png", redo, "Redo")
        addVSpace(toolbar)
        addInsertButton(toolbar, "action.png", "action", "Action. Key: A")
        addInsertButton(toolbar, "question.png", "question", "Question. Key: Q")
        addInsertButton(toolbar, "select.png", "select", "Choice. Key: S")
        addInsertButton(toolbar, "case.png", "case", "Case. Key: C")
        addInsertButton(toolbar, "foreach.png", "foreach", "FOR loop. Key: L")
        addVSpace(toolbar)
        addIconButton(toolbar, "silhouette.png", toggleSilhouette, "Toggle silhouette/primitive")
        addInsertButton(toolbar, "branch.png", "branch", "Silhouette branch. Key: B")
    }

    function showMenu() {

    }

    function undo() {
        console.log("undo")
    }

    function redo() {
        console.log("redo")
    }

    function toggleSilhouette() {
        console.log("toggleSilhouette")
    }

    function addVSpace(toolbar) {
        var space = div()
        space.style.height = "5px";
        add(toolbar, space)
    }

    function div(className) {
        var element = document.createElement("div")
        if (className) {
            element.className = className
        }
        return element
    }

    function addInsertButton(container, image, type, tooltip) {
        var action = function () {
            insertIcon(type)
        }

        addIconButton(container, image, action, tooltip)
    }

    function addIconButton(container, image, action, tooltip) {
        var button = widgets.createIconButton("images/" + image, action, tooltip)
        button.style.marginBottom = "3px"
        add(container, button)
        var br = document.createElement("br")
        add(container, br)
    }

    function get(id) {
        var element;
        element = document.getElementById(id);
        if (element) {
            return element;
        } else {
            throw new Error('get: Element with id not found: ' + id);
        }
    }

    function add(parent, child) {
        parent.appendChild(child);
    }

    function addOption(select, value, text) {
        var option;
        option = createElement('option', { value: value });
        addText(option, text);
        add(select, option);
        return;
    }

    function insertIcon(type) {
        console.log(type)
    }

    main()
})();