(function () {
    var widgets
    var drakon
    function main() {
        widgets = createSimpleWidgets()
        widgets.init(tr)
        initToolbar()
        loadDiagrams()
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

        initDrakonWidget()
        var currentDiagram = localStorage.getItem("current-diagram")
        openDiagram(currentDiagram)
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
        var diagrams = get("diagrams-combobox")
        openDiagram(diagrams.value)
        localStorage.setItem("current-diagram", diagrams.value)
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
        var diagramObjects = getDiagramObjects()
        for (var diagram of diagramObjects.diagrams) {
            addOption(diagrams, diagram.id, diagram.name)
        }
        diagrams.value = diagramObjects.currentDiagram
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
        drakon.showInsertionSockets(type)
    }

    function loadDiagrams() {
        var list = getDiagramList()
        if (!list) {
            saveExamplesInStorage()
        }
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
        var output = {diagrams:[]}
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
                ).then(function(newContent) {
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
                ).then(function(newContent) {
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
        return {
            startEditContent: startEditContent,
            showContextMenu: widgets.showContextMenu,
            translate: tr,
            drawZones: false,
            canSelect: true,
            width: 300,
            theme: {
                lineWidth: 1,
                background: "#afddfa",
                iconBorder: "#b0c0e0",
                iconBack: "white",
                shadowColor: "rgba(0, 0, 50, 0.15)",
                icons: {
                    "question": {
                        iconBack: "darkred",                        
                        lineWidth: 0,
                        color: "yellow"
                    },
                    "loopbegin": {
                        iconBack: "blue",                        
                        lineWidth: 0,
                        color: "white"
                    },
                    "loopend": {
                        iconBack: "blue",                        
                        lineWidth: 0,
                        color: "white"
                    }                    
                }
            }        
        }
    }

    function createEditSender() {
        return {
            stop: function() {},
            pushEdit: pushEdit
        }        
    }

    function pushEdit(edit) {
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

    function openDiagram(currentDiagram) {
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
        var sender = createEditSender()
        var diagramStr = localStorage.getItem(currentDiagram)
        var diagram = JSON.parse(diagramStr)
        diagram.access = "write"

        drakon.setDiagram(
            diagram.id,
            diagram,
            sender
        )
    }

    function initDrakonWidget() {
        drakon = createDrakonWidget()        
    }

    main()
})();