(function () {
    var widgets
    var drakon
    var currentMode = "write"
    function main() {
        widgets = createSimpleWidgets()
        widgets.init(tr)
        initToolbar()
        loadDiagrams()
        loadThemes()
        var closeButton = get("close-button")
        closeButton.addEventListener("click", closeMenu)

        registerClick("create-diagram-button", createDiagram)
        registerClick("delete-diagram-button", deleteDiagram)
        registerClick("duplicate-diagram-button", duplicateDiagram)

        registerClick("set-diagram-json-button", setDiagramJson)
        registerClick("set-theme-json-button", setThemeJson)
        registerClick("reset-all-diagrams-button", resetAllDiagrams)

        registerChange("diagrams-combobox", onDiagramsChanged)
        registerChange("themes-combobox", onThemesChanged)
        registerChange("modes-combobox", onModesChanged)

        initDrakonWidget()
        initShortcuts()
        var currentDiagram = localStorage.getItem("current-diagram")
        openDiagram(currentDiagram)
        window.onresize = debounce(onResize, 500)
    }

    function initShortcuts() {
        Mousetrap.bind(['ctrl+c', 'command+c'], copy);
        Mousetrap.bind(['ctrl+v', 'command+v'], paste);
        Mousetrap.bind(['ctrl+x', 'command+x'], cut);
        Mousetrap.bind(['ctrl+z', 'command+z'], undo);
        Mousetrap.bind(['ctrl+y', 'command+y'], redo);
        Mousetrap.bind(['del', 'backspace'], deleteSelection);
        Mousetrap.bind('enter', editContent);
        Mousetrap.bind('up', arrowUp);
        Mousetrap.bind('down', arrowDown);
        Mousetrap.bind('left', arrowLeft);
        Mousetrap.bind('right', arrowRight);
    }

    function arrowUp(evt) {
        evt.preventDefault()
        drakon.arrowUp()
    }

    function arrowDown(evt) {
        evt.preventDefault()
        drakon.arrowDown()
    }

    function arrowLeft(evt) {
        evt.preventDefault()
        drakon.arrowLeft()
    }

    function arrowRight(evt) {
        evt.preventDefault()
        drakon.arrowRight()
    }

    function editContent() {
        drakon.editContent()
    }

    function deleteSelection() {
        drakon.deleteSelection()
    }

    function copy() {
        drakon.copySelection()
    }

    function paste() {
        drakon.showPaste()
    }

    function cut() {
        drakon.cutSelection()
    }

    function debounce(action, delay) {
        var timeoutId = undefined
        var onTimeout = function () {
            timeoutId = undefined
            action()
        }
        var resetDebounce = function () {
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(onTimeout, delay)
        }

        return function () {
            resetDebounce()
        }
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
        var modes = get("modes-combobox")
        currentMode = modes.value
        reloadCurrent()
        closeMenu()
    }

    function reloadCurrent() {
        var current = localStorage.getItem("current-diagram")
        openDiagram(current)
    }

    function onThemesChanged() {
        var themes = get("themes-combobox")
        localStorage.setItem("current-theme", themes.value)
        reloadCurrent()
        closeMenu()
    }

    function onDiagramsChanged() {
        var diagrams = get("diagrams-combobox")
        openDiagram(diagrams.value)
        closeMenu()
    }

    async function resetAllDiagrams() {
        var yes = await widgets.criticalQuestion("Do you want to delete ALL your diagrams?", "Delete", "Cancel")
        if (!yes) {
            return
        }

        var list = getDiagramList()
        for (var id of list) {
            localStorage.removeItem(id)
        }
        var themes = getThemes()
        for (var theme of themes) {
            localStorage.removeItem(theme)
        }
        localStorage.removeItem("diagram-list")
        localStorage.removeItem("current-diagram")
        localStorage.removeItem("current-zoom")
        localStorage.removeItem("current-theme")
        localStorage.removeItem("themes")
        location.reload()
    }

    async function setThemeJson(evt) {
        var current = localStorage.getItem("current-theme")
        var theme = JSON.parse(localStorage.getItem(current))
        var beautiful = JSON.stringify(theme, null, 4)
        var newContent = await widgets.largeBox(
            evt.clientX,
            evt.clientY,
            "Theme",
            beautiful,
            undefined
        )
        if (newContent === undefined) {
            return
        }
        var newDiagram
        try {
            newDiagram = JSON.parse(newContent)
        } catch (ex) {
            widgets.showErrorSnack("Error in JSON: " + ex.message)
            return
        }

        if (!newDiagram.name || !newDiagram.id) {
            widgets.showErrorSnack("Error in theme structure")
            return
        }

        localStorage.setItem(current, newContent)
        reloadCurrent()
        closeMenu()
    }

    async function setDiagramJson(evt) {
        var current = localStorage.getItem("current-diagram")
        var diagram = JSON.parse(localStorage.getItem(current))
        delete diagram.id
        var beautiful = JSON.stringify(diagram, null, 4)
        var newContent = await widgets.largeBox(
            evt.clientX,
            evt.clientY,
            "Diagram source",
            beautiful,
            undefined
        )
        if (newContent === undefined) {
            return
        }
        var newDiagram
        try {
            newDiagram = JSON.parse(newContent)
        } catch (ex) {
            widgets.showErrorSnack("Error in JSON: " + ex.message)
            return
        }

        if (!newDiagram.name || !newDiagram.items) {
            widgets.showErrorSnack("Error in diagram structure")
            return
        }

        localStorage.setItem(current, newContent)
        openDiagram(current)
        closeMenu()
    }

    async function deleteDiagram() {
        var list = getDiagramList()
        if (list.length == 1) {
            widgets.showErrorSnack("Cannot delete the last diagram")
            return
        }

        var yes = await widgets.criticalQuestion("Do you want to delete the current diagram", "Delete", "Cancel")
        if (!yes) {
            return
        }

        var current = localStorage.getItem("current-diagram")
        var index = list.indexOf(current)
        localStorage.removeItem(current)
        list.splice(index, 1)
        localStorage.setItem("diagram-list", JSON.stringify(list))
        var nextCurrent
        if (index < list.length) {
            nextCurrent = list[index]
        } else {
            nextCurrent = list[index - 1]
        }
        openDiagram(nextCurrent)
        closeMenu()
    }

    function duplicateDiagram() {
        var current = localStorage.getItem("current-diagram")
        var diagram = JSON.parse(localStorage.getItem(current))
        diagram.name += "-2"
        var list = getDiagramList()
        var id = generateId(list)
        var diagramStr = JSON.stringify(diagram)
        list.push(id)
        localStorage.setItem("diagram-list", JSON.stringify(list))
        localStorage.setItem(id, diagramStr)
        openDiagram(id)
        closeMenu()
    }

    async function createDiagram(evt) {
        var name = await widgets.inputBox(
            evt.clientX,
            evt.clientY,
            "Enter diagram name",
            "",
            nameNotEmpty)
        if (name) {
            var id = createEmptyDiagram(name)
            openDiagram(id)
            closeMenu()
        }
    }

    function createEmptyDiagram(name) {
        var diagram = { name: name, items: {} }
        var list = getDiagramList()
        var id = generateId(list)
        var diagramStr = JSON.stringify(diagram)
        list.push(id)
        localStorage.setItem("diagram-list", JSON.stringify(list))
        localStorage.setItem(id, diagramStr)
        return id
    }

    function initToolbar() {
        var toolbar = get("left-toolbar")
        addIconButton(toolbar, "menu.png", showMenu, "Menu")
        addVSpace(toolbar)
        addIconButton(toolbar, "zoom.png", showZoom, "Zoom")
        addVSpace(toolbar)
        addIconButton(toolbar, "undo.png", undo, "Undo. Key: Ctrl+Z")
        addIconButton(toolbar, "redo.png", redo, "Redo. Key: Ctrl+Y")
        addVSpace(toolbar)
        addInsertButton(toolbar, "action.png", "action", "Action. Key: A", "A")
        addInsertButton(toolbar, "question.png", "question", "Question. Key: Q", "Q")
        addInsertButton(toolbar, "select.png", "select", "Choice. Key: S", "S")
        addInsertButton(toolbar, "case.png", "case", "Case. Key: C", "C")
        addInsertButton(toolbar, "foreach.png", "foreach", "FOR loop. Key: L", "L")
        addVSpace(toolbar)
        addIconButton(toolbar, "silhouette.png", toggleSilhouette, "Toggle silhouette/primitive")
        addInsertButton(toolbar, "branch.png", "branch", "Silhouette branch. Key: B", "B")
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

    function showZoom(ign, evt) {
        var items = []
        addZooomLevel(items, "2500", "25%")
        addZooomLevel(items, "5000", "50%")
        addZooomLevel(items, "6667", "66.667%")
        items.push({ type: "separator" })
        addZooomLevel(items, "10000", "100%")
        items.push({ type: "separator" })
        addZooomLevel(items, "11000", "110%")
        addZooomLevel(items, "12000", "120%")
        addZooomLevel(items, "15000", "150%")
        addZooomLevel(items, "20000", "200%")
        addZooomLevel(items, "40000", "400%")
        widgets.showContextMenu(
            evt.clientX,
            evt.clientY,
            items
        )
    }

    function addZooomLevel(items, value, text) {
        items.push({
            text: text,
            action: function () { setZoom(value) }
        })
    }

    function setZoom(zoom) {
        var zoomValue = parseInt(zoom)
        drakon.setZoom(zoomValue)
        closeMenu()
    }

    function closeMenu() {
        var menu = get("menu")
        menu.style.display = "none"
    }


    function fillDiagrams(diagrams) {
        diagrams.innerHTML = ""
        var diagramObjects = getDiagramObjects()
        diagramObjects.diagrams.sort(by("name"))
        for (var diagram of diagramObjects.diagrams) {
            addOption(diagrams, diagram.id, diagram.name)
        }
        diagrams.value = diagramObjects.currentDiagram
    }

    function by(prop) {
        return function (leftObj, rightObj) {
            var left = leftObj[prop]
            var right = rightObj[prop]
            if (left < right) {
                return -1
            } else if (left > right) {
                return 1
            }

            return 0
        }
    }

    function getThemes() {
        var str = localStorage.getItem("themes")
        if (str) {
            return JSON.parse(str)
        }

        return undefined
    }

    function fillThemes(combo) {
        combo.innerHTML = ""
        var themes = getThemes()
        for (var themeId of themes) {
            var theme = JSON.parse(localStorage.getItem(themeId))
            addOption(combo, themeId, theme.name)
        }
        combo.value = localStorage.getItem("current-theme")
    }

    function fillModes(modes) {
        modes.innerHTML = ""
        addOption(modes, "write", "Read/write")
        addOption(modes, "read", "Read-only")
        addOption(modes, "no-select", "Read-only, no select")
        modes.value = currentMode
    }

    function undo() {
        drakon.undo()
    }

    function redo() {
        drakon.redo()
    }

    function toggleSilhouette() {
        drakon.toggleSilhouette()
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

    function addInsertButton(container, image, type, tooltip, shortcut) {
        var action = function () {
            insertIcon(type)
        }

        addIconButton(container, image, action, tooltip)
        Mousetrap.bind(shortcut.toLowerCase(), action)
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
        drakon.showInsertionSockets(type)
    }

    function loadDiagrams() {
        var list = getDiagramList()
        if (!list) {
            saveExamplesInStorage()
        }
    }

    function loadThemes() {
        var list = getThemes()
        if (!list) {
            saveThemesInStorage()
        }
    }

    function saveThemesInStorage() {
        var themes = createThemes()
        var ids = themes.map(function (theme) { return theme.id })
        localStorage.setItem("themes", JSON.stringify(ids))
        for (var theme of themes) {
            localStorage.setItem(theme.id, JSON.stringify(theme))
        }
        localStorage.setItem("current-theme", "theme-egg")
    }

    function getDiagramList() {
        var listStr = localStorage.getItem("diagram-list")
        var list = undefined
        if (listStr) {
            try {
                list = JSON.parse(listStr)
            } catch (ex) {
            }
        }
        return list
    }

    function saveExamplesInStorage() {
        var examples = createExamples();
        var list = []
        for (var example of examples) {
            var id = generateId(list)
            example.id = id
            list.push(id)
            var diagramStr = JSON.stringify(example)
            localStorage.setItem(id, diagramStr)
        }
        localStorage.setItem("diagram-list", JSON.stringify(list))
        localStorage.setItem("current-diagram", examples[3].id)
    }

    function generateId(list) {
        var id = "diagram-" + Math.floor(Math.random() * 1000 + 100)
        while (list.indexOf(id) != -1) {
            id = "diagram-" + Math.floor(Math.random() * 1000 + 100)
        }
        return id
    }

    function getDiagramObjects() {
        var list = getDiagramList()
        var output = { diagrams: [] }
        for (var id of list) {
            var diagramStr = localStorage.getItem(id)
            var diagram = JSON.parse(diagramStr)
            output.diagrams.push({
                id: id,
                name: diagram.name
            })
        }
        output.currentDiagram = localStorage.getItem("current-diagram")
        return output
    }

    function startEditContent(prim, ro) {
        if (prim.type === "header") {
            if (ro) {
                widgets.inputBoxRo(
                    prim.left,
                    prim.top,
                    "Name",
                    prim.content
                )
            } else {
                widgets.inputBox(
                    prim.left,
                    prim.top,
                    tr("Rename"),
                    prim.content,
                    nameNotEmpty
                ).then(function (newContent) {
                    if (newContent && newContent !== prim.content) {
                        drakon.setContent(
                            prim.id,
                            newContent
                        )
                        drakon.redraw()
                    }
                })
            }
        } else {
            if (ro) {
                widgets.largeBoxRo(
                    prim.left,
                    prim.top,
                    "",
                    prim.content
                )
            } else {
                widgets.largeBox(
                    prim.left,
                    prim.top,
                    "",
                    prim.content
                ).then(function (newContent) {
                    if (newContent !== undefined && newContent != prim.content) {
                        drakon.setContent(
                            prim.id,
                            newContent
                        )
                    }
                })
            }
        }
    }

    function tr(text) {
        console.log("tr", text)
        return text
    }

    function nameNotEmpty(text) {
        text = text || ""
        if (!text.trim()) {
            return "Name cannot be empty"
        }

        return undefined
    }

    function buildConfig() {
        var canSelect = (currentMode !== "no-select");
        var currentTheme = localStorage.getItem("current-theme")
        var config = JSON.parse(localStorage.getItem(currentTheme))
        config.startEditContent = startEditContent
        config.showContextMenu = widgets.showContextMenu
        config.translate = tr
        config.drawZones = false
        config.canSelect = canSelect
        return config
    }

    function createEditSender() {
        return {
            stop: function () { },
            pushEdit: pushEdit
        }
    }

    function pushEdit(edit) {
        console.log("pushEdit", JSON.stringify(edit, null, 4))
        var currentDiagram = localStorage.getItem("current-diagram")
        var diagramStr = localStorage.getItem(currentDiagram)
        var diagram = JSON.parse(diagramStr)
        for (var change of edit.changes) {
            if (change.id) {
                updateDiagramItem(diagram, change.id, change.op, change.fields)
            } else {
                Object.assign(diagram, change.fields)
            }
        }
        var changedDiagram = JSON.stringify(diagram)
        localStorage.setItem(currentDiagram, changedDiagram)
    }

    function updateDiagramItem(diagram, itemId, op, fields) {
        if (!diagram.items) {
            diagram.items = {}
        }
        switch (op) {
            case "insert":
                diagram.items[itemId] = fields
                break;
            case "update":
                Object.assign(diagram.items[itemId], fields)
                break;
            case "delete":
                delete diagram.items[itemId]
                break;
            default:
                throw new Error("Unsupported edit operation: " + op)
        }
    }

    function renderEditorWidget() {
        var editorArea = get("editor-area")
        var rect = editorArea.getBoundingClientRect()
        editorArea.innerHTML = ""
        var config = buildConfig()
        canvas = drakon.render(
            rect.width,
            rect.height,
            config
        )
        add(editorArea, canvas)
    }

    function openDiagram(currentDiagram) {
        renderEditorWidget()
        var sender = createEditSender()
        var diagramStr = localStorage.getItem(currentDiagram)
        var diagram = JSON.parse(diagramStr)
        if (currentMode === "write") {
            diagram.access = "write"
        } else {
            diagram.access = "read"
        }

        drakon.setDiagram(
            diagram.id,
            diagram,
            sender
        )

        localStorage.setItem("current-diagram", currentDiagram)
    }

    function onResize() {
        renderEditorWidget()
        drakon.redraw()
    }

    function initDrakonWidget() {
        drakon = createDrakonWidget()
    }

    main()
})();