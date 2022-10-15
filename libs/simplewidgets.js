function createSimpleWidgets() {
    function simplewidgets_0_1() {
        var unit = {};
        unit.onError = function (error) {
            console.error(error);
        };
        var html;
        function createIconButton(image, callback, tooltip) {
            var className, element;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    className = 'generic-button simple-button icon-button';
                    element = img(image, className);
                    element.style.marginRight = '2px';
                    registerAction(element, 'click', callback);
                    if (tooltip) {
                        addTooltip(element, tooltip);
                        __state = '6';
                    } else {
                        __state = '6';
                    }
                    break;
                case '6':
                    return element;
                default:
                    return;
                }
            }
        }
        function addTooltip(element, text) {
            var logic;
            logic = Tooltip_create(text);
            logic.run();
            registerAction(element, 'mousemove', logic.onMove);
            registerAction(element, 'mouseout', logic.onOut);
            return;
        }
        function Tooltip_create(text) {
            var timeoutId, left, top, _, evt;
            var me = {
                state: '2',
                type: 'Tooltip'
            };
            function _main_Tooltip(__resolve, __reject) {
                try {
                    while (true) {
                        switch (me.state) {
                        case '2':
                            me.state = '6';
                            return;
                        case '5':
                            me.state = '10';
                            return;
                        case '12':
                            me.state = '14';
                            return;
                        case '18':
                            clearTimeout(timeoutId);
                            me.state = '25';
                            break;
                        case '19':
                            timeoutId = setTimeout(me.onTimeout, 3000);
                            showTooltip(left, top, text);
                            me.state = '12';
                            break;
                        case '20':
                            left = evt.clientX;
                            top = evt.clientY;
                            timeoutId = setTimeout(me.onTimeout, 1000);
                            me.state = '5';
                            break;
                        case '21':
                            left = evt.clientX;
                            top = evt.clientY;
                            me.state = '5';
                            break;
                        case '24':
                            clearTimeout(timeoutId);
                            me.state = '2';
                            break;
                        case '25':
                            hideTooltip();
                            me.state = '2';
                            break;
                        default:
                            return;
                        }
                    }
                } catch (ex) {
                    unit.onError(ex);
                    me.state = undefined;
                    __reject(ex);
                }
            }
            me.run = function () {
                me.run = undefined;
                return new Promise(function (__resolve, __reject) {
                    me.onMove = function (___, _evt_) {
                        _ = ___;
                        evt = _evt_;
                        switch (me.state) {
                        case '6':
                            me.state = '20';
                            _main_Tooltip(__resolve, __reject);
                            break;
                        case '10':
                            me.state = '21';
                            _main_Tooltip(__resolve, __reject);
                            break;
                        default:
                            return;
                        }
                    };
                    me.onTimeout = function () {
                        switch (me.state) {
                        case '10':
                            me.state = '19';
                            _main_Tooltip(__resolve, __reject);
                            break;
                        case '14':
                            me.state = '25';
                            _main_Tooltip(__resolve, __reject);
                            break;
                        default:
                            return;
                        }
                    };
                    me.onOut = function () {
                        switch (me.state) {
                        case '10':
                            me.state = '24';
                            _main_Tooltip(__resolve, __reject);
                            break;
                        case '14':
                            me.state = '18';
                            _main_Tooltip(__resolve, __reject);
                            break;
                        default:
                            return;
                        }
                    };
                    _main_Tooltip(__resolve, __reject);
                });
            };
            return me;
        }
        function Tooltip(text) {
            var __obj = Tooltip_create(text);
            return __obj.run();
        }
        function showTooltip(left, top, text) {
            hideTooltip();
            unit.tooltipElement = div({
                display: 'inline-block',
                position: 'absolute',
                left: left + 10 + 'px',
                top: top + 10 + 'px',
                text: text,
                color: 'black',
                background: '#ffffd0',
                padding: '10px',
                'border-radius': '5px',
                zIndex: 10,
                font: '14px Arial'
            });
            html.add(document.documentElement, unit.tooltipElement);
            return;
        }
        function hideTooltip() {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (unit.tooltipElement) {
                        html.remove(unit.tooltipElement);
                        unit.tooltipElement = undefined;
                        __state = '1';
                    } else {
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function removeQuestions() {
            var root;
            root = html.get('question-root');
            html.clear(root);
            return;
        }
        function criticalQuestion_create(title, okText, cancelText) {
            var root, buttons, message, _var2, _var3, _var4, _var5;
            var me = {
                state: '2',
                type: 'criticalQuestion'
            };
            function _main_criticalQuestion(__resolve, __reject) {
                try {
                    while (true) {
                        switch (me.state) {
                        case '2':
                            root = html.get('question-root');
                            _var2 = div('question-back');
                            html.add(root, _var2);
                            message = div({
                                padding: '10px',
                                text: title
                            });
                            _var4 = createBadButton(okText, me.yes);
                            _var5 = createSimpleButton(cancelText, me.no);
                            buttons = div({
                                'text-align': 'right',
                                'padding-bottom': '5px'
                            }, _var4, _var5);
                            _var3 = div('question-body shadow', message, buttons);
                            html.add(root, _var3);
                            me.state = '12';
                            return;
                        case '13':
                            removeQuestions();
                            me.state = undefined;
                            __resolve(true);
                            return;
                        case '17':
                            removeQuestions();
                            me.state = undefined;
                            __resolve(false);
                            return;
                        default:
                            return;
                        }
                    }
                } catch (ex) {
                    unit.onError(ex);
                    me.state = undefined;
                    __reject(ex);
                }
            }
            me.run = function () {
                me.run = undefined;
                return new Promise(function (__resolve, __reject) {
                    me.yes = function () {
                        switch (me.state) {
                        case '12':
                            me.state = '13';
                            _main_criticalQuestion(__resolve, __reject);
                            break;
                        default:
                            return;
                        }
                    };
                    me.no = function () {
                        switch (me.state) {
                        case '12':
                            me.state = '17';
                            _main_criticalQuestion(__resolve, __reject);
                            break;
                        default:
                            return;
                        }
                    };
                    _main_criticalQuestion(__resolve, __reject);
                });
            };
            return me;
        }
        function criticalQuestion(title, okText, cancelText) {
            var __obj = criticalQuestion_create(title, okText, cancelText);
            return __obj.run();
        }
        function popPopup(skipCancel) {
            var popup;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (unit.popups.length === 0) {
                        __state = '1';
                    } else {
                        popup = unit.popups.pop();
                        html.remove(popup.element);
                        if (popup.onCanceled) {
                            if (skipCancel) {
                                __state = '1';
                            } else {
                                popup.onCanceled();
                                __state = '1';
                            }
                        } else {
                            __state = '1';
                        }
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function pushPopup(element, x, y, onCanceled) {
            var root, start;
            start = 100;
            element.style.zIndex = start + unit.popups.length;
            root = html.get('popup-root');
            html.add(root, element);
            positionPopup(element, x, y);
            unit.popups.push({
                element: element,
                onCanceled: onCanceled
            });
            return;
        }
        function popupOnGlobalClick(empty, evt) {
            var hitPopup;
            hitPopup = findHitPopup(evt);
            removePopupsAbove(hitPopup);
            return;
        }
        function removePopups() {
            removePopupsAbove(-1);
            return;
        }
        function getPopupIndex(element) {
            var popup, i;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    i = 0;
                    __state = '5';
                    break;
                case '5':
                    if (i < unit.popups.length) {
                        popup = unit.popups[i].element;
                        if (popup === element) {
                            return i;
                        } else {
                            i++;
                            __state = '5';
                        }
                    } else {
                        return -1;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function positionPopup(element, x, y) {
            var rect;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    x = Math.floor(x);
                    y = Math.floor(y);
                    element.style.display = 'inline-block';
                    element.style.position = 'fixed';
                    element.style.left = x + 'px';
                    element.style.top = y + 'px';
                    __state = '16';
                    break;
                case '15':
                    element.style.left = x + 'px';
                    element.style.top = y + 'px';
                    return;
                case '16':
                    rect = element.getBoundingClientRect();
                    if (rect.right >= window.innerWidth) {
                        x = window.innerWidth - rect.width;
                        __state = '20';
                    } else {
                        __state = '20';
                    }
                    break;
                case '20':
                    if (x < 0) {
                        x = 0;
                        __state = '22';
                    } else {
                        __state = '22';
                    }
                    break;
                case '22':
                    if (rect.bottom >= window.innerHeight) {
                        y = window.innerHeight - rect.height;
                        __state = '24';
                    } else {
                        __state = '24';
                    }
                    break;
                case '24':
                    if (y < 0) {
                        y = 0;
                        __state = '15';
                    } else {
                        __state = '15';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function findHitPopup(evt) {
            var current, index;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    current = evt.target;
                    __state = '9';
                    break;
                case '6':
                    return index;
                case '9':
                    index = getPopupIndex(current);
                    if (index === -1) {
                        current = current.parentElement;
                        if (current) {
                            __state = '9';
                        } else {
                            __state = '6';
                        }
                    } else {
                        __state = '6';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function removePopupsAbove(index) {
            var popup, i;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    i = unit.popups.length - 1;
                    __state = '5';
                    break;
                case '4':
                    i--;
                    __state = '5';
                    break;
                case '5':
                    if (i > index) {
                        popup = unit.popups.pop();
                        html.remove(popup.element);
                        if (popup.onCanceled) {
                            popup.onCanceled();
                            __state = '4';
                        } else {
                            __state = '4';
                        }
                    } else {
                        return;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function pushSemiModalPopup(element, x, y, onCanceled) {
            var root, start, container, back, zIndex, zIndexBack, ordinal;
            start = 100;
            ordinal = unit.popups.length;
            zIndex = start + ordinal * 10;
            zIndexBack = zIndex - 1;
            element.style.zIndex = zIndex;
            root = html.get('popup-root');
            container = createDiv(root, '');
            back = createDiv(container, 'full-screen');
            back.style.zIndex = zIndexBack;
            html.add(container, element);
            positionPopup(element, x, y);
            unit.popups.push({
                element: container,
                onCanceled: onCanceled
            });
            registerAction(back, 'mousedown', removePopupsAbove, ordinal - 1);
            return;
        }
        function initPopups() {
            unit.popups = [];
            addEventWithCapture(window.document, 'click', popupOnGlobalClick);
            return;
        }
        function createComboBox(options, value, onChange, width) {
            var container, valueText, className, cbOptions, _var2, _var3, item, _var4;
            var __state = '7';
            while (true) {
                switch (__state) {
                case '2':
                    width = width || '100%';
                    className = 'generic-button simple-button';
                    container = div(className, {
                        width: width,
                        'line-height': '30px',
                        'position': 'relative'
                    });
                    html.addText(container, valueText);
                    _var4 = createArrowDownIcon({});
                    html.add(container, _var4);
                    cbOptions = {
                        container: container,
                        options: options,
                        value: value,
                        onChange: onChange
                    };
                    registerAction(container, 'click', buildComboPopup, cbOptions);
                    __state = '5';
                    break;
                case '5':
                    return container;
                case '7':
                    _var2 = options;
                    _var3 = 0;
                    __state = '11';
                    break;
                case '11':
                    if (_var3 < _var2.length) {
                        item = _var2[_var3];
                        if (item.id === value) {
                            valueText = item.text;
                            __state = '2';
                        } else {
                            _var3++;
                            __state = '11';
                        }
                    } else {
                        throw new Error('Bad combobox value: ' + value);
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function buildComboPopup(cbOptions) {
            var items, rect, _var2;
            items = cbOptions.options.map(function (item) {
                _var2 = makeComboItem(item, cbOptions.onChange);
                return _var2;
            });
            rect = cbOptions.container.getBoundingClientRect();
            showContextMenu(rect.left, rect.bottom, items, {
                shift: 0,
                width: rect.width + 'px',
                modal: true
            });
            return;
        }
        function makeComboItem(item, onChange) {
            return {
                text: item.text,
                action: onChange,
                arg: item.id
            };
        }
        function createArrowDownIcon() {
            var canvas, style, ctx, left, top, right, bottom, middle, size, padding;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    size = 30;
                    padding = 8;
                    style = {
                        display: 'inline-block',
                        margin: '0px',
                        'vertical-align': 'bottom',
                        position: 'absolute',
                        top: '0px',
                        right: '0px'
                    };
                    canvas = html.createElement('canvas', {
                        width: size,
                        height: size
                    }, [style]);
                    __state = '7';
                    break;
                case '6':
                    return canvas;
                case '7':
                    ctx = canvas.getContext('2d');
                    left = padding;
                    top = padding;
                    right = size - padding;
                    bottom = size - padding;
                    middle = size / 2;
                    ctx.fillStyle = 'rgb(69, 90, 100)';
                    ctx.beginPath();
                    ctx.moveTo(left, top);
                    ctx.lineTo(right, top);
                    ctx.lineTo(middle, bottom);
                    ctx.closePath();
                    ctx.fill();
                    __state = '6';
                    break;
                default:
                    return;
                }
            }
        }
        function snackProc_create(snackDiv) {
            var me = {
                state: '2',
                type: 'snackProc'
            };
            function _main_snackProc(__resolve, __reject) {
                try {
                    while (true) {
                        switch (me.state) {
                        case '2':
                            me.state = '3';
                            setTimeout(function () {
                                _main_snackProc(__resolve, __reject);
                            }, 3000);
                            return;
                        case '3':
                            snackDiv.style.opacity = 0;
                            me.state = '6';
                            setTimeout(function () {
                                _main_snackProc(__resolve, __reject);
                            }, 500);
                            return;
                        case '6':
                            removeSnack();
                            me.state = undefined;
                            __resolve({ ok: true });
                            return;
                        default:
                            return;
                        }
                    }
                } catch (ex) {
                    unit.onError(ex);
                    me.state = undefined;
                    __reject(ex);
                }
            }
            me.run = function () {
                me.run = undefined;
                return new Promise(function (__resolve, __reject) {
                    _main_snackProc(__resolve, __reject);
                });
            };
            return me;
        }
        function snackProc(snackDiv) {
            var __obj = snackProc_create(snackDiv);
            return __obj.run();
        }
        function showErrorSnack(text) {
            var snackDiv, root, _var2, _var3, _var4;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    removeSnack();
                    __state = '5';
                    break;
                case '4':
                    return;
                case '5':
                    root = html.get('snack-root');
                    _var2 = div('snack-field-back');
                    _var4 = div('middle-v', {
                        text: text,
                        'padding-left': '10px'
                    });
                    _var3 = div('snack-field-text', _var4);
                    snackDiv = div('snack-container shadow', _var2, _var3);
                    html.add(root, snackDiv);
                    unit.snack = snackProc_create(snackDiv);
                    unit.snack.run();
                    __state = '4';
                    break;
                default:
                    return;
                }
            }
        }
        function removeSnack() {
            var container;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (unit.snack) {
                        unit.snack.state = undefined;
                        unit.snack = undefined;
                        __state = '3';
                    } else {
                        __state = '3';
                    }
                    break;
                case '3':
                    container = html.get('snack-root');
                    html.clear(container);
                    return;
                default:
                    return;
                }
            }
        }
        function showContextMenu(x, y, items, options) {
            var shift, menu, _var2, _var3, item, _var4;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    removePopups();
                    shift = 10;
                    menu = div('context-menu shadow');
                    if (options) {
                        if ('shift' in options) {
                            shift = options.shift;
                            if ('width' in options) {
                                menu.style.width = options.width;
                                __state = '_item2';
                            } else {
                                __state = '_item2';
                            }
                        } else {
                            __state = '_item2';
                        }
                    } else {
                        __state = '_item2';
                    }
                    break;
                case '5':
                    if (_var3 < _var2.length) {
                        item = _var2[_var3];
                        _var4 = makeContextMenuItem(item);
                        html.add(menu, _var4);
                        _var3++;
                        __state = '5';
                    } else {
                        if (options) {
                            if (options.modal) {
                                pushSemiModalPopup(menu, x + shift, y + shift);
                                __state = '1';
                            } else {
                                __state = '23';
                            }
                        } else {
                            __state = '23';
                        }
                    }
                    break;
                case '23':
                    pushPopup(menu, x + shift, y + shift);
                    __state = '1';
                    break;
                case '_item2':
                    _var2 = items;
                    _var3 = 0;
                    __state = '5';
                    break;
                default:
                    return;
                }
            }
        }
        function makeContextMenuItem(item) {
            var line, callback, _var2, _var3, _var4, _var5;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (item.type === 'separator') {
                        _var4 = div('context-menu-separator');
                        return _var4;
                    } else {
                        line = div('context-menu-item');
                        if (item.icon) {
                            _var2 = html.createElement('img', {
                                draggable: false,
                                src: item.icon
                            }, ['context-menu-icon-passive']);
                            html.add(line, _var2);
                            __state = '_item3';
                        } else {
                            __state = '_item3';
                        }
                    }
                    break;
                case '_item3':
                    _var3 = div('context-menu-item-text', { text: item.text });
                    html.add(line, _var3);
                    callback = function (arg, evt) {
                        removePopups();
                        _var5 = item.action(arg, evt);
                        return _var5;
                    };
                    registerAction(line, 'click', callback, item.arg);
                    return line;
                default:
                    return;
                }
            }
        }
        function clone(src) {
            var dst;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (src) {
                        dst = {};
                        Object.assign(dst, src);
                        return dst;
                    } else {
                        src;
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function addEventWithCapture(element, eventName, action, arg) {
            var callback;
            callback = function (evt) {
                actionWrapper(action, arg, evt);
            };
            element.addEventListener(eventName, callback, true);
            return;
        }
        function img(src, className) {
            var _var2;
            className = className || '';
            _var2 = html.createElement('img', {
                src: src,
                draggable: false
            }, [className]);
            return _var2;
        }
        function registerAction(element, eventName, action, arg) {
            var callback;
            callback = function (evt) {
                actionWrapper(action, arg, evt);
            };
            element.addEventListener(eventName, callback);
            return;
        }
        function div() {
            var args, properties, _var2;
            args = Array.prototype.slice.call(arguments);
            properties = {};
            _var2 = html.createElement('div', properties, args);
            return _var2;
        }
        function actionWrapper(action, arg, evt) {
            try {
                action(arg, evt);
            } catch (ex) {
                onUnhandledError(ex);
                return;
            }
            return;
        }
        function onUnhandledError(ex) {
            var _var2;
            console.log('onUnhandledError');
            console.error(ex);
            try {
                _var2 = tr('ÐŸÑ€Ð¾Ð¸Ð·Ð¾ÑˆÐ»Ð° Ð¾ÑˆÐ¸Ð±ÐºÐ°');
                widgets.showErrorSnack(_var2 + ': ' + ex.message);
            } catch (ex) {
            }
            return;
        }
        function createDiv(parent, className) {
            var element;
            element = div(className);
            html.add(parent, element);
            return element;
        }
        function link(src, className, child) {
            var url, _var2, _var3;
            _var3 = appRoot();
            url = _var3 + src;
            _var2 = html.createElement('a', { href: url }, [
                className,
                child
            ]);
            return _var2;
        }
        function tr(text) {
            var _var2;
            if (unit.tr) {
                _var2 = unit.tr(text);
                return _var2;
            } else {
                return text;
            }
        }
        function createSimpleButton(text, action, arg) {
            var button;
            button = div('generic-button simple-button', { text: text });
            registerAction(button, 'click', action, arg);
            return button;
        }
        function createBadButton(text, action, arg) {
            var button;
            button = div('generic-button bad-button', { text: text });
            registerAction(button, 'click', action, arg);
            return button;
        }
        function createDefaultButton(text, action, arg) {
            var button;
            button = div('generic-button default-button', { text: text });
            registerAction(button, 'click', action, arg);
            return button;
        }
        function createCommonStyles() {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    html.addClass('textarea', 'resize: none');
                    html.addClass('body', 'font: 14px Arial');
                    html.addClass('.title', 'font: bold 16px Arial', 'margin-top: 10px');
                    html.addClass('.shadow', 'box-shadow: 0px 0px 7px 2px rgba(0,0,0,0.27)');
                    html.addClass('.full-screen', 'display: inline-block', 'position: fixed', 'left: 0px', 'top: 0px', 'width: 100vw', 'height: 100vh');
                    html.addClass('input, textarea', 'font: 14px Arial', 'width: 100%', 'padding: 5px');
                    html.addClass('.screen-container', 'display:inline-block', 'width:100%', 'height:100%');
                    html.addClass('.middle', 'display: inline-block', 'position: absolute', 'left: 50%', 'top: 50%', 'transform: translate(-50%, -50%)');
                    html.addClass('.middle-v', 'display: inline-block', 'position: absolute', 'left: 0px', 'top: 50%', 'transform: translateY(-50%)');
                    html.addClass('.middle-h', 'display: inline-block', 'position: absolute', 'left: 50%', 'top: 0px', 'transform: translateX(-50%)');
                    html.addClass('.header1', 'font-weight: bold', 'font-size: 18px', 'text-align: center');
                    __state = '56';
                    break;
                case '54':
                    return;
                case '56':
                    html.addClass('.generic-button', 'display:inline-block', 'vertical-align: top', 'padding-left: 10px', 'padding-right: 10px', 'cursor: pointer', 'border-radius: 3px', 'margin-right: 5px', 'line-height:34px', 'user-select: none');
                    html.addClass('.generic-button:active', 'transform: translateY(2px)');
                    html.addClass('.simple-button', 'background: white', 'border: solid 1px #a0a0a0');
                    html.addClass('.simple-button:hover', 'background: #9fd694');
                    html.addClass('.default-button', 'border: solid 1px #038009', 'background: #038009', 'color: white');
                    html.addClass('.default-button:hover', 'border: solid 1px #004a04', 'background: #004a04');
                    html.addClass('.bad-button', 'border: solid 1px darkred', 'background: darkred', 'color: white');
                    html.addClass('.bad-button:hover', 'border: solid 1px red', 'background: red');
                    html.addClass('.icon-button', 'height: 34px', 'width: 34px');
                    html.addClass('img.icon-button', 'display: inline-block', 'vertical-align: top', 'padding:0px', 'margin:0px');
                    __state = '67';
                    break;
                case '67':
                    html.addClass('.question-back', 'display: inline-block', 'position: fixed', 'left: 0px', 'top: 0px', 'width: 100vw', 'height: 100vh', 'background: rgba(0, 0, 0, 0.2)', 'z-index: 2000');
                    html.addClass('.question-body', 'display: inline-block', 'position: fixed', 'left: 50%', 'transform: translateX(-50%)', 'top: 0px', 'max-width: 100vw', 'width: 400px', 'background: white', 'z-index: 2001');
                    __state = '70';
                    break;
                case '70':
                    html.addClass('.context-menu-item', 'display:block', 'line-height:30px', 'margin: 0px', 'user-select: none', 'cursor: default', 'white-space: nowrap');
                    html.addClass('.context-menu-item:hover', 'background:#9fd694');
                    html.addClass('.context-menu', 'display: inline-block', 'position: absolute', 'background: white', 'max-width: 100vw', 'min-width: 200px', 'border: solid 1px #a0a0a0', 'padding: 10px');
                    html.addClass('.context-menu-separator', 'background: #a0a0a0', 'height: 1px', 'margin-top:5px', 'margin-bottom:5px');
                    html.addClass('.context-menu-item-text', 'display: inline-block', 'vertical-align: bottom', 'width: calc(100% - 30px)', 'white-space: nowrap', 'overflow: hidden', 'padding-left: 5px');
                    html.addClass('img.context-menu-icon-passive', 'display: inline-block', 'vertical-align: bottom', 'width: 30px', 'height: 30px');
                    __state = '73';
                    break;
                case '73':
                    html.addClass('.snack-container', 'display: inline-block', 'position: fixed', 'left: 20px', 'top: 20px', 'width: 400px', 'max-width: calc(100vw - 20px)', 'height: 80px', 'background: white', 'z-index: 500', 'border: solid 1px #a0a0a0', 'transition: opacity 500ms');
                    html.addClass('.snack-field-back', 'display: inline-block', 'position: absolute', 'left: 0px', 'top: 0px', 'width: 30px', 'height: 80px', 'background: darkred');
                    html.addClass('.snack-field-text', 'display: inline-block', 'position: absolute', 'left: 30px', 'top: 0px', 'width: 370px', 'height: 80px');
                    __state = '54';
                    break;
                default:
                    return;
                }
            }
        }
        function init(tr) {
            createCommonStyles();
            initPopups();
            unit.tr = tr;
            return;
        }
        function inputBox_create(x, y, title, text, check) {
            var input, ok, cancel, bottom, dialog, error, errorMessage, shift, x2, y2, _var2, _var3, _var4;
            var me = {
                state: '2',
                type: 'inputBox'
            };
            function _main_inputBox(__resolve, __reject) {
                try {
                    while (true) {
                        switch (me.state) {
                        case '2':
                            input = html.createElement('input', { type: 'text' });
                            _var2 = tr('Accept');
                            ok = createDefaultButton(_var2, me.confirm);
                            _var3 = tr('Cancel');
                            cancel = createSimpleButton(_var3, removePopups);
                            cancel.style.margin = '0px';
                            bottom = div({
                                'padding-top': '5px',
                                'text-align': 'right'
                            }, ok, cancel);
                            error = div({
                                'padding-top': '5px',
                                'color': 'dark-red',
                                display: 'none'
                            });
                            me.state = '32';
                            break;
                        case '20':
                            removePopups();
                            me.state = undefined;
                            __resolve(text);
                            return;
                        case '21':
                            me.state = '43';
                            break;
                        case '22':
                            shift = 10;
                            x2 = x + shift;
                            y2 = y + shift;
                            removePopups();
                            pushPopup(dialog, x2, y2);
                            input.value = text;
                            input.setSelectionRange(0, input.value.length);
                            input.focus();
                            me.state = '21';
                            break;
                        case '32':
                            registerAction(input, 'keydown', onInputKeyDown, me);
                            _var4 = div({
                                text: title,
                                'padding-bottom': '5px'
                            });
                            dialog = div('shadow', {
                                width: '400px',
                                'max-width': '100vw',
                                padding: '5px',
                                background: 'white',
                                border: 'solid 1px #a0a0a0'
                            }, _var4, input, bottom);
                            me.state = '22';
                            break;
                        case '43':
                            me.state = '49';
                            return;
                        case '51':
                            text = input.value.trim();
                            errorMessage = checkInputText(text, check);
                            if (errorMessage) {
                                error.style.display = 'block';
                                html.setText(error, errorMessage);
                                me.state = '43';
                            } else {
                                me.state = '20';
                            }
                            break;
                        case '63':
                            text = undefined;
                            me.state = '20';
                            break;
                        default:
                            return;
                        }
                    }
                } catch (ex) {
                    unit.onError(ex);
                    me.state = undefined;
                    __reject(ex);
                }
            }
            me.run = function () {
                me.run = undefined;
                return new Promise(function (__resolve, __reject) {
                    me.cancel = function () {
                        switch (me.state) {
                        case '49':
                            me.state = '63';
                            _main_inputBox(__resolve, __reject);
                            break;
                        default:
                            return;
                        }
                    };
                    me.confirm = function () {
                        switch (me.state) {
                        case '49':
                            me.state = '51';
                            _main_inputBox(__resolve, __reject);
                            break;
                        default:
                            return;
                        }
                    };
                    _main_inputBox(__resolve, __reject);
                });
            };
            return me;
        }
        function inputBox(x, y, title, text, check) {
            var __obj = inputBox_create(x, y, title, text, check);
            return __obj.run();
        }
        function onLargeInputKeyDown(self, evt) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (evt.key === 'Enter') {
                        if (evt.ctrlKey) {
                            evt.preventDefault();
                            self.confirm();
                            __state = '1';
                        } else {
                            __state = '1';
                        }
                    } else {
                        if (evt.key === 'Escape') {
                            evt.preventDefault();
                            self.cancel();
                            __state = '1';
                        } else {
                            __state = '1';
                        }
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function checkInputText(text, check) {
            var _var2;
            if (check) {
                _var2 = check(text);
                return _var2;
            } else {
                return undefined;
            }
        }
        function onInputKeyDown(self, evt) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (evt.key === 'Enter') {
                        self.confirm();
                        __state = '1';
                    } else {
                        if (evt.key === 'Escape') {
                            self.cancel();
                            __state = '1';
                        } else {
                            __state = '1';
                        }
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function largeBox_create(x, y, title, text, check) {
            var input, ok, cancel, bottom, dialog, error, errorMessage, shift, x2, y2, _var2, _var3, _var4;
            var me = {
                state: '2',
                type: 'largeBox'
            };
            function _main_largeBox(__resolve, __reject) {
                try {
                    while (true) {
                        switch (me.state) {
                        case '2':
                            input = html.createElement('textarea', {}, [{ height: '300px' }]);
                            _var2 = tr('Accept');
                            ok = createDefaultButton(_var2, me.confirm);
                            _var3 = tr('Cancel');
                            cancel = createSimpleButton(_var3, removePopups);
                            cancel.style.margin = '0px';
                            bottom = div({
                                'padding-top': '5px',
                                'text-align': 'right'
                            }, ok, cancel);
                            error = div({
                                'padding-top': '5px',
                                'color': 'dark-red',
                                display: 'none'
                            });
                            me.state = '32';
                            break;
                        case '20':
                            removePopups();
                            me.state = undefined;
                            __resolve(text);
                            return;
                        case '21':
                            me.state = '43';
                            break;
                        case '22':
                            shift = 10;
                            x2 = x + shift;
                            y2 = y + shift;
                            removePopups();
                            pushSemiModalPopup(dialog, x2, y2);
                            input.value = text;
                            input.setSelectionRange(0, input.value.length);
                            input.focus();
                            me.state = '21';
                            break;
                        case '32':
                            registerAction(input, 'keydown', onLargeInputKeyDown, me);
                            _var4 = div({
                                text: title,
                                'padding-bottom': '5px'
                            });
                            dialog = div('shadow', {
                                width: '400px',
                                'max-width': '100vw',
                                padding: '5px',
                                background: 'white',
                                border: 'solid 1px #a0a0a0'
                            }, _var4, input, bottom);
                            me.state = '22';
                            break;
                        case '43':
                            me.state = '49';
                            return;
                        case '51':
                            text = input.value.trim();
                            errorMessage = checkInputText(text, check);
                            if (errorMessage) {
                                error.style.display = 'block';
                                html.setText(error, errorMessage);
                                me.state = '43';
                            } else {
                                me.state = '20';
                            }
                            break;
                        case '63':
                            text = undefined;
                            me.state = '20';
                            break;
                        default:
                            return;
                        }
                    }
                } catch (ex) {
                    unit.onError(ex);
                    me.state = undefined;
                    __reject(ex);
                }
            }
            me.run = function () {
                me.run = undefined;
                return new Promise(function (__resolve, __reject) {
                    me.cancel = function () {
                        switch (me.state) {
                        case '49':
                            me.state = '63';
                            _main_largeBox(__resolve, __reject);
                            break;
                        default:
                            return;
                        }
                    };
                    me.confirm = function () {
                        switch (me.state) {
                        case '49':
                            me.state = '51';
                            _main_largeBox(__resolve, __reject);
                            break;
                        default:
                            return;
                        }
                    };
                    _main_largeBox(__resolve, __reject);
                });
            };
            return me;
        }
        function largeBox(x, y, title, text, check) {
            var __obj = largeBox_create(x, y, title, text, check);
            return __obj.run();
        }
        function inputBoxRo_create(x, y, title, text) {
            var input, cancel, bottom, dialog, shift, x2, y2, _var2, _var3;
            var me = {
                state: '2',
                type: 'inputBoxRo'
            };
            function _main_inputBoxRo(__resolve, __reject) {
                try {
                    while (true) {
                        switch (me.state) {
                        case '2':
                            input = html.createElement('input', { type: 'text' });
                            input.readOnly = true;
                            _var2 = tr('Close');
                            cancel = createSimpleButton(_var2, removePopups);
                            cancel.style.margin = '0px';
                            bottom = div({
                                'padding-top': '5px',
                                'text-align': 'right'
                            }, cancel);
                            me.state = '32';
                            break;
                        case '20':
                            me.state = undefined;
                            __resolve({ ok: true });
                            return;
                        case '22':
                            shift = 10;
                            x2 = x + shift;
                            y2 = y + shift;
                            removePopups();
                            pushPopup(dialog, x2, y2);
                            input.value = text;
                            input.setSelectionRange(0, input.value.length);
                            input.focus();
                            me.state = '20';
                            break;
                        case '32':
                            _var3 = div({
                                text: title,
                                'padding-bottom': '5px'
                            });
                            dialog = div('shadow', {
                                width: '400px',
                                'max-width': '100vw',
                                padding: '5px',
                                background: 'white',
                                border: 'solid 1px #a0a0a0'
                            }, _var3, input, bottom);
                            me.state = '22';
                            break;
                        default:
                            return;
                        }
                    }
                } catch (ex) {
                    unit.onError(ex);
                    me.state = undefined;
                    __reject(ex);
                }
            }
            me.run = function () {
                me.run = undefined;
                return new Promise(function (__resolve, __reject) {
                    _main_inputBoxRo(__resolve, __reject);
                });
            };
            return me;
        }
        function inputBoxRo(x, y, title, text) {
            var __obj = inputBoxRo_create(x, y, title, text);
            return __obj.run();
        }
        function largeBoxRo_create(x, y, title, text) {
            var input, cancel, bottom, dialog, shift, x2, y2, _var2, _var3;
            var me = {
                state: '2',
                type: 'largeBoxRo'
            };
            function _main_largeBoxRo(__resolve, __reject) {
                try {
                    while (true) {
                        switch (me.state) {
                        case '2':
                            input = html.createElement('textarea', {}, [{ height: '300px' }]);
                            input.readOnly = true;
                            _var2 = tr('Close');
                            cancel = createSimpleButton(_var2, removePopups);
                            cancel.style.margin = '0px';
                            bottom = div({
                                'padding-top': '5px',
                                'text-align': 'right'
                            }, cancel);
                            me.state = '32';
                            break;
                        case '20':
                            me.state = undefined;
                            __resolve({ ok: true });
                            return;
                        case '22':
                            shift = 10;
                            x2 = x + shift;
                            y2 = y + shift;
                            removePopups();
                            pushSemiModalPopup(dialog, x2, y2);
                            input.value = text;
                            input.setSelectionRange(0, input.value.length);
                            input.focus();
                            me.state = '20';
                            break;
                        case '32':
                            _var3 = div({
                                text: title,
                                'padding-bottom': '5px'
                            });
                            dialog = div('shadow', {
                                width: '400px',
                                'max-width': '100vw',
                                padding: '5px',
                                background: 'white',
                                border: 'solid 1px #a0a0a0'
                            }, _var3, input, bottom);
                            me.state = '22';
                            break;
                        default:
                            return;
                        }
                    }
                } catch (ex) {
                    unit.onError(ex);
                    me.state = undefined;
                    __reject(ex);
                }
            }
            me.run = function () {
                me.run = undefined;
                return new Promise(function (__resolve, __reject) {
                    _main_largeBoxRo(__resolve, __reject);
                });
            };
            return me;
        }
        function largeBoxRo(x, y, title, text) {
            var __obj = largeBoxRo_create(x, y, title, text);
            return __obj.run();
        }
        unit.createIconButton = createIconButton;
        unit.addTooltip = addTooltip;
        unit.removeQuestions = removeQuestions;
        unit.criticalQuestion_create = criticalQuestion_create;
        unit.criticalQuestion = criticalQuestion;
        unit.removePopups = removePopups;
        unit.pushSemiModalPopup = pushSemiModalPopup;
        unit.createComboBox = createComboBox;
        unit.showErrorSnack = showErrorSnack;
        unit.removeSnack = removeSnack;
        unit.showContextMenu = showContextMenu;
        unit.createSimpleButton = createSimpleButton;
        unit.createBadButton = createBadButton;
        unit.createDefaultButton = createDefaultButton;
        unit.init = init;
        unit.inputBox_create = inputBox_create;
        unit.inputBox = inputBox;
        unit.largeBox_create = largeBox_create;
        unit.largeBox = largeBox;
        unit.inputBoxRo_create = inputBoxRo_create;
        unit.inputBoxRo = inputBoxRo;
        unit.largeBoxRo_create = largeBoxRo_create;
        unit.largeBoxRo = largeBoxRo;
        Object.defineProperty(unit, 'html', {
            get: function () {
                return html;
            },
            set: function (newValue) {
                html = newValue;
            },
            enumerable: true,
            configurable: true
        });
        return unit;
    }

    function html_0_1() {
        var unit = {};
        unit.onError = function (error) {
            console.error(error);
        };
        function addClass() {
            var style, name, body, content, lines, i, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                    case '2':
                        if (unit.styleElement) {
                            __state = '3';
                        } else {
                            unit.styleElement = createStyle();
                            __state = '3';
                        }
                        break;
                    case '3':
                        style = unit.styleElement;
                        name = arguments[0];
                        lines = [];
                        i = 1;
                        __state = '5';
                        break;
                    case '5':
                        if (i < arguments.length) {
                            lines.push(arguments[i]);
                            i++;
                            __state = '5';
                        } else {
                            _var2 = lines.map(addSemi);
                            body = _var2.join('\n');
                            content = '\n' + name + ' {\n' + body + '\n}\n';
                            style.innerHTML += content;
                            return;
                        }
                        break;
                    default:
                        return;
                }
            }
        }
        function resetStyle() {
            var __state = '2';
            while (true) {
                switch (__state) {
                    case '2':
                        if (unit.styleElement) {
                            removeElement(unit.styleElement);
                            __state = '5';
                        } else {
                            __state = '5';
                        }
                        break;
                    case '5':
                        unit.styleElement = createStyle();
                        return unit.styleElement;
                    default:
                        return;
                }
            }
        }
        function createStyle() {
            var styleSheet;
            styleSheet = document.createElement('style');
            styleSheet.type = 'text/css';
            document.head.appendChild(styleSheet);
            return styleSheet;
        }
        function addClassToStyle() {
            var style, name, body, content, lines, i, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                    case '2':
                        style = arguments[0];
                        name = arguments[1];
                        lines = [];
                        i = 2;
                        __state = '5';
                        break;
                    case '5':
                        if (i < arguments.length) {
                            lines.push(arguments[i]);
                            i++;
                            __state = '5';
                        } else {
                            _var2 = lines.map(addSemi);
                            body = _var2.join('\n');
                            content = '\n' + name + ' {\n' + body + '\n}\n';
                            style.innerHTML += content;
                            return;
                        }
                        break;
                    default:
                        return;
                }
            }
        }
        function addSemi(line) {
            var _var2;
            _var2 = line.trim();
            return '    ' + _var2 + ';';
        }
        function addText(element, text) {
            var newNode;
            newNode = document.createTextNode(text);
            add(element, newNode);
            return;
        }
        function clear(element) {
            element.innerHTML = '';
            return;
        }
        function reload() {
            window.location.reload();
            return;
        }
        function createElement(tagName, properties, args) {
            var element, className, style, _var5, _var6, arg, _var3, _var2, _var4, key, value, _var8, _var7, _var9;
            var __state = '2';
            while (true) {
                switch (__state) {
                    case '2':
                        args = args || [];
                        element = document.createElement(tagName);
                        if (properties) {
                            _var3 = properties;
                            _var2 = Object.keys(_var3);
                            _var4 = 0;
                            __state = '42';
                        } else {
                            __state = '22';
                        }
                        break;
                    case '13':
                        return element;
                    case '22':
                        className = '';
                        style = {};
                        _var5 = args;
                        _var6 = 0;
                        __state = '32';
                        break;
                    case '31':
                        _var6++;
                        __state = '32';
                        break;
                    case '32':
                        if (_var6 < _var5.length) {
                            arg = _var5[_var6];
                            if (typeof arg === 'string') {
                                className = arg;
                                __state = '31';
                            } else {
                                if (arg.tagName) {
                                    add(element, arg);
                                    __state = '31';
                                } else {
                                    style = arg;
                                    __state = '31';
                                }
                            }
                        } else {
                            __state = '48';
                        }
                        break;
                    case '42':
                        if (_var4 < _var2.length) {
                            key = _var2[_var4];
                            value = _var3[key];
                            element.setAttribute(key, value);
                            _var4++;
                            __state = '42';
                        } else {
                            __state = '22';
                        }
                        break;
                    case '48':
                        _var8 = style;
                        _var7 = Object.keys(_var8);
                        _var9 = 0;
                        __state = '50';
                        break;
                    case '49':
                        _var9++;
                        __state = '50';
                        break;
                    case '50':
                        if (_var9 < _var7.length) {
                            key = _var7[_var9];
                            value = _var8[key];
                            if (key === 'text') {
                                addText(element, value);
                                __state = '49';
                            } else {
                                if (key === 'tid') {
                                    __state = '49';
                                } else {
                                    element.style.setProperty(key, value);
                                    __state = '49';
                                }
                            }
                        } else {
                            __state = '52';
                        }
                        break;
                    case '52':
                        if (className) {
                            element.className = className;
                            __state = '13';
                        } else {
                            __state = '13';
                        }
                        break;
                    default:
                        return;
                }
            }
        }
        function addAfter(referenceNode, newNode) {
            referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
            return;
        }
        function setText(element, text) {
            clear(element);
            addText(element, text);
            return;
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
        function remove(element) {
            element.parentNode.removeChild(element);
            return;
        }
        function addOption(select, value, text) {
            var option;
            option = createElement('option', { value: value });
            addText(option, text);
            add(select, option);
            return;
        }
        function add(parent, child) {
            parent.appendChild(child);
            return;
        }
        function goTo(url) {
            window.location.href = url;
            return;
        }
        function setTitle(title) {
            document.title = title;
            return;
        }
        function getRetinaFactor() {
            if (window.devicePixelRatio) {
                return window.devicePixelRatio;
            } else {
                return 1;
            }
        }
        unit.addClass = addClass;
        unit.resetStyle = resetStyle;
        unit.createStyle = createStyle;
        unit.addClassToStyle = addClassToStyle;
        unit.addText = addText;
        unit.clear = clear;
        unit.reload = reload;
        unit.createElement = createElement;
        unit.addAfter = addAfter;
        unit.setText = setText;
        unit.get = get;
        unit.remove = remove;
        unit.addOption = addOption;
        unit.add = add;
        unit.goTo = goTo;
        unit.setTitle = setTitle;
        unit.getRetinaFactor = getRetinaFactor;
        return unit;
    }

    var widgets = simplewidgets_0_1()
    var html = html_0_1()
    widgets.html = html
    return widgets
}