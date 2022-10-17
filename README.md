# DrakonWidget

A JavaScript widget for viewing and editing drakon flowcharts

## Online demo:

https://stepan-mitkin.github.io/drakonwidget/


## Download

DrakonWidget is plain JavaScript file with no dependencies.

[drakonwidget.js](https://raw.githubusercontent.com/stepan-mitkin/drakonwidget/c77a471128df69cfa6600de6f07ac4f9e7edfefb/libs/drakonwidget.js)


## Source code

https://app.drakon.tech/ide/doc/drakon_widget_10/1


## Configuration reference

An example of the configuration object.

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
function buildMulitlineDiv(type, content, config, font, textAlign, color)
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

Starts editing of an icon's content.
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

