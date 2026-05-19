var tracing = {
    trace: function (name, value) { console.log(name, value) },
    setTimeout: function (action, delay) { return window.setTimeout(action, delay) },
    registerEvent: function (element, name, action, options) { element.addEventListener(name, action, options) }
}
var gconfig = {}
var html = html_0_1()
var edit = edit_tools()
var drakon = drakon_canvas()
var utils_instance = utils()
edit.utils = utils_instance
drakon.utils = utils_instance
drakon.html = html
drakon.edit_tools = edit
drakon.tracing = tracing
drakon.gconfig = gconfig
var widget = drakon.DrakonCanvas()
widget.init()
return widget