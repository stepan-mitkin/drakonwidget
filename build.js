const fs = require("fs");

function build_drakonwidget() {
    const encoding = "utf8";

    const header = "function createDrakonWidget() {\n";

    const drakon_canvas = fs.readFileSync(
        "static/js/drakon_canvas.js",
        encoding
    );

    const edit_tools = fs.readFileSync(
        "static/js/edit_tools.js",
        encoding
    );

    const html_0_1 = fs.readFileSync(
        "static/js/html_0_1.js",
        encoding
    );

    const utils = fs.readFileSync(
        "static/js/utils.js",
        encoding
    );

    const launcher = fs.readFileSync(
        "static/js/launcher.js",
        encoding
    );

    const footer = "\n}";

    const content = [
        header,
        drakon_canvas,
        edit_tools,
        html_0_1,
        utils,
        launcher,
        footer
    ].join("\n");

    fs.writeFileSync(
        "libs/drakonwidget.js",
        content,
        encoding
    );
}

build_drakonwidget();