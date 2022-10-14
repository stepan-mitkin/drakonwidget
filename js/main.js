(function () {
    var widgets
    function main() {
        widgets = createSimpleWidgets()
        widgets.init()
        initToolbar()
        var closeButton = get("close-button")
        closeButton.addEventListener("click", closeMenu)

        registerClick("create-diagram-button", createDiagram)
        registerClick("delete-diagram-button", deleteDiagram)
        registerClick("set-diagram-json-button", setDiagramJson)
        registerClick("set-theme-json-button", setThemeJson)
        registerClick("reset-all-diagrams-button", resetAllDiagrams)

        registerChange("diagrams-combobox", onDiagramsChanged)
        registerChange("themes-combobox", onThemesChanged)
        registerChange("modes-combobox", onModesChanged)
    }

    function registerChange(id, action) {
        var element = get(id)
        element.addEventListener("change", action)
    }

    function registerClick(id, action) {
        var element = get(id)
        element.addEventListener("click", action)
    }

    function onModesChanged() {
        console.log("onModesChanged")
    }

    function onThemesChanged() {
        console.log("onThemesChanged")

    }

    function onDiagramsChanged() {
        console.log("onDiagramsChanged")

    }

    function resetAllDiagrams() {
        console.log("resetAllDiagrams")

    }

    function setThemeJson() {
        console.log("setThemeJson")

    }

    function setDiagramJson() {
        console.log("setDiagramJson")

    }

    function deleteDiagram() {
        console.log("deleteDiagram")

    }

    function createDiagram() {
        console.log("createDiagram")

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
        var menu = get("menu")
        var diagrams = get("diagrams-combobox")
        var themes = get("themes-combobox")
        var modes = get("modes-combobox")
        fillDiagrams(diagrams)
        fillModes(modes)
        fillThemes(themes)
        menu.style.display = "inline-block"
    }

    function closeMenu() {
        var menu = get("menu")
        menu.style.display = "none"
    }


    function fillDiagrams(diagrams) {
        diagrams.innerHTML = ""
        addOption(diagrams, "x1", "Какой дрон выбрать начинающему?")
        addOption(diagrams, "x2", "Дыхательное упражнение для выхода из тела")
        addOption(diagrams, "x3", "Определить парадигму языка программирования")
        diagrams.value = "x1"
    }

    function fillThemes(themes) {
        themes.innerHTML = ""
        addOption(themes, "x1", "Ночная синева")
        addOption(themes, "x2", "Стандартная")
        addOption(themes, "x3", "Ещё какая-то")
        themes.value = "x1"
    }

    function fillModes(modes) {
        modes.innerHTML = ""
        addOption(modes, "x1", "Read/write")
        addOption(modes, "x2", "Read-only")
        addOption(modes, "x3", "Read-only, no select")
        modes.value = "x1"
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
        option = document.createElement('option');
        option.value = value
        addText(option, text);
        add(select, option);
    }

    function addText(element, text) {
        var newNode;
        newNode = document.createTextNode(text);
        add(element, newNode);
    }

    function insertIcon(type) {
        console.log(type)
    }

    main()
})();