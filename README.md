# DrakonWidget

Current version: 1.4.7

DrakonWidget is a JavaScript widget for viewing and editing drakon flowcharts.

[DrakonHub for Desktop](https://github.com/stepan-mitkin/drakonhub_desktop) is based on DrakonWidget.

## Online demo:

https://stepan-mitkin.github.io/drakonwidget/


## Download

DrakonWidget is a plain JavaScript file with no dependencies. You can use DrakonWidget with any framework of without one.

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
    maxWidth: 300,
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
|allowResize|__true__ means the user can change the width of some items on the diagram.|boolean||true|
|branch|The text label of new silhouette branches.|text||Branch|
|branchFont|The font for the Branch icon.|CSS font||bold 14px Arial|
|buildIconCore|Builds the content of an icon. See Core object reference below.|function|||
|canSelect|When set to 'false' disables editing and selection.|boolean||true|
|canvasIcons|__false__ means icon content will be represented as DOM elements. __true__ means icon content will be rendered to canvas.|boolean||false|
|canvasLabels|The font for the "Yes", "No" labels.|CSS font||14px Arial|
|centerContent|__true__ means the content is horizontally centered in icons (different from textAlign). Supported only when __canvasIcons__==__true__|boolean||false|
|commentPadding|The width of the grey border on Comment icon|integer||10|
|drawZones|Technical visualization for lianas.|boolean||false|
|editorWatermark|When true, watermark is rendered both on exported diagrams and on canvas.|boolean||false|
|end|The text label for the End icon.|text||End|
|exit|The text label for the last silhouette branch.|text||Exit|
|font|Icon font|CSS font||14px Arial|
|getClipboard|Gets the current clipboard value. See reference below.|function|||
|headerFont|The font for the header icon.|CSS font||bold 18px Arial|
|iconRadius|The radius of rounded icon angles.|integer||0|
|insertionPadding|The width of side bars on Insertion icon|integer||10|
|lineHeight|Line height for icons.|double||1.3|
|lineRadius|The radius of rounded line angles.|integer||0|
|maxHeight|The maximum icon height.|integer||600|
|metre|The miminum distance between icons.|integer||20|
|maxWidth|The maximum with of an icon.|integer||500|
|minWidth|The miminum width of an icon.|integer||100|
|no|The "No" label.|text||No|
|onSelectionChanged|Runs when the currently selected items change.|function|||
|onZoomChanged|Runs when the user has changed the zoom from the widget.|function|||
|padding|Padding inside icons.|integer||10|
|padding|Padding inside icons.|integer||10|
|parallelWidth|The distance between the two horizontal lines (concurrent processes)|integer|5|
|setClipboard|Puts a value to the clipboard. See reference below.|function|||
|showContextMenu|Shows a context menu.|function|required||
|socketBody|The color of sockets.|CSS color||yellow|
|socketBorder|The color of socket border.|CSS color||black|
|socketRadius|The socket visual radius.|integer||10|
|socketTouchRadius|The socket touch radius.|integer||10|
|startEditContent|Starts editing of the icon's content. See reference below.|function|required||
|startEditLink|Starts editing of the icon's link. See reference below.|function|required if links are used||
|startEditSecondary|Starts editing of the icon's secondary content. See reference below.|function|required is secondary content is used||
|startEditDiagramStyle|Starts editing of the diagrams's style. See reference below.|function|||
|startEditStyle|Starts editing of the icon's style. See reference below.|function|||
|textFormat|The format of the __contant__ and __secondary__ fields. Can be: __plain__, __markdown__, __html__|text||plain|
|theme|The theme object. See the Theme reference.|object|||
|touchRadius|The touch radius for junctions|integer||5|
|translate|The text translation function.|function|||
|triangleHeight|The height of the triangle part of Branch, Address, and Case.|integer||20|
|watermark|An optional text to show on exported diagrams.|text|||
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
|commentBack|The color of the border on Comment icon|CSS color|grey|
|iconBack|The icon background.|CSS color|white|
|iconBorder|The icon border color.|CSS color|black|
|icons|Icon-specific configuration.|object||
|internalLine|The color of internal lines for Case, Insertion icons and cycle marks.|CSS color|black|
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
- etc.

Icon types:

- action
- address
- branch
- case
- end
- header
- etc.

### buildIconCore

Creates a __Core__ object that builds the icon's content.
Each icon must have a separate __Core__ object.

See the Core reference.

Signature

```
function buildIconCore(context)
```

Properties of the __context__ object

|Name|Data type|Description|
|---|---|---|
|type|text|The node type: action, question, header, etc.|
|content|text|The node content. Could be a string with JSON if you decide so.|
|style|object|The node style. Can be null. Expected properties: iconBack, iconBorder, color, borderWidth, font|
|config|object|The configuration object|
|flag1|integer|The Yes/No orientation (Question icon only)|
|paddingLeft|integer|An additional left padding|
|paddingRight|integer|An additional right padding|



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

### getCursorForItem

Returns the CSS cursor for the item under the pointer, for example "pointer" or "grab".

```
function getCursorForItem(prim, pos, evt)
```

|Name|Data type|Description|
|---|---|---|
|prim|object|The item under the cursor.|
|pos|object|The mouse position in diagram coordinates.|
|evt|object|The original mouse event.|

### onItemClick

The callback to run when the user clicks an item with the mouse.

```
function onItemClick(prim, pos, evt)
```

|Name|Data type|Description|
|---|---|---|
|prim|object|The item under the cursor.|
|pos|object|The mouse position in diagram coordinates.|
|evt|object|The original mouse event.|

### onSelectionChanged

A callback that is called every time the currently selected objects are changed.

```
function onSelectionChanged(items)
```

An array of __item__ objects. Can be empty.

|Name|Data type|Description|
|---|---|---|
|id|text|The id of the item.|
|type|text|The type of the item: action, question, etc.|
|content|string|The content of the icon|
|style|object|The style of the icon|

If there are no selected items on the diagram, the __item__ object is null.

### onZoomChanged

A callback that is called when the user has changed the zoom level from inside the widget,
for example with Ctrl+Mouse wheel.

```
function onZoomChanged(newZoomValue)
```
|Name|Data type|Description|
|---|---|---|
|newZoomValue|integer|Percentage multiplied by 100. 100% == 10000, 150% == 15000|

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
    {hint:"copy_one", text: "Copy", action: someFunction1},
    {hint:"cut_one", text: "Cut", action: someFunction2},
    {type:"separator"},
    {hint:"delete_one", text: "Delete", action: someFunction3, icon: "delete.png"}
]
```

Use the __hint__ property to filter out the items you want to hide.

### startEditContent

Starts editing the content of an icon. The existing content is passed in the __item.content__ property.
When the user wants to save the edited content, call the __setContent__ method on the widget.

If the user cancels editing, do not do anything.

Note that the content of the icon _must be a string_.
It could be a JSON. The actual format is determined by the provided __startEditContent__ and __buildIconCore__ functions.

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
|secondary|text|The second content of the item.|
|link|text|The link of the item.|
|left|integer|The x-coordinate of the left side of the icon.|
|top|integer|The y-coordinate of the left side of the icon.|
|width|integer|The width of the icon.|
|height|integer|The width of the icon.|

### startEditLink

Starts editing the link property of an icon. The existing link is passed in the __item.link__ property.
When the user wants to save the edited link, call the __setLink__ method on the widget.

If the user cancels editing, do not do anything.

Note that the link _must be a string_.

```
function startEditLink(item, isReadonly)
```

Arguments

|Name|Data type|Description|
|---|---|---|
|item|object|The item to edit. |
|isReadonly|boolean|Is the diagram in read-only mode?|


### startEditSecondary

Starts editing the secondary content of an icon. The existing secondary content is passed in the __item.secondary__ property.
When the user wants to save the edited secondary content, call the __setSecondary__ method on the widget.

If the user cancels editing, do not do anything.

Note that the secondary content _must be a string_.

```
function startEditSecondary(item, isReadonly)
```

Arguments

|Name|Data type|Description|
|---|---|---|
|item|object|The item to edit. |
|isReadonly|boolean|Is the diagram in read-only mode?|


### startEditDiagramStyle

Starts editing the style of the diagram. The existing diagram style is passed in the __oldStyle__ argument.

When the user wants to save the edited diagram style, call the __setDiagramStyle__ method on the widget.

If the user cancels editing, do not do anything.

```
function startEditDiagramStyle(oldStyle, x, y)
```

Arguments

|Name|Data type|Description|
|---|---|---|
|oldStyle|object|The existing diagram style.|
|x|number|The x-coordinate of the mouse cursor.|
|y|number|The y-coordinate of the mouse cursor.|

### startEditStyle

Starts editing the style of the selected items. The existing style is passed in the __oldStyle__ argument.

When the user wants to save the edited style, call the __setStyle__ method on the widget.

If the user cancels editing, do not do anything.

```
function startEditStyle(ids, oldStyle, x, y, accepted)
```

Arguments

|Name|Data type|Description|
|---|---|---|
|ids|array of strings|The ids of the currently selected items.|
|oldStyle|object|The existing style of the items.|
|x|number|The x-coordinate of the mouse cursor.|
|y|number|The y-coordinate of the mouse cursor.|
|accepted|object|The keys of the __accepted__ argument are the supported style properties.|

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
- Insert Branch with End
- Insert Branch
- Insert Branch to the left
- Insert Branch to the right
- Insert Case
- Insert Case to the left
- Insert Case to the right
- Add path
- Add path to the left
- Add path to the right
- Add vertex
- Add remove vertex
- Send to back
- Bring to front
- Delete path
- Edit upper text
- Edit link
- Go to branch
- Increase margin
- Reset margin
- Flip
- Format
- Diagram format
- Bring to front
- Send to back
- Change image

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

### exportCanvas

Creates and returns a temporary CANVAS element that contains the whole diagram.

This functions works only when __config.canvasIcons__ == __true__.


```
function exportCanvas(zoom100)
```

zoom100 the zoom level in percent multiplied by 100. 50% - 5000.

### exportJson

Builds and returns a string that contains a JSON representation of the diagram.

```
function exportJson()
```

### getDiagramProperties

Returns an object with the properties of the diagram.

```
function getDiagramProperties()
```

### getLoadedImages

Returns a list of the images in the current diagram.

```
function getLoadedImages()
```

Returns an object where the keys are the diagram-unique ids of the images and the values are
the images themselves in BASE64 encoding.

Example:

```
{
    "id1": {
        "content": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP...."
    },
    "id2": {
        "content": "data:image/gif;base64,R0lGODlhAQABAIBBBBBBBP...."
    }    
}
```


### getVersion

Returns the widget's version.

```
function getVersion()
```

### getZoom

Returns the current zoom value in percent multiplied by 100. For example: 100% - 10000, 50% - 5000.

```
function getZoom()
```

## goHome

Scrolls the diagram to show its left-top corner.

```
function goHome()
```

## onChange

Call when a diagram should be modified from outside, for example renamed from the list of diagrams.

```
function onChange(change)
```

### redo

Performs the redo of the previously undone action. Returns a promise.

```
function redo()
```

Returns a promise.

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


### patchDiagramStyle

Updates some fields of the diagram style

```
function patchDiagramStyle(style)
```

Arguments


|Name|Data type|Description|
|---|---|---|
|style|object|The properties of new diagram style to update|

Return value

An array of strings. See __setDiagramStyle__.


### setContent

Sets the content of an item.

```
function setContent(itemId, content)
```

Arguments

|Name|Data type|Description|
|---|---|---|
|itemId|text|The id of the item|
|content|text|The new content. Content must be a string.|

Return value

An array of strings. Each element in the array is a CSS font declaration (for example ["bold 18px Arimo", "14px Arimo"]).
The array contains all fonts that are used in the diagram.

### setDiagramStyle

Sets the diagram style

```
function setDiagramStyle(style)
```

Arguments


|Name|Data type|Description|
|---|---|---|
|style|object|The new diagram style|

Return value

An array of strings. Each element in the array is a CSS font declaration (for example ["bold 18px Arimo", "14px Arimo"]).
The array contains all fonts that are used in the diagram.


### setSecondary

Sets the secondary content of an item.

```
function setSecondary(itemId, content)
```

Arguments

|Name|Data type|Description|
|---|---|---|
|itemId|text|The id of the item|
|content|text|The new secondary content. Content must be a string.|

Return value

An array of strings. Each element in the array is a CSS font declaration (for example ["bold 18px Arimo", "14px Arimo"]).
The array contains all fonts that are used in the diagram.


### setStyle

Sets the style for a set of items.

```
function setStyle(ids, style)
```

Arguments

|Name|Data type|Description|
|---|---|---|
|ids|array of strings|The ids of the items to change the style for|
|style|object|The new style|

Return value

An array of strings. Each element in the array is a CSS font declaration (for example ["bold 18px Arimo", "14px Arimo"]).
The array contains all fonts that are used in the diagram.

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

Return value

A promise with an array of strings. Each element in the array is a CSS font declaration (for example ["bold 18px Arimo", "14px Arimo"]).
The array contains all fonts that are used in the diagram.

### setDiagramProperty

Sets a property of the diagram: name, params, description.

```
function setDiagramProperty(name, value)
```

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
function showInsertionSockets(type, imageData)
```

|Name|Data type|Description|
|---|---|---|
|type|text|The type of the item to insert.|
|imageData|object|The image to assign to the object.|

__imageData__ can be one of the two options:

{ "id": "image-id-1"} - a reference to an image already existing in the diagram

{"content: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP..."} - a new image to include in the diagram


Item types that can be inserted:

- action
- question
- select
- case
- foreach
- branch
- insertion
- comment
- parblock
- par
- timer
- pause
- duration
- shelf
- process
- input
- output
- ctrlstart
- ctrlend
- drakon-image

### showItem

Selects the item and scrolls the diagram to make the item visible on the canvas.

```
function showItem(itemId)
```

|Name|Data type|Description|
|---|---|---|
|itemId|text|The id of the item to show.|


### showPaste

Shows the paste sockets. Prepares the diagram for inserting items from the clipboard.

```
function showPaste()
```

### swapYesNo

Swaps "Yes" and "No" exits of the Question icon.

```
function swapYesNo(id)
```

|Name|Data type|Description|
|---|---|---|
|itemId|text|The id of the Question item.|


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

Returns a promise.

## Core object

Every icon has an instance of the core object.
The core object builds the content of the icon.

If __config.canvasIcons__ == __false__ the core object must implement __buildDom__ method.
__buildDom__ creates and returns a DOM element which the widget will show in the icon.

If __config.canvasIcons__ == __true__ the core object must implement three other methods:

- __measure__
- __commit__
- __renderContent__

First, the widget will call __measure__ to find out how much space the icon needs.

Then, the widget calls __commit__ which makes the icon arrange its content so that the icon fits within the given width.

Every time the diagram is painted, __renderContent__ method is called.

__measure__ and __commit__ are called one time each.

__renderContent__ is called many times.

In addition, the core object can optionally implement __getSecondaryHeight__ method. __getSecondaryHeight__ is needed
for double icons like Shelf, Input, Output, Process.


### buildDom

Builds the HTML to be shown inside an icon.

If __buildDom__ returns null, DrakonWidget will use a default method for building the content.
This way, it is possible to override the content only for certain icons.

For example, if you want to create your own content only for Action icons, add a check like this:

```javascript
if (self.type === "action ") { // self.type comes from context.type
    return buildSomeContent()
} else {
    return undefined
}
```


```
function buildDom(fonts)
```

Arguments

|Name|Data type|Description|
|---|---|---|
|fonts|object|Output parameter. Add all fonts used by this icon as the keys to the __fonts__ object|

Example

```javascript
fonts["14px Arial"] = true
fonts["italic bold 14px Arial"] = true
```

### __measure__

Takes the first attempt to arrange the content of the icon and measures the space that the icon needs.
__measure__ must respect __maxWidth__, __minWidth__, __maxHeight__, and __minHeight__ configuration values.

Returns the desired size.

If the returned value is __undefined__, it means the core object does not handle this specific icon.
In such a case, the widget will call the default algorithm.

```
function measure(ctx, fonts)
```

Arguments

|Name|Data type|Description|
|---|---|---|
|ctx|Canvas 2d context|The 2d context of the canvas that the icon will later render to|
|fonts|object|Output parameter. Add all fonts used by this icon as the keys to the __fonts__ object|

Return value

|Name|Data type|Description|
|---|---|---|
|width|number|The desired width|
|height|number|The desired height|


### __commit__

Arranges the content of the icon so that the icon fits within the specified width.

Returns the actual height that the icon needs for the specified width.

```
function commit(width)
```

Arguments

|Name|Data type|Description|
|---|---|---|
|width|integer|The final width of the icon|

Return value

|Name|Data type|Description|
|---|---|---|
|width|number|Must be equal to the __width__ argument|
|height|number|The actual height|

### __renderContent__

Renders the content of the icon to the 2d context of the canvas.

```
function renderContent(left, top, ctx)
```

Arguments


|Name|Data type|Description|
|---|---|---|
|left|number|The x-coordinate of the left edge of the icon|
|top|number|The y-coordinate of the top edge of the icon|
|ctx|Canvas 2d context|The 2d context to render the icon to|


### getSecondaryHeight

Returns the height in px of the upper part of the icon (for icons like Shelf, Process, etc.)
This method is optional.

Returns integer.

```
function getSecondaryHeight()
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
    params: "param1\nparam2",
    style: "{\"background\":\"grey\"}",
    items: {
        "1": {
            type: "end"
        },
        "2": {
            type: "branch",
            branchId: 0,
            one: "3"
        },
        "3": {
            type: "action",
            content: "Hello!",
            one: "1",
            style: "{\"color\":\"yellow\"}"
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
|style|The diagram style. Must be a string with JSON|text||
|items|The items of the diagram|object|required|

__items__ is a dictionary where the keys are item ids.

### Item object

|Name|Description|Data type|Required|
|---|---|---|---|
|type|The type of the item|text|required|
|content|The content. Must be a string.|text||
|secondary|The secondary content (for icons like Shelf). Must be a string.|text||
|link|The link. Must be a string.|text||
|one|The id of the next item below.|text||
|two|The id of the next item to the right.|text||
|side|The id of the duration item to the left.|text||
|flag1|The orientation of the Yes and No labes in the Question icon.|integer||
|branchId|The branch ordinal of the Branch icon.|integer||
|margin|The additional left margin (in metre units) of the branch.|integer||
|style|The item style. Must be a string with JSON|text||

