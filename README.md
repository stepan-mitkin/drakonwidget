# DrakonWidget

Current version: 0.8.1

A JavaScript widget for viewing and editing drakon flowcharts

## Online demo:

https://stepan-mitkin.github.io/drakonwidget/


## Download

DrakonWidget is a plain JavaScript file with no dependencies.

[drakonwidget.js](https://stepan-mitkin.github.io/drakonwidget/libs/drakonwidget.js)


## How to use DrakonWidget

__Include drakonwidget.js in the HTML page.__

```html
<script src="<your location for js-files>/drakonwidget.js"></script>
```

__Create an instance of DrakonWidget.__

```javascript
var drakon = createDrakonWidget()
```

__Build the configuration object.__

Provide the required callbacks: __startEditContent__ and __showContextMenu__. See the configuration reference.

```javascript
function buildConfig() {
    var config = {}
    config.startEditContent = startMyContentEditor
    config.showContextMenu = showMyCuteContextMenu
    return config
}
```

__Call render() and insert the widget into the DOM.__

```javascript
function rebuildWidgetElement() {
    var editorArea = document.getElementById("editor-area")
    var rect = editorArea.getBoundingClientRect()
    editorArea.innerHTML = ""
    var config = buildConfig()
    var widgetElement = drakon.render(
        rect.width,
        rect.height,
        config
    )
    editorArea.appendChild(widgetElement);
}
```

__Implement and create an EditSender object.__

```javascript
function createEditSender() {
    return {
        stop: function () { },
        pushEdit: function(edit) { console.log(edit) }
    }
}
```

__Load the diagram into the widget.__

```javascript

var sender = createEditSender()
var diagram = getDiagramFromServer(diagramId)
drakon.setDiagram(
    diagramId,
    diagram,
    sender
)
```

__When the widget must change its size, call render() and redraw().__

```javascript
rebuildWidgetElement()
drakon.redraw()
```

## Support

Write to drakon.editor@gmail.com if you need help integrating DrakonWidget.


## Source code

https://app.drakon.tech/ide/doc/drakon_widget_10/1


## Configuration reference

A miminal example of the configuration object:

```javascript
var config = {
    startEditContent: startMyContentEditor, // My function
    showContextMenu: showMyContextMenu // My function 
}
```

Another example of the configuration object:

```javascript
var config = {
    startEditContent: startMyContentEditor, // My function
    showContextMenu: showMyContextMenu, // My function
    translate: tr, // My function
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
                iconBack: "blue",
                iconBorder: "black",
                borderWidth: 0,
                color: "yellow"
            }
        }
    }
}
```

|Name|Description|Data type|Required|Default value|
|---|---|---|---|---|
|branch|The text label of new silhouette branches.|text||Branch|
|buildContentDiv|Builds the content of an icon. See reference below.|function||buildMulitlineDiv|
|canSelect|When set to 'false' disables editing and selection.|boolean||true|
|canvasLabels|The font for the "Yes", "No" labels.|CSS font||14px Arial|
|drawZones|Technical visualization for lianas.|boolean||false|
|end|The text label for the End icon.|text||End|
|exit|The text label for the last silhouette branch.|text||Exit|
|font|Icon font|CSS font||14px Arial|
|getClipboard|Gets the current clipboard value. See reference below.|function|||
|headerFont|The font for the header icon.|CSS font||bold 18px Arial|
|lineHeight|Line height for icons.|double||44621|
|maxHeight|The maximum icon height.|integer||600|
|metre|The miminum distance between icons.|integer||20|
|minWidth|The miminum width of an icon.|integer||100|
|no|The "No" label.|text||No|
|padding|Padding inside icons.|integer||10|
|setClipboard|Puts a value to the clipboard. See reference below.|function|||
|showContextMenu|Shows a context menu.|function|required||
|socketBody|The color of sockets.|CSS color||yellow|
|socketBorder|The color of socket border.|CSS color||black|
|socketRadius|The socket visual radius.|integer||10|
|socketTouchRadius|The socket touch radius.|integer||10|
|startEditContent|Starts editing of the icon's content. See reference below.|function|required||
|theme|The theme object. See the Theme reference.|object|||
|touchRadius|The touch radius for junctions|integer||5|
|translate|The text translation function.|function|||
|width|The maximum with of an icon.|integer||500|
|yes|The "Yes" label.|text||Yes|

## Theme reference

|Name|Description|Data type|Default value|
|---|---|---|---|
|background|The diagram background.|CSS color|#74a8fc|
|backText|The color of the "Yes" and "No" labels.|CSS color|black|
|borderWidth|The width of icon border.|integer|1|
|candyBorder|The border color of the selection mark.|CSS color|black|
|candyFill|The color of the selection mark.|CSS color|#00ff00|
|color|The text color.|CSS color|black|
|iconBack|The icon background.|CSS color|white|
|iconBorder|The icon border color.|CSS color|black|
|icons|Icon-specific configuration.|object||
|lines|The lines color.|CSS color|black|
|lineWidth|The width of connecting lines on the diagram.|integer|1|
|scrollBar|The scrollbar color.|CSS color|rgba(0, 0, 0, 0.3)|
|scrollBarHover|The hover scrollbar color.|CSS color|black|
|shadowBlur|shadowBlur for icon shadows.|double|6|
|shadowColor|shadowColor for icon shadows. Set to empty string to disable icon shadows.|CSS color|rgba(0, 0, 0, 0.2)|

__icons__ object contains icon-specific theme elements:

- iconBack
- iconBorder
- color
- borderWidth

Icon types:

- action
- address
- branch
- case
- end
- header
- loopbegin
- loopend
- params
- question
- select

### buildContentDiv

Builds the content of an icon. Returns an HTML element.

Signature

```
function buildContentDiv(type, content, config, font, textAlign, color)
```

Arguments

|Name|Data type|Description|
|---|---|---|
|type|text|The node type: action, question, header, etc.|
|content|text|The node content. Could be a string with JSON if you decide so.|
|config|object|The configuration object|
|textAlign|CSS text-align|Text align: left, right, center|
|color|CSS color|The text color|



### getClipboard

Returns an object from the clipboard. Can return undefined if the clipboard is empty.

```
function getClipboard()
```

The returned object

|Name|Data type|Description|
|---|---|---|
|type|text|The type of the object|
|content|object|The clipboard content|


### setClipboard

Puts an object to the clipboard.

```
function setClipboard(type, content)
```

Arguments

|Name|Data type|Description|
|---|---|---|
|type|text|The type of the object.|
|content|object|The object to put to the clipboard.|

### showContextMenu

Shows a context menu at a specified point.

```
function showContextMenu(left, top, items)
```

Arguments

|Name|Data type|Description|
|---|---|---|
|left|integer|The client X-coordinate of the menu left side. |
|top|integer|The client Y-coordinate of the menu top side. |
|items|array|An array of the menu items|

An example of __items__ argument

```javascript
var items = [
    {text: "Copy", action: someFunction1},
    {text: "Cut", action: someFunction2},
    {type:"separator"},
    {text: "Delete", action: someFunction3, icon: "delete.png"}
]
```


### startEditContent

Starts editing the content of an icon.
When the user wants to save the edited content, call the __setContent__ method on the widget.

If the user cancels editing, do not do anything.

Note that the content of the icon _must be a string_.
It could be a JSON. The actual format is determined by the provided __startEditContent__ and __buildContentDiv__ functions.

```
function startEditContent(item, isReadonly)
```

Arguments

|Name|Data type|Description|
|---|---|---|
|item|object|The item to edit. |
|isReadonly|boolean|Is the diagram in read-only mode?|

__item__ object reference:

|Name|Data type|Description|
|---|---|---|
|id|text|The item id.|
|type|text|The type of the item: action, question, select, etc.|
|content|text|The content of the item.|
|left|integer|The x-coordinate of the left side of the icon.|
|top|integer|The y-coordinate of the left side of the icon.|
|width|integer|The width of the icon.|
|height|integer|The width of the icon.|


### translate

Translates the text of the context menu items to the target language.

Returns a string. Must return a value.

```
function translate(textToTranslate)
```

Text strings that will be translated:

- Copy
- Cut
- Paste
- Delete
- Edit content
- Swap "Yes" and "No"
- Add parameters
- Insert branch with End

Note that the words that appear on the diagram (Yes, No, End, Exit, Branch) are set
in the config. See the Configuration reference.

## DrakonWidget methods

### arrowDown

Moves the selection to the item down

```
function arrowDown()
```

### arrowLeft

Moves the selection to the item to the left

```
function arrowLeft()
```

### arrowRight

Moves the selection to the item to the right

```
function arrowRight()
```

### arrowUp

Moves the selection to the item up

```
function arrowUp()
```

### copySelection

Copies the selected items to the clipboard

```
function copySelection()
```

### cutSelection

Copies the selected items to the clipboard and deletes them.

```
function cutSelection()
```

### deleteSelection

Deletes the selected items.

```
function deleteSelection()
```

### editContent

Invokes the content editor for the currently selected item (if any).

```
function editContent()
```

### redo

Performs the redo of the previously undone action.

```
function redo()
```


### redraw

Draws the diagram on the widget's canvas.

```
function redraw()
```


### render

Creates and returns the DOM element that contains the widget.
The application must integrate the returned element in the page before calling any other methods on the widget.

Call __render__ after each change of the widget size.

```
function render(width, height, config)
```

|Name|Data type|Description|
|---|---|---|
|width|integer|The width of the widget in px|
|height|integer|The height of the widget in px|
|config|object|The configuration object. See the Configuration reference|

### setContent

Sets the content of an item.

```
function setContent(itemId, content)
```

|Name|Data type|Description|
|---|---|---|
|itemId|text|The id of the item|
|content|text|The new content. Content must be a string.|


### setDiagram

Loads a diagram into the widget.

```
function setDiagram(diagramId, diagram, editSender)
```

|Name|Data type|Description|
|---|---|---|
|diagramId|text|The id of the diagram|
|diagram|object|The diagram. See the Diagram data model. Takes ownership of the diagram object.|
|editSender|object|The widget will send edits performed on the diagram to the __editSender__ object. See the EditSender reference.|

### setZoom

Sets the zoom level.

```
function setZoom(zoomLevel)
```

|Name|Data type|Description|
|---|---|---|
|zoomLevel|integer|Percent times 100. For example, 100% - 10000, 50% - 5000, 125% - 12500|


### showInsertionSockets

Shows the insertion sockets. Prepares the diagram for inserting new items.

```
function showInsertionSockets(type)
```

|Name|Data type|Description|
|---|---|---|
|type|text|The type of the item to insert.|

Item types that can be inserted:

- action
- question
- select
- case
- foreach
- branch

### showPaste

Shows the paste sockets. Prepares the diagram for inserting items from the clipboard.

```
function showPaste()
```

### toggleSilhouette

If the diagram is a primitive, converts the diagram into a silhouette.

If the diagram is a silhouette, converts the diagram into a primitive.

```
function toggleSilhouette()
```

### undo

Performs the undo of the previous action.

```
function redo()
```

## EditSender

The application must send a reference to an object that will receive the changes that the user performs on the diagram.

That object must have two method:

- pushEdit
- stop

### pushEdit

Saves the changes in an external storage, for example in a file or in a database.

```
function pushEdit(edit)
```

Example: rename the diagram.

```javascript
var edit = {
    "id": "diagram-890", // The diagram id
    "changes": [
        {
            "fields": {
                "name": "New name"
            },
            "op": "update"
        }
    ]
}
```

Example: add parameters to the diagram.

```javascript
var edit = {
    "id": "diagram-890",
    "changes": [
        {
            "fields": {
                "params": "param1\nparam2"
            },
            "op": "update"
        }
    ]
}
```

Example: delete an item

```javascript
var edit = {
    "id": "diagram-890",
    "changes": [
        {
            "id": "7",
            "op": "update", // The item above is redirected to the item below the deleted one
            "fields": {
                "one": "9"
            }
        },
        {
            "id": "8",
            "op": "delete" // Delete item 8
        }
    ]
}
```

Example: insert an action item

```javascript
var edit = {
    "id": "diagram-890",
    "changes": [
        {
            "id": "14",
            "op": "insert", // Insert a new item
            "fields": {
                "type": "action",
                "content": "",
                "one": "9"
            }
        },
        {
            "id": "7",
            "op": "update", // Redirect the item above to the new item
            "fields": {
                "one": "14"
            }
        }
    ]
}
```

Example: edit the content of an item

```javascript
var edit = {
    "id": "diagram-890",
    "changes": [
        {
            "id": "14",
            "fields": {
                "content": "Hello world!"
            },
            "op": "update"
        }
    ]
}
```

### stop

Stops all running actions that are related to the current diagram.

```
function stop()
```

## Diagram data model

A minimal diagram that can be sent in the __setDiagram__ method (for example, a new diagram):

```javascript
var diagram = {
    name: "Hello",
    access: "write",
    items: {}
}
```

A minimal diagram with some content:

```javascript
var diagram = {
    name: "Minimal",
    access: "write",
    params: "param1\nparam2"
    items: {
        "1": {
            "type": "end"
        },
        "2": {
            "type": "branch",
            "branchId": 0,
            "one": "3"
        },
        "3": {
            "type": "action",
            "content": "Hello!",
            "one": "1"
        }
    }
}

```

The first icon on the diagram is the __branch__ icon with the lowest __branchId__.


### Diagram object

|Name|Description|Data type|Required|
|---|---|---|---|
|name|The name of the diagram|text|required|
|access|Access, can be _read_ or _write_.|text|required|
|params|The content of the parameters icon|text||
|items|The items of the diagram|object|required|

__items__ is a dictionary where the keys are item ids.

### Item object

|Name|Description|Data type|Required|
|---|---|---|---|
|type|The type of the item|text|required|
|content|The content. Must be a string.|text||
|one|The id of the next item below.|text||
|two|The id of the next item to the right.|text||
|flag1|The orientation of the Yes and No labes in the Question icon.|integer||
|branchId|The branch ordinal of the Branch icon.|integer||
