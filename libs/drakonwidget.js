function createDrakonWidget() {
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

    function edit_tools() {
        var unit = {};
        unit.onError = function (error) {
            console.error(error);
        };
        function createUndoEdit(diagram, sender) {
            var self;
            self = UndoEdit();
            self.diagram = diagram;
            self.edit = sender;
            self.currentUndo = -1;
            self.undo = [];
            return self;
        }
        function createEditStep(diagramId) {
            return {
                id: diagramId,
                changes: []
            };
        }
        function sendEditToServer(obj, edit) {
            obj.edit.pushEdit(edit);
            return;
        }
        function applyChange(diagram, change) {
            var item, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                    case '1':
                        return;
                    case '2':
                        if (change.id) {
                            _var2 = change.op;
                            if (_var2 === 'insert') {
                                item = clone(change.fields);
                                diagram.items[change.id] = item;
                                __state = '1';
                            } else {
                                if (_var2 === 'update') {
                                    item = diagram.items[change.id];
                                    Object.assign(item, change.fields);
                                    __state = '1';
                                } else {
                                    if (_var2 === 'delete') {
                                        delete diagram.items[change.id];
                                        __state = '1';
                                    } else {
                                        throw new Error('Unexpected case value: ' + _var2);
                                    }
                                }
                            }
                        } else {
                            Object.assign(diagram, change.fields);
                            __state = '1';
                        }
                        break;
                    default:
                        return;
                }
            }
        }
        function applyEdit(diagram, edit) {
            var _var2, _var3, changes;
            var __state = '2';
            while (true) {
                switch (__state) {
                    case '2':
                        _var2 = edit.changes;
                        _var3 = 0;
                        __state = '13';
                        break;
                    case '13':
                        if (_var3 < _var2.length) {
                            changes = _var2[_var3];
                            applyChange(diagram, changes);
                            _var3++;
                            __state = '13';
                        } else {
                            return;
                        }
                        break;
                    default:
                        return;
                }
            }
        }
        function getOldValues(obj, changedFields, output) {
            var oldValue, _var3, _var2, _var4, name, value;
            var __state = '2';
            while (true) {
                switch (__state) {
                    case '2':
                        _var3 = changedFields;
                        _var2 = Object.keys(_var3);
                        _var4 = 0;
                        __state = '5';
                        break;
                    case '5':
                        if (_var4 < _var2.length) {
                            name = _var2[_var4];
                            value = _var3[name];
                            if (name in obj) {
                                oldValue = obj[name];
                                __state = '7';
                            } else {
                                oldValue = '';
                                __state = '7';
                            }
                        } else {
                            return;
                        }
                        break;
                    case '7':
                        output[name] = oldValue;
                        _var4++;
                        __state = '5';
                        break;
                    default:
                        return;
                }
            }
        }
        function addChangeToEdit(diagram, change, undo, redo) {
            var undoChange;
            undoChange = createUndoChange(diagram, change);
            redo.changes.push(change);
            undo.changes.push(undoChange);
            applyChange(diagram, change);
            return;
        }
        function createUndoChange(diagram, change) {
            var undoChange, item, _var2, _var3;
            var __state = '19';
            while (true) {
                switch (__state) {
                    case '2':
                        _var2 = change.op;
                        if (_var2 === 'insert') {
                            undoChange = {
                                id: change.id,
                                op: 'delete'
                            };
                            __state = '17';
                        } else {
                            if (_var2 === 'update') {
                                undoChange = {
                                    id: change.id,
                                    op: 'update',
                                    fields: {}
                                };
                                item = diagram.items[change.id];
                                getOldValues(item, change.fields, undoChange.fields);
                                __state = '17';
                            } else {
                                if (_var2 === 'delete') {
                                    item = diagram.items[change.id];
                                    _var3 = clone(item);
                                    undoChange = {
                                        id: change.id,
                                        op: 'insert',
                                        fields: _var3
                                    };
                                    __state = '17';
                                } else {
                                    throw new Error('Unexpected case value: ' + _var2);
                                }
                            }
                        }
                        break;
                    case '17':
                        return undoChange;
                    case '18':
                        undoChange = { fields: {} };
                        getOldValues(diagram, change.fields, undoChange.fields);
                        __state = '17';
                        break;
                    case '19':
                        if (change.id) {
                            __state = '2';
                        } else {
                            __state = '18';
                        }
                        break;
                    default:
                        return;
                }
            }
        }
        function createEdit(obj, changes) {
            var diagram, undo, redo, edit, _var2, _var3, change;
            var __state = '2';
            while (true) {
                switch (__state) {
                    case '2':
                        diagram = obj.diagram;
                        undo = createEditStep(diagram.id);
                        redo = createEditStep(diagram.id);
                        _var2 = changes;
                        _var3 = 0;
                        __state = '46';
                        break;
                    case '10':
                        return edit;
                    case '23':
                        if (obj.currentUndo >= 0) {
                            if (obj.currentUndo < obj.undo.length) {
                                obj.currentUndo++;
                                __state = '26';
                            } else {
                                __state = '26';
                            }
                        } else {
                            obj.undo = [];
                            obj.currentUndo = 0;
                            __state = '29';
                        }
                        break;
                    case '26':
                        obj.undo = obj.undo.slice(0, obj.currentUndo);
                        __state = '29';
                        break;
                    case '29':
                        obj.undo.push(edit);
                        __state = '10';
                        break;
                    case '46':
                        if (_var3 < _var2.length) {
                            change = _var2[_var3];
                            addChangeToEdit(diagram, change, undo, redo);
                            _var3++;
                            __state = '46';
                        } else {
                            undo.changes.reverse();
                            edit = {
                                undo: undo,
                                redo: redo
                            };
                            __state = '23';
                        }
                        break;
                    default:
                        return;
                }
            }
        }
        function createInitialEdit(diagram) {
            var step;
            var __state = '2';
            while (true) {
                switch (__state) {
                    case '2':
                        if (diagram.initial) {
                            if (diagram.initial.length === 0) {
                                __state = '7';
                            } else {
                                step = createEditStep(diagram.id);
                                step.changes = diagram.initial;
                                diagram.initial = undefined;
                                return step;
                            }
                        } else {
                            __state = '7';
                        }
                        break;
                    case '7':
                        return undefined;
                    default:
                        return;
                }
            }
        }
        function UndoEdit_forcedChange(self, changedFields) {
            var action, edit, _var3, _var2, _var4, name, value;
            var __state = '2';
            while (true) {
                switch (__state) {
                    case '2':
                        action = {
                            op: 'update',
                            fields: {}
                        };
                        _var3 = changedFields;
                        _var2 = Object.keys(_var3);
                        _var4 = 0;
                        __state = '6';
                        break;
                    case '5':
                        _var4++;
                        __state = '6';
                        break;
                    case '6':
                        if (_var4 < _var2.length) {
                            name = _var2[_var4];
                            value = _var3[name];
                            if (name === 'id') {
                                __state = '5';
                            } else {
                                action.fields[name] = value;
                                __state = '5';
                            }
                        } else {
                            edit = { changes: [action] };
                            applyEdit(self.diagram, edit);
                            return;
                        }
                        break;
                    default:
                        return;
                }
            }
        }
        function UndoEdit_redoEdit(self) {
            var edit;
            if (self.currentUndo < self.undo.length - 1) {
                self.currentUndo++;
                edit = self.undo[self.currentUndo];
                applyEdit(self.diagram, edit.redo);
                sendEditToServer(self, edit.redo);
                return edit.redo;
            } else {
                return undefined;
            }
        }
        function UndoEdit_updateDocument(self, changes) {
            var undoRecord, initial, _var2, _var3, change;
            var __state = '2';
            while (true) {
                switch (__state) {
                    case '2':
                        initial = createInitialEdit(self.diagram);
                        if (initial) {
                            _var2 = initial.changes;
                            _var3 = 0;
                            __state = '18';
                        } else {
                            __state = '12';
                        }
                        break;
                    case '12':
                        undoRecord = createEdit(self, changes);
                        sendEditToServer(self, undoRecord.redo);
                        return;
                    case '18':
                        if (_var3 < _var2.length) {
                            change = _var2[_var3];
                            applyChange(self.diagram, change);
                            _var3++;
                            __state = '18';
                        } else {
                            sendEditToServer(self, initial);
                            __state = '12';
                        }
                        break;
                    default:
                        return;
                }
            }
        }
        function UndoEdit_undoEdit(self) {
            var edit;
            var __state = '2';
            while (true) {
                switch (__state) {
                    case '2':
                        if (self.currentUndo >= 0) {
                            if (self.currentUndo < self.undo.length) {
                                edit = self.undo[self.currentUndo];
                                self.currentUndo--;
                                applyEdit(self.diagram, edit.undo);
                                sendEditToServer(self, edit.undo);
                                return edit.undo;
                            } else {
                                __state = '19';
                            }
                        } else {
                            __state = '19';
                        }
                        break;
                    case '19':
                        return undefined;
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
        function UndoEdit() {
            var self = {};
            self.forcedChange = function (changedFields) {
                return UndoEdit_forcedChange(self, changedFields);
            };
            self.redoEdit = function () {
                return UndoEdit_redoEdit(self);
            };
            self.updateDocument = function (changes) {
                return UndoEdit_updateDocument(self, changes);
            };
            self.undoEdit = function () {
                return UndoEdit_undoEdit(self);
            };
            return self;
        }
        unit.createUndoEdit = createUndoEdit;
        unit.UndoEdit = UndoEdit;
        return unit;
    }

    function drakon_canvas() {
        var unit = {};
        var html, edit_tools, tracing;
        function hasValue(value) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (value === undefined) {
                        __state = '8';
                    } else {
                        if (value === '') {
                            __state = '8';
                        } else {
                            if (value === null) {
                                __state = '8';
                            } else {
                                return true;
                            }
                        }
                    }
                    break;
                case '8':
                    return false;
                default:
                    return;
                }
            }
        }
        function isLastPar(node) {
            if (node.two) {
                return false;
            } else {
                return true;
            }
        }
        function getBranch(visuals, ordinal) {
            var nodeId, _var2;
            nodeId = visuals.branches[ordinal];
            _var2 = getNode(visuals, nodeId);
            return _var2;
        }
        function DrakonCanvas_init(self) {
            var _var2;
            tracing.trace('DrakonCanvas.init');
            self.origins = {};
            _var2 = Math.random();
            self.styleTag = html.createStyle();
            self.myStyleId = Math.floor(_var2 * 100000);
            self.zoom = 10000;
            self.zoomFactor = 1;
            initInsertFunctions(self);
            initFreeFunctions(self);
            return;
        }
        function findDraggable(visuals, x, y) {
            return;
        }
        function drawNugget(ctx, x, y) {
            var size, padding, asize, left, midY, right, top, bottom, midX, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    size = 30;
                    ctx.fillStyle = '#90ff90';
                    ctx.fillRect(x, y, size, size);
                    ctx.strokeStyle = 'black';
                    ctx.lineWidth = 2;
                    ctx.strokeRect(x, y, size, size);
                    __state = '10';
                    break;
                case '9':
                    _var2 = createBox(x, y, size, size);
                    return _var2;
                case '10':
                    padding = 4;
                    asize = 5;
                    left = x + padding;
                    midY = y + size / 2;
                    right = left + asize;
                    top = midY - asize;
                    bottom = midY + asize;
                    fillTrigangle(ctx, left, midY, right, top, right, bottom, 'black');
                    __state = '16';
                    break;
                case '16':
                    right = x + size - padding;
                    left = right - asize;
                    fillTrigangle(ctx, left, top, right, midY, left, bottom, 'black');
                    __state = '19';
                    break;
                case '19':
                    midX = x + size / 2;
                    left = midX - asize;
                    right = midX + asize;
                    top = y + padding;
                    bottom = top + asize;
                    fillTrigangle(ctx, left, bottom, midX, top, right, bottom, 'black');
                    __state = '22';
                    break;
                case '22':
                    bottom = y + size - padding;
                    top = bottom - asize;
                    fillTrigangle(ctx, left, top, right, top, midX, bottom, 'black');
                    __state = '9';
                    break;
                default:
                    return;
                }
            }
        }
        function DrakonCanvas_showPasteSockets(self, type) {
            var showInsert, _var2, _var3;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    tracing.trace('DrakonCanvas.showPasteSockets', type);
                    _var3 = isReadonly(self);
                    if (_var3) {
                        __state = '1';
                    } else {
                        clearSockets(self.visuals);
                        if (type) {
                            deselectAll(self);
                            _var2 = type;
                            if (_var2 === 'case') {
                                showInsert = function (visuals, node) {
                                    showCaseSockets(visuals, node, 'paste');
                                };
                                forType(self.visuals, 'case', showInsert);
                                __state = '11';
                            } else {
                                if (_var2 === 'branch') {
                                    showAllBranchSockets(self.visuals, 'paste');
                                    __state = '11';
                                } else {
                                    if (_var2 === 'block') {
                                        showBlockInsertSockets(self.visuals, 'paste', type);
                                        __state = '11';
                                    } else {
                                        if (_var2 === 'duration') {
                                            showDurationSockets(self.visuals, 'paste');
                                            __state = '11';
                                        } else {
                                            __state = '11';
                                        }
                                    }
                                }
                            }
                        } else {
                            __state = '11';
                        }
                    }
                    break;
                case '11':
                    paint(self);
                    __state = '1';
                    break;
                default:
                    return;
                }
            }
        }
        function shouldAlignWidth(visuals, node) {
            if (node.type in visuals.config.alignedNodes) {
                return true;
            } else {
                return false;
            }
        }
        function clusterComplete(context) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (context.arrows === 0) {
                        if (context.paths === 0) {
                            return true;
                        } else {
                            __state = '6';
                        }
                    } else {
                        __state = '6';
                    }
                    break;
                case '6':
                    return false;
                default:
                    return;
                }
            }
        }
        function DrakonCanvas_undo(self) {
            var edits, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    tracing.trace('DrakonCanvas.undo');
                    _var2 = isReadonly(self);
                    if (_var2) {
                        __state = '1';
                    } else {
                        if (self.edit) {
                            edits = self.edit.undoEdit();
                            if (edits) {
                                rebuildSelection(self, edits.changes);
                                __state = '1';
                            } else {
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
        function buildDiagramModel(widget, diagram) {
            var idNum, nextId, model, end, branch, _var3, _var2, _var4, itemId, item, _var5, _var6, _var7, _var8;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    diagram.initial = [];
                    model = {
                        items: {},
                        doc: {},
                        branches: [],
                        edits: [],
                        type: diagram.type
                    };
                    model.doc.access = diagram.access || 'write';
                    model.doc.name = diagram.name || '';
                    model.doc.keywords = clone(diagram.keywords || {});
                    model.doc.params = diagram.params || '';
                    if (diagram.style) {
                        model.doc.style = JSON.parse(diagram.style);
                        __state = '33';
                    } else {
                        __state = '33';
                    }
                    break;
                case '4':
                    return;
                case '5':
                    _var3 = diagram.items;
                    _var2 = Object.keys(_var3);
                    _var4 = 0;
                    __state = '7';
                    break;
                case '6':
                    _var4++;
                    __state = '7';
                    break;
                case '7':
                    if (_var4 < _var2.length) {
                        itemId = _var2[_var4];
                        item = _var3[itemId];
                        item.id = itemId;
                        addItemToModel(model, item);
                        idNum = parseInt(item.id);
                        _var5 = isNaN(idNum);
                        if (_var5) {
                            __state = '6';
                        } else {
                            nextId = Math.max(nextId, idNum);
                            __state = '6';
                        }
                    } else {
                        model.nextId = nextId + 1;
                        __state = '16';
                    }
                    break;
                case '16':
                    if (model.branches.length === 0) {
                        if (diagram.type === 'drakon') {
                            end = createNewItem(model, 'end');
                            branch = createNewItem(model, 'branch');
                            branch.branchId = 0;
                            branch.one = end.id;
                            _var7 = createInsert(end);
                            _var8 = createInsert(branch);
                            diagram.initial.push(_var7);
                            diagram.initial.push(_var8);
                            __state = '39';
                        } else {
                            __state = '39';
                        }
                    } else {
                        model.branches.sort(function (a, b) {
                            _var6 = compareBranches(a, b, model.items);
                            return _var6;
                        });
                        __state = '39';
                    }
                    break;
                case '33':
                    nextId = 0;
                    __state = '5';
                    break;
                case '37':
                    stopMachine(widget, 'mouseEvents');
                    if (widget.config.canSelect) {
                        widget.mouseEvents = SelectBehavior_create(widget);
                        __state = '46';
                    } else {
                        widget.mouseEvents = NoSelectBehavior_create(widget);
                        __state = '46';
                    }
                    break;
                case '39':
                    widget.model = model;
                    __state = '37';
                    break;
                case '46':
                    widget.mouseEvents.run();
                    __state = '4';
                    break;
                default:
                    return;
                }
            }
        }
        function Rectangle_drawCandies(self, widget, element, ctx) {
            drawRectCandies(widget, element, ctx);
            return;
        }
        function findFree(widget, pos) {
            var free, visuals, element, i, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    visuals = widget.visuals;
                    free = visuals.free;
                    i = free.length - 1;
                    __state = '5';
                    break;
                case '5':
                    if (i >= 0) {
                        element = free[i];
                        _var2 = hitFreeElement(widget, element, pos);
                        if (_var2) {
                            return element;
                        } else {
                            i--;
                            __state = '5';
                        }
                    } else {
                        return undefined;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function createPar(text) {
            var properties, style, _var2;
            properties = {};
            style = { text: text };
            _var2 = html.createElement('p', properties, [style]);
            return _var2;
        }
        function runCurrentSocket(widget) {
            var socket, visuals;
            visuals = widget.visuals;
            socket = visuals.sockets[visuals.currentSocket - 1];
            tracing.trace('runCurrentSocket', socket.op + ' ' + socket.target);
            runInsertAction(widget, socket);
            return;
        }
        function buildBranchPath(ctx, x, y, w, h, padding) {
            var left, right, top, bottom, middle;
            left = x - w;
            right = x + w;
            top = y - h;
            bottom = y + h;
            middle = bottom - padding;
            ctx.beginPath();
            ctx.moveTo(left, top);
            ctx.lineTo(right, top);
            ctx.lineTo(right, middle);
            ctx.lineTo(x, bottom);
            ctx.lineTo(left, middle);
            ctx.closePath();
            return middle;
        }
        function GroupTopHandle_getMaxY(self) {
            return self.maxY;
        }
        function contentBranch(visuals, node) {
            var options, _var2;
            options = { textAlign: 'center' };
            _var2 = buildTextContent(visuals, node, options);
            return _var2;
        }
        function addTextToDiv(options, config, textDiv, text, fonts, font) {
            var textFormat, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    textFormat = options.textFormat || config.textFormat;
                    _var2 = textFormat;
                    if (_var2 === 'html') {
                        addHtmltoDom(text, textDiv, fonts, font);
                        __state = '1';
                    } else {
                        if (_var2 === 'markdown') {
                            __state = '1';
                        } else {
                            splitToParagraphs(textDiv, text);
                            __state = '1';
                        }
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function cut(widget) {
            var type, nodes, elements;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    elements = getSelectedFree(widget);
                    if (elements.length === 0) {
                        type = copyCore(widget);
                        if (type) {
                            nodes = getNodesFromSelection(widget);
                            deleteSelectionCore(widget, nodes);
                            widget.showPasteSockets(type);
                            __state = '1';
                        } else {
                            __state = '1';
                        }
                    } else {
                        copyFree(widget, elements);
                        deleteFree(widget, elements);
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function setClipboard(type, obj) {
            var content;
            content = JSON.stringify(obj);
            localStorage.setItem('clipboard-type', type);
            localStorage.setItem('clipboard', content);
            return;
        }
        function div() {
            var args, properties, _var2;
            args = Array.prototype.slice.call(arguments);
            properties = {};
            _var2 = html.createElement('div', properties, args);
            return _var2;
        }
        function clone(src) {
            var dst;
            if (src) {
                dst = {};
                Object.assign(dst, src);
                return dst;
            } else {
                return src;
            }
        }
        function lineFrom2Points(x1, y1, x2, y2) {
            var a, b, c, div;
            a = y1 - y2;
            b = x2 - x1;
            c = x1 * y2 - x2 * y1;
            div = Math.sqrt(a * a + b * b);
            return {
                a: a,
                b: b,
                c: c,
                div: div
            };
        }
        function addToMultiDict(dict, key, value) {
            var sameType;
            sameType = getCreateList(dict, key);
            sameType.push(value);
            return;
        }
        function setc(property, defaultValue, dst, src) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (property in src) {
                        dst[property] = src[property];
                        __state = '1';
                    } else {
                        dst[property] = defaultValue;
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function hexByteToString(value) {
            var _var2, _var3;
            _var3 = value.toString(16);
            _var2 = ('00' + _var3).substr(-2);
            return _var2;
        }
        function copyFieldsOrDefault(dst, src, fields, defaultValue) {
            var value, _var2, _var3, field, _var4;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    _var2 = fields;
                    _var3 = 0;
                    __state = '5';
                    break;
                case '5':
                    if (_var3 < _var2.length) {
                        field = _var2[_var3];
                        value = src[field];
                        _var4 = hasValue(value);
                        if (_var4) {
                            __state = '6';
                        } else {
                            value = '';
                            __state = '6';
                        }
                    } else {
                        return;
                    }
                    break;
                case '6':
                    dst[field] = value;
                    _var3++;
                    __state = '5';
                    break;
                default:
                    return;
                }
            }
        }
        function comparerAsc(property, left, right) {
            var leftValue, rightValue;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    leftValue = left[property];
                    rightValue = right[property];
                    if (typeof leftValue === 'string') {
                        if (typeof rightValue === 'string') {
                            leftValue = leftValue.toLowerCase();
                            rightValue = rightValue.toLowerCase();
                            __state = '4';
                        } else {
                            __state = '4';
                        }
                    } else {
                        __state = '4';
                    }
                    break;
                case '4':
                    if (leftValue < rightValue) {
                        return -1;
                    } else {
                        if (leftValue > rightValue) {
                            return 1;
                        } else {
                            return 0;
                        }
                    }
                default:
                    return;
                }
            }
        }
        function boxFromPoint(x, y, width, height) {
            var _var2;
            _var2 = createBox(x - width, y - height, width * 2, height * 2);
            return _var2;
        }
        function boxesIntersect(box1, box2) {
            var right1, bottom1, right2, bottom2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    right1 = box1.left + box1.width;
                    if (box2.left > right1) {
                        __state = '6';
                    } else {
                        bottom1 = box1.top + box1.height;
                        if (box2.top > bottom1) {
                            __state = '6';
                        } else {
                            right2 = box2.left + box2.width;
                            if (box1.left > right2) {
                                __state = '6';
                            } else {
                                bottom2 = box2.top + box2.height;
                                if (box1.top > bottom2) {
                                    __state = '6';
                                } else {
                                    return true;
                                }
                            }
                        }
                    }
                    break;
                case '6':
                    return false;
                default:
                    return;
                }
            }
        }
        function createBoxWithMargin(left, top, width, height, margin) {
            var margin2, _var2;
            margin2 = margin * 2;
            _var2 = createBox(left - margin, top - margin, width + margin2, height + margin2);
            return _var2;
        }
        function remove(array, item) {
            var index;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    index = array.indexOf(item);
                    if (index === -1) {
                        __state = '1';
                    } else {
                        array.splice(index, 1);
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function setNotNull(src, dst, name) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (name in src) {
                        dst[name] = src[name];
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
        function addRange(from, to) {
            var _var2, _var3, item;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (from) {
                        _var2 = from;
                        _var3 = 0;
                        __state = '6';
                    } else {
                        __state = '1';
                    }
                    break;
                case '6':
                    if (_var3 < _var2.length) {
                        item = _var2[_var3];
                        to.push(item);
                        _var3++;
                        __state = '6';
                    } else {
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function subtract(from, what) {
            var result, _var3, _var2, _var4, key, value;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    result = {};
                    _var3 = from;
                    _var2 = Object.keys(_var3);
                    _var4 = 0;
                    __state = '6';
                    break;
                case '5':
                    _var4++;
                    __state = '6';
                    break;
                case '6':
                    if (_var4 < _var2.length) {
                        key = _var2[_var4];
                        value = _var3[key];
                        if (key in what) {
                            __state = '5';
                        } else {
                            result[key] = value;
                            __state = '5';
                        }
                    } else {
                        return result;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function getNowMs() {
            var date, _var2;
            date = new Date();
            _var2 = date.getTime();
            return _var2;
        }
        function boxForHorizontalLine(left, top, right, margin) {
            var _var2;
            _var2 = createBoxWithMargin(left, top, right - left, 0, margin);
            return _var2;
        }
        function copyFields(dst, src, fields) {
            var _var2, _var3, field;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    _var2 = fields;
                    _var3 = 0;
                    __state = '5';
                    break;
                case '5':
                    if (_var3 < _var2.length) {
                        field = _var2[_var3];
                        dst[field] = src[field];
                        _var3++;
                        __state = '5';
                    } else {
                        return;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function sortBy(array, property, direction) {
            var sorter, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (array) {
                        direction = direction || 'asc';
                        direction = direction.toLowerCase();
                        if (direction === 'asc') {
                            sorter = comparerAsc;
                            __state = '7';
                        } else {
                            sorter = comparerDesc;
                            __state = '7';
                        }
                    } else {
                        __state = '1';
                    }
                    break;
                case '7':
                    array.sort(function (left, right) {
                        _var2 = sorter(property, left, right);
                        return _var2;
                    });
                    __state = '1';
                    break;
                default:
                    return;
                }
            }
        }
        function boxContains(big, small) {
            var bigRight, smallRight, bigBottom, smallBottom;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (big.left <= small.left) {
                        if (big.top <= small.top) {
                            bigRight = big.left + big.width;
                            smallRight = small.left + small.width;
                            if (bigRight >= smallRight) {
                                bigBottom = big.top + big.height;
                                smallBottom = small.top + small.height;
                                if (bigBottom >= smallBottom) {
                                    return true;
                                } else {
                                    __state = '6';
                                }
                            } else {
                                __state = '6';
                            }
                        } else {
                            __state = '6';
                        }
                    } else {
                        __state = '6';
                    }
                    break;
                case '6':
                    return false;
                default:
                    return;
                }
            }
        }
        function comparerDesc(property, left, right) {
            var comp;
            comp = comparerAsc(property, left, right);
            return -1 * comp;
        }
        function findIndex(array, property, value) {
            var item, i;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    array = array || [];
                    i = 0;
                    __state = '6';
                    break;
                case '6':
                    if (i < array.length) {
                        item = array[i];
                        if (item[property] === value) {
                            return i;
                        } else {
                            i++;
                            __state = '6';
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
        function random(min, max) {
            var _var2;
            _var2 = Math.random();
            return _var2 * (max - min) + min;
        }
        function incrementDictionaryValue(dict, prop) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (prop in dict) {
                        dict[prop]++;
                        __state = '1';
                    } else {
                        dict[prop] = 1;
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function distanceLineToPoint(line, x, y) {
            return (line.a * x + line.b * y + line.c) / line.div;
        }
        function contains(array, element) {
            var _var2;
            _var2 = array.indexOf(element);
            if (_var2 === -1) {
                return false;
            } else {
                return true;
            }
        }
        function setTimeout(action, delay, notrace) {
            var _var2;
            _var2 = tracing.setTimeout(action, delay, notrace);
            return _var2;
        }
        function setCursor(element, cursor) {
            element.style.cursor = cursor;
            return;
        }
        function centerSquare(ctx, x, y, size, fill, border, lineWidth) {
            var left, top;
            left = x - size / 2;
            top = y - size / 2;
            ctx.fillStyle = fill;
            ctx.strokeStyle = border;
            ctx.fillRect(left, top, size, size);
            ctx.lineWidth = lineWidth;
            ctx.strokeRect(left, top, size, size);
            return;
        }
        function isSubset(larger, smaller) {
            var _var3, _var2, _var4, smallKey, _;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (larger) {
                        _var3 = smaller;
                        _var2 = Object.keys(_var3);
                        _var4 = 0;
                        __state = '7';
                    } else {
                        __state = '5';
                    }
                    break;
                case '5':
                    return false;
                case '7':
                    if (_var4 < _var2.length) {
                        smallKey = _var2[_var4];
                        _ = _var3[smallKey];
                        if (smallKey in larger) {
                            _var4++;
                            __state = '7';
                        } else {
                            __state = '5';
                        }
                    } else {
                        return true;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function getCreateList(dict, key) {
            var list;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    list = dict[key];
                    if (list) {
                        __state = '5';
                    } else {
                        list = [];
                        dict[key] = list;
                        __state = '5';
                    }
                    break;
                case '5':
                    return list;
                default:
                    return;
                }
            }
        }
        function hitBox(box, x, y) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (x >= box.left) {
                        if (y >= box.top) {
                            if (x < box.left + box.width) {
                                if (y < box.top + box.height) {
                                    return true;
                                } else {
                                    __state = '8';
                                }
                            } else {
                                __state = '8';
                            }
                        } else {
                            __state = '8';
                        }
                    } else {
                        __state = '8';
                    }
                    break;
                case '8':
                    return false;
                default:
                    return;
                }
            }
        }
        function objectValues(obj) {
            var result, _var3, _var2, _var4, key, value;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    result = [];
                    _var3 = obj;
                    _var2 = Object.keys(_var3);
                    _var4 = 0;
                    __state = '6';
                    break;
                case '6':
                    if (_var4 < _var2.length) {
                        key = _var2[_var4];
                        value = _var3[key];
                        result.push(value);
                        _var4++;
                        __state = '6';
                    } else {
                        return result;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function getClipboard() {
            var content, type, _var2;
            content = localStorage.getItem('clipboard');
            if (content) {
                type = localStorage.getItem('clipboard-type');
                _var2 = JSON.parse(content);
                return {
                    type: type,
                    content: _var2
                };
            } else {
                return undefined;
            }
        }
        function boxForVerticalLine(left, top, bottom, margin) {
            var _var2;
            _var2 = createBoxWithMargin(left, top, 0, bottom - top, margin);
            return _var2;
        }
        function stopMachine(obj, property) {
            var machine;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    machine = obj[property];
                    if (machine) {
                        machine.state = undefined;
                        obj[property] = undefined;
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
        function createBox(left, top, width, height) {
            var right, bottom;
            right = left + width;
            bottom = top + height;
            return {
                left: left,
                top: top,
                width: width,
                height: height,
                right: right,
                bottom: bottom,
                centerX: (left + right) / 2,
                centerY: (top + bottom) / 2
            };
        }
        function findAngle(x1, y1, x2, y2) {
            var hyp, cos, angle, h, v, hypSq;
            h = x2 - x1;
            v = y2 - y1;
            hypSq = h * h + v * v;
            if (hypSq === 0) {
                return 0;
            } else {
                hyp = Math.sqrt(hypSq);
                cos = h / hyp;
                angle = Math.acos(cos);
                if (v >= 0) {
                    return angle;
                } else {
                    return -angle;
                }
            }
        }
        function copyFieldsWithValue(dst, src, fields) {
            var value, _var2, _var3, field, _var4;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    _var2 = fields;
                    _var3 = 0;
                    __state = '5';
                    break;
                case '4':
                    _var3++;
                    __state = '5';
                    break;
                case '5':
                    if (_var3 < _var2.length) {
                        field = _var2[_var3];
                        value = src[field];
                        _var4 = hasValue(value);
                        if (_var4) {
                            dst[field] = value;
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
        function registerEvent(element, eventName, action) {
            tracing.registerEvent(element, eventName, action);
            return;
        }
        function last(array) {
            if (array.length === 0) {
                return undefined;
            } else {
                return array[array.length - 1];
            }
        }
        function removeFromMultiDict(dict, key, value) {
            var sameType;
            sameType = getCreateList(dict, key);
            remove(sameType, value);
            return;
        }
        function flowTextBlock(block, width) {
            var flowBlock, top, left, right, options, last, diff, size, lineWidth, actualWidth, extraPadding, _var2, _var3, _var4, line, _var7, _var8, _var9, _var10, _var5, _var6, _var11, _var12;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    lineWidth = 0;
                    options = block.options;
                    flowBlock = {
                        lines: [],
                        text: block.text,
                        options: options,
                        lineHeight: block.lineHeight,
                        fontSize: block.fontSize,
                        width: width
                    };
                    top = options.paddingTop;
                    left = options.paddingLeft;
                    right = width - options.paddingRight;
                    size = 24;
                    if (block.options.link) {
                        left += size * 1.5;
                        __state = '9';
                    } else {
                        __state = '9';
                    }
                    break;
                case '7':
                    actualWidth = lineWidth + options.paddingLeft + options.paddingRight;
                    flowBlock.width = Math.max(options.minWidth, actualWidth);
                    return flowBlock;
                case '8':
                    _var3 = block.lines;
                    _var4 = 0;
                    __state = '12';
                    break;
                case '9':
                    if (left >= right) {
                        flowBlock.height = flowBlock.lineHeight + top + options.paddingBottom;
                        __state = '16';
                    } else {
                        __state = '8';
                    }
                    break;
                case '12':
                    if (_var4 < _var3.length) {
                        line = _var3[_var4];
                        top = flowLine(line, left, top, right, flowBlock);
                        _var4++;
                        __state = '12';
                    } else {
                        flowBlock.height = top + options.paddingBottom;
                        __state = '16';
                    }
                    break;
                case '16':
                    _var5 = flowBlock.lines;
                    _var6 = 0;
                    __state = '34';
                    break;
                case '21':
                    extraPadding = getExtraPadding(options, width, lineWidth);
                    _var7 = flowBlock.lines;
                    _var8 = 0;
                    __state = '24';
                    break;
                case '22':
                    _var9 = flowBlock.lines;
                    _var10 = 0;
                    __state = '27';
                    break;
                case '24':
                    if (_var8 < _var7.length) {
                        line = _var7[_var8];
                        line.left = right - line.width - extraPadding;
                        _var8++;
                        __state = '24';
                    } else {
                        __state = '7';
                    }
                    break;
                case '27':
                    if (_var10 < _var9.length) {
                        line = _var9[_var10];
                        diff = (right - left - line.width) / 2;
                        line.left = left + diff;
                        _var10++;
                        __state = '27';
                    } else {
                        __state = '7';
                    }
                    break;
                case '34':
                    if (_var6 < _var5.length) {
                        line = _var5[_var6];
                        if (line.tokens.length === 0) {
                            __state = '36';
                        } else {
                            last = line.tokens[line.tokens.length - 1];
                            if (last.type === 'space') {
                                line.tokens.pop();
                                line.right -= last.width;
                                __state = '36';
                            } else {
                                __state = '36';
                            }
                        }
                    } else {
                        _var2 = options.textAlign;
                        if (_var2 === 'right') {
                            __state = '21';
                        } else {
                            if (_var2 === 'center') {
                                __state = '22';
                            } else {
                                __state = '51';
                            }
                        }
                    }
                    break;
                case '36':
                    line.width = line.right - line.left;
                    lineWidth = Math.max(lineWidth, line.width);
                    _var6++;
                    __state = '34';
                    break;
                case '51':
                    extraPadding = getExtraPadding(options, width, lineWidth);
                    _var11 = flowBlock.lines;
                    _var12 = 0;
                    __state = '55';
                    break;
                case '55':
                    if (_var12 < _var11.length) {
                        line = _var11[_var12];
                        line.left = line.left + extraPadding;
                        _var12++;
                        __state = '55';
                    } else {
                        __state = '7';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function addTokenToLine(line, token) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (line.tokens.length === 0) {
                        if (token.type === 'space') {
                            __state = '1';
                        } else {
                            __state = '3';
                        }
                    } else {
                        __state = '3';
                    }
                    break;
                case '3':
                    line.right += token.width;
                    line.tokens.push(token);
                    __state = '1';
                    break;
                default:
                    return;
                }
            }
        }
        function renderFlowBlock(visuals, flowBlock, left, top) {
            var y, x, iconSize, ctx, _var2, _var3, line;
            var __state = '11';
            while (true) {
                switch (__state) {
                case '2':
                    ctx.fillStyle = flowBlock.options.color;
                    ctx.textBaseline = 'bottom';
                    _var2 = flowBlock.lines;
                    _var3 = 0;
                    __state = '5';
                    break;
                case '5':
                    if (_var3 < _var2.length) {
                        line = _var2[_var3];
                        renderFlowBlockLine(ctx, line, left, top);
                        _var3++;
                        __state = '5';
                    } else {
                        __state = '9';
                    }
                    break;
                case '9':
                    return;
                case '11':
                    ctx = visuals.ctx;
                    if (flowBlock.options.link) {
                        iconSize = 24;
                        y = top + flowBlock.height / 2;
                        x = left + flowBlock.options.paddingLeft + iconSize / 2;
                        drawLinkIcon(ctx, x, y);
                        __state = '2';
                    } else {
                        __state = '2';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function line2(ctx, x0, y0, x1, y1, x2, y2) {
            ctx.beginPath();
            ctx.moveTo(x0, y0);
            ctx.lineTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            return;
        }
        function line1(ctx, x0, y0, x1, y1) {
            ctx.beginPath();
            ctx.moveTo(x0, y0);
            ctx.lineTo(x1, y1);
            ctx.stroke();
            return;
        }
        function createDummyCanvas(width, height, background) {
            var canvas, ctx;
            canvas = document.createElement('canvas');
            canvas.id = 'dummy-canvas';
            canvas.style.display = 'inline-block';
            canvas.style.position = 'fixed';
            canvas.style.left = '0px';
            canvas.style.top = '0px';
            canvas.width = width;
            canvas.height = height;
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            document.documentElement.appendChild(canvas);
            ctx = canvas.getContext('2d');
            ctx.fillStyle = background;
            ctx.fillRect(0, 0, width, height);
            return ctx;
        }
        function createLine(flowBlock, left, top, baseLineShift) {
            var line, baseLine;
            baseLine = top + baseLineShift;
            line = {
                top: top,
                bottom: top + flowBlock.lineHeight,
                tokens: [],
                left: left,
                baseLine: baseLine,
                right: left
            };
            flowBlock.lines.push(line);
            return line;
        }
        function flowLine(inputLine, left, top, right, flowBlock) {
            var margin, baseLineShift, line, _var2, _var3, _var4, token;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    margin = (flowBlock.lineHeight - flowBlock.fontSize) / 2;
                    baseLineShift = flowBlock.lineHeight - margin;
                    line = createLine(flowBlock, left, top, baseLineShift);
                    _var2 = inputLine.type;
                    if (_var2 === 'ul') {
                        __state = '62';
                    } else {
                        if (_var2 === 'ol') {
                            __state = '62';
                        } else {
                            __state = '45';
                        }
                    }
                    break;
                case '10':
                    return line.bottom;
                case '45':
                    _var3 = inputLine.tokens;
                    _var4 = 0;
                    __state = '47';
                    break;
                case '47':
                    if (_var4 < _var3.length) {
                        __state = '_item6';
                    } else {
                        __state = '10';
                    }
                    break;
                case '50':
                    addTokenToLine(line, token);
                    _var4++;
                    __state = '47';
                    break;
                case '62':
                    if (inputLine.tokens.length === 0) {
                        __state = '45';
                    } else {
                        left += inputLine.tokens[0].width;
                        __state = '45';
                    }
                    break;
                case '_item6':
                    token = _var3[_var4];
                    if (line.right + token.width <= right) {
                        __state = '50';
                    } else {
                        if (line.tokens.length === 0) {
                            __state = '50';
                        } else {
                            line = createLine(flowBlock, left, line.bottom, baseLineShift);
                            __state = '_item6';
                        }
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function addHtmltoDom(html, parentElement, fonts, font) {
            var parser, doc, body, name, firstNode, cache, fontObj, fontObj2, font2, formats, _var2, _var3, node;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    formats = {};
                    html = html || '';
                    parser = new DOMParser();
                    doc = parser.parseFromString(html, 'text/html');
                    body = doc.documentElement.childNodes[1];
                    __state = '9';
                    break;
                case '4':
                    return;
                case '9':
                    if (body.childNodes.length === 1) {
                        firstNode = body.childNodes[0];
                        name = getNodeName(firstNode);
                        if (name === '#text') {
                            splitToParagraphs(parentElement, firstNode.nodeValue);
                            __state = '32';
                        } else {
                            __state = '16';
                        }
                    } else {
                        __state = '16';
                    }
                    break;
                case '16':
                    _var2 = body.childNodes;
                    _var3 = 0;
                    __state = '18';
                    break;
                case '18':
                    if (_var3 < _var2.length) {
                        node = _var2[_var3];
                        addNodeToDom(node, parentElement, false, false, formats);
                        _var3++;
                        __state = '18';
                    } else {
                        __state = '32';
                    }
                    break;
                case '32':
                    if (fonts) {
                        cache = initFontCache();
                        fontObj = parseCssFont(font, cache);
                        if (formats.bold) {
                            addFontVariant(fonts, fontObj, 'weight', 'bold');
                            __state = '45';
                        } else {
                            __state = '45';
                        }
                    } else {
                        __state = '4';
                    }
                    break;
                case '45':
                    if (formats.italic) {
                        addFontVariant(fonts, fontObj, 'style', 'italic');
                        __state = '46';
                    } else {
                        __state = '46';
                    }
                    break;
                case '46':
                    if (formats.both) {
                        fontObj2 = clone(fontObj);
                        fontObj2.weight = 'bold';
                        fontObj2.style = 'italic';
                        font2 = cssFontToString(fontObj2);
                        fonts[font2] = true;
                        __state = '4';
                    } else {
                        __state = '4';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function drawLinkIcon(ctx, x, y) {
            var size, radius, angle, x0, x1, x3, x2, y0, y1, y3, y2, aradius, m;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    size = 24;
                    radius = size / 2;
                    angle = 3;
                    x0 = x - radius;
                    x1 = x0 + angle;
                    x3 = x + radius;
                    x2 = x3 - angle;
                    y0 = y - radius;
                    y1 = y0 + angle;
                    y3 = y + radius;
                    y2 = y3 - angle;
                    ctx.beginPath();
                    ctx.moveTo(x0, y1);
                    ctx.lineTo(x1, y0);
                    ctx.lineTo(x2, y0);
                    ctx.lineTo(x3, y1);
                    ctx.lineTo(x3, y2);
                    ctx.lineTo(x2, y3);
                    ctx.lineTo(x1, y3);
                    ctx.lineTo(x0, y2);
                    ctx.closePath();
                    ctx.fillStyle = '#000090';
                    ctx.fill();
                    __state = '7';
                    break;
                case '6':
                    return;
                case '7':
                    aradius = radius - 7;
                    m = aradius * 1;
                    x0 = x - aradius;
                    x1 = x + aradius - m;
                    x2 = x + aradius;
                    y0 = y - aradius;
                    y1 = y0 + m;
                    y2 = y + aradius;
                    ctx.strokeStyle = 'white';
                    ctx.lineWidth = 3;
                    ctx.setLineDash([]);
                    line1(ctx, x0, y2, x2, y0);
                    line2(ctx, x, y0, x2, y0, x2, y);
                    __state = '6';
                    break;
                default:
                    return;
                }
            }
        }
        function addNodeToDom(node, parentElement, bold, italic, formats) {
            var name, tnode, copy, _var2, _var3, _var4, child;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    name = getNodeName(node);
                    _var2 = name;
                    if (_var2 === '#text') {
                        if (bold) {
                            if (italic) {
                                formats.both = true;
                                __state = '16';
                            } else {
                                formats.bold = true;
                                __state = '16';
                            }
                        } else {
                            if (italic) {
                                formats.italic = true;
                                __state = '16';
                            } else {
                                __state = '16';
                            }
                        }
                    } else {
                        if (_var2 === 'script') {
                            __state = '1';
                        } else {
                            if (_var2 === 'em') {
                                italic = true;
                                __state = '18';
                            } else {
                                if (_var2 === 'strong') {
                                    bold = true;
                                    __state = '18';
                                } else {
                                    __state = '18';
                                }
                            }
                        }
                    }
                    break;
                case '16':
                    tnode = document.createTextNode(node.nodeValue);
                    parentElement.appendChild(tnode);
                    __state = '1';
                    break;
                case '18':
                    copy = document.createElement(name);
                    parentElement.appendChild(copy);
                    _var3 = node.childNodes;
                    _var4 = 0;
                    __state = '20';
                    break;
                case '20':
                    if (_var4 < _var3.length) {
                        child = _var3[_var4];
                        addNodeToDom(child, copy, bold, italic, formats);
                        _var4++;
                        __state = '20';
                    } else {
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function createTextBlock(ctx, text, options, fonts) {
            var line, lines, fontCache, fontObj, block, size, _var2, _var5, _var6, _var3, _var4, token, _var7, _var8;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (options.singleLine) {
                        line = splitLineToTokens(text, '');
                        lines = wrapInLineObjects([line]);
                        __state = '13';
                    } else {
                        _var2 = options.textFormat;
                        if (_var2 === 'html') {
                            lines = splitToTokensHtml(text);
                            __state = '13';
                        } else {
                            if (_var2 === 'markdown') {
                                lines = splitToTokensMarkdown(text);
                                __state = '13';
                            } else {
                                _var7 = splitToTokens(text);
                                lines = wrapInLineObjects(_var7);
                                __state = '13';
                            }
                        }
                    }
                    break;
                case '12':
                    block.width += options.paddingLeft + options.paddingRight;
                    return block;
                case '13':
                    fontCache = initFontCache();
                    setFontToTokens(lines, options.font, fontCache);
                    fontObj = parseCssFont(options.font, fontCache);
                    block = {
                        width: 0,
                        options: options,
                        text: text,
                        lineHeight: options.lineHeight * fontObj.size,
                        fontSize: fontObj.size,
                        lines: lines
                    };
                    __state = '14';
                    break;
                case '14':
                    _var5 = lines;
                    _var6 = 0;
                    __state = '20';
                    break;
                case '20':
                    if (_var6 < _var5.length) {
                        line = _var5[_var6];
                        _var3 = line.tokens;
                        _var4 = 0;
                        __state = '23';
                    } else {
                        __state = '12';
                    }
                    break;
                case '23':
                    if (_var4 < _var3.length) {
                        token = _var3[_var4];
                        ctx.font = token.font;
                        if (token.font) {
                            fonts[token.font] = true;
                            __state = '27';
                        } else {
                            __state = '27';
                        }
                    } else {
                        _var8 = calcLineWidth(line.tokens);
                        block.width = Math.max(_var8, block.width);
                        _var6++;
                        __state = '20';
                    }
                    break;
                case '24':
                    token.width = size.width;
                    _var4++;
                    __state = '23';
                    break;
                case '27':
                    if (token.type === 'space') {
                        size = ctx.measureText(' ');
                        __state = '24';
                    } else {
                        size = ctx.measureText(token.text);
                        __state = '24';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function initFontCache() {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (unit.fontCache) {
                        __state = '3';
                    } else {
                        unit.fontCache = {};
                        __state = '3';
                    }
                    break;
                case '3':
                    return unit.fontCache;
                default:
                    return;
                }
            }
        }
        function calcLineWidth(tokens) {
            var _var2;
            _var2 = tokens.reduce(function (prev, token) {
                return token.width + prev;
            }, 0);
            return _var2;
        }
        function getExtraPadding(options, width, lineWidth) {
            var _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (options.link) {
                        __state = '8';
                    } else {
                        if (options.centerContent) {
                            _var2 = Math.round((width - lineWidth - options.paddingLeft - options.paddingRight) / 2);
                            return _var2;
                        } else {
                            __state = '8';
                        }
                    }
                    break;
                case '8':
                    return 0;
                default:
                    return;
                }
            }
        }
        function addFontVariant(fonts, fontObj, prop, value) {
            var fontObj2, font2;
            fontObj2 = clone(fontObj);
            fontObj2[prop] = value;
            font2 = cssFontToString(fontObj2);
            fonts[font2] = true;
            return;
        }
        function renderFlowBlockLine(ctx, line, left, top) {
            var baseLine, x, _var2, _var3, token;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    baseLine = top + line.baseLine + 1;
                    x = left + line.left;
                    _var2 = line.tokens;
                    _var3 = 0;
                    __state = '5';
                    break;
                case '5':
                    if (_var3 < _var2.length) {
                        token = _var2[_var3];
                        if (token.type === 'space') {
                            __state = '10';
                        } else {
                            ctx.font = token.font;
                            ctx.fillText(token.text, x, baseLine);
                            __state = '10';
                        }
                    } else {
                        return;
                    }
                    break;
                case '10':
                    x += token.width;
                    _var3++;
                    __state = '5';
                    break;
                default:
                    return;
                }
            }
        }
        function main() {
        }
        function DrakonCanvas_arrowRight(self) {
            var first, nodes, node;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    tracing.trace('DrakonCanvas.arrowRight');
                    if (self.visuals.config.canSelect) {
                        nodes = getNodesFromSelection(self);
                        if (nodes.length === 0) {
                            __state = '1';
                        } else {
                            first = nodes[0];
                            node = findNeighbour(first, 'right', 'tail');
                            if (node) {
                                __state = '12';
                            } else {
                                node = findClosestNode(self, function (n) {
                                    return n.x > first.x;
                                }, first, false);
                                if (node) {
                                    __state = '12';
                                } else {
                                    __state = '1';
                                }
                            }
                        }
                    } else {
                        __state = '1';
                    }
                    break;
                case '12':
                    self.showItem(node.id);
                    __state = '1';
                    break;
                default:
                    return;
                }
            }
        }
        function DrakonCanvas_onMouseDown(self, evt) {
            var _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    _var2 = isOnScrollbars(self, evt);
                    if (_var2) {
                        __state = '1';
                    } else {
                        evt.preventDefault();
                        evt.stopPropagation();
                        if (self.mouseEvents) {
                            self.mouseEvents.mouseDown(evt);
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
        function DrakonCanvas_exportJson(self) {
            var diagram, src, copy, _var3, _var2, _var4, id, item, _var5;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    tracing.trace('DrakonCanvas.exportJson');
                    diagram = {
                        items: {},
                        type: self.model.type
                    };
                    src = self.edit.diagram;
                    copyFieldsWithValue(diagram, src, [
                        'name',
                        'params',
                        'style'
                    ]);
                    _var3 = src.items;
                    _var2 = Object.keys(_var3);
                    _var4 = 0;
                    __state = '10';
                    break;
                case '10':
                    if (_var4 < _var2.length) {
                        id = _var2[_var4];
                        item = _var3[id];
                        copy = clone(item);
                        delete copy.id;
                        diagram.items[id] = copy;
                        _var4++;
                        __state = '10';
                    } else {
                        _var5 = JSON.stringify(diagram, null, 4);
                        return _var5;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function DrakonCanvas_showInsertionSockets(self, type) {
            var showInsert, _var2, _var3;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    tracing.trace('DrakonCanvas.showInsertionSockets', type);
                    _var3 = isReadonly(self);
                    if (_var3) {
                        __state = '1';
                    } else {
                        clearSockets(self.visuals);
                        _var2 = type;
                        if (_var2 === 'case') {
                            showInsert = function (visuals, node) {
                                showCaseSockets(visuals, node, 'insert');
                            };
                            forType(self.visuals, 'case', showInsert);
                            __state = '11';
                        } else {
                            if (_var2 === 'branch') {
                                showAllBranchSockets(self.visuals, 'insert');
                                __state = '11';
                            } else {
                                if (_var2 === 'par') {
                                    showAllParSockets(self.visuals, 'insert');
                                    __state = '11';
                                } else {
                                    if (_var2 === 'duration') {
                                        showDurationSockets(self.visuals, 'insert');
                                        __state = '11';
                                    } else {
                                        showBlockInsertSockets(self.visuals, 'insert', type);
                                        __state = '11';
                                    }
                                }
                            }
                        }
                    }
                    break;
                case '11':
                    paint(self);
                    __state = '1';
                    break;
                default:
                    return;
                }
            }
        }
        function toPrimitive(widget) {
            var edits, visuals, branches, first, rest, firstId, endId, ditch, i, _var2, _var3, _var4;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    edits = [];
                    visuals = widget.visuals;
                    branches = visuals.branches;
                    first = {};
                    rest = {};
                    firstId = branches[0];
                    _var2 = getBranch(visuals, 0);
                    scanBranchItems(_var2, first);
                    __state = '6';
                    break;
                case '4':
                    return edits;
                case '5':
                    redirectBranch(visuals, first, rest, endId, edits);
                    delete rest[firstId];
                    ditch = function (itemId) {
                        deleteWithDur(widget, itemId, edits);
                    };
                    _var4 = Object.keys(rest);
                    _var4.forEach(ditch);
                    updateItem(edits, branches[0], {
                        content: '',
                        branchId: 0
                    });
                    __state = '4';
                    break;
                case '6':
                    i = 1;
                    __state = '12';
                    break;
                case '7':
                    if (visuals.end) {
                        endId = visuals.end.itemId;
                        delete rest[endId];
                        __state = '18';
                    } else {
                        endId = createItem(widget.model, edits, { type: 'end' });
                        __state = '18';
                    }
                    break;
                case '12':
                    if (i < branches.length) {
                        _var3 = getBranch(visuals, i);
                        scanBranchItems(_var3, rest);
                        i++;
                        __state = '12';
                    } else {
                        __state = '7';
                    }
                    break;
                case '18':
                    rest[firstId] = true;
                    __state = '5';
                    break;
                default:
                    return;
                }
            }
        }
        function redirectBranch(visuals, branchNodes, oldTargets, newTarget, edits) {
            var node, _var3, _var2, _var4, itemId, _;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    _var3 = branchNodes;
                    _var2 = Object.keys(_var3);
                    _var4 = 0;
                    __state = '5';
                    break;
                case '4':
                    _var4++;
                    __state = '5';
                    break;
                case '5':
                    if (_var4 < _var2.length) {
                        itemId = _var2[_var4];
                        _ = _var3[itemId];
                        if (itemId in visuals.nodes) {
                            node = getNode(visuals, itemId);
                            if (node.one in oldTargets) {
                                updateItem(edits, itemId, { one: newTarget });
                                __state = '9';
                            } else {
                                __state = '9';
                            }
                        } else {
                            __state = '4';
                        }
                    } else {
                        return;
                    }
                    break;
                case '9':
                    if (node.two in oldTargets) {
                        updateItem(edits, itemId, { two: newTarget });
                        __state = '4';
                    } else {
                        __state = '4';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function redirectAddress(widget, address, targetId) {
            var edits, _var2;
            edits = [];
            redirectUpperItems(edits, address.up.links, targetId);
            _var2 = updateAndKeepSelection(widget, edits);
            return _var2;
        }
        function isSilhouette(visuals) {
            return visuals.branches.length > 1;
        }
        function scanBranchItems(node, visited) {
            var _var2, _var3, next;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (node.itemId in visited) {
                        __state = '1';
                    } else {
                        if (node.type === 'address') {
                            __state = '1';
                        } else {
                            visited[node.itemId] = node;
                            _var2 = node.next;
                            _var3 = 0;
                            __state = '8';
                        }
                    }
                    break;
                case '8':
                    if (_var3 < _var2.length) {
                        next = _var2[_var3];
                        scanBranchItems(next, visited);
                        _var3++;
                        __state = '8';
                    } else {
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function toSilhouette(widget) {
            var edits, b1, b2, b3, fb, branch3, branch2, model, visuals, end;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    model = widget.model;
                    visuals = widget.visuals;
                    end = visuals.end;
                    edits = [];
                    b1 = visuals.config.branch + '1';
                    b2 = visuals.config.branch + '2';
                    b3 = visuals.config.exit;
                    fb = firstBranchNode(visuals);
                    __state = '5';
                    break;
                case '4':
                    return edits;
                case '5':
                    branch3 = createItem(model, edits, {
                        type: 'branch',
                        content: b3,
                        one: end.itemId,
                        branchId: 3
                    });
                    branch2 = createItem(model, edits, {
                        type: 'branch',
                        content: b2,
                        one: branch3,
                        branchId: 2
                    });
                    updateItem(edits, fb.itemId, {
                        content: b1,
                        branchId: 1
                    });
                    __state = '6';
                    break;
                case '6':
                    redirectUpperItems(edits, end.up.links, branch2);
                    __state = '4';
                    break;
                default:
                    return;
                }
            }
        }
        function DrakonCanvas_arrowLeft(self) {
            var first, nodes, node;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    tracing.trace('DrakonCanvas.arrowLeft');
                    if (self.visuals.config.canSelect) {
                        nodes = getNodesFromSelection(self);
                        if (nodes.length === 0) {
                            __state = '1';
                        } else {
                            first = nodes[0];
                            node = findNeighbour(first, 'left', 'head');
                            if (node) {
                                __state = '12';
                            } else {
                                node = findClosestNode(self, function (n) {
                                    return n.x < first.x;
                                }, first, false);
                                if (node) {
                                    __state = '12';
                                } else {
                                    __state = '1';
                                }
                            }
                        }
                    } else {
                        __state = '1';
                    }
                    break;
                case '12':
                    self.showItem(node.id);
                    __state = '1';
                    break;
                default:
                    return;
                }
            }
        }
        function DrakonCanvas_toggleSilhouette(self) {
            var edits, _var2, _var3, _var4;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    tracing.trace('DrakonCanvas.toggleSilhouette');
                    _var4 = isReadonly(self);
                    if (_var4) {
                        __state = '1';
                    } else {
                        _var2 = isSilhouette(self.visuals);
                        if (_var2) {
                            edits = toPrimitive(self);
                            __state = '_item3';
                        } else {
                            edits = toSilhouette(self);
                            __state = '_item3';
                        }
                    }
                    break;
                case '_item3':
                    _var3 = doEdit(self, edits);
                    return _var3;
                default:
                    return;
                }
            }
        }
        function findHorizontalGuide(widget, id, box, y) {
            var left, right, found, guide, ebox, _var2, _var3, element, _var4;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    left = box.left;
                    right = box.right;
                    found = false;
                    _var2 = widget.visuals.free;
                    _var3 = 0;
                    __state = '5';
                    break;
                case '4':
                    _var3++;
                    __state = '5';
                    break;
                case '5':
                    if (_var3 < _var2.length) {
                        element = _var2[_var3];
                        if (element.id === id) {
                            __state = '4';
                        } else {
                            _var4 = canGuide(widget, element);
                            if (_var4) {
                                ebox = getGuideBox(element);
                                if (ebox.top === y) {
                                    __state = '13';
                                } else {
                                    if (ebox.bottom === y) {
                                        __state = '13';
                                    } else {
                                        __state = '4';
                                    }
                                }
                            } else {
                                __state = '4';
                            }
                        }
                    } else {
                        __state = '16';
                    }
                    break;
                case '13':
                    left = Math.min(left, ebox.left);
                    right = Math.max(right, ebox.right);
                    found = true;
                    __state = '4';
                    break;
                case '15':
                    return;
                case '16':
                    if (found) {
                        guide = {
                            x1: left,
                            y1: y,
                            x2: right,
                            y2: y
                        };
                        widget.visuals.guides.push(guide);
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
        function getGuideBox(element) {
            if (element.innerBox) {
                return element.innerBox;
            } else {
                return element.box;
            }
        }
        function findHorizontalCentralGuide(widget, id, box, y) {
            var left, right, found, ebox, guide, _var2, _var3, element, _var4, _var5, _var6;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    left = box.centerX;
                    right = box.centerX;
                    found = false;
                    _var2 = widget.visuals.free;
                    _var3 = 0;
                    __state = '5';
                    break;
                case '4':
                    _var3++;
                    __state = '5';
                    break;
                case '5':
                    if (_var3 < _var2.length) {
                        element = _var2[_var3];
                        if (element.id === id) {
                            __state = '4';
                        } else {
                            _var6 = canGuide(widget, element);
                            if (_var6) {
                                ebox = getGuideBox(element);
                                if (ebox.centerY === y) {
                                    left = Math.min(left, ebox.centerX);
                                    right = Math.max(right, ebox.centerX);
                                    found = true;
                                    __state = '4';
                                } else {
                                    __state = '4';
                                }
                            } else {
                                __state = '4';
                            }
                        }
                    } else {
                        __state = '16';
                    }
                    break;
                case '15':
                    return;
                case '16':
                    if (found) {
                        _var4 = Math.round(y);
                        _var5 = Math.round(y);
                        guide = {
                            x1: left,
                            y1: _var4,
                            x2: right,
                            y2: _var5
                        };
                        widget.visuals.guides.push(guide);
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
        function findVerticalGuide(widget, id, box, x) {
            var top, bottom, found, guide, ebox, _var2, _var3, element, _var4;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    top = box.top;
                    bottom = box.bottom;
                    found = false;
                    _var2 = widget.visuals.free;
                    _var3 = 0;
                    __state = '5';
                    break;
                case '4':
                    _var3++;
                    __state = '5';
                    break;
                case '5':
                    if (_var3 < _var2.length) {
                        element = _var2[_var3];
                        if (element.id === id) {
                            __state = '4';
                        } else {
                            _var4 = canGuide(widget, element);
                            if (_var4) {
                                ebox = getGuideBox(element);
                                if (ebox.left === x) {
                                    __state = '13';
                                } else {
                                    if (ebox.right === x) {
                                        __state = '13';
                                    } else {
                                        __state = '4';
                                    }
                                }
                            } else {
                                __state = '4';
                            }
                        }
                    } else {
                        __state = '16';
                    }
                    break;
                case '13':
                    top = Math.min(top, ebox.top);
                    bottom = Math.max(bottom, ebox.bottom);
                    found = true;
                    __state = '4';
                    break;
                case '15':
                    return;
                case '16':
                    if (found) {
                        guide = {
                            x1: x,
                            y1: top,
                            x2: x,
                            y2: bottom
                        };
                        widget.visuals.guides.push(guide);
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
        function findVerticalCentralGuide(widget, id, box, x) {
            var left, right, found, top, bottom, guide, ebox, _var2, _var3, element, _var4, _var5, _var6;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    top = box.centerY;
                    bottom = box.centerY;
                    found = false;
                    _var2 = widget.visuals.free;
                    _var3 = 0;
                    __state = '5';
                    break;
                case '4':
                    _var3++;
                    __state = '5';
                    break;
                case '5':
                    if (_var3 < _var2.length) {
                        element = _var2[_var3];
                        if (element.id === id) {
                            __state = '4';
                        } else {
                            _var6 = canGuide(widget, element);
                            if (_var6) {
                                ebox = getGuideBox(element);
                                if (ebox.centerX === x) {
                                    left = Math.min(left, ebox.centerX);
                                    right = Math.max(right, ebox.centerX);
                                    top = Math.min(top, ebox.centerY);
                                    bottom = Math.max(bottom, ebox.centerY);
                                    found = true;
                                    __state = '4';
                                } else {
                                    __state = '4';
                                }
                            } else {
                                __state = '4';
                            }
                        }
                    } else {
                        __state = '16';
                    }
                    break;
                case '15':
                    return;
                case '16':
                    if (found) {
                        _var4 = Math.round(x);
                        _var5 = Math.round(x);
                        guide = {
                            x1: _var4,
                            y1: top,
                            x2: _var5,
                            y2: bottom
                        };
                        widget.visuals.guides.push(guide);
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
        function DrakonCanvas_render(self, width, height, config) {
            var canvas, container, scrollable, factor;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    tracing.trace('DrakonCanvas.render');
                    container = div({
                        display: 'inline-block',
                        position: 'relative',
                        left: '0px',
                        top: '0px',
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden'
                    });
                    canvas = html.createElement('canvas');
                    factor = html.getRetinaFactor();
                    canvas.style.position = 'absolute';
                    canvas.style.display = 'inline-block';
                    canvas.style.left = '0px';
                    canvas.style.top = '0px';
                    canvas.style.width = width + 'px';
                    canvas.style.height = height + 'px';
                    canvas.width = width * factor;
                    canvas.height = height * factor;
                    self.width = width;
                    self.height = height;
                    self.canvas = canvas;
                    self.container = container;
                    html.add(container, canvas);
                    __state = '18';
                    break;
                case '17':
                    return container;
                case '18':
                    self.config = buildConfig(config);
                    createStyles(self);
                    __state = '39';
                    break;
                case '29':
                    scrollable = 'drakon-scrollable-container' + self.myStyleId;
                    self.scrollableContainer = div(scrollable);
                    html.add(container, self.scrollableContainer);
                    self.scrollable = div('drakon-scrollable');
                    html.add(self.scrollableContainer, self.scrollable);
                    registerEvent(self.scrollableContainer, 'scroll', self.onScroll);
                    __state = '51';
                    break;
                case '39':
                    if (config.canvasIcons) {
                        __state = '29';
                    } else {
                        self.contentContainer = div({
                            display: 'inline-block',
                            position: 'absolute',
                            left: '0px',
                            top: '0px',
                            width: '100vw',
                            height: '100vh',
                            'pointer-events': 'none'
                        });
                        html.add(container, self.contentContainer);
                        __state = '29';
                    }
                    break;
                case '51':
                    registerEvent(self.scrollableContainer, 'mousedown', self.onMouseDown);
                    registerEvent(self.scrollableContainer, 'mousemove', self.onMouseMove);
                    registerEvent(self.scrollableContainer, 'mouseup', self.onMouseUp);
                    registerEvent(self.scrollableContainer, 'mouseleave', self.onMouseLeave);
                    registerEvent(self.scrollableContainer, 'contextmenu', self.onContextMenu);
                    __state = '17';
                    break;
                default:
                    return;
                }
            }
        }
        function resetSelection(widget) {
            var _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (widget.selection) {
                        _var2 = Object.keys(widget.selection.prims);
                        if (_var2 === 0) {
                            __state = '3';
                        } else {
                            widget.config.onSelectionChanged([]);
                            __state = '3';
                        }
                    } else {
                        __state = '3';
                    }
                    break;
                case '3':
                    resetSelectionCore(widget);
                    return;
                default:
                    return;
                }
            }
        }
        function findHead(selection, referenced) {
            var _var3, _var2, _var4, id, type;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    _var3 = selection.prims;
                    _var2 = Object.keys(_var3);
                    _var4 = 0;
                    __state = '5';
                    break;
                case '5':
                    if (_var4 < _var2.length) {
                        id = _var2[_var4];
                        type = _var3[id];
                        if (type === 'node') {
                            if (id in referenced) {
                                _var4++;
                                __state = '5';
                            } else {
                                return id;
                            }
                        } else {
                            return undefined;
                        }
                    } else {
                        return undefined;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function getNodesFromSelection(widget) {
            var result, node, visuals, _var3, _var2, _var4, id, elType;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    visuals = widget.visuals;
                    result = [];
                    _var3 = widget.selection.prims;
                    _var2 = Object.keys(_var3);
                    _var4 = 0;
                    __state = '6';
                    break;
                case '5':
                    _var4++;
                    __state = '6';
                    break;
                case '6':
                    if (_var4 < _var2.length) {
                        id = _var2[_var4];
                        elType = _var3[id];
                        if (elType === 'node') {
                            node = getNode(visuals, id);
                            result.push(node);
                            __state = '5';
                        } else {
                            __state = '5';
                        }
                    } else {
                        return result;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function blockSelect(widget) {
            var selection, visuals, selectionIds, id, prim, snode, _var3, _var2, _var4, node, _var5, _var6, _var7, _var8, _var9, _var10;
            var __state = '37';
            while (true) {
                switch (__state) {
                case '2':
                    _var3 = visuals.nodes;
                    _var2 = Object.keys(_var3);
                    _var4 = 0;
                    __state = '5';
                    break;
                case '4':
                    _var4++;
                    __state = '5';
                    break;
                case '5':
                    if (_var4 < _var2.length) {
                        id = _var2[_var4];
                        node = _var3[id];
                        _var7 = isSelected(widget, id);
                        if (_var7) {
                            __state = '4';
                        } else {
                            _var6 = canSelectNode(node);
                            if (_var6) {
                                _var5 = boxesIntersect(visuals.selectionFrame, node.box);
                                if (_var5) {
                                    addToSelection(widget, node);
                                    __state = '4';
                                } else {
                                    __state = '4';
                                }
                            } else {
                                __state = '4';
                            }
                        }
                    } else {
                        __state = '15';
                    }
                    break;
                case '15':
                    return;
                case '37':
                    selection = widget.selection;
                    visuals = widget.visuals;
                    selectionIds = Object.keys(selection.prims);
                    if (selectionIds.length === 0) {
                        _var8 = tryAddFreeToBlock(widget);
                        if (_var8) {
                            reportSelection(widget);
                            __state = '15';
                        } else {
                            __state = '2';
                        }
                    } else {
                        id = selectionIds[0];
                        prim = selection.prims[id];
                        if (prim === 'node') {
                            snode = getNode(visuals, id);
                            _var10 = canSelectNode(snode);
                            if (_var10) {
                                __state = '2';
                            } else {
                                __state = '15';
                            }
                        } else {
                            if (prim === 'free') {
                                _var9 = tryAddFreeToBlock(widget);
                                if (_var9) {
                                    reportSelection(widget);
                                    __state = '15';
                                } else {
                                    __state = '15';
                                }
                            } else {
                                __state = '15';
                            }
                        }
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function addToSelection(widget, node) {
            var _var2;
            _var2 = addToSelectionCore(widget, node);
            if (_var2) {
                reportSelection(widget);
                return true;
            } else {
                return false;
            }
        }
        function tryAddFreeToBlock(widget) {
            var added, visuals, selection, box, _var2, _var3, element, _var4, _var5;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    visuals = widget.visuals;
                    selection = widget.selection;
                    added = false;
                    _var2 = visuals.free;
                    _var3 = 0;
                    __state = '5';
                    break;
                case '4':
                    _var3++;
                    __state = '5';
                    break;
                case '5':
                    if (_var3 < _var2.length) {
                        element = _var2[_var3];
                        _var5 = isSelected(widget, element.id);
                        if (_var5) {
                            __state = '4';
                        } else {
                            if (element.innerBox) {
                                box = element.innerBox;
                                __state = '_item4';
                            } else {
                                box = element.box;
                                __state = '_item4';
                            }
                        }
                    } else {
                        return added;
                    }
                    break;
                case '_item4':
                    _var4 = boxContains(visuals.selectionFrame, box);
                    if (_var4) {
                        selection.prims[element.id] = 'free';
                        added = true;
                        __state = '4';
                    } else {
                        __state = '4';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function selectClusterStepBack(widget, context, nodeInfo) {
            var node, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (nodeInfo.include) {
                        context.arrows--;
                        __state = '1';
                    } else {
                        context.arrows++;
                        nodeInfo.include = true;
                        node = nodeInfo.node;
                        _var2 = clusterComplete(context);
                        if (_var2) {
                            __state = '1';
                        } else {
                            selectClusterStep(widget, context, node, node.next[0]);
                            __state = '1';
                        }
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function addOne(widget, headNode, node) {
            var selection;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    selection = widget.selection;
                    if (node.id in selection.prims) {
                        __state = '8';
                    } else {
                        selection.prims[node.id] = 'node';
                        if (node.side) {
                            selection.prims[node.side] = 'node';
                            __state = '4';
                        } else {
                            __state = '4';
                        }
                    }
                    break;
                case '3':
                    return node;
                case '4':
                    if (headNode) {
                        if (node.y < headNode.y) {
                            __state = '3';
                        } else {
                            if (node.y === headNode.y) {
                                if (node.x < headNode.x) {
                                    __state = '3';
                                } else {
                                    __state = '8';
                                }
                            } else {
                                __state = '8';
                            }
                        }
                    } else {
                        __state = '3';
                    }
                    break;
                case '8':
                    return headNode;
                default:
                    return;
                }
            }
        }
        function isSelected(widget, id) {
            return id in widget.selection.prims;
        }
        function findNeighbour(node, nodeProp, edgeProp) {
            var edge;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    __state = '10';
                    break;
                case '10':
                    edge = node[nodeProp];
                    if (edge) {
                        node = edge[edgeProp];
                        if (node.type === 'junction') {
                            __state = '10';
                        } else {
                            if (node.type === 'arrow-loop') {
                                __state = '10';
                            } else {
                                return node;
                            }
                        }
                    } else {
                        return undefined;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function selectMany(widget, selectable) {
            var referenced, _var2, _var3, edit;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    referenced = {};
                    _var2 = selectable;
                    _var3 = 0;
                    __state = '5';
                    break;
                case '5':
                    if (_var3 < _var2.length) {
                        edit = _var2[_var3];
                        addEditToSelection(widget, edit, referenced);
                        _var3++;
                        __state = '5';
                    } else {
                        widget.selection.head = findHead(widget.selection, referenced);
                        return;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function updateSelectionFrame(widget, startX, startY, evt) {
            var start, current, left, width, top, height, visuals, evt0;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    visuals = widget.visuals;
                    evt0 = {
                        clientX: startX,
                        clientY: startY,
                        target: evt.target
                    };
                    start = toDiagram(widget, evt0);
                    current = toDiagram(widget, evt);
                    if (visuals.selectionFrame) {
                        __state = '9';
                    } else {
                        visuals.selectionFrame = {};
                        __state = '9';
                    }
                    break;
                case '7':
                    visuals.selectionFrame.left = left;
                    visuals.selectionFrame.top = top;
                    visuals.selectionFrame.width = width;
                    visuals.selectionFrame.height = height;
                    return;
                case '9':
                    if (start.x < current.x) {
                        left = start.x;
                        width = current.x - start.x;
                        __state = '12';
                    } else {
                        left = current.x;
                        width = start.x - current.x;
                        __state = '12';
                    }
                    break;
                case '12':
                    if (start.y < current.y) {
                        top = start.y;
                        height = current.y - start.y;
                        __state = '7';
                    } else {
                        top = current.y;
                        height = start.y - current.y;
                        __state = '7';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function toDiagram(widget, evt) {
            var rect, widgetX, widgetY, _var2;
            rect = widget.canvas.getBoundingClientRect();
            widgetX = evt.clientX - rect.left;
            widgetY = evt.clientY - rect.top;
            _var2 = widgetToDiagram(widget, widgetX, widgetY);
            return _var2;
        }
        function getDistance(n1, n2, vertical) {
            var dx, dy, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    dx = n1.x - n2.x;
                    dy = n1.y - n2.y;
                    if (vertical) {
                        dx *= 4;
                        __state = '_item2';
                    } else {
                        dy *= 4;
                        __state = '_item2';
                    }
                    break;
                case '_item2':
                    _var2 = Math.sqrt(dx * dx + dy * dy);
                    return _var2;
                default:
                    return;
                }
            }
        }
        function selectCluster(widget, headNode, node) {
            var included, result, start, context, info, _var2, _var4, _var3, _var5, id, _var6, _var7, inode, _var8, _var9, _var10;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    _var8 = isSelected(widget, node.id);
                    if (_var8) {
                        return headNode;
                    } else {
                        __state = '7';
                    }
                    break;
                case '5':
                    included = [];
                    _var4 = context.nodes;
                    _var3 = Object.keys(_var4);
                    _var5 = 0;
                    __state = '21';
                    break;
                case '7':
                    _var2 = node.type;
                    if (_var2 === 'select') {
                        start = node;
                        __state = '35';
                    } else {
                        if (_var2 === 'case') {
                            start = node.select;
                            __state = '35';
                        } else {
                            if (_var2 === 'loopbegin') {
                                start = node;
                                __state = '35';
                            } else {
                                if (_var2 === 'loopend') {
                                    start = node.loopStart;
                                    __state = '35';
                                } else {
                                    if (_var2 === 'arrow-loop') {
                                        start = node;
                                        __state = '35';
                                    } else {
                                        if (_var2 === 'question') {
                                            start = node;
                                            __state = '35';
                                        } else {
                                            if (_var2 === 'junction') {
                                                start = goLeft(node);
                                                _var10 = addParBlockToSelection(widget, headNode, start);
                                                return _var10;
                                            } else {
                                                _var9 = addOne(widget, headNode, node);
                                                return _var9;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    break;
                case '20':
                    _var5++;
                    __state = '21';
                    break;
                case '21':
                    if (_var5 < _var3.length) {
                        id = _var3[_var5];
                        info = _var4[id];
                        if (info.include) {
                            included.push(info.node);
                            __state = '20';
                        } else {
                            __state = '20';
                        }
                    } else {
                        result = headNode;
                        _var6 = included;
                        _var7 = 0;
                        __state = '26';
                    }
                    break;
                case '26':
                    if (_var7 < _var6.length) {
                        inode = _var6[_var7];
                        result = addOne(widget, result, inode);
                        _var7++;
                        __state = '26';
                    } else {
                        return result;
                    }
                    break;
                case '35':
                    context = {
                        paths: 0,
                        nodes: {},
                        arrows: 0,
                        loops: {}
                    };
                    info = getNodeInfo(context, start);
                    selectClusterStepNext(widget, context, info);
                    __state = '5';
                    break;
                default:
                    return;
                }
            }
        }
        function deselectAll(widget) {
            clearSockets(widget.visuals);
            resetSelection(widget);
            return;
        }
        function findVisualItem(widget, pos) {
            var visuals, handle, element, node, edge, _var2, _var3, _var4;
            visuals = widget.visuals;
            _var2 = hitNugget(visuals, pos);
            if (_var2) {
                return { elType: 'nugget' };
            } else {
                handle = findHandle(visuals, pos);
                if (handle) {
                    return handle;
                } else {
                    element = findFree(widget, pos);
                    if (element) {
                        _var3 = freeToVisualItem(widget, element);
                        return _var3;
                    } else {
                        node = findNode(visuals, pos);
                        if (node) {
                            _var4 = nodeToVisualItem(widget, node);
                            return _var4;
                        } else {
                            edge = findEdge(visuals, pos);
                            if (edge) {
                                return {
                                    id: edge.id,
                                    type: edge.type,
                                    elType: 'edge'
                                };
                            } else {
                                return undefined;
                            }
                        }
                    }
                }
            }
        }
        function nodeToVisualItemCore(widget, node, elType) {
            var prim;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    prim = {
                        id: node.id,
                        type: node.type,
                        elType: elType,
                        content: node.content || '',
                        secondary: node.secondary || '',
                        link: node.link || '',
                        style: node.style || ''
                    };
                    setNotNull(node, prim, 'x');
                    setNotNull(node, prim, 'y');
                    setNotNull(node, prim, 'w');
                    setNotNull(node, prim, 'h');
                    setNotNull(node, prim, 'flag1');
                    setNotNull(node, prim, 'branchId');
                    setNotNull(node, prim, 'one');
                    setNotNull(node, prim, 'two');
                    setNotNull(node, prim, 'side');
                    setNotNull(node, prim, 'margin');
                    if (node.innerBox) {
                        Object.assign(prim, node.innerBox);
                        __state = '8';
                    } else {
                        if (node.box) {
                            Object.assign(prim, node.box);
                            __state = '8';
                        } else {
                            __state = '8';
                        }
                    }
                    break;
                case '8':
                    primToClient(widget, prim);
                    return prim;
                default:
                    return;
                }
            }
        }
        function findWayUp(lowNode, highNode) {
            var context, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (highNode) {
                        context = {
                            visited: {},
                            leak: false
                        };
                        findWayUpStep(context, lowNode, highNode);
                        if (highNode.id in context.visited) {
                            if (context.leak) {
                                __state = '7';
                            } else {
                                _var2 = objectValues(context.visited);
                                return _var2;
                            }
                        } else {
                            __state = '7';
                        }
                    } else {
                        return [lowNode];
                    }
                    break;
                case '7':
                    return [];
                default:
                    return;
                }
            }
        }
        function diagramToWidgetX(widget, diaX) {
            var zoom;
            zoom = widget.zoomFactor;
            return (diaX - widget.visuals.scrollX) * zoom;
        }
        function toWidget(element, x, y) {
            var rect, widgetX, widgetY;
            rect = element.getBoundingClientRect();
            widgetX = x - rect.left;
            widgetY = y - rect.top;
            return {
                x: widgetX,
                y: widgetY
            };
        }
        function addToSelectionCore(widget, node) {
            var selection, visuals, head, wayUp, wayDown;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    selection = widget.selection;
                    visuals = widget.visuals;
                    if (selection.head) {
                        head = visuals.nodes[selection.head];
                        __state = '7';
                    } else {
                        head = undefined;
                        __state = '7';
                    }
                    break;
                case '7':
                    wayUp = findWayUp(node, head);
                    if (wayUp.length) {
                        selectPath(widget, wayUp, head);
                        __state = '14';
                    } else {
                        wayDown = findWayUp(head, node);
                        if (wayDown.length) {
                            selectPath(widget, wayDown, head);
                            __state = '14';
                        } else {
                            return false;
                        }
                    }
                    break;
                case '14':
                    return true;
                default:
                    return;
                }
            }
        }
        function printPrim(visuals, prim) {
            var node, edge;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (prim.id in visuals.nodes) {
                        node = visuals.nodes[prim.id];
                        console.log(node);
                        __state = '1';
                    } else {
                        if (prim.id in visuals.edges) {
                            edge = visuals.edges[prim.id];
                            console.log(edge);
                            __state = '1';
                        } else {
                            console.log('Unknown primitive', prim);
                            __state = '1';
                        }
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function selectPrim(widget, id) {
            var selection, visuals, element, item, node;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    clearSockets(widget.visuals);
                    resetSelectionCore(widget);
                    selection = widget.selection;
                    visuals = widget.visuals;
                    element = getFree(visuals, id);
                    if (element) {
                        selection.prims[id] = 'free';
                        item = freeToVisualItem(widget, element);
                        __state = '33';
                    } else {
                        if (id in visuals.nodes) {
                            selection.head = id;
                            node = getNode(visuals, id);
                            selection.prims[id] = 'node';
                            item = nodeToVisualItem(widget, node);
                            __state = '33';
                        } else {
                            if (id in visuals.edges) {
                                selection.prims[id] = 'edge';
                                __state = '1';
                            } else {
                                throw new Error('Can\'t select ' + id);
                            }
                        }
                    }
                    break;
                case '33':
                    widget.config.onSelectionChanged([item]);
                    __state = '1';
                    break;
                default:
                    return;
                }
            }
        }
        function getNodeInfo(context, node) {
            var nodeInfo;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (node.id in context.nodes) {
                        nodeInfo = context.nodes[node.id];
                        __state = '7';
                    } else {
                        nodeInfo = {
                            node: node,
                            include: false,
                            remaining: node.prev.length,
                            aremaining: node.aprev.length
                        };
                        context.nodes[node.id] = nodeInfo;
                        __state = '7';
                    }
                    break;
                case '7':
                    return nodeInfo;
                default:
                    return;
                }
            }
        }
        function findClosestNode(widget, filter, srcNode, vertical) {
            var best, distance, current, _var3, _var2, _var4, id, node, _var5;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    best = undefined;
                    distance = 10000000000;
                    _var3 = widget.visuals.nodes;
                    _var2 = Object.keys(_var3);
                    _var4 = 0;
                    __state = '5';
                    break;
                case '4':
                    _var4++;
                    __state = '5';
                    break;
                case '5':
                    if (_var4 < _var2.length) {
                        id = _var2[_var4];
                        node = _var3[id];
                        _var5 = filter(node);
                        if (_var5) {
                            if (node.type === 'junction') {
                                __state = '4';
                            } else {
                                if (node.type === 'arrow-loop') {
                                    __state = '4';
                                } else {
                                    current = getDistance(node, srcNode, vertical);
                                    if (current < distance) {
                                        best = node;
                                        distance = current;
                                        __state = '4';
                                    } else {
                                        __state = '4';
                                    }
                                }
                            }
                        } else {
                            __state = '4';
                        }
                    } else {
                        return best;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function nodeToVisualItem(widget, node) {
            var _var2;
            _var2 = nodeToVisualItemCore(widget, node, 'node');
            return _var2;
        }
        function findNode(visuals, pos) {
            var _var2;
            _var2 = findElementAt(visuals.nodes, pos.x, pos.y);
            return _var2;
        }
        function widgetToDiagram(widget, widgetX, widgetY) {
            var x, y, zoom, _var2, _var3;
            zoom = widget.zoomFactor;
            x = widgetX / zoom + widget.visuals.scrollX;
            y = widgetY / zoom + widget.visuals.scrollY;
            _var2 = Math.floor(x);
            _var3 = Math.floor(y);
            return {
                x: _var2,
                y: _var3
            };
        }
        function addEditToSelection(widget, edit, referenced) {
            var selection, id, fields, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    selection = widget.selection;
                    id = edit.id;
                    fields = edit.fields;
                    _var2 = isFree(widget, fields);
                    if (_var2) {
                        selection.prims[id] = 'free';
                        __state = '1';
                    } else {
                        if (fields.one) {
                            referenced[fields.one] = true;
                            __state = '14';
                        } else {
                            __state = '14';
                        }
                    }
                    break;
                case '11':
                    selection.prims[id] = 'node';
                    __state = '1';
                    break;
                case '14':
                    if (fields.two) {
                        referenced[fields.two] = true;
                        __state = '11';
                    } else {
                        __state = '11';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function reportSelection(widget) {
            var prims;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (widget.config.onSelectionChanged) {
                        prims = getSelectedPrims(widget);
                        widget.config.onSelectionChanged(prims);
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
        function addParBlockToSelection(widget, headNode, start) {
            var endId, visited, result, node, _var3, _var2, _var4, id, _;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    endId = getParTarget(start);
                    visited = {};
                    visited[endId] = true;
                    scanTwoGraph(widget.model.items, visited, start.id);
                    __state = '7';
                    break;
                case '6':
                    return result;
                case '7':
                    result = headNode;
                    _var3 = visited;
                    _var2 = Object.keys(_var3);
                    _var4 = 0;
                    __state = '9';
                    break;
                case '9':
                    if (_var4 < _var2.length) {
                        id = _var2[_var4];
                        _ = _var3[id];
                        node = getNode(widget.visuals, id);
                        result = addOne(widget, result, node);
                        _var4++;
                        __state = '9';
                    } else {
                        __state = '6';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function canSelectNode(node) {
            var _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    _var2 = node.type;
                    if (_var2 === 'end') {
                        __state = '3';
                    } else {
                        if (_var2 === 'duration') {
                            __state = '3';
                        } else {
                            if (_var2 === 'header') {
                                __state = '3';
                            } else {
                                if (_var2 === 'branch') {
                                    __state = '3';
                                } else {
                                    if (_var2 === 'address') {
                                        __state = '3';
                                    } else {
                                        if (_var2 === 'junction') {
                                            if (node.subtype === 'parbegin') {
                                                return true;
                                            } else {
                                                __state = '3';
                                            }
                                        } else {
                                            if (_var2 === 'action') {
                                                if (node.id === 'params') {
                                                    return false;
                                                } else {
                                                    __state = '13';
                                                }
                                            } else {
                                                __state = '13';
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    break;
                case '3':
                    return false;
                case '13':
                    return true;
                default:
                    return;
                }
            }
        }
        function findWayUpStep(context, node, highNode) {
            var visited, _var2, _var3, prev;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    visited = context.visited;
                    if (node.type === 'branch') {
                        context.leak = true;
                        __state = '1';
                    } else {
                        if (node.id in visited) {
                            __state = '1';
                        } else {
                            visited[node.id] = node;
                            if (node === highNode) {
                                __state = '1';
                            } else {
                                if (node.type === 'case') {
                                    findWayUpStep(context, node.select, highNode);
                                    __state = '1';
                                } else {
                                    _var2 = node.prev;
                                    _var3 = 0;
                                    __state = '16';
                                }
                            }
                        }
                    }
                    break;
                case '16':
                    if (_var3 < _var2.length) {
                        prev = _var2[_var3];
                        findWayUpStep(context, prev, highNode);
                        _var3++;
                        __state = '16';
                    } else {
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function selectPath(widget, path, head) {
            var newHead, _var2, _var3, step;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    newHead = head;
                    _var2 = path;
                    _var3 = 0;
                    __state = '6';
                    break;
                case '6':
                    if (_var3 < _var2.length) {
                        step = _var2[_var3];
                        newHead = selectCluster(widget, newHead, step);
                        _var3++;
                        __state = '6';
                    } else {
                        widget.selection.head = newHead.id;
                        return;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function findEdge(visuals, pos) {
            var _var2;
            _var2 = findElementAt(visuals.edges, pos.x, pos.y);
            return _var2;
        }
        function getSelectedFree(widget) {
            var visuals, prims, result, element, _var3, _var2, _var4, id, type;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    visuals = widget.visuals;
                    prims = widget.selection.prims;
                    result = [];
                    _var3 = prims;
                    _var2 = Object.keys(_var3);
                    _var4 = 0;
                    __state = '5';
                    break;
                case '4':
                    _var4++;
                    __state = '5';
                    break;
                case '5':
                    if (_var4 < _var2.length) {
                        id = _var2[_var4];
                        type = _var3[id];
                        if (type === 'free') {
                            element = getFree(visuals, id);
                            result.push(element);
                            __state = '4';
                        } else {
                            __state = '4';
                        }
                    } else {
                        return result;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function freeToVisualItem(widget, node) {
            var _var2;
            _var2 = nodeToVisualItemCore(widget, node, 'free');
            return _var2;
        }
        function findEditsToSelect(edits) {
            var result, _var2, _var3, edit;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    result = [];
                    _var2 = edits;
                    _var3 = 0;
                    __state = '7';
                    break;
                case '6':
                    _var3++;
                    __state = '7';
                    break;
                case '7':
                    if (_var3 < _var2.length) {
                        edit = _var2[_var3];
                        if (edit.op === 'insert') {
                            if (edit.fields.type === 'branch') {
                                return [];
                            } else {
                                result.push(edit);
                                __state = '6';
                            }
                        } else {
                            __state = '6';
                        }
                    } else {
                        return result;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function toClient(widget, diaX, diaY) {
            var rect, clientX, clientY, widgetX, widgetY, visuals;
            visuals = widget.visuals;
            widgetX = diagramToWidgetX(widget, diaX);
            widgetY = diagramToWidgetY(widget, diaY);
            rect = getWidgetRect(widget);
            clientX = widgetX + rect.left;
            clientY = widgetY + rect.top;
            return {
                x: clientX,
                y: clientY
            };
        }
        function selectClusterStep(widget, context, src, node) {
            var nodeInfo, prev, joins, aprev, _var2, _var3;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (node.type === 'end') {
                        __state = '1';
                    } else {
                        if (node.type === 'address') {
                            __state = '1';
                        } else {
                            nodeInfo = getNodeInfo(context, node);
                            _var2 = isBackLink(src, node);
                            if (_var2) {
                                aprev = nodeInfo.node.aprev.length;
                                nodeInfo.aremaining--;
                                if (nodeInfo.aremaining === 0) {
                                    context.paths -= aprev;
                                    selectClusterStepBack(widget, context, nodeInfo);
                                    __state = '1';
                                } else {
                                    __state = '1';
                                }
                            } else {
                                prev = nodeInfo.node.prev.length;
                                if (prev === 1) {
                                    __state = '14';
                                } else {
                                    nodeInfo.remaining--;
                                    if (nodeInfo.remaining === 0) {
                                        joins = prev - 1;
                                        context.paths -= joins;
                                        _var3 = clusterComplete(context);
                                        if (_var3) {
                                            __state = '1';
                                        } else {
                                            __state = '14';
                                        }
                                    } else {
                                        __state = '1';
                                    }
                                }
                            }
                        }
                    }
                    break;
                case '14':
                    selectClusterStepNext(widget, context, nodeInfo);
                    __state = '1';
                    break;
                default:
                    return;
                }
            }
        }
        function diagramToWidgetY(widget, diaY) {
            var zoom;
            zoom = widget.zoomFactor;
            return (diaY - widget.visuals.scrollY) * zoom;
        }
        function findElementAt(elements, x, y) {
            var _var3, _var2, _var4, id, element, _var5;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    _var3 = elements;
                    _var2 = Object.keys(_var3);
                    _var4 = 0;
                    __state = '5';
                    break;
                case '4':
                    _var4++;
                    __state = '5';
                    break;
                case '5':
                    if (_var4 < _var2.length) {
                        id = _var2[_var4];
                        element = _var3[id];
                        if (element.box) {
                            _var5 = hitBox(element.box, x, y);
                            if (_var5) {
                                return element;
                            } else {
                                __state = '4';
                            }
                        } else {
                            __state = '4';
                        }
                    } else {
                        return undefined;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function resetSelectionCore(widget) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    widget.selection = { prims: {} };
                    if (widget.visuals) {
                        widget.visuals.handles = [];
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
        function selectClusterStepNext(widget, context, nodeInfo) {
            var info, node, _var2, _var3;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (nodeInfo.include) {
                        context.arrows--;
                        __state = '1';
                    } else {
                        _var2 = isArrowLoop(nodeInfo.node);
                        if (_var2) {
                            context.arrows++;
                            __state = '22';
                        } else {
                            __state = '22';
                        }
                    }
                    break;
                case '7':
                    selectClusterStep(widget, context, node, node.next[0]);
                    __state = '1';
                    break;
                case '22':
                    nodeInfo.include = true;
                    node = nodeInfo.node;
                    if (node.next.length === 2) {
                        context.paths++;
                        selectClusterStep(widget, context, node, node.next[1]);
                        __state = '_item3';
                    } else {
                        if (node.type === 'loopbegin') {
                            context.loops[node.id] = true;
                            context.arrows++;
                            __state = '_item3';
                        } else {
                            if (node.type === 'loopend') {
                                if (node.loopStart.id in context.loops) {
                                    context.arrows--;
                                    __state = '_item3';
                                } else {
                                    info = getNodeInfo(context, node.loopStart);
                                    selectClusterStepNext(widget, context, info);
                                    __state = '_item3';
                                }
                            } else {
                                __state = '_item3';
                            }
                        }
                    }
                    break;
                case '_item3':
                    _var3 = clusterComplete(context);
                    if (_var3) {
                        if (node.type == 'select') {
                            __state = '7';
                        } else {
                            __state = '1';
                        }
                    } else {
                        __state = '7';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function DrakonCanvas_setStyle(self, ids, style) {
            var styleStr, edits, _var2, _var3, id, _var4;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    tracing.trace('DrakonCanvas.setStyle', ids);
                    if (style) {
                        styleStr = JSON.stringify(style);
                        __state = '6';
                    } else {
                        styleStr = '';
                        __state = '6';
                    }
                    break;
                case '6':
                    edits = [];
                    _var2 = ids;
                    _var3 = 0;
                    __state = '8';
                    break;
                case '8':
                    if (_var3 < _var2.length) {
                        id = _var2[_var3];
                        updateItem(edits, id, { style: styleStr });
                        _var3++;
                        __state = '8';
                    } else {
                        _var4 = updateAndKeepSelection(self, edits);
                        return _var4;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function DrakonCanvas_onContextMenu(self, evt) {
            tracing.trace('DrakonCanvas.onContextMenu');
            evt.preventDefault();
            return false;
        }
        function centerContent(visuals, node) {
            var left, top;
            left = Math.floor(node.x - node.w);
            top = Math.floor(node.y - node.contentHeight / 2);
            renderContentCore(visuals, node, left, top);
            return;
        }
        function centerContentBottom(visuals, node) {
            var top, left;
            left = Math.floor(node.x - node.w);
            top = Math.floor(node.y + node.h - node.contentHeight);
            renderContentCore(visuals, node, left, top);
            return;
        }
        function centerContentTop(visuals, node) {
            var left, top;
            left = Math.floor(node.x - node.w);
            top = Math.floor(node.y - node.h);
            renderContentCore(visuals, node, left, top);
            return;
        }
        function mergeConfigs(dst, src, propName, defaultValues) {
            var merged, userValues;
            userValues = src[propName] || {};
            merged = {};
            Object.assign(merged, defaultValues);
            Object.assign(merged, userValues);
            dst[propName] = merged;
            return;
        }
        function getThemeValue(config, node, name) {
            var _var2;
            _var2 = getThemeValueCore(config, node.type, node.style, name);
            return _var2;
        }
        function getThemeValueCore(config, type, style, name, defaultValue) {
            var theme, icons, forIcon, value, _var2, _var3, _var4, _var5;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (style) {
                        value = style[name];
                        _var2 = hasValue(value);
                        if (_var2) {
                            __state = '24';
                        } else {
                            __state = '16';
                        }
                    } else {
                        __state = '16';
                    }
                    break;
                case '16':
                    theme = config.theme;
                    icons = theme.icons;
                    if (icons) {
                        forIcon = icons[type];
                        if (forIcon) {
                            value = forIcon[name];
                            _var3 = hasValue(value);
                            if (_var3) {
                                __state = '24';
                            } else {
                                __state = '21';
                            }
                        } else {
                            __state = '21';
                        }
                    } else {
                        __state = '21';
                    }
                    break;
                case '21':
                    value = theme[name];
                    _var4 = hasValue(value);
                    if (_var4) {
                        __state = '24';
                    } else {
                        value = config[name];
                        _var5 = hasValue(value);
                        if (_var5) {
                            __state = '24';
                        } else {
                            return defaultValue;
                        }
                    }
                    break;
                case '24':
                    return value;
                default:
                    return;
                }
            }
        }
        function DefaultIconCore_measure(self, refObject) {
            return undefined;
        }
        function DefaultIconCore_commit(self, width) {
            return undefined;
        }
        function DefaultIconCore_buildDom(self) {
            return undefined;
        }
        function DefaultIconCore_renderContent(self, left, top, ctx) {
            return undefined;
        }
        function buildIconCore(context) {
            var self;
            self = DefaultIconCore();
            Object.assign(self, context);
            return self;
        }
        function defaultCommit(node, width) {
            if (node.textBlock) {
                node.flowBlock = flowTextBlock(node.textBlock, width);
                return {
                    width: width,
                    height: node.flowBlock.height
                };
            } else {
                if (node.topTextBlock) {
                    node.topFlowBlock = flowTextBlock(node.topTextBlock, width);
                    node.bottomFlowBlock = flowTextBlock(node.bottomTextBlock, width);
                    return {
                        width: width,
                        height: node.topFlowBlock.height + node.bottomFlowBlock.height
                    };
                } else {
                    return {
                        width: 0,
                        height: 0
                    };
                }
            }
        }
        function commitCore(visuals, node, width) {
            var size, rect, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (visuals.config.canvasIcons) {
                        if (node.core) {
                            if (node.core.commit) {
                                size = node.core.commit(width);
                                if (size) {
                                    return size;
                                } else {
                                    __state = '_item2';
                                }
                            } else {
                                __state = '_item2';
                            }
                        } else {
                            __state = '_item2';
                        }
                    } else {
                        if (node.contentDiv) {
                            node.contentDiv.style.width = width + 'px';
                            rect = node.contentDiv.getBoundingClientRect();
                            return {
                                width: rect.width,
                                height: rect.height
                            };
                        } else {
                            return {
                                width: 0,
                                height: 0
                            };
                        }
                    }
                    break;
                case '_item2':
                    _var2 = defaultCommit(node, width);
                    return _var2;
                default:
                    return;
                }
            }
        }
        function getSecondaryHeightCore(visuals, node) {
            var core, _var2, _var3;
            core = node.core;
            if (core.getSecondaryHeight) {
                _var3 = core.getSecondaryHeight(visuals.config);
                return _var3;
            } else {
                _var2 = getSecondaryHeightDefault(visuals, node);
                return _var2;
            }
        }
        function renderContentCore(visuals, node, left, top) {
            var implemented, core;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    core = node.core;
                    if (core) {
                        if (core.renderContent) {
                            implemented = core.renderContent(left, top, visuals.ctx);
                            if (implemented) {
                                __state = '1';
                            } else {
                                __state = '5';
                            }
                        } else {
                            __state = '5';
                        }
                    } else {
                        __state = '5';
                    }
                    break;
                case '5':
                    renderDefault(visuals, node, left, top);
                    __state = '1';
                    break;
                default:
                    return;
                }
            }
        }
        function measureCore(visuals, node) {
            var size, mainDiv, _var2, _var3;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (visuals.config.canvasIcons) {
                        if (node.core.measure) {
                            size = node.core.measure(visuals.ctx, visuals.fonts);
                            if (size) {
                                return size;
                            } else {
                                __state = '20';
                            }
                        } else {
                            __state = '20';
                        }
                    } else {
                        mainDiv = node.core.buildDom(visuals.fonts);
                        if (mainDiv) {
                            node.contentDiv = mainDiv;
                            _var2 = addDivToDiagram(visuals, mainDiv);
                            return _var2;
                        } else {
                            __state = '20';
                        }
                    }
                    break;
                case '20':
                    _var3 = measureDefault(visuals, node);
                    return _var3;
                default:
                    return;
                }
            }
        }
        function renderDefault(visuals, node, left, top) {
            var lowerTop;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (visuals.config.canvasIcons) {
                        if (node.flowBlock) {
                            renderFlowBlock(visuals, node.flowBlock, left, top);
                            __state = '1';
                        } else {
                            if (node.topFlowBlock) {
                                renderFlowBlock(visuals, node.topFlowBlock, left, top);
                                lowerTop = top + node.topFlowBlock.height;
                                renderFlowBlock(visuals, node.bottomFlowBlock, left, lowerTop);
                                __state = '1';
                            } else {
                                __state = '1';
                            }
                        }
                    } else {
                        if (node.contentDiv) {
                            node.contentDiv.style.left = left + 'px';
                            node.contentDiv.style.top = top + 'px';
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
        function getSecondaryHeightDefault(visuals, node) {
            var rect, zoom;
            if (node.topDiv) {
                rect = node.topDiv.getBoundingClientRect();
                zoom = visuals.config.zoom;
                return rect.height / zoom;
            } else {
                if (node.topFlowBlock) {
                    return node.topFlowBlock.height;
                } else {
                    return 0;
                }
            }
        }
        function measureDefault(visuals, node) {
            var measure, config, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    config = visuals.config;
                    measure = config.iconContent[node.type];
                    if (measure) {
                        __state = '_item2';
                    } else {
                        measure = config.iconContent.action;
                        console.error('iconContent callback not found for node of type: ' + node.type);
                        __state = '_item2';
                    }
                    break;
                case '_item2':
                    _var2 = measure(visuals, node);
                    return _var2;
                default:
                    return;
                }
            }
        }
        function splitToParagraphs(textDiv, text) {
            var lines, p, _var2, _var3, line, _var4;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    lines = text.split('\n');
                    _var2 = lines;
                    _var3 = 0;
                    __state = '6';
                    break;
                case '6':
                    if (_var3 < _var2.length) {
                        line = _var2[_var3];
                        _var4 = line.trim();
                        p = createPar(_var4);
                        html.add(textDiv, p);
                        _var3++;
                        __state = '6';
                    } else {
                        return;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function buildTextContent(visuals, node, options, forceWidth) {
            var paddingLeft, paddingRight, paddingTop, paddingBottom, font, textAlign, maxWidth, minWidth, text, color, lineHeight, config, padding, textDiv, toptions, centerContent, _var2, _var3, _var4, _var5, _var6;
            var __state = '22';
            while (true) {
                switch (__state) {
                case '5':
                    text = node.content || '';
                    if (visuals.config.canvasIcons) {
                        toptions = {
                            paddingLeft: paddingLeft,
                            paddingTop: paddingTop,
                            paddingRight: paddingRight,
                            paddingBottom: paddingBottom,
                            minWidth: minWidth,
                            font: font,
                            color: color,
                            lineHeight: lineHeight,
                            textAlign: textAlign,
                            textFormat: config.textFormat,
                            centerContent: centerContent,
                            singleLine: options.singleLine,
                            link: !!node.link
                        };
                        node.textBlock = createTextBlock(visuals.ctx, text, toptions, visuals.fonts);
                        if (forceWidth) {
                            node.flowBlock = flowTextBlock(node.textBlock, forceWidth);
                            __state = '58';
                        } else {
                            node.flowBlock = measureFlow(node.textBlock, minWidth, maxWidth);
                            __state = '58';
                        }
                    } else {
                        textDiv = div('drakon-icon-content', {
                            'padding-left': paddingLeft + 'px',
                            'padding-top': paddingTop + 'px',
                            'padding-right': paddingRight + 'px',
                            'padding-bottom': paddingBottom + 'px',
                            'text-align': textAlign,
                            font: font,
                            color: color,
                            'min-width': minWidth + 'px',
                            'max-width': maxWidth + 'px',
                            'line-height': lineHeight,
                            'user-select': 'none'
                        });
                        node.contentDiv = textDiv;
                        if (options.singleLine) {
                            html.addText(textDiv, text);
                            __state = '_item6';
                        } else {
                            addTextToDiv(options, config, textDiv, text, visuals.fonts, font);
                            __state = '_item6';
                        }
                    }
                    break;
                case '22':
                    config = visuals.config;
                    padding = getFromOptionsOrConfig(config, options, node, 'padding', 0);
                    _var2 = getConfigValue(options, 'paddingLeft', 0);
                    paddingLeft = padding + _var2;
                    _var3 = getConfigValue(options, 'paddingRight', 0);
                    paddingRight = padding + _var3;
                    _var4 = getConfigValue(options, 'paddingTop', 0);
                    paddingTop = padding + _var4;
                    _var5 = getConfigValue(options, 'paddingBottom', 0);
                    paddingBottom = padding + _var5;
                    __state = '24';
                    break;
                case '24':
                    centerContent = getFromOptionsOrConfig(config, options, node, 'centerContent');
                    font = getFromOptionsOrConfig(config, options, node, 'font');
                    visuals.fonts[font] = true;
                    color = getFromOptionsOrConfig(config, options, node, 'color');
                    textAlign = getFromOptionsOrConfig(config, options, node, 'textAlign');
                    maxWidth = getFromOptionsOrConfig(config, options, node, 'maxWidth');
                    minWidth = getFromOptionsOrConfig(config, options, node, 'minWidth');
                    lineHeight = getFromOptionsOrConfig(config, options, node, 'lineHeight');
                    __state = '5';
                    break;
                case '58':
                    return {
                        width: node.flowBlock.width,
                        height: node.flowBlock.height
                    };
                case '_item6':
                    _var6 = addDivToDiagram(visuals, textDiv);
                    return _var6;
                default:
                    return;
                }
            }
        }
        function buildDoubleTextContent(visuals, node, options) {
            var topLeft, topRight, bottomLeft, bottomRight, font, textAlign, maxWidth, minWidth, color, lineHeight, config, padding, topDiv, bottomDiv, mainDiv, text, secondary, options2, width, height, _var2, _var3, _var4, _var5, _var6;
            var __state = '22';
            while (true) {
                switch (__state) {
                case '5':
                    topDiv = div('drakon-icon-content', {
                        'padding-left': topLeft + 'px',
                        'padding-top': padding + 'px',
                        'padding-right': topRight + 'px',
                        'padding-bottom': padding + 'px',
                        'text-align': textAlign,
                        font: font,
                        color: color,
                        'min-width': minWidth + 'px',
                        'max-width': maxWidth + 'px',
                        'line-height': lineHeight,
                        'user-select': 'none'
                    });
                    addTextToDiv(options, config, topDiv, secondary, visuals.fonts, font);
                    node.topDiv = topDiv;
                    __state = '50';
                    break;
                case '22':
                    config = visuals.config;
                    text = node.content || '';
                    secondary = node.secondary || '';
                    padding = getFromOptionsOrConfig(config, options, node, 'padding', 0);
                    _var2 = getConfigValue(options, 'topLeft', 0);
                    topLeft = padding + _var2;
                    _var3 = getConfigValue(options, 'topRight', 0);
                    topRight = padding + _var3;
                    _var4 = getConfigValue(options, 'bottomLeft', 0);
                    bottomLeft = padding + _var4;
                    _var5 = getConfigValue(options, 'bottomRight', 0);
                    bottomRight = padding + _var5;
                    __state = '24';
                    break;
                case '24':
                    font = getFromOptionsOrConfig(config, options, node, 'font');
                    visuals.fonts[font] = true;
                    color = getFromOptionsOrConfig(config, options, node, 'color');
                    textAlign = getFromOptionsOrConfig(config, options, node, 'textAlign');
                    maxWidth = getFromOptionsOrConfig(config, options, node, 'maxWidth');
                    minWidth = getFromOptionsOrConfig(config, options, node, 'minWidth');
                    lineHeight = getFromOptionsOrConfig(config, options, node, 'lineHeight');
                    if (visuals.config.canvasIcons) {
                        __state = '57';
                    } else {
                        __state = '5';
                    }
                    break;
                case '50':
                    bottomDiv = div('drakon-icon-content', {
                        'padding-left': bottomLeft + 'px',
                        'padding-top': padding + 'px',
                        'padding-right': bottomRight + 'px',
                        'padding-bottom': padding + 'px',
                        'text-align': textAlign,
                        font: font,
                        color: color,
                        'min-width': minWidth + 'px',
                        'max-width': maxWidth + 'px',
                        'line-height': lineHeight,
                        'user-select': 'none'
                    });
                    addTextToDiv(options, config, bottomDiv, text, visuals.fonts, font);
                    __state = '59';
                    break;
                case '57':
                    options2 = {
                        paddingLeft: topLeft,
                        paddingTop: padding,
                        paddingRight: topRight,
                        paddingBottom: padding,
                        minWidth: minWidth,
                        font: font,
                        color: color,
                        lineHeight: lineHeight,
                        textAlign: textAlign,
                        centerContent: config.centerContent,
                        textFormat: config.textFormat
                    };
                    node.topTextBlock = createTextBlock(visuals.ctx, secondary, options2, visuals.fonts);
                    node.topFlowBlock = measureFlow(node.topTextBlock, minWidth, maxWidth);
                    __state = '58';
                    break;
                case '58':
                    options = {
                        paddingLeft: bottomLeft,
                        paddingTop: padding,
                        paddingRight: bottomRight,
                        paddingBottom: padding,
                        minWidth: minWidth,
                        font: font,
                        color: color,
                        lineHeight: lineHeight,
                        textAlign: textAlign,
                        centerContent: config.centerContent,
                        textFormat: config.textFormat
                    };
                    node.bottomTextBlock = createTextBlock(visuals.ctx, text, options, visuals.fonts);
                    node.bottomFlowBlock = measureFlow(node.bottomTextBlock, minWidth, maxWidth);
                    __state = '74';
                    break;
                case '59':
                    mainDiv = div();
                    html.add(mainDiv, topDiv);
                    html.add(mainDiv, bottomDiv);
                    node.contentDiv = mainDiv;
                    _var6 = addDivToDiagram(visuals, mainDiv);
                    return _var6;
                case '74':
                    width = Math.max(node.topFlowBlock.width, node.topFlowBlock.width);
                    height = node.topFlowBlock.height + node.bottomFlowBlock.height;
                    return {
                        width: width,
                        height: height
                    };
                default:
                    return;
                }
            }
        }
        function getConfigValue(config, name, defaultValue) {
            var value, _var2;
            value = config[name];
            _var2 = hasValue(value);
            if (_var2) {
                return value;
            } else {
                return defaultValue;
            }
        }
        function measureFlow(textBlock, minWidth, maxWidth) {
            var width, _var2;
            width = Math.min(maxWidth, textBlock.width);
            width = Math.max(minWidth, width);
            _var2 = flowTextBlock(textBlock, width);
            return _var2;
        }
        function addDivToDiagram(visuals, mainDiv) {
            var rect, config;
            config = visuals.config;
            html.add(visuals.container, mainDiv);
            mainDiv.style.display = 'inline-block';
            mainDiv.style.position = 'absolute';
            mainDiv.style.left = '0px';
            mainDiv.style.top = '0px';
            mainDiv.style.maxWidth = config.maxWidth + 'px';
            mainDiv.style.maxHeight = config.maxHeight + 'px';
            rect = mainDiv.getBoundingClientRect();
            return {
                width: rect.width,
                height: rect.height
            };
        }
        function getFromOptionsOrConfig(config, options, node, name, defaultValue) {
            var value, _var2, _var3;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (node.style) {
                        value = node.style[name];
                        _var2 = hasValue(value);
                        if (_var2) {
                            return value;
                        } else {
                            __state = '11';
                        }
                    } else {
                        __state = '11';
                    }
                    break;
                case '11':
                    if (name in options) {
                        return options[name];
                    } else {
                        _var3 = getThemeValueCore(config, node.type, node.style, name, defaultValue);
                        return _var3;
                    }
                default:
                    return;
                }
            }
        }
        function initAlignedNodes(output, input) {
            var defaultValues;
            defaultValues = {
                action: true,
                question: true,
                'case': true,
                select: true,
                branch: true,
                address: true,
                loopbegin: true,
                loopend: true,
                insertion: true,
                comment: true,
                simpleinput: true,
                simpleoutput: true,
                shelf: true,
                input: true,
                output: true,
                process: true
            };
            mergeConfigs(output, input, 'alignedNodes', defaultValues);
            return;
        }
        function renderInsertion(visuals, node, ctx) {
            var left, right, top, thickness, x1, x2, style, _var2;
            renderAction(visuals, node, ctx);
            left = node.x - node.w;
            right = node.x + node.w;
            top = node.y - node.h;
            x1 = left + visuals.config.insertionPadding;
            x2 = right - visuals.config.insertionPadding;
            _var2 = getThemeValue(visuals.config, node, 'borderWidth');
            thickness = _var2 || 1;
            style = getThemeValue(visuals.config, node, 'iconBorder');
            ctx.fillStyle = getThemeValue(visuals.config, node, 'internalLine');
            ctx.fillRect(x1, top, thickness, node.h * 2);
            ctx.fillRect(x2, top, thickness, node.h * 2);
            return;
        }
        function renderBranch(visuals, node, ctx) {
            var middle, x, y, w, h, bottom, tx0, tx1, ty, line, tri;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    line = setFillStroke(visuals.config, node, ctx);
                    tri = visuals.config.triangleHeight;
                    middle = buildBranchPath(ctx, node.x, node.y, node.w, node.h, tri);
                    ctx.fill();
                    clearShadow(ctx);
                    if (line) {
                        buildBranchPath(ctx, node.x + 0.5, node.y + 0.5, node.w, node.h, tri);
                        ctx.stroke();
                        __state = '22';
                    } else {
                        __state = '22';
                    }
                    break;
                case '11':
                    return;
                case '12':
                    if (node.mark) {
                        x = node.x;
                        y = node.y;
                        w = node.w;
                        h = node.h;
                        bottom = y + h;
                        tx0 = x - w / 2;
                        tx1 = x + w / 2;
                        ty = (bottom + middle) / 2;
                        ctx.fillStyle = visuals.config.theme.internalLine;
                        ctx.beginPath();
                        ctx.moveTo(tx0, ty);
                        ctx.lineTo(x, bottom);
                        ctx.lineTo(tx1, ty);
                        ctx.closePath();
                        ctx.fill();
                        __state = '11';
                    } else {
                        __state = '11';
                    }
                    break;
                case '22':
                    centerContentTop(visuals, node);
                    __state = '12';
                    break;
                default:
                    return;
                }
            }
        }
        function renderSimpleInput(visuals, node, ctx) {
            var line;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    line = setFillStroke(visuals.config, node, ctx);
                    buildSimpleInputPath(ctx, node.x, node.y, node.w, node.h, visuals.config.metre);
                    ctx.fill();
                    clearShadow(ctx);
                    if (line) {
                        buildSimpleInputPath(ctx, node.x + 0.5, node.y + 0.5, node.w, node.h, visuals.config.metre);
                        ctx.stroke();
                        __state = '15';
                    } else {
                        __state = '15';
                    }
                    break;
                case '15':
                    centerContent(visuals, node, ctx);
                    return;
                default:
                    return;
                }
            }
        }
        function renderLoopBegin(visuals, node, ctx) {
            var line;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    line = setFillStroke(visuals.config, node, ctx);
                    buildLoopBeginPath(ctx, node.x, node.y, node.w, node.h, visuals.config.metre);
                    ctx.fill();
                    clearShadow(ctx);
                    if (line) {
                        buildLoopBeginPath(ctx, node.x + 0.5, node.y + 0.5, node.w, node.h, visuals.config.metre);
                        ctx.stroke();
                        __state = '15';
                    } else {
                        __state = '15';
                    }
                    break;
                case '15':
                    centerContent(visuals, node, ctx);
                    return;
                default:
                    return;
                }
            }
        }
        function renderCase(visuals, node, ctx) {
            var left, bottom, middle, thickness, _var2;
            renderBranch(visuals, node, ctx);
            left = node.x - node.w;
            bottom = node.y + node.h;
            middle = bottom - visuals.config.metre;
            _var2 = getThemeValue(visuals.config, node, 'borderWidth');
            thickness = _var2 || 1;
            ctx.fillStyle = getThemeValue(visuals.config, node, 'internalLine');
            ctx.fillRect(left, middle, node.w * 2, thickness);
            return;
        }
        function renderCtrlStart(visuals, node, ctx) {
            var line;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    line = setFillStroke(visuals.config, node, ctx);
                    buildCtrlStartPath(ctx, node.x, node.y, node.w, node.h);
                    ctx.fill();
                    clearShadow(ctx);
                    if (line) {
                        buildCtrlStartPath(ctx, node.x + 0.5, node.y + 0.5, node.w, node.h);
                        ctx.stroke();
                        __state = '18';
                    } else {
                        __state = '18';
                    }
                    break;
                case '18':
                    centerContent(visuals, node, ctx);
                    return;
                default:
                    return;
                }
            }
        }
        function renderAddress(visuals, node, ctx) {
            var middle, x, y, w, h, top, tx0, tx1, ty, line, tri;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    tri = visuals.config.triangleHeight;
                    line = setFillStroke(visuals.config, node, ctx);
                    middle = buildAddressPath(ctx, node.x, node.y, node.w, node.h, tri);
                    ctx.fill();
                    clearShadow(ctx);
                    if (line) {
                        buildAddressPath(ctx, node.x + 0.5, node.y + 0.5, node.w, node.h, tri);
                        ctx.stroke();
                        __state = '22';
                    } else {
                        __state = '22';
                    }
                    break;
                case '11':
                    return;
                case '12':
                    if (node.mark) {
                        x = node.x;
                        y = node.y;
                        w = node.w;
                        h = node.h;
                        top = y - h;
                        tx0 = x - w / 2;
                        tx1 = x + w / 2;
                        ty = (top + middle) / 2;
                        ctx.fillStyle = visuals.config.theme.internalLine;
                        ctx.beginPath();
                        ctx.moveTo(tx0, ty);
                        ctx.lineTo(x, top);
                        ctx.lineTo(tx1, ty);
                        ctx.closePath();
                        ctx.fill();
                        __state = '11';
                    } else {
                        __state = '11';
                    }
                    break;
                case '22':
                    centerContentBottom(visuals, node, ctx);
                    __state = '12';
                    break;
                default:
                    return;
                }
            }
        }
        function buildLoopBeginPath(ctx, x, y, w, h, padding) {
            var x0, x1, x3, x2, top, bottom, add;
            add = 5;
            x0 = x - w - add;
            x1 = x0 + padding;
            x3 = x + w + add;
            x2 = x3 - padding;
            top = y - h;
            bottom = y + h;
            ctx.beginPath();
            ctx.moveTo(x0, y);
            ctx.lineTo(x1, top);
            ctx.lineTo(x2, top);
            ctx.lineTo(x3, y);
            ctx.lineTo(x3, bottom);
            ctx.lineTo(x0, bottom);
            ctx.closePath();
            return;
        }
        function buildQuestionPath(ctx, x, y, w, h, padding) {
            var x0, x1, x3, x2, top, bottom;
            x0 = x - w;
            x1 = x0 + padding;
            x3 = x + w;
            x2 = x3 - padding;
            top = y - h;
            bottom = y + h;
            ctx.beginPath();
            ctx.moveTo(x0, y);
            ctx.lineTo(x1, top);
            ctx.lineTo(x2, top);
            ctx.lineTo(x3, y);
            ctx.lineTo(x2, bottom);
            ctx.lineTo(x1, bottom);
            ctx.closePath();
            return;
        }
        function clearShadow(ctx) {
            ctx.shadowColor = 'rgba(0, 0, 0, 0)';
            ctx.shadowBlur = 0;
            return;
        }
        function drawArrowHead(ctx, color, x, y, angle) {
            var thick, arrowWidth, arrowHeight;
            thick = 1;
            arrowWidth = 20;
            arrowHeight = 5;
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(angle);
            ctx.setLineDash([]);
            ctx.strokeStyle = color;
            ctx.lineWidth = thick;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.moveTo(-arrowWidth, -arrowHeight - thick);
            ctx.lineTo(0, 0);
            ctx.lineTo(-arrowWidth, arrowHeight + thick);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
            return;
        }
        function buildBeginEndPath(ctx, x, y, w, h) {
            var x0, x1, x3, x2, top, bottom;
            x0 = x - w;
            x1 = x0 + h;
            x3 = x + w;
            x2 = x3 - h;
            top = y - h;
            bottom = y + h;
            ctx.beginPath();
            ctx.arc(x1, y, h, Math.PI * 0.5, Math.PI * 1.5);
            ctx.lineTo(x2, top);
            ctx.arc(x2, y, h, Math.PI * 1.5, Math.PI * 0.5);
            ctx.closePath();
            return;
        }
        function roundedRect(ctx, left, top, width, height, radius) {
            var x1, right2, x2, y1, bottom2, y2;
            x1 = left + radius;
            right2 = left + width;
            x2 = right2 - radius;
            y1 = top + radius;
            bottom2 = top + height;
            y2 = bottom2 - radius;
            ctx.beginPath();
            ctx.arc(x1, y1, radius, Math.PI * 1, Math.PI * 1.5);
            ctx.lineTo(x2, top);
            ctx.arc(x2, y1, radius, Math.PI * 1.5, Math.PI * 0);
            ctx.lineTo(right2, y2);
            ctx.arc(x2, y2, radius, Math.PI * 0, Math.PI * 0.5);
            ctx.lineTo(x1, bottom2);
            ctx.arc(x1, y2, radius, Math.PI * 0.5, Math.PI * 1);
            ctx.closePath();
            return;
        }
        function buildSelectPath(ctx, x, y, w, h, padding) {
            var x0, x1, x3, x2, top, bottom;
            x0 = x - w;
            x1 = x0 + padding;
            x3 = x + w;
            x2 = x3 - padding;
            top = y - h;
            bottom = y + h;
            ctx.beginPath();
            ctx.moveTo(x0, bottom);
            ctx.lineTo(x1, top);
            ctx.lineTo(x3, top);
            ctx.lineTo(x2, bottom);
            ctx.closePath();
            return;
        }
        function buildOutputPath(ctx, x, y, w, h, padding, h2) {
            var x0, x1, x4, x3, x2, y0, y4, y3, y1, y2;
            x0 = x - w;
            x1 = x0 + padding;
            x4 = x + w;
            x3 = x4 - padding;
            x2 = x3 - padding;
            y0 = y - h;
            y4 = y + h;
            y3 = y0 + h2 + padding / 2;
            y1 = (y0 + y3) / 2;
            y2 = y0 + h2;
            ctx.beginPath();
            ctx.moveTo(x0, y4);
            ctx.lineTo(x0, y2);
            ctx.lineTo(x1, y2);
            ctx.lineTo(x1, y0);
            ctx.lineTo(x3, y0);
            ctx.lineTo(x4, y1);
            ctx.lineTo(x3, y3);
            ctx.lineTo(x2, y3);
            ctx.lineTo(x2, y4);
            ctx.closePath();
            return;
        }
        function buildCtrlStartPath(ctx, x, y, w, h) {
            var x0, x1, x3, x2, top, bottom, radius;
            radius = h * 2;
            x0 = x - w;
            x1 = x0 + radius;
            x3 = x + w;
            x2 = x3 - radius;
            top = y - h;
            bottom = y + h;
            ctx.beginPath();
            ctx.arc(x1, bottom, radius, Math.PI * 1, Math.PI * 1.5);
            ctx.lineTo(x2, top);
            ctx.arc(x2, bottom, radius, Math.PI * 1.5, Math.PI * 0);
            ctx.closePath();
            return;
        }
        function buildLoopEndPath(ctx, x, y, w, h, padding) {
            var x0, x1, x3, x2, top, bottom, add;
            add = 5;
            x0 = x - w - add;
            x1 = x0 + padding;
            x3 = x + w + add;
            x2 = x3 - padding;
            top = y - h;
            bottom = y + h;
            ctx.beginPath();
            ctx.moveTo(x0, y);
            ctx.lineTo(x0, top);
            ctx.lineTo(x3, top);
            ctx.lineTo(x3, y);
            ctx.lineTo(x2, bottom);
            ctx.lineTo(x1, bottom);
            ctx.closePath();
            return;
        }
        function buildCtrlEndPath(ctx, x, y, w, h) {
            var x0, x1, x3, x2, top, bottom, radius;
            radius = h * 2;
            x0 = x - w;
            x1 = x0 + radius;
            x3 = x + w;
            x2 = x3 - radius;
            top = y - h;
            bottom = y + h;
            ctx.beginPath();
            ctx.arc(x1, top, radius, Math.PI * 0.5, Math.PI * 1);
            ctx.lineTo(x3, top);
            ctx.arc(x2, top, radius, Math.PI * 0, Math.PI * 0.5);
            ctx.closePath();
            return;
        }
        function buildProcessPath(ctx, x, y, w, h, padding, h2) {
            var x0, x1, x3, x2, y0, y3, y1, y2;
            x0 = x - w;
            x1 = x0 + padding;
            x3 = x + w;
            x2 = x3 - padding;
            y0 = y - h;
            y3 = y + h;
            y1 = y0 + h2;
            y2 = y0 + h2 + padding / 2;
            ctx.beginPath();
            ctx.moveTo(x0, y3);
            ctx.lineTo(x0, y1);
            ctx.lineTo(x1, y1);
            ctx.lineTo(x1, y0);
            ctx.lineTo(x3, y0);
            ctx.lineTo(x3, y2);
            ctx.lineTo(x2, y2);
            ctx.lineTo(x2, y3);
            ctx.closePath();
            return;
        }
        function buildInputPath(ctx, x, y, w, h, padding, h2) {
            var x0, x1, x2, x4, x3, y0, y4, y3, y1, y2;
            x0 = x - w;
            x1 = x0 + padding;
            x2 = x1 + padding;
            x4 = x + w;
            x3 = x4 - padding;
            y0 = y - h;
            y4 = y + h;
            y3 = y0 + h2 + padding / 2;
            y1 = (y0 + y3) / 2;
            y2 = y0 + h2;
            ctx.beginPath();
            ctx.moveTo(x2, y4);
            ctx.lineTo(x2, y3);
            ctx.lineTo(x0, y3);
            ctx.lineTo(x1, y1);
            ctx.lineTo(x0, y0);
            ctx.lineTo(x3, y0);
            ctx.lineTo(x3, y2);
            ctx.lineTo(x4, y2);
            ctx.lineTo(x4, y4);
            ctx.closePath();
            return;
        }
        function setFillStroke(config, node, ctx) {
            var theme, lineWidth, shadowColor, _var2, _var3, _var4;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    theme = config.theme;
                    ctx.strokeStyle = getThemeValue(config, node, 'iconBorder');
                    ctx.fillStyle = getThemeValue(config, node, 'iconBack');
                    lineWidth = getThemeValue(config, node, 'borderWidth');
                    ctx.lineWidth = lineWidth;
                    __state = '35';
                    break;
                case '16':
                    return lineWidth;
                case '17':
                    setLineDashFromStyle(config, node, lineWidth, 'borderStyle', ctx);
                    __state = '16';
                    break;
                case '35':
                    shadowColor = getThemeValue(config, node, 'shadowColor');
                    if (shadowColor) {
                        ctx.shadowColor = shadowColor;
                        _var2 = getThemeValue(config, node, 'shadowBlur');
                        ctx.shadowBlur = _var2 * config.zoom;
                        _var3 = getThemeValue(config, node, 'shadowOffsetX');
                        ctx.shadowOffsetX = _var3 * config.zoom;
                        _var4 = getThemeValue(config, node, 'shadowOffsetY');
                        ctx.shadowOffsetY = _var4 * config.zoom;
                        __state = '17';
                    } else {
                        ctx.shadowColor = 'rgba(0, 0, 0, 0)';
                        ctx.shadowBlur = 0;
                        __state = '17';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function buildAddressPath(ctx, x, y, w, h, padding) {
            var left, right, top, bottom, middle;
            left = x - w;
            right = x + w;
            top = y - h;
            bottom = y + h;
            middle = top + padding;
            ctx.beginPath();
            ctx.moveTo(left, bottom);
            ctx.lineTo(left, middle);
            ctx.lineTo(x, top);
            ctx.lineTo(right, middle);
            ctx.lineTo(right, bottom);
            ctx.closePath();
            return middle;
        }
        function buildSimpleInputPath(ctx, x, y, w, h, padding) {
            var add, left, right, top, bottom, x1;
            add = 5;
            left = x - w;
            right = x + w;
            top = y - h;
            bottom = y + h;
            x1 = left + padding;
            ctx.beginPath();
            ctx.moveTo(left, top);
            ctx.lineTo(right, top);
            ctx.lineTo(right, bottom);
            ctx.lineTo(left, bottom);
            ctx.lineTo(x1, y);
            ctx.closePath();
            return;
        }
        function buildDurationPath(ctx, x, y, w, h, padding) {
            var x0, x1, x3, x2, top, bottom;
            x0 = x - w;
            x1 = x0 + padding;
            x3 = x + w;
            x2 = x3 - padding;
            top = y - h;
            bottom = y + h;
            ctx.beginPath();
            ctx.moveTo(x1, bottom);
            ctx.lineTo(x0, top);
            ctx.lineTo(x3, top);
            ctx.lineTo(x2, bottom);
            ctx.closePath();
            return;
        }
        function buildSimpleOutputPath(ctx, x, y, w, h, padding) {
            var add, left, right, top, bottom, x1;
            add = 5;
            left = x - w;
            right = x + w;
            top = y - h;
            bottom = y + h;
            x1 = right - padding;
            ctx.beginPath();
            ctx.moveTo(left, top);
            ctx.lineTo(x1, top);
            ctx.lineTo(right, y);
            ctx.lineTo(x1, bottom);
            ctx.lineTo(left, bottom);
            ctx.closePath();
            return;
        }
        function setLineDashFromStyle(config, node, lineWidth, name, ctx) {
            var style, segments, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (lineWidth) {
                        style = getThemeValue(config, node, name);
                        _var2 = style;
                        if (_var2 === 'dash1') {
                            segments = [
                                1,
                                2
                            ];
                            __state = '4';
                        } else {
                            if (_var2 === 'dash2') {
                                segments = [
                                    3,
                                    4
                                ];
                                __state = '4';
                            } else {
                                if (_var2 === 'dash3') {
                                    segments = [
                                        7,
                                        8
                                    ];
                                    __state = '4';
                                } else {
                                    if (_var2 === 'dash4') {
                                        segments = [
                                            16,
                                            16
                                        ];
                                        __state = '4';
                                    } else {
                                        __state = '16';
                                    }
                                }
                            }
                        }
                    } else {
                        __state = '16';
                    }
                    break;
                case '4':
                    segments[0] *= lineWidth;
                    segments[1] *= lineWidth;
                    ctx.setLineDash(segments);
                    return;
                case '16':
                    segments = [];
                    __state = '4';
                    break;
                default:
                    return;
                }
            }
        }
        function renderSelect(visuals, node, ctx) {
            var padding, line;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    line = setFillStroke(visuals.config, node, ctx);
                    padding = visuals.config.metre / 2;
                    buildSelectPath(ctx, node.x, node.y, node.w, node.h, padding);
                    ctx.fill();
                    clearShadow(ctx);
                    if (line) {
                        buildSelectPath(ctx, node.x + 0.5, node.y + 0.5, node.w, node.h, padding);
                        ctx.stroke();
                        __state = '15';
                    } else {
                        __state = '15';
                    }
                    break;
                case '15':
                    centerContent(visuals, node, ctx);
                    return;
                default:
                    return;
                }
            }
        }
        function renderShelf(visuals, node, ctx) {
            var h2, middle, thickness, left, top, width, height, line, _var2;
            var __state = '14';
            while (true) {
                switch (__state) {
                case '2':
                    h2 = getSecondaryHeightCore(visuals, node);
                    middle = top + h2;
                    _var2 = getThemeValue(visuals.config, node, 'borderWidth');
                    thickness = _var2 || 1;
                    ctx.setLineDash([]);
                    ctx.fillStyle = getThemeValue(visuals.config, node, 'internalLine');
                    ctx.fillRect(left, middle, node.w * 2, thickness);
                    centerContentTop(visuals, node);
                    __state = '13';
                    break;
                case '12':
                    return;
                case '13':
                    __state = '12';
                    break;
                case '14':
                    left = node.x - node.w;
                    top = node.y - node.h;
                    width = node.w * 2;
                    height = node.h * 2;
                    line = setFillStroke(visuals.config, node, ctx);
                    ctx.fillRect(left, top, width, height);
                    clearShadow(ctx);
                    if (line) {
                        ctx.strokeRect(left + 0.5, top + 0.5, width, height);
                        __state = '2';
                    } else {
                        __state = '2';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function renderDuration(visuals, node, ctx) {
            var padding, line;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    line = setFillStroke(visuals.config, node, ctx);
                    padding = visuals.config.metre;
                    buildDurationPath(ctx, node.x, node.y, node.w, node.h, padding);
                    ctx.fill();
                    clearShadow(ctx);
                    if (line) {
                        buildDurationPath(ctx, node.x + 0.5, node.y + 0.5, node.w, node.h, padding);
                        ctx.stroke();
                        __state = '15';
                    } else {
                        __state = '15';
                    }
                    break;
                case '15':
                    centerContent(visuals, node, ctx);
                    return;
                default:
                    return;
                }
            }
        }
        function renderSimpleOutput(visuals, node, ctx) {
            var line;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    line = setFillStroke(visuals.config, node, ctx);
                    buildSimpleOutputPath(ctx, node.x, node.y, node.w, node.h, visuals.config.metre);
                    ctx.fill();
                    clearShadow(ctx);
                    if (line) {
                        buildSimpleOutputPath(ctx, node.x + 0.5, node.y + 0.5, node.w, node.h, visuals.config.metre);
                        ctx.stroke();
                        __state = '15';
                    } else {
                        __state = '15';
                    }
                    break;
                case '15':
                    centerContent(visuals, node, ctx);
                    return;
                default:
                    return;
                }
            }
        }
        function renderTimer(visuals, node, ctx) {
            var left, right, top, bottom, x1, x2, x1low, x2low, padding, _var2;
            padding = visuals.config.metre;
            renderDuration(visuals, node, ctx);
            left = node.x - node.w;
            right = node.x + node.w;
            top = node.y - node.h;
            bottom = node.y + node.h;
            x1 = left + visuals.config.insertionPadding;
            x2 = right - visuals.config.insertionPadding;
            x1low = x1 + padding;
            x2low = x2 - padding;
            _var2 = getThemeValue(visuals.config, node, 'borderWidth');
            ctx.lineWidth = _var2 || 1;
            ctx.strokeStyle = getThemeValue(visuals.config, node, 'internalLine');
            ctx.beginPath();
            ctx.moveTo(x1, top);
            ctx.lineTo(x1low, bottom);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x2, top);
            ctx.lineTo(x2low, bottom);
            ctx.stroke();
            return;
        }
        function renderQuestion(visuals, node, ctx) {
            var yesDiv, noDiv, yesRect, noRect, leftText, rightText, leftWidth, leftX, leftY, rightX, rightY, line, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    line = setFillStroke(visuals.config, node, ctx);
                    buildQuestionPath(ctx, node.x, node.y, node.w, node.h, visuals.config.metre);
                    ctx.fill();
                    clearShadow(ctx);
                    if (line) {
                        buildQuestionPath(ctx, node.x + 0.5, node.y + 0.5, node.w, node.h, visuals.config.metre);
                        ctx.stroke();
                        __state = '4';
                    } else {
                        __state = '4';
                    }
                    break;
                case '4':
                    centerContent(visuals, node, ctx);
                    __state = '12';
                    break;
                case '11':
                    return;
                case '12':
                    if (visuals.config.canvasLabels) {
                        if (node.flag1) {
                            leftText = visuals.config.yes;
                            rightText = visuals.config.no;
                            __state = '29';
                        } else {
                            leftText = visuals.config.no;
                            rightText = visuals.config.yes;
                            __state = '29';
                        }
                    } else {
                        if (node.flag1) {
                            yesDiv = node.frame.yesDiv;
                            noDiv = node.frame.noDiv;
                            __state = '19';
                        } else {
                            noDiv = node.frame.yesDiv;
                            yesDiv = node.frame.noDiv;
                            __state = '19';
                        }
                    }
                    break;
                case '19':
                    yesRect = yesDiv.getBoundingClientRect();
                    noRect = noDiv.getBoundingClientRect();
                    yesDiv.style.top = node.y + node.h + 2 + 'px';
                    yesDiv.style.left = node.x - yesRect.width - 2 + 'px';
                    noDiv.style.top = node.y - noRect.height + 'px';
                    noDiv.style.left = node.x + node.w + 'px';
                    __state = '11';
                    break;
                case '29':
                    ctx.fillStyle = visuals.config.theme.backText;
                    ctx.font = visuals.config.canvasLabels;
                    _var2 = ctx.measureText(leftText);
                    leftWidth = _var2.width;
                    leftX = node.x - 3;
                    leftY = node.y + node.h + 3;
                    rightX = node.x + node.w + 3;
                    rightY = node.y - 3;
                    ctx.textAlign = 'right';
                    ctx.textBaseline = 'top';
                    ctx.fillText(leftText, leftX, leftY);
                    ctx.textAlign = 'left';
                    ctx.textBaseline = 'bottom';
                    ctx.fillText(rightText, rightX, rightY);
                    __state = '11';
                    break;
                default:
                    return;
                }
            }
        }
        function renderProcess(visuals, node, ctx) {
            var left, top, middle, thickness, padding, line, x0, x1, x3, x2, y0, y1, y2, h2, _var2;
            var __state = '14';
            while (true) {
                switch (__state) {
                case '2':
                    left = node.x - node.w;
                    top = node.y - node.h;
                    middle = top + h2;
                    _var2 = getThemeValue(visuals.config, node, 'borderWidth');
                    thickness = _var2 || 1;
                    ctx.strokeStyle = getThemeValue(visuals.config, node, 'internalLine');
                    x0 = node.x - node.w + 0.5;
                    x1 = x0 + padding;
                    x3 = node.x + node.w + 0.5;
                    x2 = x3 - padding;
                    y0 = node.y - node.h + 0.5;
                    y1 = y0 + h2;
                    y2 = y0 + h2 + padding / 2;
                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y1);
                    ctx.lineTo(x2, y2);
                    ctx.stroke();
                    centerContentTop(visuals, node);
                    __state = '12';
                    break;
                case '12':
                    return;
                case '14':
                    h2 = getSecondaryHeightCore(visuals, node);
                    line = setFillStroke(visuals.config, node, ctx);
                    padding = visuals.config.metre / 2;
                    buildProcessPath(ctx, node.x, node.y, node.w, node.h, padding, h2);
                    ctx.fill();
                    clearShadow(ctx);
                    if (line) {
                        buildProcessPath(ctx, node.x + 0.5, node.y + 0.5, node.w, node.h, padding, h2);
                        ctx.stroke();
                        __state = '2';
                    } else {
                        __state = '2';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function renderComment(visuals, node, ctx) {
            var left, top, width, height, config, theme, lineWidth, left2, top2, width2, height2, padding;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    left = node.x - node.w;
                    top = node.y - node.h;
                    width = node.w * 2;
                    height = node.h * 2;
                    config = visuals.config;
                    theme = config.theme;
                    ctx.strokeStyle = getThemeValue(config, node, 'iconBorder');
                    ctx.fillStyle = theme.commentBack;
                    lineWidth = getThemeValue(config, node, 'borderWidth');
                    if (theme.shadowColor) {
                        ctx.shadowColor = theme.shadowColor;
                        ctx.shadowBlur = theme.shadowBlur;
                        __state = '28';
                    } else {
                        __state = '28';
                    }
                    break;
                case '26':
                    centerContent(visuals, node, ctx);
                    return;
                case '27':
                    padding = config.commentPadding;
                    ctx.fillStyle = getThemeValue(config, node, 'iconBack');
                    ctx.strokeStyle = getThemeValue(config, node, 'internalLine');
                    left2 = left + padding;
                    top2 = top + padding;
                    width2 = width - padding * 2;
                    height2 = height - padding * 2;
                    roundedRect(ctx, left2, top2, width2, height2, padding);
                    ctx.fill();
                    ctx.lineWidth = lineWidth || 1;
                    roundedRect(ctx, left2 + 0.5, top2 + 0.5, width2, height2, padding);
                    ctx.stroke();
                    __state = '26';
                    break;
                case '28':
                    ctx.fillRect(left, top, width, height);
                    clearShadow(ctx);
                    if (lineWidth) {
                        ctx.lineWidth = lineWidth;
                        ctx.strokeRect(left + 0.5, top + 0.5, width, height);
                        __state = '27';
                    } else {
                        __state = '27';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function renderHeader(visuals, node, ctx) {
            var line;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    line = setFillStroke(visuals.config, node, ctx);
                    buildBeginEndPath(ctx, node.x, node.y, node.w, node.h);
                    ctx.fill();
                    clearShadow(ctx);
                    if (line) {
                        buildBeginEndPath(ctx, node.x + 0.5, node.y + 0.5, node.w, node.h);
                        ctx.stroke();
                        __state = '18';
                    } else {
                        __state = '18';
                    }
                    break;
                case '18':
                    centerContent(visuals, node, ctx);
                    return;
                default:
                    return;
                }
            }
        }
        function renderOutput(visuals, node, ctx) {
            var left, top, middle, thickness, padding, line, x0, x1, x3, x2, y0, y1, y2, h2, _var2;
            var __state = '14';
            while (true) {
                switch (__state) {
                case '2':
                    left = node.x - node.w;
                    top = node.y - node.h;
                    middle = top + h2;
                    _var2 = getThemeValue(visuals.config, node, 'borderWidth');
                    thickness = _var2 || 1;
                    ctx.strokeStyle = getThemeValue(visuals.config, node, 'internalLine');
                    x0 = node.x - node.w + 0.5;
                    x1 = x0 + padding;
                    x3 = node.x + node.w + 0.5;
                    x2 = x3 - padding * 2;
                    y0 = node.y - node.h + 0.5;
                    y1 = y0 + h2;
                    y2 = y0 + h2 + padding / 2;
                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y1);
                    ctx.lineTo(x2, y2);
                    ctx.stroke();
                    centerContentTop(visuals, node);
                    __state = '13';
                    break;
                case '12':
                    return;
                case '13':
                    __state = '12';
                    break;
                case '14':
                    h2 = getSecondaryHeightCore(visuals, node);
                    line = setFillStroke(visuals.config, node, ctx);
                    padding = visuals.config.metre / 2;
                    buildOutputPath(ctx, node.x, node.y, node.w, node.h, padding, h2);
                    ctx.fill();
                    clearShadow(ctx);
                    if (line) {
                        buildOutputPath(ctx, node.x + 0.5, node.y + 0.5, node.w, node.h, padding, h2);
                        ctx.stroke();
                        __state = '2';
                    } else {
                        __state = '2';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function renderEnd(visuals, node, ctx) {
            renderHeader(visuals, node, ctx);
            return;
        }
        function renderAction(visuals, node, ctx) {
            var left, top, width, height, line;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    left = node.x - node.w;
                    top = node.y - node.h;
                    width = node.w * 2;
                    height = node.h * 2;
                    line = setFillStroke(visuals.config, node, ctx);
                    ctx.fillRect(left, top, width, height);
                    clearShadow(ctx);
                    if (line) {
                        ctx.strokeRect(left + 0.5, top + 0.5, width, height);
                        __state = '10';
                    } else {
                        __state = '10';
                    }
                    break;
                case '10':
                    centerContent(visuals, node, ctx);
                    return;
                default:
                    return;
                }
            }
        }
        function renderInput(visuals, node, ctx) {
            var left, top, middle, thickness, padding, line, x0, x1, x3, x2, y0, y1, y2, h2, _var2;
            var __state = '14';
            while (true) {
                switch (__state) {
                case '2':
                    left = node.x - node.w;
                    top = node.y - node.h;
                    middle = top + h2;
                    _var2 = getThemeValue(visuals.config, node, 'borderWidth');
                    thickness = _var2 || 1;
                    ctx.strokeStyle = getThemeValue(visuals.config, node, 'internalLine');
                    x0 = node.x - node.w + 0.5;
                    x1 = x0 + padding * 2;
                    x3 = node.x + node.w + 0.5;
                    x2 = x3 - padding;
                    y0 = node.y - node.h + 0.5;
                    y1 = y0 + h2;
                    y2 = y0 + h2 + padding / 2;
                    ctx.beginPath();
                    ctx.moveTo(x1, y2);
                    ctx.lineTo(x1, y1);
                    ctx.lineTo(x2, y1);
                    ctx.stroke();
                    centerContentTop(visuals, node);
                    __state = '13';
                    break;
                case '12':
                    return;
                case '13':
                    __state = '12';
                    break;
                case '14':
                    h2 = getSecondaryHeightCore(visuals, node);
                    line = setFillStroke(visuals.config, node, ctx);
                    padding = visuals.config.metre / 2;
                    buildInputPath(ctx, node.x, node.y, node.w, node.h, padding, h2);
                    ctx.fill();
                    clearShadow(ctx);
                    if (line) {
                        buildInputPath(ctx, node.x + 0.5, node.y + 0.5, node.w, node.h, padding, h2);
                        ctx.stroke();
                        __state = '2';
                    } else {
                        __state = '2';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function renderCtrlEnd(visuals, node, ctx) {
            var line;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    line = setFillStroke(visuals.config, node, ctx);
                    buildCtrlEndPath(ctx, node.x, node.y, node.w, node.h);
                    ctx.fill();
                    clearShadow(ctx);
                    if (line) {
                        buildCtrlEndPath(ctx, node.x + 0.5, node.y + 0.5, node.w, node.h);
                        ctx.stroke();
                        __state = '18';
                    } else {
                        __state = '18';
                    }
                    break;
                case '18':
                    centerContent(visuals, node, ctx);
                    return;
                default:
                    return;
                }
            }
        }
        function renderLoopEnd(visuals, node, ctx) {
            var line;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    line = setFillStroke(visuals.config, node, ctx);
                    buildLoopEndPath(ctx, node.x, node.y, node.w, node.h, visuals.config.metre);
                    ctx.fill();
                    clearShadow(ctx);
                    if (line) {
                        buildLoopEndPath(ctx, node.x + 0.5, node.y + 0.5, node.w, node.h, visuals.config.metre);
                        ctx.stroke();
                        __state = '15';
                    } else {
                        __state = '15';
                    }
                    break;
                case '15':
                    centerContent(visuals, node, ctx);
                    return;
                default:
                    return;
                }
            }
        }
        function renderJunction(node, ctx) {
            return;
        }
        function initIconRender(output, input) {
            var defaultValues;
            defaultValues = {
                action: renderAction,
                question: renderQuestion,
                'case': renderCase,
                select: renderSelect,
                branch: renderBranch,
                address: renderAddress,
                end: renderEnd,
                junction: renderJunction,
                'arrow-loop': renderJunction,
                header: renderHeader,
                loopbegin: renderLoopBegin,
                loopend: renderLoopEnd,
                params: renderAction,
                comment: renderComment,
                insertion: renderInsertion,
                simpleinput: renderSimpleInput,
                simpleoutput: renderSimpleOutput,
                duration: renderDuration,
                pause: renderDuration,
                timer: renderTimer,
                ctrlstart: renderCtrlStart,
                ctrlend: renderCtrlEnd,
                shelf: renderShelf,
                process: renderProcess,
                output: renderOutput,
                input: renderInput
            };
            mergeConfigs(output, input, 'iconRender', defaultValues);
            return;
        }
        function initIconContent(output, input) {
            var defaultValues;
            defaultValues = {
                action: contentAction,
                question: contentQuestion,
                'case': contentCase,
                select: contentSelect,
                branch: contentBranch,
                address: contentAddress,
                end: contentEnd,
                junction: contentJunction,
                'arrow-loop': contentJunction,
                header: contentHeader,
                loopbegin: contentAction,
                loopend: contentAction,
                params: contentAction,
                comment: contentComment,
                insertion: contentInsertion,
                simpleinput: contentSimpleInput,
                simpleoutput: contentSimpleOutput,
                duration: contentDuration,
                timer: contentDuration,
                pause: contentDuration,
                ctrlstart: contentDuration,
                ctrlend: contentDuration,
                shelf: contentShelf,
                process: contentProcess,
                output: contentOutput,
                input: contentInput
            };
            mergeConfigs(output, input, 'iconContent', defaultValues);
            return;
        }
        function flowIcon(visuals, node) {
            var context, size, config;
            config = visuals.config;
            context = {
                type: node.type,
                content: node.content,
                secondary: node.secondary,
                link: node.link,
                style: node.style,
                flag1: node.flag1,
                margin: node.margin || 0,
                config: config
            };
            node.core = config.buildIconCore(context);
            size = measureCore(visuals, node);
            setNodeSize(config, node, size);
            return;
        }
        function setNodeSize(config, node, size) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (node.subtype === 'parbegin') {
                        if (node.two) {
                            node.w = config.metre / 2;
                            node.h = 0;
                            __state = '1';
                        } else {
                            __state = '5';
                        }
                    } else {
                        __state = '5';
                    }
                    break;
                case '5':
                    if (size.width) {
                        node.w = makeHalfSize(config, size.width);
                        __state = '8';
                    } else {
                        node.w = 0;
                        __state = '8';
                    }
                    break;
                case '8':
                    if (size.height) {
                        if (node.type === 'end') {
                            node.h = Math.floor(size.height / 2);
                            __state = '1';
                        } else {
                            node.h = makeHalfSize(config, size.height);
                            node.h = Math.max(config.metre, node.h);
                            __state = '1';
                        }
                    } else {
                        node.h = 0;
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function buildTextDiv(type, text, config, font, textAlign, color) {
            var textDiv;
            text = text || '';
            textDiv = div({
                display: 'inline-block',
                position: 'absolute',
                color: color,
                text: text,
                left: '0px',
                top: '0px',
                font: font,
                'user-select': 'none',
                'text-align': textAlign,
                'max-width': config.width + 'px',
                'min-width': config.minWidth + 'px',
                padding: config.padding + 'px',
                lineHeight: config.lineHeight
            });
            return textDiv;
        }
        function createLabel(container, text, config) {
            var label;
            label = div({
                display: 'inline-block',
                position: 'absolute',
                text: text,
                'user-select': 'none',
                color: config.backText,
                font: config.font,
                left: '0px',
                top: '0px'
            });
            html.add(container, label);
            return label;
        }
        function buildMulitlineDiv(type, text, config, font, textAlign, color) {
            var textDiv, lines, p, _var2, _var3, line, _var4;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    text = text || '';
                    textDiv = div({
                        display: 'inline-block',
                        position: 'absolute',
                        color: color,
                        left: '0px',
                        top: '0px',
                        font: font,
                        'user-select': 'none',
                        'text-align': textAlign,
                        'max-width': config.width + 'px',
                        'min-width': config.minWidth + 'px',
                        padding: config.padding + 'px',
                        lineHeight: config.lineHeight
                    });
                    lines = text.split('\n');
                    _var2 = lines;
                    _var3 = 0;
                    __state = '7';
                    break;
                case '7':
                    if (_var3 < _var2.length) {
                        line = _var2[_var3];
                        _var4 = line.trim();
                        p = createPar(_var4);
                        html.add(textDiv, p);
                        _var3++;
                        __state = '7';
                    } else {
                        return textDiv;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function contentEnd(visuals, node) {
            var options, padding, _var2;
            padding = visuals.config.padding / 2;
            options = {
                paddingTop: padding,
                paddingBottom: padding,
                padding: visuals.config.padding / 2,
                paddingLeft: visuals.config.padding,
                paddingRight: visuals.config.padding,
                minHeight: 0,
                minWidth: 0,
                textAlign: 'center',
                lineHeight: 1,
                singleLine: true
            };
            _var2 = buildTextContent(visuals, node, options);
            return _var2;
        }
        function contentProcess(visuals, node) {
            var options, padding, _var2;
            padding = visuals.config.metre / 2;
            options = {
                topLeft: padding,
                bottomRight: padding
            };
            _var2 = buildDoubleTextContent(visuals, node, options);
            return _var2;
        }
        function contentAction(visuals, node) {
            var options, _var2;
            options = {};
            _var2 = buildTextContent(visuals, node, options);
            return _var2;
        }
        function contentInsertion(visuals, node) {
            var options, padding, _var2;
            padding = visuals.config.insertionPadding;
            options = {
                paddingLeft: padding,
                paddingRight: padding
            };
            _var2 = buildTextContent(visuals, node, options);
            return _var2;
        }
        function contentQuestion(visuals, node) {
            var options, padding, _var2;
            padding = visuals.config.metre / 2;
            options = {
                paddingLeft: padding,
                paddingRight: padding
            };
            _var2 = buildTextContent(visuals, node, options);
            return _var2;
        }
        function contentCase(visuals, node) {
            var options, _var2;
            options = { textAlign: 'center' };
            _var2 = buildTextContent(visuals, node, options);
            return _var2;
        }
        function contentShelf(visuals, node) {
            var options, _var2;
            options = {};
            _var2 = buildDoubleTextContent(visuals, node, options);
            return _var2;
        }
        function contentInput(visuals, node) {
            var options, extra, config, _var2;
            config = visuals.config;
            extra = config.metre / 2;
            options = {
                topLeft: extra,
                topRight: extra,
                bottomLeft: config.padding + extra,
                bottomRight: 0
            };
            _var2 = buildDoubleTextContent(visuals, node, options);
            return _var2;
        }
        function contentSelect(visuals, node) {
            var options, padding, _var2;
            padding = visuals.config.padding;
            options = {
                paddingLeft: padding,
                paddingRight: padding
            };
            _var2 = buildTextContent(visuals, node, options);
            return _var2;
        }
        function contentHeader(visuals, node) {
            var options, config, padding, _var2;
            config = visuals.config;
            padding = config.padding;
            options = {
                paddingLeft: padding,
                paddingRight: padding,
                textAlign: 'center',
                maxWidth: config.maxWidth * 1.4,
                lineHeight: 1,
                singleLine: true
            };
            _var2 = buildTextContent(visuals, node, options);
            return _var2;
        }
        function contentDuration(visuals, node) {
            var options, padding, _var2;
            padding = visuals.config.padding * 1.5;
            options = {
                paddingLeft: padding,
                paddingRight: padding,
                textAlign: 'center'
            };
            _var2 = buildTextContent(visuals, node, options);
            return _var2;
        }
        function contentJunction(visuals, node) {
            return {
                width: 0,
                height: 0
            };
        }
        function contentSimpleInput(visuals, node) {
            var options, _var2;
            options = { paddingLeft: visuals.config.metre };
            _var2 = buildTextContent(visuals, node, options);
            return _var2;
        }
        function contentSimpleOutput(visuals, node) {
            var options, _var2;
            options = { paddingRight: visuals.config.metre };
            _var2 = buildTextContent(visuals, node, options);
            return _var2;
        }
        function contentAddress(visuals, node) {
            var options, _var2;
            options = {
                textAlign: 'center',
                font: visuals.config.branchFont
            };
            _var2 = buildTextContent(visuals, node, options);
            return _var2;
        }
        function contentOutput(visuals, node) {
            var options, extra, config, _var2;
            config = visuals.config;
            extra = config.metre / 2;
            options = {
                topLeft: extra,
                topRight: extra,
                bottomRight: config.padding + extra,
                bottomLeft: 0
            };
            _var2 = buildDoubleTextContent(visuals, node, options);
            return _var2;
        }
        function contentComment(visuals, node) {
            var options, _var2;
            options = { padding: visuals.config.commentPadding + visuals.config.padding };
            _var2 = buildTextContent(visuals, node, options);
            return _var2;
        }
        function reflowIcon(visuals, node) {
            var size, config, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    config = visuals.config;
                    size = commitCore(visuals, node, node.w * 2);
                    setNodeSize(config, node, size);
                    node.contentHeight = size.height;
                    _var2 = node.type;
                    if (_var2 === 'branch') {
                        __state = '17';
                    } else {
                        if (_var2 === 'case') {
                            __state = '17';
                        } else {
                            if (_var2 === 'address') {
                                __state = '17';
                            } else {
                                __state = '1';
                            }
                        }
                    }
                    break;
                case '17':
                    node.h += config.triangleHeight / 2;
                    __state = '1';
                    break;
                default:
                    return;
                }
            }
        }
        function DrakonCanvas_setZoom(self, zoom) {
            var _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    tracing.trace('DrakonCanvas.setZoom', zoom);
                    _var2 = Math.min(40000, zoom);
                    self.zoom = Math.max(2500, _var2);
                    self.zoomFactor = self.zoom / 10000;
                    if (self.edit) {
                        self.visuals.config.zoom = self.zoomFactor;
                        initScrollPos(self);
                        paint(self);
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
        function DrakonCanvas_setSecondary(self, itemId, secondary) {
            var change, _var2;
            tracing.trace('DrakonCanvas.setSecondary', itemId);
            checkNotReadonly(self);
            change = {
                id: itemId,
                fields: { secondary: secondary },
                op: 'update'
            };
            _var2 = updateAndKeepSelection(self, [change]);
            return _var2;
        }
        function DrakonCanvas_deleteSelection(self) {
            var _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    tracing.trace('DrakonCanvas.deleteSelection');
                    _var2 = isReadonly(self);
                    if (_var2) {
                        __state = '1';
                    } else {
                        deleteSelection(self);
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function DrakonCanvas_onMouseMove(self, evt) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (self.mouseEvents) {
                        self.mouseEvents.mouseMove(evt);
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
        function DrakonCanvas_editContent(self) {
            var nodes, node, prim, element, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    tracing.trace('DrakonCanvas.editContent');
                    element = getFreeFromSelection(self);
                    if (element) {
                        prim = freeToVisualItem(self, element);
                        startEditContent(self, prim);
                        __state = '1';
                    } else {
                        nodes = getNodesFromSelection(self);
                        if (nodes.length === 1) {
                            node = nodes[0];
                            _var2 = canEditNodeText(self, prim);
                            if (_var2) {
                                prim = nodeToVisualItem(self, node);
                                startEditContent(self, prim);
                                __state = '1';
                            } else {
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
        function DrakonCanvas_getVersion(self) {
            return '1.0.3';
        }
        function DrakonCanvas_exportCanvas(self, zoom100) {
            var width, height, visuals, config, ctx, factor, box, canvas, zoom;
            tracing.trace('DrakonCanvas.exportCanvas', zoom100);
            zoom = zoom100 / 10000;
            factor = 1;
            visuals = self.visuals;
            config = visuals.config;
            box = self.visuals.box;
            width = (box.right - box.left) * zoom;
            height = (box.bottom - box.top) * zoom;
            canvas = html.createElement('canvas', {
                width: width,
                height: height
            });
            ctx = canvas.getContext('2d');
            visuals.ctx = ctx;
            paintCore(self, factor, zoom, -box.left, -box.top, width, height);
            visuals.ctx = self.canvas.getContext('2d');
            return canvas;
        }
        function DrakonCanvas_copySelection(self) {
            tracing.trace('DrakonCanvas.copySelection');
            copy(self);
            return;
        }
        function DrakonCanvas_setContent(self, itemId, content) {
            var change, _var2, _var3, _var4;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    tracing.trace('DrakonCanvas.setContent', itemId);
                    checkNotReadonly(self);
                    _var2 = itemId;
                    if (_var2 === 'header') {
                        change = {
                            fields: { name: content },
                            op: 'update'
                        };
                        self.edit.updateDocument([change]);
                        return [];
                    } else {
                        if (_var2 === 'params') {
                            change = {
                                fields: { params: content },
                                op: 'update'
                            };
                            if (content) {
                                __state = '_item6';
                            } else {
                                _var3 = doEdit(self, [change]);
                                return _var3;
                            }
                        } else {
                            change = {
                                id: itemId,
                                fields: { content: content },
                                op: 'update'
                            };
                            __state = '_item6';
                        }
                    }
                    break;
                case '_item6':
                    _var4 = updateAndKeepSelection(self, [change]);
                    return _var4;
                default:
                    return;
                }
            }
        }
        function DrakonCanvas_showItem(self, itemId) {
            var visuals, box, width, height, nodeBox, nodeLeft, nodeTop, nodeRight, nodeBottom, scroll, scrollX, halfWidth, scrollY, halfHeight, zoom, node;
            var __state = '13';
            while (true) {
                switch (__state) {
                case '2':
                    if (nodeLeft >= 0) {
                        if (nodeRight < self.width) {
                            scrollX = visuals.scrollX;
                            __state = '12';
                        } else {
                            __state = '36';
                        }
                    } else {
                        __state = '36';
                    }
                    break;
                case '11':
                    return;
                case '12':
                    if (nodeTop >= 0) {
                        if (nodeBottom < self.height) {
                            scrollY = visuals.scrollY;
                            __state = '21';
                        } else {
                            __state = '39';
                        }
                    } else {
                        __state = '39';
                    }
                    break;
                case '13':
                    tracing.trace('DrakonCanvas.showItem', itemId);
                    visuals = self.visuals;
                    box = visuals.box;
                    zoom = self.zoomFactor;
                    width = self.width / zoom;
                    height = self.height / zoom;
                    node = getFree(visuals, itemId);
                    if (node) {
                        __state = '29';
                    } else {
                        node = getNode(visuals, itemId);
                        __state = '29';
                    }
                    break;
                case '21':
                    scroll = setScroll(self, scrollX, scrollY);
                    copyScrollToScrollable(self, scroll.x, scroll.y);
                    selectPrim(self, itemId);
                    paint(self);
                    __state = '11';
                    break;
                case '29':
                    nodeBox = node.box;
                    nodeLeft = diagramToWidgetX(self, nodeBox.left);
                    nodeTop = diagramToWidgetY(self, nodeBox.top);
                    nodeRight = diagramToWidgetX(self, nodeBox.left + nodeBox.width);
                    nodeBottom = diagramToWidgetY(self, nodeBox.top + nodeBox.height);
                    __state = '2';
                    break;
                case '36':
                    halfWidth = Math.floor(width / 2);
                    scrollX = node.x - halfWidth;
                    __state = '12';
                    break;
                case '39':
                    halfHeight = Math.floor(height / 2);
                    scrollY = node.y - halfHeight;
                    __state = '21';
                    break;
                default:
                    return;
                }
            }
        }
        function DrakonCanvas_setDiagram(self, diagramId, diagram, sender) {
            var _var2;
            tracing.trace('setDiagram', diagramId);
            self.edit = edit_tools.createUndoEdit(diagram, sender);
            self.diagramId = diagramId;
            resetSelection(self);
            _var2 = self.redraw();
            return _var2;
        }
        function isLower(record, source) {
            if (record.type === 'node') {
                return record.element.y > source.tail.y;
            } else {
                return record.element.tail.y > source.tail.y;
            }
        }
        function sameLoop(visuals, srcLinks, targetId) {
            var target, src, _var2, _var3, link, _var4, _var5;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    target = getNodeByItem(visuals, targetId);
                    _var2 = srcLinks;
                    _var3 = 0;
                    __state = '5';
                    break;
                case '4':
                    _var3++;
                    __state = '5';
                    break;
                case '5':
                    if (_var3 < _var2.length) {
                        link = _var2[_var3];
                        src = getNodeByItem(visuals, link.source);
                        _var4 = isSubset(src.loops, target.loops);
                        if (_var4) {
                            __state = '4';
                        } else {
                            _var5 = canComeBackTo(src, target.loops);
                            if (_var5) {
                                __state = '4';
                            } else {
                                return false;
                            }
                        }
                    } else {
                        return true;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function withinSameLoopCore(node, target, depth) {
            var _var2, _var3, _var4, prev, _var5;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    _var2 = node.type;
                    if (_var2 === 'loopbegin') {
                        depth--;
                        __state = '10';
                    } else {
                        if (_var2 === 'loopend') {
                            depth++;
                            __state = '10';
                        } else {
                            __state = '10';
                        }
                    }
                    break;
                case '3':
                    return true;
                case '10':
                    if (depth < 0) {
                        __state = '11';
                    } else {
                        if (node === target) {
                            __state = '3';
                        } else {
                            _var3 = node.prev;
                            _var4 = 0;
                            __state = '14';
                        }
                    }
                    break;
                case '11':
                    return false;
                case '14':
                    if (_var4 < _var3.length) {
                        prev = _var3[_var4];
                        _var5 = withinSameLoopCore(prev, target, depth);
                        if (_var5) {
                            _var4++;
                            __state = '14';
                        } else {
                            __state = '11';
                        }
                    } else {
                        __state = '3';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function isCaseJun(node) {
            var below;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (node.down) {
                        below = getDown(node);
                        if (below.type == 'case') {
                            return true;
                        } else {
                            __state = '7';
                        }
                    } else {
                        __state = '7';
                    }
                    break;
                case '7':
                    return false;
                default:
                    return;
                }
            }
        }
        function isSimpleItem(node) {
            var _var2, _var3;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    _var2 = node.type;
                    if (_var2 === 'header') {
                        __state = '3';
                    } else {
                        if (_var2 === 'end') {
                            __state = '3';
                        } else {
                            if (_var2 === 'junction') {
                                __state = '3';
                            } else {
                                if (_var2 === 'select') {
                                    __state = '3';
                                } else {
                                    if (_var2 === 'question') {
                                        __state = '3';
                                    } else {
                                        if (_var2 === 'address') {
                                            __state = '3';
                                        } else {
                                            if (_var2 === 'case') {
                                                _var3 = firstCase(node.select);
                                                if (_var3 === node) {
                                                    __state = '3';
                                                } else {
                                                    __state = '12';
                                                }
                                            } else {
                                                __state = '12';
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    break;
                case '3':
                    return false;
                case '12':
                    return true;
                default:
                    return;
                }
            }
        }
        function withinSameLoop(visuals, src, target) {
            var targetNode, node, _var2, _var3, link, _var4;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    targetNode = target.finalTarget;
                    _var2 = src.links;
                    _var3 = 0;
                    __state = '5';
                    break;
                case '5':
                    if (_var3 < _var2.length) {
                        link = _var2[_var3];
                        node = getNodeByItem(visuals, link.source);
                        _var4 = withinSameLoopCore(node, targetNode, 0);
                        if (_var4) {
                            _var3++;
                            __state = '5';
                        } else {
                            return false;
                        }
                    } else {
                        return true;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function createArrowSocket(visuals, element, source) {
            var targetId, targetLoops, srcLoops, socket, _var2, _var3, _var4, _var5, _var6;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    targetId = element.finalTarget.itemId;
                    _var2 = isArrowLoop(element.head);
                    if (_var2) {
                        __state = '4';
                    } else {
                        _var3 = isArrowLoop(element.tail);
                        if (_var3) {
                            __state = '4';
                        } else {
                            _var4 = canTransplant(visuals, targetId, source);
                            if (_var4) {
                                __state = '5';
                            } else {
                                __state = '4';
                            }
                        }
                    }
                    break;
                case '4':
                    return;
                case '5':
                    if (element.tail.x < source.tail.x) {
                        targetLoops = element.finalTarget.loops;
                        srcLoops = source.finalTarget.loops;
                        _var5 = withinSameLoop(visuals, source, element, 0);
                        if (_var5) {
                            _var6 = hasOtherEntries(visuals, source, element.tail);
                            if (_var6) {
                                __state = '4';
                            } else {
                                socket = createSocketFromEdge(visuals, element, 'arrow', undefined);
                                addRange(source.links, socket.links);
                                __state = '4';
                            }
                        } else {
                            __state = '4';
                        }
                    } else {
                        __state = '4';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function canComeBackToStep(context, node) {
            var loops, visited, _var2, _var3, prev, _var4;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    loops = context.loops;
                    visited = context.visited;
                    if (context.finished) {
                        __state = '1';
                    } else {
                        if (node.itemId in loops) {
                            context.finished = true;
                            __state = '1';
                        } else {
                            if (node.id in visited) {
                                __state = '1';
                            } else {
                                visited[node.id] = true;
                                _var4 = isSubset(node.loops, loops);
                                if (_var4) {
                                    context.finished = true;
                                    context.success = true;
                                    __state = '1';
                                } else {
                                    _var2 = node.prev;
                                    _var3 = 0;
                                    __state = '12';
                                }
                            }
                        }
                    }
                    break;
                case '12':
                    if (_var3 < _var2.length) {
                        prev = _var2[_var3];
                        canComeBackToStep(context, prev);
                        _var3++;
                        __state = '12';
                    } else {
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function canTransplant(visuals, targetId, source) {
            var _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (source.finalTarget.itemId === targetId) {
                        __state = '6';
                    } else {
                        _var2 = sameLoop(visuals, source.links, targetId);
                        if (_var2) {
                            return true;
                        } else {
                            __state = '6';
                        }
                    }
                    break;
                case '6':
                    return false;
                default:
                    return;
                }
            }
        }
        function canTurnRight(node) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    __state = '10';
                    break;
                case '6':
                    return false;
                case '10':
                    if (node.type === 'question') {
                        __state = '6';
                    } else {
                        if (node.type === 'select') {
                            __state = '6';
                        } else {
                            if (node.up) {
                                node = getUp(node);
                                __state = '10';
                            } else {
                                return true;
                            }
                        }
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function getNodeByItem(visuals, itemId) {
            var nodeId, _var2;
            nodeId = visuals.itemsToNodes[itemId];
            _var2 = getNode(visuals, nodeId);
            return _var2;
        }
        function isAddressJun(node) {
            var above;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (node.up) {
                        above = getUp(node);
                        if (above.type === 'address') {
                            __state = '3';
                        } else {
                            if (node.right) {
                                if (node.right.role == 'floor') {
                                    __state = '3';
                                } else {
                                    __state = '10';
                                }
                            } else {
                                __state = '10';
                            }
                        }
                    } else {
                        __state = '10';
                    }
                    break;
                case '3':
                    return true;
                case '10':
                    return false;
                default:
                    return;
                }
            }
        }
        function findLianaSource(visuals, prim) {
            var node, beneath, edge, _var2, _var3, _var4, _var5, _var6, _var7, _var8, _var9, _var10, _var11, _var12;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    _var2 = prim.elType;
                    if (_var2 === 'node') {
                        node = getNode(visuals, prim.id);
                        if (node.arrow) {
                            return node.arrow;
                        } else {
                            if (node.type === 'junction') {
                                _var5 = isLeftDown(node);
                                if (_var5) {
                                    __state = '21';
                                } else {
                                    _var6 = isRightUp(node);
                                    if (_var6) {
                                        if (node.right.role === 'floor') {
                                            return undefined;
                                        } else {
                                            return node.up;
                                        }
                                    } else {
                                        _var7 = isCaseJun(node);
                                        if (_var7) {
                                            __state = '34';
                                        } else {
                                            _var8 = isBranchJun(node);
                                            if (_var8) {
                                                __state = '34';
                                            } else {
                                                _var9 = isAddressJun(node);
                                                if (_var9) {
                                                    __state = '34';
                                                } else {
                                                    if (node.left) {
                                                        if (node.up) {
                                                            if (node.down) {
                                                                return node.left;
                                                            } else {
                                                                return node.up;
                                                            }
                                                        } else {
                                                            __state = '34';
                                                        }
                                                    } else {
                                                        __state = '34';
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            } else {
                                _var3 = isSimpleItem(node);
                                if (_var3) {
                                    if (node.down) {
                                        __state = '21';
                                    } else {
                                        __state = '59';
                                    }
                                } else {
                                    if (node.type === 'address') {
                                        if (node.skewer.main) {
                                            __state = '59';
                                        } else {
                                            return node.up;
                                        }
                                    } else {
                                        __state = '59';
                                    }
                                }
                            }
                        }
                    } else {
                        if (_var2 === 'edge') {
                            edge = getEdge(visuals, prim.id);
                            if (edge.arrow) {
                                return edge.arrow;
                            } else {
                                if (edge.role) {
                                    if (edge.role === 'floor') {
                                        __state = '61';
                                    } else {
                                        if (edge.role === 'rarrow') {
                                            __state = '61';
                                        } else {
                                            if (edge.vertical) {
                                                if (edge.tail.type === 'junction') {
                                                    _var12 = isRightT(edge.tail);
                                                    if (_var12) {
                                                        __state = '61';
                                                    } else {
                                                        return edge;
                                                    }
                                                } else {
                                                    __state = '61';
                                                }
                                            } else {
                                                _var10 = isLeftUp(edge.tail);
                                                if (_var10) {
                                                    return edge.tail.up;
                                                } else {
                                                    _var11 = isRightUp(edge.head);
                                                    if (_var11) {
                                                        return edge.head.up;
                                                    } else {
                                                        if (edge.head.type == 'junction') {
                                                            return edge;
                                                        } else {
                                                            if (edge.head.type === 'question') {
                                                                if (edge.tail.up) {
                                                                    return edge;
                                                                } else {
                                                                    __state = '60';
                                                                }
                                                            } else {
                                                                __state = '60';
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    __state = '61';
                                }
                            }
                        } else {
                            __state = '61';
                        }
                    }
                    break;
                case '21':
                    beneath = getDown(node);
                    if (beneath.type === 'junction') {
                        _var4 = isRightT(beneath);
                        if (_var4) {
                            __state = '59';
                        } else {
                            return node.down;
                        }
                    } else {
                        __state = '59';
                    }
                    break;
                case '34':
                    return undefined;
                case '59':
                    return undefined;
                case '60':
                    return undefined;
                case '61':
                    return undefined;
                default:
                    return;
                }
            }
        }
        function createLianaSocket(visuals, record, source, style) {
            var socket, _var2, _var3;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    _var2 = canTransplant(visuals, record.targetId, source);
                    if (_var2) {
                        _var3 = adjacentToAddress(record, source);
                        if (_var3) {
                            __state = '1';
                        } else {
                            if (record.type === 'node') {
                                socket = createNodeSocket(visuals, record.element, source);
                                __state = '9';
                            } else {
                                socket = createSocketFromEdge(visuals, record.element, 'liana', undefined);
                                __state = '9';
                            }
                        }
                    } else {
                        __state = '1';
                    }
                    break;
                case '9':
                    socket.arrow = source.arrow;
                    socket.style = style;
                    addRange(source.links, socket.links);
                    __state = '1';
                    break;
                default:
                    return;
                }
            }
        }
        function canComeBackTo(src, loops) {
            var context;
            context = {
                visited: {},
                finished: false,
                success: false,
                loops: loops
            };
            canComeBackToStep(context, src);
            return context.success;
        }
        function hasOtherEntries(visuals, source, higher) {
            var context, node, _var2, _var3, link;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    context = {
                        found: false,
                        visited: {}
                    };
                    _var2 = source.links;
                    _var3 = 0;
                    __state = '5';
                    break;
                case '5':
                    if (_var3 < _var2.length) {
                        link = _var2[_var3];
                        node = getNodeByItem(visuals, link.source);
                        hasOtherEntriesStep(node, higher, context);
                        _var3++;
                        __state = '5';
                    } else {
                        return context.found;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function hasOtherEntriesStep(lower, higher, context) {
            var _var2, _var3, prev;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (context.found) {
                        __state = '1';
                    } else {
                        if (lower === higher) {
                            __state = '1';
                        } else {
                            if (lower.id in context.visited) {
                                __state = '1';
                            } else {
                                context.visited[lower.id] = true;
                                if (lower.prev.length === 0) {
                                    context.found = true;
                                    __state = '1';
                                } else {
                                    _var2 = lower.prev;
                                    _var3 = 0;
                                    __state = '10';
                                }
                            }
                        }
                    }
                    break;
                case '10':
                    if (_var3 < _var2.length) {
                        prev = _var2[_var3];
                        hasOtherEntriesStep(prev, higher, context);
                        _var3++;
                        __state = '10';
                    } else {
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function showLianaSockets(widget, prim) {
            var source, visuals, _var15, _var14, _var16, targetId, record, _var12, _var11, _var13, _var9, _var8, _var10, _var6, _var5, _var7, id, downEdge, _var3, _var2, _var4, _var17, _var18, _var19, _var20, _var21;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    visuals = widget.visuals;
                    clearSockets(visuals);
                    _var21 = isReadonly(widget);
                    if (_var21) {
                        __state = '4';
                    } else {
                        source = findLianaSource(visuals, prim);
                        if (source) {
                            __state = '10';
                        } else {
                            __state = '4';
                        }
                    }
                    break;
                case '4':
                    return;
                case '6':
                    _var17 = isDegQuestion(source);
                    if (_var17) {
                        _var15 = source.inner.inner;
                        _var14 = Object.keys(_var15);
                        _var16 = 0;
                        __state = '13';
                    } else {
                        __state = '4';
                    }
                    break;
                case '7':
                    if (source.inner) {
                        _var12 = source.inner.outer;
                        _var11 = Object.keys(_var12);
                        _var13 = 0;
                        __state = '16';
                    } else {
                        __state = '4';
                    }
                    break;
                case '8':
                    _var9 = source.outer.inner;
                    _var8 = Object.keys(_var9);
                    _var10 = 0;
                    __state = '24';
                    break;
                case '9':
                    if (source.arrow) {
                        __state = '8';
                    } else {
                        _var6 = source.outer.outerArrPads;
                        _var5 = Object.keys(_var6);
                        _var7 = 0;
                        __state = '32';
                    }
                    break;
                case '10':
                    if (source.outer) {
                        _var3 = source.outer.outer;
                        _var2 = Object.keys(_var3);
                        _var4 = 0;
                        __state = '36';
                    } else {
                        __state = '7';
                    }
                    break;
                case '13':
                    if (_var16 < _var14.length) {
                        targetId = _var14[_var16];
                        record = _var15[targetId];
                        createLianaSocket(visuals, record, source, 'inner-inner');
                        _var16++;
                        __state = '13';
                    } else {
                        __state = '4';
                    }
                    break;
                case '15':
                    _var13++;
                    __state = '16';
                    break;
                case '16':
                    if (_var13 < _var11.length) {
                        targetId = _var11[_var13];
                        record = _var12[targetId];
                        if (source.role === 'right-loop') {
                            __state = '15';
                        } else {
                            if (source.vertical) {
                                __state = '42';
                            } else {
                                _var18 = isLower(record, source);
                                if (_var18) {
                                    __state = '42';
                                } else {
                                    __state = '15';
                                }
                            }
                        }
                    } else {
                        __state = '6';
                    }
                    break;
                case '23':
                    _var10++;
                    __state = '24';
                    break;
                case '24':
                    if (_var10 < _var8.length) {
                        targetId = _var8[_var10];
                        record = _var9[targetId];
                        _var19 = canOuterToInner(record, source);
                        if (_var19) {
                            createLianaSocket(visuals, record, source, 'outer-inner');
                            __state = '23';
                        } else {
                            __state = '23';
                        }
                    } else {
                        if (source.arrow) {
                            __state = '4';
                        } else {
                            if (source.role === 'up') {
                                __state = '4';
                            } else {
                                __state = '7';
                            }
                        }
                    }
                    break;
                case '32':
                    if (_var7 < _var5.length) {
                        id = _var5[_var7];
                        downEdge = _var6[id];
                        createArrowSocket(visuals, downEdge, source);
                        _var7++;
                        __state = '32';
                    } else {
                        __state = '8';
                    }
                    break;
                case '35':
                    _var4++;
                    __state = '36';
                    break;
                case '36':
                    if (_var4 < _var2.length) {
                        targetId = _var2[_var4];
                        record = _var3[targetId];
                        _var20 = isLower(record, source);
                        if (_var20) {
                            createLianaSocket(visuals, record, source, 'outer-outer');
                            __state = '35';
                        } else {
                            __state = '35';
                        }
                    } else {
                        __state = '9';
                    }
                    break;
                case '42':
                    createLianaSocket(visuals, record, source, 'inner-outer');
                    __state = '15';
                    break;
                default:
                    return;
                }
            }
        }
        function canOuterToInner(record, source) {
            var targetNode, targetTop, targetStop, sourceBottom, sourceStop, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (record.type === 'node') {
                        targetNode = record.element;
                        __state = '10';
                    } else {
                        if (record.element.vertical) {
                            targetNode = record.element.tail;
                            __state = '10';
                        } else {
                            return true;
                        }
                    }
                    break;
                case '10':
                    targetTop = goUp(targetNode);
                    if (targetTop.y <= source.head.y) {
                        targetStop = goDown(targetNode);
                        sourceBottom = goDown(source.head);
                        sourceStop = goLeft(sourceBottom);
                        if (sourceStop === targetStop) {
                            __state = '14';
                        } else {
                            __state = '16';
                        }
                    } else {
                        __state = '14';
                    }
                    break;
                case '14':
                    return false;
                case '16':
                    if (targetStop.right) {
                        if (targetStop.right.role === 'right-loop') {
                            _var2 = canTurnRight(source.head);
                            if (_var2) {
                                __state = '21';
                            } else {
                                return false;
                            }
                        } else {
                            __state = '21';
                        }
                    } else {
                        __state = '21';
                    }
                    break;
                case '21':
                    return true;
                default:
                    return;
                }
            }
        }
        function isDegQuestion(edge) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (edge.vertical) {
                        __state = '7';
                    } else {
                        if (edge.head.type === 'question') {
                            if (edge.tail.up) {
                                return true;
                            } else {
                                __state = '7';
                            }
                        } else {
                            __state = '7';
                        }
                    }
                    break;
                case '7':
                    return false;
                default:
                    return;
                }
            }
        }
        function clickLianaSocket(widget, socket) {
            var edits;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    edits = [];
                    redirectUpperItems(edits, socket.links, socket.target);
                    if (socket.arrow) {
                        popFromSkewer(socket.arrow.finalTarget, edits);
                        __state = '7';
                    } else {
                        __state = '7';
                    }
                    break;
                case '7':
                    return edits;
                default:
                    return;
                }
            }
        }
        function createNodeSocket(visuals, node, source) {
            var socket, radius;
            radius = visuals.config.socketTouchRadius;
            socket = createSocket(visuals, node.x, node.y, 'liana', undefined, radius);
            socket.node = node;
            socket.target = node.finalTarget.itemId;
            return socket;
        }
        function isBranchJun(node) {
            var below;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (node.down) {
                        below = getDown(node);
                        if (below.type == 'branch') {
                            return true;
                        } else {
                            __state = '7';
                        }
                    } else {
                        __state = '7';
                    }
                    break;
                case '7':
                    return false;
                default:
                    return;
                }
            }
        }
        function adjacentToAddress(record, source) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (record.element.noBranch) {
                        if (source.tail.type === 'address') {
                            return true;
                        } else {
                            __state = '6';
                        }
                    } else {
                        __state = '6';
                    }
                    break;
                case '6':
                    return false;
                default:
                    return;
                }
            }
        }
        function firstCase(select) {
            return select.cases[0];
        }
        function DrakonCanvas_onMouseUp(self, evt) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (self.mouseEvents) {
                        self.mouseEvents.mouseUp(evt);
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
        function createFrameDrag(widget, evt) {
            var obj;
            obj = FrameDrag();
            obj.widget = widget;
            obj.startX = evt.clientX;
            obj.startY = evt.clientY;
            return obj;
        }
        function completeSimpleDrag2Prop(handle, prop1, prop2) {
            var change;
            change = {
                id: handle.element.id,
                fields: {},
                op: 'update'
            };
            change.fields[prop1] = handle.element[prop1];
            change.fields[prop2] = handle.element[prop2];
            updateAndKeepSelection(handle.widget, [change]);
            return;
        }
        function GroupTopHandle_dragTo(self, x, y) {
            console.log(x, y);
            self.element.hiX = x - self.element.x;
            self.element.hiY = y - self.element.y;
            return;
        }
        function GroupTopHandle_getMaxX(self) {
            return self.maxX;
        }
        function GroupTopHandle_getMinX(self) {
            return self.minX;
        }
        function GroupTopHandle_xEnabled(self) {
            return true;
        }
        function GroupTopHandle_yEnabled(self) {
            return true;
        }
        function GroupTopHandle_getMinY(self) {
            return self.minY;
        }
        function GroupTopHandle_getCursor(self) {
            return 'move';
        }
        function GroupTopHandle_complete(self) {
            completeSimpleDrag2Prop(self, 'hiX', 'hiY');
            return;
        }
        function GroupBottomHandle_getMinX(self) {
            return self.minX;
        }
        function GroupBottomHandle_complete(self) {
            completeSimpleDrag2Prop(self, 'loX', 'loY');
            return;
        }
        function GroupBottomHandle_getCursor(self) {
            return 'move';
        }
        function GroupBottomHandle_xEnabled(self) {
            return true;
        }
        function GroupBottomHandle_getMaxY(self) {
            return self.maxY;
        }
        function GroupBottomHandle_yEnabled(self) {
            return true;
        }
        function GroupBottomHandle_getMinY(self) {
            return self.minY;
        }
        function GroupBottomHandle_getMaxX(self) {
            return self.maxX;
        }
        function GroupBottomHandle_dragTo(self, x, y) {
            self.element.loX = x - self.element.x;
            self.element.loY = y - self.element.y;
            return;
        }
        function completeDrakonResize(handle) {
            var maxWidth, style;
            maxWidth = handle.element.w;
            style = buildStyleFromDiagram(handle.widget);
            style.maxWidth = maxWidth * 2;
            handle.widget.setDiagramStyle(style);
            return;
        }
        function createLeftDrakonResizeHandle(widget, node, y, ctx) {
            var config, big, handle;
            big = 500;
            config = widget.visuals.config;
            handle = LeftDrakonResizeHandle();
            handle.widget = widget;
            handle.element = node;
            handle.side = 'left';
            handle.x = node.x - node.w;
            handle.y = y;
            handle.id = node.id;
            handle.minX = node.x - big;
            handle.maxX = node.x - config.minWidth / 2;
            createHandle(widget.visuals, handle, ctx);
            return;
        }
        function RightDrakonResizeHandle_xEnabled(self) {
            return true;
        }
        function RightDrakonResizeHandle_yEnabled(self) {
            return false;
        }
        function RightDrakonResizeHandle_getMinX(self) {
            return self.minX;
        }
        function RightDrakonResizeHandle_dragTo(self, x, y) {
            self.element.w = x - self.element.x;
            return;
        }
        function RightDrakonResizeHandle_getMaxX(self) {
            return self.maxX;
        }
        function RightDrakonResizeHandle_getCursor(self) {
            return 'ew-resize';
        }
        function RightDrakonResizeHandle_complete(self) {
            completeDrakonResize(self);
            return;
        }
        function LeftDrakonResizeHandle_xEnabled(self) {
            return true;
        }
        function LeftDrakonResizeHandle_complete(self) {
            completeDrakonResize(self);
            return;
        }
        function LeftDrakonResizeHandle_getCursor(self) {
            return 'ew-resize';
        }
        function LeftDrakonResizeHandle_dragTo(self, x, y) {
            self.element.w = self.element.x - x;
            return;
        }
        function LeftDrakonResizeHandle_getMinX(self) {
            return self.minX;
        }
        function LeftDrakonResizeHandle_getMaxX(self) {
            return self.maxX;
        }
        function LeftDrakonResizeHandle_yEnabled(self) {
            return false;
        }
        function createRightDrakonResizeHandle(widget, node, y, ctx) {
            var config, big, handle;
            big = 500;
            config = widget.visuals.config;
            handle = RightDrakonResizeHandle();
            handle.widget = widget;
            handle.element = node;
            handle.side = 'right';
            handle.x = node.x + node.w;
            handle.y = y;
            handle.id = node.id;
            handle.minX = node.x + config.minWidth / 2;
            handle.maxX = node.x + big;
            createHandle(widget.visuals, handle, ctx);
            return;
        }
        function FrameDrag_onDrag(self, evt) {
            updateSelectionFrame(self.widget, self.startX, self.startY, evt);
            blockSelect(self.widget);
            paint(self.widget);
            return;
        }
        function FrameDrag_complete(self) {
            self.widget.visuals.selectionFrame = undefined;
            paint(self.widget);
            return;
        }
        function NoSelectBehavior_create(widget) {
            var scroller, evt;
            var me = {
                state: '2',
                type: 'NoSelectBehavior'
            };
            function _main_NoSelectBehavior(__resolve, __reject) {
                try {
                    while (true) {
                        switch (me.state) {
                        case '2':
                            me.state = '16';
                            return;
                        case '6':
                            me.state = '11';
                            return;
                        case '21':
                            scroller = createMouseScroll(widget, evt);
                            me.state = '6';
                            break;
                        case '22':
                            onMouseScroll(scroller, widget, evt);
                            me.state = '6';
                            break;
                        default:
                            return;
                        }
                    }
                } catch (ex) {
                    me.state = undefined;
                    __reject(ex);
                }
            }
            me.run = function () {
                me.run = undefined;
                return new Promise(function (__resolve, __reject) {
                    me.mouseMove = function (_evt_) {
                        evt = _evt_;
                        switch (me.state) {
                        case '11':
                            me.state = '22';
                            _main_NoSelectBehavior(__resolve, __reject);
                            break;
                        default:
                            return;
                        }
                    };
                    me.mouseUp = function (_evt_) {
                        evt = _evt_;
                        switch (me.state) {
                        case '11':
                            me.state = '2';
                            _main_NoSelectBehavior(__resolve, __reject);
                            break;
                        default:
                            return;
                        }
                    };
                    me.mouseLeave = function (_evt_) {
                        evt = _evt_;
                        switch (me.state) {
                        case '11':
                            me.state = '2';
                            _main_NoSelectBehavior(__resolve, __reject);
                            break;
                        default:
                            return;
                        }
                    };
                    me.mouseDown = function (_evt_) {
                        evt = _evt_;
                        switch (me.state) {
                        case '16':
                            me.state = '21';
                            _main_NoSelectBehavior(__resolve, __reject);
                            break;
                        default:
                            return;
                        }
                    };
                    _main_NoSelectBehavior(__resolve, __reject);
                });
            };
            return me;
        }
        function NoSelectBehavior(widget) {
            var __obj = NoSelectBehavior_create(widget);
            return __obj.run();
        }
        function getSourceGuideBox(element) {
            var _var2, _var3;
            if (element.type === 'line') {
                _var3 = calculateLineBox(element);
                return _var3;
            } else {
                _var2 = createBox(element.left, element.top, element.width, element.height);
                return _var2;
            }
        }
        function HandleDrag_complete(self) {
            self.handle.complete();
            return;
        }
        function HandleDrag_onDrag(self, evt) {
            var config, zoom, dx, x, dxDia, max, min, dy, y, dyDia, _var2, _var3, _var4, _var5;
            var __state = '23';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '21':
                    if (x === self.handle.x) {
                        if (y === self.handle.y) {
                            __state = '1';
                        } else {
                            __state = '51';
                        }
                    } else {
                        __state = '51';
                    }
                    break;
                case '22':
                    _var5 = self.handle.yEnabled();
                    if (_var5) {
                        dyDia = (evt.clientY - self.startY) / zoom;
                        dy = snapUp(config, dyDia);
                        y = self.handleStartY + dy;
                        max = self.handle.getMaxY();
                        min = self.handle.getMinY();
                        _var4 = Math.max(min, y);
                        y = Math.min(max, _var4);
                        __state = '21';
                    } else {
                        y = self.handle.y;
                        __state = '21';
                    }
                    break;
                case '23':
                    config = self.widget.config;
                    zoom = self.widget.zoomFactor;
                    _var2 = self.handle.xEnabled();
                    if (_var2) {
                        dxDia = (evt.clientX - self.startX) / zoom;
                        dx = snapUp(config, dxDia);
                        x = self.handleStartX + dx;
                        max = self.handle.getMaxX();
                        min = self.handle.getMinX();
                        _var3 = Math.max(min, x);
                        x = Math.min(max, _var3);
                        __state = '22';
                    } else {
                        x = self.handle.x;
                        __state = '22';
                    }
                    break;
                case '51':
                    self.handle.x = x;
                    self.handle.y = y;
                    self.handle.dragTo(x, y);
                    paint(self.widget);
                    __state = '1';
                    break;
                default:
                    return;
                }
            }
        }
        function SelectBehavior_create(widget) {
            var startX, startY, pos, deltaX, deltaY, currentSocket, prim, scroller, cursor, dragTarget, _var2, evt, _var3, _var4, _var5;
            var me = {
                state: '2',
                type: 'SelectBehavior'
            };
            function _main_SelectBehavior(__resolve, __reject) {
                try {
                    while (true) {
                        switch (me.state) {
                        case '2':
                            me.state = '59';
                            return;
                        case '6':
                            me.state = '11';
                            return;
                        case '29':
                            me.state = '31';
                            return;
                        case '39':
                            me.state = '40';
                            return;
                        case '46':
                            pos = toDiagram(widget, evt);
                            mouseClick(widget, pos, evt);
                            me.state = '2';
                            break;
                        case '47':
                            deltaX = evt.clientX - startX;
                            deltaY = evt.clientY - startY;
                            _var3 = Math.abs(deltaX);
                            if (_var3 > 2) {
                                me.state = '116';
                            } else {
                                _var4 = Math.abs(deltaY);
                                if (_var4 > 2) {
                                    me.state = '116';
                                } else {
                                    me.state = '29';
                                }
                            }
                            break;
                        case '64':
                            pos = toDiagram(widget, evt);
                            currentSocket = findSocket(widget.visuals, pos.x, pos.y);
                            if (currentSocket) {
                                setCursor(evt.target, 'pointer');
                                me.state = '2';
                            } else {
                                prim = findVisualItem(widget, pos);
                                if (prim) {
                                    cursor = getCursorForItem(widget, prim, pos, evt);
                                    setCursor(evt.target, cursor);
                                    me.state = '2';
                                } else {
                                    setCursor(evt.target, 'default');
                                    me.state = '2';
                                }
                            }
                            break;
                        case '72':
                            me.state = '73';
                            return;
                        case '78':
                            pos = toDiagram(widget, evt);
                            currentSocket = findSocket(widget.visuals, pos.x, pos.y);
                            if (currentSocket === widget.visuals.currentSocket) {
                                me.state = '72';
                            } else {
                                widget.visuals.onSocket = false;
                                paint(widget);
                                me.state = '81';
                            }
                            break;
                        case '80':
                            runCurrentSocket(widget);
                            me.state = '2';
                            break;
                        case '81':
                            me.state = '82';
                            return;
                        case '86':
                            pos = toDiagram(widget, evt);
                            currentSocket = findSocket(widget.visuals, pos.x, pos.y);
                            if (currentSocket === widget.visuals.currentSocket) {
                                widget.visuals.onSocket = true;
                                paint(widget);
                                me.state = '72';
                            } else {
                                me.state = '81';
                            }
                            break;
                        case '107':
                            onMouseScroll(scroller, widget, evt);
                            me.state = '6';
                            break;
                        case '111':
                            dragTarget.onDrag(evt);
                            me.state = '39';
                            break;
                        case '115':
                            tracing.trace('drag complete');
                            dragTarget.complete();
                            me.state = '2';
                            break;
                        case '116':
                            tracing.trace('drag start');
                            clearSockets(widget.visuals);
                            dragTarget = chooseDragTarget(widget, evt);
                            me.state = '39';
                            break;
                        case '_item2':
                            _var2 = evt.button;
                            if (_var2 === 0) {
                                startX = evt.clientX;
                                startY = evt.clientY;
                                pos = toDiagram(widget, evt);
                                widget.visuals.currentSocket = findSocket(widget.visuals, pos.x, pos.y);
                                if (widget.visuals.currentSocket) {
                                    tracing.trace('found socket', widget.visuals.currentSocket);
                                    widget.visuals.onSocket = true;
                                    setCursor(evt.target, 'pointer');
                                    paint(widget);
                                    me.state = '72';
                                } else {
                                    me.state = '29';
                                }
                            } else {
                                if (_var2 === 1) {
                                    scroller = createMouseScroll(widget, evt);
                                    me.state = '6';
                                } else {
                                    if (_var2 === 2) {
                                        pos = toDiagram(widget, evt);
                                        handleRightClick(widget, pos, evt);
                                        me.state = '2';
                                    } else {
                                        _var5 = new Error('Unexpected case value: ' + _var2);
                                        me.state = undefined;
                                        __reject(_var5);
                                        return;
                                    }
                                }
                            }
                            break;
                        default:
                            return;
                        }
                    }
                } catch (ex) {
                    me.state = undefined;
                    __reject(ex);
                }
            }
            me.run = function () {
                me.run = undefined;
                return new Promise(function (__resolve, __reject) {
                    me.mouseMove = function (_evt_) {
                        evt = _evt_;
                        switch (me.state) {
                        case '11':
                            me.state = '107';
                            _main_SelectBehavior(__resolve, __reject);
                            break;
                        case '31':
                            me.state = '47';
                            _main_SelectBehavior(__resolve, __reject);
                            break;
                        case '40':
                            me.state = '111';
                            _main_SelectBehavior(__resolve, __reject);
                            break;
                        case '59':
                            me.state = '64';
                            _main_SelectBehavior(__resolve, __reject);
                            break;
                        case '73':
                            me.state = '78';
                            _main_SelectBehavior(__resolve, __reject);
                            break;
                        case '82':
                            me.state = '86';
                            _main_SelectBehavior(__resolve, __reject);
                            break;
                        default:
                            return;
                        }
                    };
                    me.mouseUp = function (_evt_) {
                        evt = _evt_;
                        switch (me.state) {
                        case '11':
                            me.state = '2';
                            _main_SelectBehavior(__resolve, __reject);
                            break;
                        case '31':
                            me.state = '46';
                            _main_SelectBehavior(__resolve, __reject);
                            break;
                        case '40':
                            me.state = '115';
                            _main_SelectBehavior(__resolve, __reject);
                            break;
                        case '73':
                            me.state = '80';
                            _main_SelectBehavior(__resolve, __reject);
                            break;
                        case '82':
                            me.state = '2';
                            _main_SelectBehavior(__resolve, __reject);
                            break;
                        default:
                            return;
                        }
                    };
                    me.mouseLeave = function (_evt_) {
                        evt = _evt_;
                        switch (me.state) {
                        case '11':
                            me.state = '2';
                            _main_SelectBehavior(__resolve, __reject);
                            break;
                        case '31':
                            me.state = '2';
                            _main_SelectBehavior(__resolve, __reject);
                            break;
                        case '40':
                            me.state = '115';
                            _main_SelectBehavior(__resolve, __reject);
                            break;
                        case '73':
                            me.state = '80';
                            _main_SelectBehavior(__resolve, __reject);
                            break;
                        case '82':
                            me.state = '2';
                            _main_SelectBehavior(__resolve, __reject);
                            break;
                        default:
                            return;
                        }
                    };
                    me.mouseDown = function (_evt_) {
                        evt = _evt_;
                        switch (me.state) {
                        case '59':
                            me.state = '_item2';
                            _main_SelectBehavior(__resolve, __reject);
                            break;
                        default:
                            return;
                        }
                    };
                    _main_SelectBehavior(__resolve, __reject);
                });
            };
            return me;
        }
        function SelectBehavior(widget) {
            var __obj = SelectBehavior_create(widget);
            return __obj.run();
        }
        function createFreeMover(widget, elements, evt) {
            var obj, coord, _var2, _var3, element;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    obj = FreeMover();
                    obj.widget = widget;
                    obj.startX = evt.clientX;
                    obj.startY = evt.clientY;
                    obj.coords = [];
                    obj.dx = 0;
                    obj.dy = 0;
                    _var2 = elements;
                    _var3 = 0;
                    __state = '14';
                    break;
                case '14':
                    if (_var3 < _var2.length) {
                        element = _var2[_var3];
                        if (element.type === 'group-duration') {
                            coord = {
                                element: element,
                                elementX: element.x,
                                elementY: element.y,
                                xy: true
                            };
                            __state = '20';
                        } else {
                            coord = {
                                element: element,
                                elementX: element.left,
                                elementY: element.top,
                                xy: false
                            };
                            __state = '20';
                        }
                    } else {
                        return obj;
                    }
                    break;
                case '20':
                    obj.coords.push(coord);
                    _var3++;
                    __state = '14';
                    break;
                default:
                    return;
                }
            }
        }
        function createMouseScroll(widget, evt) {
            return {
                startX: evt.clientX,
                startY: evt.clientY,
                startScrollX: widget.visuals.scrollX,
                startScrollY: widget.visuals.scrollY
            };
        }
        function onMouseScroll(scroller, widget, evt) {
            var x, y, deltaX, deltaY, zoom;
            deltaX = evt.clientX - scroller.startX;
            deltaY = evt.clientY - scroller.startY;
            zoom = widget.zoomFactor;
            x = scroller.startScrollX - deltaX / zoom;
            y = scroller.startScrollY - deltaY / zoom;
            setScrollFromMouseEvent(widget, x, y);
            return;
        }
        function createHandleDrag(widget, handle, evt) {
            var obj;
            obj = HandleDrag();
            obj.widget = widget;
            obj.startX = evt.clientX;
            obj.startY = evt.clientY;
            obj.handle = handle;
            obj.handleStartX = handle.x;
            obj.handleStartY = handle.y;
            return obj;
        }
        function FreeMover_complete(self) {
            var change, changes, _var2, _var3, coord;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    changes = [];
                    _var2 = self.coords;
                    _var3 = 0;
                    __state = '9';
                    break;
                case '9':
                    if (_var3 < _var2.length) {
                        coord = _var2[_var3];
                        change = {
                            id: coord.element.id,
                            fields: {},
                            op: 'update'
                        };
                        if (coord.xy) {
                            change.fields.x = coord.element.x;
                            change.fields.y = coord.element.y;
                            __state = '16';
                        } else {
                            change.fields.left = coord.element.left;
                            change.fields.top = coord.element.top;
                            __state = '16';
                        }
                    } else {
                        updateAndKeepSelection(self.widget, changes);
                        return;
                    }
                    break;
                case '16':
                    changes.push(change);
                    _var3++;
                    __state = '9';
                    break;
                default:
                    return;
                }
            }
        }
        function FreeMover_onDrag(self, evt) {
            var dx, dy, config, visuals, dxDia, dyDia, zoom, x, y, element, ebox, _var2, _var3, coord, _var4;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    config = self.widget.config;
                    visuals = self.widget.visuals;
                    zoom = self.widget.zoomFactor;
                    dxDia = (evt.clientX - self.startX) / zoom;
                    dyDia = (evt.clientY - self.startY) / zoom;
                    dx = snapUp(config, dxDia);
                    dy = snapUp(config, dyDia);
                    if (dx === self.dx) {
                        if (dy === self.dy) {
                            __state = '28';
                        } else {
                            __state = '18';
                        }
                    } else {
                        __state = '18';
                    }
                    break;
                case '18':
                    self.dx = dx;
                    self.dy = dy;
                    __state = '29';
                    break;
                case '28':
                    return;
                case '29':
                    _var2 = self.coords;
                    _var3 = 0;
                    __state = '34';
                    break;
                case '30':
                    if (self.coords.length === 1) {
                        element = self.coords[0].element;
                        _var4 = canGuide(self.widget, element);
                        if (_var4) {
                            ebox = getSourceGuideBox(element);
                            findHorizontalGuide(self.widget, element.id, ebox, ebox.top);
                            findHorizontalCentralGuide(self.widget, element.id, ebox, ebox.centerY);
                            findHorizontalGuide(self.widget, element.id, ebox, ebox.bottom);
                            __state = '45';
                        } else {
                            __state = '31';
                        }
                    } else {
                        __state = '31';
                    }
                    break;
                case '31':
                    paint(self.widget);
                    __state = '28';
                    break;
                case '33':
                    _var3++;
                    __state = '34';
                    break;
                case '34':
                    if (_var3 < _var2.length) {
                        coord = _var2[_var3];
                        x = coord.elementX + dx;
                        y = coord.elementY + dy;
                        if (coord.xy) {
                            coord.element.x = x;
                            coord.element.y = y;
                            __state = '33';
                        } else {
                            coord.element.left = x;
                            coord.element.top = y;
                            __state = '33';
                        }
                    } else {
                        __state = '30';
                    }
                    break;
                case '45':
                    findVerticalGuide(self.widget, element.id, ebox, ebox.left);
                    findVerticalCentralGuide(self.widget, element.id, ebox, ebox.centerX);
                    findVerticalGuide(self.widget, element.id, ebox, ebox.right);
                    __state = '31';
                    break;
                default:
                    return;
                }
            }
        }
        function chooseDragTarget(widget, evt) {
            var pos, visuals, handle, element, selected, _var2, _var3, _var4, _var5, _var6, _var7, _var8, _var9;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    _var2 = isReadonly(widget);
                    if (_var2) {
                        __state = '_item5';
                    } else {
                        visuals = widget.visuals;
                        pos = toDiagram(widget, evt);
                        _var8 = hitNugget(visuals, pos);
                        if (_var8) {
                            selected = getSelectedFree(widget);
                            _var9 = createFreeMover(widget, selected, evt);
                            return _var9;
                        } else {
                            handle = findHandle(visuals, pos);
                            if (handle) {
                                _var3 = createHandleDrag(widget, handle, evt);
                                return _var3;
                            } else {
                                element = findFree(widget, pos);
                                if (element) {
                                    _var6 = isSelected(widget, element.id);
                                    if (_var6) {
                                        selected = getSelectedFree(widget);
                                        _var7 = createFreeMover(widget, selected, evt);
                                        return _var7;
                                    } else {
                                        _var4 = createFreeMover(widget, [element], evt);
                                        return _var4;
                                    }
                                } else {
                                    __state = '_item5';
                                }
                            }
                        }
                    }
                    break;
                case '_item5':
                    _var5 = createFrameDrag(widget, evt);
                    return _var5;
                default:
                    return;
                }
            }
        }
        function DrakonCanvas_showPaste(self) {
            var clipboard, _var2, _var3;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    tracing.trace('DrakonCanvas.showPaste');
                    _var3 = isReadonly(self);
                    if (_var3) {
                        __state = '1';
                    } else {
                        clipboard = self.visuals.config.getClipboard();
                        if (clipboard) {
                            _var2 = clipboard.type;
                            if (_var2 === 'case') {
                                __state = '12';
                            } else {
                                if (_var2 === 'branch') {
                                    __state = '12';
                                } else {
                                    if (_var2 === 'block') {
                                        __state = '12';
                                    } else {
                                        if (_var2 === 'free') {
                                            pasteFree(self, clipboard);
                                            __state = '1';
                                        } else {
                                            __state = '1';
                                        }
                                    }
                                }
                            }
                        } else {
                            __state = '1';
                        }
                    }
                    break;
                case '12':
                    self.showPasteSockets(clipboard.type);
                    __state = '1';
                    break;
                default:
                    return;
                }
            }
        }
        function DrakonCanvas_goHome(self) {
            tracing.trace('DrakonCanvas.goHome');
            delete self.origins[self.diagramId];
            calculateDiagramBox(self.visuals);
            initScrollPos(self);
            paint(self);
            return;
        }
        function DrakonCanvas_setLink(self, itemId, link) {
            var change;
            tracing.trace('DrakonCanvas.setLink', itemId);
            checkNotReadonly(self);
            change = {
                id: itemId,
                fields: { link: link },
                op: 'update'
            };
            updateAndKeepSelection(self, [change]);
            return;
        }
        function startEditStyle(widget) {
            var callback, delayed, prims, ids, oldStyle, x, y, accepted;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    prims = getSelectedPrims(widget);
                    if (prims.length) {
                        x = prims[0].left + prims[0].width;
                        y = prims[0].top;
                        ids = prims.map(function (prim) {
                            return prim.id;
                        });
                        oldStyle = buildStyleFromPrims(widget.visuals, prims);
                        accepted = getAcceptedStyleProps(widget, prims);
                        callback = widget.config.startEditStyle;
                        if (callback) {
                            delayed = function () {
                                callback(ids, oldStyle, x, y, accepted);
                            };
                            setTimeout(delayed, 1);
                            __state = '1';
                        } else {
                            console.error('startEditStyle is missing in config');
                            __state = '1';
                        }
                    } else {
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function mouseClick(widget, pos, evt) {
            var now, lastClick, diff, doubleClickTime, visuals, lastPrimId, prim, primId, _var2, _var3;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    tracing.trace('mouseClick', pos);
                    doubleClickTime = 500;
                    visuals = widget.visuals;
                    now = getNowMs();
                    lastClick = widget.lastClick;
                    lastPrimId = widget.lastPrimId;
                    prim = findVisualItem(widget, pos);
                    if (prim) {
                        if (prim.elType === 'handle') {
                            __state = '26';
                        } else {
                            widget.lastPrimId = prim.id;
                            primId = prim.id;
                            __state = '19';
                        }
                    } else {
                        widget.lastPrimId = undefined;
                        primId = undefined;
                        __state = '19';
                    }
                    break;
                case '19':
                    if (lastClick) {
                        diff = now - lastClick;
                        if (diff <= doubleClickTime) {
                            if (primId === lastPrimId) {
                                widget.lastClick = undefined;
                                __state = '42';
                            } else {
                                __state = '24';
                            }
                        } else {
                            __state = '24';
                        }
                    } else {
                        __state = '24';
                    }
                    break;
                case '24':
                    widget.lastClick = now;
                    __state = '27';
                    break;
                case '26':
                    return;
                case '27':
                    tracing.trace('single click', prim);
                    if (prim) {
                        if (prim.id) {
                            _var2 = isSelected(widget, prim.id);
                            if (_var2) {
                                __state = '65';
                            } else {
                                selectPrim(widget, prim.id);
                                showLianaSockets(widget, prim);
                                __state = '65';
                            }
                        } else {
                            __state = '65';
                        }
                    } else {
                        deselectAll(widget);
                        __state = '32';
                    }
                    break;
                case '32':
                    paint(widget);
                    __state = '26';
                    break;
                case '42':
                    tracing.trace('double click', prim);
                    if (prim) {
                        if (prim.elType === 'node') {
                            evt.stopPropagation();
                            evt.preventDefault();
                            _var3 = clickedOnTop(widget, prim, pos);
                            if (_var3) {
                                startEditSecondary(widget, prim);
                                __state = '26';
                            } else {
                                startEditContent(widget, prim);
                                __state = '26';
                            }
                        } else {
                            if (prim.elType === 'free') {
                                startEditContent(widget, prim);
                                __state = '26';
                            } else {
                                __state = '26';
                            }
                        }
                    } else {
                        __state = '26';
                    }
                    break;
                case '65':
                    onItemClick(widget, prim, pos, evt);
                    __state = '32';
                    break;
                default:
                    return;
                }
            }
        }
        function startEditContent(widget, prim) {
            var callback, delayed, ro, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    _var2 = canEditNodeText(widget, prim);
                    if (_var2) {
                        callback = widget.config.startEditContent;
                        if (callback) {
                            ro = isReadonly(widget);
                            delayed = function () {
                                callback(prim, ro);
                            };
                            setTimeout(delayed, 1);
                            __state = '1';
                        } else {
                            console.error('startEditContent is missing in config');
                            __state = '1';
                        }
                    } else {
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function startEditDiagramStyle(widget, x, y) {
            var callback, delayed, oldStyle;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    oldStyle = buildStyleFromDiagram(widget);
                    callback = widget.config.startEditDiagramStyle;
                    if (callback) {
                        delayed = function () {
                            callback(oldStyle, x, y);
                        };
                        setTimeout(delayed, 1);
                        __state = '1';
                    } else {
                        console.error('startEditDiagramStyle is missing in config');
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function onItemClick(widget, prim, pos, evt) {
            var callback;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    callback = widget.config.onItemClick;
                    if (callback) {
                        callback(prim, pos, evt);
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
        function swapYesNo(widget, prim) {
            var change, node, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    node = getNode(widget.visuals, prim.id);
                    change = {
                        id: prim.id,
                        fields: {},
                        op: 'update'
                    };
                    if (node.flag1) {
                        change.fields.flag1 = 0;
                        __state = '_item2';
                    } else {
                        change.fields.flag1 = 1;
                        __state = '_item2';
                    }
                    break;
                case '_item2':
                    _var2 = updateAndKeepSelection(widget, [change]);
                    return _var2;
                default:
                    return;
                }
            }
        }
        function startEditLink(widget, prim) {
            var callback, delayed, ro, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    _var2 = canEditNodeText(widget, prim);
                    if (_var2) {
                        callback = widget.config.startEditLink;
                        if (callback) {
                            ro = isReadonly(widget);
                            delayed = function () {
                                callback(prim, ro);
                            };
                            setTimeout(delayed, 1);
                            __state = '1';
                        } else {
                            console.error('startEditLink is missing in config');
                            __state = '1';
                        }
                    } else {
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function addParameters(widget, prim) {
            prim = {
                id: 'params',
                content: '',
                left: prim.left,
                top: prim.top
            };
            startEditContent(widget, prim);
            return;
        }
        function getCursorForItem(widget, prim, pos, evt) {
            var callback, _var2, _var3;
            if (prim.elType === 'nugget') {
                return 'move';
            } else {
                if (prim.elType === 'handle') {
                    _var3 = prim.getCursor();
                    return _var3;
                } else {
                    callback = widget.config.getCursorForItem;
                    if (callback) {
                        _var2 = callback(prim, pos, evt);
                        return _var2;
                    } else {
                        return 'grab';
                    }
                }
            }
        }
        function startEditSecondary(widget, prim) {
            var callback, delayed, ro, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    _var2 = canEditNodeText(widget, prim);
                    if (_var2) {
                        callback = widget.config.startEditSecondary;
                        if (callback) {
                            ro = isReadonly(widget);
                            delayed = function () {
                                callback(prim, ro);
                            };
                            setTimeout(delayed, 1);
                            __state = '1';
                        } else {
                            console.error('startEditSecondary is missing in config');
                            __state = '1';
                        }
                    } else {
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function flipGroup(widget, prim) {
            var change, node, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    node = getFree(widget.visuals, prim.id);
                    change = {
                        id: prim.id,
                        fields: {},
                        op: 'update'
                    };
                    if (node.flag1) {
                        change.fields.flag1 = 0;
                        __state = '12';
                    } else {
                        change.fields.flag1 = 1;
                        __state = '12';
                    }
                    break;
                case '12':
                    change.fields.loX = -node.loX;
                    change.fields.hiX = -node.hiX;
                    _var2 = updateAndKeepSelection(widget, [change]);
                    return _var2;
                default:
                    return;
                }
            }
        }
        function clickedOnTop(widget, prim, pos) {
            var node, h2, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    node = getNode(widget.visuals, prim.id);
                    _var2 = canEditSecondary(node);
                    if (_var2) {
                        h2 = getSecondaryHeightCore(widget.visuals, node);
                        if (h2) {
                            if (pos.y < prim.top + h2) {
                                return true;
                            } else {
                                __state = '10';
                            }
                        } else {
                            __state = '10';
                        }
                    } else {
                        __state = '10';
                    }
                    break;
                case '10':
                    return false;
                default:
                    return;
                }
            }
        }
        function DrakonCanvas_onMouseLeave(self, evt) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (self.mouseEvents) {
                        self.mouseEvents.mouseLeave(evt);
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
        function DrakonCanvas_cutSelection(self) {
            var _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    tracing.trace('DrakonCanvas.cutSelection');
                    _var2 = isReadonly(self);
                    if (_var2) {
                        __state = '1';
                    } else {
                        cut(self);
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function DrakonCanvas_onChange(self, change) {
            tracing.trace('DrakonCanvas.onChange', change);
            self.edit.forcedChange(change);
            self.redraw();
            return;
        }
        function DrakonCanvas_getZoom(self) {
            if (self.zoom) {
                return self.zoom;
            } else {
                return 10000;
            }
        }
        function handleRightClick(widget, pos, evt) {
            var prim, visuals, menu, node, callback, edge, selected, _var2, _var3, _var4, _var5, _var6, _var7;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    tracing.trace('handleRightClick', pos);
                    visuals = widget.visuals;
                    prim = findVisualItem(widget, pos);
                    if (prim) {
                        _var2 = prim.elType;
                        if (_var2 === 'node') {
                            node = getNode(visuals, prim.id);
                            if (node.type == 'end') {
                                menu = [];
                                selectPrim(widget, prim.id);
                                _var7 = tr(widget, 'Format');
                                pushMenuItem('format', menu, _var7, undefined, function () {
                                    startEditStyle(widget);
                                });
                                __state = '28';
                            } else {
                                if (node.type == 'junction') {
                                    if (node.subtype === 'parbegin') {
                                        _var4 = ensureSelectedOne(widget, prim.id);
                                        if (_var4) {
                                            menu = buildBeginParMenu(widget, node);
                                            __state = '28';
                                        } else {
                                            menu = buildBlockMenu(widget);
                                            __state = '28';
                                        }
                                    } else {
                                        menu = [];
                                        __state = '28';
                                    }
                                } else {
                                    _var3 = ensureSelectedOne(widget, prim.id);
                                    if (_var3) {
                                        menu = buildMenuByType(widget, prim, node);
                                        __state = '28';
                                    } else {
                                        menu = buildBlockMenu(widget);
                                        __state = '28';
                                    }
                                }
                            }
                        } else {
                            if (_var2 === 'edge') {
                                edge = getEdge(visuals, prim.id);
                                if (edge.role === 'parceiling') {
                                    _var5 = ensureSelectedOne(widget, edge.tail.id);
                                    if (_var5) {
                                        menu = buildBeginParMenu(widget, edge.tail);
                                        __state = '50';
                                    } else {
                                        menu = buildBlockMenu(widget);
                                        __state = '50';
                                    }
                                } else {
                                    menu = [];
                                    __state = '30';
                                }
                            } else {
                                if (_var2 === 'free') {
                                    _var6 = isSelected(widget, prim.id);
                                    if (_var6) {
                                        __state = '79';
                                    } else {
                                        selectPrim(widget, prim.id);
                                        __state = '64';
                                    }
                                } else {
                                    if (_var2 === 'nugget') {
                                        __state = '79';
                                    } else {
                                        menu = [];
                                        __state = '30';
                                    }
                                }
                            }
                        }
                    } else {
                        menu = buildBackgroundMenu(widget, evt.clientX, evt.clientY);
                        __state = '30';
                    }
                    break;
                case '28':
                    paint(widget);
                    __state = '30';
                    break;
                case '29':
                    return;
                case '30':
                    if (menu.length === 0) {
                        __state = '29';
                    } else {
                        callback = widget.config.showContextMenu;
                        if (callback) {
                            callback(evt.clientX, evt.clientY, menu, prim);
                            __state = '29';
                        } else {
                            console.error('showContextMenu is missing in config');
                            __state = '29';
                        }
                    }
                    break;
                case '50':
                    paint(widget);
                    __state = '30';
                    break;
                case '64':
                    menu = buildFreeMenu(widget, prim);
                    __state = '67';
                    break;
                case '67':
                    paint(widget);
                    __state = '30';
                    break;
                case '79':
                    selected = getSelectedFree(widget);
                    if (selected.length > 1) {
                        menu = buildBlockMenu(widget);
                        __state = '67';
                    } else {
                        prim = freeToVisualItem(widget, selected[0]);
                        __state = '64';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function setScroll(widget, x, y) {
            var scroll, visuals;
            scroll = sanitizeScroll(widget, x, y);
            visuals = widget.visuals;
            visuals.scrollX = scroll.x;
            visuals.scrollY = scroll.y;
            widget.origins[widget.diagramId] = {
                x: scroll.x,
                y: scroll.y
            };
            return scroll;
        }
        function drawIcon(visuals, node, ctx) {
            var render;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    ctx.setLineDash([]);
                    render = visuals.config.iconRender[node.type];
                    if (render) {
                        render(visuals, node, ctx);
                        __state = '1';
                    } else {
                        console.error('iconRender callback not found for element of type: ' + node.type);
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function drawEdge(visuals, edge, ctx) {
            var x1, y1, x2, y2, thickness, w, h, color, low, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    x1 = getX(edge.head);
                    y1 = getY(edge.head);
                    x2 = getX(edge.tail);
                    y2 = getY(edge.tail);
                    thickness = visuals.config.theme.lineWidth || 1;
                    color = visuals.config.theme.lines;
                    ctx.fillStyle = color;
                    if (edge.vertical) {
                        if (edge.head.skewer.main) {
                            thickness *= 3;
                            __state = '10';
                        } else {
                            __state = '10';
                        }
                    } else {
                        w = x2 - x1;
                        if (edge.role === 'parceiling') {
                            ctx.fillRect(x1, y1, w, thickness * 2);
                            low = y1 + visuals.config.parallelWidth;
                            ctx.fillRect(x1, low, w, thickness);
                            __state = '1';
                        } else {
                            ctx.fillRect(x1, y1, w, thickness);
                            _var2 = edge.role;
                            if (_var2 === 'arrow') {
                                drawArrowHead(ctx, color, x1 + thickness, y1, Math.PI);
                                __state = '1';
                            } else {
                                if (_var2 === 'rarrow') {
                                    drawArrowHead(ctx, color, x2 - thickness, y1, 0);
                                    __state = '1';
                                } else {
                                    __state = '1';
                                }
                            }
                        }
                    }
                    break;
                case '10':
                    h = y2 - y1;
                    ctx.fillRect(x1, y1, thickness, h);
                    __state = '1';
                    break;
                default:
                    return;
                }
            }
        }
        function yes() {
            return 'Yes';
        }
        function primToClient(widget, prim) {
            var pos, zoom;
            prim.diagramLeft = prim.left;
            prim.diagramTop = prim.top;
            prim.diagramWidth = prim.width;
            prim.diagramHeight = prim.height;
            pos = toClient(widget, prim.left, prim.top);
            prim.left = pos.x;
            prim.top = pos.y;
            zoom = widget.zoomFactor;
            prim.width *= zoom;
            prim.height *= zoom;
            return;
        }
        function traceLoops(visuals) {
            var trace;
            trace = function (vis, node) {
                traceLoop({}, node, node);
            };
            forType(visuals, 'loopend', trace);
            forType(visuals, 'select', putLoopsOnCases);
            return;
        }
        function compareBranches(leftId, rightId, items) {
            var left, right;
            left = items[leftId];
            right = items[rightId];
            return left.branchId - right.branchId;
        }
        function setIconDefaultProps(icons, names, props) {
            var icon, _var5, _var6, name, _var3, _var2, _var4, key, value;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    _var5 = names;
                    _var6 = 0;
                    __state = '5';
                    break;
                case '5':
                    if (_var6 < _var5.length) {
                        name = _var5[_var6];
                        if (name in icons) {
                            icon = icons[name];
                            __state = '_item4';
                        } else {
                            icon = {};
                            icons[name] = icon;
                            __state = '_item4';
                        }
                    } else {
                        return;
                    }
                    break;
                case '10':
                    _var4++;
                    __state = '11';
                    break;
                case '11':
                    if (_var4 < _var2.length) {
                        key = _var2[_var4];
                        value = _var3[key];
                        if (key in icon) {
                            __state = '10';
                        } else {
                            icon[key] = value;
                            __state = '10';
                        }
                    } else {
                        _var6++;
                        __state = '5';
                    }
                    break;
                case '_item4':
                    _var3 = props;
                    _var2 = Object.keys(_var3);
                    _var4 = 0;
                    __state = '11';
                    break;
                default:
                    return;
                }
            }
        }
        function hitNugget(visuals, pos) {
            var _var2;
            if (visuals.nugget) {
                _var2 = hitBox(visuals.nugget, pos.x, pos.y);
                return _var2;
            } else {
                return false;
            }
        }
        function line(ctx, x1, y1, x2, y2, color, width) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    ctx.strokeStyle = color;
                    ctx.lineWidth = width;
                    if (width % 2 == 0) {
                        __state = '6';
                    } else {
                        x1 += 0.5;
                        x2 += 0.5;
                        y1 += 0.5;
                        y2 += 0.5;
                        __state = '6';
                    }
                    break;
                case '6':
                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    ctx.stroke();
                    return;
                default:
                    return;
                }
            }
        }
        function layoutSilhouette(visuals) {
            var leftUp, leftDown, upper, lower, firstId, branch, first, _var2, _var3, branchId;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    leftUp = createJunction(visuals, undefined);
                    leftDown = createJunction(visuals, undefined);
                    createEdge(visuals, leftUp, leftDown, true);
                    upper = leftUp;
                    lower = leftDown;
                    __state = '5';
                    break;
                case '4':
                    return;
                case '5':
                    _var2 = visuals.branches;
                    _var3 = 0;
                    __state = '14';
                    break;
                case '6':
                    leftUp.right.role = 'rarrow';
                    firstId = visuals.branches[0];
                    first = visuals.nodes[firstId];
                    createEdge(visuals, visuals.header, first.topNode, true);
                    __state = '4';
                    break;
                case '14':
                    if (_var3 < _var2.length) {
                        branchId = _var2[_var3];
                        branch = visuals.nodes[branchId];
                        buildManhattan(visuals, branch);
                        connectBranch(visuals, branch, upper, lower);
                        upper = branch.topNode;
                        lower = branch.bottomNode;
                        _var3++;
                        __state = '14';
                    } else {
                        __state = '6';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function isFirstPar(node) {
            var prev;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (node.prev.length === 1) {
                        prev = node.prev[0];
                        if (prev.subtype === 'parbegin') {
                            if (prev.next[1] === node) {
                                return false;
                            } else {
                                __state = '3';
                            }
                        } else {
                            __state = '3';
                        }
                    } else {
                        __state = '3';
                    }
                    break;
                case '3':
                    return true;
                default:
                    return;
                }
            }
        }
        function showBranchSockets(visuals, node, op) {
            var lowest, socket, radius, socket2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    lowest = goDown(node);
                    if (lowest.type === 'end') {
                        __state = '1';
                    } else {
                        radius = visuals.config.socketTouchRadius;
                        socket = createSocket(visuals, node.x - node.w, node.y, op, 'branch', radius);
                        socket.node = node;
                        socket.left = true;
                        socket2 = createSocket(visuals, node.x + node.w, node.y, op, 'branch', radius);
                        socket2.node = node;
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function createSocketFromEdge(visuals, edge, op, type) {
            var head, tail, Min, hw, hh, tw, th, x1, y1, x2, y2, x, y, socket, radius, startPos, endPos, length, box, _var2, _var3, _var4, _var5, _var6;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    radius = visuals.config.socketRadius;
                    head = edge.head;
                    tail = edge.tail;
                    Min = 10;
                    hw = Math.max(Min, head.w);
                    hh = Math.max(Min, head.h);
                    tw = Math.max(Min, tail.w);
                    th = Math.max(Min, tail.h);
                    if (edge.vertical) {
                        _var5 = getY(head);
                        _var6 = getY(tail);
                        x1 = getX(head);
                        y1 = _var5 + hh;
                        x2 = x1;
                        y2 = _var6 - th;
                        startPos = edge.head.y + edge.head.h;
                        endPos = edge.tail.y - edge.tail.h;
                        length = endPos - startPos;
                        box = createBox(x1 - radius, startPos, radius * 2, length);
                        __state = '9';
                    } else {
                        _var3 = getX(head);
                        _var4 = getX(tail);
                        x1 = _var3 + hw;
                        y1 = getY(head);
                        x2 = _var4 - tw;
                        y2 = y1;
                        startPos = edge.head.x + edge.head.w;
                        endPos = edge.tail.x - edge.tail.w;
                        length = endPos - startPos;
                        box = createBox(startPos, y1 - radius, length, radius * 2);
                        __state = '9';
                    }
                    break;
                case '9':
                    x = (x1 + x2) / 2;
                    y = (y1 + y2) / 2;
                    radius = visuals.config.socketTouchRadius;
                    socket = createSocket(visuals, x, y, op, type, radius);
                    socket.edge = edge;
                    _var2 = edge.role;
                    if (_var2 === 'floor') {
                        socket.target = getFloorTarget(visuals, edge);
                        __state = '19';
                    } else {
                        if (_var2 === 'parceiling') {
                            socket.target = getParTarget(edge.head);
                            __state = '19';
                        } else {
                            socket.target = edge.finalTarget.itemId;
                            __state = '19';
                        }
                    }
                    break;
                case '13':
                    return socket;
                case '19':
                    if (length > radius * 2) {
                        socket.box = box;
                        socket.startPos = startPos;
                        socket.endPos = endPos;
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
        function showAllBranchSockets(visuals, op) {
            var showInsert, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    _var2 = isSilhouette(visuals);
                    if (_var2) {
                        showInsert = function (visuals, node) {
                            showBranchSockets(visuals, node, op);
                        };
                        forType(visuals, 'branch', showInsert);
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
        function createDurationSocket(visuals, node, op) {
            var socket, radius;
            radius = visuals.config.socketTouchRadius;
            socket = createSocket(visuals, node.x - node.w, node.y, op, 'duration', radius);
            socket.node = node;
            return;
        }
        function clearSockets(visuals) {
            visuals.sockets = [];
            visuals.currentSocket = undefined;
            visuals.onSocket = false;
            return;
        }
        function showRightCaseSocket(visuals, node, op) {
            var socket, radius;
            radius = visuals.config.socketTouchRadius;
            socket = createSocket(visuals, node.x + node.w, node.y, op, 'case', radius);
            socket.node = node;
            return;
        }
        function drawPointSocket(ctx, x, y, fill, border, config) {
            drawCircle(ctx, x, y, config.socketRadius, 2, fill, border);
            drawCross(ctx, x, y, config.socketRadius / 2, 2, border);
            return;
        }
        function drawCross(ctx, centerX, centerY, size, thickness, color) {
            var x1, x2, y1, y2;
            x1 = centerX - size;
            x2 = centerX + size;
            y1 = centerY - size;
            y2 = centerY + size;
            ctx.lineWidth = thickness;
            ctx.strokeStyle = color;
            ctx.beginPath();
            ctx.moveTo(x1, centerY);
            ctx.lineTo(x2, centerY);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(centerX, y1);
            ctx.lineTo(centerX, y2);
            ctx.stroke();
            ctx.stroke();
            return;
        }
        function createSocket(visuals, x, y, op, type, radius) {
            var self;
            self = {};
            self.id = '';
            self.x = x;
            self.y = y;
            self.type = type;
            self.op = op;
            self.on = false;
            self.id = visuals.sockets.length + 1;
            self.edge = undefined;
            self.node = undefined;
            self.links = [];
            self.finalTarget = undefined;
            self.box = boxFromPoint(x, y, radius, radius);
            visuals.sockets.push(self);
            return self;
        }
        function drawVerticalSocket(ctx, cx, topY, bottomY, fill, border, config) {
            var cy;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    ctx.beginPath();
                    ctx.arc(cx, topY + config.socketRadius, config.socketRadius, Math.PI, Math.PI * 2, false);
                    ctx.lineTo(cx + config.socketRadius, bottomY - config.socketRadius);
                    ctx.arc(cx, bottomY - config.socketRadius, config.socketRadius, 0, Math.PI, false);
                    ctx.lineTo(cx - config.socketRadius, topY + config.socketRadius);
                    ctx.fillStyle = fill;
                    ctx.fill();
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = border;
                    ctx.stroke();
                    __state = '10';
                    break;
                case '9':
                    return;
                case '10':
                    cy = (bottomY + topY) / 2;
                    drawCross(ctx, cx, cy, config.socketRadius / 2, 2, border);
                    __state = '9';
                    break;
                default:
                    return;
                }
            }
        }
        function drawHorizontalSocket(ctx, leftX, rightX, cy, fill, border, config) {
            var cx;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    ctx.beginPath();
                    ctx.arc(leftX + config.socketRadius, cy, config.socketRadius, Math.PI / 2, Math.PI * 3 / 2, false);
                    ctx.lineTo(rightX - config.socketRadius, cy - config.socketRadius);
                    ctx.arc(rightX - config.socketRadius, cy, config.socketRadius, Math.PI * 3 / 2, Math.PI / 2, false);
                    ctx.lineTo(leftX + config.socketRadius, cy + config.socketRadius);
                    ctx.fillStyle = fill;
                    ctx.fill();
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = border;
                    ctx.stroke();
                    __state = '10';
                    break;
                case '9':
                    return;
                case '10':
                    cx = (leftX + rightX) / 2;
                    drawCross(ctx, cx, cy, config.socketRadius / 2, 2, border);
                    __state = '9';
                    break;
                default:
                    return;
                }
            }
        }
        function showParSockets(visuals, node, op) {
            var _var2, _var3;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (node.subtype === 'parbegin') {
                        _var3 = isFirstPar(node);
                        if (_var3) {
                            showInsertParBeforeFirst(visuals, node, op);
                            __state = '_item2';
                        } else {
                            __state = '_item2';
                        }
                    } else {
                        __state = '1';
                    }
                    break;
                case '_item2':
                    _var2 = isLastPar(node);
                    if (_var2) {
                        showInsertParAfterLast(visuals, node, op);
                        __state = '1';
                    } else {
                        showInsertParSocket(visuals, node, op);
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function findForInsertion(visuals) {
            var edges, result, targetId, _var3, _var2, _var4, id, edge;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    edges = visuals.edges;
                    result = [];
                    _var3 = edges;
                    _var2 = Object.keys(_var3);
                    _var4 = 0;
                    __state = '7';
                    break;
                case '6':
                    _var4++;
                    __state = '7';
                    break;
                case '7':
                    if (_var4 < _var2.length) {
                        id = _var2[_var4];
                        edge = _var3[id];
                        if (edge.finalTarget) {
                            if (edge.role) {
                                targetId = edge.finalTarget.itemId;
                                if (edge.role === 'down') {
                                    __state = '15';
                                } else {
                                    if (edge.role === 'right') {
                                        if (edge.tail.up) {
                                            __state = '15';
                                        } else {
                                            __state = '6';
                                        }
                                    } else {
                                        __state = '6';
                                    }
                                }
                            } else {
                                __state = '6';
                            }
                        } else {
                            __state = '6';
                        }
                    } else {
                        return result;
                    }
                    break;
                case '15':
                    result.push(edge);
                    __state = '6';
                    break;
                default:
                    return;
                }
            }
        }
        function getFloorTarget(visuals, floorEdge) {
            var left, right, leftBranch, rightBranch, _var2, _var3, itemId;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    left = getUp(floorEdge.head);
                    right = getUp(floorEdge.tail);
                    leftBranch = left.branch.itemId;
                    rightBranch = right.branch.itemId;
                    _var2 = visuals.branches;
                    _var3 = 0;
                    __state = '6';
                    break;
                case '5':
                    _var3++;
                    __state = '6';
                    break;
                case '6':
                    if (_var3 < _var2.length) {
                        itemId = _var2[_var3];
                        if (itemId === leftBranch) {
                            __state = '5';
                        } else {
                            if (itemId === rightBranch) {
                                __state = '5';
                            } else {
                                return itemId;
                            }
                        }
                    } else {
                        return rightBranch;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function showInsertParSocket(visuals, node, op) {
            var socket;
            socket = createSocketFromEdge(visuals, node.right, 'insert', 'par');
            return;
        }
        function showAllParSockets(visuals, op) {
            var showInsert;
            showInsert = function (visuals, node) {
                showParSockets(visuals, node, op);
            };
            forType(visuals, 'parbegin', showInsert);
            return;
        }
        function showInsertParBeforeFirst(visuals, node, op) {
            var socket, radius;
            radius = visuals.config.socketTouchRadius;
            socket = createSocket(visuals, node.x - visuals.config.metre, node.y, op, 'firstpar', radius);
            socket.node = node;
            addRange(node.up.links, socket.links);
            return;
        }
        function showInsertParAfterLast(visuals, node, op) {
            var socket, radius;
            radius = visuals.config.socketTouchRadius;
            socket = createSocket(visuals, node.x + visuals.config.metre, node.y, op, 'par', radius);
            socket.node = node;
            return;
        }
        function findSocket(visuals, x, y) {
            var _var2, _var3, socket, _var4;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    _var2 = visuals.sockets;
                    _var3 = 0;
                    __state = '5';
                    break;
                case '5':
                    if (_var3 < _var2.length) {
                        socket = _var2[_var3];
                        _var4 = hitBox(socket.box, x, y);
                        if (_var4) {
                            return socket.id;
                        } else {
                            _var3++;
                            __state = '5';
                        }
                    } else {
                        return undefined;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function drawSocket(visuals, socket, ctx, config) {
            var fill, border, radius;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    radius = config.socketRadius;
                    if (visuals.currentSocket === socket.id) {
                        if (visuals.onSocket) {
                            fill = config.socketBorder;
                            border = config.socketBody;
                            __state = '30';
                        } else {
                            __state = '29';
                        }
                    } else {
                        __state = '29';
                    }
                    break;
                case '15':
                    return;
                case '16':
                    drawPointSocket(ctx, socket.x, socket.y, fill, border, config);
                    __state = '15';
                    break;
                case '29':
                    fill = config.socketBody;
                    border = config.socketBorder;
                    __state = '30';
                    break;
                case '30':
                    if (socket.node) {
                        __state = '16';
                    } else {
                        if (socket.edge.vertical) {
                            __state = '31';
                        } else {
                            __state = '32';
                        }
                    }
                    break;
                case '31':
                    if (socket.startPos === undefined) {
                        drawPointSocket(ctx, socket.x, socket.y, fill, border, config);
                        __state = '15';
                    } else {
                        drawVerticalSocket(ctx, socket.x, socket.startPos, socket.endPos, fill, border, config);
                        __state = '15';
                    }
                    break;
                case '32':
                    if (socket.startPos === undefined) {
                        drawPointSocket(ctx, socket.x, socket.y, fill, border, config);
                        __state = '15';
                    } else {
                        drawHorizontalSocket(ctx, socket.startPos, socket.endPos, socket.y, fill, border, config);
                        __state = '15';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function showBlockInsertSockets(visuals, op, type) {
            var edges, createEdgeSocket, sockets, _var2;
            edges = findForInsertion(visuals);
            createEdgeSocket = function (edge) {
                _var2 = createSocketFromEdge(visuals, edge, op, type);
                return _var2;
            };
            sockets = edges.map(createEdgeSocket);
            sockets.forEach(copyEdgeLinks);
            return;
        }
        function showDurationSockets(visuals, op) {
            var _var3, _var2, _var4, id, node, _var5;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    _var3 = visuals.nodes;
                    _var2 = Object.keys(_var3);
                    _var4 = 0;
                    __state = '5';
                    break;
                case '4':
                    _var4++;
                    __state = '5';
                    break;
                case '5':
                    if (_var4 < _var2.length) {
                        id = _var2[_var4];
                        node = _var3[id];
                        _var5 = canHaveDuration(node);
                        if (_var5) {
                            createDurationSocket(visuals, node, op);
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
        function getParTarget(parbegin) {
            var right, down, left;
            right = goRight(parbegin);
            down = goDown(right);
            left = goLeft(down);
            return left.itemId;
        }
        function showCaseSockets(visuals, node, op) {
            var _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    showRightCaseSocket(visuals, node, op);
                    _var2 = firstCase(node.select);
                    if (node == _var2) {
                        showFirstCaseSocket(visuals, node, op);
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
        function drawCircle(ctx, cx, cy, radius, thickness, fill, border) {
            ctx.beginPath();
            ctx.arc(cx, cy, radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = fill;
            ctx.fill();
            ctx.lineWidth = thickness;
            ctx.strokeStyle = border;
            ctx.stroke();
            return;
        }
        function showFirstCaseSocket(visuals, node, op) {
            var socket, radius;
            radius = visuals.config.socketTouchRadius;
            socket = createSocket(visuals, node.x - node.w, node.y, op, 'first-case', radius);
            socket.node = node;
            return;
        }
        function canHaveDuration(node) {
            var _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    _var2 = node.type;
                    if (_var2 === 'action') {
                        __state = '13';
                    } else {
                        if (_var2 === 'question') {
                            __state = '13';
                        } else {
                            if (_var2 === 'select') {
                                __state = '13';
                            } else {
                                if (_var2 === 'insertion') {
                                    __state = '13';
                                } else {
                                    if (_var2 === 'simpleinput') {
                                        __state = '13';
                                    } else {
                                        if (_var2 === 'simpleoutput') {
                                            __state = '13';
                                        } else {
                                            if (_var2 === 'input') {
                                                __state = '13';
                                            } else {
                                                if (_var2 === 'output') {
                                                    __state = '13';
                                                } else {
                                                    if (_var2 === 'shelf') {
                                                        __state = '13';
                                                    } else {
                                                        if (_var2 === 'process') {
                                                            __state = '13';
                                                        } else {
                                                            __state = '8';
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    break;
                case '8':
                    return false;
                case '13':
                    if (node.side) {
                        __state = '8';
                    } else {
                        return true;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function copyEdgeLinks(socket) {
            var edge;
            edge = socket.edge;
            socket.target = edge.finalTarget.itemId;
            addRange(edge.links, socket.links);
            return;
        }
        function end() {
            return 'End';
        }
        function drawNodeCandy(widget, id, ctx, config) {
            var node, visuals, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    visuals = widget.visuals;
                    node = visuals.nodes[id];
                    if (node.type === 'junction') {
                        __state = '8';
                    } else {
                        if (node.type === 'arrow-loop') {
                            __state = '8';
                        } else {
                            _var2 = shouldAlignWidth(visuals, node);
                            if (_var2) {
                                if (visuals.config.allowResize) {
                                    skewerResizeCandy(widget, node, ctx);
                                    __state = '1';
                                } else {
                                    __state = '10';
                                }
                            } else {
                                __state = '10';
                            }
                        }
                    }
                    break;
                case '8':
                    juncCandy(node, ctx, config);
                    __state = '1';
                    break;
                case '10':
                    standardCandy(node, ctx, config);
                    __state = '1';
                    break;
                default:
                    return;
                }
            }
        }
        function createHandle(visuals, handle, ctx) {
            var touch, fill, border, size, lineWidth, config;
            config = visuals.config;
            touch = config.socketTouchRadius;
            handle.box = boxFromPoint(handle.x, handle.y, touch, touch);
            handle.elType = 'handle';
            fill = config.theme.handleFill;
            border = config.theme.candyBorder;
            size = 10;
            lineWidth = 2;
            centerSquare(ctx, handle.x, handle.y, size, fill, border, lineWidth);
            visuals.handles.push(handle);
            return;
        }
        function standardCandy(node, ctx, config) {
            var left, top, right, bottom, fill, border, size, lineWidth;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    left = node.x - node.w;
                    top = node.y - node.h;
                    right = node.x + node.w;
                    bottom = node.y + node.h;
                    fill = config.theme.candyFill;
                    border = config.theme.candyBorder;
                    size = 10;
                    lineWidth = 2;
                    __state = '10';
                    break;
                case '9':
                    return;
                case '10':
                    centerSquare(ctx, left, top, size, fill, border, lineWidth);
                    centerSquare(ctx, node.x, top, size, fill, border, lineWidth);
                    centerSquare(ctx, right, top, size, fill, border, lineWidth);
                    __state = '14';
                    break;
                case '14':
                    centerSquare(ctx, left, node.y, size, fill, border, lineWidth);
                    centerSquare(ctx, right, node.y, size, fill, border, lineWidth);
                    __state = '15';
                    break;
                case '15':
                    centerSquare(ctx, left, bottom, size, fill, border, lineWidth);
                    centerSquare(ctx, node.x, bottom, size, fill, border, lineWidth);
                    centerSquare(ctx, right, bottom, size, fill, border, lineWidth);
                    __state = '9';
                    break;
                default:
                    return;
                }
            }
        }
        function drawEdgeCandy(visuals, id, ctx, config) {
            var edge;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    edge = visuals.edges[id];
                    if (edge.vertical) {
                        verticalCandy(edge, ctx, config);
                        __state = '1';
                    } else {
                        horizontalCandy(edge, ctx, config);
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function juncCandy(node, ctx, config) {
            var fill, border, size, lineWidth;
            fill = config.theme.candyFill;
            border = config.theme.candyBorder;
            size = 10;
            lineWidth = 2;
            centerSquare(ctx, node.x, node.y, size, fill, border, lineWidth);
            return;
        }
        function skewerResizeCandy(widget, node, ctx) {
            var left, top, right, bottom, fill, border, size, lineWidth, config, visuals;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    visuals = widget.visuals;
                    config = visuals.config;
                    left = node.x - node.w;
                    top = node.y - node.h;
                    right = node.x + node.w;
                    bottom = node.y + node.h;
                    fill = config.theme.candyFill;
                    border = config.theme.candyBorder;
                    size = 10;
                    lineWidth = 2;
                    __state = '10';
                    break;
                case '9':
                    return;
                case '10':
                    createLeftDrakonResizeHandle(widget, node, top, ctx);
                    centerSquare(ctx, node.x, top, size, fill, border, lineWidth);
                    createRightDrakonResizeHandle(widget, node, top, ctx);
                    __state = '14';
                    break;
                case '14':
                    createLeftDrakonResizeHandle(widget, node, node.y, ctx);
                    createRightDrakonResizeHandle(widget, node, node.y, ctx);
                    __state = '15';
                    break;
                case '15':
                    createLeftDrakonResizeHandle(widget, node, bottom, ctx);
                    centerSquare(ctx, node.x, bottom, size, fill, border, lineWidth);
                    createRightDrakonResizeHandle(widget, node, bottom, ctx);
                    __state = '9';
                    break;
                default:
                    return;
                }
            }
        }
        function findHandle(visuals, pos) {
            var _var2, _var3, handle, _var4;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    _var2 = visuals.handles;
                    _var3 = 0;
                    __state = '7';
                    break;
                case '7':
                    if (_var3 < _var2.length) {
                        handle = _var2[_var3];
                        _var4 = hitBox(handle.box, pos.x, pos.y);
                        if (_var4) {
                            return handle;
                        } else {
                            _var3++;
                            __state = '7';
                        }
                    } else {
                        return undefined;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function horizontalCandy(edge, ctx, config) {
            var head, tail, headX, headY, tailX, x, y, w;
            head = edge.head;
            tail = edge.tail;
            headX = getX(head);
            headY = getY(head);
            tailX = getX(tail);
            x = headX;
            y = headY;
            w = tailX - headX;
            ctx.fillStyle = config.theme.candyBorder;
            ctx.fillRect(x, y - 2, w, 6);
            ctx.fillStyle = config.theme.candyFill;
            ctx.fillRect(x + 2, y, w - 4, 2);
            return;
        }
        function verticalCandy(edge, ctx, config) {
            var head, tail, headX, headY, tailY, x, y, h;
            head = edge.head;
            tail = edge.tail;
            headX = getX(head);
            headY = getY(head);
            tailY = getY(tail);
            x = headX;
            y = headY;
            h = tailY - headY;
            ctx.fillStyle = config.theme.candyBorder;
            ctx.fillRect(x - 2, y, 6, h);
            ctx.fillStyle = config.theme.candyFill;
            ctx.fillRect(x, y + 2, 2, h - 4);
            return;
        }
        function reflowContent(visuals) {
            var _var3, _var2, _var4, id, node;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    _var3 = visuals.nodes;
                    _var2 = Object.keys(_var3);
                    _var4 = 0;
                    __state = '5';
                    break;
                case '5':
                    if (_var4 < _var2.length) {
                        id = _var2[_var4];
                        node = _var3[id];
                        reflowIcon(visuals, node);
                        _var4++;
                        __state = '5';
                    } else {
                        return;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function resetContainer(widget) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (widget.config.canvasIcons) {
                        __state = '1';
                    } else {
                        html.clear(widget.contentContainer);
                        widget.contentContainer.style.transform = '';
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function makeRandomColor() {
            var r, g, b, rs, rg, rb;
            r = random(200, 256);
            g = random(200, 256);
            b = random(200, 256);
            rs = hexByteToString(r);
            rg = hexByteToString(g);
            rb = hexByteToString(b);
            return '#' + rs + rg + rb;
        }
        function getNextId(obj) {
            var id;
            id = obj.nextId.toString();
            obj.nextId++;
            return id;
        }
        function buildSubspaces(visuals) {
            var branchNode, _var2, _var3, branch;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (visuals.branches.length === 1) {
                        crawlSubdiagram(visuals, visuals.header.down);
                        __state = '1';
                    } else {
                        _var2 = visuals.branches;
                        _var3 = 0;
                        __state = '6';
                    }
                    break;
                case '6':
                    if (_var3 < _var2.length) {
                        branch = _var2[_var3];
                        branchNode = getNode(visuals, branch);
                        crawlSubdiagram(visuals, branchNode.down);
                        _var3++;
                        __state = '6';
                    } else {
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function createLink(source, index) {
            return {
                source: source,
                index: index
            };
        }
        function getBranchMargin(node) {
            var margin;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    margin = node.margin;
                    if (margin) {
                        __state = '3';
                    } else {
                        if (margin === 0) {
                            __state = '3';
                        } else {
                            if (node.branchId === 1) {
                                return 0;
                            } else {
                                return 1;
                            }
                        }
                    }
                    break;
                case '3':
                    return margin;
                default:
                    return;
                }
            }
        }
        function addItemToModel(model, item) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    model.items[item.id] = item;
                    if (item.type === 'branch') {
                        model.branches.push(item.id);
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
        function findFreePos(widget, evt) {
            var mousePos, leftPos, visuals, config, x, y;
            visuals = widget.visuals;
            config = visuals.config;
            mousePos = toDiagram(widget, evt);
            leftPos = widgetToDiagram(widget, config.metre, 0);
            x = snapUp(config, leftPos.x);
            y = snapUp(config, mousePos.y);
            return {
                x: x,
                y: y
            };
        }
        function putLoopsOnCases(visuals, select) {
            var _var2, _var3, caseIcon;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    _var2 = select.cases;
                    _var3 = 0;
                    __state = '5';
                    break;
                case '5':
                    if (_var3 < _var2.length) {
                        caseIcon = _var2[_var3];
                        Object.assign(caseIcon.loops, select.loops);
                        _var3++;
                        __state = '5';
                    } else {
                        return;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function buildBlockMenu(widget) {
            var menu, _var2, _var3, _var4, _var5, _var6;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    menu = [];
                    _var2 = tr(widget, 'Copy');
                    pushMenuItem('copy_block', menu, _var2, undefined, function () {
                        copy(widget);
                    });
                    _var5 = isReadonly(widget);
                    if (_var5) {
                        __state = '3';
                    } else {
                        _var3 = tr(widget, 'Cut');
                        pushMenuItem('cut_block', menu, _var3, undefined, function () {
                            cut(widget);
                        });
                        menu.push({ type: 'separator' });
                        _var4 = tr(widget, 'Delete');
                        pushMenuItem('delete_block', menu, _var4, widget.visuals.config.imagePath + 'delete.png', function () {
                            deleteSelection(widget);
                        });
                        menu.push({ type: 'separator' });
                        _var6 = tr(widget, 'Format');
                        pushMenuItem('format', menu, _var6, undefined, function () {
                            startEditStyle(widget);
                        });
                        __state = '3';
                    }
                    break;
                case '3':
                    return menu;
                default:
                    return;
                }
            }
        }
        function buildMenuByType(widget, prim, node) {
            var menu, func, _var2, _var3, _var4, _var5, _var6, _var7, _var8, _var9, _var10, _var11, _var12, _var13, _var14, _var15, _var16, _var17, _var18, _var19, _var20, _var21, _var22, _var23, _var24, _var25, _var26, _var27, _var28;
            var __state = '27';
            while (true) {
                switch (__state) {
                case '2':
                    if (prim.type === 'header') {
                        _var6 = tr(widget, 'Rename');
                        pushMenuItem('rename', menu, _var6, undefined, function () {
                            startEditContent(widget, prim);
                        });
                        if (widget.visuals.params) {
                            __state = '_item19';
                        } else {
                            _var15 = isReadonly(widget);
                            if (_var15) {
                                __state = '_item19';
                            } else {
                                _var7 = tr(widget, 'Add parameters');
                                pushMenuItem('add_params', menu, _var7, undefined, function () {
                                    addParameters(widget, prim);
                                });
                                __state = '_item19';
                            }
                        }
                    } else {
                        _var8 = canEditNodeText(widget, prim);
                        if (_var8) {
                            _var17 = canEditSecondary(prim);
                            if (_var17) {
                                _var18 = tr(widget, 'Edit upper text');
                                pushMenuItem('edit_secondary', menu, _var18, undefined, function () {
                                    startEditSecondary(widget, prim);
                                });
                                __state = '_item12';
                            } else {
                                __state = '_item12';
                            }
                        } else {
                            __state = '_item19';
                        }
                    }
                    break;
                case '8':
                    return menu;
                case '9':
                    _var2 = prim.type;
                    if (_var2 === 'question') {
                        _var3 = tr(widget, 'Swap "Yes" and "No"');
                        pushMenuItem('swap_yes_no', menu, _var3, undefined, function () {
                            swapYesNo(widget, prim);
                        });
                        __state = '16';
                    } else {
                        if (_var2 === 'address') {
                            _var20 = tr(widget, 'Go to branch');
                            pushMenuItem('go_to_target_branch', menu, _var20, undefined, function () {
                                widget.showItem(node.branch.id);
                            });
                            menu.push({ type: 'separator' });
                            addressDestinations(widget, node, menu);
                            __state = '16';
                        } else {
                            if (_var2 === 'branch') {
                                _var21 = getBranchMargin(node);
                                if (_var21 === 0) {
                                    __state = '_item26';
                                } else {
                                    _var22 = tr(widget, 'Reset margin');
                                    pushMenuItem('reset_margin', menu, _var22, undefined, function () {
                                        resetMargin(widget, node.id);
                                    });
                                    __state = '_item26';
                                }
                            } else {
                                __state = '16';
                            }
                        }
                    }
                    break;
                case '16':
                    _var4 = canDelete(widget.visuals, node);
                    if (_var4) {
                        menu.push({ type: 'separator' });
                        _var5 = tr(widget, 'Delete');
                        pushMenuItem('delete_one', menu, _var5, widget.visuals.config.imagePath + 'delete.png', function () {
                            deleteOne(widget, node);
                        });
                        __state = '_item27';
                    } else {
                        __state = '_item27';
                    }
                    break;
                case '27':
                    menu = [];
                    if (prim.type === 'params') {
                        __state = '60';
                    } else {
                        func = getCopyFunction(node);
                        if (func) {
                            _var10 = tr(widget, 'Copy');
                            pushMenuItem('copy_one', menu, _var10, undefined, function () {
                                copy(widget);
                            });
                            _var14 = isReadonly(widget);
                            if (_var14) {
                                __state = '31';
                            } else {
                                _var11 = canDelete(widget.visuals, node);
                                if (_var11) {
                                    _var12 = tr(widget, 'Cut');
                                    pushMenuItem('cut_one', menu, _var12, undefined, function () {
                                        cutOneItem(widget, node);
                                    });
                                    __state = '31';
                                } else {
                                    __state = '31';
                                }
                            }
                        } else {
                            __state = '2';
                        }
                    }
                    break;
                case '31':
                    menu.push({ type: 'separator' });
                    __state = '2';
                    break;
                case '60':
                    _var28 = tr(widget, 'Edit content');
                    pushMenuItem('edit_content', menu, _var28, undefined, function () {
                        startEditContent(widget, prim);
                    });
                    _var27 = isReadonly(widget);
                    if (_var27) {
                        __state = '8';
                    } else {
                        menu.push({ type: 'separator' });
                        _var26 = tr(widget, 'Delete');
                        pushMenuItem('delete_one', menu, _var26, widget.visuals.config.imagePath + 'delete.png', function () {
                            deleteOne(widget, node);
                        });
                        __state = '8';
                    }
                    break;
                case '_item19':
                    _var16 = isReadonly(widget);
                    if (_var16) {
                        __state = '8';
                    } else {
                        __state = '9';
                    }
                    break;
                case '_item27':
                    _var24 = canEditStyle(node);
                    if (_var24) {
                        menu.push({ type: 'separator' });
                        _var25 = tr(widget, 'Format');
                        pushMenuItem('format', menu, _var25, undefined, function () {
                            startEditStyle(widget);
                        });
                        __state = '8';
                    } else {
                        __state = '8';
                    }
                    break;
                case '_item26':
                    _var23 = tr(widget, 'Increase margin');
                    pushMenuItem('increase_margin', menu, _var23, undefined, function () {
                        increaseMargin(widget, node.id);
                    });
                    if (widget.visuals.end) {
                        __state = '16';
                    } else {
                        if (node.itemId === widget.visuals.branches[widget.visuals.branches.length - 1]) {
                            _var13 = tr(widget, 'Insert branch with End');
                            pushMenuItem('insert_end_branch', menu, _var13, undefined, function () {
                                branchInsertEnd(widget);
                            });
                            __state = '16';
                        } else {
                            __state = '16';
                        }
                    }
                    break;
                case '_item12':
                    _var9 = tr(widget, 'Edit content');
                    pushMenuItem('edit_content', menu, _var9, undefined, function () {
                        startEditContent(widget, prim);
                    });
                    menu.push({ type: 'separator' });
                    _var19 = tr(widget, 'Edit link');
                    pushMenuItem('edit_link', menu, _var19, undefined, function () {
                        startEditLink(widget, prim);
                    });
                    __state = '_item19';
                    break;
                default:
                    return;
                }
            }
        }
        function getNodeForItem(visuals, itemId) {
            var nodeId;
            nodeId = visuals.itemsToNodes[itemId];
            return visuals.nodes[nodeId];
        }
        function createStyles(widget) {
            var scrollable, config;
            config = widget.config;
            html.clear(widget.styleTag);
            scrollable = '.drakon-scrollable-container' + widget.myStyleId;
            html.addClassToStyle(widget.styleTag, scrollable, 'display: inline-block', 'position:absolute', 'left:0px', 'top:0px', 'width:100%', 'height:100%', 'overflow: auto');
            html.addClassToStyle(widget.styleTag, '.drakon-scrollable', 'display: inline-block', 'position:absolute', 'left:0px', 'top:0px', 'pointer-events: none');
            html.addClassToStyle(widget.styleTag, scrollable + '::-webkit-scrollbar', 'width:10px', 'height:10px');
            html.addClassToStyle(widget.styleTag, scrollable + '::-webkit-scrollbar-track', 'display: none');
            html.addClassToStyle(widget.styleTag, scrollable + '::-webkit-scrollbar-thumb', 'background: ' + config.theme.scrollBar, 'border-radius:5px');
            html.addClassToStyle(widget.styleTag, scrollable + '::-webkit-scrollbar-thumb:hover', 'background: ' + config.theme.scrollBarHover);
            html.addClassToStyle(widget.styleTag, scrollable + '::-webkit-scrollbar-corner', 'display:none');
            html.addClassToStyle(widget.styleTag, '.drakon-icon-content ol', 'list-style-type: decimal', 'margin-left:15px');
            html.addClassToStyle(widget.styleTag, '.drakon-icon-content', 'white-space: normal');
            html.addClassToStyle(widget.styleTag, '.drakon-icon-content ul', 'list-style-type: disc', 'margin-left:17px');
            html.addClassToStyle(widget.styleTag, '.drakon-icon-content em', 'font-style: italic');
            html.addClassToStyle(widget.styleTag, '.drakon-icon-content strong', 'font-weight: bold');
            return;
        }
        function addressDestinations(widget, address, menu) {
            var notCurrent, selected, makeItem, target;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    notCurrent = function (itemId) {
                        return itemId != address.branch.itemId;
                    };
                    selected = widget.visuals.branches.filter(notCurrent);
                    if (selected.length === 0) {
                        __state = '1';
                    } else {
                        makeItem = function (itemId) {
                            target = getNode(widget.visuals, itemId);
                            makePointToItem(widget, address, target, menu);
                        };
                        selected.forEach(makeItem);
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function setIconProps(icons, names, props) {
            var icon, _var5, _var6, name, _var3, _var2, _var4, key, value;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    _var5 = names;
                    _var6 = 0;
                    __state = '5';
                    break;
                case '5':
                    if (_var6 < _var5.length) {
                        name = _var5[_var6];
                        if (name in icons) {
                            icon = icons[name];
                            __state = '_item4';
                        } else {
                            icon = {};
                            icons[name] = icon;
                            __state = '_item4';
                        }
                    } else {
                        return;
                    }
                    break;
                case '11':
                    if (_var4 < _var2.length) {
                        key = _var2[_var4];
                        value = _var3[key];
                        icon[key] = value;
                        _var4++;
                        __state = '11';
                    } else {
                        _var6++;
                        __state = '5';
                    }
                    break;
                case '_item4':
                    _var3 = props;
                    _var2 = Object.keys(_var3);
                    _var4 = 0;
                    __state = '11';
                    break;
                default:
                    return;
                }
            }
        }
        function onSelectionChanged(prims) {
            console.log('onSelectionChanged', prims);
            return;
        }
        function copyTheme(userTheme, config) {
            var theme;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    userTheme = userTheme || {};
                    theme = {
                        'icons': {},
                        'background': '#97D3E1',
                        'color': 'black',
                        'iconBack': 'white',
                        'lines': 'black',
                        'backText': 'black',
                        'iconBorder': 'black',
                        'candyFill': '#00ff00',
                        'handleFill': '#d0ff00',
                        'candyBorder': 'black',
                        'valFill': 'yellow',
                        'internalLine': 'black',
                        'valBorder': 'black',
                        'scrollBar': 'rgba(0, 0, 0, 0.3)',
                        'scrollBarHover': 'black',
                        'shadowColor': '',
                        'shadowBlur': 6,
                        'shadowOffsetX': 0,
                        'shadowOffsetY': 0,
                        'lineWidth': 1,
                        'borderWidth': 1,
                        'guides': 'darkred',
                        'commentBack': '#2293bb'
                    };
                    Object.assign(theme, userTheme);
                    __state = '12';
                    break;
                case '11':
                    return theme;
                case '12':
                    setIconDefaultProps(theme.icons, [
                        'duration',
                        'ctrlstart',
                        'ctrlend',
                        'pause',
                        'timer',
                        'group-duration'
                    ], { iconBack: '#fffdbd' });
                    setIconDefaultProps(theme.icons, ['header'], { font: config.headerFont });
                    setIconDefaultProps(theme.icons, ['branch'], { font: config.branchFont });
                    __state = '11';
                    break;
                default:
                    return;
                }
            }
        }
        function copyScrollToScrollable(widget, scrollX, scrollY) {
            var visuals, zoom;
            visuals = widget.visuals;
            zoom = widget.zoomFactor;
            widget.scrollableContainer.scrollLeft = (scrollX - visuals.box.left) * zoom;
            widget.scrollableContainer.scrollTop = (scrollY - visuals.box.top) * zoom;
            return;
        }
        function forType(visuals, type, action) {
            var nodes, node, _var2, _var3, nodeId;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    nodes = getCreateList(visuals.byType, type);
                    _var2 = nodes;
                    _var3 = 0;
                    __state = '8';
                    break;
                case '8':
                    if (_var3 < _var2.length) {
                        nodeId = _var2[_var3];
                        node = visuals.nodes[nodeId];
                        action(visuals, node);
                        _var3++;
                        __state = '8';
                    } else {
                        return;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function goRight(node) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    __state = '6';
                    break;
                case '6':
                    if (node.right) {
                        node = getRight(node);
                        __state = '6';
                    } else {
                        return node;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function linkLevels(visuals, above, below, distance) {
            linkSkewersGeneric(visuals.levelLinks, above.id, below.id, distance);
            return;
        }
        function getLeftHeight(node) {
            var left;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (node.type === 'junction') {
                        if (node.left) {
                            left = getLeft(node);
                            if (left.type === 'question') {
                                return left.h;
                            } else {
                                __state = '6';
                            }
                        } else {
                            __state = '6';
                        }
                    } else {
                        __state = '6';
                    }
                    break;
                case '6':
                    return 0;
                default:
                    return;
                }
            }
        }
        function linkNodeToLevel(level, node) {
            node.level = level;
            level.nodes.push(node);
            return;
        }
        function createSkewer(visuals) {
            var skewer;
            skewer = createSkewerObj(visuals, true);
            visuals.skewers[skewer.id] = skewer;
            return skewer;
        }
        function getX(node) {
            return node.skewer.coord;
        }
        function getBoundary(visuals, skewer) {
            var boundary, metre;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    metre = visuals.config.metre;
                    boundary = skewer.leftWidth + metre;
                    if (skewer.main) {
                        boundary += metre;
                        __state = '6';
                    } else {
                        __state = '6';
                    }
                    break;
                case '6':
                    return skewer.leftWidth + metre;
                default:
                    return;
                }
            }
        }
        function calculateSkewerPos(skewers, links, skewer, pos) {
            var closest, next, nextPos, _var3, _var2, _var4, _, link;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (skewer.coord < pos) {
                        skewer.coord = pos;
                        closest = getLinksWithLow(links, skewer.id);
                        if (closest) {
                            _var3 = closest;
                            _var2 = Object.keys(_var3);
                            _var4 = 0;
                            __state = '9';
                        } else {
                            __state = '1';
                        }
                    } else {
                        __state = '1';
                    }
                    break;
                case '9':
                    if (_var4 < _var2.length) {
                        _ = _var2[_var4];
                        link = _var3[_];
                        nextPos = pos + link.distance;
                        next = skewers[link.high];
                        calculateSkewerPos(skewers, links, next, nextPos);
                        _var4++;
                        __state = '9';
                    } else {
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function traceLevel(visuals, node) {
            var level;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    level = createLevel(visuals);
                    __state = '7';
                    break;
                case '7':
                    linkNodeToLevel(level, node);
                    if (node.right) {
                        node = getRight(node);
                        __state = '7';
                    } else {
                        return;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function buildBoxes(widget, visuals) {
            var tr, nodes, edges, left, top, right, width, height, bottom, _var3, _var2, _var4, id, node, _var6, _var5, _var7, edge, _var8, _var9, element, _var10;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    tr = visuals.config.touchRadius;
                    nodes = visuals.nodes;
                    _var3 = nodes;
                    _var2 = Object.keys(_var3);
                    _var4 = 0;
                    __state = '8';
                    break;
                case '4':
                    return;
                case '5':
                    edges = visuals.edges;
                    _var6 = edges;
                    _var5 = Object.keys(_var6);
                    _var7 = 0;
                    __state = '16';
                    break;
                case '7':
                    _var4++;
                    __state = '8';
                    break;
                case '8':
                    if (_var4 < _var2.length) {
                        id = _var2[_var4];
                        node = _var3[id];
                        _var10 = isDrawableNode(node);
                        if (_var10) {
                            node.x = getX(node);
                            node.y = getY(node);
                            if (node.type === 'junction') {
                                __state = '22';
                            } else {
                                if (node.type === 'arrow-loop') {
                                    __state = '22';
                                } else {
                                    node.box = boxFromPoint(node.x, node.y, node.w, node.h);
                                    node.leftX = node.x - node.w;
                                    node.rightX = node.x + node.w;
                                    node.topY = node.y - node.h;
                                    node.middleY = node.y;
                                    node.bottomY = node.y + node.h;
                                    __state = '7';
                                }
                            }
                        } else {
                            __state = '7';
                        }
                    } else {
                        __state = '5';
                    }
                    break;
                case '16':
                    if (_var7 < _var5.length) {
                        id = _var5[_var7];
                        edge = _var6[id];
                        if (edge.vertical) {
                            left = edge.head.x - tr;
                            top = edge.head.y;
                            bottom = edge.tail.y;
                            width = tr * 2;
                            height = bottom - top;
                            __state = '21';
                        } else {
                            left = edge.head.x;
                            top = edge.head.y - tr;
                            right = edge.tail.x;
                            width = right - left;
                            height = tr * 2;
                            __state = '21';
                        }
                    } else {
                        __state = '23';
                    }
                    break;
                case '21':
                    edge.box = createBox(left, top, width, height);
                    _var7++;
                    __state = '16';
                    break;
                case '22':
                    node.box = boxFromPoint(node.x, node.y, tr, tr);
                    __state = '7';
                    break;
                case '23':
                    _var8 = visuals.free;
                    _var9 = 0;
                    __state = '25';
                    break;
                case '25':
                    if (_var9 < _var8.length) {
                        element = _var8[_var9];
                        calculateFreeBox(widget, element, visuals.config);
                        _var9++;
                        __state = '25';
                    } else {
                        __state = '4';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function removeTempEdges(visuals) {
            var edgeUp, upper, edgeDown, lower, finalTarget, tmpJun, oldLevel, newLevel, _var2, _var3, tmpEdge;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    _var2 = visuals.tempEdges;
                    _var3 = 0;
                    __state = '7';
                    break;
                case '4':
                    return;
                case '5':
                    if (visuals.branches.length === 1) {
                        __state = '4';
                    } else {
                        if (visuals.end) {
                            oldLevel = visuals.end.level;
                            remove(oldLevel.nodes, visuals.end);
                            newLevel = createLevel(visuals);
                            newLevel.coord = oldLevel.coord;
                            newLevel.nodes.push(visuals.end);
                            visuals.end.level = newLevel;
                            removeEdge(visuals, visuals.end.left.id);
                            moveEndUp(visuals);
                            __state = '4';
                        } else {
                            __state = '4';
                        }
                    }
                    break;
                case '7':
                    if (_var3 < _var2.length) {
                        tmpEdge = _var2[_var3];
                        tmpJun = tmpEdge.head;
                        removeEdge(visuals, tmpEdge.id);
                        edgeUp = tmpJun.up;
                        upper = edgeUp.head;
                        edgeDown = tmpJun.down;
                        lower = edgeDown.tail;
                        finalTarget = edgeUp.finalTarget;
                        removeEdge(visuals, edgeUp.id);
                        removeEdge(visuals, edgeDown.id);
                        removeNode(visuals, tmpJun.id);
                        makeDownEdge(visuals, upper, lower, finalTarget);
                        _var3++;
                        __state = '7';
                    } else {
                        visuals.tempEdges = [];
                        __state = '5';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function maxHeight(height, node) {
            var _var2;
            _var2 = Math.max(height, node.h);
            return _var2;
        }
        function getLowestLevel(visuals) {
            var bottom;
            if (visuals.end) {
                return visuals.end.level;
            } else {
                bottom = goDown(visuals.header);
                return bottom.level;
            }
        }
        function addLink(links, link) {
            links.push(link);
            return;
        }
        function getSilCorner(visuals) {
            var beneath, left;
            beneath = getDown(visuals.header);
            left = getLeft(beneath);
            return left;
        }
        function setSameHeightForSelect(visuals, select) {
            setSameHeightForNodes(visuals, select.cases);
            return;
        }
        function getNextDown(node) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    __state = '5';
                    break;
                case '5':
                    node = getLeft(node);
                    if (node.down) {
                        return node;
                    } else {
                        __state = '5';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function skewerHead(skewer) {
            return skewer.nodes[0];
        }
        function linkSkewers(visuals, left, right, distance) {
            linkSkewersGeneric(visuals.skewerLinks, left.id, right.id, distance);
            return;
        }
        function findLeftLinks(visuals, skewer) {
            var head, tail, start, finish, node, boundary, corner, rightJ, left, hskewer, metre, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    metre = visuals.config.metre;
                    head = skewerHead(skewer);
                    tail = skewerTail(skewer);
                    if (head.left) {
                        if (tail.left) {
                            start = getNextDown(head);
                            finish = getNextUp(tail);
                            linkSkewers(visuals, start.skewer, skewer, start.w + metre);
                            node = getDown(start);
                            boundary = getBoundary(visuals, skewer);
                            linkSkewers(visuals, finish.skewer, skewer, boundary);
                            __state = '5';
                        } else {
                            __state = '4';
                        }
                    } else {
                        __state = '4';
                    }
                    break;
                case '4':
                    if (visuals.branches.length === 1) {
                        __state = '1';
                    } else {
                        left = getSilCorner(visuals);
                        hskewer = visuals.header.skewer;
                        boundary = getBoundary(visuals, hskewer);
                        linkSkewers(visuals, left.skewer, hskewer, boundary);
                        __state = '1';
                    }
                    break;
                case '5':
                    if (node === finish) {
                        if (node.type === 'question') {
                            linkSkewers(visuals, node.skewer, skewer, node.w + boundary + metre);
                            __state = '4';
                        } else {
                            __state = '4';
                        }
                    } else {
                        _var2 = node.type;
                        if (_var2 === 'question') {
                            rightJ = getRight(node);
                            if (rightJ.up) {
                                linkSkewers(visuals, node.skewer, skewer, node.w + boundary + metre);
                                node = getDown(node);
                                __state = '5';
                            } else {
                                linkSkewers(visuals, rightJ.skewer, skewer, boundary);
                                corner = goRight(node);
                                node = getDown(corner);
                                __state = '5';
                            }
                        } else {
                            if (_var2 === 'arrow-loop') {
                                rightJ = getRight(node);
                                linkSkewers(visuals, rightJ.skewer, skewer, boundary);
                                node = getDown(node);
                                __state = '5';
                            } else {
                                if (_var2 === 'junction') {
                                    linkSkewers(visuals, node.skewer, skewer, node.w + boundary);
                                    if (node.subtype === 'parbegin') {
                                        corner = goRight(node);
                                        node = getDown(corner);
                                        __state = '5';
                                    } else {
                                        if (node.down) {
                                            node = getDown(node);
                                            __state = '5';
                                        } else {
                                            node = goLeft(node);
                                            __state = '5';
                                        }
                                    }
                                } else {
                                    if (_var2 === 'select') {
                                        linkSkewers(visuals, node.skewer, skewer, node.w + boundary);
                                        node = lastCase(node);
                                        __state = '5';
                                    } else {
                                        linkSkewers(visuals, node.skewer, skewer, node.w + boundary);
                                        node = getDown(node);
                                        __state = '5';
                                    }
                                }
                            }
                        }
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function moveEndUp(visuals) {
            var lastBranch, below, distance, levels, metre, _var2, _var3, level, _var4;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    metre = visuals.config.metre;
                    if (visuals.end) {
                        _var4 = last(visuals.branches);
                        lastBranch = getNode(visuals, _var4);
                        below = getDown(lastBranch);
                        distance = below.level.coord - lastBranch.level.coord - below.h - lastBranch.h - metre;
                        if (distance > 0) {
                            __state = '5';
                        } else {
                            __state = '4';
                        }
                    } else {
                        __state = '4';
                    }
                    break;
                case '4':
                    return;
                case '5':
                    levels = collectLevels(visuals, lastBranch);
                    _var2 = levels;
                    _var3 = 0;
                    __state = '12';
                    break;
                case '12':
                    if (_var3 < _var2.length) {
                        level = _var2[_var3];
                        level.coord -= distance;
                        _var3++;
                        __state = '12';
                    } else {
                        __state = '4';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function positionLevels(visuals) {
            var down, leftHeight, h, distance, lowest, max, jun, metre, _var3, _var2, _var4, id, node, _var6, _var5, _var7, level, _var9, _var8, _var10, _var12, _var11, _var13;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    metre = visuals.config.metre;
                    _var3 = visuals.nodes;
                    _var2 = Object.keys(_var3);
                    _var4 = 0;
                    __state = '9';
                    break;
                case '4':
                    return;
                case '5':
                    lowest = getLowestLevel(visuals);
                    calculateSkewerPos(visuals.levels, visuals.levelLinks, lowest, 0);
                    __state = '6';
                    break;
                case '6':
                    max = 0;
                    _var6 = visuals.levels;
                    _var5 = Object.keys(_var6);
                    _var7 = 0;
                    __state = '21';
                    break;
                case '7':
                    _var12 = visuals.nodes;
                    _var11 = Object.keys(_var12);
                    _var13 = 0;
                    __state = '27';
                    break;
                case '8':
                    _var4++;
                    __state = '9';
                    break;
                case '9':
                    if (_var4 < _var2.length) {
                        id = _var2[_var4];
                        node = _var3[id];
                        if (node.down) {
                            down = getDown(node);
                            leftHeight = getLeftHeight(node);
                            if (leftHeight === 0) {
                                h = node.h;
                                __state = '15';
                            } else {
                                h = leftHeight;
                                __state = '15';
                            }
                        } else {
                            __state = '8';
                        }
                    } else {
                        __state = '5';
                    }
                    break;
                case '15':
                    distance = h + down.h + metre;
                    linkLevels(visuals, down.level, node.level, distance);
                    __state = '8';
                    break;
                case '21':
                    if (_var7 < _var5.length) {
                        id = _var5[_var7];
                        level = _var6[id];
                        max = Math.max(max, level.coord);
                        _var7++;
                        __state = '21';
                    } else {
                        _var9 = visuals.levels;
                        _var8 = Object.keys(_var9);
                        _var10 = 0;
                        __state = '23';
                    }
                    break;
                case '23':
                    if (_var10 < _var8.length) {
                        id = _var8[_var10];
                        level = _var9[id];
                        level.coord = max - level.coord;
                        _var10++;
                        __state = '23';
                    } else {
                        __state = '7';
                    }
                    break;
                case '26':
                    _var13++;
                    __state = '27';
                    break;
                case '27':
                    if (_var13 < _var11.length) {
                        id = _var11[_var13];
                        node = _var12[id];
                        if (node.type === 'case') {
                            __state = '31';
                        } else {
                            if (node.type === 'branch') {
                                if (node.up) {
                                    __state = '31';
                                } else {
                                    __state = '26';
                                }
                            } else {
                                __state = '26';
                            }
                        }
                    } else {
                        __state = '4';
                    }
                    break;
                case '31':
                    jun = getUp(node);
                    node.level.coord = jun.level.coord + metre + node.h;
                    __state = '26';
                    break;
                default:
                    return;
                }
            }
        }
        function lastCase(select) {
            var _var2;
            _var2 = last(select.cases);
            return _var2;
        }
        function traceSkewer(visuals, node) {
            var skewer, beneath;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    skewer = createSkewer(visuals, true);
                    if (node.type === 'header') {
                        __state = '9';
                    } else {
                        beneath = getDown(node);
                        if (beneath.type == 'branch') {
                            __state = '9';
                        } else {
                            __state = '5';
                        }
                    }
                    break;
                case '4':
                    return;
                case '5':
                    __state = '13';
                    break;
                case '9':
                    skewer.main = true;
                    __state = '5';
                    break;
                case '13':
                    linkNodeToSkewer(skewer, node);
                    if (node.down) {
                        node = getDown(node);
                        __state = '13';
                    } else {
                        __state = '4';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function getDurExtend(visuals, node) {
            var duration;
            if (node.side) {
                duration = getNode(visuals, node.side);
                node.duration = duration;
                return visuals.config.metre + duration.w * 2;
            } else {
                return 0;
            }
        }
        function linkSkewersGeneric(links, low, high, distance) {
            var link;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    link = findLink(links, low, high);
                    if (link) {
                        __state = '4';
                    } else {
                        link = {
                            low: low,
                            high: high,
                            distance: 0
                        };
                        addLink(links, link);
                        __state = '4';
                    }
                    break;
                case '4':
                    link.distance = Math.max(link.distance, distance);
                    return;
                default:
                    return;
                }
            }
        }
        function drawParams(visuals) {
            var skewer, header, params, level, hx, hy, x, delta, y, metre;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    metre = visuals.config.metre;
                    if (visuals.params) {
                        skewer = createSkewer(visuals);
                        header = visuals.header;
                        params = visuals.params;
                        level = header.level;
                        hx = getX(header);
                        hy = getY(header);
                        x = hx + header.w + metre + params.w;
                        if (params.h > header.h) {
                            delta = params.h - header.h;
                            y = hy - delta;
                            __state = '10';
                        } else {
                            y = hy;
                            __state = '10';
                        }
                    } else {
                        __state = '1';
                    }
                    break;
                case '10':
                    level.coord = y;
                    skewer.coord = x;
                    params.level = level;
                    params.skewer = skewer;
                    createEdge(visuals, header, params, false);
                    __state = '1';
                    break;
                default:
                    return;
                }
            }
        }
        function positionSkewers(visuals) {
            var left, _var3, _var2, _var4, id, skewer;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    _var3 = visuals.skewers;
                    _var2 = Object.keys(_var3);
                    _var4 = 0;
                    __state = '7';
                    break;
                case '4':
                    return;
                case '5':
                    if (visuals.branches.length === 1) {
                        calculateSkewerPos(visuals.skewers, visuals.skewerLinks, visuals.header.skewer, 0);
                        __state = '4';
                    } else {
                        left = getSilCorner(visuals);
                        calculateSkewerPos(visuals.skewers, visuals.skewerLinks, left.skewer, 0);
                        __state = '4';
                    }
                    break;
                case '7':
                    if (_var4 < _var2.length) {
                        id = _var2[_var4];
                        skewer = _var3[id];
                        findLeftLinks(visuals, skewer);
                        _var4++;
                        __state = '7';
                    } else {
                        __state = '5';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function linkNodeToSkewer(skewer, node) {
            node.skewer = skewer;
            skewer.nodes.push(node);
            return;
        }
        function getLinksWithLow(links, low) {
            var _var2;
            _var2 = links.filter(function (link) {
                return link.low === low;
            });
            return _var2;
        }
        function collectLevels(visuals, branch) {
            var visited, levelIds, node, getLevel, _var3, _var2, _var4, nodeId, _, _var5, _var6, _var7;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    visited = {};
                    visited[branch.id] = true;
                    _var5 = getDown(branch);
                    scanManhattan(visited, _var5);
                    delete visited[branch.id];
                    levelIds = {};
                    _var3 = visited;
                    _var2 = Object.keys(_var3);
                    _var4 = 0;
                    __state = '8';
                    break;
                case '8':
                    if (_var4 < _var2.length) {
                        nodeId = _var2[_var4];
                        _ = _var3[nodeId];
                        node = visuals.nodes[nodeId];
                        levelIds[node.level.id] = true;
                        _var4++;
                        __state = '8';
                    } else {
                        getLevel = function (levelId) {
                            return visuals.levels[levelId];
                        };
                        _var7 = Object.keys(levelIds);
                        _var6 = _var7.map(getLevel);
                        return _var6;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function setSameHeightForNodes(visuals, nodes) {
            var height;
            height = nodes.reduce(maxHeight, 0);
            nodes.forEach(function (node) {
                node.h = height;
            });
            return;
        }
        function setSameHeight(visuals) {
            forType(visuals, 'select', setSameHeightForSelect);
            forTypeTogether(visuals, 'branch', setSameHeightForNodes);
            forTypeTogether(visuals, 'address', setSameHeightForNodes);
            return;
        }
        function makeHalfSize(config, size) {
            var snappedUp, _var2, _var3;
            _var3 = Math.ceil(size / config.metre);
            snappedUp = _var3 * config.metre;
            _var2 = Math.floor(snappedUp / 2);
            return _var2;
        }
        function setSameWidth(visuals, skewer) {
            var width, leftWidth, margin, dur, _var2, _var3, node, _var4, _var5, _var6;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    width = 0;
                    leftWidth = 0;
                    margin = 0;
                    _var2 = skewer.nodes;
                    _var3 = 0;
                    __state = '7';
                    break;
                case '4':
                    return;
                case '5':
                    skewer.boundary = width;
                    _var4 = skewer.nodes;
                    _var5 = 0;
                    __state = '12';
                    break;
                case '6':
                    _var3++;
                    __state = '7';
                    break;
                case '7':
                    if (_var3 < _var2.length) {
                        node = _var2[_var3];
                        if (node.type === 'header') {
                            __state = '19';
                        } else {
                            width = Math.max(width, node.w);
                            __state = '19';
                        }
                    } else {
                        __state = '5';
                    }
                    break;
                case '11':
                    _var5++;
                    __state = '12';
                    break;
                case '12':
                    if (_var5 < _var4.length) {
                        node = _var4[_var5];
                        _var6 = shouldAlignWidth(visuals, node);
                        if (_var6) {
                            node.w = width;
                            dur = getDurExtend(visuals, node);
                            leftWidth = Math.max(leftWidth, dur + width);
                            __state = '11';
                        } else {
                            __state = '11';
                        }
                    } else {
                        skewer.leftWidth = leftWidth + margin * visuals.config.metre;
                        __state = '4';
                    }
                    break;
                case '19':
                    if (node.type === 'branch') {
                        margin = getBranchMargin(node);
                        __state = '6';
                    } else {
                        __state = '6';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function getY(node) {
            return node.level.coord;
        }
        function buildSkewers(visuals) {
            var _var3, _var2, _var4, id, node, _var6, _var5, _var7;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    _var3 = visuals.nodes;
                    _var2 = Object.keys(_var3);
                    _var4 = 0;
                    __state = '7';
                    break;
                case '4':
                    return;
                case '5':
                    _var6 = visuals.nodes;
                    _var5 = Object.keys(_var6);
                    _var7 = 0;
                    __state = '13';
                    break;
                case '6':
                    _var4++;
                    __state = '7';
                    break;
                case '7':
                    if (_var4 < _var2.length) {
                        id = _var2[_var4];
                        node = _var3[id];
                        if (node.up) {
                            __state = '6';
                        } else {
                            if (node.down) {
                                if (node.skewer) {
                                    __state = '6';
                                } else {
                                    traceSkewer(visuals, node);
                                    __state = '6';
                                }
                            } else {
                                __state = '6';
                            }
                        }
                    } else {
                        __state = '5';
                    }
                    break;
                case '12':
                    _var7++;
                    __state = '13';
                    break;
                case '13':
                    if (_var7 < _var5.length) {
                        id = _var5[_var7];
                        node = _var6[id];
                        if (node.left) {
                            __state = '12';
                        } else {
                            traceLevel(visuals, node);
                            __state = '12';
                        }
                    } else {
                        __state = '4';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function isDrawableNode(node) {
            if (node.skewer) {
                return true;
            } else {
                return false;
            }
        }
        function skewerTail(skewer) {
            var _var2;
            _var2 = last(skewer.nodes);
            return _var2;
        }
        function goLeft(node) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    __state = '6';
                    break;
                case '6':
                    if (node.left) {
                        node = getLeft(node);
                        __state = '6';
                    } else {
                        return node;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function getNextUp(node) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    __state = '5';
                    break;
                case '5':
                    node = getLeft(node);
                    if (node.up) {
                        return node;
                    } else {
                        __state = '5';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function createSkewerObj(visuals, vertical) {
            var skewer, id, _var2;
            _var2 = getNextId(visuals);
            id = 's' + _var2;
            skewer = {
                id: id,
                nodes: [],
                edges: [],
                coord: -1,
                boundary: 0,
                vertical: vertical
            };
            return skewer;
        }
        function findLink(links, low, high) {
            var _var2, _var3, link;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    _var2 = links;
                    _var3 = 0;
                    __state = '5';
                    break;
                case '4':
                    _var3++;
                    __state = '5';
                    break;
                case '5':
                    if (_var3 < _var2.length) {
                        link = _var2[_var3];
                        if (link.low === low) {
                            if (link.high === high) {
                                return link;
                            } else {
                                __state = '4';
                            }
                        } else {
                            __state = '4';
                        }
                    } else {
                        return undefined;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function createLevel(visuals) {
            var skewer;
            skewer = createSkewerObj(visuals, false);
            visuals.levels[skewer.id] = skewer;
            return skewer;
        }
        function positionDurations(visuals) {
            var edge, x, dur, metre, _var3, _var2, _var4, id, node;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    metre = visuals.config.metre;
                    _var3 = visuals.nodes;
                    _var2 = Object.keys(_var3);
                    _var4 = 0;
                    __state = '5';
                    break;
                case '4':
                    _var4++;
                    __state = '5';
                    break;
                case '5':
                    if (_var4 < _var2.length) {
                        id = _var2[_var4];
                        node = _var3[id];
                        dur = node.duration;
                        if (dur) {
                            edge = createEdge(visuals, dur, node, false);
                            edge.role = 'duration';
                            x = node.skewer.coord - node.w - dur.w - metre;
                            dur.skewer = createSkewer(visuals);
                            dur.skewer.coord = x;
                            dur.level = node.level;
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
        function buildConfig(userConfig) {
            var config, face;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    userConfig = userConfig || {};
                    face = 'Arial';
                    config = {
                        'font': '14px ' + face,
                        'headerFont': 'bold 18px ' + face,
                        'branchFont': 'bold 14px ' + face,
                        'imagePath': '',
                        'metre': 20,
                        'freeSnap': 5,
                        'triangleHeight': 20,
                        'padding': 10,
                        'maxWidth': 400,
                        'lineHeight': 1.3,
                        'maxHeight': 600,
                        'minHeight': 40,
                        'minWidth': 100,
                        'touchRadius': 5,
                        'socketTouchRadius': 15,
                        'yes': 'Yes',
                        'no': 'No',
                        'end': 'End',
                        'exit': 'Exit',
                        'branch': 'Branch',
                        'canSelect': true,
                        'drawZones': false,
                        'socketRadius': 10,
                        'socketBody': 'yellow',
                        'socketBorder': 'black',
                        'canvasLabels': '14px Arial',
                        'insertionPadding': 10,
                        'commentPadding': 10,
                        'parallelWidth': 5,
                        'canvasIcons': false,
                        'textFormat': 'plain',
                        'allowResize': true,
                        'centerContent': false,
                        'buildIconCore': buildIconCore,
                        'getClipboard': getClipboard,
                        'setClipboard': setClipboard,
                        'onSelectionChanged': onSelectionChanged
                    };
                    Object.assign(config, userConfig);
                    __state = '12';
                    break;
                case '11':
                    return config;
                case '12':
                    config.theme = copyTheme(userConfig.theme, config);
                    initAlignedNodes(config, userConfig);
                    initIconRender(config, userConfig);
                    initIconContent(config, userConfig);
                    __state = '11';
                    break;
                default:
                    return;
                }
            }
        }
        function connectLoops(visuals) {
            forType(visuals, 'loopend', findLoopStart);
            return;
        }
        function paint(widget) {
            var width, height, visuals, config, scale, ctx, factor, zoom, translate, tx, ty;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    zoom = widget.zoomFactor;
                    factor = html.getRetinaFactor();
                    visuals = widget.visuals;
                    config = visuals.config;
                    tx = visuals.scrollX;
                    ty = visuals.scrollY;
                    translate = 'translate(' + -tx + 'px, ' + -ty + 'px)';
                    scale = 'scale(' + zoom + ', ' + zoom + ')';
                    if (config.canvasIcons) {
                        __state = '9';
                    } else {
                        widget.contentContainer.style.transformOrigin = 'top left';
                        widget.contentContainer.style.transform = scale + ' ' + translate;
                        __state = '9';
                    }
                    break;
                case '9':
                    width = widget.width;
                    height = widget.height;
                    ctx = widget.canvas.getContext('2d');
                    visuals.ctx = ctx;
                    paintCore(widget, factor, zoom, -visuals.scrollX, -visuals.scrollY, width, height);
                    return;
                default:
                    return;
                }
            }
        }
        function initScrollPos(widget) {
            var visuals, savedOrigin, left, top, scroll, zoom, wwidth, wheight, _var2, _var3;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    visuals = widget.visuals;
                    zoom = widget.zoomFactor;
                    savedOrigin = widget.origins[widget.diagramId];
                    if (savedOrigin) {
                        extendVisualsBox(visuals, savedOrigin);
                        left = savedOrigin.x;
                        top = savedOrigin.y;
                        __state = '10';
                    } else {
                        if (widget.model.type === 'free') {
                            wwidth = widget.width / zoom;
                            wheight = widget.height / zoom;
                            if (wwidth > visuals.box.width) {
                                _var2 = Math.floor((wwidth - visuals.box.width) / 2);
                                left = visuals.box.left - _var2;
                                visuals.box.left = left;
                                visuals.box.width = visuals.box.right - left;
                                __state = '28';
                            } else {
                                left = visuals.box.left;
                                __state = '28';
                            }
                        } else {
                            left = visuals.box.left;
                            top = visuals.box.top;
                            __state = '10';
                        }
                    }
                    break;
                case '10':
                    scroll = setScroll(widget, left, top);
                    zoom = widget.zoomFactor;
                    widget.scrollable.style.width = visuals.box.width * zoom + 'px';
                    widget.scrollable.style.height = visuals.box.height * zoom + 'px';
                    copyScrollToScrollable(widget, scroll.x, scroll.y);
                    return;
                case '28':
                    if (wheight > visuals.box.height) {
                        _var3 = Math.floor((wheight - visuals.box.height) / 2);
                        top = visuals.box.top - _var3;
                        visuals.box.top = top;
                        visuals.box.height = visuals.box.bottom - top;
                        __state = '10';
                    } else {
                        top = visuals.box.top;
                        __state = '10';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function makeDownEdgeCore(visuals, head, tail, finalTarget) {
            var edge;
            edge = createEdge(visuals, head, tail, true);
            edge.finalTarget = finalTarget;
            edge.source = head;
            edge.target = tail;
            head.targets.push(edge);
            tail.sources.push(edge);
            return edge;
        }
        function isLeftDown(node) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (node.type === 'junction') {
                        if (node.left) {
                            if (node.up) {
                                __state = '9';
                            } else {
                                if (node.right) {
                                    __state = '9';
                                } else {
                                    if (node.down) {
                                        return true;
                                    } else {
                                        __state = '9';
                                    }
                                }
                            }
                        } else {
                            __state = '9';
                        }
                    } else {
                        __state = '9';
                    }
                    break;
                case '9':
                    return false;
                default:
                    return;
                }
            }
        }
        function createJunction(visuals, finalTarget) {
            var node;
            node = createNode(visuals, undefined, 'junction', '');
            node.finalTarget = finalTarget;
            return node;
        }
        function removeEdge(visuals, id) {
            var edge, head, tail;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    edge = visuals.edges[id];
                    head = edge.head;
                    tail = edge.tail;
                    if (edge.vertical) {
                        head.down = null;
                        tail.up = null;
                        __state = '10';
                    } else {
                        head.right = null;
                        tail.left = null;
                        __state = '10';
                    }
                    break;
                case '10':
                    remove(head.sources, edge);
                    remove(head.targets, edge);
                    remove(tail.sources, edge);
                    remove(tail.targets, edge);
                    edge.head = null;
                    edge.tail = null;
                    edge.source = null;
                    edge.target = null;
                    edge.finalTarget = null;
                    delete visuals.edges[id];
                    return;
                default:
                    return;
                }
            }
        }
        function makeLeftEdge(visuals, left, right, finalTarget) {
            var edge;
            edge = createEdge(visuals, left, right, false);
            edge.role = 'left';
            edge.finalTarget = finalTarget;
            edge.source = right;
            edge.target = left;
            right.targets.push(edge);
            left.sources.push(edge);
            return edge;
        }
        function parallelCompatible(node1, node2) {
            var length1, length2, par1, par2;
            length1 = node1.parallelStack.length;
            length2 = node2.parallelStack.length;
            if (length1 === length2) {
                if (length1) {
                    par1 = node1.parallelStack[length1 - 1];
                    par2 = node2.parallelStack[length1 - 1];
                    return par1 === par2;
                } else {
                    return true;
                }
            } else {
                return false;
            }
        }
        function createLeftUp(visuals, node2, finalTarget) {
            var result;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    result = createJunction(visuals, finalTarget);
                    node2.mountRight = result;
                    if (node2.subtype === 'parend') {
                        result.parallelStack = node2.parallelStack;
                        __state = '5';
                    } else {
                        result.parallelStack = node2.parallelStack.slice();
                        result.parallelStack.pop();
                        __state = '5';
                    }
                    break;
                case '5':
                    return result;
                default:
                    return;
                }
            }
        }
        function isLeftUp(node) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (node.type === 'junction') {
                        if (node.left) {
                            if (node.up) {
                                if (node.right) {
                                    __state = '9';
                                } else {
                                    if (node.down) {
                                        __state = '9';
                                    } else {
                                        return true;
                                    }
                                }
                            } else {
                                __state = '9';
                            }
                        } else {
                            __state = '9';
                        }
                    } else {
                        __state = '9';
                    }
                    break;
                case '9':
                    return false;
                default:
                    return;
                }
            }
        }
        function removeNode(visuals, id) {
            var node;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    node = visuals.nodes[id];
                    if (node.left) {
                        __state = '12';
                    } else {
                        if (node.up) {
                            __state = '12';
                        } else {
                            if (node.right) {
                                __state = '12';
                            } else {
                                if (node.down) {
                                    __state = '12';
                                } else {
                                    node.finalTarget = undefined;
                                    remove(node.skewer.nodes, node);
                                    remove(node.level.nodes, node);
                                    delete visuals.nodes[id];
                                    removeFromMultiDict(visuals.byType, node.type, node.id);
                                    __state = '1';
                                }
                            }
                        }
                    }
                    break;
                case '12':
                    throw new Error('removeNode: Node is connected: ' + id);
                default:
                    return;
                }
            }
        }
        function isRightUp(node) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (node.type === 'junction') {
                        if (node.left) {
                            __state = '9';
                        } else {
                            if (node.up) {
                                if (node.right) {
                                    if (node.down) {
                                        __state = '9';
                                    } else {
                                        return true;
                                    }
                                } else {
                                    __state = '9';
                                }
                            } else {
                                __state = '9';
                            }
                        }
                    } else {
                        __state = '9';
                    }
                    break;
                case '9':
                    return false;
                default:
                    return;
                }
            }
        }
        function turnDown(visuals, node1, node2) {
            var finalTarget, jun;
            finalTarget = node2;
            jun = createLeftDown(visuals, finalTarget);
            jun.parallelStack = node1.parallelStack.slice();
            makeRightEdge(visuals, node1, jun, finalTarget);
            return jun;
        }
        function splitVerticalUp(visuals, upEdge) {
            var upNode, downNode, finalTarget, jun;
            upNode = upEdge.head;
            downNode = upEdge.tail;
            finalTarget = upEdge.finalTarget;
            removeEdge(visuals, upEdge.id);
            jun = createJunction(visuals, finalTarget);
            makeUpEdge(visuals, jun, downNode, finalTarget);
            makeUpEdge(visuals, upNode, jun, finalTarget);
            return jun;
        }
        function isUglyMountUp(node1, node2) {
            var below;
            if (node1.type === 'junction') {
                return false;
            } else {
                below = getDown(node2.mountUp);
                if (below.type === 'junction') {
                    return true;
                } else {
                    return false;
                }
            }
        }
        function planRightStep(stack, node1, node2) {
            var step;
            step = planStep(stack, node1, node2);
            step.down = false;
            return step;
        }
        function planStep(stack, node1, node2) {
            var step, parallelStack, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    step = {
                        node1: node1,
                        node2: node2,
                        down: true,
                        back: false
                    };
                    if (node1.subtype === 'parbegin') {
                        parallelStack = node1.parallelStack.slice();
                        parallelStack.push(node1.id);
                        node2.parallelStack = parallelStack;
                        __state = '11';
                    } else {
                        node2.parallelStack = node1.parallelStack.slice();
                        __state = '11';
                    }
                    break;
                case '6':
                    stack.push(step);
                    return step;
                case '11':
                    if (node2.subtype === 'parend') {
                        node2.parallelStack.pop();
                        __state = '_item2';
                    } else {
                        __state = '_item2';
                    }
                    break;
                case '_item2':
                    _var2 = isBackLink(node1, node2);
                    if (_var2) {
                        step.back = true;
                        __state = '6';
                    } else {
                        __state = '6';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function createTempEdge(visuals, node, leftBottom) {
            var leftTop, parTop, parNext, tmpJun, edge;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    leftTop = goUp(node);
                    parTop = getLeft(leftTop);
                    parNext = getDown(parTop);
                    if (parNext.type == 'case') {
                        parNext = getDown(parNext);
                        __state = '6';
                    } else {
                        __state = '6';
                    }
                    break;
                case '6':
                    tmpJun = splitVertical(visuals, parNext);
                    edge = createEdge(visuals, tmpJun, leftBottom, false);
                    visuals.tempEdges.push(edge);
                    return;
                default:
                    return;
                }
            }
        }
        function buildArrowUp(visuals, loop) {
            var top, arrow, next1;
            top = createJunction(visuals, loop.id);
            arrow = createEdge(visuals, loop, top, false);
            arrow.role = 'arrow';
            next1 = loop.next[0];
            makeDownEdge(visuals, loop, next1, next1);
            return next1;
        }
        function buildManhattan(visuals, startNode) {
            var stack, step, node1, node2, mountUp, mountRight, jun2, jun3, top, bottom, _var2, _var3;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    stack = [];
                    planNextSteps(visuals, stack, startNode);
                    __state = '5';
                    break;
                case '4':
                    return;
                case '5':
                    if (stack.length === 0) {
                        __state = '4';
                    } else {
                        step = stack.pop();
                        node1 = step.node1;
                        node2 = step.node2;
                        if (step.back) {
                            if (step.down) {
                                __state = '8';
                            } else {
                                __state = '9';
                            }
                        } else {
                            if (step.down) {
                                __state = '17';
                            } else {
                                node1 = turnDown(visuals, node1, node2);
                                __state = '17';
                            }
                        }
                    }
                    break;
                case '6':
                    makeDownEdge(visuals, node1, node2, node2);
                    __state = '10';
                    break;
                case '7':
                    if (mountUp) {
                        _var3 = parallelCompatible(node1, mountUp);
                        if (_var3) {
                            _var2 = isUglyMountUp(node1, node2);
                            if (_var2) {
                                node2.mountUp = null;
                                __state = '27';
                            } else {
                                makeDownEdge(visuals, node1, mountUp, node2);
                                if (mountUp === node2.mountUp) {
                                    node2.mountUp = null;
                                    __state = '5';
                                } else {
                                    __state = '5';
                                }
                            }
                        } else {
                            __state = '27';
                        }
                    } else {
                        __state = '27';
                    }
                    break;
                case '8':
                    if (node2.rightEdge) {
                        jun2 = splitRight(visuals, node2.rightEdge);
                        makeDownEdge(visuals, node1, jun2, node2);
                        __state = '5';
                    } else {
                        turn180up(visuals, node1, node2);
                        __state = '5';
                    }
                    break;
                case '9':
                    top = getRight(node2);
                    if (node2.upEdge) {
                        bottom = splitVerticalUp(visuals, node2.upEdge);
                        __state = '38';
                    } else {
                        bottom = createJunction(visuals, node2);
                        makeUpEdge(visuals, top, bottom, node2);
                        __state = '38';
                    }
                    break;
                case '10':
                    planNextSteps(visuals, stack, node2);
                    __state = '5';
                    break;
                case '17':
                    if (node2.prev.length === 1) {
                        __state = '6';
                    } else {
                        if (node2.up) {
                            mountUp = node2.mountUp;
                            mountRight = node2.mountRight;
                            __state = '7';
                        } else {
                            __state = '6';
                        }
                    }
                    break;
                case '27':
                    jun2 = createLeftUp(visuals, node2, node2);
                    makeDownEdge(visuals, node1, jun2, node2);
                    if (mountRight) {
                        makeLeftEdge(visuals, mountRight, jun2, node2);
                        __state = '5';
                    } else {
                        jun3 = splitVertical(visuals, node2);
                        makeLeftEdge(visuals, jun3, jun2, node2);
                        __state = '5';
                    }
                    break;
                case '38':
                    node2.rightEdge = makeRightEdge(visuals, node1, bottom, node2);
                    __state = '5';
                    break;
                default:
                    return;
                }
            }
        }
        function layoutSelect(visuals, stack, select) {
            var node, left, jun, _var2, _var3, caseNode, i, _var4;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    select.cases = [];
                    node = select.next[0];
                    __state = '10';
                    break;
                case '4':
                    return;
                case '5':
                    left = null;
                    _var2 = select.cases;
                    _var3 = 0;
                    __state = '13';
                    break;
                case '6':
                    i = select.cases.length - 1;
                    __state = '22';
                    break;
                case '10':
                    node.select = select;
                    select.cases.push(node);
                    if (node.next.length === 2) {
                        node = node.next[1];
                        __state = '10';
                    } else {
                        __state = '5';
                    }
                    break;
                case '13':
                    if (_var3 < _var2.length) {
                        caseNode = _var2[_var3];
                        jun = createJunction(visuals, undefined);
                        makeDownEdgeCore(visuals, jun, caseNode, undefined);
                        if (left) {
                            createEdge(visuals, left, jun, false);
                            __state = '19';
                        } else {
                            __state = '19';
                        }
                    } else {
                        _var4 = getUp(select.cases[0]);
                        makeDownEdgeCore(visuals, select, _var4, undefined);
                        __state = '6';
                    }
                    break;
                case '19':
                    left = jun;
                    _var3++;
                    __state = '13';
                    break;
                case '22':
                    if (i >= 0) {
                        node = select.cases[i];
                        planStep(stack, node, node.next[0]);
                        i--;
                        __state = '22';
                    } else {
                        __state = '4';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function planNextSteps(visuals, stack, node) {
            var next1, next2, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    _var2 = node.type;
                    if (_var2 === 'select') {
                        layoutSelect(visuals, stack, node);
                        __state = '1';
                    } else {
                        if (_var2 === 'question') {
                            next1 = node.next[0];
                            next2 = node.next[1];
                            planRightStep(stack, node, next2);
                            planStep(stack, node, next1);
                            __state = '1';
                        } else {
                            if (_var2 === 'arrow-loop') {
                                next1 = buildArrowUp(visuals, node);
                                planNextSteps(visuals, stack, next1);
                                __state = '1';
                            } else {
                                if (_var2 === 'junction') {
                                    if (node.subtype === 'parbegin') {
                                        layoutParBlock(visuals, stack, node);
                                        __state = '1';
                                    } else {
                                        __state = '15';
                                    }
                                } else {
                                    __state = '15';
                                }
                            }
                        }
                    }
                    break;
                case '15':
                    if (node.next.length === 0) {
                        __state = '1';
                    } else {
                        next1 = node.next[0];
                        planStep(stack, node, next1);
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function makeDownEdge(visuals, head, tail, finalTarget) {
            var edge, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    edge = makeDownEdgeCore(visuals, head, tail, finalTarget);
                    _var2 = isLeftDown(head);
                    if (_var2) {
                        finalTarget.mountUp = head;
                        __state = '6';
                    } else {
                        __state = '6';
                    }
                    break;
                case '6':
                    edge.role = 'down';
                    return edge;
                default:
                    return;
                }
            }
        }
        function makeRightLoopEdge(visuals, left, right, finalTarget) {
            var edge;
            edge = createEdge(visuals, left, right, false);
            edge.role = 'right-loop';
            edge.finalTarget = finalTarget;
            edge.source = left;
            edge.target = right;
            left.targets.push(edge);
            right.sources.push(edge);
            finalTarget.rightEdge = edge;
            return edge;
        }
        function makeRightEdge(visuals, left, right, finalTarget) {
            var edge;
            edge = createEdge(visuals, left, right, false);
            edge.role = 'right';
            edge.finalTarget = finalTarget;
            edge.source = left;
            edge.target = right;
            left.targets.push(edge);
            right.sources.push(edge);
            return edge;
        }
        function createLeftDown(visuals, finalTarget) {
            var result;
            result = createJunction(visuals, finalTarget);
            return result;
        }
        function turn180up(visuals, node1, node2) {
            var top, bottom, left;
            top = getRight(node2);
            bottom = createJunction(visuals, node2);
            makeUpEdge(visuals, top, bottom, node2);
            left = createJunction(visuals, node2);
            makeDownEdge(visuals, node1, left, node2);
            makeRightLoopEdge(visuals, left, bottom, node2);
            createTempEdge(visuals, node1, left);
            return;
        }
        function isRightT(node) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (node.type === 'junction') {
                        if (node.left) {
                            __state = '9';
                        } else {
                            if (node.up) {
                                if (node.right) {
                                    if (node.down) {
                                        return true;
                                    } else {
                                        __state = '9';
                                    }
                                } else {
                                    __state = '9';
                                }
                            } else {
                                __state = '9';
                            }
                        }
                    } else {
                        __state = '9';
                    }
                    break;
                case '9':
                    return false;
                default:
                    return;
                }
            }
        }
        function isBackLink(lower, upper) {
            var _var2, _var3;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    _var2 = isArrowLoop(upper);
                    if (_var2) {
                        _var3 = contains(upper.aprev, lower);
                        if (_var3) {
                            return true;
                        } else {
                            __state = '6';
                        }
                    } else {
                        __state = '6';
                    }
                    break;
                case '6':
                    return false;
                default:
                    return;
                }
            }
        }
        function splitRight(visuals, rightEdge) {
            var leftNode, rightNode, finalTarget, role, jun, leftPart;
            leftNode = rightEdge.head;
            rightNode = rightEdge.tail;
            finalTarget = rightEdge.finalTarget;
            role = rightEdge.role;
            removeEdge(visuals, rightEdge.id);
            jun = createJunction(visuals, finalTarget);
            leftPart = makeRightEdge(visuals, leftNode, jun, finalTarget);
            leftPart.role = role;
            makeRightLoopEdge(visuals, jun, rightNode, finalTarget);
            return jun;
        }
        function makeUpEdge(visuals, head, tail, finalTarget) {
            var edge;
            edge = createEdge(visuals, head, tail, true);
            edge.finalTarget = finalTarget;
            edge.source = tail;
            edge.target = head;
            tail.targets.push(edge);
            head.sources.push(edge);
            edge.role = 'up';
            finalTarget.upEdge = edge;
            return edge;
        }
        function layoutParBlock(visuals, stack, firstPar) {
            var edge, left, right, path, down, i;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    firstPar.paths = [firstPar];
                    left = firstPar;
                    __state = '30';
                    break;
                case '30':
                    right = left.next[1];
                    firstPar.paths.push(right);
                    edge = createEdge(visuals, left, right, false);
                    edge.role = 'parceiling';
                    left = right;
                    if (left.two) {
                        __state = '30';
                    } else {
                        __state = '34';
                    }
                    break;
                case '33':
                    return;
                case '34':
                    i = firstPar.paths.length - 1;
                    __state = '39';
                    break;
                case '39':
                    if (i >= 0) {
                        path = firstPar.paths[i];
                        down = path.next[0];
                        planStep(stack, path, down);
                        i--;
                        __state = '39';
                    } else {
                        __state = '33';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function splitVertical(visuals, node) {
            var upEdge, upNode, finalTarget, jun;
            upEdge = node.up;
            upNode = upEdge.head;
            finalTarget = upEdge.finalTarget;
            removeEdge(visuals, upEdge.id);
            jun = createJunction(visuals, finalTarget);
            makeDownEdge(visuals, upNode, jun, finalTarget);
            makeDownEdge(visuals, jun, node, finalTarget);
            return jun;
        }
        function goUp(node) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    __state = '6';
                    break;
                case '6':
                    if (node.up) {
                        node = getUp(node);
                        __state = '6';
                    } else {
                        return node;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function getRight(node) {
            return node.right.tail;
        }
        function getNode(visuals, nodeId) {
            return visuals.nodes[nodeId];
        }
        function goDown(node) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    __state = '6';
                    break;
                case '6':
                    if (node.down) {
                        node = getDown(node);
                        __state = '6';
                    } else {
                        return node;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function getUp(node) {
            return node.up.head;
        }
        function createEdge(visuals, head, tail, vertical) {
            var id, edge, _var2, _var3, _var4, _var5, _var6;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    _var2 = getNextId(visuals);
                    id = 'e' + _var2;
                    edge = {
                        id: id,
                        head: head,
                        tail: tail,
                        vertical: vertical,
                        links: []
                    };
                    if (vertical) {
                        if (head.down) {
                            _var6 = Error('head.down is busy');
                            throw _var6;
                        } else {
                            if (tail.up) {
                                _var5 = Error('tail.up is busy');
                                throw _var5;
                            } else {
                                head.down = edge;
                                tail.up = edge;
                                __state = '16';
                            }
                        }
                    } else {
                        if (head.right) {
                            _var4 = Error('head.right is busy');
                            throw _var4;
                        } else {
                            if (tail.left) {
                                _var3 = Error('tail.left is busy');
                                throw _var3;
                            } else {
                                head.right = edge;
                                tail.left = edge;
                                __state = '16';
                            }
                        }
                    }
                    break;
                case '16':
                    visuals.edges[id] = edge;
                    return edge;
                default:
                    return;
                }
            }
        }
        function getDown(node) {
            return node.down.tail;
        }
        function createNode(visuals, itemId, type, content, id) {
            var node, _var2, _var3;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (id) {
                        __state = '3';
                    } else {
                        _var3 = getNextId(visuals);
                        id = 'n' + _var3;
                        __state = '3';
                    }
                    break;
                case '3':
                    node = {
                        id: id,
                        itemId: itemId,
                        type: type,
                        content: content,
                        w: 0,
                        h: 0,
                        next: [],
                        prev: [],
                        aprev: [],
                        targets: [],
                        sources: [],
                        parallelStack: [],
                        loops: {}
                    };
                    visuals.nodes[id] = node;
                    if (itemId) {
                        visuals.itemsToNodes[itemId] = id;
                        __state = '10';
                    } else {
                        __state = '10';
                    }
                    break;
                case '9':
                    return node;
                case '10':
                    addToMultiDict(visuals.byType, node.type, node.id);
                    _var2 = node.type;
                    if (_var2 === 'header') {
                        visuals.header = node;
                        __state = '9';
                    } else {
                        if (_var2 === 'end') {
                            visuals.end = node;
                            __state = '9';
                        } else {
                            __state = '9';
                        }
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function getEdge(visuals, edgeId) {
            return visuals.edges[edgeId];
        }
        function getLeft(node) {
            return node.left.head;
        }
        function getSelectedPrims(widget) {
            var prims, node, element, visuals, prim, _var3, _var2, _var4, id, elType;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    visuals = widget.visuals;
                    prims = [];
                    _var3 = widget.selection.prims;
                    _var2 = Object.keys(_var3);
                    _var4 = 0;
                    __state = '7';
                    break;
                case '6':
                    _var4++;
                    __state = '7';
                    break;
                case '7':
                    if (_var4 < _var2.length) {
                        id = _var2[_var4];
                        elType = _var3[id];
                        if (elType === 'node') {
                            node = getNode(visuals, id);
                            prim = nodeToVisualItem(widget, node);
                            __state = '12';
                        } else {
                            if (elType === 'free') {
                                element = getFree(visuals, id);
                                prim = freeToVisualItem(widget, element);
                                __state = '12';
                            } else {
                                __state = '6';
                            }
                        }
                    } else {
                        return prims;
                    }
                    break;
                case '12':
                    prims.push(prim);
                    __state = '6';
                    break;
                default:
                    return;
                }
            }
        }
        function buildVisualsForEdit(widget) {
            var visuals, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    resetContainer(widget);
                    visuals = buildVisuals(widget);
                    if (widget.model.type === 'drakon') {
                        precacheEdgesLinks(visuals);
                        buildSubspaces(visuals);
                        __state = '4';
                    } else {
                        __state = '4';
                    }
                    break;
                case '4':
                    widget.visuals = visuals;
                    initScrollPos(widget);
                    _var2 = Object.keys(visuals.fonts);
                    return _var2;
                default:
                    return;
                }
            }
        }
        function addEdgeSubRecord(records, edge) {
            var targetId, record;
            targetId = edge.finalTarget.itemId;
            record = {
                type: 'edge',
                element: edge,
                targetId: targetId,
                id: edge.id
            };
            records[targetId] = record;
            return;
        }
        function OuterCrawler_create(visuals, sub) {
            var tail, next, head, leftMost, _var2, edge, output;
            var me = {
                state: '66',
                type: 'OuterCrawler'
            };
            function _main_OuterCrawler(__resolve, __reject) {
                try {
                    while (true) {
                        switch (me.state) {
                        case '2':
                            me.state = '10';
                            return;
                        case '4':
                            me.state = undefined;
                            __resolve({ ok: true });
                            return;
                        case '5':
                            me.state = '47';
                            return;
                        case '6':
                            me.state = '40';
                            return;
                        case '7':
                            me.state = '42';
                            return;
                        case '8':
                            me.state = '55';
                            return;
                        case '9':
                            me.state = '61';
                            return;
                        case '11':
                            addArrowPad(sub, edge);
                            tail = edge.tail;
                            if (tail.subtype === 'parbegin') {
                                addEdgeToSub(sub, edge);
                                next = crawlParallel(visuals, tail);
                                output.next = next.down;
                                me.state = '2';
                            } else {
                                if (tail.type === 'select') {
                                    addEdgeToSub(sub, edge);
                                    next = crawlSelect(visuals, tail);
                                    output.next = next.down;
                                    me.state = '2';
                                } else {
                                    if (tail.right) {
                                        _var2 = tail.type;
                                        if (_var2 === 'arrow-loop') {
                                            addEdgeToSub(sub, edge);
                                            planSpace(me, tail);
                                            output.next = tail.right;
                                            me.state = '6';
                                        } else {
                                            if (_var2 === 'question') {
                                                addEdgeToSub(sub, edge);
                                                planSpace(me, tail);
                                                output.next = tail.right;
                                                me.state = '8';
                                            } else {
                                                leftMost = goLeft(tail);
                                                if (leftMost.subtype === 'parend') {
                                                    markParFloor(me, tail);
                                                    me.state = '36';
                                                } else {
                                                    me.state = '36';
                                                }
                                            }
                                        }
                                    } else {
                                        if (tail.down) {
                                            addEdgeToSub(sub, edge);
                                            if (tail.type === 'address') {
                                                markFloor(me, tail);
                                                output.next = undefined;
                                                me.state = '4';
                                            } else {
                                                output.next = tail.down;
                                                me.state = '2';
                                            }
                                        } else {
                                            addEdgeToSub(sub, edge);
                                            if (tail.left) {
                                                addLowerCorner(sub, tail);
                                                leftMost = goLeft(tail);
                                                if (leftMost.subtype === 'parend') {
                                                    me.state = '25';
                                                } else {
                                                    output.next = tail.left;
                                                    me.state = '9';
                                                }
                                            } else {
                                                me.state = '25';
                                            }
                                        }
                                    }
                                }
                            }
                            break;
                        case '25':
                            output.next = undefined;
                            me.state = '4';
                            break;
                        case '36':
                            output.next = undefined;
                            me.state = '4';
                            break;
                        case '41':
                            output.next = edge.tail.down;
                            me.state = '7';
                            break;
                        case '43':
                            tail = edge.tail;
                            if (tail.down) {
                                output.next = tail.down;
                                me.state = '7';
                            } else {
                                output.next = tail.left;
                                me.state = '5';
                            }
                            break;
                        case '48':
                            head = edge.head;
                            if (head.left) {
                                output.next = head.left;
                                me.state = '5';
                            } else {
                                if (head.down) {
                                    head.zoned = true;
                                    edge.inner = sub;
                                    output.next = head.down;
                                    me.state = '2';
                                } else {
                                    output.next = markInnerSide(me, head);
                                    me.state = '2';
                                }
                            }
                            break;
                        case '56':
                            tail = edge.tail;
                            if (tail.up) {
                                output.next = undefined;
                                me.state = '4';
                            } else {
                                addUpperCorner(sub, tail);
                                output.next = tail.down;
                                me.state = '2';
                            }
                            break;
                        case '62':
                            head = edge.head;
                            if (head.down) {
                                output.next = head.down;
                                me.state = '2';
                            } else {
                                output.next = head.left;
                                me.state = '9';
                            }
                            break;
                        case '66':
                            me.sub = sub;
                            me.visuals = visuals;
                            me.side = 'outer';
                            me.plan = [];
                            me.state = '2';
                            break;
                        default:
                            return;
                        }
                    }
                } catch (ex) {
                    me.state = undefined;
                    __reject(ex);
                }
            }
            me.run = function () {
                me.run = undefined;
                return new Promise(function (__resolve, __reject) {
                    me.onEdge = function (_edge_, _output_) {
                        edge = _edge_;
                        output = _output_;
                        switch (me.state) {
                        case '10':
                            me.state = '11';
                            _main_OuterCrawler(__resolve, __reject);
                            break;
                        case '40':
                            me.state = '41';
                            _main_OuterCrawler(__resolve, __reject);
                            break;
                        case '42':
                            me.state = '43';
                            _main_OuterCrawler(__resolve, __reject);
                            break;
                        case '47':
                            me.state = '48';
                            _main_OuterCrawler(__resolve, __reject);
                            break;
                        case '55':
                            me.state = '56';
                            _main_OuterCrawler(__resolve, __reject);
                            break;
                        case '61':
                            me.state = '62';
                            _main_OuterCrawler(__resolve, __reject);
                            break;
                        default:
                            return;
                        }
                    };
                    _main_OuterCrawler(__resolve, __reject);
                });
            };
            return me;
        }
        function OuterCrawler(visuals, sub) {
            var __obj = OuterCrawler_create(visuals, sub);
            return __obj.run();
        }
        function drawOuterSubItem(record, ctx, color) {
            var edge;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (record.type === 'node') {
                        drawSubNode(record.element, ctx, color);
                        __state = '1';
                    } else {
                        edge = record.element;
                        if (edge.vertical) {
                            drawVerticalSubEdge(edge, 0, ctx, color);
                            __state = '1';
                        } else {
                            drawHorizontalSubEdge(edge, 0, ctx, color);
                            __state = '1';
                        }
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function crawl(crawler, startEdge) {
            var edge, step, _var2, _var3, node;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    step = {};
                    edge = startEdge;
                    __state = '9';
                    break;
                case '4':
                    return;
                case '5':
                    _var2 = crawler.plan;
                    _var3 = 0;
                    __state = '13';
                    break;
                case '9':
                    edge[crawler.side] = crawler.sub;
                    crawler.onEdge(edge, step);
                    edge = step.next;
                    if (edge) {
                        __state = '9';
                    } else {
                        __state = '5';
                    }
                    break;
                case '13':
                    if (_var3 < _var2.length) {
                        node = _var2[_var3];
                        createQSubspace(crawler, node);
                        _var3++;
                        __state = '13';
                    } else {
                        __state = '4';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function addEdgeToSub(sub, edge) {
            var targetId, existing;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    targetId = edge.finalTarget.itemId;
                    existing = sub.outer[targetId];
                    if (existing) {
                        if (existing.type == 'edge') {
                            __state = '8';
                        } else {
                            __state = '1';
                        }
                    } else {
                        __state = '8';
                    }
                    break;
                case '8':
                    addEdgeSubRecord(sub.outer, edge);
                    __state = '1';
                    break;
                default:
                    return;
                }
            }
        }
        function createInner(visuals, sub) {
            var crawler;
            crawler = InnerCrawler_create(visuals, sub);
            crawler.run();
            crawler.down();
            return crawler;
        }
        function crawlSelect(visuals, select) {
            var cases, left, right, jun, sub, outer, inner, i;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    cases = select.cases;
                    i = 0;
                    __state = '5';
                    break;
                case '4':
                    i++;
                    __state = '5';
                    break;
                case '5':
                    if (i < cases.length - 1) {
                        left = cases[i];
                        right = cases[i + 1];
                        jun = getUp(left);
                        if (jun.zoned) {
                            __state = '4';
                        } else {
                            sub = createSubspace(visuals);
                            outer = createOuter(visuals, sub);
                            inner = createInner(visuals, sub);
                            crawl(outer, left.down);
                            crawl(inner, right.down);
                            __state = '4';
                        }
                    } else {
                        return cases[cases.length - 1];
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function markInnerSide(crawler, lower) {
            var upper, n2, crawler2, question, result, leftJun, leftCase;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    upper = lower;
                    __state = '9';
                    break;
                case '4':
                    return result;
                case '5':
                    leftJun = getLeft(upper);
                    leftCase = getDown(leftJun);
                    leftJun.zoned = true;
                    result = leftCase.down;
                    __state = '4';
                    break;
                case '6':
                    n2 = getDown(upper);
                    crawler2 = createInner(crawler.visuals, crawler.sub);
                    if (n2.type === 'case') {
                        crawl(crawler2, n2.down);
                        __state = '5';
                    } else {
                        crawl(crawler2, upper.down);
                        __state = '7';
                    }
                    break;
                case '7':
                    if (upper.up) {
                        upper.left.inner = crawler.sub;
                        __state = '18';
                    } else {
                        __state = '18';
                    }
                    break;
                case '9':
                    upper = getUp(upper);
                    if (upper.left) {
                        __state = '6';
                    } else {
                        __state = '9';
                    }
                    break;
                case '18':
                    question = goLeft(upper);
                    question.zoned = true;
                    result = question.down;
                    __state = '4';
                    break;
                default:
                    return;
                }
            }
        }
        function addNodeSubRecord(records, node) {
            var targetId, record;
            targetId = node.finalTarget.itemId;
            record = {
                type: 'node',
                element: node,
                targetId: targetId,
                id: node.id
            };
            records[targetId] = record;
            return;
        }
        function drawInnerSubItem(record, ctx, color) {
            var edge;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (record.type === 'node') {
                        __state = '1';
                    } else {
                        edge = record.element;
                        if (edge.vertical) {
                            drawVerticalSubEdge(edge, -10, ctx, color);
                            __state = '1';
                        } else {
                            drawHorizontalSubEdge(edge, -10, ctx, color);
                            __state = '1';
                        }
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function createSubspace(visuals) {
            var sub, _var2;
            _var2 = makeRandomColor();
            sub = {
                id: visuals.subs.length + 1,
                color: _var2,
                outer: {},
                inner: {},
                outerArrPads: {}
            };
            visuals.subs.push(sub);
            return sub;
        }
        function addArrowPad(sub, edge) {
            var targetId;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (edge.role === 'down') {
                        targetId = edge.finalTarget.itemId;
                        sub.outerArrPads[targetId] = edge;
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
        function markFloor(crawler, address) {
            var sub, bottom, next, floor;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    sub = crawler.sub;
                    bottom = goDown(address);
                    next = getNextBranch(crawler.visuals, address.branch);
                    floor = bottom.right;
                    if (floor) {
                        floor.finalTarget = next;
                        floor.outer = sub;
                        floor.noBranch = address.itemId;
                        addEdgeSubRecord(sub.outer, floor);
                        __state = '1';
                    } else {
                        bottom.finalTarget = next;
                        bottom.noBranch = address.itemId;
                        addNodeSubRecord(sub.outer, bottom);
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function planSpace(crawler, node) {
            crawler.plan.push(node);
            return;
        }
        function createQSubspace(crawler, question) {
            var sub, inner, outer;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (question.zoned) {
                        __state = '1';
                    } else {
                        sub = createSubspace(crawler.visuals);
                        outer = createOuter(crawler.visuals, sub);
                        inner = createInnerRight(crawler.visuals, sub);
                        crawl(outer, question.down);
                        crawl(inner, question.right);
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function drawVerticalSubEdge(edge, shift, ctx, color) {
            var size;
            size = 10;
            ctx.fillStyle = color;
            ctx.fillRect(edge.head.x + shift, edge.head.y, size, edge.tail.y - edge.head.y);
            return;
        }
        function createOuter(visuals, sub) {
            var crawler;
            crawler = OuterCrawler_create(visuals, sub);
            crawler.run();
            return crawler;
        }
        function getNextBranch(visuals, branchNode) {
            var branches, index, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    branches = visuals.branches;
                    if (branchNode.branchId === branches.length) {
                        index = 0;
                        __state = '_item2';
                    } else {
                        index = branchNode.branchId;
                        __state = '_item2';
                    }
                    break;
                case '_item2':
                    _var2 = getNode(visuals, branches[index]);
                    return _var2;
                default:
                    return;
                }
            }
        }
        function drawSubspaces(visuals, ctx) {
            var _var8, _var9, sub, _var3, _var2, _var4, itemId, record, _var6, _var5, _var7;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    _var8 = visuals.subs;
                    _var9 = 0;
                    __state = '7';
                    break;
                case '7':
                    if (_var9 < _var8.length) {
                        sub = _var8[_var9];
                        _var3 = sub.inner;
                        _var2 = Object.keys(_var3);
                        _var4 = 0;
                        __state = '9';
                    } else {
                        return;
                    }
                    break;
                case '9':
                    if (_var4 < _var2.length) {
                        itemId = _var2[_var4];
                        record = _var3[itemId];
                        drawInnerSubItem(record, ctx, sub.color);
                        _var4++;
                        __state = '9';
                    } else {
                        _var6 = sub.outer;
                        _var5 = Object.keys(_var6);
                        _var7 = 0;
                        __state = '14';
                    }
                    break;
                case '14':
                    if (_var7 < _var5.length) {
                        itemId = _var5[_var7];
                        record = _var6[itemId];
                        drawOuterSubItem(record, ctx, sub.color);
                        _var7++;
                        __state = '14';
                    } else {
                        _var9++;
                        __state = '7';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function InnerCrawler_create(visuals, sub) {
            var tail, left, caseNode, edge, output, _var2;
            var me = {
                state: '6',
                type: 'InnerCrawler'
            };
            function _main_InnerCrawler(__resolve, __reject) {
                try {
                    while (true) {
                        switch (me.state) {
                        case '2':
                            me.state = '13';
                            return;
                        case '3':
                            tail = edge.tail;
                            if (tail.down) {
                                addInnerEdgeToSub(sub, edge);
                                if (tail.subtype === 'parbegin') {
                                    output.next = skipParBlock(tail);
                                    me.state = '2';
                                } else {
                                    if (tail.type === 'select') {
                                        _var2 = getDown(tail);
                                        caseNode = getDown(_var2);
                                        output.next = caseNode.down;
                                        me.state = '2';
                                    } else {
                                        if (tail.type === 'address') {
                                            me.state = '52';
                                        } else {
                                            if (tail.left) {
                                                if (tail.left.role === 'duration') {
                                                    me.state = '27';
                                                } else {
                                                    me.state = '52';
                                                }
                                            } else {
                                                me.state = '27';
                                            }
                                        }
                                    }
                                }
                            } else {
                                if (tail.left) {
                                    left = getLeft(tail);
                                    if (left.type === 'question') {
                                        addInnerEdgeToSub(sub, edge);
                                        output.next = undefined;
                                        me.state = '4';
                                    } else {
                                        if (edge.role === 'up') {
                                            addInnerEdgeToSub(sub, edge);
                                            me.state = '33';
                                        } else {
                                            me.state = '33';
                                        }
                                    }
                                } else {
                                    addInnerEdgeToSub(sub, edge);
                                    output.next = undefined;
                                    me.state = '4';
                                }
                            }
                            break;
                        case '4':
                            me.state = undefined;
                            __resolve({ ok: true });
                            return;
                        case '5':
                            me.state = '42';
                            return;
                        case '6':
                            me.sub = sub;
                            me.visuals = visuals;
                            me.side = 'inner';
                            me.plan = [];
                            me.state = '11';
                            return;
                        case '12':
                            me.state = '43';
                            return;
                        case '27':
                            output.next = tail.down;
                            me.state = '2';
                            break;
                        case '33':
                            output.next = tail.left;
                            me.state = '5';
                            break;
                        case '40':
                            addInnerEdgeToSub(sub, edge);
                            output.next = undefined;
                            me.state = '4';
                            break;
                        case '44':
                            tail = edge.tail;
                            if (tail.right) {
                                output.next = tail.right;
                                me.state = '12';
                            } else {
                                output.next = tail.down;
                                me.state = '2';
                            }
                            break;
                        case '52':
                            output.next = undefined;
                            me.state = '4';
                            break;
                        default:
                            return;
                        }
                    }
                } catch (ex) {
                    me.state = undefined;
                    __reject(ex);
                }
            }
            me.run = function () {
                me.run = undefined;
                return new Promise(function (__resolve, __reject) {
                    me.down = function () {
                        switch (me.state) {
                        case '11':
                            me.state = '2';
                            _main_InnerCrawler(__resolve, __reject);
                            break;
                        default:
                            return;
                        }
                    };
                    me.right = function () {
                        switch (me.state) {
                        case '11':
                            me.state = '12';
                            _main_InnerCrawler(__resolve, __reject);
                            break;
                        default:
                            return;
                        }
                    };
                    me.onEdge = function (_edge_, _output_) {
                        edge = _edge_;
                        output = _output_;
                        switch (me.state) {
                        case '13':
                            me.state = '3';
                            _main_InnerCrawler(__resolve, __reject);
                            break;
                        case '42':
                            me.state = '40';
                            _main_InnerCrawler(__resolve, __reject);
                            break;
                        case '43':
                            me.state = '44';
                            _main_InnerCrawler(__resolve, __reject);
                            break;
                        default:
                            return;
                        }
                    };
                    _main_InnerCrawler(__resolve, __reject);
                });
            };
            return me;
        }
        function InnerCrawler(visuals, sub) {
            var __obj = InnerCrawler_create(visuals, sub);
            return __obj.run();
        }
        function drawHorizontalSubEdge(edge, shift, ctx, color) {
            var size;
            size = 10;
            ctx.fillStyle = color;
            ctx.fillRect(edge.head.x, edge.head.y + shift, edge.tail.x - edge.head.x, size);
            return;
        }
        function createInnerRight(visuals, sub) {
            var crawler;
            crawler = InnerCrawler_create(visuals, sub);
            crawler.run();
            crawler.right();
            return crawler;
        }
        function addUpperCorner(sub, node) {
            addNodeSubRecord(sub.outer, node);
            return;
        }
        function addLowerCorner(sub, node) {
            var targetId, existing, oldNode;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    targetId = node.finalTarget.itemId;
                    existing = sub.outer[targetId];
                    if (existing) {
                        if (existing.type === 'edge') {
                            __state = '5';
                        } else {
                            oldNode = existing.element;
                            if (oldNode.down) {
                                __state = '1';
                            } else {
                                __state = '5';
                            }
                        }
                    } else {
                        __state = '5';
                    }
                    break;
                case '5':
                    addNodeSubRecord(sub.outer, node);
                    __state = '1';
                    break;
                default:
                    return;
                }
            }
        }
        function markParFloor(crawler, bottom) {
            var sub, floor;
            sub = crawler.sub;
            floor = bottom.right;
            floor.finalTarget = bottom.up.finalTarget;
            floor.inner = sub;
            addEdgeSubRecord(sub.inner, floor);
            return;
        }
        function addInnerEdgeToSub(sub, edge) {
            addEdgeSubRecord(sub.inner, edge);
            return;
        }
        function skipParBlock(node) {
            var counter, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    counter = 1;
                    __state = '13';
                    break;
                case '13':
                    node = getDown(node);
                    _var2 = node.subtype;
                    if (_var2 === 'parend') {
                        counter--;
                        if (counter === 0) {
                            return node.down;
                        } else {
                            __state = '13';
                        }
                    } else {
                        if (_var2 === 'parbegin') {
                            counter++;
                            __state = '13';
                        } else {
                            __state = '13';
                        }
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function crawlParallel(visuals, firstPar) {
            var par, down, parend, sub, outer;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    par = firstPar;
                    __state = '17';
                    break;
                case '17':
                    sub = createSubspace(visuals);
                    outer = createOuter(visuals, sub);
                    crawl(outer, par.down);
                    if (par.two) {
                        par = par.next[1];
                        __state = '17';
                    } else {
                        down = goDown(par);
                        parend = goLeft(down);
                        return parend;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function drawSubNode(node, ctx, color) {
            var size;
            size = 20;
            ctx.fillStyle = color;
            ctx.fillRect(node.x - size / 2, node.y - size / 2, size, size);
            return;
        }
        function ensureSelectedOne(widget, primId) {
            var nodes, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    _var2 = isSelected(widget, primId);
                    if (_var2) {
                        nodes = getNodesFromSelection(widget);
                        if (nodes.length > 1) {
                            return false;
                        } else {
                            __state = '3';
                        }
                    } else {
                        selectPrim(widget, primId);
                        __state = '3';
                    }
                    break;
                case '3':
                    return true;
                default:
                    return;
                }
            }
        }
        function precacheEdgesLinks(visuals) {
            var _var3, _var2, _var4, id, edge;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    _var3 = visuals.edges;
                    _var2 = Object.keys(_var3);
                    _var4 = 0;
                    __state = '5';
                    break;
                case '5':
                    if (_var4 < _var2.length) {
                        id = _var2[_var4];
                        edge = _var3[id];
                        findEdgeLinks(visuals, edge, edge);
                        _var4++;
                        __state = '5';
                    } else {
                        return;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function nodeFromItem(visuals, item) {
            var content, node, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (item.type === 'end') {
                        content = visuals.config.end;
                        __state = '6';
                    } else {
                        content = item.content || '';
                        __state = '6';
                    }
                    break;
                case '6':
                    node = createNode(visuals, item.id, item.type, content, item.id);
                    _var2 = item.type;
                    if (_var2 === 'parbegin') {
                        __state = '15';
                    } else {
                        if (_var2 === 'parend') {
                            node.finalTarget = item.id;
                            node.mountRight = node;
                            __state = '15';
                        } else {
                            __state = '7';
                        }
                    }
                    break;
                case '7':
                    setNotNull(item, node, 'flag1');
                    setNotNull(item, node, 'branchId');
                    setNotNull(item, node, 'one');
                    setNotNull(item, node, 'two');
                    setNotNull(item, node, 'side');
                    setNotNull(item, node, 'link');
                    setNotNull(item, node, 'margin');
                    setNotNull(item, node, 'secondary');
                    parseStyle(item, node);
                    return node;
                case '15':
                    node.type = 'junction';
                    node.subtype = item.type;
                    __state = '7';
                    break;
                default:
                    return;
                }
            }
        }
        function tr(widget, text) {
            var _var2;
            if (widget.config.translate) {
                _var2 = widget.config.translate(text);
                return _var2;
            } else {
                return text;
            }
        }
        function buildFreeMenu(widget, prim) {
            var menu, _var2, _var3, _var4, _var5, _var6, _var7, _var8, _var9, _var10, _var11, _var12, _var13, _var14;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    menu = [];
                    _var2 = tr(widget, 'Copy');
                    pushMenuItem('copy_free', menu, _var2, undefined, function () {
                        copy(widget);
                    });
                    _var5 = isReadonly(widget);
                    if (_var5) {
                        menu.push({ type: 'separator' });
                        _var7 = tr(widget, 'Edit content');
                        pushMenuItem('edit_content', menu, _var7, undefined, function () {
                            startEditContent(widget, prim);
                        });
                        __state = '3';
                    } else {
                        _var3 = tr(widget, 'Cut');
                        pushMenuItem('cut_free', menu, _var3, undefined, function () {
                            cut(widget);
                        });
                        menu.push({ type: 'separator' });
                        if (prim.type === 'group-duration') {
                            _var8 = tr(widget, 'Flip');
                            pushMenuItem('flip', menu, _var8, undefined, function () {
                                flipGroup(widget, prim);
                            });
                            __state = '_item12';
                        } else {
                            __state = '_item12';
                        }
                    }
                    break;
                case '3':
                    return menu;
                case '7':
                    menu.push({ type: 'separator' });
                    __state = '_item10';
                    break;
                case '_item12':
                    _var12 = canEditContent(widget, prim);
                    if (_var12) {
                        _var6 = tr(widget, 'Edit content');
                        pushMenuItem('edit_content', menu, _var6, undefined, function () {
                            startEditContent(widget, prim);
                        });
                        _var14 = canEditLink(widget, prim);
                        if (_var14) {
                            _var13 = tr(widget, 'Edit link');
                            pushMenuItem('edit_link', menu, _var13, undefined, function () {
                                startEditLink(widget, prim);
                            });
                            __state = '7';
                        } else {
                            __state = '7';
                        }
                    } else {
                        __state = '_item10';
                    }
                    break;
                case '_item10':
                    _var10 = tr(widget, 'Bring to front');
                    pushMenuItem('bring_to_front', menu, _var10, undefined, function () {
                        bringToFront(widget, prim.id);
                    });
                    _var11 = tr(widget, 'Send to back');
                    pushMenuItem('send_to_back', menu, _var11, undefined, function () {
                        sendToBack(widget, prim.id);
                    });
                    menu.push({ type: 'separator' });
                    _var4 = tr(widget, 'Delete');
                    pushMenuItem('delete_free', menu, _var4, widget.visuals.config.imagePath + 'delete.png', function () {
                        deleteSelection(widget);
                    });
                    menu.push({ type: 'separator' });
                    _var9 = tr(widget, 'Format');
                    pushMenuItem('format', menu, _var9, undefined, function () {
                        startEditStyle(widget);
                    });
                    __state = '3';
                    break;
                default:
                    return;
                }
            }
        }
        function buildBackgroundMenu(widget, x, y) {
            var clipboard, menu, _var2, _var3, _var4, _var5, _var6;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    menu = [];
                    _var4 = isReadonly(widget);
                    if (_var4) {
                        __state = '3';
                    } else {
                        clipboard = widget.visuals.config.getClipboard();
                        if (clipboard) {
                            _var2 = clipboard.type;
                            if (_var2 === 'case') {
                                __state = '_item7';
                            } else {
                                if (_var2 === 'branch') {
                                    __state = '_item7';
                                } else {
                                    if (_var2 === 'block') {
                                        __state = '_item7';
                                    } else {
                                        if (_var2 === 'free') {
                                            _var5 = tr(widget, 'Paste');
                                            pushMenuItem('paste', menu, _var5, undefined, function (evt) {
                                                pasteFree(widget, clipboard, evt);
                                            });
                                            menu.push({ type: 'separator' });
                                            __state = '_item10';
                                        } else {
                                            __state = '_item10';
                                        }
                                    }
                                }
                            }
                        } else {
                            __state = '_item10';
                        }
                    }
                    break;
                case '3':
                    return menu;
                case '_item7':
                    _var3 = tr(widget, 'Paste');
                    pushMenuItem('paste', menu, _var3, undefined, function () {
                        widget.showPasteSockets(clipboard.type);
                    });
                    menu.push({ type: 'separator' });
                    __state = '_item10';
                    break;
                case '_item10':
                    _var6 = tr(widget, 'Diagram format');
                    pushMenuItem('diagram_format', menu, _var6, undefined, function () {
                        startEditDiagramStyle(widget, x, y);
                    });
                    __state = '3';
                    break;
                default:
                    return;
                }
            }
        }
        function traceLoop(visited, node, loopEnd) {
            var _var2, _var3, prev;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (node.id in visited) {
                        __state = '1';
                    } else {
                        visited[node.id] = true;
                        if (node.loopEnd === loopEnd) {
                            __state = '1';
                        } else {
                            node.loops[loopEnd.id] = true;
                            _var2 = node.prev;
                            _var3 = 0;
                            __state = '9';
                        }
                    }
                    break;
                case '9':
                    if (_var3 < _var2.length) {
                        prev = _var2[_var3];
                        traceLoop(visited, prev, loopEnd);
                        _var3++;
                        __state = '9';
                    } else {
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function canEditNodeText(widget, node) {
            var noText, _var2, _var3;
            _var2 = isFree(widget, node);
            if (_var2) {
                _var3 = canEditContent(widget, node);
                return _var3;
            } else {
                noText = {
                    junction: true,
                    end: true,
                    'arrow-loop': true,
                    address: true
                };
                if (node.type in noText) {
                    return false;
                } else {
                    return true;
                }
            }
        }
        function getEffectiveItemId(visuals, node) {
            var _var2;
            if (node.itemId) {
                return node.itemId;
            } else {
                _var2 = firstBranchNode(visuals);
                return _var2.itemId;
            }
        }
        function linkNodeToChildren(context, itemId) {
            var node;
            node = getNodeForItem(context.visuals, itemId);
            linkNext(context, node, node.one);
            linkNext(context, node, node.two);
            return;
        }
        function isUpstream(visuals, lower, upper) {
            var context;
            context = {
                found: false,
                visited: {},
                nodes: visuals.nodes
            };
            isUpstreamStep(lower, upper, context);
            return context.found;
        }
        function linkNext(context, node1, nextItemId) {
            var node2, visuals, prevCount, address, _var2, _var3;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (nextItemId) {
                        visuals = context.visuals;
                        node2 = getNodeForItem(visuals, nextItemId);
                        if (node2.type == 'branch') {
                            address = last(context.addresses);
                            if (address) {
                                if (address.branch.id == nextItemId) {
                                    __state = '17';
                                } else {
                                    __state = '20';
                                }
                            } else {
                                __state = '20';
                            }
                        } else {
                            _var2 = isArrowLoop(node2);
                            if (_var2) {
                                _var3 = isUpstream(visuals, node1, node2);
                                if (_var3) {
                                    node1.next.push(node2);
                                    node2.aprev.push(node1);
                                    __state = '1';
                                } else {
                                    __state = '9';
                                }
                            } else {
                                __state = '9';
                            }
                        }
                    } else {
                        __state = '1';
                    }
                    break;
                case '9':
                    prevCount = node2.prev.length;
                    node1.next.push(node2);
                    node2.prev.push(node1);
                    if (prevCount === 0) {
                        linkNodeToChildren(context, nextItemId);
                        __state = '1';
                    } else {
                        __state = '1';
                    }
                    break;
                case '17':
                    node1.next.push(address);
                    address.prev.push(node1);
                    __state = '1';
                    break;
                case '20':
                    address = createNode(visuals, undefined, 'address', node2.content, undefined);
                    flowIcon(visuals, address);
                    address.branch = node2;
                    address.itemId = node2.itemId;
                    context.addresses.push(address);
                    __state = '17';
                    break;
                default:
                    return;
                }
            }
        }
        function isUpstreamStep(lower, upper, context) {
            var _var2, _var3, prev;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (context.found) {
                        __state = '1';
                    } else {
                        if (lower.id === upper.id) {
                            context.found = true;
                            __state = '1';
                        } else {
                            context.visited[lower.id] = true;
                            _var2 = lower.prev;
                            _var3 = 0;
                            __state = '10';
                        }
                    }
                    break;
                case '10':
                    if (_var3 < _var2.length) {
                        prev = _var2[_var3];
                        isUpstreamStep(prev, upper, context);
                        _var3++;
                        __state = '10';
                    } else {
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function drawFreeIcons(widget, ctx) {
            var visuals, element, common, showNugget, x, y, _var2, _var3, _var5, _var4, _var6, id, type;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    showNugget = false;
                    visuals = widget.visuals;
                    _var2 = visuals.free;
                    _var3 = 0;
                    __state = '8';
                    break;
                case '4':
                    return;
                case '5':
                    common = {
                        left: Number.MAX_SAFE_INTEGER,
                        top: Number.MAX_SAFE_INTEGER,
                        right: Number.MIN_SAFE_INTEGER,
                        bottom: Number.MIN_SAFE_INTEGER
                    };
                    _var5 = widget.selection.prims;
                    _var4 = Object.keys(_var5);
                    _var6 = 0;
                    __state = '12';
                    break;
                case '8':
                    if (_var3 < _var2.length) {
                        element = _var2[_var3];
                        drawFreeIcon(widget, element, ctx);
                        _var3++;
                        __state = '8';
                    } else {
                        ctx.setLineDash([]);
                        __state = '5';
                    }
                    break;
                case '11':
                    _var6++;
                    __state = '12';
                    break;
                case '12':
                    if (_var6 < _var4.length) {
                        id = _var4[_var6];
                        type = _var5[id];
                        if (type === 'free') {
                            element = getFree(visuals, id);
                            drawFreeCandies(widget, element, ctx);
                            if (element.type === 'group-duration') {
                                __state = '11';
                            } else {
                                calculateBoxFromFree(element, common);
                                showNugget = true;
                                __state = '11';
                            }
                        } else {
                            __state = '11';
                        }
                    } else {
                        __state = '20';
                    }
                    break;
                case '20':
                    if (showNugget) {
                        x = Math.floor((common.right + common.left) / 2 + 20);
                        y = Math.floor(common.top - 40);
                        visuals.nugget = drawNugget(ctx, x, y);
                        __state = '4';
                    } else {
                        visuals.nugget = undefined;
                        __state = '4';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function updateAndKeepSelection(widget, edits) {
            var _var2;
            widget.edit.updateDocument(edits);
            _var2 = widget.redraw();
            return _var2;
        }
        function calculateBoxIter(node, box) {
            var left, top, right, bottom, _var2, _var3, _var4, _var5;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    left = node.x - node.w;
                    top = node.y - node.h;
                    right = node.x + node.w;
                    bottom = node.y + node.h;
                    _var2 = isNaN(left);
                    if (_var2) {
                        __state = '_item3';
                    } else {
                        box.left = Math.min(box.left, left);
                        __state = '_item3';
                    }
                    break;
                case '_item3':
                    _var3 = isNaN(top);
                    if (_var3) {
                        __state = '_item4';
                    } else {
                        box.top = Math.min(box.top, top);
                        __state = '_item4';
                    }
                    break;
                case '_item4':
                    _var4 = isNaN(right);
                    if (_var4) {
                        __state = '_item5';
                    } else {
                        box.right = Math.max(box.right, right);
                        __state = '_item5';
                    }
                    break;
                case '_item5':
                    _var5 = isNaN(bottom);
                    if (_var5) {
                        __state = '1';
                    } else {
                        box.bottom = Math.max(box.bottom, bottom);
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function canEditSecondary(node) {
            var can;
            can = {
                shelf: true,
                process: true,
                input: true,
                output: true
            };
            return node.type in can;
        }
        function markArrow(visuals, loop) {
            var arrow, top, upEdge, bottom, rightEdge, leftBottom, downEdge, start, _var2, _var3;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    arrow = loop.right;
                    top = arrow.tail;
                    upEdge = top.down;
                    top.arrow = upEdge;
                    arrow.arrow = upEdge;
                    arrow.finalTarget = upEdge.finalTarget;
                    arrow.links = upEdge.links;
                    __state = '5';
                    break;
                case '4':
                    return;
                case '5':
                    upEdge.arrow = upEdge;
                    bottom = upEdge.tail;
                    _var2 = isLeftUp(bottom);
                    if (_var2) {
                        bottom.arrow = upEdge;
                        __state = '6';
                    } else {
                        __state = '4';
                    }
                    break;
                case '6':
                    rightEdge = bottom.left;
                    leftBottom = rightEdge.head;
                    rightEdge.arrow = upEdge;
                    _var3 = isRightUp(leftBottom);
                    if (_var3) {
                        leftBottom.arrow = upEdge;
                        __state = '7';
                    } else {
                        __state = '4';
                    }
                    break;
                case '7':
                    downEdge = leftBottom.up;
                    start = downEdge.head;
                    downEdge.arrow = upEdge;
                    if (start.type === 'junction') {
                        __state = '4';
                    } else {
                        start.arrow = upEdge;
                        __state = '4';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function calculateDiagramBox(visuals) {
            var box, metre, _var3, _var2, _var4, id, node, _var5, _var6, element;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    box = {
                        left: Number.MAX_SAFE_INTEGER,
                        right: Number.MIN_SAFE_INTEGER,
                        top: Number.MAX_SAFE_INTEGER,
                        bottom: Number.MIN_SAFE_INTEGER
                    };
                    metre = visuals.config.metre;
                    _var3 = visuals.nodes;
                    _var2 = Object.keys(_var3);
                    _var4 = 0;
                    __state = '5';
                    break;
                case '5':
                    if (_var4 < _var2.length) {
                        id = _var2[_var4];
                        node = _var3[id];
                        calculateBoxIter(node, box);
                        _var4++;
                        __state = '5';
                    } else {
                        __state = '18';
                    }
                    break;
                case '17':
                    box.left -= metre;
                    box.top -= metre, box.right += metre, box.bottom += metre, box.width = box.right - box.left;
                    box.height = box.bottom - box.top;
                    if (visuals.type === 'free') {
                        box.top -= 30;
                        __state = '33';
                    } else {
                        __state = '33';
                    }
                    break;
                case '18':
                    _var5 = visuals.free;
                    _var6 = 0;
                    __state = '21';
                    break;
                case '21':
                    if (_var6 < _var5.length) {
                        element = _var5[_var6];
                        calculateBoxFromFree(element.box, box);
                        _var6++;
                        __state = '21';
                    } else {
                        __state = '34';
                    }
                    break;
                case '33':
                    visuals.box = box;
                    return;
                case '34':
                    if (box.left === Number.MAX_SAFE_INTEGER) {
                        box.left = 0;
                        box.right = 100;
                        box.top = 0;
                        box.bottom = 100;
                        __state = '17';
                    } else {
                        __state = '17';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function calculateBoxFromFree(elementBox, box) {
            var left, top, right, bottom, _var2, _var3, _var4, _var5;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    left = elementBox.left;
                    top = elementBox.top;
                    if ('width' in elementBox) {
                        right = left + elementBox.width;
                        bottom = top + elementBox.height;
                        __state = '_item2';
                    } else {
                        right = left;
                        bottom = top;
                        __state = '_item2';
                    }
                    break;
                case '_item2':
                    _var2 = isNaN(left);
                    if (_var2) {
                        __state = '_item3';
                    } else {
                        box.left = Math.min(box.left, left);
                        __state = '_item3';
                    }
                    break;
                case '_item3':
                    _var3 = isNaN(top);
                    if (_var3) {
                        __state = '_item4';
                    } else {
                        box.top = Math.min(box.top, top);
                        __state = '_item4';
                    }
                    break;
                case '_item4':
                    _var4 = isNaN(right);
                    if (_var4) {
                        __state = '_item5';
                    } else {
                        box.right = Math.max(box.right, right);
                        __state = '_item5';
                    }
                    break;
                case '_item5':
                    _var5 = isNaN(bottom);
                    if (_var5) {
                        __state = '1';
                    } else {
                        box.bottom = Math.max(box.bottom, bottom);
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function buildStyleFromPrims(visuals, prims) {
            var style, _var2, _var3, prim;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    style = { font: '' };
                    _var2 = prims;
                    _var3 = 0;
                    __state = '6';
                    break;
                case '4':
                    return style;
                case '6':
                    if (_var3 < _var2.length) {
                        prim = _var2[_var3];
                        copyStyleFromPrim(prim, style);
                        style.font = getThemeValueCore(visuals.config, prim.type, prim.style, 'font', style.font);
                        _var3++;
                        __state = '6';
                    } else {
                        style.iconBack = style.iconBack || '';
                        style.color = style.color || '';
                        style.iconBorder = style.iconBorder || '';
                        style.padding = style.padding || '';
                        style.internalLine = style.internalLine || '';
                        style.lineHeight = style.lineHeight || '';
                        style.textAlign = style.textAlign || '';
                        style.borderStyle = style.borderStyle || '';
                        style.shadowOffsetX = style.shadowOffsetX || 0;
                        style.shadowOffsetY = style.shadowOffsetY || 0;
                        style.shadowColor = style.shadowColor || '';
                        style.shadowBlur = style.shadowBlur || 0;
                        if ('borderWidth' in style) {
                            __state = '4';
                        } else {
                            style.borderWidth = '';
                            __state = '4';
                        }
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function copyStyleFromPrim(prim, style) {
            var pstyle, existing, _var3, _var2, _var4, key, value;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    pstyle = prim.style;
                    if (pstyle) {
                        _var3 = pstyle;
                        _var2 = Object.keys(_var3);
                        _var4 = 0;
                        __state = '7';
                    } else {
                        __state = '1';
                    }
                    break;
                case '6':
                    _var4++;
                    __state = '7';
                    break;
                case '7':
                    if (_var4 < _var2.length) {
                        key = _var2[_var4];
                        value = _var3[key];
                        existing = style[key];
                        if (existing === undefined) {
                            style[key] = value;
                            __state = '6';
                        } else {
                            if (existing === '') {
                                __state = '6';
                            } else {
                                if (value === existing) {
                                    __state = '6';
                                } else {
                                    style[key] = '';
                                    __state = '6';
                                }
                            }
                        }
                    } else {
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function themeToStyleFields() {
            return [
                'background',
                'color',
                'iconBack',
                'lines',
                'backText',
                'iconBorder',
                'internalLine',
                'shadowColor',
                'shadowBlur',
                'lineWidth',
                'borderWidth',
                'shadowOffsetX',
                'shadowOffsetY'
            ];
        }
        function getStandardProps() {
            return [
                'iconBack',
                'iconBorder',
                'borderWidth',
                'shadowColor',
                'shadowBlur',
                'shadowOffsetX',
                'shadowOffsetY',
                'color',
                'font',
                'textAlign'
            ];
        }
        function getAcceptedStylePropsForPrim(widget, prim, common) {
            var accepted, _var2, _var3, prop, _var4, _var5;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    incrementDictionaryValue(common, 'count');
                    _var4 = isFree(widget, prim);
                    if (_var4) {
                        accepted = getFreeAccepted(widget, prim);
                        __state = '_item2';
                    } else {
                        _var5 = canEditSecondary(prim);
                        if (_var5) {
                            incrementDictionaryValue(common, 'internalLine');
                            __state = '3';
                        } else {
                            __state = '3';
                        }
                    }
                    break;
                case '3':
                    accepted = getStandardDrakonProps();
                    __state = '_item2';
                    break;
                case '14':
                    if (_var3 < _var2.length) {
                        prop = _var2[_var3];
                        incrementDictionaryValue(common, prop);
                        _var3++;
                        __state = '14';
                    } else {
                        return;
                    }
                    break;
                case '_item2':
                    _var2 = accepted;
                    _var3 = 0;
                    __state = '14';
                    break;
                default:
                    return;
                }
            }
        }
        function buildStyleFromDiagram(widget) {
            var style, oldStyle, _var2, _var3, _var4;
            oldStyle = widget.model.doc.style;
            oldStyle = oldStyle || {};
            style = {};
            _var4 = configToStyleFields();
            copyFieldsOrDefault(style, oldStyle, _var4, '');
            _var3 = configToStyleFields();
            copyFieldsOrDefault(style, widget.visuals.config, _var3, '');
            _var2 = themeToStyleFields();
            copyFieldsOrDefault(style, oldStyle, _var2, '');
            return style;
        }
        function configToStyleFields() {
            return [
                'font',
                'headerFont',
                'branchFont',
                'canvasLabels',
                'metre',
                'padding',
                'maxWidth',
                'lineHeight',
                'textAlign',
                'centerContent'
            ];
        }
        function getAcceptedStyleProps(widget, prims) {
            var common, accepted, _var2, _var3, prim, _var5, _var4, _var6, name, count;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    common = { count: 0 };
                    _var2 = prims;
                    _var3 = 0;
                    __state = '5';
                    break;
                case '5':
                    if (_var3 < _var2.length) {
                        prim = _var2[_var3];
                        getAcceptedStylePropsForPrim(widget, prim, common);
                        _var3++;
                        __state = '5';
                    } else {
                        __state = '8';
                    }
                    break;
                case '7':
                    return accepted;
                case '8':
                    accepted = {};
                    _var5 = common;
                    _var4 = Object.keys(_var5);
                    _var6 = 0;
                    __state = '11';
                    break;
                case '10':
                    _var6++;
                    __state = '11';
                    break;
                case '11':
                    if (_var6 < _var4.length) {
                        name = _var4[_var6];
                        count = _var5[name];
                        if (name === 'count') {
                            __state = '10';
                        } else {
                            if (count === common.count) {
                                accepted[name] = true;
                                __state = '10';
                            } else {
                                __state = '10';
                            }
                        }
                    } else {
                        __state = '7';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function getStandardDrakonProps() {
            return [
                'iconBack',
                'iconBorder',
                'borderWidth',
                'shadowColor',
                'shadowBlur',
                'shadowOffsetX',
                'shadowOffsetY',
                'padding',
                'color',
                'font',
                'textAlign'
            ];
        }
        function mergeStyleIntoConfig(diagramStyle, config) {
            var result, _var2, _var3;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    diagramStyle = diagramStyle || {};
                    result = {};
                    Object.assign(result, config);
                    _var2 = configToStyleFields();
                    copyFieldsWithValue(result, diagramStyle, _var2);
                    result.theme = { icons: {} };
                    Object.assign(result.theme, config.theme);
                    _var3 = themeToStyleFields();
                    copyFieldsWithValue(result.theme, diagramStyle, _var3);
                    if (diagramStyle.headerFont) {
                        setIconProps(result.theme.icons, ['header'], { font: diagramStyle.headerFont });
                        __state = '26';
                    } else {
                        __state = '26';
                    }
                    break;
                case '19':
                    return result;
                case '26':
                    if (diagramStyle.branchFont) {
                        setIconProps(result.theme.icons, ['branch'], { font: diagramStyle.branchFont });
                        __state = '19';
                    } else {
                        __state = '19';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function no() {
            return 'No';
        }
        function sanitizeScroll(widget, x, y) {
            var visuals, box, x2, y2, zoom, x3, y3, wwidth, wheight;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    visuals = widget.visuals;
                    box = visuals.box;
                    zoom = widget.zoomFactor;
                    wwidth = widget.width / zoom;
                    if (box.right < wwidth + x) {
                        box.right = wwidth + x;
                        box.width = box.right - box.left;
                        __state = '4';
                    } else {
                        __state = '4';
                    }
                    break;
                case '4':
                    x2 = Math.min(box.right - wwidth, x);
                    x3 = Math.max(box.left, x2);
                    wheight = widget.height / zoom;
                    if (box.bottom < wheight + y) {
                        box.bottom = wheight + y;
                        box.height = box.bottom - box.top;
                        __state = '5';
                    } else {
                        __state = '5';
                    }
                    break;
                case '5':
                    y2 = Math.min(box.bottom - wheight, y);
                    y3 = Math.max(box.top, y2);
                    return {
                        x: x3,
                        y: y3
                    };
                default:
                    return;
                }
            }
        }
        function buildVisuals(widget) {
            var visuals, model, context, node, branch, element, ctx, config, _var5, _var6, bItemId, _var3, _var2, _var4, id, item, _var8, _var7, _var9, skewer, _var10, _var11;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    model = widget.model;
                    config = mergeStyleIntoConfig(model.doc.style, widget.config);
                    ctx = widget.canvas.getContext('2d');
                    config.zoom = widget.zoomFactor;
                    _var10 = model.branches.slice();
                    visuals = {
                        ctx: ctx,
                        nextId: 1,
                        nodes: {},
                        edges: {},
                        skewers: {},
                        levels: {},
                        byType: {},
                        skewerLinks: [],
                        levelLinks: [],
                        itemsToNodes: {},
                        branches: _var10,
                        tempEdges: [],
                        blocks: [],
                        sockets: [],
                        subs: [],
                        free: [],
                        handles: [],
                        guides: [],
                        fonts: {},
                        type: model.type,
                        config: config,
                        container: widget.contentContainer
                    };
                    if (model.type === 'free') {
                        __state = '14';
                    } else {
                        visuals.header = createNode(visuals, undefined, 'header', model.doc.name, 'header');
                        flowIcon(visuals, visuals.header);
                        visuals.params = createParamsNode(visuals, model.doc.params);
                        __state = '14';
                    }
                    break;
                case '4':
                    removeTempEdges(visuals);
                    positionDurations(visuals);
                    buildBoxes(widget, visuals);
                    forType(visuals, 'address', putCycleMark);
                    calculateDiagramBox(visuals);
                    connectLoops(visuals);
                    traceLoops(visuals);
                    forType(visuals, 'arrow-loop', markArrow);
                    return visuals;
                case '5':
                    _var5 = visuals.branches;
                    _var6 = 0;
                    __state = '12';
                    break;
                case '12':
                    if (_var6 < _var5.length) {
                        bItemId = _var5[_var6];
                        context = {
                            visuals: visuals,
                            addresses: []
                        };
                        linkNodeToChildren(context, bItemId);
                        branch = getNode(visuals, bItemId);
                        branch.addresses = context.addresses;
                        _var6++;
                        __state = '12';
                    } else {
                        __state = '22';
                    }
                    break;
                case '14':
                    _var3 = model.items;
                    _var2 = Object.keys(_var3);
                    _var4 = 0;
                    __state = '16';
                    break;
                case '15':
                    _var4++;
                    __state = '16';
                    break;
                case '16':
                    if (_var4 < _var2.length) {
                        id = _var2[_var4];
                        item = _var3[id];
                        _var11 = isFree(widget, item);
                        if (_var11) {
                            element = freeFromItem(visuals, id, item);
                            flowFreeIcon(widget, visuals, element);
                            __state = '15';
                        } else {
                            node = nodeFromItem(visuals, item);
                            flowIcon(visuals, node);
                            __state = '15';
                        }
                    } else {
                        sortFreeIcons(visuals);
                        if (model.type === 'free') {
                            __state = '4';
                        } else {
                            __state = '5';
                        }
                    }
                    break;
                case '22':
                    if (model.branches.length === 0) {
                        __state = '26';
                    } else {
                        if (model.branches.length > 1) {
                            layoutSilhouette(visuals);
                            __state = '26';
                        } else {
                            layoutPrimitive(visuals);
                            __state = '26';
                        }
                    }
                    break;
                case '26':
                    buildSkewers(visuals);
                    _var8 = visuals.skewers;
                    _var7 = Object.keys(_var8);
                    _var9 = 0;
                    __state = '29';
                    break;
                case '29':
                    if (_var9 < _var7.length) {
                        id = _var7[_var9];
                        skewer = _var8[id];
                        setSameWidth(visuals, skewer);
                        _var9++;
                        __state = '29';
                    } else {
                        reflowContent(visuals);
                        setSameHeight(visuals);
                        positionSkewers(visuals);
                        positionLevels(visuals);
                        drawParams(visuals);
                        __state = '4';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function isOnScrollbars(widget, evt) {
            var rect, x, scrollBarWidth, diagramWidth, diagramHeight, y;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    scrollBarWidth = 20;
                    rect = evt.target.getBoundingClientRect();
                    diagramWidth = widget.visuals.box.width;
                    diagramHeight = widget.visuals.box.height;
                    if (rect.height < diagramHeight) {
                        x = evt.clientX - rect.left;
                        if (rect.width - x <= scrollBarWidth) {
                            return true;
                        } else {
                            __state = '7';
                        }
                    } else {
                        __state = '7';
                    }
                    break;
                case '7':
                    if (rect.width < diagramWidth) {
                        y = evt.clientY - rect.top;
                        if (rect.height - y <= scrollBarWidth) {
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        return false;
                    }
                default:
                    return;
                }
            }
        }
        function parseStyle(item, node) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (item.style) {
                        try {
                            node.style = JSON.parse(item.style);
                        } catch (ex) {
                            console.error('Error parsing style for item ' + item.id + ' ' + ex.message);
                        }
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
        function pushMenuItem(hint, menu, text, icon, action) {
            var item;
            item = {
                hint: hint,
                type: 'item',
                text: text,
                icon: icon,
                action: action
            };
            menu.push(item);
            return;
        }
        function createParamsNode(visuals, params) {
            var node;
            if (params) {
                node = createNode(visuals, undefined, 'params', params, 'params');
                flowIcon(visuals, node);
                return node;
            } else {
                return undefined;
            }
        }
        function putCycleMark(visuals, address) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (address.x >= address.branch.x) {
                        address.mark = true;
                        address.branch.mark = true;
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
        function paintCore(widget, factor, zoom, translateX, translateY, width, height) {
            var padding, visuals, config, ctx, _var3, _var2, _var4, id, edge, _var9, _var8, _var10, node, _var6, _var5, _var7, type, _var12, _var11, _var13, _var14, _var15, socket, _var16, _var17, guide, _var18;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    visuals = widget.visuals;
                    config = visuals.config;
                    ctx = visuals.ctx;
                    ctx.resetTransform();
                    ctx.fillStyle = config.theme.background;
                    ctx.fillRect(0, 0, width * factor, height * factor);
                    ctx.strokeStyle = 'yellow';
                    ctx.lineWidth = 4;
                    __state = '13';
                    break;
                case '10':
                    return;
                case '11':
                    ctx.setLineDash([]);
                    _var3 = visuals.edges;
                    _var2 = Object.keys(_var3);
                    _var4 = 0;
                    __state = '18';
                    break;
                case '13':
                    if (widget.visuals.config.drawCross) {
                        padding = 20;
                        ctx.beginPath();
                        ctx.moveTo(padding, padding);
                        ctx.lineTo(width * zoom - padding, height * zoom - padding);
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.moveTo(width * zoom - padding, padding);
                        ctx.lineTo(padding, height * zoom - padding);
                        ctx.stroke();
                        __state = '54';
                    } else {
                        __state = '54';
                    }
                    break;
                case '18':
                    if (_var4 < _var2.length) {
                        id = _var2[_var4];
                        edge = _var3[id];
                        drawEdge(visuals, edge, ctx);
                        _var4++;
                        __state = '18';
                    } else {
                        _var6 = widget.selection.prims;
                        _var5 = Object.keys(_var6);
                        _var7 = 0;
                        __state = '39';
                    }
                    break;
                case '21':
                    _var9 = visuals.nodes;
                    _var8 = Object.keys(_var9);
                    _var10 = 0;
                    __state = '23';
                    break;
                case '22':
                    _var10++;
                    __state = '23';
                    break;
                case '23':
                    if (_var10 < _var8.length) {
                        id = _var8[_var10];
                        node = _var9[id];
                        _var18 = isDrawableNode(node);
                        if (_var18) {
                            drawIcon(visuals, node, ctx);
                            __state = '22';
                        } else {
                            __state = '22';
                        }
                    } else {
                        ctx.setLineDash([]);
                        _var12 = widget.selection.prims;
                        _var11 = Object.keys(_var12);
                        _var13 = 0;
                        __state = '43';
                    }
                    break;
                case '34':
                    if (visuals.selectionFrame) {
                        ctx.strokeStyle = visuals.config.theme.lines;
                        ctx.lineWidth = 2;
                        ctx.strokeRect(visuals.selectionFrame.left, visuals.selectionFrame.top, visuals.selectionFrame.width, visuals.selectionFrame.height);
                        __state = '90';
                    } else {
                        __state = '90';
                    }
                    break;
                case '38':
                    _var7++;
                    __state = '39';
                    break;
                case '39':
                    if (_var7 < _var5.length) {
                        id = _var5[_var7];
                        type = _var6[id];
                        if (type === 'edge') {
                            drawEdgeCandy(visuals, id, ctx, config);
                            __state = '38';
                        } else {
                            __state = '38';
                        }
                    } else {
                        __state = '21';
                    }
                    break;
                case '42':
                    _var13++;
                    __state = '43';
                    break;
                case '43':
                    if (_var13 < _var11.length) {
                        id = _var11[_var13];
                        type = _var12[id];
                        if (type === 'node') {
                            drawNodeCandy(widget, id, ctx, config);
                            __state = '42';
                        } else {
                            __state = '42';
                        }
                    } else {
                        __state = '68';
                    }
                    break;
                case '50':
                    _var14 = visuals.sockets;
                    _var15 = 0;
                    __state = '52';
                    break;
                case '52':
                    if (_var15 < _var14.length) {
                        socket = _var14[_var15];
                        drawSocket(visuals, socket, ctx, config);
                        _var15++;
                        __state = '52';
                    } else {
                        __state = '34';
                    }
                    break;
                case '54':
                    ctx.scale(factor * zoom, factor * zoom);
                    ctx.translate(translateX, translateY);
                    if (widget.visuals.config.drawZones) {
                        drawSubspaces(widget.visuals, ctx);
                        __state = '11';
                    } else {
                        __state = '11';
                    }
                    break;
                case '68':
                    drawFreeIcons(widget, ctx);
                    __state = '50';
                    break;
                case '90':
                    if (visuals.guides.length > 0) {
                        _var16 = visuals.guides;
                        _var17 = 0;
                        __state = '96';
                    } else {
                        __state = '10';
                    }
                    break;
                case '96':
                    if (_var17 < _var16.length) {
                        guide = _var16[_var17];
                        line(ctx, guide.x1, guide.y1, guide.x2, guide.y2, visuals.config.theme.guides, 1);
                        _var17++;
                        __state = '96';
                    } else {
                        visuals.guides = [];
                        __state = '10';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function scanManhattan(visited, node) {
            var _var2, _var3, _var4, _var5;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (node.id in visited) {
                        __state = '1';
                    } else {
                        visited[node.id] = true;
                        if (node.left) {
                            _var2 = getLeft(node);
                            scanManhattan(visited, _var2);
                            __state = '8';
                        } else {
                            __state = '8';
                        }
                    }
                    break;
                case '8':
                    if (node.up) {
                        _var3 = getUp(node);
                        scanManhattan(visited, _var3);
                        __state = '10';
                    } else {
                        __state = '10';
                    }
                    break;
                case '10':
                    if (node.right) {
                        _var4 = getRight(node);
                        scanManhattan(visited, _var4);
                        __state = '12';
                    } else {
                        __state = '12';
                    }
                    break;
                case '12':
                    if (node.down) {
                        _var5 = getDown(node);
                        scanManhattan(visited, _var5);
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
        function scanTwoGraph(items, visited, id) {
            var item;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (id) {
                        if (id in visited) {
                            __state = '1';
                        } else {
                            visited[id] = true;
                            item = items[id];
                            scanTwoGraph(items, visited, item.one);
                            scanTwoGraph(items, visited, item.two);
                            __state = '1';
                        }
                    } else {
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function findLoopStart(visuals, end) {
            var depth, node;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    depth = 0;
                    node = getUp(end);
                    __state = '5';
                    break;
                case '4':
                    node = getUp(node);
                    __state = '5';
                    break;
                case '5':
                    if (node) {
                        if (node.type === 'loopend') {
                            depth++;
                            __state = '4';
                        } else {
                            if (node.type === 'loopbegin') {
                                if (depth === 0) {
                                    node.loopEnd = end;
                                    end.loopStart = node;
                                    __state = '1';
                                } else {
                                    depth--;
                                    __state = '4';
                                }
                            } else {
                                __state = '4';
                            }
                        }
                    } else {
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function findEdgeLinks(visuals, startEdge, edge) {
            var source, itemId, link, _var2, _var3, prevEdge;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    source = edge.source;
                    if (source) {
                        if (source.type === 'junction') {
                            if (source.subtype === 'parbegin') {
                                __state = '9';
                            } else {
                                if (source.subtype === 'parend') {
                                    __state = '9';
                                } else {
                                    _var2 = source.sources;
                                    _var3 = 0;
                                    __state = '19';
                                }
                            }
                        } else {
                            __state = '9';
                        }
                    } else {
                        __state = '1';
                    }
                    break;
                case '9':
                    itemId = getEffectiveItemId(visuals, source);
                    link = createLink(itemId, edge.vertical ? 0 : 1);
                    startEdge.links.push(link);
                    __state = '1';
                    break;
                case '19':
                    if (_var3 < _var2.length) {
                        prevEdge = _var2[_var3];
                        findEdgeLinks(visuals, startEdge, prevEdge);
                        _var3++;
                        __state = '19';
                    } else {
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function getFreeFromSelection(widget) {
            var visuals, _var3, _var2, _var4, id, elType, _var5;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    visuals = widget.visuals;
                    _var3 = widget.selection.prims;
                    _var2 = Object.keys(_var3);
                    _var4 = 0;
                    __state = '6';
                    break;
                case '6':
                    if (_var4 < _var2.length) {
                        id = _var2[_var4];
                        elType = _var3[id];
                        if (elType === 'free') {
                            _var5 = getFree(visuals, id);
                            return _var5;
                        } else {
                            _var4++;
                            __state = '6';
                        }
                    } else {
                        return undefined;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function canEditStyle(node) {
            var noStyle;
            noStyle = {
                junction: true,
                'arrow-loop': true,
                header: true
            };
            if (node.type in noStyle) {
                return false;
            } else {
                return true;
            }
        }
        function buildBeginParMenu(widget, node) {
            var menu, _var2, _var3, _var4;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    menu = [];
                    _var4 = isReadonly(widget);
                    if (_var4) {
                        __state = '4';
                    } else {
                        _var2 = isFirstPar(node);
                        if (_var2) {
                            __state = '4';
                        } else {
                            _var3 = tr(widget, 'Delete path');
                            pushMenuItem('delete_path', menu, _var3, undefined, function () {
                                deleteParPath(widget, node);
                            });
                            __state = '4';
                        }
                    }
                    break;
                case '4':
                    return menu;
                default:
                    return;
                }
            }
        }
        function isArrowLoop(node) {
            return node.type === 'arrow-loop';
        }
        function makePointToItem(widget, address, target, menu) {
            menu.push({
                hint: 'redirect',
                text: target.content,
                action: function () {
                    redirectAddress(widget, address, target.itemId);
                }
            });
            return;
        }
        function forTypeTogether(visuals, type, action) {
            var ids, nodes, _var2;
            ids = getCreateList(visuals.byType, type);
            nodes = ids.map(function (id) {
                _var2 = getNode(visuals, id);
                return _var2;
            });
            action(visuals, nodes);
            return;
        }
        function getWidgetRect(widget) {
            var rect, element;
            element = widget.container;
            rect = element.getBoundingClientRect();
            return rect;
        }
        function createNewItem(model, type) {
            var item, id;
            id = getNextId(model);
            item = {
                id: id,
                type: type
            };
            addItemToModel(model, item);
            return item;
        }
        function copyCase(widget, node) {
            var copy, block;
            copy = copyItem(widget, node.itemId);
            copy.one = 'finish';
            copy.two = undefined;
            block = {
                start: node.itemId,
                items: [copy]
            };
            widget.visuals.config.setClipboard('case', block);
            return 'case';
        }
        function replaceIds(widget, startId, items, targetId) {
            var oldToNew;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    oldToNew = generateNewIds(widget, items);
                    __state = '5';
                    break;
                case '4':
                    if (startId === undefined) {
                        return undefined;
                    } else {
                        return oldToNew[startId];
                    }
                case '5':
                    oldToNew['finish'] = targetId;
                    replaceTargets(items, oldToNew);
                    __state = '4';
                    break;
                default:
                    return;
                }
            }
        }
        function copyManyItems(widget, nodes) {
            var items, _var2, _var3;
            items = nodes.map(function (node) {
                _var2 = copySelectedItem(widget, node);
                return _var2;
            });
            _var3 = copyBlock(widget, widget.selection.head, items);
            return _var3;
        }
        function copyBranch(widget, node) {
            var branchNodes, end, items, targets, block, _var5, _var4, _var6, itemId, bnode, _var2, _var3, next, _var7;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    branchNodes = {};
                    scanBranchItems(node, branchNodes);
                    end = widget.visuals.end;
                    if (end) {
                        delete branchNodes[end.itemId];
                        __state = '9';
                    } else {
                        __state = '9';
                    }
                    break;
                case '8':
                    block = {
                        start: node.itemId,
                        items: items,
                        targets: targets
                    };
                    widget.visuals.config.setClipboard('branch', block);
                    return 'branch';
                case '9':
                    items = [];
                    targets = {};
                    _var5 = branchNodes;
                    _var4 = Object.keys(_var5);
                    _var6 = 0;
                    __state = '12';
                    break;
                case '12':
                    if (_var6 < _var4.length) {
                        itemId = _var4[_var6];
                        bnode = _var5[itemId];
                        _var2 = bnode.next;
                        _var3 = 0;
                        __state = '14';
                    } else {
                        __state = '8';
                    }
                    break;
                case '13':
                    _var3++;
                    __state = '14';
                    break;
                case '14':
                    if (_var3 < _var2.length) {
                        next = _var2[_var3];
                        if (next.itemId in branchNodes) {
                            __state = '13';
                        } else {
                            targets[next.itemId] = next.content;
                            __state = '13';
                        }
                    } else {
                        _var7 = copyItem(widget, itemId);
                        items.push(_var7);
                        _var6++;
                        __state = '12';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function generateNewIds(widget, items) {
            var oldToNew, id, _var2, _var3, item;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    oldToNew = {};
                    _var2 = items;
                    _var3 = 0;
                    __state = '5';
                    break;
                case '5':
                    if (_var3 < _var2.length) {
                        item = _var2[_var3];
                        id = getNextId(widget.model);
                        oldToNew[item.id] = id;
                        item.id = id;
                        _var3++;
                        __state = '5';
                    } else {
                        return oldToNew;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function duration(widget) {
            return;
        }
        function replaceTarget(item, oldToNew) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (item.one) {
                        item.one = oldToNew[item.one];
                        __state = '5';
                    } else {
                        __state = '5';
                    }
                    break;
                case '5':
                    if (item.two) {
                        item.two = oldToNew[item.two];
                        __state = '8';
                    } else {
                        __state = '8';
                    }
                    break;
                case '8':
                    if (item.side) {
                        item.side = oldToNew[item.side];
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
        function copy(widget) {
            var copyType;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    copyType = copyCore(widget);
                    if (copyType) {
                        widget.showPasteSockets(copyType);
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
        function pasteBlock(widget, socket, payload) {
            var edits, firstId, create;
            edits = [];
            firstId = replaceIds(widget, payload.start, payload.items, socket.target);
            create = function (item) {
                createPastedItem(edits, item);
            };
            payload.items.forEach(create);
            redirectUpperItems(edits, socket.links, firstId);
            return edits;
        }
        function copyItem(widget, itemId) {
            var item, copy;
            item = widget.model.items[itemId];
            copy = clone(item);
            delete copy.side;
            return copy;
        }
        function copySelect(widget, node) {
            var items, caseItem, _var2, _var3, caseNode, _var4, _var5;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    items = [];
                    _var5 = copyItem(widget, node.itemId);
                    items.push(_var5);
                    _var2 = node.cases;
                    _var3 = 0;
                    __state = '7';
                    break;
                case '7':
                    if (_var3 < _var2.length) {
                        caseNode = _var2[_var3];
                        caseItem = copyItem(widget, caseNode.itemId);
                        caseItem.one = 'finish';
                        items.push(caseItem);
                        _var3++;
                        __state = '7';
                    } else {
                        _var4 = copyBlock(widget, node.itemId, items);
                        return _var4;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function copyLoopEnd(widget, node) {
            var _var2;
            _var2 = copyLoop(widget, node.loopStart);
            return _var2;
        }
        function copySelectedItem(widget, node) {
            var item;
            item = copyWholeItem(widget, node.itemId);
            item.one = getCopyTarget(widget, node, 0);
            item.two = getCopyTarget(widget, node, 1);
            return item;
        }
        function copyQuestion(widget, node) {
            var copy, _var2;
            copy = copyItem(widget, node.itemId);
            copy.one = 'finish';
            copy.two = 'finish';
            _var2 = copyBlock(widget, node.itemId, [copy]);
            return _var2;
        }
        function copySimple(widget, node) {
            var copy, _var2;
            copy = copyItem(widget, node.itemId);
            copy.one = 'finish';
            _var2 = copyBlock(widget, node.itemId, [copy]);
            return _var2;
        }
        function copyCore(widget) {
            var nodes, elements, _var2, _var3, _var4, _var5;
            nodes = getNodesFromSelection(widget);
            _var2 = nodes.length;
            if (_var2 === 0) {
                elements = getSelectedFree(widget);
                if (elements.length === 0) {
                    return undefined;
                } else {
                    _var5 = copyFree(widget, elements);
                    return _var5;
                }
            } else {
                if (_var2 === 1) {
                    _var3 = copyOneItem(widget, nodes[0]);
                    return _var3;
                } else {
                    _var4 = copyManyItems(widget, nodes);
                    return _var4;
                }
            }
        }
        function getCopyTarget(widget, node, ordinal) {
            var next;
            if (ordinal >= node.next.length) {
                return '';
            } else {
                next = node.next[ordinal];
                if (next.id in widget.selection.prims) {
                    return next.itemId;
                } else {
                    return 'finish';
                }
            }
        }
        function copyDuration(widget, node) {
            var copy, block;
            copy = copyItem(widget, node.itemId);
            block = {
                start: node.itemId,
                items: [copy]
            };
            widget.visuals.config.setClipboard('duration', block);
            return 'duration';
        }
        function pasteInSocket(widget, socket) {
            var edits, clipboard, payload, ctype, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    edits = [];
                    clipboard = widget.visuals.config.getClipboard();
                    if (clipboard) {
                        payload = clipboard.content;
                        ctype = clipboard.type;
                        _var2 = socket.type;
                        if (_var2 === 'block') {
                            if (socket.type === ctype) {
                                edits = pasteBlock(widget, socket, payload);
                                __state = '4';
                            } else {
                                __state = '4';
                            }
                        } else {
                            if (_var2 === 'case') {
                                if (ctype === 'case') {
                                    edits = caseInsertCore(widget, socket.node, payload.items[0]);
                                    __state = '4';
                                } else {
                                    __state = '4';
                                }
                            } else {
                                if (_var2 === 'duration') {
                                    if (ctype === 'duration') {
                                        edits = pasteDuration(widget, socket.node, payload.items[0]);
                                        __state = '4';
                                    } else {
                                        __state = '4';
                                    }
                                } else {
                                    if (_var2 === 'first-case') {
                                        if (ctype === 'case') {
                                            edits = firstCaseInsertCore(widget, socket.node, payload.items[0]);
                                            __state = '4';
                                        } else {
                                            __state = '4';
                                        }
                                    } else {
                                        if (_var2 === 'branch') {
                                            if (socket.type === ctype) {
                                                edits = pasteBranch(widget, socket, payload);
                                                __state = '4';
                                            } else {
                                                __state = '4';
                                            }
                                        } else {
                                            __state = '4';
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        __state = '4';
                    }
                    break;
                case '4':
                    return edits;
                default:
                    return;
                }
            }
        }
        function replaceTargets(items, oldToNew) {
            var relink;
            relink = function (item) {
                replaceTarget(item, oldToNew);
            };
            items.forEach(relink);
            return;
        }
        function copyWholeItem(widget, itemId) {
            var item, copy;
            item = widget.model.items[itemId];
            copy = clone(item);
            return copy;
        }
        function getBranchByName(visuals, name) {
            var branch, _var2, _var3, itemId;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    _var2 = visuals.branches;
                    _var3 = 0;
                    __state = '5';
                    break;
                case '5':
                    if (_var3 < _var2.length) {
                        itemId = _var2[_var3];
                        branch = getNode(visuals, itemId);
                        if (branch.content === name) {
                            return branch;
                        } else {
                            _var3++;
                            __state = '5';
                        }
                    } else {
                        return undefined;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function cutOneItem(widget, node) {
            var type, edits;
            type = copyOneItem(widget, node);
            edits = deleteOne(widget, node);
            widget.showPasteSockets(type);
            return;
        }
        function getCopyFunction(node) {
            var _var2;
            _var2 = node.type;
            if (_var2 === 'header') {
                return undefined;
            } else {
                if (_var2 === 'question') {
                    return copyQuestion;
                } else {
                    if (_var2 === 'case') {
                        return copyCase;
                    } else {
                        if (_var2 === 'duration') {
                            return copyDuration;
                        } else {
                            if (_var2 === 'address') {
                                return undefined;
                            } else {
                                if (_var2 === 'params') {
                                    return undefined;
                                } else {
                                    if (_var2 === 'junction') {
                                        return undefined;
                                    } else {
                                        if (_var2 === 'branch') {
                                            return copyBranch;
                                        } else {
                                            if (_var2 === 'select') {
                                                return copySelect;
                                            } else {
                                                if (_var2 === 'loopbegin') {
                                                    return copyLoop;
                                                } else {
                                                    if (_var2 === 'loopend') {
                                                        return copyLoopEnd;
                                                    } else {
                                                        return copySimple;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        function copyOneItem(widget, node) {
            var func, _var2;
            func = getCopyFunction(node);
            if (func) {
                _var2 = func(widget, node);
                return _var2;
            } else {
                return undefined;
            }
        }
        function pasteBranch(widget, socket, block) {
            var items, start, targets, branchId, targetId, edits, visuals, oldToNew, branch, newId, create, _var2, _var3, item, _var5, _var4, _var6, oldId, name;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    visuals = widget.visuals;
                    items = block.items;
                    start = block.start;
                    targets = block.targets;
                    branchId = getSocketBranchId(socket);
                    targetId = getBranchItemId(widget.visuals, branchId);
                    edits = moveBranchIdsRight(visuals, branchId);
                    __state = '8';
                    break;
                case '5':
                    return edits;
                case '6':
                    create = function (item) {
                        createPastedItem(edits, item);
                    };
                    items.forEach(create);
                    __state = '5';
                    break;
                case '7':
                    oldToNew = generateNewIds(widget, items);
                    _var5 = targets;
                    _var4 = Object.keys(_var5);
                    _var6 = 0;
                    __state = '20';
                    break;
                case '8':
                    _var2 = items;
                    _var3 = 0;
                    __state = '15';
                    break;
                case '15':
                    if (_var3 < _var2.length) {
                        item = _var2[_var3];
                        if (item.id === start) {
                            item.branchId = branchId;
                            __state = '7';
                        } else {
                            _var3++;
                            __state = '15';
                        }
                    } else {
                        __state = '7';
                    }
                    break;
                case '20':
                    if (_var6 < _var4.length) {
                        oldId = _var4[_var6];
                        name = _var5[oldId];
                        branch = getBranchByName(visuals, name);
                        if (branch) {
                            newId = branch.itemId;
                            __state = '25';
                        } else {
                            newId = targetId;
                            __state = '25';
                        }
                    } else {
                        replaceTargets(items, oldToNew);
                        __state = '6';
                    }
                    break;
                case '25':
                    oldToNew[oldId] = newId;
                    _var6++;
                    __state = '20';
                    break;
                default:
                    return;
                }
            }
        }
        function copyBlock(widget, startId, items) {
            var block;
            block = {
                start: startId,
                items: items
            };
            widget.visuals.config.setClipboard('block', block);
            return 'block';
        }
        function copyFree(widget, elements) {
            var copy, block, _var2;
            copy = elements.map(function (element) {
                _var2 = copyItem(widget, element.id);
                return _var2;
            });
            block = {
                start: undefined,
                items: copy
            };
            widget.visuals.config.setClipboard('free', block);
            return undefined;
        }
        function createPastedItem(edits, item) {
            var edit;
            edit = createInsert(item);
            edits.push(edit);
            return item.id;
        }
        function copyLoop(widget, node) {
            var loop, end, _var2;
            loop = copyItem(widget, node.itemId);
            loop.one = node.loopEnd.itemId;
            end = copyItem(widget, node.loopEnd.itemId);
            end.one = 'finish';
            _var2 = copyBlock(widget, node.itemId, [
                loop,
                end
            ]);
            return _var2;
        }
        function connectBranch(visuals, branch, upper, lower) {
            var branchLower, floor, _var2, _var3, address;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    branch.topNode = createJunction(visuals, undefined);
                    createEdge(visuals, upper, branch.topNode, false);
                    createEdge(visuals, branch.topNode, branch, true);
                    if (branch.addresses.length === 0) {
                        __state = '5';
                    } else {
                        __state = '6';
                    }
                    break;
                case '4':
                    branch.bottomNode = lower;
                    return;
                case '5':
                    createEdge(visuals, lower, visuals.end, false);
                    __state = '6';
                    break;
                case '6':
                    _var2 = branch.addresses;
                    _var3 = 0;
                    __state = '13';
                    break;
                case '13':
                    if (_var3 < _var2.length) {
                        address = _var2[_var3];
                        branchLower = createJunction(visuals, undefined);
                        floor = createEdge(visuals, lower, branchLower, false);
                        floor.role = 'floor';
                        createEdge(visuals, address, branchLower, true);
                        lower = branchLower;
                        _var3++;
                        __state = '13';
                    } else {
                        __state = '4';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function fillTrigangle(ctx, x1, y1, x2, y2, x3, y3, color) {
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.lineTo(x3, y3);
            ctx.closePath();
            ctx.fill();
            return;
        }
        function firstBranchNode(visuals) {
            var id;
            id = visuals.branches[0];
            return visuals.nodes[id];
        }
        function extendVisualsBox(visuals, origin) {
            var box;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    box = visuals.box;
                    if (origin.x < box.left) {
                        box.left = origin.x;
                        box.width = box.right - box.left;
                        __state = '7';
                    } else {
                        __state = '7';
                    }
                    break;
                case '7':
                    if (origin.y < box.top) {
                        box.top = origin.y;
                        box.height = box.bottom - box.top;
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
        function deleteSimple(node) {
            var edits;
            edits = [];
            popFromSkewer(node, edits);
            return edits;
        }
        function canDelete(visuals, node) {
            var _var2, _var3, _var4;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    _var2 = node.type;
                    if (_var2 === 'junction') {
                        __state = '3';
                    } else {
                        if (_var2 === 'header') {
                            __state = '3';
                        } else {
                            if (_var2 === 'arrow-loop') {
                                __state = '3';
                            } else {
                                if (_var2 === 'address') {
                                    __state = '3';
                                } else {
                                    if (_var2 === 'end') {
                                        __state = '3';
                                    } else {
                                        if (_var2 === 'branch') {
                                            _var3 = canDeleteBranch(visuals);
                                            return _var3;
                                        } else {
                                            if (_var2 === 'case') {
                                                _var4 = canDeleteCase(node);
                                                return _var4;
                                            } else {
                                                return true;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    break;
                case '3':
                    return false;
                default:
                    return;
                }
            }
        }
        function deleteQuestion(widget, node) {
            var edits, toKeep, one, two, model;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    model = widget.model;
                    edits = [];
                    popFromSkewer(node, edits);
                    __state = '5';
                    break;
                case '4':
                    return edits;
                case '5':
                    toKeep = {};
                    toKeep[node.itemId] = true;
                    one = node.next[0];
                    markToStay(widget, node, one.itemId, toKeep);
                    __state = '6';
                    break;
                case '6':
                    two = node.next[1];
                    markToDelete(widget, toKeep, node, two.itemId, edits);
                    __state = '4';
                    break;
                default:
                    return;
                }
            }
        }
        function deleteSelect(widget, node) {
            var edits, toKeep, one, model, first, below, edgeUp;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    model = widget.model;
                    edits = [];
                    first = firstCase(node);
                    below = first.next[0];
                    edgeUp = node.up;
                    redirectUpperItems(edits, edgeUp.links, below.itemId);
                    deleteItem(edits, node);
                    __state = '5';
                    break;
                case '4':
                    return edits;
                case '5':
                    toKeep = {};
                    toKeep[node.itemId] = true;
                    one = node.next[0];
                    markToStay(widget, undefined, below.itemId, toKeep);
                    __state = '6';
                    break;
                case '6':
                    markToDelete(widget, toKeep, node, first.itemId, edits);
                    __state = '4';
                    break;
                default:
                    return;
                }
            }
        }
        function markToDelete(widget, visited, prev, startItemId, edits) {
            var context, addDeletion;
            context = {
                visuals: widget.visuals,
                items: widget.model.items,
                deleteList: [],
                visited: visited,
                edits: edits
            };
            traverseItemToDelete(context, prev, startItemId);
            addDeletion = function (id) {
                deleteWithDur(widget, id, edits);
            };
            context.deleteList.forEach(addDeletion);
            return;
        }
        function canDeleteCase(caseNode) {
            var select;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    select = caseNode.select;
                    if (select.cases.length > 2) {
                        if (select.cases[0] === caseNode) {
                            __state = '7';
                        } else {
                            return true;
                        }
                    } else {
                        __state = '7';
                    }
                    break;
                case '7':
                    return false;
                default:
                    return;
                }
            }
        }
        function deleteCase(widget, node) {
            var edits, model, left, right, toKeep, below;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    model = widget.model;
                    edits = [];
                    left = node.prev[0];
                    if (left === node.select) {
                        right = node.next[1];
                        updateItem(edits, left.itemId, { one: right.itemId });
                        __state = '15';
                    } else {
                        if (node.next.length === 2) {
                            right = node.next[1];
                            updateItem(edits, left.itemId, { two: right.itemId });
                            __state = '15';
                        } else {
                            updateItem(edits, left.itemId, { two: '' });
                            __state = '15';
                        }
                    }
                    break;
                case '4':
                    return edits;
                case '5':
                    toKeep = markOtherCasesToStay(widget, node);
                    __state = '6';
                    break;
                case '6':
                    below = node.next[0];
                    toKeep[node.itemId] = true;
                    markToDelete(widget, toKeep, node, below.itemId, edits);
                    __state = '4';
                    break;
                case '15':
                    deleteItem(edits, node);
                    __state = '5';
                    break;
                default:
                    return;
                }
            }
        }
        function deleteOne(widget, node) {
            var edits, _var2, _var3, _var4;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    edits = [];
                    _var3 = canDelete(widget.visuals, node);
                    if (_var3) {
                        _var2 = node.type;
                        if (_var2 === 'question') {
                            edits = deleteQuestion(widget, node);
                            __state = '_item12';
                        } else {
                            if (_var2 === 'loopbegin') {
                                edits = deleteLoop(node);
                                __state = '_item12';
                            } else {
                                if (_var2 === 'loopend') {
                                    edits = deleteLoop(node.loopStart);
                                    __state = '_item12';
                                } else {
                                    if (_var2 === 'params') {
                                        edits = deleteParams(node);
                                        __state = '_item12';
                                    } else {
                                        if (_var2 === 'case') {
                                            edits = deleteCase(widget, node);
                                            __state = '_item12';
                                        } else {
                                            if (_var2 === 'select') {
                                                edits = deleteSelect(widget, node);
                                                __state = '_item12';
                                            } else {
                                                if (_var2 === 'branch') {
                                                    edits = deleteBranch(widget, node);
                                                    __state = '_item12';
                                                } else {
                                                    if (_var2 === 'duration') {
                                                        edits = deleteDuration(widget, node);
                                                        __state = '_item12';
                                                    } else {
                                                        edits = deleteSimple(node);
                                                        __state = '_item12';
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        __state = '1';
                    }
                    break;
                case '_item12':
                    _var4 = doEdit(widget, edits);
                    return _var4;
                default:
                    return;
                }
            }
        }
        function deleteBlock(widget, nodes) {
            var bottomId, head, selection, edits, addDeletion, visuals, _var2;
            visuals = widget.visuals;
            selection = widget.selection;
            bottomId = findSelectionBottom(widget);
            head = getNode(visuals, selection.head);
            edits = [];
            redirectUpperItems(edits, head.up.links, bottomId);
            addDeletion = function (node) {
                deleteItemCore(edits, node.id);
            };
            nodes.forEach(addDeletion);
            _var2 = doEdit(widget, edits);
            return _var2;
        }
        function deleteSelection(widget) {
            var nodes, elements;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    elements = getSelectedFree(widget);
                    if (elements.length === 0) {
                        nodes = getNodesFromSelection(widget);
                        deleteSelectionCore(widget, nodes);
                        __state = '1';
                    } else {
                        deleteFree(widget, elements);
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function deleteIconsOnPath(widget, node, endId, edits) {
            var toKeep;
            toKeep = {};
            toKeep[endId] = true;
            toKeep[node.itemId] = true;
            markToDelete(widget, toKeep, node, node.one, edits);
            return toKeep;
        }
        function deleteParPath(widget, node) {
            var edits, model, left, endId, end, _var2, _var3;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    model = widget.model;
                    edits = [];
                    left = getLeft(node);
                    endId = getParTarget(node);
                    end = getNode(widget.visuals, endId);
                    deleteIconsOnPath(widget, node, endId, edits);
                    _var2 = isFirstPar(left);
                    if (_var2) {
                        if (node.right) {
                            __state = '5';
                        } else {
                            __state = '31';
                        }
                    } else {
                        __state = '5';
                    }
                    break;
                case '4':
                    _var3 = doEdit(widget, edits);
                    return _var3;
                case '5':
                    deleteItem(edits, node);
                    if (node.two) {
                        updateItem(edits, left.itemId, { two: node.two });
                        __state = '4';
                    } else {
                        updateItem(edits, left.itemId, { two: '' });
                        __state = '4';
                    }
                    break;
                case '31':
                    deleteItem(edits, node);
                    deleteItem(edits, end);
                    deleteItem(edits, left);
                    if (left.one === endId) {
                        redirectUpperItems(edits, left.up.links, end.one);
                        __state = '4';
                    } else {
                        redirectUpperItems(edits, left.up.links, left.one);
                        redirectPrevItems(edits, end, end.one);
                        __state = '4';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function deleteWithDur(widget, id, edits) {
            var node;
            node = getNode(widget.visuals, id);
            deleteItem(edits, node);
            return;
        }
        function deleteParams(node) {
            var change;
            change = {
                fields: { params: '' },
                op: 'update'
            };
            return [change];
        }
        function deleteFree(widget, elements) {
            var edits, toDelete, _var2, _var3, element, _var4;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    edits = [];
                    toDelete = {};
                    _var2 = elements;
                    _var3 = 0;
                    __state = '36';
                    break;
                case '36':
                    if (_var3 < _var2.length) {
                        element = _var2[_var3];
                        deleteItemCore(edits, element.id);
                        toDelete[element.id] = true;
                        _var3++;
                        __state = '36';
                    } else {
                        __state = '41';
                    }
                    break;
                case '40':
                    _var4 = doEdit(widget, edits);
                    return _var4;
                case '41':
                    rearrangeZIndexes(widget, toDelete, edits);
                    __state = '40';
                    break;
                default:
                    return;
                }
            }
        }
        function canDeleteBranch(visuals) {
            return visuals.branches.length > 2;
        }
        function deleteBranch(widget, node) {
            var edits, visuals, next, toDelete, remaining, ditch, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    visuals = widget.visuals;
                    edits = moveBranchIdsLeft(visuals, node.branchId);
                    next = getBranchById(visuals, node.branchId + 1);
                    if (next) {
                        __state = '8';
                    } else {
                        next = getBranchById(visuals, 1);
                        __state = '8';
                    }
                    break;
                case '8':
                    toDelete = {};
                    scanBranchItems(node, toDelete);
                    remaining = subtract(widget.model.items, toDelete);
                    redirectBranch(visuals, remaining, toDelete, next.itemId, edits);
                    ditch = function (itemId) {
                        deleteWithDur(widget, itemId, edits);
                    };
                    _var2 = Object.keys(toDelete);
                    _var2.forEach(ditch);
                    return edits;
                default:
                    return;
                }
            }
        }
        function findSelectionBottom(widget) {
            var next, node, visuals, selection;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    visuals = widget.visuals;
                    selection = widget.selection;
                    node = getNode(visuals, selection.head);
                    __state = '7';
                    break;
                case '7':
                    next = node.next[0];
                    if (next.id in selection.prims) {
                        node = next;
                        __state = '7';
                    } else {
                        return next.itemId;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function deleteDuration(widget, node) {
            var edits, host;
            edits = [];
            host = getRight(node);
            updateItem(edits, host.id, { side: '' });
            deleteItem(edits, node);
            return edits;
        }
        function hasUntouchedArrows(visited, node) {
            var _var2, _var3, prev;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    _var2 = node.aprev;
                    _var3 = 0;
                    __state = '7';
                    break;
                case '7':
                    if (_var3 < _var2.length) {
                        prev = _var2[_var3];
                        if (prev.itemId in visited) {
                            _var3++;
                            __state = '7';
                        } else {
                            return true;
                        }
                    } else {
                        return false;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function traverseItemToDelete(context, prev, itemId) {
            var visited, node, item, _var2, _var3, _var4;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    visited = context.visited;
                    if (itemId) {
                        if (itemId in visited) {
                            __state = '1';
                        } else {
                            node = getNodeByItem(context.visuals, itemId);
                            if (node.type === 'branch') {
                                __state = '1';
                            } else {
                                _var2 = isBackLink(prev, node);
                                if (_var2) {
                                    _var4 = hasUntouchedArrows(visited, node);
                                    if (_var4) {
                                        __state = '1';
                                    } else {
                                        visited[itemId] = true;
                                        context.deleteList.push(itemId);
                                        unlinkArrow(node, visited, context.edits);
                                        __state = '1';
                                    }
                                } else {
                                    _var3 = hasUntouchedUpstream(visited, node);
                                    if (_var3) {
                                        __state = '1';
                                    } else {
                                        visited[itemId] = true;
                                        context.deleteList.push(itemId);
                                        item = context.items[itemId];
                                        traverseItemToDelete(context, node, item.one);
                                        traverseItemToDelete(context, node, item.two);
                                        __state = '1';
                                    }
                                }
                            }
                        }
                    } else {
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function traverseItem(widget, prev, itemId, visited) {
            var node, item, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (itemId) {
                        if (itemId in visited) {
                            __state = '1';
                        } else {
                            visited[itemId] = false;
                            node = getNodeByItem(widget.visuals, itemId);
                            if (node.type === 'branch') {
                                __state = '1';
                            } else {
                                _var2 = isBackLink(prev, node);
                                if (_var2) {
                                    __state = '1';
                                } else {
                                    item = widget.model.items[itemId];
                                    traverseItem(widget, node, item.one, visited);
                                    traverseItem(widget, node, item.two, visited);
                                    __state = '1';
                                }
                            }
                        }
                    } else {
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function unlinkArrow(arrowNode, visited, edits) {
            var node;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    node = arrowNode;
                    __state = '7';
                    break;
                case '4':
                    return;
                case '5':
                    redirectUpperItems(edits, arrowNode.up.links, node.itemId);
                    __state = '4';
                    break;
                case '7':
                    node = node.next[0];
                    if (visited[node.itemId]) {
                        __state = '7';
                    } else {
                        __state = '5';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function hasUntouchedUpstream(visited, node) {
            var _var2, _var3, prev;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (node.type === 'case') {
                        return false;
                    } else {
                        _var2 = node.prev;
                        _var3 = 0;
                        __state = '7';
                    }
                    break;
                case '7':
                    if (_var3 < _var2.length) {
                        prev = _var2[_var3];
                        if (prev.itemId in visited) {
                            _var3++;
                            __state = '7';
                        } else {
                            return true;
                        }
                    } else {
                        return false;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function markToStay(widget, prev, startItemId, toKeep) {
            traverseItem(widget, prev, startItemId, toKeep);
            return;
        }
        function deleteLoop(node) {
            var edits, edgeUp, end, beforeEnd, edgeUp2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    edits = [];
                    edgeUp = node.up;
                    end = node.loopEnd;
                    beforeEnd = getUp(end);
                    if (beforeEnd === node) {
                        __state = '6';
                    } else {
                        __state = '7';
                    }
                    break;
                case '4':
                    deleteItem(edits, node);
                    deleteItem(edits, end);
                    return edits;
                case '6':
                    redirectUpperItems(edits, edgeUp.links, end.one);
                    __state = '4';
                    break;
                case '7':
                    redirectUpperItems(edits, edgeUp.links, node.one);
                    edgeUp2 = end.up;
                    redirectUpperItems(edits, edgeUp2.links, end.one);
                    __state = '4';
                    break;
                default:
                    return;
                }
            }
        }
        function deleteSelectionCore(widget, nodes) {
            var _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    _var2 = nodes.length;
                    if (_var2 === 0) {
                        __state = '1';
                    } else {
                        if (_var2 === 1) {
                            deleteOne(widget, nodes[0]);
                            __state = '1';
                        } else {
                            deleteBlock(widget, nodes);
                            __state = '1';
                        }
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function markOtherCasesToStay(widget, node) {
            var toKeep, below, _var2, _var3, caseNode;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    toKeep = {};
                    _var2 = node.select.cases;
                    _var3 = 0;
                    __state = '6';
                    break;
                case '5':
                    _var3++;
                    __state = '6';
                    break;
                case '6':
                    if (_var3 < _var2.length) {
                        caseNode = _var2[_var3];
                        if (caseNode === node) {
                            __state = '5';
                        } else {
                            below = caseNode.next[0];
                            markToStay(widget, caseNode, below.itemId, toKeep);
                            __state = '5';
                        }
                    } else {
                        return toKeep;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function setScrollFromMouseEvent(widget, x, y) {
            var norm;
            norm = sanitizeScroll(widget, x, y);
            copyScrollToScrollable(widget, norm.x, norm.y);
            return;
        }
        function crawlSubdiagram(visuals, startEdge) {
            var outerSub, innerSub, outerCrawler, innerCrawler;
            outerSub = createSubspace(visuals);
            innerSub = createSubspace(visuals);
            outerCrawler = createOuter(visuals, outerSub);
            innerCrawler = createInner(visuals, innerSub);
            crawl(outerCrawler, startEdge);
            crawl(innerCrawler, startEdge);
            return;
        }
        function layoutPrimitive(visuals) {
            var branch, header;
            branch = firstBranchNode(visuals);
            header = visuals.header;
            header.next = branch.next;
            buildManhattan(visuals, header);
            return;
        }
        function DrakonCanvas_arrowUp(self) {
            var first, nodes, node;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    tracing.trace('DrakonCanvas.arrowUp');
                    if (self.visuals.config.canSelect) {
                        nodes = getNodesFromSelection(self);
                        if (nodes.length === 0) {
                            __state = '1';
                        } else {
                            first = nodes[0];
                            node = findNeighbour(first, 'up', 'head');
                            if (node) {
                                __state = '8';
                            } else {
                                node = findClosestNode(self, function (n) {
                                    return n.y < first.y;
                                }, first, true);
                                if (node) {
                                    __state = '8';
                                } else {
                                    __state = '1';
                                }
                            }
                        }
                    } else {
                        __state = '1';
                    }
                    break;
                case '8':
                    self.showItem(node.id);
                    __state = '1';
                    break;
                default:
                    return;
                }
            }
        }
        function DrakonCanvas_setDiagramStyle(self, style) {
            var styleStr, change, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    tracing.trace('DrakonCanvas.setDiagramStyle', style);
                    if (style) {
                        styleStr = JSON.stringify(style);
                        __state = '16';
                    } else {
                        styleStr = '';
                        __state = '16';
                    }
                    break;
                case '16':
                    change = {
                        fields: { style: styleStr },
                        op: 'update'
                    };
                    _var2 = updateAndKeepSelection(self, [change]);
                    return _var2;
                default:
                    return;
                }
            }
        }
        function getDiagramCenter(widget) {
            var pos, metre;
            pos = widgetToDiagram(widget, widget.width / 2, widget.height / 2);
            metre = widget.visuals.config.metre;
            pos.x = snapUpTo(metre, pos.x);
            pos.y = snapUpTo(metre, pos.y);
            return pos;
        }
        function canEditLink(widget, element) {
            var elementActions, _var2;
            elementActions = widget.freeIcons[element.type];
            if (elementActions.canEditLink) {
                _var2 = elementActions.canEditLink();
                return _var2;
            } else {
                return false;
            }
        }
        function getFree(visuals, id) {
            var _var2, _var3, element;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    _var2 = visuals.free;
                    _var3 = 0;
                    __state = '5';
                    break;
                case '5':
                    if (_var3 < _var2.length) {
                        element = _var2[_var3];
                        if (element.id === id) {
                            return element;
                        } else {
                            _var3++;
                            __state = '5';
                        }
                    } else {
                        return undefined;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function flowFreeElement(visuals, element) {
            var flow, config;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    flow = visuals.config.iconContent[element.type];
                    if (flow) {
                        __state = '9';
                    } else {
                        flow = visuals.config.iconContent.action;
                        console.error('iconContent callback not found for element of type: ' + element.type);
                        __state = '9';
                    }
                    break;
                case '9':
                    element.frame = flow(element, visuals.config, visuals.container);
                    config = visuals.config;
                    element.width = snapUp(config, element.frame.width);
                    element.height = snapUp(config, element.frame.height);
                    element.height = Math.max(config.minHeight, element.height);
                    return;
                default:
                    return;
                }
            }
        }
        function insertFreeItem(widget, edits, item) {
            var _var2;
            item.zIndex = widget.visuals.free.length;
            _var2 = createItem(widget.model, edits, item);
            return _var2;
        }
        function calculateFreeBox(widget, element, config) {
            var elementActions;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    elementActions = widget.freeIcons[element.type];
                    if (elementActions) {
                        elementActions.calculateBox(element, config);
                        __state = '1';
                    } else {
                        console.error('calculateFreeBox: callback not found for element of type: ' + element.type);
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function hitFreeElement(widget, element, pos) {
            var elementActions, _var2, _var3;
            _var2 = hitBox(element.box, pos.x, pos.y);
            if (_var2) {
                elementActions = widget.freeIcons[element.type];
                _var3 = elementActions.hit(element, pos);
                return _var3;
            } else {
                return false;
            }
        }
        function drawFreeCandies(widget, element, ctx) {
            var elementActions;
            elementActions = widget.freeIcons[element.type];
            elementActions.drawCandies(widget, element, ctx);
            return;
        }
        function snapUp(config, size) {
            var _var2;
            _var2 = snapUpTo(config.freeSnap, size);
            return _var2;
        }
        function canEditContent(widget, element) {
            var elementType, _var2;
            elementType = widget.freeIcons[element.type];
            if (elementType.canEditContent) {
                _var2 = elementType.canEditContent();
                return _var2;
            } else {
                return false;
            }
        }
        function freeFromItem(visuals, id, item) {
            var element;
            element = {};
            Object.assign(element, item);
            element.id = id;
            parseStyle(item, element);
            visuals.free.push(element);
            return element;
        }
        function HandleNorth_xEnabled(self) {
            return false;
        }
        function HandleNorth_getCursor(self) {
            return 'ns-resize';
        }
        function HandleNorth_yEnabled(self) {
            return true;
        }
        function HandleNorth_dragTo(self, x, y) {
            var element;
            element = self.element;
            element.top = y;
            element.height = self.bottom - y;
            findHorizontalForHandle(self, element, y);
            return;
        }
        function HandleNorth_getMaxX(self) {
            return self.maxX;
        }
        function HandleNorth_complete(self) {
            saveRectangleCoords(self);
            return;
        }
        function HandleNorth_getMinY(self) {
            return self.minY;
        }
        function HandleNorth_getMaxY(self) {
            return self.maxY;
        }
        function HandleNorth_getMinX(self) {
            return self.minX;
        }
        function HandleNE_yEnabled(self) {
            return true;
        }
        function HandleNE_complete(self) {
            saveRectangleCoords(self);
            return;
        }
        function HandleNE_getMaxY(self) {
            return self.maxY;
        }
        function HandleNE_getCursor(self) {
            return 'nesw-resize';
        }
        function HandleNE_getMaxX(self) {
            return self.maxX;
        }
        function HandleNE_dragTo(self, x, y) {
            self.element.top = y;
            self.element.width = x - self.left;
            self.element.height = self.bottom - y;
            findHorizontalForHandle(self, self.element, y);
            findVerticalForHandle(self, self.element, x);
            return;
        }
        function HandleNE_getMinX(self) {
            return self.minX;
        }
        function HandleNE_getMinY(self) {
            return self.minY;
        }
        function HandleNE_xEnabled(self) {
            return true;
        }
        function HandleSW_getMaxX(self) {
            return self.maxX;
        }
        function HandleSW_dragTo(self, x, y) {
            self.element.left = x;
            self.element.top = self.top;
            self.element.width = self.right - x;
            self.element.height = y - self.top;
            findHorizontalForHandle(self, self.element, y);
            findVerticalForHandle(self, self.element, x);
            return;
        }
        function HandleSW_getMaxY(self) {
            return self.maxY;
        }
        function HandleSW_complete(self) {
            saveRectangleCoords(self);
            return;
        }
        function HandleSW_getMinX(self) {
            return self.minX;
        }
        function HandleSW_yEnabled(self) {
            return true;
        }
        function HandleSW_getMinY(self) {
            return self.minY;
        }
        function HandleSW_getCursor(self) {
            return 'nesw-resize';
        }
        function HandleSW_xEnabled(self) {
            return true;
        }
        function saveRectangleCoords(handle) {
            var change;
            change = {
                id: handle.element.id,
                fields: {
                    left: handle.element.left,
                    top: handle.element.top,
                    width: handle.element.width,
                    height: handle.element.height
                },
                op: 'update'
            };
            updateAndKeepSelection(handle.widget, [change]);
            return;
        }
        function saveLineCoords(handle) {
            var change;
            change = {
                id: handle.element.id,
                fields: {
                    left: handle.element.left,
                    top: handle.element.top,
                    x2: handle.element.x2,
                    y2: handle.element.y2
                },
                op: 'update'
            };
            updateAndKeepSelection(handle.widget, [change]);
            return;
        }
        function findHorizontalForHandle(handle, element, y) {
            var ebox;
            ebox = createBox(element.left, element.top, element.width, element.height);
            findHorizontalGuide(handle.widget, element.id, ebox, y);
            return;
        }
        function HandleNW_getMinY(self) {
            return self.minY;
        }
        function HandleNW_dragTo(self, x, y) {
            self.element.left = x;
            self.element.top = y;
            self.element.width = self.right - x;
            self.element.height = self.bottom - y;
            findHorizontalForHandle(self, self.element, y);
            findVerticalForHandle(self, self.element, x);
            return;
        }
        function HandleNW_getMinX(self) {
            return self.minX;
        }
        function HandleNW_complete(self) {
            saveRectangleCoords(self);
            return;
        }
        function HandleNW_yEnabled(self) {
            return true;
        }
        function HandleNW_getMaxX(self) {
            return self.maxX;
        }
        function HandleNW_xEnabled(self) {
            return true;
        }
        function HandleNW_getCursor(self) {
            return 'nwse-resize';
        }
        function HandleNW_getMaxY(self) {
            return self.maxY;
        }
        function HandleSouth_getMinX(self) {
            return self.minX;
        }
        function HandleSouth_yEnabled(self) {
            return true;
        }
        function HandleSouth_getMaxX(self) {
            return self.maxX;
        }
        function HandleSouth_getMaxY(self) {
            return self.maxY;
        }
        function HandleSouth_getCursor(self) {
            return 'ns-resize';
        }
        function HandleSouth_complete(self) {
            saveRectangleCoords(self);
            return;
        }
        function HandleSouth_dragTo(self, x, y) {
            var element;
            element = self.element;
            self.element.height = y - self.top;
            findHorizontalForHandle(self, element, y);
            return;
        }
        function HandleSouth_getMinY(self) {
            return self.minY;
        }
        function HandleSouth_xEnabled(self) {
            return false;
        }
        function LineEnd_getMinY(self) {
            return Number.MIN_SAFE_INTEGER;
        }
        function LineEnd_yEnabled(self) {
            return true;
        }
        function LineEnd_getCursor(self) {
            return 'move';
        }
        function LineEnd_xEnabled(self) {
            return true;
        }
        function LineEnd_getMinX(self) {
            return Number.MIN_SAFE_INTEGER;
        }
        function LineEnd_dragTo(self, x, y) {
            var x2, y2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    x2 = x - self.element.left;
                    y2 = y - self.element.top;
                    if (x2 === 0) {
                        if (y2 === 0) {
                            __state = '1';
                        } else {
                            __state = '4';
                        }
                    } else {
                        __state = '4';
                    }
                    break;
                case '4':
                    self.element.x2 = x2;
                    self.element.y2 = y2;
                    findGuidesForPoint(self, x, y);
                    __state = '1';
                    break;
                default:
                    return;
                }
            }
        }
        function LineEnd_complete(self) {
            saveLineCoords(self);
            return;
        }
        function LineEnd_getMaxY(self) {
            return Number.MAX_SAFE_INTEGER;
        }
        function LineEnd_getMaxX(self) {
            return Number.MAX_SAFE_INTEGER;
        }
        function LineStart_getMaxY(self) {
            return Number.MAX_SAFE_INTEGER;
        }
        function LineStart_getMaxX(self) {
            return Number.MAX_SAFE_INTEGER;
        }
        function LineStart_getCursor(self) {
            return 'move';
        }
        function LineStart_yEnabled(self) {
            return true;
        }
        function LineStart_dragTo(self, x, y) {
            var x2, y2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    x2 = self.right - x;
                    y2 = self.bottom - y;
                    if (x2 === 0) {
                        if (y2 === 0) {
                            __state = '1';
                        } else {
                            __state = '3';
                        }
                    } else {
                        __state = '3';
                    }
                    break;
                case '3':
                    self.element.left = x;
                    self.element.top = y;
                    self.element.x2 = x2;
                    self.element.y2 = y2;
                    findGuidesForPoint(self, x, y);
                    __state = '1';
                    break;
                default:
                    return;
                }
            }
        }
        function LineStart_getMinX(self) {
            return Number.MIN_SAFE_INTEGER;
        }
        function LineStart_xEnabled(self) {
            return true;
        }
        function LineStart_complete(self) {
            saveLineCoords(self);
            return;
        }
        function LineStart_getMinY(self) {
            return Number.MIN_SAFE_INTEGER;
        }
        function findGuidesForPoint(handle, x, y) {
            var sourceBox;
            sourceBox = createBox(x, y, 0, 0);
            findHorizontalGuide(handle.widget, handle.element.id, sourceBox, y);
            findVerticalGuide(handle.widget, handle.element.id, sourceBox, x);
            findHorizontalCentralGuide(handle.widget, handle.element.id, sourceBox, y);
            findVerticalCentralGuide(handle.widget, handle.element.id, sourceBox, x);
            return;
        }
        function HandleWest_getMinX(self) {
            return self.minX;
        }
        function HandleWest_complete(self) {
            saveRectangleCoords(self);
            return;
        }
        function HandleWest_dragTo(self, x, y) {
            self.element.left = x;
            self.element.width = self.right - x;
            findVerticalForHandle(self, self.element, x);
            return;
        }
        function HandleWest_getMaxY(self) {
            return self.maxY;
        }
        function HandleWest_xEnabled(self) {
            return true;
        }
        function HandleWest_yEnabled(self) {
            return false;
        }
        function HandleWest_getCursor(self) {
            return 'ew-resize';
        }
        function HandleWest_getMinY(self) {
            return self.minY;
        }
        function HandleWest_getMaxX(self) {
            return self.maxX;
        }
        function findVerticalForHandle(handle, element, x) {
            var ebox;
            ebox = createBox(element.left, element.top, element.width, element.height);
            findVerticalGuide(handle.widget, element.id, ebox, x);
            return;
        }
        function HandleSE_yEnabled(self) {
            return true;
        }
        function HandleSE_getMaxX(self) {
            return self.maxX;
        }
        function HandleSE_dragTo(self, x, y) {
            self.element.width = x - self.left;
            self.element.height = y - self.top;
            findHorizontalForHandle(self, self.element, y);
            findVerticalForHandle(self, self.element, x);
            return;
        }
        function HandleSE_xEnabled(self) {
            return true;
        }
        function HandleSE_getMinY(self) {
            return self.minY;
        }
        function HandleSE_getMinX(self) {
            return self.minX;
        }
        function HandleSE_getCursor(self) {
            return 'nwse-resize';
        }
        function HandleSE_getMaxY(self) {
            return self.maxY;
        }
        function HandleSE_complete(self) {
            saveRectangleCoords(self);
            return;
        }
        function HandleEast_dragTo(self, x, y) {
            self.element.width = x - self.left;
            findVerticalForHandle(self, self.element, x);
            return;
        }
        function HandleEast_getMinY(self) {
            return self.minY;
        }
        function HandleEast_xEnabled(self) {
            return true;
        }
        function HandleEast_getMaxX(self) {
            return self.maxX;
        }
        function HandleEast_getMaxY(self) {
            return self.maxY;
        }
        function HandleEast_getCursor(self) {
            return 'ew-resize';
        }
        function HandleEast_getMinX(self) {
            return self.minX;
        }
        function HandleEast_yEnabled(self) {
            return false;
        }
        function HandleEast_complete(self) {
            saveRectangleCoords(self);
            return;
        }
        function isFree(widget, item) {
            if (widget.freeIcons[item.type]) {
                return true;
            } else {
                return false;
            }
        }
        function centerContentFree(visuals, element) {
            var top, centerY;
            centerY = element.top + element.height / 2;
            top = Math.floor(centerY - element.contentHeight / 2);
            renderContentCore(visuals, element, element.left, top);
            return;
        }
        function initFreeFunctions(widget) {
            var groupLeft, groupRight, arrow;
            widget.freeIcons = {};
            arrow = Line();
            arrow.style = JSON.stringify({ headStyle: 'arrow' });
            widget.freeIcons['group-duration'] = GroupDuration();
            widget.freeIcons['rectangle'] = Rectangle();
            widget.freeIcons['line'] = Line();
            widget.freeIcons['text'] = Text();
            groupLeft = GroupDuration();
            groupLeft.flag1 = 1;
            groupRight = GroupDuration();
            groupRight.flag1 = 0;
            widget.freeIcons['group-duration-right'] = groupLeft;
            widget.freeIcons['group-duration-left'] = groupRight;
            widget.freeIcons['arrow'] = arrow;
            return;
        }
        function drawFreeIcon(widget, element, ctx) {
            var elementActions;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    ctx.setLineDash([]);
                    elementActions = widget.freeIcons[element.type];
                    if (elementActions) {
                        elementActions.render(widget.visuals, element, ctx);
                        __state = '1';
                    } else {
                        console.error('drawFreeIcon: callback not found for element of type: ' + element.type);
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function snapUpTo(snap, size) {
            var snappedUp, _var2;
            _var2 = Math.ceil(size / snap);
            snappedUp = _var2 * snap;
            return snappedUp;
        }
        function flowFreeIcon(widget, visuals, element) {
            var size, elementActions;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    elementActions = widget.freeIcons[element.type];
                    size = elementActions.flow(visuals, element);
                    if (size) {
                        element.contentHeight = size.height;
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
        function rearrangeZIndexes(widget, toDelete, edits) {
            var currentZ, _var2, _var3, element;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    currentZ = 0;
                    _var2 = widget.visuals.free;
                    _var3 = 0;
                    __state = '5';
                    break;
                case '4':
                    _var3++;
                    __state = '5';
                    break;
                case '5':
                    if (_var3 < _var2.length) {
                        element = _var2[_var3];
                        if (element.id in toDelete) {
                            __state = '4';
                        } else {
                            if (element.zIndex === currentZ) {
                                __state = '7';
                            } else {
                                updateItem(edits, element.id, { zIndex: currentZ });
                                __state = '7';
                            }
                        }
                    } else {
                        return;
                    }
                    break;
                case '7':
                    currentZ++;
                    __state = '4';
                    break;
                default:
                    return;
                }
            }
        }
        function sortFreeIcons(visuals) {
            sortBy(visuals.free, 'zIndex');
            return;
        }
        function bringToFront(widget, id) {
            var toDelete, edits, maxIndex, _var2;
            edits = [];
            toDelete = {};
            toDelete[id] = true;
            rearrangeZIndexes(widget, toDelete, edits);
            maxIndex = widget.visuals.free.length - 1;
            updateItem(edits, id, { zIndex: maxIndex });
            _var2 = updateAndKeepSelection(widget, edits);
            return _var2;
        }
        function sendToBack(widget, id) {
            var edits, free, ordinal, element, i, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    edits = [];
                    free = widget.visuals.free;
                    ordinal = findIndex(free, 'id', id);
                    i = 0;
                    __state = '17';
                    break;
                case '9':
                    _var2 = updateAndKeepSelection(widget, edits);
                    return _var2;
                case '12':
                    updateItem(edits, id, { zIndex: 0 });
                    __state = '9';
                    break;
                case '17':
                    if (i < ordinal) {
                        element = free[i];
                        updateItem(edits, element.id, { zIndex: i + 1 });
                        i++;
                        __state = '17';
                    } else {
                        __state = '12';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function getFreeAccepted(widget, element) {
            var elementActions, _var2;
            elementActions = widget.freeIcons[element.type];
            _var2 = elementActions.getAccepted();
            return _var2;
        }
        function calculateRectBox(element) {
            element.box = createBox(element.left, element.top, element.width, element.height);
            return;
        }
        function Text_drawCandies(self, widget, element, ctx) {
            drawRectCandies(widget, element, ctx);
            return;
        }
        function Text_calculateBox(self, element, config) {
            calculateRectBox(element);
            return;
        }
        function Text_canGuide(self) {
            return true;
        }
        function Text_getAccepted(self) {
            var accepted;
            accepted = getStandardProps();
            return [
                'iconBack',
                'color',
                'font',
                'textAlign'
            ];
        }
        function Text_create(self, pos) {
            var item;
            item = {
                type: 'text',
                left: pos.x,
                top: pos.y,
                width: 200,
                height: 20,
                content: '<p>Text</p>'
            };
            return item;
        }
        function Text_hit(self, element, pos) {
            return true;
        }
        function Text_canEditContent(self) {
            return true;
        }
        function Text_flow(self, visuals, element) {
            var options, _var2;
            options = { centerContent: false };
            _var2 = buildTextContent(visuals, element, options, element.width);
            return _var2;
        }
        function Text_render(self, visuals, element, ctx) {
            var left, top, width, height, config;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    config = visuals.config;
                    left = element.left;
                    top = element.top;
                    width = element.width;
                    height = element.height;
                    if (element.style) {
                        if (element.style.iconBack) {
                            ctx.fillStyle = element.style.iconBack;
                            ctx.fillRect(left, top, width, height);
                            __state = '5';
                        } else {
                            __state = '5';
                        }
                    } else {
                        __state = '5';
                    }
                    break;
                case '5':
                    centerContentFree(visuals, element, ctx);
                    return;
                default:
                    return;
                }
            }
        }
        function GroupDuration_hit(self, element, pos) {
            var _var2, _var3, box, _var4, _var5;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    _var5 = hitBox(element.innerBox, pos.x, pos.y);
                    if (_var5) {
                        __state = '8';
                    } else {
                        _var2 = element.subboxes;
                        _var3 = 0;
                        __state = '5';
                    }
                    break;
                case '5':
                    if (_var3 < _var2.length) {
                        box = _var2[_var3];
                        _var4 = hitBox(box, pos.x, pos.y);
                        if (_var4) {
                            __state = '8';
                        } else {
                            _var3++;
                            __state = '5';
                        }
                    } else {
                        return false;
                    }
                    break;
                case '8':
                    return true;
                default:
                    return;
                }
            }
        }
        function GroupDuration_calculateBox(self, element, config) {
            var topY, bottomY, topX, bottomX, innerRight, left, right, margin, width, height, _var2, _var3, _var4, _var5, _var6, _var7, _var8, _var9;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    element.innerBox = boxFromPoint(element.x, element.y, element.w, element.h);
                    __state = '16';
                    break;
                case '15':
                    return;
                case '16':
                    topY = element.y + element.hiY;
                    bottomY = element.y + element.loY;
                    topX = element.x + element.hiX;
                    bottomX = element.x + element.loX;
                    innerRight = element.innerBox.left + element.innerBox.width;
                    _var2 = Math.min(bottomX, element.innerBox.left);
                    left = Math.min(topX, _var2);
                    _var3 = Math.max(bottomX, innerRight);
                    right = Math.max(topX, _var3);
                    margin = config.socketTouchRadius;
                    width = right - left;
                    height = bottomY - topY;
                    element.box = createBoxWithMargin(left, topY, width, height, margin);
                    __state = '25';
                    break;
                case '25':
                    element.subboxes = [];
                    _var4 = boxForVerticalLine(element.x, topY, element.y, margin);
                    element.subboxes.push(_var4);
                    _var5 = boxForVerticalLine(element.x, element.y, bottomY, margin);
                    element.subboxes.push(_var5);
                    if (element.flag1) {
                        _var8 = boxForHorizontalLine(element.x + element.hiX, topY, element.x, margin);
                        element.subboxes.push(_var8);
                        _var9 = boxForHorizontalLine(element.x + element.loX, bottomY, element.x, margin);
                        element.subboxes.push(_var9);
                        __state = '15';
                    } else {
                        _var6 = boxForHorizontalLine(element.x, topY, element.x + element.hiX, margin);
                        element.subboxes.push(_var6);
                        _var7 = boxForHorizontalLine(element.x, bottomY, element.x + element.loX, margin);
                        element.subboxes.push(_var7);
                        __state = '15';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function GroupDuration_render(self, visuals, element, ctx) {
            var top, bottom, radius, ctop, cbottom, cx, cx2, tx, bx, dash, x, y, lineWidth, config, color;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    config = visuals.config;
                    lineWidth = getThemeValue(config, element, 'lineWidth');
                    color = getThemeValue(config, element, 'lines');
                    if (lineWidth % 2 === 0) {
                        x = element.x;
                        y = element.y;
                        __state = '33';
                    } else {
                        x = element.x + 0.5;
                        y = element.y + 0.5;
                        __state = '33';
                    }
                    break;
                case '18':
                    return;
                case '19':
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(x, ctop);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(x, cbottom);
                    ctx.stroke();
                    if (element.flag1) {
                        __state = '23';
                    } else {
                        __state = '22';
                    }
                    break;
                case '22':
                    cx = x + radius;
                    cx2 = cx + radius * 2;
                    ctx.beginPath();
                    ctx.arc(cx, ctop, radius, Math.PI * 1, Math.PI * 1.5);
                    ctx.lineTo(cx2, top);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(cx2, bottom);
                    ctx.lineTo(cx, bottom);
                    ctx.arc(cx, cbottom, radius, Math.PI * 0.5, Math.PI * 1);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.setLineDash(dash);
                    ctx.moveTo(cx2, top);
                    ctx.lineTo(tx, top);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.setLineDash(dash);
                    ctx.moveTo(cx2, bottom);
                    ctx.lineTo(bx, bottom);
                    ctx.stroke();
                    __state = '30';
                    break;
                case '23':
                    cx = x - radius;
                    cx2 = cx - radius * 2;
                    ctx.beginPath();
                    ctx.setLineDash(dash);
                    ctx.moveTo(tx, top);
                    ctx.lineTo(cx2, top);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.setLineDash([]);
                    ctx.moveTo(cx2, top);
                    ctx.lineTo(cx, top);
                    ctx.arc(cx, ctop, radius, Math.PI * 1.5, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(cx, cbottom, radius, 0, Math.PI * 0.5);
                    ctx.lineTo(cx2, bottom);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.setLineDash(dash);
                    ctx.moveTo(bx, bottom);
                    ctx.lineTo(cx2, bottom);
                    ctx.stroke();
                    __state = '30';
                    break;
                case '30':
                    ctx.setLineDash([]);
                    renderDuration(visuals, element, ctx);
                    __state = '18';
                    break;
                case '33':
                    radius = 10;
                    top = y + element.hiY;
                    bottom = y + element.loY;
                    ctop = top + radius;
                    cbottom = bottom - radius;
                    tx = x + element.hiX;
                    bx = x + element.loX;
                    ctx.strokeStyle = color;
                    ctx.lineWidth = lineWidth;
                    dash = [
                        15,
                        5
                    ];
                    __state = '19';
                    break;
                default:
                    return;
                }
            }
        }
        function GroupDuration_canGuide(self) {
            return false;
        }
        function GroupDuration_canEditContent(self) {
            return true;
        }
        function GroupDuration_create(self, pos) {
            var item;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    item = {
                        type: 'group-duration',
                        flag1: self.flag1,
                        x: pos.x,
                        y: pos.y + 50,
                        loX: 200,
                        loY: 200,
                        hiX: 200,
                        hiY: -200
                    };
                    if (self.flag1 === 1) {
                        item.loX = -item.loX;
                        item.hiX = -item.hiX;
                        item.x += 200;
                        __state = '3';
                    } else {
                        __state = '3';
                    }
                    break;
                case '3':
                    return item;
                default:
                    return;
                }
            }
        }
        function GroupDuration_drawCandies(self, widget, element, ctx) {
            var config;
            config = widget.visuals.config;
            standardCandy(element, ctx, config);
            drawGroupHandles(widget, element, ctx, config);
            return;
        }
        function GroupDuration_flow(self, visuals, element) {
            var size;
            size = contentDuration(visuals, element);
            setNodeSize(visuals.config, element, size);
            element.contentHeight = size.height;
            return;
        }
        function GroupDuration_canEditLink(self) {
            return true;
        }
        function GroupDuration_getAccepted(self) {
            var accepted;
            accepted = getStandardProps();
            accepted.push('lines');
            accepted.push('lineWidth');
            return accepted;
        }
        function drawRectCandies(widget, element, ctx) {
            var visuals, config, left, top, right, bottom, big, nw, sw, we, midX, midY, ne, ea, se, no, so;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    big = 4000;
                    visuals = widget.visuals;
                    config = visuals.config;
                    left = element.left;
                    top = element.top;
                    right = element.width + left;
                    bottom = element.height + top;
                    midX = left + element.width / 2;
                    midY = top + element.height / 2;
                    __state = '16';
                    break;
                case '15':
                    return;
                case '16':
                    nw = HandleNW();
                    setCommonHandleFields(widget, element, nw);
                    nw.x = left;
                    nw.y = top;
                    nw.minX = left - big;
                    nw.maxX = right - config.freeSnap;
                    nw.minY = top - big;
                    nw.maxY = bottom - config.freeSnap;
                    nw.right = right;
                    nw.bottom = bottom;
                    createHandle(visuals, nw, ctx);
                    we = HandleWest();
                    setCommonHandleFields(widget, element, we);
                    we.x = left;
                    we.y = midY;
                    we.minX = left - big;
                    we.maxX = right - config.freeSnap;
                    we.right = right;
                    createHandle(visuals, we, ctx);
                    sw = HandleSW();
                    setCommonHandleFields(widget, element, sw);
                    sw.x = left;
                    sw.y = bottom;
                    sw.minX = left - big;
                    sw.maxX = right - config.freeSnap;
                    sw.minY = top + config.freeSnap;
                    sw.maxY = bottom + big;
                    sw.top = top;
                    sw.right = right;
                    createHandle(visuals, sw, ctx);
                    __state = '51';
                    break;
                case '35':
                    ne = HandleNE();
                    setCommonHandleFields(widget, element, ne);
                    ne.x = right;
                    ne.y = top;
                    ne.minX = left + config.freeSnap;
                    ne.maxX = right + big;
                    ne.minY = top - big;
                    ne.maxY = bottom - config.freeSnap;
                    ne.left = left;
                    ne.bottom = bottom;
                    createHandle(visuals, ne, ctx);
                    ea = HandleEast();
                    setCommonHandleFields(widget, element, ea);
                    ea.x = right;
                    ea.y = midY;
                    ea.minX = left + config.freeSnap;
                    ea.maxX = right + big;
                    ea.left = left;
                    createHandle(visuals, ea, ctx);
                    se = HandleSE();
                    setCommonHandleFields(widget, element, se);
                    se.x = right;
                    se.y = bottom;
                    se.minX = left + config.freeSnap;
                    se.maxX = right + big;
                    se.minY = top + config.freeSnap;
                    se.maxY = bottom + big;
                    se.top = top;
                    se.left = left;
                    createHandle(visuals, se, ctx);
                    __state = '15';
                    break;
                case '51':
                    no = HandleNorth();
                    setCommonHandleFields(widget, element, no);
                    no.x = midX;
                    no.y = top;
                    no.minY = top - big;
                    no.maxY = bottom - config.freeSnap;
                    no.bottom = bottom;
                    createHandle(visuals, no, ctx);
                    so = HandleSouth();
                    setCommonHandleFields(widget, element, so);
                    so.x = midX;
                    so.y = bottom;
                    so.minY = top + config.freeSnap;
                    so.maxY = bottom + big;
                    so.top = top;
                    createHandle(visuals, so, ctx);
                    __state = '35';
                    break;
                default:
                    return;
                }
            }
        }
        function Rectangle_hit(self, element, pos) {
            return true;
        }
        function Rectangle_canGuide(self) {
            return true;
        }
        function Rectangle_canEditLink(self) {
            return true;
        }
        function Rectangle_create(self, pos) {
            var item;
            item = {
                type: 'rectangle',
                left: pos.x,
                top: pos.y,
                width: 200,
                height: 50
            };
            return item;
        }
        function Rectangle_render(self, visuals, element, ctx) {
            var line, left, top, width, height;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    left = element.left;
                    top = element.top;
                    width = element.width;
                    height = element.height;
                    line = setFillStroke(visuals.config, element, ctx);
                    ctx.fillRect(left, top, width, height);
                    clearShadow(ctx);
                    if (line) {
                        ctx.strokeRect(left + 0.5, top + 0.5, width, height);
                        __state = '5';
                    } else {
                        __state = '5';
                    }
                    break;
                case '5':
                    centerContentFree(visuals, element, ctx);
                    return;
                default:
                    return;
                }
            }
        }
        function Rectangle_canEditContent(self) {
            return true;
        }
        function Rectangle_getAccepted(self) {
            var accepted;
            accepted = getStandardProps();
            return accepted;
        }
        function Rectangle_flow(self, visuals, element) {
            var options, _var2;
            options = {};
            _var2 = buildTextContent(visuals, element, options, element.width);
            return _var2;
        }
        function Rectangle_calculateBox(self, element, config) {
            calculateRectBox(element);
            return;
        }
        function drawGroupHandles(widget, element, ctx, config) {
            var big, topHandle, bottomHandle, visuals;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    visuals = widget.visuals;
                    big = 1000;
                    topHandle = GroupTopHandle();
                    topHandle.widget = widget;
                    topHandle.element = element;
                    topHandle.id = element.id;
                    topHandle.x = element.hiX + element.x;
                    topHandle.y = element.hiY + element.y;
                    topHandle.minY = element.y - big;
                    topHandle.maxY = element.y - element.h - config.metre / 2;
                    __state = '29';
                    break;
                case '21':
                    createHandle(visuals, topHandle, ctx);
                    createHandle(visuals, bottomHandle, ctx);
                    return;
                case '22':
                    if (element.flag1) {
                        topHandle.minX = element.x - big;
                        topHandle.maxX = element.x - element.w;
                        __state = '26';
                    } else {
                        topHandle.minX = element.x + element.w;
                        topHandle.maxX = element.x + big;
                        __state = '26';
                    }
                    break;
                case '26':
                    bottomHandle.minX = topHandle.minX;
                    bottomHandle.maxX = topHandle.maxX;
                    __state = '21';
                    break;
                case '29':
                    bottomHandle = GroupBottomHandle();
                    bottomHandle.widget = widget;
                    bottomHandle.element = element;
                    bottomHandle.id = element.id;
                    bottomHandle.x = element.loX + element.x;
                    bottomHandle.y = element.loY + element.y;
                    bottomHandle.minY = element.y + element.h + config.metre / 2;
                    bottomHandle.maxY = element.y + big;
                    __state = '22';
                    break;
                default:
                    return;
                }
            }
        }
        function Line_flow(self, visuals, element) {
            return;
        }
        function Line_hit(self, element, pos) {
            var line, distance, x1, x2, y1, y2, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (element.x2 === 0) {
                        if (element.y0 === 0) {
                            return false;
                        } else {
                            __state = '12';
                        }
                    } else {
                        if (element.y0 === 0) {
                            __state = '15';
                        } else {
                            __state = '16';
                        }
                    }
                    break;
                case '12':
                    return true;
                case '15':
                    return true;
                case '16':
                    x1 = element.left;
                    x2 = x1 + element.x2;
                    y1 = element.top;
                    y2 = y1 + element.y2;
                    line = lineFrom2Points(x1, y1, x2, y2);
                    distance = distanceLineToPoint(line, pos.x, pos.y);
                    _var2 = Math.abs(distance);
                    if (_var2 >= element.margin) {
                        return false;
                    } else {
                        return true;
                    }
                default:
                    return;
                }
            }
        }
        function Line_formatLines(self) {
            return true;
        }
        function Line_formatArrow(self) {
            return true;
        }
        function Line_canGuide(self) {
            return true;
        }
        function Line_create(self, pos) {
            var item;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    item = {
                        type: 'line',
                        left: pos.x,
                        top: pos.y,
                        x2: 100,
                        y2: 100
                    };
                    if (self.style) {
                        item.style = self.style;
                        __state = '3';
                    } else {
                        __state = '3';
                    }
                    break;
                case '3':
                    return item;
                default:
                    return;
                }
            }
        }
        function Line_drawCandies(self, widget, element, ctx) {
            var visuals, config, big, start, end;
            big = 4000;
            visuals = widget.visuals;
            config = visuals.config;
            start = LineStart();
            setCommonHandleFields(widget, element, start);
            start.x = element.left;
            start.y = element.top;
            start.right = element.left + element.x2;
            start.bottom = element.top + element.y2;
            createHandle(visuals, start, ctx);
            end = LineEnd();
            setCommonHandleFields(widget, element, end);
            end.x = element.left + element.x2;
            end.y = element.top + element.y2;
            createHandle(visuals, end, ctx);
            return;
        }
        function Line_calculateBox(self, element, config) {
            var margin;
            margin = config.socketTouchRadius;
            element.margin = margin;
            element.innerBox = calculateLineBox(element);
            element.box = createBoxWithMargin(element.innerBox.left, element.innerBox.top, element.innerBox.width, element.innerBox.height, margin);
            return;
        }
        function Line_getAccepted(self) {
            var accepted;
            accepted = [];
            accepted.push('lines');
            accepted.push('lineWidth');
            accepted.push('lineStyle');
            accepted.push('headStyle');
            accepted.push('tailStyle');
            return accepted;
        }
        function Line_render(self, visuals, element, ctx) {
            var lineWidth, config, color, x1, x2, y1, y2, angle, iconBack;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    config = visuals.config;
                    lineWidth = getThemeValue(config, element, 'lineWidth');
                    color = getThemeValue(config, element, 'lines');
                    x1 = element.left;
                    x2 = x1 + element.x2;
                    y1 = element.top;
                    y2 = y1 + element.y2;
                    setLineDashFromStyle(config, element, lineWidth, 'lineStyle', ctx);
                    __state = '20';
                    break;
                case '19':
                    return;
                case '20':
                    line(ctx, x1, y1, x2, y2, color, lineWidth);
                    ctx.setLineDash([]);
                    __state = '23';
                    break;
                case '23':
                    if (element.style) {
                        if (element.style.tailStyle) {
                            __state = '32';
                        } else {
                            if (element.style.headStyle) {
                                __state = '32';
                            } else {
                                __state = '19';
                            }
                        }
                    } else {
                        __state = '19';
                    }
                    break;
                case '32':
                    iconBack = getThemeValue(config, element, 'iconBack');
                    angle = findAngle(x1, y1, x2, y2);
                    drawCap(ctx, element.style.tailStyle, x1, y1, angle + Math.PI, color, iconBack, lineWidth);
                    drawCap(ctx, element.style.headStyle, x2, y2, angle, color, iconBack, lineWidth);
                    __state = '19';
                    break;
                default:
                    return;
                }
            }
        }
        function setCommonHandleFields(widget, element, handle) {
            handle.widget = widget;
            handle.element = element;
            handle.id = element.id;
            return;
        }
        function drawCap(ctx, style, x, y, angle, color, fillColor, width) {
            var _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    ctx.save();
                    ctx.translate(x, y);
                    ctx.rotate(angle);
                    _var2 = style;
                    if (_var2 === 'arrow') {
                        drawArrowCap(ctx, color, width);
                        __state = '4';
                    } else {
                        if (_var2 === 'sarrow') {
                            drawSArrowCap(ctx, color, width);
                            __state = '4';
                        } else {
                            if (_var2 === 'warrow') {
                                drawWArrow(ctx, color, fillColor, width);
                                __state = '4';
                            } else {
                                if (_var2 === 'paw') {
                                    drawPaw(ctx, color, width);
                                    __state = '4';
                                } else {
                                    __state = '4';
                                }
                            }
                        }
                    }
                    break;
                case '4':
                    ctx.restore();
                    return;
                default:
                    return;
                }
            }
        }
        function drawArrowCap(ctx, color, width) {
            var ARROW_WIDTH, ARROW_HEIGHT;
            ARROW_WIDTH = 20;
            ARROW_HEIGHT = 5;
            ctx.setLineDash([]);
            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.moveTo(-ARROW_WIDTH, -ARROW_HEIGHT - width);
            ctx.lineTo(0, 0);
            ctx.lineTo(-ARROW_WIDTH, ARROW_HEIGHT + width);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            return;
        }
        function drawWArrow(ctx, color, fillColor, width) {
            var ARROW_WIDTH, ARROW_HEIGHT;
            ARROW_WIDTH = 20;
            ARROW_HEIGHT = 5;
            ctx.setLineDash([]);
            ctx.strokeStyle = color;
            ctx.fillStyle = fillColor;
            ctx.lineWidth = width;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.beginPath();
            ctx.moveTo(-ARROW_WIDTH, -ARROW_HEIGHT - width);
            ctx.lineTo(0, 0);
            ctx.lineTo(-ARROW_WIDTH, ARROW_HEIGHT + width);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            return;
        }
        function drawSArrowCap(ctx, color, width) {
            var ARROW_WIDTH, ARROW_HEIGHT;
            ARROW_WIDTH = 20;
            ARROW_HEIGHT = 5;
            ctx.setLineDash([]);
            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.beginPath();
            ctx.moveTo(-ARROW_WIDTH, -ARROW_HEIGHT - width);
            ctx.lineTo(0, 0);
            ctx.lineTo(-ARROW_WIDTH, ARROW_HEIGHT + width);
            ctx.stroke();
            return;
        }
        function drawPaw(ctx, color, width) {
            var height, ARROW_WIDTH, ARROW_HEIGHT;
            ARROW_WIDTH = 20;
            ARROW_HEIGHT = 5;
            ctx.setLineDash([]);
            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            height = ARROW_WIDTH / 2;
            ctx.beginPath();
            ctx.moveTo(0, -height - width);
            ctx.lineTo(-ARROW_WIDTH, 0);
            ctx.lineTo(0, height + width);
            ctx.stroke();
            ctx.stroke();
            return;
        }
        function calculateLineBox(element) {
            var left, right, top, bottom, width, height, x1, x2, y1, y2, _var2;
            x1 = element.left;
            x2 = x1 + element.x2;
            y1 = element.top;
            y2 = y1 + element.y2;
            left = Math.min(x1, x2);
            right = Math.max(x1, x2);
            top = Math.min(y1, y2);
            bottom = Math.max(y1, y2);
            width = right - left;
            height = bottom - top;
            _var2 = createBox(left, top, width, height);
            return _var2;
        }
        function canGuide(widget, element) {
            var elementType, _var2;
            elementType = widget.freeIcons[element.type];
            if (elementType.canGuide) {
                _var2 = elementType.canGuide();
                return _var2;
            } else {
                return false;
            }
        }
        function DrakonCanvas_redo(self) {
            var edits, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    tracing.trace('DrakonCanvas.redo');
                    _var2 = isReadonly(self);
                    if (_var2) {
                        __state = '1';
                    } else {
                        if (self.edit) {
                            edits = self.edit.redoEdit();
                            if (edits) {
                                rebuildSelection(self, edits.changes);
                                __state = '1';
                            } else {
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
        function DrakonCanvas_insertFree(self, type, evt) {
            var elementActions, item, edits, pos, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    tracing.trace('DrakonCanvas.insertFree', type);
                    elementActions = self.freeIcons[type];
                    if (elementActions) {
                        if (evt) {
                            pos = findFreePos(self, evt);
                            __state = '6';
                        } else {
                            pos = getDiagramCenter(self);
                            __state = '6';
                        }
                    } else {
                        console.error('Unknown free icon type', type);
                        __state = '1';
                    }
                    break;
                case '6':
                    item = elementActions.create(pos, edits);
                    edits = [];
                    insertFreeItem(self, edits, item);
                    _var2 = doEdit(self, edits);
                    return _var2;
                default:
                    return;
                }
            }
        }
        function DrakonCanvas_onScroll(self, evt) {
            var originX, originY, zoom;
            zoom = self.zoomFactor;
            originX = self.scrollableContainer.scrollLeft / zoom + self.visuals.box.left;
            originY = self.scrollableContainer.scrollTop / zoom + self.visuals.box.top;
            setScroll(self, originX, originY);
            paint(self);
            return;
        }
        function DrakonCanvas_arrowDown(self) {
            var first, nodes, node;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    tracing.trace('DrakonCanvas.arrowDown');
                    if (self.visuals.config.canSelect) {
                        nodes = getNodesFromSelection(self);
                        if (nodes.length === 0) {
                            __state = '1';
                        } else {
                            first = nodes[0];
                            node = findNeighbour(first, 'down', 'tail');
                            if (node) {
                                __state = '12';
                            } else {
                                node = findClosestNode(self, function (n) {
                                    return n.y > first.y;
                                }, first, true);
                                if (node) {
                                    __state = '12';
                                } else {
                                    __state = '1';
                                }
                            }
                        }
                    } else {
                        __state = '1';
                    }
                    break;
                case '12':
                    self.showItem(node.id);
                    __state = '1';
                    break;
                default:
                    return;
                }
            }
        }
        function DrakonCanvas_redraw(self) {
            var fonts;
            tracing.trace('DrakonCanvas.redraw');
            buildDiagramModel(self, self.edit.diagram);
            fonts = buildVisualsForEdit(self);
            paint(self);
            return fonts;
        }
        function doEdit(widget, edits) {
            var _var2;
            widget.edit.updateDocument(edits);
            _var2 = rebuildSelection(widget, edits);
            return _var2;
        }
        function deleteItem(edits, node) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    deleteItemCore(edits, node.id);
                    if (node.side) {
                        deleteItemCore(edits, node.side);
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
        function foreachInsert(widget, socket) {
            var edits, endId, model, beginId;
            edits = [];
            model = widget.model;
            endId = createItem(model, edits, {
                type: 'loopend',
                one: socket.target
            });
            beginId = createItem(model, edits, {
                type: 'loopbegin',
                one: endId
            });
            redirectUpperItems(edits, socket.links, beginId);
            return edits;
        }
        function moveBranchIdsRight(visuals, branchId) {
            var branch, newId, edits, _var2, _var3, itemId;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    edits = [];
                    _var2 = visuals.branches;
                    _var3 = 0;
                    __state = '5';
                    break;
                case '4':
                    _var3++;
                    __state = '5';
                    break;
                case '5':
                    if (_var3 < _var2.length) {
                        itemId = _var2[_var3];
                        branch = getNode(visuals, itemId);
                        if (branch.branchId >= branchId) {
                            newId = branch.branchId + 1;
                            updateItem(edits, itemId, { branchId: newId });
                            __state = '4';
                        } else {
                            __state = '4';
                        }
                    } else {
                        return edits;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function firstCaseInsertCore(widget, existing, item) {
            var edits, caseId, model, targetId, fields;
            edits = [];
            model = widget.model;
            targetId = existing.next[0].itemId;
            item = item || {};
            fields = clone(item);
            fields.one = targetId;
            fields.type = 'case';
            fields.two = existing.itemId;
            caseId = createItem(model, edits, fields);
            updateItem(edits, existing.select.itemId, { one: caseId });
            return edits;
        }
        function parBlockInsert(widget, socket) {
            var edits, par2Id, model, par1Id, parendId;
            model = widget.model;
            edits = [];
            parendId = createItem(model, edits, {
                type: 'parend',
                one: socket.target
            });
            par2Id = createItem(model, edits, {
                type: 'parbegin',
                one: parendId
            });
            par1Id = createItem(model, edits, {
                type: 'parbegin',
                one: parendId,
                two: par2Id
            });
            redirectUpperItems(edits, socket.links, par1Id);
            return edits;
        }
        function getBranchItemId(visuals, branchId) {
            var rightBranch;
            rightBranch = getBranchById(visuals, branchId);
            if (rightBranch) {
                return rightBranch.itemId;
            } else {
                return visuals.branches[0];
            }
        }
        function pasteFree(widget, clipboard, evt) {
            var edits, payload, create, dx, dy, pos, x, y, first, epos, config, oldPos, currentZ, _var2, _var3, item, _var4, _var5, _var6;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    payload = clipboard.content;
                    config = widget.visuals.config;
                    edits = [];
                    replaceIds(widget, undefined, payload.items, '');
                    __state = '17';
                    break;
                case '16':
                    create = function (item) {
                        createPastedItem(edits, item);
                    };
                    payload.items.forEach(create);
                    _var6 = doEdit(widget, edits);
                    return _var6;
                case '17':
                    first = payload.items[0];
                    epos = getFreePosition(first);
                    if (evt) {
                        pos = toDiagram(widget, evt);
                        dx = pos.x - epos.x;
                        dy = pos.y - epos.y;
                        __state = '_item2';
                    } else {
                        pos = getDiagramCenter(widget);
                        dx = pos.x - epos.x - 100;
                        dy = pos.y - epos.y - 100;
                        __state = '_item2';
                    }
                    break;
                case '27':
                    if (_var3 < _var2.length) {
                        item = _var2[_var3];
                        oldPos = getFreePosition(item);
                        x = snapUp(config, oldPos.x + dx);
                        y = snapUp(config, oldPos.y + dy);
                        setFreePosition(item, x, y);
                        _var3++;
                        __state = '27';
                    } else {
                        __state = '34';
                    }
                    break;
                case '34':
                    sortBy(payload.items, 'zIndex');
                    currentZ = widget.visuals.free.length;
                    _var4 = payload.items;
                    _var5 = 0;
                    __state = '38';
                    break;
                case '38':
                    if (_var5 < _var4.length) {
                        item = _var4[_var5];
                        item.zIndex = currentZ;
                        currentZ++;
                        _var5++;
                        __state = '38';
                    } else {
                        __state = '16';
                    }
                    break;
                case '_item2':
                    _var2 = payload.items;
                    _var3 = 0;
                    __state = '27';
                    break;
                default:
                    return;
                }
            }
        }
        function simpleInsert(widget, socket, type) {
            var edits, item, newId, model;
            model = widget.model;
            edits = [];
            item = {
                type: type,
                content: '',
                one: socket.target
            };
            newId = createItem(model, edits, item);
            redirectUpperItems(edits, socket.links, newId);
            return edits;
        }
        function updateItem(edits, id, fields) {
            var update;
            update = createUpdate(id, fields);
            edits.push(update);
            return;
        }
        function getFreePosition(element) {
            if (element.type === 'group-duration') {
                return {
                    x: element.x,
                    y: element.y
                };
            } else {
                return {
                    x: element.left,
                    y: element.top
                };
            }
        }
        function resetMargin(widget, id) {
            var change;
            checkNotReadonly(widget);
            change = {
                id: id,
                fields: { margin: 0 },
                op: 'update'
            };
            updateAndKeepSelection(widget, [change]);
            return;
        }
        function getNumberPart(text) {
            var first, tail, _var2;
            text = text || '';
            first = firstDigit(text);
            if (first === -1) {
                return 0;
            } else {
                tail = text.substring(first, text.length);
                _var2 = parseInt(tail);
                return _var2;
            }
        }
        function moveBranchIdsLeft(visuals, branchId) {
            var branch, newId, edits, _var2, _var3, itemId;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    edits = [];
                    _var2 = visuals.branches;
                    _var3 = 0;
                    __state = '5';
                    break;
                case '4':
                    _var3++;
                    __state = '5';
                    break;
                case '5':
                    if (_var3 < _var2.length) {
                        itemId = _var2[_var3];
                        branch = getNode(visuals, itemId);
                        if (branch.branchId > branchId) {
                            newId = branch.branchId - 1;
                            updateItem(edits, itemId, { branchId: newId });
                            __state = '4';
                        } else {
                            __state = '4';
                        }
                    } else {
                        return edits;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function deleteItemCore(edits, itemId) {
            var edit;
            edit = {
                id: itemId,
                op: 'delete'
            };
            edits.push(edit);
            return;
        }
        function questionInsert(widget, socket) {
            var edits, item, newId, model;
            model = widget.model;
            edits = [];
            item = {
                type: 'question',
                content: '',
                one: socket.target,
                two: socket.target,
                flag1: 1
            };
            newId = createItem(model, edits, item);
            redirectUpperItems(edits, socket.links, newId);
            return edits;
        }
        function redirectPrevItems(edits, node, targetId) {
            var visited, _var2, _var3, edit, _var4, _var5, prev;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    visited = {};
                    _var2 = edits;
                    _var3 = 0;
                    __state = '7';
                    break;
                case '4':
                    return;
                case '5':
                    _var4 = node.prev;
                    _var5 = 0;
                    __state = '11';
                    break;
                case '6':
                    _var3++;
                    __state = '7';
                    break;
                case '7':
                    if (_var3 < _var2.length) {
                        edit = _var2[_var3];
                        if (edit.op === 'delete') {
                            visited[edit.id] = true;
                            __state = '6';
                        } else {
                            __state = '6';
                        }
                    } else {
                        __state = '5';
                    }
                    break;
                case '10':
                    _var5++;
                    __state = '11';
                    break;
                case '11':
                    if (_var5 < _var4.length) {
                        prev = _var4[_var5];
                        if (prev.id in visited) {
                            __state = '10';
                        } else {
                            visited[prev.id] = true;
                            replaceInUpdate(edits, node.id, prev, targetId);
                            __state = '10';
                        }
                    } else {
                        __state = '4';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function initInsertFunctions(widget) {
            widget.insertActions = {};
            addSimpleInsert(widget, 'action');
            addSimpleInsert(widget, 'insertion');
            addSimpleInsert(widget, 'comment');
            addSimpleInsert(widget, 'simpleinput');
            addSimpleInsert(widget, 'simpleoutput');
            addSimpleInsert(widget, 'timer');
            addSimpleInsert(widget, 'pause');
            addSimpleInsert(widget, 'ctrlstart');
            addSimpleInsert(widget, 'ctrlend');
            addSimpleInsert(widget, 'input');
            addSimpleInsert(widget, 'output');
            addSimpleInsert(widget, 'shelf');
            addSimpleInsert(widget, 'process');
            widget.insertActions.question = questionInsert;
            widget.insertActions.branch = branchInsert;
            widget.insertActions.select = selectInsert;
            widget.insertActions['case'] = caseInsert;
            widget.insertActions['first-case'] = firstCaseInsert;
            widget.insertActions['foreach'] = foreachInsert;
            widget.insertActions['parblock'] = parBlockInsert;
            widget.insertActions['par'] = parInsert;
            widget.insertActions['firstpar'] = firstParInsert;
            widget.insertActions.duration = durationInsert;
            return;
        }
        function createItem(model, edits, item) {
            var edit;
            item.id = getNextStorageId(model);
            edit = createInsert(item);
            edits.push(edit);
            return item.id;
        }
        function replaceInUpdate(edits, id, prev, targetId) {
            var updated, fields;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    updated = false;
                    fields = {};
                    if (prev.one === id) {
                        fields.one = targetId;
                        updated = true;
                        __state = '8';
                    } else {
                        __state = '8';
                    }
                    break;
                case '8':
                    if (prev.two === id) {
                        fields.two = targetId;
                        updated = true;
                        __state = '10';
                    } else {
                        __state = '10';
                    }
                    break;
                case '10':
                    if (updated) {
                        updateItem(edits, prev.id, fields);
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
        function createUpdate(id, fields) {
            return {
                id: id,
                op: 'update',
                fields: fields || {}
            };
        }
        function firstCaseInsert(widget, socket) {
            var existing, _var2;
            existing = socket.node;
            _var2 = firstCaseInsertCore(widget, existing, undefined);
            return _var2;
        }
        function redirectUpperItems(edits, links, newId) {
            var edit, _var2, _var3, link;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    _var2 = links;
                    _var3 = 0;
                    __state = '5';
                    break;
                case '5':
                    if (_var3 < _var2.length) {
                        link = _var2[_var3];
                        edit = createUpdate(link.source);
                        if (link.index === 0) {
                            edit.fields.one = newId;
                            __state = '10';
                        } else {
                            edit.fields.two = newId;
                            __state = '10';
                        }
                    } else {
                        return;
                    }
                    break;
                case '10':
                    edits.push(edit);
                    _var3++;
                    __state = '5';
                    break;
                default:
                    return;
                }
            }
        }
        function selectInsert(widget, socket) {
            var edits, case3Id, case2Id, case1Id, selectId, model;
            edits = [];
            model = widget.model;
            case3Id = createItem(model, edits, {
                type: 'case',
                one: socket.target
            });
            case2Id = createItem(model, edits, {
                type: 'case',
                one: socket.target,
                two: case3Id
            });
            case1Id = createItem(model, edits, {
                type: 'case',
                one: socket.target,
                two: case2Id
            });
            selectId = createItem(model, edits, {
                type: 'select',
                one: case1Id
            });
            redirectUpperItems(edits, socket.links, selectId);
            return edits;
        }
        function durationInsert(widget, socket) {
            var edits, model, item, newId;
            model = widget.model;
            edits = [];
            item = {
                type: 'duration',
                content: ''
            };
            newId = createItem(model, edits, item);
            updateItem(edits, socket.node.id, { side: newId });
            return edits;
        }
        function caseInsert(widget, socket) {
            var existing, _var2;
            existing = socket.node;
            _var2 = caseInsertCore(widget, existing, undefined);
            return _var2;
        }
        function branchInsertAt(widget, branchId) {
            var edits, model, visuals, targetId, name, fields, newId, oldTargets;
            model = widget.model;
            visuals = widget.visuals;
            edits = moveBranchIdsRight(visuals, branchId);
            targetId = getBranchItemId(visuals, branchId);
            name = nextBranchName(visuals);
            fields = {
                type: 'branch',
                branchId: branchId,
                content: name,
                one: targetId
            };
            newId = createItem(model, edits, fields);
            oldTargets = {};
            oldTargets[targetId] = true;
            redirectBranch(visuals, model.items, oldTargets, newId, edits);
            return edits;
        }
        function branchInsertEnd(widget) {
            var edits, branchId, visuals, endId, name, fields, _var2;
            edits = [];
            visuals = widget.visuals;
            endId = createItem(widget.model, edits, { type: 'end' });
            branchId = visuals.branches.length + 1;
            name = visuals.config.exit;
            fields = {
                type: 'branch',
                branchId: branchId,
                content: name,
                one: endId
            };
            createItem(widget.model, edits, fields);
            _var2 = doEdit(widget, edits);
            return _var2;
        }
        function caseInsertCore(widget, existing, item) {
            var edits, caseId, model, targetId, fields, right;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    edits = [];
                    model = widget.model;
                    targetId = existing.next[0].itemId;
                    item = item || {};
                    fields = clone(item);
                    fields.one = targetId;
                    fields.type = 'case';
                    if (existing.next.length === 2) {
                        right = existing.next[1];
                        fields.two = right.itemId;
                        __state = '4';
                    } else {
                        __state = '4';
                    }
                    break;
                case '4':
                    caseId = createItem(model, edits, fields);
                    updateItem(edits, existing.itemId, { two: caseId });
                    return edits;
                default:
                    return;
                }
            }
        }
        function isDigit(c) {
            var zero, nine;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    zero = 48;
                    nine = 57;
                    if (c >= zero) {
                        if (c <= nine) {
                            return true;
                        } else {
                            __state = '6';
                        }
                    } else {
                        __state = '6';
                    }
                    break;
                case '6':
                    return false;
                default:
                    return;
                }
            }
        }
        function checkNotReadonly(widget) {
            var _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    _var2 = isReadonly(widget);
                    if (_var2) {
                        throw new Error('Cannot modify a read-only diagram');
                    } else {
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function addSimpleInsert(widget, type) {
            var _var2;
            widget.insertActions[type] = function (widget, socket) {
                _var2 = simpleInsert(widget, socket, type);
                return _var2;
            };
            return;
        }
        function increaseMargin(widget, id) {
            var change, node, margin;
            checkNotReadonly(widget);
            node = getNode(widget.visuals, id);
            margin = getBranchMargin(node);
            change = {
                id: id,
                fields: { margin: margin + 1 },
                op: 'update'
            };
            updateAndKeepSelection(widget, [change]);
            return;
        }
        function clickArrowSocket(widget, socket) {
            var edits, newId, item;
            edits = [];
            item = {
                type: 'arrow-loop',
                one: socket.target
            };
            newId = createItem(widget.model, edits, item);
            redirectUpperItems(edits, socket.links, newId);
            redirectUpperItems(edits, socket.edge.links, newId);
            return edits;
        }
        function nextBranchName(visuals) {
            var max, branch, number, _var2, _var3, id;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    max = 0;
                    _var2 = visuals.branches;
                    _var3 = 0;
                    __state = '6';
                    break;
                case '6':
                    if (_var3 < _var2.length) {
                        id = _var2[_var3];
                        branch = getNode(visuals, id);
                        number = getNumberPart(branch.content);
                        max = Math.max(max, number);
                        _var3++;
                        __state = '6';
                    } else {
                        return visuals.config.branch + (max + 1);
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function popFromSkewer(node, edits) {
            var dstId, edgeUp;
            dstId = node.one;
            edgeUp = node.up;
            redirectUpperItems(edits, edgeUp.links, dstId);
            deleteItem(edits, node);
            return;
        }
        function getBranchById(visuals, branchId) {
            var branch, _var2, _var3, itemId;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    _var2 = visuals.branches;
                    _var3 = 0;
                    __state = '5';
                    break;
                case '5':
                    if (_var3 < _var2.length) {
                        itemId = _var2[_var3];
                        branch = getNode(visuals, itemId);
                        if (branch.branchId === branchId) {
                            return branch;
                        } else {
                            _var3++;
                            __state = '5';
                        }
                    } else {
                        return undefined;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function parInsert(widget, socket) {
            var edits, model, beginpar, endparId, item, newId;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    model = widget.model;
                    edits = [];
                    if (socket.edge) {
                        beginpar = socket.edge.head;
                        endparId = getParTarget(beginpar);
                        item = {
                            type: 'parbegin',
                            one: endparId,
                            two: socket.edge.tail.itemId
                        };
                        __state = '28';
                    } else {
                        beginpar = socket.node;
                        endparId = getParTarget(beginpar);
                        item = {
                            type: 'parbegin',
                            one: endparId
                        };
                        __state = '28';
                    }
                    break;
                case '28':
                    newId = createItem(model, edits, item);
                    updateItem(edits, beginpar.itemId, { two: newId });
                    return edits;
                default:
                    return;
                }
            }
        }
        function firstParInsert(widget, socket) {
            var edits, model, endparId, item, newId;
            model = widget.model;
            edits = [];
            endparId = getParTarget(socket.node);
            item = {
                type: 'parbegin',
                one: endparId,
                two: socket.node.itemId
            };
            newId = createItem(model, edits, item);
            redirectUpperItems(edits, socket.links, newId);
            return edits;
        }
        function setFreePosition(element, x, y) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    if (element.type === 'group-duration') {
                        element.x = x;
                        element.y = y;
                        __state = '1';
                    } else {
                        element.left = x;
                        element.top = y;
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function getSocketBranchId(socket) {
            var branchId;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (socket.left) {
                        branchId = socket.node.branchId;
                        __state = '6';
                    } else {
                        branchId = socket.node.branchId + 1;
                        __state = '6';
                    }
                    break;
                case '6':
                    return branchId;
                default:
                    return;
                }
            }
        }
        function pasteDuration(widget, existing, item) {
            var edits, caseId, model, fields;
            edits = [];
            model = widget.model;
            fields = clone(item);
            caseId = createItem(model, edits, fields);
            updateItem(edits, existing.itemId, { side: caseId });
            return edits;
        }
        function firstDigit(text) {
            var last, c, i, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    last = text.length - 1;
                    i = last;
                    __state = '5';
                    break;
                case '5':
                    if (i >= 0) {
                        c = text.charCodeAt(i);
                        _var2 = isDigit(c);
                        if (_var2) {
                            i--;
                            __state = '5';
                        } else {
                            if (i === last) {
                                return -1;
                            } else {
                                return i + 1;
                            }
                        }
                    } else {
                        return 0;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function branchInsert(widget, socket) {
            var branchId, _var2;
            branchId = getSocketBranchId(socket);
            _var2 = branchInsertAt(widget, branchId);
            return _var2;
        }
        function rebuildSelection(widget, edits) {
            var selectable, fonts;
            resetSelectionCore(widget);
            selectable = findEditsToSelect(edits);
            selectMany(widget, selectable);
            fonts = widget.redraw();
            reportSelection(widget);
            return fonts;
        }
        function createInsert(item) {
            var fields, id;
            id = item.id;
            fields = clone(item);
            delete fields.id;
            return {
                id: id,
                op: 'insert',
                fields: fields
            };
        }
        function runInsertAction(widget, socket) {
            var action, edits, _var2, _var3;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    _var2 = socket.op;
                    if (_var2 === 'insert') {
                        action = widget.insertActions[socket.type];
                        edits = action(widget, socket);
                        __state = '_item9';
                    } else {
                        if (_var2 === 'paste') {
                            edits = pasteInSocket(widget, socket);
                            __state = '_item9';
                        } else {
                            if (_var2 === 'arrow') {
                                edits = clickArrowSocket(widget, socket);
                                __state = '_item9';
                            } else {
                                if (_var2 === 'liana') {
                                    edits = clickLianaSocket(widget, socket);
                                    __state = '_item9';
                                } else {
                                    if (_var2 === 'params') {
                                        __state = '1';
                                    } else {
                                        throw new Error('Unexpected case value: ' + _var2);
                                    }
                                }
                            }
                        }
                    }
                    break;
                case '_item9':
                    _var3 = doEdit(widget, edits);
                    return _var3;
                default:
                    return;
                }
            }
        }
        function getNextStorageId(model) {
            var id;
            id = model.nextId.toString();
            model.nextId++;
            return id;
        }
        function isReadonly(widget) {
            return widget.model.doc.access === 'read' || !widget.visuals.config.canSelect;
        }
        function addSpaceToLine(line) {
            line.push({ type: 'space' });
            return;
        }
        function parseCssFont(font, fontCache) {
            var tokens, style, weight, size, family, current, part, fontObj, next, _var2, _var3, _var4, _var5, _var6, _var7, _var8, _var9;
            var __state = '72';
            while (true) {
                switch (__state) {
                case '2':
                    tokens = stringToTokensQuoted(font);
                    style = '';
                    weight = '';
                    size = '';
                    family = '';
                    current = 0;
                    __state = '8';
                    break;
                case '8':
                    if (current < tokens.length) {
                        part = tokens[current++];
                        _var2 = part;
                        if (_var2 === 'italic') {
                            __state = '33';
                        } else {
                            if (_var2 === 'oblique') {
                                __state = '33';
                            } else {
                                if (_var2 === 'bold') {
                                    weight = part;
                                    __state = '35';
                                } else {
                                    if (_var2 === 'normal') {
                                        __state = '34';
                                    } else {
                                        size = parsePxSize(part);
                                        if (size === undefined) {
                                            __state = '35';
                                        } else {
                                            __state = '36';
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        _var4 = Error('Empty "font" property');
                        throw _var4;
                    }
                    break;
                case '10':
                    __state = '83';
                    break;
                case '33':
                    style = part;
                    __state = '34';
                    break;
                case '34':
                    if (current < tokens.length) {
                        part = tokens[current++];
                        _var3 = part;
                        if (_var3 === 'bold') {
                            weight = part;
                            __state = '35';
                        } else {
                            if (_var3 === 'normal') {
                                __state = '35';
                            } else {
                                size = parsePxSize(part);
                                if (size === undefined) {
                                    _var6 = Error('Expected px size in "font" property');
                                    throw _var6;
                                } else {
                                    __state = '36';
                                }
                            }
                        }
                    } else {
                        _var5 = Error('Unexpected end of "font" property');
                        throw _var5;
                    }
                    break;
                case '35':
                    if (current < tokens.length) {
                        part = tokens[current++];
                        size = parsePxSize(part);
                        if (size === undefined) {
                            _var8 = Error('Expected px size in "font" property');
                            throw _var8;
                        } else {
                            __state = '36';
                        }
                    } else {
                        _var7 = Error('Unexpected end of "font" property');
                        throw _var7;
                    }
                    break;
                case '36':
                    if (current < tokens.length) {
                        family = tokens[current++];
                        __state = '10';
                    } else {
                        _var9 = Error('Unexpected end of "font" property');
                        throw _var9;
                    }
                    break;
                case '72':
                    if (font in fontCache) {
                        return fontCache[font];
                    } else {
                        __state = '2';
                    }
                    break;
                case '82':
                    family += next;
                    __state = '83';
                    break;
                case '83':
                    if (current < tokens.length) {
                        next = tokens[current++];
                        if (next[0] === ',') {
                            __state = '82';
                        } else {
                            family += ' ';
                            __state = '82';
                        }
                    } else {
                        fontObj = {
                            style: style,
                            weight: weight,
                            size: size,
                            family: family
                        };
                        fontCache[font] = fontObj;
                        return fontObj;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function setFontToToken(token, font, fontObj) {
            var font2, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    _var2 = token.type;
                    if (_var2 === 'strong') {
                        font2 = {};
                        Object.assign(font2, fontObj);
                        font2.weight = 'bold';
                        __state = '12';
                    } else {
                        if (_var2 === 'em') {
                            font2 = {};
                            Object.assign(font2, fontObj);
                            font2.style = 'italic';
                            __state = '12';
                        } else {
                            if (_var2 === 'sem') {
                                font2 = {};
                                Object.assign(font2, fontObj);
                                font2.style = 'italic';
                                font2.weight = 'bold';
                                __state = '12';
                            } else {
                                token.font = font;
                                __state = '1';
                            }
                        }
                    }
                    break;
                case '12':
                    token.font = cssFontToString(font2);
                    __state = '1';
                    break;
                default:
                    return;
                }
            }
        }
        function endToken(current, line, type) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (current.text) {
                        line.tokens.push(current);
                        __state = '5';
                    } else {
                        __state = '5';
                    }
                    break;
                case '5':
                    return {
                        text: '',
                        type: type
                    };
                default:
                    return;
                }
            }
        }
        function pushSpace(line) {
            line.tokens.push({ type: 'space' });
            return;
        }
        function endLine(line, lines) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (line.length === 0) {
                        __state = '6';
                    } else {
                        lines.push(line);
                        __state = '6';
                    }
                    break;
                case '6':
                    return { tokens: [] };
                default:
                    return;
                }
            }
        }
        function SpanBuilder_create() {
            var current, type, line, ch;
            var me = {
                state: '18',
                type: 'SpanBuilder'
            };
            function _main_SpanBuilder(__resolve, __reject) {
                try {
                    while (true) {
                        switch (me.state) {
                        case '2':
                            me.state = '12';
                            return;
                        case '5':
                            me.state = '30';
                            return;
                        case '6':
                            me.state = '39';
                            return;
                        case '7':
                            me.state = '49';
                            return;
                        case '18':
                            current = {
                                text: '',
                                type: ''
                            };
                            type = '';
                            line = { tokens: [] };
                            me.lines = [];
                            me.state = '2';
                            break;
                        case '21':
                            if (ch === '-') {
                                current.text += '\u2022';
                                me.state = '7';
                            } else {
                                current.text += ch;
                                me.state = '7';
                            }
                            break;
                        case '26':
                            type = 'em';
                            current = endToken(current, line, type);
                            me.state = '7';
                            break;
                        case '27':
                            type = 'strong';
                            current = endToken(current, line, type);
                            me.state = '7';
                            break;
                        case '36':
                            current.text += ch;
                            me.state = '7';
                            break;
                        case '38':
                            type = 'strong';
                            current = endToken(current, line, type);
                            me.state = '7';
                            break;
                        case '55':
                            current.text += ch;
                            me.state = '7';
                            break;
                        case '56':
                            current = endToken(current, line, type);
                            me.state = '6';
                            break;
                        case '57':
                            current = endToken(current, line, type);
                            type = '';
                            line = endLine(line, me.lines);
                            me.state = '2';
                            break;
                        case '59':
                            type = 'strong';
                            current = endToken(current, line, type);
                            me.state = '7';
                            break;
                        case '60':
                            type = 'em';
                            current = endToken(current, line, type);
                            me.state = '7';
                            break;
                        case '62':
                            type = 'em';
                            current = endToken(current, line, type);
                            me.state = '7';
                            break;
                        case '66':
                            type = '';
                            current = endToken(current, line, type);
                            me.state = '5';
                            break;
                        case '72':
                            type = '';
                            current = endToken(current, line, type);
                            me.state = '5';
                            break;
                        case '73':
                            type = '';
                            line = endLine(line, me.lines);
                            me.state = '2';
                            break;
                        case '75':
                            type = '';
                            current = endToken(current, line, type);
                            me.state = '5';
                            break;
                        case '78':
                            type = '';
                            line = endLine(line, me.lines);
                            me.state = '2';
                            break;
                        case '80':
                            pushSpace(line);
                            current.text += ch;
                            me.state = '7';
                            break;
                        case '81':
                            pushSpace(line);
                            type = 'em';
                            current = endToken(current, line, type);
                            me.state = '7';
                            break;
                        case '82':
                            pushSpace(line);
                            type = 'strong';
                            current = endToken(current, line, type);
                            me.state = '7';
                            break;
                        default:
                            return;
                        }
                    }
                } catch (ex) {
                    me.state = undefined;
                    __reject(ex);
                }
            }
            me.run = function () {
                me.run = undefined;
                return new Promise(function (__resolve, __reject) {
                    me.next = function (_ch_) {
                        ch = _ch_;
                        switch (me.state) {
                        case '12':
                            me.state = '21';
                            _main_SpanBuilder(__resolve, __reject);
                            break;
                        case '30':
                            me.state = '36';
                            _main_SpanBuilder(__resolve, __reject);
                            break;
                        case '39':
                            me.state = '80';
                            _main_SpanBuilder(__resolve, __reject);
                            break;
                        case '49':
                            me.state = '55';
                            _main_SpanBuilder(__resolve, __reject);
                            break;
                        default:
                            return;
                        }
                    };
                    me.white = function () {
                        switch (me.state) {
                        case '12':
                            me.state = '2';
                            _main_SpanBuilder(__resolve, __reject);
                            break;
                        case '30':
                            me.state = '6';
                            _main_SpanBuilder(__resolve, __reject);
                            break;
                        case '39':
                            me.state = '6';
                            _main_SpanBuilder(__resolve, __reject);
                            break;
                        case '49':
                            me.state = '56';
                            _main_SpanBuilder(__resolve, __reject);
                            break;
                        default:
                            return;
                        }
                    };
                    me.line = function () {
                        switch (me.state) {
                        case '12':
                            me.state = '2';
                            _main_SpanBuilder(__resolve, __reject);
                            break;
                        case '30':
                            me.state = '73';
                            _main_SpanBuilder(__resolve, __reject);
                            break;
                        case '39':
                            me.state = '78';
                            _main_SpanBuilder(__resolve, __reject);
                            break;
                        case '49':
                            me.state = '57';
                            _main_SpanBuilder(__resolve, __reject);
                            break;
                        default:
                            return;
                        }
                    };
                    me.em = function () {
                        switch (me.state) {
                        case '12':
                            me.state = '26';
                            _main_SpanBuilder(__resolve, __reject);
                            break;
                        case '30':
                            me.state = '60';
                            _main_SpanBuilder(__resolve, __reject);
                            break;
                        case '39':
                            me.state = '81';
                            _main_SpanBuilder(__resolve, __reject);
                            break;
                        case '49':
                            me.state = '62';
                            _main_SpanBuilder(__resolve, __reject);
                            break;
                        default:
                            return;
                        }
                    };
                    me.strong = function () {
                        switch (me.state) {
                        case '12':
                            me.state = '27';
                            _main_SpanBuilder(__resolve, __reject);
                            break;
                        case '30':
                            me.state = '38';
                            _main_SpanBuilder(__resolve, __reject);
                            break;
                        case '39':
                            me.state = '82';
                            _main_SpanBuilder(__resolve, __reject);
                            break;
                        case '49':
                            me.state = '59';
                            _main_SpanBuilder(__resolve, __reject);
                            break;
                        default:
                            return;
                        }
                    };
                    me.end = function () {
                        switch (me.state) {
                        case '30':
                            me.state = '66';
                            _main_SpanBuilder(__resolve, __reject);
                            break;
                        case '39':
                            me.state = '72';
                            _main_SpanBuilder(__resolve, __reject);
                            break;
                        case '49':
                            me.state = '75';
                            _main_SpanBuilder(__resolve, __reject);
                            break;
                        default:
                            return;
                        }
                    };
                    _main_SpanBuilder(__resolve, __reject);
                });
            };
            return me;
        }
        function SpanBuilder() {
            var __obj = SpanBuilder_create();
            return __obj.run();
        }
        function parsePxSize(size) {
            var value, _var2, _var3;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    value = parseInt(size);
                    _var2 = isNaN(value);
                    if (_var2) {
                        __state = '6';
                    } else {
                        _var3 = size.indexOf('px');
                        if (_var3 === -1) {
                            __state = '6';
                        } else {
                            return value;
                        }
                    }
                    break;
                case '6':
                    return undefined;
                default:
                    return;
                }
            }
        }
        function MarkDown_create(target) {
            var ch;
            var me = {
                state: '15',
                type: 'MarkDown'
            };
            function _main_MarkDown(__resolve, __reject) {
                try {
                    while (true) {
                        switch (me.state) {
                        case '6':
                            me.state = '66';
                            return;
                        case '8':
                            me.state = '29';
                            return;
                        case '9':
                            me.state = '39';
                            return;
                        case '10':
                            me.state = '48';
                            return;
                        case '11':
                            me.state = '57';
                            return;
                        case '15':
                            me.state = '19';
                            return;
                        case '20':
                            target.next(ch);
                            me.state = '15';
                            break;
                        case '21':
                            target.line();
                            me.state = '15';
                            break;
                        case '28':
                            target.white();
                            me.state = '15';
                            break;
                        case '35':
                            target.em();
                            target.next(ch);
                            me.state = '11';
                            break;
                        case '37':
                            target.next('_');
                            target.line();
                            me.state = '15';
                            break;
                        case '38':
                            target.next('_');
                            target.white();
                            me.state = '15';
                            break;
                        case '44':
                            target.next('_');
                            me.state = '15';
                            break;
                        case '45':
                            target.strong();
                            target.next(ch);
                            me.state = '10';
                            break;
                        case '46':
                            target.next('__');
                            target.white();
                            me.state = '15';
                            break;
                        case '47':
                            target.next('__');
                            target.line();
                            me.state = '15';
                            break;
                        case '54':
                            target.next(ch);
                            me.state = '10';
                            break;
                        case '55':
                            target.white();
                            me.state = '10';
                            break;
                        case '56':
                            target.line();
                            me.state = '15';
                            break;
                        case '62':
                            target.end();
                            me.state = '15';
                            break;
                        case '63':
                            target.next(ch);
                            me.state = '11';
                            break;
                        case '64':
                            target.white();
                            me.state = '11';
                            break;
                        case '65':
                            target.line();
                            me.state = '15';
                            break;
                        case '71':
                            target.end();
                            me.state = '15';
                            break;
                        case '73':
                            target.next('_');
                            target.white();
                            me.state = '10';
                            break;
                        case '74':
                            target.next('_');
                            target.line();
                            me.state = '15';
                            break;
                        case '75':
                            target.next('_');
                            target.next(ch);
                            me.state = '10';
                            break;
                        default:
                            return;
                        }
                    }
                } catch (ex) {
                    me.state = undefined;
                    __reject(ex);
                }
            }
            me.run = function () {
                me.run = undefined;
                return new Promise(function (__resolve, __reject) {
                    me.under = function () {
                        switch (me.state) {
                        case '19':
                            me.state = '8';
                            _main_MarkDown(__resolve, __reject);
                            break;
                        case '29':
                            me.state = '9';
                            _main_MarkDown(__resolve, __reject);
                            break;
                        case '39':
                            me.state = '44';
                            _main_MarkDown(__resolve, __reject);
                            break;
                        case '48':
                            me.state = '6';
                            _main_MarkDown(__resolve, __reject);
                            break;
                        case '57':
                            me.state = '62';
                            _main_MarkDown(__resolve, __reject);
                            break;
                        case '66':
                            me.state = '71';
                            _main_MarkDown(__resolve, __reject);
                            break;
                        default:
                            return;
                        }
                    };
                    me.next = function (_ch_) {
                        ch = _ch_;
                        switch (me.state) {
                        case '19':
                            me.state = '20';
                            _main_MarkDown(__resolve, __reject);
                            break;
                        case '29':
                            me.state = '35';
                            _main_MarkDown(__resolve, __reject);
                            break;
                        case '39':
                            me.state = '45';
                            _main_MarkDown(__resolve, __reject);
                            break;
                        case '48':
                            me.state = '54';
                            _main_MarkDown(__resolve, __reject);
                            break;
                        case '57':
                            me.state = '63';
                            _main_MarkDown(__resolve, __reject);
                            break;
                        case '66':
                            me.state = '75';
                            _main_MarkDown(__resolve, __reject);
                            break;
                        default:
                            return;
                        }
                    };
                    me.white = function () {
                        switch (me.state) {
                        case '19':
                            me.state = '28';
                            _main_MarkDown(__resolve, __reject);
                            break;
                        case '29':
                            me.state = '38';
                            _main_MarkDown(__resolve, __reject);
                            break;
                        case '39':
                            me.state = '46';
                            _main_MarkDown(__resolve, __reject);
                            break;
                        case '48':
                            me.state = '55';
                            _main_MarkDown(__resolve, __reject);
                            break;
                        case '57':
                            me.state = '64';
                            _main_MarkDown(__resolve, __reject);
                            break;
                        case '66':
                            me.state = '73';
                            _main_MarkDown(__resolve, __reject);
                            break;
                        default:
                            return;
                        }
                    };
                    me.line = function () {
                        switch (me.state) {
                        case '19':
                            me.state = '21';
                            _main_MarkDown(__resolve, __reject);
                            break;
                        case '29':
                            me.state = '37';
                            _main_MarkDown(__resolve, __reject);
                            break;
                        case '39':
                            me.state = '47';
                            _main_MarkDown(__resolve, __reject);
                            break;
                        case '48':
                            me.state = '56';
                            _main_MarkDown(__resolve, __reject);
                            break;
                        case '57':
                            me.state = '65';
                            _main_MarkDown(__resolve, __reject);
                            break;
                        case '66':
                            me.state = '74';
                            _main_MarkDown(__resolve, __reject);
                            break;
                        default:
                            return;
                        }
                    };
                    _main_MarkDown(__resolve, __reject);
                });
            };
            return me;
        }
        function MarkDown(target) {
            var __obj = MarkDown_create(target);
            return __obj.run();
        }
        function finishMdMachine(md) {
            return;
        }
        function stringToTokensQuoted(text) {
            var tokens, ch, whitespace, quote, state, buffer, _var2, i;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    text = text || '';
                    tokens = [];
                    whitespace = {};
                    whitespace[' '] = true;
                    whitespace['\t'] = true;
                    whitespace['\r'] = true;
                    whitespace['\n'] = true;
                    quote = {};
                    quote['"'] = true;
                    quote['\''] = true;
                    state = 'idle';
                    buffer = '';
                    i = 0;
                    __state = '5';
                    break;
                case '3':
                    return tokens;
                case '4':
                    i++;
                    __state = '5';
                    break;
                case '5':
                    if (i < text.length) {
                        ch = text[i];
                        _var2 = state;
                        if (_var2 === 'idle') {
                            if (whitespace[ch]) {
                                __state = '4';
                            } else {
                                if (quote[ch]) {
                                    buffer += ch;
                                    state = 'quoted';
                                    __state = '4';
                                } else {
                                    buffer += ch;
                                    state = 'token';
                                    __state = '4';
                                }
                            }
                        } else {
                            if (_var2 === 'token') {
                                if (whitespace[ch]) {
                                    tokens.push(buffer);
                                    buffer = '';
                                    state = 'idle';
                                    __state = '4';
                                } else {
                                    buffer += ch;
                                    __state = '4';
                                }
                            } else {
                                if (_var2 === 'quoted') {
                                    if (quote[ch]) {
                                        buffer += ch;
                                        tokens.push(buffer);
                                        buffer = '';
                                        state = 'idle';
                                        __state = '4';
                                    } else {
                                        buffer += ch;
                                        __state = '4';
                                    }
                                } else {
                                    throw new Error('Unexpected case value: ' + _var2);
                                }
                            }
                        }
                    } else {
                        if (buffer) {
                            tokens.push(buffer);
                            __state = '3';
                        } else {
                            __state = '3';
                        }
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function splitByWhitespace(text) {
            var _var2, _var3;
            text = text || '';
            _var3 = text.trim();
            _var2 = _var3.split(/[ \t\r\n]+/);
            return _var2;
        }
        function splitToTokensMarkdown(text) {
            var state, buffer, lines, length, ch, whitespace, md, sb, i;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    text = text || '';
                    whitespace = {};
                    whitespace[' '] = true;
                    whitespace['\t'] = true;
                    whitespace['\r'] = true;
                    state = 'idle';
                    buffer = '';
                    lines = [];
                    length = text.length;
                    sb = SpanBuilder_create();
                    md = MarkDown_create(sb);
                    sb.run();
                    md.run();
                    i = 0;
                    __state = '6';
                    break;
                case '5':
                    i++;
                    __state = '6';
                    break;
                case '6':
                    if (i < length) {
                        ch = text[i];
                        if (ch === '_') {
                            md.under();
                            __state = '5';
                        } else {
                            if (ch === '\n') {
                                md.line();
                                __state = '5';
                            } else {
                                if (whitespace[ch]) {
                                    md.white();
                                    __state = '5';
                                } else {
                                    md.next(ch);
                                    __state = '5';
                                }
                            }
                        }
                    } else {
                        md.line();
                        return sb.lines;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function wrapInLineObjects(lines) {
            var output, _var2, _var3, line;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    output = [];
                    _var2 = lines;
                    _var3 = 0;
                    __state = '6';
                    break;
                case '6':
                    if (_var3 < _var2.length) {
                        line = _var2[_var3];
                        output.push({ tokens: line });
                        _var3++;
                        __state = '6';
                    } else {
                        return output;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function setFontToTokens(lines, font, fontCache) {
            var fontObj, _var2, _var3, line;
            var __state = '6';
            while (true) {
                switch (__state) {
                case '6':
                    fontObj = parseCssFont(font, fontCache);
                    _var2 = lines;
                    _var3 = 0;
                    __state = '10';
                    break;
                case '10':
                    if (_var3 < _var2.length) {
                        line = _var2[_var3];
                        line.tokens.forEach(function (token) {
                            setFontToToken(token, font, fontObj);
                        });
                        _var3++;
                        __state = '10';
                    } else {
                        return;
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function addToken(line, type, text) {
            line.push({
                text: text,
                type: type
            });
            return;
        }
        function processUnordered(nodes, lines) {
            var line, name, _var2, _var3, node;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    _var2 = nodes;
                    _var3 = 0;
                    __state = '5';
                    break;
                case '4':
                    _var3++;
                    __state = '5';
                    break;
                case '5':
                    if (_var3 < _var2.length) {
                        node = _var2[_var3];
                        name = getNodeName(node);
                        if (name === 'li') {
                            line = {
                                type: 'ul',
                                tokens: [{ text: '\u2022 ' }]
                            };
                            lines.push(line);
                            addNodeToLine(node, line.tokens, false, false);
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
        function splitHtmlTextNode(text, type) {
            var state, buffer, line, ch, whitespace, length, i, _var2, _var3, _var4, _var5;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    text = text || '';
                    whitespace = {};
                    whitespace[' '] = true;
                    whitespace['\t'] = true;
                    whitespace['\r'] = true;
                    whitespace['\n'] = true;
                    _var2 = String.fromCharCode(133);
                    _var3 = String.fromCharCode(160);
                    _var4 = String.fromCharCode(11);
                    _var5 = String.fromCharCode(12);
                    whitespace[_var2] = true;
                    whitespace[_var3] = true;
                    whitespace[_var4] = true;
                    whitespace[_var5] = true;
                    state = 'idle';
                    buffer = '';
                    line = [];
                    length = text.length;
                    i = 0;
                    __state = '6';
                    break;
                case '5':
                    i++;
                    __state = '6';
                    break;
                case '6':
                    if (i < length) {
                        ch = text[i];
                        if (state === 'idle') {
                            if (whitespace[ch]) {
                                if (buffer) {
                                    addToken(line, type, buffer);
                                    buffer = '';
                                    __state = '30';
                                } else {
                                    __state = '30';
                                }
                            } else {
                                buffer += ch;
                                __state = '5';
                            }
                        } else {
                            if (whitespace[ch]) {
                                __state = '5';
                            } else {
                                buffer += ch;
                                state = 'idle';
                                __state = '5';
                            }
                        }
                    } else {
                        if (buffer) {
                            addToken(line, type, buffer);
                            __state = '14';
                        } else {
                            __state = '14';
                        }
                    }
                    break;
                case '14':
                    return line;
                case '30':
                    addSpaceToLine(line);
                    state = 'space';
                    __state = '5';
                    break;
                default:
                    return;
                }
            }
        }
        function splitLineToTokens(line, type) {
            var tokens, start, result, _var2, _var3, token;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    tokens = splitByWhitespace(line);
                    start = true;
                    result = [];
                    _var2 = tokens;
                    _var3 = 0;
                    __state = '6';
                    break;
                case '6':
                    if (_var3 < _var2.length) {
                        token = _var2[_var3];
                        if (start) {
                            start = false;
                            __state = '11';
                        } else {
                            result.push({ type: 'space' });
                            __state = '11';
                        }
                    } else {
                        return result;
                    }
                    break;
                case '11':
                    result.push({
                        text: token,
                        type: type
                    });
                    _var3++;
                    __state = '6';
                    break;
                default:
                    return;
                }
            }
        }
        function cssFontToString(font) {
            var parts, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    parts = [];
                    if (font.style) {
                        parts.push(font.style);
                        __state = '7';
                    } else {
                        __state = '7';
                    }
                    break;
                case '7':
                    if (font.weight) {
                        parts.push(font.weight);
                        __state = '9';
                    } else {
                        __state = '9';
                    }
                    break;
                case '9':
                    parts.push(font.size + 'px');
                    parts.push(font.family);
                    _var2 = parts.join(' ');
                    return _var2;
                default:
                    return;
                }
            }
        }
        function splitToTokensHtml(html) {
            var lines, parser, doc, body, name, firstNode, _var2, _var3, _var4, node, _var5;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    html = html || '';
                    lines = [];
                    parser = new DOMParser();
                    doc = parser.parseFromString(html, 'text/html');
                    body = doc.documentElement.childNodes[1];
                    __state = '25';
                    break;
                case '9':
                    return lines;
                case '10':
                    _var3 = body.childNodes;
                    _var4 = 0;
                    __state = '13';
                    break;
                case '12':
                    _var4++;
                    __state = '13';
                    break;
                case '13':
                    if (_var4 < _var3.length) {
                        node = _var3[_var4];
                        name = getNodeName(node);
                        _var2 = name;
                        if (_var2 === 'ul') {
                            processUnordered(node.childNodes, lines);
                            __state = '12';
                        } else {
                            if (_var2 === 'ol') {
                                processOrdered(node.childNodes, lines);
                                __state = '12';
                            } else {
                                if (_var2 === 'script') {
                                    __state = '12';
                                } else {
                                    if (_var2 === '#text') {
                                        __state = '12';
                                    } else {
                                        processParagraph(node, lines);
                                        __state = '12';
                                    }
                                }
                            }
                        }
                    } else {
                        __state = '9';
                    }
                    break;
                case '25':
                    if (body.childNodes.length === 1) {
                        firstNode = body.childNodes[0];
                        name = getNodeName(firstNode);
                        if (name === '#text') {
                            _var5 = splitToTokens(firstNode.nodeValue);
                            lines = wrapInLineObjects(_var5);
                            __state = '9';
                        } else {
                            __state = '10';
                        }
                    } else {
                        __state = '10';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function addNodeToLine(node, line, strong, em) {
            var name, type, tokens, _var2, _var3, _var4, child, _var5;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    if (strong) {
                        if (em) {
                            type = 'sem';
                            __state = '_item7';
                        } else {
                            type = 'strong';
                            __state = '_item7';
                        }
                    } else {
                        if (em) {
                            type = 'em';
                            __state = '_item7';
                        } else {
                            type = 'normal';
                            __state = '_item7';
                        }
                    }
                    break;
                case '4':
                    if (_var4 < _var3.length) {
                        child = _var3[_var4];
                        name = getNodeName(child);
                        _var2 = name;
                        if (_var2 === '#text') {
                            _var5 = child.nodeValue.trim();
                            if (_var5 === '') {
                                line.push({ type: 'space' });
                                __state = '5';
                            } else {
                                tokens = splitHtmlTextNode(child.nodeValue, type);
                                addRange(tokens, line);
                                __state = '5';
                            }
                        } else {
                            if (_var2 === 'strong') {
                                addNodeToLine(child, line, true, em);
                                __state = '5';
                            } else {
                                if (_var2 === 'em') {
                                    addNodeToLine(child, line, strong, true);
                                    __state = '5';
                                } else {
                                    if (_var2 === 'script') {
                                        __state = '5';
                                    } else {
                                        addNodeToLine(child, line, strong, em);
                                        __state = '5';
                                    }
                                }
                            }
                        }
                    } else {
                        return;
                    }
                    break;
                case '5':
                    _var4++;
                    __state = '4';
                    break;
                case '_item7':
                    _var3 = node.childNodes;
                    _var4 = 0;
                    __state = '4';
                    break;
                default:
                    return;
                }
            }
        }
        function splitToTokens(text) {
            var lines, notEmtpyLines, _var2, _var3, _var4, _var5;
            text = text || '';
            lines = text.split('\n');
            _var4 = lines.map(function (line) {
                _var5 = line.trim();
                return _var5;
            });
            notEmtpyLines = _var4.filter(function (line) {
                return line.length;
            });
            _var2 = notEmtpyLines.map(function (line) {
                _var3 = splitLineToTokens(line, '');
                return _var3;
            });
            return _var2;
        }
        function processParagraph(node, lines) {
            var line;
            line = { tokens: [] };
            lines.push(line);
            addNodeToLine(node, line.tokens, false, false);
            return;
        }
        function getNodeName(node) {
            var _var2;
            _var2 = node.nodeName.toLowerCase();
            return _var2;
        }
        function processOrdered(nodes, lines) {
            var i, name, line, _var2, _var3, node;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    i = 1;
                    _var2 = nodes;
                    _var3 = 0;
                    __state = '5';
                    break;
                case '4':
                    _var3++;
                    __state = '5';
                    break;
                case '5':
                    if (_var3 < _var2.length) {
                        node = _var2[_var3];
                        name = getNodeName(node);
                        if (name === 'li') {
                            line = {
                                type: 'ul',
                                tokens: [{ text: i + '. ' }]
                            };
                            lines.push(line);
                            addNodeToLine(node, line.tokens, false, false);
                            i++;
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
        function DrakonCanvas() {
            var self = {};
            self.arrowRight = function () {
                return DrakonCanvas_arrowRight(self);
            };
            self.onMouseDown = function (evt) {
                return DrakonCanvas_onMouseDown(self, evt);
            };
            self.exportJson = function () {
                return DrakonCanvas_exportJson(self);
            };
            self.init = function () {
                return DrakonCanvas_init(self);
            };
            self.showInsertionSockets = function (type) {
                return DrakonCanvas_showInsertionSockets(self, type);
            };
            self.arrowLeft = function () {
                return DrakonCanvas_arrowLeft(self);
            };
            self.toggleSilhouette = function () {
                return DrakonCanvas_toggleSilhouette(self);
            };
            self.render = function (width, height, config) {
                return DrakonCanvas_render(self, width, height, config);
            };
            self.setStyle = function (ids, style) {
                return DrakonCanvas_setStyle(self, ids, style);
            };
            self.showPasteSockets = function (type) {
                return DrakonCanvas_showPasteSockets(self, type);
            };
            self.onContextMenu = function (evt) {
                return DrakonCanvas_onContextMenu(self, evt);
            };
            self.undo = function () {
                return DrakonCanvas_undo(self);
            };
            self.setZoom = function (zoom) {
                return DrakonCanvas_setZoom(self, zoom);
            };
            self.setSecondary = function (itemId, secondary) {
                return DrakonCanvas_setSecondary(self, itemId, secondary);
            };
            self.deleteSelection = function () {
                return DrakonCanvas_deleteSelection(self);
            };
            self.onMouseMove = function (evt) {
                return DrakonCanvas_onMouseMove(self, evt);
            };
            self.editContent = function () {
                return DrakonCanvas_editContent(self);
            };
            self.getVersion = function () {
                return DrakonCanvas_getVersion(self);
            };
            self.exportCanvas = function (zoom100) {
                return DrakonCanvas_exportCanvas(self, zoom100);
            };
            self.copySelection = function () {
                return DrakonCanvas_copySelection(self);
            };
            self.setContent = function (itemId, content) {
                return DrakonCanvas_setContent(self, itemId, content);
            };
            self.showItem = function (itemId) {
                return DrakonCanvas_showItem(self, itemId);
            };
            self.setDiagram = function (diagramId, diagram, sender) {
                return DrakonCanvas_setDiagram(self, diagramId, diagram, sender);
            };
            self.onMouseUp = function (evt) {
                return DrakonCanvas_onMouseUp(self, evt);
            };
            self.showPaste = function () {
                return DrakonCanvas_showPaste(self);
            };
            self.goHome = function () {
                return DrakonCanvas_goHome(self);
            };
            self.setLink = function (itemId, link) {
                return DrakonCanvas_setLink(self, itemId, link);
            };
            self.onMouseLeave = function (evt) {
                return DrakonCanvas_onMouseLeave(self, evt);
            };
            self.cutSelection = function () {
                return DrakonCanvas_cutSelection(self);
            };
            self.onChange = function (change) {
                return DrakonCanvas_onChange(self, change);
            };
            self.getZoom = function () {
                return DrakonCanvas_getZoom(self);
            };
            self.arrowUp = function () {
                return DrakonCanvas_arrowUp(self);
            };
            self.setDiagramStyle = function (style) {
                return DrakonCanvas_setDiagramStyle(self, style);
            };
            self.redo = function () {
                return DrakonCanvas_redo(self);
            };
            self.insertFree = function (type, evt) {
                return DrakonCanvas_insertFree(self, type, evt);
            };
            self.onScroll = function (evt) {
                return DrakonCanvas_onScroll(self, evt);
            };
            self.arrowDown = function () {
                return DrakonCanvas_arrowDown(self);
            };
            self.redraw = function () {
                return DrakonCanvas_redraw(self);
            };
            return self;
        }
        function DefaultIconCore() {
            var self = {};
            self.measure = function (refObject) {
                return DefaultIconCore_measure(self, refObject);
            };
            self.commit = function (width) {
                return DefaultIconCore_commit(self, width);
            };
            self.buildDom = function () {
                return DefaultIconCore_buildDom(self);
            };
            self.renderContent = function (left, top, ctx) {
                return DefaultIconCore_renderContent(self, left, top, ctx);
            };
            return self;
        }
        function GroupTopHandle() {
            var self = {};
            self.dragTo = function (x, y) {
                return GroupTopHandle_dragTo(self, x, y);
            };
            self.getMaxX = function () {
                return GroupTopHandle_getMaxX(self);
            };
            self.getMaxY = function () {
                return GroupTopHandle_getMaxY(self);
            };
            self.getMinX = function () {
                return GroupTopHandle_getMinX(self);
            };
            self.xEnabled = function () {
                return GroupTopHandle_xEnabled(self);
            };
            self.yEnabled = function () {
                return GroupTopHandle_yEnabled(self);
            };
            self.getMinY = function () {
                return GroupTopHandle_getMinY(self);
            };
            self.getCursor = function () {
                return GroupTopHandle_getCursor(self);
            };
            self.complete = function () {
                return GroupTopHandle_complete(self);
            };
            return self;
        }
        function GroupBottomHandle() {
            var self = {};
            self.getMinX = function () {
                return GroupBottomHandle_getMinX(self);
            };
            self.complete = function () {
                return GroupBottomHandle_complete(self);
            };
            self.getCursor = function () {
                return GroupBottomHandle_getCursor(self);
            };
            self.xEnabled = function () {
                return GroupBottomHandle_xEnabled(self);
            };
            self.getMaxY = function () {
                return GroupBottomHandle_getMaxY(self);
            };
            self.yEnabled = function () {
                return GroupBottomHandle_yEnabled(self);
            };
            self.getMinY = function () {
                return GroupBottomHandle_getMinY(self);
            };
            self.getMaxX = function () {
                return GroupBottomHandle_getMaxX(self);
            };
            self.dragTo = function (x, y) {
                return GroupBottomHandle_dragTo(self, x, y);
            };
            return self;
        }
        function RightDrakonResizeHandle() {
            var self = {};
            self.xEnabled = function () {
                return RightDrakonResizeHandle_xEnabled(self);
            };
            self.yEnabled = function () {
                return RightDrakonResizeHandle_yEnabled(self);
            };
            self.getMinX = function () {
                return RightDrakonResizeHandle_getMinX(self);
            };
            self.dragTo = function (x, y) {
                return RightDrakonResizeHandle_dragTo(self, x, y);
            };
            self.getMaxX = function () {
                return RightDrakonResizeHandle_getMaxX(self);
            };
            self.getCursor = function () {
                return RightDrakonResizeHandle_getCursor(self);
            };
            self.complete = function () {
                return RightDrakonResizeHandle_complete(self);
            };
            return self;
        }
        function LeftDrakonResizeHandle() {
            var self = {};
            self.xEnabled = function () {
                return LeftDrakonResizeHandle_xEnabled(self);
            };
            self.complete = function () {
                return LeftDrakonResizeHandle_complete(self);
            };
            self.getCursor = function () {
                return LeftDrakonResizeHandle_getCursor(self);
            };
            self.dragTo = function (x, y) {
                return LeftDrakonResizeHandle_dragTo(self, x, y);
            };
            self.getMinX = function () {
                return LeftDrakonResizeHandle_getMinX(self);
            };
            self.getMaxX = function () {
                return LeftDrakonResizeHandle_getMaxX(self);
            };
            self.yEnabled = function () {
                return LeftDrakonResizeHandle_yEnabled(self);
            };
            return self;
        }
        function FrameDrag() {
            var self = {};
            self.onDrag = function (evt) {
                return FrameDrag_onDrag(self, evt);
            };
            self.complete = function () {
                return FrameDrag_complete(self);
            };
            return self;
        }
        function HandleDrag() {
            var self = {};
            self.complete = function () {
                return HandleDrag_complete(self);
            };
            self.onDrag = function (evt) {
                return HandleDrag_onDrag(self, evt);
            };
            return self;
        }
        function FreeMover() {
            var self = {};
            self.complete = function () {
                return FreeMover_complete(self);
            };
            self.onDrag = function (evt) {
                return FreeMover_onDrag(self, evt);
            };
            return self;
        }
        function HandleNorth() {
            var self = {};
            self.xEnabled = function () {
                return HandleNorth_xEnabled(self);
            };
            self.getCursor = function () {
                return HandleNorth_getCursor(self);
            };
            self.yEnabled = function () {
                return HandleNorth_yEnabled(self);
            };
            self.dragTo = function (x, y) {
                return HandleNorth_dragTo(self, x, y);
            };
            self.getMaxX = function () {
                return HandleNorth_getMaxX(self);
            };
            self.complete = function () {
                return HandleNorth_complete(self);
            };
            self.getMinY = function () {
                return HandleNorth_getMinY(self);
            };
            self.getMaxY = function () {
                return HandleNorth_getMaxY(self);
            };
            self.getMinX = function () {
                return HandleNorth_getMinX(self);
            };
            return self;
        }
        function HandleNE() {
            var self = {};
            self.yEnabled = function () {
                return HandleNE_yEnabled(self);
            };
            self.complete = function () {
                return HandleNE_complete(self);
            };
            self.getMaxY = function () {
                return HandleNE_getMaxY(self);
            };
            self.getCursor = function () {
                return HandleNE_getCursor(self);
            };
            self.getMaxX = function () {
                return HandleNE_getMaxX(self);
            };
            self.dragTo = function (x, y) {
                return HandleNE_dragTo(self, x, y);
            };
            self.getMinX = function () {
                return HandleNE_getMinX(self);
            };
            self.getMinY = function () {
                return HandleNE_getMinY(self);
            };
            self.xEnabled = function () {
                return HandleNE_xEnabled(self);
            };
            return self;
        }
        function HandleSW() {
            var self = {};
            self.getMaxX = function () {
                return HandleSW_getMaxX(self);
            };
            self.dragTo = function (x, y) {
                return HandleSW_dragTo(self, x, y);
            };
            self.getMaxY = function () {
                return HandleSW_getMaxY(self);
            };
            self.complete = function () {
                return HandleSW_complete(self);
            };
            self.getMinX = function () {
                return HandleSW_getMinX(self);
            };
            self.yEnabled = function () {
                return HandleSW_yEnabled(self);
            };
            self.getMinY = function () {
                return HandleSW_getMinY(self);
            };
            self.getCursor = function () {
                return HandleSW_getCursor(self);
            };
            self.xEnabled = function () {
                return HandleSW_xEnabled(self);
            };
            return self;
        }
        function HandleNW() {
            var self = {};
            self.getMinY = function () {
                return HandleNW_getMinY(self);
            };
            self.dragTo = function (x, y) {
                return HandleNW_dragTo(self, x, y);
            };
            self.getMinX = function () {
                return HandleNW_getMinX(self);
            };
            self.complete = function () {
                return HandleNW_complete(self);
            };
            self.yEnabled = function () {
                return HandleNW_yEnabled(self);
            };
            self.getMaxX = function () {
                return HandleNW_getMaxX(self);
            };
            self.xEnabled = function () {
                return HandleNW_xEnabled(self);
            };
            self.getCursor = function () {
                return HandleNW_getCursor(self);
            };
            self.getMaxY = function () {
                return HandleNW_getMaxY(self);
            };
            return self;
        }
        function HandleSouth() {
            var self = {};
            self.getMinX = function () {
                return HandleSouth_getMinX(self);
            };
            self.yEnabled = function () {
                return HandleSouth_yEnabled(self);
            };
            self.getMaxX = function () {
                return HandleSouth_getMaxX(self);
            };
            self.getMaxY = function () {
                return HandleSouth_getMaxY(self);
            };
            self.getCursor = function () {
                return HandleSouth_getCursor(self);
            };
            self.complete = function () {
                return HandleSouth_complete(self);
            };
            self.dragTo = function (x, y) {
                return HandleSouth_dragTo(self, x, y);
            };
            self.getMinY = function () {
                return HandleSouth_getMinY(self);
            };
            self.xEnabled = function () {
                return HandleSouth_xEnabled(self);
            };
            return self;
        }
        function LineEnd() {
            var self = {};
            self.getMinY = function () {
                return LineEnd_getMinY(self);
            };
            self.yEnabled = function () {
                return LineEnd_yEnabled(self);
            };
            self.getCursor = function () {
                return LineEnd_getCursor(self);
            };
            self.xEnabled = function () {
                return LineEnd_xEnabled(self);
            };
            self.getMinX = function () {
                return LineEnd_getMinX(self);
            };
            self.dragTo = function (x, y) {
                return LineEnd_dragTo(self, x, y);
            };
            self.complete = function () {
                return LineEnd_complete(self);
            };
            self.getMaxY = function () {
                return LineEnd_getMaxY(self);
            };
            self.getMaxX = function () {
                return LineEnd_getMaxX(self);
            };
            return self;
        }
        function LineStart() {
            var self = {};
            self.getMaxY = function () {
                return LineStart_getMaxY(self);
            };
            self.getMaxX = function () {
                return LineStart_getMaxX(self);
            };
            self.getCursor = function () {
                return LineStart_getCursor(self);
            };
            self.yEnabled = function () {
                return LineStart_yEnabled(self);
            };
            self.dragTo = function (x, y) {
                return LineStart_dragTo(self, x, y);
            };
            self.getMinX = function () {
                return LineStart_getMinX(self);
            };
            self.xEnabled = function () {
                return LineStart_xEnabled(self);
            };
            self.complete = function () {
                return LineStart_complete(self);
            };
            self.getMinY = function () {
                return LineStart_getMinY(self);
            };
            return self;
        }
        function HandleWest() {
            var self = {};
            self.getMinX = function () {
                return HandleWest_getMinX(self);
            };
            self.complete = function () {
                return HandleWest_complete(self);
            };
            self.dragTo = function (x, y) {
                return HandleWest_dragTo(self, x, y);
            };
            self.getMaxY = function () {
                return HandleWest_getMaxY(self);
            };
            self.xEnabled = function () {
                return HandleWest_xEnabled(self);
            };
            self.yEnabled = function () {
                return HandleWest_yEnabled(self);
            };
            self.getCursor = function () {
                return HandleWest_getCursor(self);
            };
            self.getMinY = function () {
                return HandleWest_getMinY(self);
            };
            self.getMaxX = function () {
                return HandleWest_getMaxX(self);
            };
            return self;
        }
        function HandleSE() {
            var self = {};
            self.yEnabled = function () {
                return HandleSE_yEnabled(self);
            };
            self.getMaxX = function () {
                return HandleSE_getMaxX(self);
            };
            self.dragTo = function (x, y) {
                return HandleSE_dragTo(self, x, y);
            };
            self.xEnabled = function () {
                return HandleSE_xEnabled(self);
            };
            self.getMinY = function () {
                return HandleSE_getMinY(self);
            };
            self.getMinX = function () {
                return HandleSE_getMinX(self);
            };
            self.getCursor = function () {
                return HandleSE_getCursor(self);
            };
            self.getMaxY = function () {
                return HandleSE_getMaxY(self);
            };
            self.complete = function () {
                return HandleSE_complete(self);
            };
            return self;
        }
        function HandleEast() {
            var self = {};
            self.dragTo = function (x, y) {
                return HandleEast_dragTo(self, x, y);
            };
            self.getMinY = function () {
                return HandleEast_getMinY(self);
            };
            self.xEnabled = function () {
                return HandleEast_xEnabled(self);
            };
            self.getMaxX = function () {
                return HandleEast_getMaxX(self);
            };
            self.getMaxY = function () {
                return HandleEast_getMaxY(self);
            };
            self.getCursor = function () {
                return HandleEast_getCursor(self);
            };
            self.getMinX = function () {
                return HandleEast_getMinX(self);
            };
            self.yEnabled = function () {
                return HandleEast_yEnabled(self);
            };
            self.complete = function () {
                return HandleEast_complete(self);
            };
            return self;
        }
        function Text() {
            var self = {};
            self.drawCandies = function (widget, element, ctx) {
                return Text_drawCandies(self, widget, element, ctx);
            };
            self.calculateBox = function (element, config) {
                return Text_calculateBox(self, element, config);
            };
            self.canGuide = function () {
                return Text_canGuide(self);
            };
            self.getAccepted = function () {
                return Text_getAccepted(self);
            };
            self.create = function (pos) {
                return Text_create(self, pos);
            };
            self.hit = function (element, pos) {
                return Text_hit(self, element, pos);
            };
            self.canEditContent = function () {
                return Text_canEditContent(self);
            };
            self.flow = function (visuals, element) {
                return Text_flow(self, visuals, element);
            };
            self.render = function (visuals, element, ctx) {
                return Text_render(self, visuals, element, ctx);
            };
            return self;
        }
        function GroupDuration() {
            var self = {};
            self.hit = function (element, pos) {
                return GroupDuration_hit(self, element, pos);
            };
            self.calculateBox = function (element, config) {
                return GroupDuration_calculateBox(self, element, config);
            };
            self.render = function (visuals, element, ctx) {
                return GroupDuration_render(self, visuals, element, ctx);
            };
            self.canGuide = function () {
                return GroupDuration_canGuide(self);
            };
            self.canEditContent = function () {
                return GroupDuration_canEditContent(self);
            };
            self.create = function (pos) {
                return GroupDuration_create(self, pos);
            };
            self.drawCandies = function (widget, element, ctx) {
                return GroupDuration_drawCandies(self, widget, element, ctx);
            };
            self.flow = function (visuals, element) {
                return GroupDuration_flow(self, visuals, element);
            };
            self.canEditLink = function () {
                return GroupDuration_canEditLink(self);
            };
            self.getAccepted = function () {
                return GroupDuration_getAccepted(self);
            };
            return self;
        }
        function Rectangle() {
            var self = {};
            self.hit = function (element, pos) {
                return Rectangle_hit(self, element, pos);
            };
            self.canGuide = function () {
                return Rectangle_canGuide(self);
            };
            self.drawCandies = function (widget, element, ctx) {
                return Rectangle_drawCandies(self, widget, element, ctx);
            };
            self.canEditLink = function () {
                return Rectangle_canEditLink(self);
            };
            self.create = function (pos) {
                return Rectangle_create(self, pos);
            };
            self.render = function (visuals, element, ctx) {
                return Rectangle_render(self, visuals, element, ctx);
            };
            self.canEditContent = function () {
                return Rectangle_canEditContent(self);
            };
            self.getAccepted = function () {
                return Rectangle_getAccepted(self);
            };
            self.flow = function (visuals, element) {
                return Rectangle_flow(self, visuals, element);
            };
            self.calculateBox = function (element, config) {
                return Rectangle_calculateBox(self, element, config);
            };
            return self;
        }
        function Line() {
            var self = {};
            self.flow = function (visuals, element) {
                return Line_flow(self, visuals, element);
            };
            self.hit = function (element, pos) {
                return Line_hit(self, element, pos);
            };
            self.formatLines = function () {
                return Line_formatLines(self);
            };
            self.formatArrow = function () {
                return Line_formatArrow(self);
            };
            self.canGuide = function () {
                return Line_canGuide(self);
            };
            self.create = function (pos) {
                return Line_create(self, pos);
            };
            self.drawCandies = function (widget, element, ctx) {
                return Line_drawCandies(self, widget, element, ctx);
            };
            self.calculateBox = function (element, config) {
                return Line_calculateBox(self, element, config);
            };
            self.getAccepted = function () {
                return Line_getAccepted(self);
            };
            self.render = function (visuals, element, ctx) {
                return Line_render(self, visuals, element, ctx);
            };
            return self;
        }
        unit.flowTextBlock = flowTextBlock;
        unit.renderFlowBlock = renderFlowBlock;
        unit.createDummyCanvas = createDummyCanvas;
        unit.addHtmltoDom = addHtmltoDom;
        unit.createTextBlock = createTextBlock;
        unit.main = main;
        unit.parseCssFont = parseCssFont;
        unit.cssFontToString = cssFontToString;
        unit.DrakonCanvas = DrakonCanvas;
        unit.DefaultIconCore = DefaultIconCore;
        unit.GroupTopHandle = GroupTopHandle;
        unit.GroupBottomHandle = GroupBottomHandle;
        unit.RightDrakonResizeHandle = RightDrakonResizeHandle;
        unit.LeftDrakonResizeHandle = LeftDrakonResizeHandle;
        unit.FrameDrag = FrameDrag;
        unit.HandleDrag = HandleDrag;
        unit.FreeMover = FreeMover;
        unit.HandleNorth = HandleNorth;
        unit.HandleNE = HandleNE;
        unit.HandleSW = HandleSW;
        unit.HandleNW = HandleNW;
        unit.HandleSouth = HandleSouth;
        unit.LineEnd = LineEnd;
        unit.LineStart = LineStart;
        unit.HandleWest = HandleWest;
        unit.HandleSE = HandleSE;
        unit.HandleEast = HandleEast;
        unit.Text = Text;
        unit.GroupDuration = GroupDuration;
        unit.Rectangle = Rectangle;
        unit.Line = Line;
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
        Object.defineProperty(unit, 'edit_tools', {
            get: function () {
                return edit_tools;
            },
            set: function (newValue) {
                edit_tools = newValue;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(unit, 'tracing', {
            get: function () {
                return tracing;
            },
            set: function (newValue) {
                tracing = newValue;
            },
            enumerable: true,
            configurable: true
        });
        return unit;
    }
    var tracing = {
        trace: function (name, value) { console.log(name, value) },
        setTimeout: function (action, delay) { return window.setTimeout(action, delay) },
        registerEvent: function (element, name, action, options) { element.addEventListener(name, action, options) }
    }
    var html = html_0_1()
    var edit = edit_tools()
    var drakon = drakon_canvas()
    drakon.html = html
    drakon.edit_tools = edit
    drakon.tracing = tracing
    var widget = drakon.DrakonCanvas()
    widget.init()
    return widget
}
