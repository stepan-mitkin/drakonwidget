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
        unit.onError = function (error) {
            console.error(error);
        };
        var html, edit_tools;
        function getBranch(visuals, ordinal) {
            var nodeId, _var2;
            nodeId = visuals.branches[ordinal];
            _var2 = getNode(visuals, nodeId);
            return _var2;
        }
        function DrakonCanvas_init(self) {
            var _var2;
            self.origins = {};
            _var2 = Math.random();
            self.styleTag = html.createStyle();
            self.myStyleId = Math.floor(_var2 * 100000);
            self.zoom = 10000;
            initInsertFunctions(self);
            return;
        }
        function findDraggable(visuals, x, y) {
            return;
        }
        function selectNode(widget, node) {
            deselectAll(widget);
            selectPrim(widget, node.id);
            paint(widget);
            return;
        }
        function DrakonCanvas_showPasteSockets(self, type) {
            var showInsert, _var2, _var3;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
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
                                        __state = '11';
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
            var _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    _var2 = isReadonly(self);
                    if (_var2) {
                        __state = '1';
                    } else {
                        if (self.edit) {
                            resetSelection(self);
                            self.edit.undoEdit();
                            self.redraw();
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
                        scrollX: 0,
                        scrollY: 0
                    };
                    model.doc.access = diagram.access || 'write';
                    model.doc.name = diagram.name || '';
                    model.doc.keywords = clone(diagram.keywords || {});
                    model.doc.params = diagram.params || '';
                    nextId = 0;
                    __state = '5';
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
                        model.branches.sort(function (a, b) {
                            _var6 = compareBranches(a, b, model.items);
                            return _var6;
                        });
                        __state = '39';
                    }
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
            runInsertAction(widget, socket);
            widget.redraw();
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
            return;
        }
        function contentBranch(node, config, container) {
            var _var2;
            _var2 = contentBranchCore(node, config, container);
            return _var2;
        }
        function cut(widget) {
            var type, nodes;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    type = copyCore(widget);
                    if (type) {
                        nodes = getNodesFromSelection(widget);
                        deleteSelectionCore(widget, nodes);
                        widget.showPasteSockets(type);
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
        function boxFromPoint(x, y, width, height) {
            var _var2;
            _var2 = createBox(x - width, y - height, width * 2, height * 2);
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
        function actionWrapper(action, arg, evt) {
            try {
                action(arg, evt);
            } catch (ex) {
                console.error('User event caused an error', ex);
            }
            return;
        }
        function random(min, max) {
            var _var2;
            _var2 = Math.random();
            return _var2 * (max - min) + min;
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
            return {
                left: left,
                top: top,
                width: width,
                height: height
            };
        }
        function registerAction(element, eventName, action, arg) {
            var callback;
            callback = function (evt) {
                actionWrapper(action, arg, evt);
            };
            element.addEventListener(eventName, callback);
            return;
        }
        function last(array) {
            if (array.length === 0) {
                return undefined;
            } else {
                return array[array.length - 1];
            }
        }
        function addToMultiDict(dict, key, value) {
            var sameType;
            sameType = getCreateList(dict, key);
            sameType.push(value);
            return;
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
        function DrakonCanvas_onMouseDown(self, ignored, evt) {
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
        function DrakonCanvas_showInsertionSockets(self, type) {
            var showInsert, _var2, _var3;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
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
                                showBlockInsertSockets(self.visuals, 'insert', type);
                                __state = '11';
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
                        deleteItem(edits, itemId);
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
                        node = getNode(visuals, itemId);
                        if (node.one in oldTargets) {
                            updateItem(edits, itemId, { one: newTarget });
                            __state = '9';
                        } else {
                            __state = '9';
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
            var edits;
            edits = [];
            redirectUpperItems(edits, address.up.links, targetId);
            doEdit(widget, edits, true);
            widget.redraw();
            return;
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
            var edits, _var2, _var3;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    _var3 = isReadonly(self);
                    if (_var3) {
                        __state = '1';
                    } else {
                        _var2 = isSilhouette(self.visuals);
                        if (_var2) {
                            edits = toPrimitive(self);
                            __state = '5';
                        } else {
                            edits = toSilhouette(self);
                            __state = '5';
                        }
                    }
                    break;
                case '5':
                    doEdit(self, edits, false);
                    self.redraw();
                    __state = '1';
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
                    container = div({
                        display: 'inline-block',
                        position: 'absolute',
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
                    registerAction(self.scrollableContainer, 'scroll', self.onScroll);
                    __state = '51';
                    break;
                case '39':
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
                    break;
                case '51':
                    registerAction(self.scrollableContainer, 'mousedown', self.onMouseDown);
                    registerAction(self.scrollableContainer, 'mousemove', self.onMouseMove);
                    registerAction(self.scrollableContainer, 'mouseup', self.onMouseUp);
                    registerAction(self.scrollableContainer, 'mouseleave', self.onMouseLeave);
                    registerAction(self.scrollableContainer, 'contextmenu', self.onContextMenu);
                    __state = '17';
                    break;
                default:
                    return;
                }
            }
        }
        function blockSelect(widget) {
            var snode, selection, visuals, _var6, _var5, _var7, id, node, _var3, _var2, _var4, prim, _var8, _var9, _var10, _var11;
            var __state = '17';
            while (true) {
                switch (__state) {
                case '2':
                    _var6 = visuals.nodes;
                    _var5 = Object.keys(_var6);
                    _var7 = 0;
                    __state = '5';
                    break;
                case '4':
                    _var7++;
                    __state = '5';
                    break;
                case '5':
                    if (_var7 < _var5.length) {
                        id = _var5[_var7];
                        node = _var6[id];
                        _var10 = isSelected(widget, id);
                        if (_var10) {
                            __state = '4';
                        } else {
                            _var9 = canSelectNode(node);
                            if (_var9) {
                                _var8 = boxesIntersect(visuals.selectionFrame, node.box);
                                if (_var8) {
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
                case '17':
                    selection = widget.selection;
                    visuals = widget.visuals;
                    _var3 = selection.prims;
                    _var2 = Object.keys(_var3);
                    _var4 = 0;
                    __state = '19';
                    break;
                case '18':
                    _var4++;
                    __state = '19';
                    break;
                case '19':
                    if (_var4 < _var2.length) {
                        id = _var2[_var4];
                        prim = _var3[id];
                        if (prim === 'node') {
                            snode = getNode(visuals, id);
                            _var11 = canSelectNode(snode);
                            if (_var11) {
                                __state = '18';
                            } else {
                                __state = '15';
                            }
                        } else {
                            __state = '18';
                        }
                    } else {
                        __state = '2';
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
                        if (headNode) {
                            if (node.y < headNode.y) {
                                __state = '3';
                            } else {
                                __state = '8';
                            }
                        } else {
                            __state = '3';
                        }
                    }
                    break;
                case '3':
                    return node;
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
            var rect, widgetX, widgetY, x, y, zoom;
            rect = evt.target.getBoundingClientRect();
            widgetX = evt.clientX - rect.left;
            widgetY = evt.clientY - rect.top;
            zoom = widget.zoom / 10000;
            x = widgetX / zoom + widget.visuals.scrollX;
            y = widgetY / zoom + widget.visuals.scrollY;
            return {
                x: x,
                y: y
            };
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
            var included, result, start, context, info, _var2, _var4, _var3, _var5, id, _var6, _var7, inode, _var8, _var9;
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
                                            _var9 = addOne(widget, headNode, node);
                                            return _var9;
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
        function findVisualItem(visuals, x, y) {
            var node, edge;
            node = findNode(visuals, x, y);
            if (node) {
                return {
                    id: node.id,
                    type: node.type,
                    content: node.content,
                    elType: 'node',
                    left: node.x - node.w,
                    top: node.y - node.h,
                    width: node.w * 2,
                    height: node.h * 2
                };
            } else {
                edge = findEdge(visuals, x, y);
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
            zoom = widget.zoom / 10000;
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
        function addToSelection(widget, node) {
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
            var selection, visuals;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    selection = widget.selection;
                    visuals = widget.visuals;
                    if (id in visuals.nodes) {
                        selection.prims[id] = 'node';
                        selection.head = id;
                        __state = '1';
                    } else {
                        if (id in visuals.edges) {
                            selection.prims[id] = 'edge';
                            __state = '1';
                        } else {
                            throw new Error('Can\'t select ' + id);
                        }
                    }
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
        function findNode(visuals, x, y) {
            var _var2;
            _var2 = findElementAt(visuals.nodes, x, y);
            return _var2;
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
                                        __state = '3';
                                    } else {
                                        if (_var2 === 'action') {
                                            if (node.id === 'params') {
                                                __state = '3';
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
        function findEdge(visuals, x, y) {
            var _var2;
            _var2 = findElementAt(visuals.edges, x, y);
            return _var2;
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
            zoom = widget.zoom / 10000;
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
        function resetSelection(widget) {
            widget.selection = { prims: {} };
            return;
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
        function DrakonCanvas_setStyle(self, style, itemIds) {
            var changes;
            checkNotReadonly(self);
            changes = itemIds.map(function (id) {
                return {
                    id: id,
                    op: 'update',
                    fields: { style: style }
                };
            });
            doEdit(self, changes, true);
            self.redraw();
            return;
        }
        function DrakonCanvas_onContextMenu(self, ignored, evt) {
            evt.preventDefault();
            return false;
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
        function centerContent(node) {
            var left, top;
            left = Math.floor(node.x - node.w);
            top = Math.floor(node.y - node.frame.height / 2);
            node.frame.div.style.left = left + 'px';
            node.frame.div.style.width = node.w * 2 + 'px';
            node.frame.div.style.top = top + 'px';
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
        function renderBranch(visuals, node, ctx) {
            var x, y, w, h, bottom, middle, tx0, tx1, ty, line;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    line = setFillStroke(visuals.config, node, ctx);
                    buildBranchPath(ctx, node.x, node.y, node.w, node.h, visuals.config.metre);
                    ctx.fill();
                    centerContentTop(node);
                    if (line) {
                        buildBranchPath(ctx, node.x + 0.5, node.y + 0.5, node.w, node.h, visuals.config.metre);
                        ctx.stroke();
                        __state = '19';
                    } else {
                        __state = '19';
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
                        middle = bottom - 2 / 3 * h;
                        tx0 = x - w / 2;
                        tx1 = x + w / 2;
                        ty = (bottom + middle) / 2;
                        ctx.fillStyle = visuals.config.theme.iconBorder;
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
                case '19':
                    clearShadow(ctx);
                    __state = '12';
                    break;
                default:
                    return;
                }
            }
        }
        function centerContentBottom(node) {
            var left, top;
            left = Math.floor(node.x - node.w);
            top = Math.floor(node.y + node.h - node.frame.height);
            node.frame.div.style.left = left + 'px';
            node.frame.div.style.width = node.w * 2 + 'px';
            node.frame.div.style.top = top + 'px';
            return;
        }
        function contentEnd(node, config, container) {
            var _var2;
            _var2 = contentAction(node, config, container);
            return _var2;
        }
        function buildAlignedNodes(output, input) {
            var defaultValues;
            defaultValues = {
                action: true,
                question: true,
                'case': true,
                select: true,
                branch: true,
                address: true,
                loopbegin: true,
                loopend: true
            };
            mergeConfigs(output, input, 'alignedNodes', defaultValues);
            return;
        }
        function clearShadow(ctx) {
            ctx.shadowColor = '';
            ctx.shadowBlur = 0;
            return;
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
        function renderCase(visuals, node, ctx) {
            var left, bottom, middle, thickness, _var2;
            renderBranch(visuals, node, ctx);
            left = node.x - node.w;
            bottom = node.y + node.h;
            middle = bottom - visuals.config.metre;
            _var2 = getThemeValue(visuals.config, node, 'lineWidth');
            thickness = _var2 || 1;
            thickness = 1;
            ctx.fillStyle = visuals.config.theme.iconBorder;
            ctx.fillRect(left, middle, node.w * 2, thickness);
            return;
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
        function contentAction(node, config, container) {
            var textDiv, rect;
            textDiv = buildContent(container, node, config);
            rect = textDiv.getBoundingClientRect();
            return {
                div: textDiv,
                width: rect.width,
                height: rect.height
            };
        }
        function renderAddress(visuals, node, ctx) {
            var x, y, w, h, top, middle, tx0, tx1, ty, line;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    line = setFillStroke(visuals.config, node, ctx);
                    buildAddressPath(ctx, node.x, node.y, node.w, node.h, visuals.config.metre);
                    ctx.fill();
                    centerContentBottom(node);
                    if (line) {
                        buildAddressPath(ctx, node.x + 0.5, node.y + 0.5, node.w, node.h, visuals.config.metre);
                        ctx.stroke();
                        __state = '19';
                    } else {
                        __state = '19';
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
                        middle = top + 2 / 3 * h;
                        tx0 = x - w / 2;
                        tx1 = x + w / 2;
                        ty = (top + middle) / 2;
                        ctx.fillStyle = visuals.config.theme.iconBorder;
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
                case '19':
                    clearShadow(ctx);
                    __state = '12';
                    break;
                default:
                    return;
                }
            }
        }
        function contentQuestion(node, config, container) {
            var rect, yesDiv, noDiv, textDiv;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    textDiv = buildContent(container, node, config);
                    rect = textDiv.getBoundingClientRect();
                    if (config.canvasLabels) {
                        yesDiv = undefined;
                        noDiv = undefined;
                        __state = '6';
                    } else {
                        yesDiv = createLabel(container, config.yes, config);
                        noDiv = createLabel(container, config.no, config);
                        __state = '6';
                    }
                    break;
                case '6':
                    return {
                        div: textDiv,
                        yesDiv: yesDiv,
                        noDiv: noDiv,
                        width: rect.width,
                        height: rect.height
                    };
                default:
                    return;
                }
            }
        }
        function contentCase(node, config, container) {
            var _var2;
            _var2 = contentBranchCore(node, config, container);
            return _var2;
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
                    centerContent(node);
                    if (line) {
                        buildSelectPath(ctx, node.x + 0.5, node.y + 0.5, node.w, node.h, padding);
                        ctx.stroke();
                        __state = '13';
                    } else {
                        __state = '13';
                    }
                    break;
                case '13':
                    clearShadow(ctx);
                    return;
                default:
                    return;
                }
            }
        }
        function buildIconRender(output, input) {
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
                params: renderAction
            };
            mergeConfigs(output, input, 'iconRender', defaultValues);
            return;
        }
        function buildIconContent(output, input) {
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
                params: contentAction
            };
            mergeConfigs(output, input, 'iconContent', defaultValues);
            return;
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
                    centerContent(node);
                    if (line) {
                        buildLoopBeginPath(ctx, node.x + 0.5, node.y + 0.5, node.w, node.h, visuals.config.metre);
                        ctx.stroke();
                        __state = '13';
                    } else {
                        __state = '13';
                    }
                    break;
                case '13':
                    clearShadow(ctx);
                    return;
                default:
                    return;
                }
            }
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
        function renderQuestion(visuals, node, ctx) {
            var yesDiv, noDiv, yesRect, noRect, leftText, rightText, leftWidth, leftX, leftY, rightX, rightY, line, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    line = setFillStroke(visuals.config, node, ctx);
                    buildQuestionPath(ctx, node.x, node.y, node.w, node.h, visuals.config.metre);
                    ctx.fill();
                    if (line) {
                        buildQuestionPath(ctx, node.x + 0.5, node.y + 0.5, node.w, node.h, visuals.config.metre);
                        ctx.stroke();
                        __state = '37';
                    } else {
                        __state = '37';
                    }
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
                case '37':
                    clearShadow(ctx);
                    centerContent(node);
                    __state = '12';
                    break;
                default:
                    return;
                }
            }
        }
        function centerContentTop(node) {
            var left, top;
            left = Math.floor(node.x - node.w);
            top = Math.floor(node.y - node.h);
            node.frame.div.style.left = left + 'px';
            node.frame.div.style.width = node.w * 2 + 'px';
            node.frame.div.style.top = top + 'px';
            return;
        }
        function contentHeader(node, config, container) {
            var _var2;
            _var2 = contentAction(node, config, container);
            return _var2;
        }
        function contentBranchCore(node, config, container) {
            var rect, textDiv, rectHeight;
            textDiv = buildContent(container, node, config);
            rect = textDiv.getBoundingClientRect();
            rectHeight = Math.max(config.metre * 2, rect.height);
            return {
                div: textDiv,
                width: rect.width,
                h: rectHeight + config.metre,
                height: rect.height
            };
        }
        function contentSelect(node, config, container) {
            var _var2;
            _var2 = contentAction(node, config, container);
            return _var2;
        }
        function renderEnd(visuals, node, ctx) {
            renderHeader(visuals, node, ctx);
            return;
        }
        function setFillStroke(config, node, ctx) {
            var theme, lineWidth;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    theme = config.theme;
                    ctx.strokeStyle = getThemeValue(config, node, 'iconBorder');
                    ctx.fillStyle = getThemeValue(config, node, 'iconBack');
                    lineWidth = getThemeValue(config, node, 'borderWidth');
                    ctx.lineWidth = lineWidth;
                    if (theme.shadowColor) {
                        ctx.shadowColor = theme.shadowColor;
                        ctx.shadowBlur = theme.shadowBlur;
                        __state = '14';
                    } else {
                        __state = '14';
                    }
                    break;
                case '14':
                    return lineWidth;
                default:
                    return;
                }
            }
        }
        function contentJunction(node, config, container) {
            return {
                width: 0,
                height: 0
            };
        }
        function contentAddress(node, config, container) {
            var _var2;
            _var2 = contentBranchCore(node, config, container);
            return _var2;
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
                    if (line) {
                        ctx.strokeRect(left + 0.5, top + 0.5, width, height);
                        __state = '12';
                    } else {
                        __state = '12';
                    }
                    break;
                case '12':
                    clearShadow(ctx);
                    centerContent(node);
                    return;
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
                    centerContent(node);
                    if (line) {
                        buildBeginEndPath(ctx, node.x + 0.5, node.y + 0.5, node.w, node.h);
                        ctx.stroke();
                        __state = '16';
                    } else {
                        __state = '16';
                    }
                    break;
                case '16':
                    clearShadow(ctx);
                    return;
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
            return;
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
                    centerContent(node);
                    if (line) {
                        buildLoopEndPath(ctx, node.x + 0.5, node.y + 0.5, node.w, node.h, visuals.config.metre);
                        ctx.stroke();
                        __state = '13';
                    } else {
                        __state = '13';
                    }
                    break;
                case '13':
                    clearShadow(ctx);
                    return;
                default:
                    return;
                }
            }
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
            var style, theme, icons, forIcon, value;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    style = node.style;
                    if (style) {
                        value = style[name];
                        if (value === undefined) {
                            __state = '16';
                        } else {
                            __state = '24';
                        }
                    } else {
                        __state = '16';
                    }
                    break;
                case '16':
                    theme = config.theme;
                    icons = theme.icons;
                    if (icons) {
                        forIcon = icons[node.type];
                        if (forIcon) {
                            value = forIcon[name];
                            if (value === undefined) {
                                __state = '21';
                            } else {
                                __state = '24';
                            }
                        } else {
                            __state = '21';
                        }
                    } else {
                        __state = '21';
                    }
                    break;
                case '21':
                    return theme[name];
                case '24':
                    return value;
                default:
                    return;
                }
            }
        }
        function renderJunction(node, ctx) {
            return;
        }
        function DrakonCanvas_setZoom(self, zoom) {
            var _var2;
            _var2 = Math.min(40000, zoom);
            self.zoom = Math.max(2500, _var2);
            initScrollPos(self);
            paint(self);
            return;
        }
        function DrakonCanvas_deleteSelection(self) {
            var _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
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
        function DrakonCanvas_onMouseMove(self, ignored, evt) {
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
            var nodes, node, prim, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    nodes = getNodesFromSelection(self);
                    if (nodes.length === 1) {
                        node = nodes[0];
                        _var2 = canEditNodeText(node);
                        if (_var2) {
                            prim = primFromNode(self, node);
                            startEditContent(widget, prim);
                            __state = '1';
                        } else {
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
        function DrakonCanvas_copySelection(self) {
            copy(self);
            return;
        }
        function DrakonCanvas_setContent(self, itemId, content) {
            var change, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    checkNotReadonly(self);
                    _var2 = itemId;
                    if (_var2 === 'header') {
                        change = {
                            fields: { name: content },
                            op: 'update'
                        };
                        doEdit(self, [change], true);
                        __state = '1';
                    } else {
                        if (_var2 === 'params') {
                            change = {
                                fields: { params: content },
                                op: 'update'
                            };
                            __state = '34';
                        } else {
                            change = {
                                id: itemId,
                                fields: { content: content },
                                op: 'update'
                            };
                            __state = '34';
                        }
                    }
                    break;
                case '34':
                    doEdit(self, [change], true);
                    buildDiagramModel(self, self.edit.diagram);
                    buildVisualsForEdit(self);
                    paint(self);
                    __state = '1';
                    break;
                default:
                    return;
                }
            }
        }
        function DrakonCanvas_showItem(self, itemId) {
            var visuals, box, node, width, height, nodeBox, nodeLeft, nodeTop, nodeRight, nodeBottom, scrollX, halfWidth, scrollY, halfHeight, zoom;
            var __state = '13';
            while (true) {
                switch (__state) {
                case '2':
                    if (nodeLeft >= 0) {
                        if (nodeRight < width) {
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
                        if (nodeBottom < height) {
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
                    visuals = self.visuals;
                    box = visuals.box;
                    zoom = self.zoom / 10000;
                    width = self.width / zoom;
                    height = self.height / zoom;
                    node = getNode(visuals, itemId);
                    nodeBox = node.box;
                    nodeLeft = diagramToWidgetX(self, nodeBox.left);
                    nodeTop = diagramToWidgetY(self, nodeBox.top);
                    nodeRight = diagramToWidgetX(self, nodeBox.left + nodeBox.width);
                    nodeBottom = diagramToWidgetY(self, nodeBox.top + nodeBox.height);
                    __state = '2';
                    break;
                case '21':
                    setScroll(self, scrollX, scrollY);
                    copyScrollToScrollable(self);
                    deselectAll(widget);
                    selectPrim(widget, itemId);
                    paint(self);
                    __state = '11';
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
            self.edit = edit_tools.createUndoEdit(diagram, sender);
            self.diagramId = diagramId;
            resetSelection(self);
            self.redraw();
            return;
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
        function createLianaSocket(visuals, record, source) {
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
                    _var12 = source.inner.outer;
                    _var11 = Object.keys(_var12);
                    _var13 = 0;
                    __state = '16';
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
                        createLianaSocket(visuals, record, source);
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
                            createLianaSocket(visuals, record, source);
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
                                if (source.inner) {
                                    __state = '7';
                                } else {
                                    __state = '4';
                                }
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
                            createLianaSocket(visuals, record, source);
                            __state = '35';
                        } else {
                            __state = '35';
                        }
                    } else {
                        __state = '9';
                    }
                    break;
                case '42':
                    createLianaSocket(visuals, record, source);
                    __state = '15';
                    break;
                default:
                    return;
                }
            }
        }
        function canOuterToInner(record, source) {
            var targetNode, targetTop, targetStop, sourceBottom, sourceStop;
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
                            return true;
                        }
                    } else {
                        __state = '14';
                    }
                    break;
                case '14':
                    return false;
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
        function DrakonCanvas_onMouseUp(self, ignored, evt) {
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
                    unit.onError(ex);
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
        function SelectBehavior_create(widget) {
            var startX, startY, pos, deltaX, deltaY, currentSocket, prim, scroller, _var2, evt, _var3, _var4, _var5;
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
                            mouseClick(widget, pos.x, pos.y, evt);
                            me.state = '2';
                            break;
                        case '47':
                            deltaX = evt.clientX - startX;
                            deltaY = evt.clientY - startY;
                            _var3 = Math.abs(deltaX);
                            if (_var3 > 2) {
                                me.state = '104';
                            } else {
                                _var4 = Math.abs(deltaY);
                                if (_var4 > 2) {
                                    me.state = '104';
                                } else {
                                    me.state = '29';
                                }
                            }
                            break;
                        case '51':
                            widget.visuals.selectionFrame = undefined;
                            paint(widget);
                            me.state = '2';
                            break;
                        case '56':
                            updateSelectionFrame(widget, startX, startY, evt);
                            blockSelect(widget);
                            paint(widget);
                            me.state = '39';
                            break;
                        case '64':
                            pos = toDiagram(widget, evt);
                            currentSocket = findSocket(widget.visuals, pos.x, pos.y);
                            if (currentSocket) {
                                me.state = '67';
                            } else {
                                prim = findVisualItem(widget.visuals, pos.x, pos.y);
                                if (prim) {
                                    me.state = '67';
                                } else {
                                    setCursor(evt.target, 'default');
                                    me.state = '2';
                                }
                            }
                            break;
                        case '67':
                            setCursor(evt.target, 'pointer');
                            me.state = '2';
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
                        case '104':
                            clearSockets(widget.visuals);
                            me.state = '39';
                            break;
                        case '107':
                            onMouseScroll(scroller, widget, evt);
                            me.state = '6';
                            break;
                        case '_item2':
                            _var2 = evt.button;
                            if (_var2 === 0) {
                                startX = evt.clientX;
                                startY = evt.clientY;
                                pos = toDiagram(widget, evt);
                                widget.visuals.currentSocket = findSocket(widget.visuals, pos.x, pos.y);
                                if (widget.visuals.currentSocket) {
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
                                        unit.onError(_var5);
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
                    unit.onError(ex);
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
                            me.state = '56';
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
                            me.state = '51';
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
                            me.state = '51';
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
            zoom = widget.zoom / 10000;
            x = scroller.startScrollX - deltaX / zoom;
            y = scroller.startScrollY - deltaY / zoom;
            setScrollFromMouseEvent(widget, x, y);
            paint(widget);
            return;
        }
        function DrakonCanvas_showPaste(self) {
            var clipboard, _var2, _var3;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
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
                                        __state = '1';
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
        function buildContent(container, node, config) {
            var textDiv, smallerPadding, color, type, content, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    type = node.type;
                    content = node.content;
                    color = getThemeValue(config, node, 'color');
                    _var2 = type;
                    if (_var2 === 'question') {
                        textDiv = config.buildContentDiv(type, content, config, config.font, 'left', color);
                        textDiv.style.paddingLeft = config.metre + 'px';
                        textDiv.style.paddingRight = config.metre + 'px';
                        __state = '5';
                    } else {
                        if (_var2 === 'header') {
                            textDiv = buildTextDiv(type, content, config, config.headerFont, 'center', color);
                            smallerPadding = config.padding / 2 + 'px';
                            textDiv.style.paddingTop = smallerPadding;
                            textDiv.style.paddingBottom = smallerPadding;
                            __state = '5';
                        } else {
                            if (_var2 === 'branch') {
                                textDiv = buildMulitlineDiv(type, content, config, config.font, 'center', color);
                                textDiv.style.fontWeight = 'bold';
                                __state = '5';
                            } else {
                                if (_var2 === 'select') {
                                    textDiv = config.buildContentDiv(type, content, config, config.font, 'left', color);
                                    textDiv.style.paddingLeft = config.padding * 1.5 + 'px';
                                    textDiv.style.paddingRight = config.padding * 1.5 + 'px';
                                    __state = '5';
                                } else {
                                    if (_var2 === 'case') {
                                        __state = '22';
                                    } else {
                                        if (_var2 === 'address') {
                                            __state = '22';
                                        } else {
                                            if (_var2 === 'end') {
                                                textDiv = buildTextDiv(type, content, config, config.font, 'center', color);
                                                textDiv.style.minWidth = '';
                                                smallerPadding = config.padding / 2 + 'px';
                                                textDiv.style.paddingTop = smallerPadding;
                                                textDiv.style.paddingBottom = smallerPadding;
                                                __state = '5';
                                            } else {
                                                textDiv = config.buildContentDiv(type, content, config, config.font, 'left', color);
                                                __state = '5';
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    break;
                case '5':
                    html.add(container, textDiv);
                    return textDiv;
                case '22':
                    textDiv = config.buildContentDiv(type, content, config, config.font, 'center', color);
                    __state = '5';
                    break;
                default:
                    return;
                }
            }
        }
        function mouseClick(widget, x, y, evt) {
            var now, lastClick, diff, doubleClickTime, visuals, lastPrimId, prim, primId, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    doubleClickTime = 500;
                    visuals = widget.visuals;
                    now = getNowMs();
                    lastClick = widget.lastClick;
                    lastPrimId = widget.lastPrimId;
                    prim = findVisualItem(visuals, x, y);
                    if (prim) {
                        widget.lastPrimId = prim.id;
                        primId = prim.id;
                        __state = '19';
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
                    if (prim) {
                        console.log('mouseClick: found', prim);
                        if (prim.id) {
                            printPrim(visuals, prim);
                            _var2 = isSelected(widget, prim.id);
                            if (_var2) {
                                __state = '32';
                            } else {
                                deselectAll(widget);
                                selectPrim(widget, prim.id);
                                showLianaSockets(widget, prim);
                                __state = '32';
                            }
                        } else {
                            __state = '32';
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
                    if (prim) {
                        if (prim.elType === 'node') {
                            evt.stopPropagation();
                            evt.preventDefault();
                            primToClient(widget, prim);
                            setTimeout(function () {
                                startEditContent(widget, prim);
                            }, 0);
                            __state = '26';
                        } else {
                            __state = '26';
                        }
                    } else {
                        __state = '26';
                    }
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
                    _var2 = canEditNodeText(prim);
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
        function swapYesNo(widget, prim) {
            var change, node;
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
                        __state = '11';
                    } else {
                        change.fields.flag1 = 1;
                        __state = '11';
                    }
                    break;
                case '11':
                    doEdit(widget, [change], true);
                    widget.redraw();
                    return;
                default:
                    return;
                }
            }
        }
        function DrakonCanvas_onMouseLeave(self, ignored, evt) {
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
            var prim, visuals, menu, node, nodes, callback, _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    visuals = widget.visuals;
                    prim = findVisualItem(visuals, pos.x, pos.y);
                    if (prim) {
                        primToClient(widget, prim);
                        if (prim.elType === 'node') {
                            node = getNode(visuals, prim.id);
                            if (node.type == 'end') {
                                __state = '14';
                            } else {
                                if (node.type == 'junction') {
                                    __state = '14';
                                } else {
                                    _var2 = isSelected(widget, prim.id);
                                    if (_var2) {
                                        nodes = getNodesFromSelection(widget);
                                        if (nodes.length > 1) {
                                            menu = buildBlockMenu(widget);
                                            __state = '28';
                                        } else {
                                            __state = '27';
                                        }
                                    } else {
                                        deselectAll(widget);
                                        selectPrim(widget, prim.id);
                                        __state = '27';
                                    }
                                }
                            }
                        } else {
                            __state = '14';
                        }
                    } else {
                        menu = buildBackgroundMenu(widget);
                        __state = '30';
                    }
                    break;
                case '14':
                    menu = [];
                    __state = '30';
                    break;
                case '27':
                    menu = buildMenuByType(widget, prim, node);
                    __state = '28';
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
                            callback(evt.clientX, evt.clientY, menu);
                            __state = '29';
                        } else {
                            console.error('showContextMenu is missing in config');
                            __state = '29';
                        }
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function setScroll(widget, x, y) {
            var visuals, box, zoom;
            visuals = widget.visuals;
            box = visuals.box;
            zoom = widget.zoom / 10000;
            x = Math.min(box.right - widget.width / zoom, x);
            x = Math.max(box.left, x);
            y = Math.min(box.bottom - widget.height / zoom, y);
            y = Math.max(box.top, y);
            visuals.scrollX = x;
            visuals.scrollY = y;
            widget.origins[widget.diagramId] = {
                x: x,
                y: y
            };
            return;
        }
        function drawIcon(visuals, node, ctx) {
            var render;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    render = visuals.config.iconRender[node.type];
                    if (render) {
                        __state = '9';
                    } else {
                        render = visuals.config.iconRender.action;
                        console.error('iconRender callback not found for node of type: ' + node.type);
                        __state = '9';
                    }
                    break;
                case '9':
                    render(visuals, node, ctx);
                    return;
                default:
                    return;
                }
            }
        }
        function drawEdge(visuals, edge, ctx) {
            var x1, y1, x2, y2, thickness, w, h, color, _var2;
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
        function primToClient(widget, prim) {
            var pos;
            pos = toClient(widget, prim.left, prim.top);
            prim.left = pos.x;
            prim.top = pos.y;
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
            var head, tail, Min, hw, hh, tw, th, x1, y1, x2, y2, x, y, socket, radius, startPos, endPos, length, box, _var2, _var3, _var4, _var5;
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
                        _var4 = getY(head);
                        _var5 = getY(tail);
                        x1 = getX(head);
                        y1 = _var4 + hh;
                        x2 = x1;
                        y2 = _var5 - th;
                        startPos = edge.head.y + edge.head.h;
                        endPos = edge.tail.y - edge.tail.h;
                        length = endPos - startPos;
                        box = createBox(x1 - radius, startPos, radius * 2, length);
                        __state = '9';
                    } else {
                        _var2 = getX(head);
                        _var3 = getX(tail);
                        x1 = _var2 + hw;
                        y1 = getY(head);
                        x2 = _var3 - tw;
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
                    if (edge.role === 'floor') {
                        socket.target = getFloorTarget(visuals, edge);
                        __state = '19';
                    } else {
                        socket.target = edge.finalTarget.itemId;
                        __state = '19';
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
        function drawNodeCandy(visuals, id, ctx, config) {
            var node;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    node = visuals.nodes[id];
                    if (node.type === 'junction') {
                        __state = '8';
                    } else {
                        if (node.type === 'arrow-loop') {
                            __state = '8';
                        } else {
                            standardCandy(node, ctx, config);
                            __state = '1';
                        }
                    }
                    break;
                case '8':
                    juncCandy(node, ctx, config);
                    __state = '1';
                    break;
                default:
                    return;
                }
            }
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
        function resetContainer(widget) {
            html.clear(widget.contentContainer);
            widget.contentContainer.style.transform = '';
            return;
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
        function buildMenuByType(widget, prim, node) {
            var menu, func, _var2, _var3, _var4, _var5, _var6, _var7, _var8, _var9, _var10, _var11, _var12, _var13, _var14, _var15, _var16;
            var __state = '27';
            while (true) {
                switch (__state) {
                case '2':
                    if (prim.type === 'header') {
                        _var6 = tr(widget, 'Rename');
                        pushMenuItem(menu, _var6, undefined, function () {
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
                                pushMenuItem(menu, _var7, undefined, function () {
                                    addParameters(widget, prim);
                                });
                                __state = '_item19';
                            }
                        }
                    } else {
                        _var8 = canEditNodeText(prim);
                        if (_var8) {
                            _var9 = tr(widget, 'Edit content');
                            pushMenuItem(menu, _var9, undefined, function () {
                                startEditContent(widget, prim);
                            });
                            __state = '_item19';
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
                        pushMenuItem(menu, _var3, undefined, function () {
                            swapYesNo(widget, prim);
                        });
                        __state = '16';
                    } else {
                        if (_var2 === 'address') {
                            addressDestinations(widget, node, menu);
                            __state = '16';
                        } else {
                            if (_var2 === 'branch') {
                                if (widget.visuals.end) {
                                    __state = '16';
                                } else {
                                    if (node.itemId === widget.visuals.branches[widget.visuals.branches.length - 1]) {
                                        _var13 = tr(widget, 'Insert branch with End');
                                        pushMenuItem(menu, _var13, undefined, function () {
                                            branchInsertEnd(widget);
                                        });
                                        __state = '16';
                                    } else {
                                        __state = '16';
                                    }
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
                        pushMenuItem(menu, _var5, undefined, function () {
                            deleteOne(widget, node);
                        });
                        __state = '8';
                    } else {
                        __state = '8';
                    }
                    break;
                case '27':
                    menu = [];
                    func = getCopyFunction(node);
                    if (func) {
                        _var10 = tr(widget, 'Copy');
                        pushMenuItem(menu, _var10, undefined, function () {
                            copy(widget);
                        });
                        _var14 = isReadonly(widget);
                        if (_var14) {
                            __state = '31';
                        } else {
                            _var11 = canDelete(widget.visuals, node);
                            if (_var11) {
                                _var12 = tr(widget, 'Cut');
                                pushMenuItem(menu, _var12, undefined, function () {
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
                    break;
                case '31':
                    menu.push({ type: 'separator' });
                    __state = '2';
                    break;
                case '_item19':
                    _var16 = isReadonly(widget);
                    if (_var16) {
                        __state = '8';
                    } else {
                        __state = '9';
                    }
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
        function copyTheme(userTheme) {
            var theme;
            userTheme = userTheme || {};
            theme = {
                'background': '#74a8fc',
                'color': 'black',
                'iconBack': 'white',
                'lines': 'black',
                'backText': 'black',
                'iconBorder': 'black',
                'candyFill': '#00ff00',
                'candyBorder': 'black',
                'valFill': 'yellow',
                'valBorder': 'black',
                'scrollBar': 'rgba(0, 0, 0, 0.3)',
                'scrollBarHover': 'black',
                'shadowColor': 'rgba(0, 0, 0, 0.2)',
                'shadowBlur': 6,
                'lineWidth': 1,
                'borderWidth': 1
            };
            Object.assign(theme, userTheme);
            return theme;
        }
        function copyScrollToScrollable(widget) {
            var visuals, zoom;
            visuals = widget.visuals;
            zoom = widget.zoom / 10000;
            widget.scrollableContainer.scrollLeft = (visuals.scrollX - visuals.box.left) * zoom;
            widget.scrollableContainer.scrollTop = (visuals.scrollY - visuals.box.top) * zoom;
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
                    boundary = skewer.boundary + metre;
                    if (skewer.main) {
                        boundary += metre;
                        __state = '6';
                    } else {
                        __state = '6';
                    }
                    break;
                case '6':
                    return boundary;
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
        function buildBoxes(visuals) {
            var tr, nodes, edges, left, top, right, width, height, bottom, _var3, _var2, _var4, id, node, _var6, _var5, _var7, edge, _var8;
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
                        _var8 = isDrawableNode(node);
                        if (_var8) {
                            node.x = getX(node);
                            node.y = getY(node);
                            if (node.type === 'junction') {
                                __state = '22';
                            } else {
                                if (node.type === 'arrow-loop') {
                                    __state = '22';
                                } else {
                                    node.box = boxFromPoint(node.x, node.y, node.w, node.h);
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
                        __state = '4';
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
                        boundary = hskewer.boundary + metre;
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
                                    if (node.down) {
                                        node = getDown(node);
                                        __state = '5';
                                    } else {
                                        node = goLeft(node);
                                        __state = '5';
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
            var width, _var2, _var3, node, _var4, _var5, _var6;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    width = 0;
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
                            __state = '6';
                        } else {
                            width = Math.max(width, node.w);
                            __state = '6';
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
                            __state = '11';
                        } else {
                            __state = '11';
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
        function buildConfig(userConfig) {
            var config;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    userConfig = userConfig || {};
                    config = {
                        'font': '14px Arial',
                        'headerFont': 'bold 18px Arial',
                        'metre': 20,
                        'padding': 10,
                        'width': 500,
                        'lineHeight': 1.3,
                        'maxHeight': 600,
                        'minWidth': 100,
                        'touchRadius': 5,
                        'socketTouchRadius': 10,
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
                        'buildContentDiv': buildMulitlineDiv,
                        'getClipboard': getClipboard,
                        'setClipboard': setClipboard
                    };
                    Object.assign(config, userConfig);
                    __state = '12';
                    break;
                case '11':
                    return config;
                case '12':
                    config.theme = copyTheme(userConfig.theme);
                    buildAlignedNodes(config, userConfig);
                    buildIconRender(config, userConfig);
                    buildIconContent(config, userConfig);
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
            var width, height, padding, visuals, config, scale, ctx, factor, zoom, translate, tx, ty, _var3, _var2, _var4, id, edge, _var9, _var8, _var10, node, _var6, _var5, _var7, type, _var12, _var11, _var13, _var14, _var15, socket, _var16;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    zoom = widget.zoom / 10000;
                    factor = html.getRetinaFactor();
                    visuals = widget.visuals;
                    config = widget.config;
                    tx = visuals.scrollX;
                    ty = visuals.scrollY;
                    translate = 'translate(' + -tx + 'px, ' + -ty + 'px)';
                    scale = 'scale(' + zoom + ', ' + zoom + ')';
                    widget.contentContainer.style.transformOrigin = 'top left';
                    widget.contentContainer.style.transform = scale + ' ' + translate;
                    width = widget.width;
                    height = widget.height;
                    ctx = widget.canvas.getContext('2d');
                    ctx.resetTransform();
                    ctx.fillStyle = widget.config.theme.background;
                    ctx.fillRect(0, 0, width * factor, height * factor);
                    ctx.strokeStyle = 'yellow';
                    ctx.lineWidth = 4;
                    __state = '13';
                    break;
                case '10':
                    return;
                case '11':
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
                        _var16 = isDrawableNode(node);
                        if (_var16) {
                            drawIcon(visuals, node, ctx);
                            __state = '22';
                        } else {
                            __state = '22';
                        }
                    } else {
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
                        __state = '10';
                    } else {
                        __state = '10';
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
                            drawNodeCandy(visuals, id, ctx, config);
                            __state = '42';
                        } else {
                            __state = '42';
                        }
                    } else {
                        __state = '50';
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
                    ctx.translate(-visuals.scrollX, -visuals.scrollY);
                    if (widget.visuals.config.drawZones) {
                        drawSubspaces(widget.visuals, ctx);
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
        function initScrollPos(widget) {
            var visuals, savedOrigin, left, top, zoom;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    visuals = widget.visuals;
                    savedOrigin = widget.origins[widget.diagramId];
                    if (savedOrigin) {
                        left = savedOrigin.x;
                        top = savedOrigin.y;
                        __state = '10';
                    } else {
                        left = visuals.box.left;
                        top = visuals.box.top;
                        __state = '10';
                    }
                    break;
                case '10':
                    setScroll(widget, left, top);
                    zoom = widget.zoom / 10000;
                    widget.scrollable.style.width = visuals.box.width * zoom + 'px';
                    widget.scrollable.style.height = visuals.box.height * zoom + 'px';
                    copyScrollToScrollable(widget);
                    return;
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
        function createLeftUp(visuals, node2, finalTarget) {
            var result;
            result = createJunction(visuals, finalTarget);
            node2.mountRight = result;
            return result;
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
            var step, _var2;
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
                    _var2 = isBackLink(node1, node2);
                    if (_var2) {
                        step.back = true;
                        __state = '6';
                    } else {
                        __state = '6';
                    }
                    break;
                case '6':
                    stack.push(step);
                    return step;
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
            var stack, step, node1, node2, mountUp, mountRight, jun2, jun3, top, bottom, _var2;
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
                                if (node.next.length === 0) {
                                    __state = '1';
                                } else {
                                    next1 = node.next[0];
                                    planStep(stack, node, next1);
                                    __state = '1';
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
        function buildVisualsForEdit(widget) {
            var visuals;
            resetContainer(widget);
            visuals = buildVisuals(widget);
            precacheEdgesLinks(visuals);
            buildSubspaces(visuals);
            widget.visuals = visuals;
            initScrollPos(widget);
            return;
        }
        function flowIcon(visuals, node) {
            var flow, config, w, h;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    flow = visuals.config.iconContent[node.type];
                    if (flow) {
                        __state = '17';
                    } else {
                        flow = visuals.config.iconContent.action;
                        console.error('iconContent callback not found for node of type: ' + node.type);
                        __state = '17';
                    }
                    break;
                case '8':
                    config = visuals.config;
                    node.w = makeHalfSize(config, w);
                    node.h = makeHalfSize(config, h);
                    if (node.type === 'arrow-loop') {
                        __state = '1';
                    } else {
                        node.h = Math.max(node.h, visuals.config.metre);
                        __state = '1';
                    }
                    break;
                case '14':
                    if ('h' in node.frame) {
                        h = node.frame.h;
                        __state = '8';
                    } else {
                        h = node.frame.height;
                        __state = '8';
                    }
                    break;
                case '17':
                    node.frame = flow(node, visuals.config, visuals.container);
                    if ('w' in node.frame) {
                        w = node.frame.w;
                        __state = '14';
                    } else {
                        w = node.frame.width;
                        __state = '14';
                    }
                    break;
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
            var tail, next, head, _var2, edge, output;
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
                                            output.next = undefined;
                                            me.state = '4';
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
                                            output.next = tail.left;
                                            me.state = '9';
                                        } else {
                                            output.next = undefined;
                                            me.state = '4';
                                        }
                                    }
                                }
                            }
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
                    unit.onError(ex);
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
                                if (tail.type === 'select') {
                                    _var2 = getDown(tail);
                                    caseNode = getDown(_var2);
                                    output.next = caseNode.down;
                                    me.state = '2';
                                } else {
                                    if (tail.type === 'address') {
                                        me.state = '28';
                                    } else {
                                        if (tail.left) {
                                            me.state = '28';
                                        } else {
                                            output.next = tail.down;
                                            me.state = '2';
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
                        case '28':
                            output.next = undefined;
                            me.state = '4';
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
        function addInnerEdgeToSub(sub, edge) {
            addEdgeSubRecord(sub.inner, edge);
            return;
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
        function drawSubNode(node, ctx, color) {
            var size;
            size = 20;
            ctx.fillStyle = color;
            ctx.fillRect(node.x - size / 2, node.y - size / 2, size, size);
            return;
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
            var content, node;
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
                    setNotNull(item, node, 'flag1');
                    setNotNull(item, node, 'branchId');
                    setNotNull(item, node, 'text2');
                    setNotNull(item, node, 'one');
                    setNotNull(item, node, 'two');
                    if (item.style) {
                        try {
                            node.style = JSON.parse(item.style);
                        } catch (e) {
                            console.error(e);
                        }
                        __state = '8';
                    } else {
                        __state = '8';
                    }
                    break;
                case '8':
                    return node;
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
        function buildBlockMenu(widget) {
            var menu, _var2, _var3, _var4, _var5;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    menu = [];
                    _var2 = tr(widget, 'Copy');
                    pushMenuItem(menu, _var2, undefined, function () {
                        copy(widget);
                    });
                    _var5 = isReadonly(widget);
                    if (_var5) {
                        __state = '3';
                    } else {
                        _var3 = tr(widget, 'Cut');
                        pushMenuItem(menu, _var3, undefined, function () {
                            cut(widget);
                        });
                        menu.push({ type: 'separator' });
                        _var4 = tr(widget, 'Delete');
                        pushMenuItem(menu, _var4, undefined, function () {
                            deleteSelection(widget);
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
        function buildBackgroundMenu(widget) {
            var clipboard, menu, _var2, _var3, _var4;
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
                                __state = '_item6';
                            } else {
                                if (_var2 === 'branch') {
                                    __state = '_item6';
                                } else {
                                    if (_var2 === 'block') {
                                        __state = '_item6';
                                    } else {
                                        __state = '3';
                                    }
                                }
                            }
                        } else {
                            __state = '3';
                        }
                    }
                    break;
                case '3':
                    return menu;
                case '_item6':
                    _var3 = tr(widget, 'Paste');
                    pushMenuItem(menu, _var3, undefined, function () {
                        widget.showPasteSockets(clipboard.type);
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
        function canEditNodeText(node) {
            var noText;
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
        function calculateBox(visuals) {
            var left, top, right, bottom, minLeft, maxRight, minTop, maxBottom, metre, _var3, _var2, _var4, id, node, _var5, _var6, _var7, _var8;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    minLeft = Number.MAX_SAFE_INTEGER;
                    maxRight = Number.MIN_SAFE_INTEGER;
                    minTop = Number.MAX_SAFE_INTEGER;
                    maxBottom = Number.MIN_SAFE_INTEGER;
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
                        left = node.x - node.w;
                        top = node.y - node.h;
                        right = node.x + node.w;
                        bottom = node.y + node.h;
                        _var5 = isNaN(left);
                        if (_var5) {
                            __state = '_item5';
                        } else {
                            minLeft = Math.min(minLeft, left);
                            __state = '_item5';
                        }
                    } else {
                        visuals.box = {
                            left: minLeft - metre,
                            top: minTop - metre,
                            right: maxRight + metre,
                            bottom: maxBottom + metre,
                            width: maxRight - minLeft + metre * 2,
                            height: maxBottom - minTop + metre * 2
                        };
                        return;
                    }
                    break;
                case '_item5':
                    _var6 = isNaN(top);
                    if (_var6) {
                        __state = '_item6';
                    } else {
                        minTop = Math.min(minTop, top);
                        __state = '_item6';
                    }
                    break;
                case '_item6':
                    _var7 = isNaN(right);
                    if (_var7) {
                        __state = '_item7';
                    } else {
                        maxRight = Math.max(maxRight, right);
                        __state = '_item7';
                    }
                    break;
                case '_item7':
                    _var8 = isNaN(bottom);
                    if (_var8) {
                        __state = '4';
                    } else {
                        maxBottom = Math.max(maxBottom, bottom);
                        __state = '4';
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
        function buildVisuals(widget) {
            var visuals, model, context, node, branch, _var5, _var6, bItemId, _var3, _var2, _var4, id, item, _var8, _var7, _var9, skewer, _var10;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '2':
                    model = widget.model;
                    _var10 = model.branches.slice();
                    visuals = {
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
                        config: widget.config,
                        container: widget.contentContainer
                    };
                    visuals.header = createNode(visuals, undefined, 'header', model.doc.name, 'header');
                    flowIcon(visuals, visuals.header);
                    visuals.params = createParamsNode(visuals, model.doc.params);
                    __state = '14';
                    break;
                case '4':
                    removeTempEdges(visuals);
                    buildBoxes(visuals);
                    forType(visuals, 'address', putCycleMark);
                    calculateBox(visuals);
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
                case '16':
                    if (_var4 < _var2.length) {
                        id = _var2[_var4];
                        item = _var3[id];
                        node = nodeFromItem(visuals, item);
                        flowIcon(visuals, node);
                        _var4++;
                        __state = '16';
                    } else {
                        __state = '5';
                    }
                    break;
                case '22':
                    if (model.branches.length > 1) {
                        layoutSilhouette(visuals);
                        __state = '26';
                    } else {
                        layoutPrimitive(visuals);
                        __state = '26';
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
        function pushMenuItem(menu, text, icon, action) {
            var item;
            item = {
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
                            _var2 = source.sources;
                            _var3 = 0;
                            __state = '7';
                        } else {
                            itemId = getEffectiveItemId(visuals, source);
                            link = createLink(itemId, edge.vertical ? 0 : 1);
                            startEdge.links.push(link);
                            __state = '1';
                        }
                    } else {
                        __state = '1';
                    }
                    break;
                case '7':
                    if (_var3 < _var2.length) {
                        prevEdge = _var2[_var3];
                        findEdgeLinks(visuals, startEdge, prevEdge);
                        _var3++;
                        __state = '7';
                    } else {
                        __state = '1';
                    }
                    break;
                default:
                    return;
                }
            }
        }
        function primFromNode(widget, node) {
            var prim;
            prim = {
                id: node.id,
                type: node.type,
                content: node.content,
                elType: 'node',
                left: node.x - node.w,
                top: node.y - node.h,
                width: node.w * 2,
                height: node.h * 2
            };
            primToClient(widget, prim);
            return prim;
        }
        function isArrowLoop(node) {
            return node.type === 'arrow-loop';
        }
        function makePointToItem(widget, address, target, menu) {
            menu.push({
                text: target.content,
                action: function () {
                    redirectAddress(widget, address, target.itemId);
                }
            });
            return;
        }
        function forTypeTogether(visuals, type, action) {
            var nodes;
            nodes = getCreateList(visuals.byType, type);
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
                    return oldToNew[startId];
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
            item = copyItem(widget, node.itemId);
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
            var nodes, _var2, _var3, _var4;
            nodes = getNodesFromSelection(widget);
            _var2 = nodes.length;
            if (_var2 === 0) {
                return undefined;
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
        function copyItem(widget, itemId) {
            var item, _var2;
            item = widget.model.items[itemId];
            _var2 = clone(item);
            return _var2;
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
        function firstBranchNode(visuals) {
            var id;
            id = visuals.branches[0];
            return visuals.nodes[id];
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
                    deleteItem(edits, node.itemId);
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
                deleteItem(edits, id);
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
        function deleteBlock(widget, nodes) {
            var bottomId, head, selection, edits, addDeletion, visuals;
            visuals = widget.visuals;
            selection = widget.selection;
            bottomId = findSelectionBottom(widget);
            head = getNode(visuals, selection.head);
            edits = [];
            redirectUpperItems(edits, head.up.links, bottomId);
            addDeletion = function (node) {
                deleteItem(edits, node.itemId);
            };
            nodes.forEach(addDeletion);
            doEdit(widget, edits, false);
            widget.redraw();
            return;
        }
        function deleteSelection(widget) {
            var nodes;
            nodes = getNodesFromSelection(widget);
            deleteSelectionCore(widget, nodes);
            return;
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
                    deleteItem(edits, node.itemId);
                    __state = '5';
                    break;
                default:
                    return;
                }
            }
        }
        function deleteParams(node) {
            var change;
            change = {
                fields: { params: '' },
                op: 'update'
            };
            return [change];
        }
        function deleteOne(widget, node) {
            var edits, _var2, _var3;
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
                            __state = '26';
                        } else {
                            if (_var2 === 'loopbegin') {
                                edits = deleteLoop(node);
                                __state = '26';
                            } else {
                                if (_var2 === 'loopend') {
                                    edits = deleteLoop(node.loopStart);
                                    __state = '26';
                                } else {
                                    if (_var2 === 'params') {
                                        edits = deleteParams(node);
                                        __state = '26';
                                    } else {
                                        if (_var2 === 'case') {
                                            edits = deleteCase(widget, node);
                                            __state = '26';
                                        } else {
                                            if (_var2 === 'select') {
                                                edits = deleteSelect(widget, node);
                                                __state = '26';
                                            } else {
                                                if (_var2 === 'branch') {
                                                    edits = deleteBranch(widget, node);
                                                    __state = '26';
                                                } else {
                                                    edits = deleteSimple(node);
                                                    __state = '26';
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
                case '26':
                    resetSelection(widget);
                    doEdit(widget, edits, false);
                    widget.redraw();
                    __state = '1';
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
                        deleteItem(edits, itemId);
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
        function deleteSimple(node) {
            var edits;
            edits = [];
            popFromSkewer(node, edits);
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
                    deleteItem(edits, node.itemId);
                    deleteItem(edits, end.itemId);
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
            setScroll(widget, x, y);
            copyScrollToScrollable(widget);
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
        function DrakonCanvas_redo(self) {
            var _var2;
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    _var2 = isReadonly(self);
                    if (_var2) {
                        __state = '1';
                    } else {
                        if (self.edit) {
                            resetSelection(self);
                            self.edit.redoEdit();
                            self.redraw();
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
        function DrakonCanvas_onScroll(self, ignored, evt) {
            var originX, originY, zoom;
            zoom = self.zoom / 10000;
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
            console.log('drakon.redraw()');
            buildDiagramModel(self, self.edit.diagram);
            buildVisualsForEdit(self);
            paint(self);
            return;
        }
        function doEdit(widget, edits, retainSelection) {
            var __state = '2';
            while (true) {
                switch (__state) {
                case '1':
                    return;
                case '2':
                    widget.edit.updateDocument(edits);
                    if (retainSelection) {
                        __state = '1';
                    } else {
                        resetSelection(widget);
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
        function getBranchItemId(visuals, branchId) {
            var rightBranch;
            rightBranch = getBranchById(visuals, branchId);
            if (rightBranch) {
                return rightBranch.itemId;
            } else {
                return visuals.branches[0];
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
        function deleteItem(edits, itemId) {
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
        function initInsertFunctions(widget) {
            widget.insertActions = {};
            addSimpleInsert(widget, 'action');
            widget.insertActions.question = questionInsert;
            widget.insertActions.branch = branchInsert;
            widget.insertActions.select = selectInsert;
            widget.insertActions['case'] = caseInsert;
            widget.insertActions['first-case'] = firstCaseInsert;
            widget.insertActions['foreach'] = foreachInsert;
            return;
        }
        function createItem(model, edits, item) {
            var edit;
            item.id = getNextStorageId(model);
            edit = createInsert(item);
            edits.push(edit);
            return item.id;
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
            var edits, branchId, visuals, endId, name, fields;
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
            doEdit(widget, edits, false);
            widget.redraw();
            return;
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
            deleteItem(edits, node.itemId);
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
            var action, edits, _var2;
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
                        __state = '16';
                    } else {
                        if (_var2 === 'paste') {
                            edits = pasteInSocket(widget, socket);
                            __state = '16';
                        } else {
                            if (_var2 === 'arrow') {
                                edits = clickArrowSocket(widget, socket);
                                __state = '16';
                            } else {
                                if (_var2 === 'liana') {
                                    edits = clickLianaSocket(widget, socket);
                                    __state = '16';
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
                case '16':
                    doEdit(widget, edits, false);
                    __state = '1';
                    break;
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
        function DrakonCanvas() {
            var self = {};
            self.arrowRight = function () {
                return DrakonCanvas_arrowRight(self);
            };
            self.onMouseDown = function (ignored, evt) {
                return DrakonCanvas_onMouseDown(self, ignored, evt);
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
            self.setStyle = function (style, itemIds) {
                return DrakonCanvas_setStyle(self, style, itemIds);
            };
            self.showPasteSockets = function (type) {
                return DrakonCanvas_showPasteSockets(self, type);
            };
            self.onContextMenu = function (ignored, evt) {
                return DrakonCanvas_onContextMenu(self, ignored, evt);
            };
            self.undo = function () {
                return DrakonCanvas_undo(self);
            };
            self.setZoom = function (zoom) {
                return DrakonCanvas_setZoom(self, zoom);
            };
            self.deleteSelection = function () {
                return DrakonCanvas_deleteSelection(self);
            };
            self.onMouseMove = function (ignored, evt) {
                return DrakonCanvas_onMouseMove(self, ignored, evt);
            };
            self.editContent = function () {
                return DrakonCanvas_editContent(self);
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
            self.onMouseUp = function (ignored, evt) {
                return DrakonCanvas_onMouseUp(self, ignored, evt);
            };
            self.showPaste = function () {
                return DrakonCanvas_showPaste(self);
            };
            self.onMouseLeave = function (ignored, evt) {
                return DrakonCanvas_onMouseLeave(self, ignored, evt);
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
            self.redo = function () {
                return DrakonCanvas_redo(self);
            };
            self.onScroll = function (ignored, evt) {
                return DrakonCanvas_onScroll(self, ignored, evt);
            };
            self.arrowDown = function () {
                return DrakonCanvas_arrowDown(self);
            };
            self.redraw = function () {
                return DrakonCanvas_redraw(self);
            };
            return self;
        }
        unit.main = main;
        unit.DrakonCanvas = DrakonCanvas;
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
        return unit;
    }
    
    var html = html_0_1()
    var edit = edit_tools()
    var drakon = drakon_canvas()
    drakon.html = html
    drakon.edit_tools = edit
    var widget = drakon.DrakonCanvas()
    widget.init()
    return widget
}