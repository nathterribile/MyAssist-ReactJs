"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = Admin;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var user_png_1 = __importDefault(require("../../assets/images/user.png"));
var react_router_dom_1 = require("react-router-dom");
var react_bootstrap_1 = require("react-bootstrap");
var axios_1 = __importDefault(require("axios"));
function Admin() {
    var _this = this;
    var navigate = (0, react_router_dom_1.useNavigate)();
    var backToHome = function () {
        navigate('/');
    };
    var _a = (0, react_1.useState)(''), owner = _a[0], setOwner = _a[1];
    var inputOwner = function (e) {
        setOwner(e.target.value);
    };
    var _b = (0, react_1.useState)(''), equipmentType = _b[0], setEquipmentType = _b[1];
    var inputEquipmentType = function (e) {
        setEquipmentType(e.target.value);
    };
    var _c = (0, react_1.useState)(''), entryDate = _c[0], setEntryDate = _c[1];
    var inputEntryDate = function (e) {
        setEntryDate(e.target.value);
    };
    var _d = (0, react_1.useState)(''), defect = _d[0], setDefect = _d[1];
    var inputDefect = function (e) {
        setDefect(e.target.value);
    };
    var _e = (0, react_1.useState)(''), deliveryDate = _e[0], setDeliveryDate = _e[1];
    var inputDeliveryDate = function (e) {
        setDeliveryDate(e.target.value);
    };
    var _f = (0, react_1.useState)(''), status = _f[0], setStatus = _f[1];
    var inputStatus = function (e) {
        setStatus(e.target.value);
    };
    var _g = (0, react_1.useState)(''), obs = _g[0], setObs = _g[1];
    var inputObs = function (e) {
        setObs(e.target.value);
    };
    var form = {
        proprietario: owner,
        tipoEquipamento: equipmentType,
        entradaLab: entryDate,
        defeito: defect,
        previsaoEntrega: deliveryDate,
        statusConcerto: status,
        observacoes: obs
    };
    var _h = (0, react_1.useState)(''), id = _h[0], setId = _h[1];
    var _j = (0, react_1.useState)(false), osMShow = _j[0], setOSMShow = _j[1];
    var _k = (0, react_1.useState)(false), toast400OSShow = _k[0], set400TOSShow = _k[1];
    var _l = (0, react_1.useState)(false), toast500OSShow = _l[0], set500TOSShow = _l[1];
    var os = function () { return __awaiter(_this, void 0, void 0, function () {
        var response, body, error_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('https://172.29.208.1:8443/os', {
                            method: 'POST',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(form)
                        })];
                case 1:
                    response = _b.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    body = _b.sent();
                    setId(body.id);
                    setOSMShow(true);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    if (axios_1.default.isAxiosError(error_1) && ((_a = error_1.response) === null || _a === void 0 ? void 0 : _a.status) === 400) {
                        set400TOSShow(true);
                        setTimeout(function () { return set400TOSShow(false); }, 3000);
                    }
                    else {
                        set500TOSShow(true);
                        setTimeout(function () { return set500TOSShow(false); }, 3000);
                    }
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var closeModalOS = function () {
        window.location.reload();
    };
    function getAll() {
        return __awaiter(this, void 0, void 0, function () {
            var response, body, error_2;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, fetch('https://172.29.208.1:8443/os')];
                    case 1:
                        response = _b.sent();
                        if (!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        body = _b.sent();
                        return [2 /*return*/, body];
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_2 = _b.sent();
                        if (axios_1.default.isAxiosError(error_2) && ((_a = error_2.response) === null || _a === void 0 ? void 0 : _a.status) === 400) {
                            set400TOSShow(true);
                            setTimeout(function () { return set400TOSShow(false); }, 3000);
                        }
                        else {
                            set500TOSShow(true);
                            setTimeout(function () { return set500TOSShow(false); }, 3000);
                        }
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }
    function get(id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, body, error_3;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, fetch('https://172.29.208.1:8443/os/' + id)];
                    case 1:
                        response = _b.sent();
                        if (!(response.status === 200)) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        body = _b.sent();
                        return [2 /*return*/, body];
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_3 = _b.sent();
                        if (axios_1.default.isAxiosError(error_3) && ((_a = error_3.response) === null || _a === void 0 ? void 0 : _a.status) === 400) {
                            set400TOSShow(true);
                            setTimeout(function () { return set400TOSShow(false); }, 3000);
                        }
                        else {
                            set500TOSShow(true);
                            setTimeout(function () { return set500TOSShow(false); }, 3000);
                        }
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }
    var _m = (0, react_1.useState)([]), searchResults = _m[0], setSearchResults = _m[1];
    var searchOS = function (event) { return __awaiter(_this, void 0, void 0, function () {
        var inputElement, searchValue, results, result, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    inputElement = document.getElementById('txtBusca');
                    searchValue = (inputElement === null || inputElement === void 0 ? void 0 : inputElement.value) || '';
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    if (!(searchValue === 'All')) return [3 /*break*/, 3];
                    return [4 /*yield*/, getAll()];
                case 2:
                    results = _a.sent();
                    setSearchResults(results || []);
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, get(searchValue)];
                case 4:
                    result = _a.sent();
                    setSearchResults(result ? [result] : []);
                    _a.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_4 = _a.sent();
                    console.error('Error fetching search results:', error_4);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    var _o = (0, react_1.useState)(false), alterarBShow = _o[0], setABShow = _o[1];
    var InputButtonSalvar = function () {
        return alterarBShow
            ? ((0, jsx_runtime_1.jsx)("button", { type: 'button', className: 'btn btn-primary', onClick: function () { put(id); setABShow(false); }, children: "Alterar" }))
            : null;
    };
    var returnFormToAlter = function (event) {
        event.preventDefault();
        var row = event.currentTarget.closest('tr');
        if (!row)
            return;
        // Get all the cells (<td>) in the row
        var cells = row.getElementsByTagName('td');
        if (cells.length === 0)
            return;
        // Update the form state with the values from the cells
        setOwner(cells[1].innerText.trim());
        setEquipmentType(cells[2].innerText.trim());
        setEntryDate(cells[3].innerText.trim());
        setDefect(cells[4].innerText.trim());
        setDeliveryDate(cells[5].innerText.trim());
        setStatus(cells[6].innerText.trim());
        setObs(cells[7].innerText.trim());
        setId(cells[0].innerText.trim());
        setABShow(true);
    };
    var _p = (0, react_1.useState)(false), alterarMOSShow = _p[0], setOSAMShow = _p[1];
    function put(id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, body, error_5;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch('https://172.29.208.1:8443/os/' + id, {
                                method: 'PUT',
                                headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(form)
                            })];
                    case 1:
                        response = _b.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        body = _b.sent();
                        setId(body.id);
                        setOSAMShow(true);
                        return [3 /*break*/, 4];
                    case 3:
                        error_5 = _b.sent();
                        if (axios_1.default.isAxiosError(error_5) && ((_a = error_5.response) === null || _a === void 0 ? void 0 : _a.status) === 400) {
                            set400TOSShow(true);
                            setTimeout(function () { return set400TOSShow(false); }, 3000);
                        }
                        else {
                            set500TOSShow(true);
                            setTimeout(function () { return set500TOSShow(false); }, 3000);
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    return ((0, jsx_runtime_1.jsxs)("main", { children: [(0, jsx_runtime_1.jsxs)("header", { className: 'bg-primary p-5 mb-5 text-light d-flex justify-content-between', children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("h3", { children: [(0, jsx_runtime_1.jsx)("i", { className: 'bi bi-motherboard me-1' }), "MyAssist"] }) }), (0, jsx_runtime_1.jsxs)("div", { className: 'd-flex align-items-center', children: [(0, jsx_runtime_1.jsx)("figure", { className: 'foto me-2', children: (0, jsx_runtime_1.jsx)("img", { id: "fotoLogin", src: user_png_1.default }) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h6", { children: "Ol\u00E1, funcion\u00E1rio." }), (0, jsx_runtime_1.jsx)("h6", { children: (0, jsx_runtime_1.jsx)("a", { className: 'text-light', href: "", onClick: backToHome, children: "Finalizar sess\u00E3o" }) })] })] })] }), (0, jsx_runtime_1.jsxs)("body", { className: 'container my-4', children: [(0, jsx_runtime_1.jsxs)("section", { className: 'border rounded p-4 my-5', children: [(0, jsx_runtime_1.jsx)("h2", { children: "Cadastrar o equipamento" }), (0, jsx_runtime_1.jsx)("form", { id: 'dados', name: 'dados', children: (0, jsx_runtime_1.jsxs)("div", { className: 'row mb-3', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'col-md-4 my-3', children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: 'proprietario', className: 'form-label', children: "Propriet\u00E1rio" }), (0, jsx_runtime_1.jsx)("input", { value: owner, type: 'text', className: 'form-control', id: 'proprietario', name: 'proprietario', required: true, placeholder: 'Ex:Fulano de Tal', onChange: inputOwner })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'col-md-4 my-3', children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: 'equipamento', className: 'form-label', children: "Tipo de equipamento" }), (0, jsx_runtime_1.jsxs)("select", { value: equipmentType, name: 'equipamento', id: 'equipamento', className: 'form-select', onChange: inputEquipmentType, required: true, children: [(0, jsx_runtime_1.jsx)("option", { children: "Selecione o equipamento" }), (0, jsx_runtime_1.jsx)("option", { children: "Geladeira" }), (0, jsx_runtime_1.jsx)("option", { children: "Ar condicionado" }), (0, jsx_runtime_1.jsx)("option", { children: "Microondas" }), (0, jsx_runtime_1.jsx)("option", { children: "Adega" }), (0, jsx_runtime_1.jsx)("option", { children: "Secadora" }), (0, jsx_runtime_1.jsx)("option", { children: "Caixa de som" }), (0, jsx_runtime_1.jsx)("option", { children: "Smart TV" }), (0, jsx_runtime_1.jsx)("option", { children: "Fone de ouvido" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'col-md-4 my-3', children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: 'dataEntrada', className: 'form-label', children: "Entrada laborat\u00F3rio" }), (0, jsx_runtime_1.jsx)("input", { value: entryDate, type: 'date', className: 'form-control', id: 'dataEntrada', name: 'dataEntrada', onChange: inputEntryDate, required: true })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'col-12- my-3', children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: 'defeito', className: 'form-label', children: "Defeito" }), (0, jsx_runtime_1.jsx)("textarea", { value: defect, name: 'defeito', id: 'defeito', className: 'form-control', placeholder: 'Ex:O defeito apresentado...', onChange: inputDefect, required: true })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'col-md-6 my-3', children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: 'dataEntrega', className: 'form-label', children: "Previs\u00E3o de Entrega" }), (0, jsx_runtime_1.jsx)("input", { value: deliveryDate, type: 'date', name: 'dataEntrega', id: 'dataEntrega', className: 'form-control', onChange: inputDeliveryDate, required: true })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'col-md-6 my-3', children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: 'status', className: 'form-label', children: "Status do conserto" }), (0, jsx_runtime_1.jsxs)("select", { value: status, className: 'form-select', name: 'status', id: 'status', required: true, onChange: inputStatus, children: [(0, jsx_runtime_1.jsx)("option", { children: "Selecione o status" }), (0, jsx_runtime_1.jsx)("option", { children: "Aguardando aprova\u00E7\u00E3o" }), (0, jsx_runtime_1.jsx)("option", { children: "Aguardando or\u00E7amento" }), (0, jsx_runtime_1.jsx)("option", { children: "Em conserto" }), (0, jsx_runtime_1.jsx)("option", { children: "Finalizado" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'col-12- my-3', children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: 'observacao', className: 'form-label', children: "Observa\u00E7\u00F5es" }), (0, jsx_runtime_1.jsx)("textarea", { value: obs, name: 'observacao', id: 'observacao', className: 'form-control', placeholder: 'Ex:O equipamento..', onChange: inputObs })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'row mb-3', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'col-md-3 my-0', children: [(0, jsx_runtime_1.jsx)("button", { type: 'button', className: 'btn btn-primary my-3', onClick: os, children: "Cadastrar Equipamento" }), (0, jsx_runtime_1.jsx)(InputButtonSalvar, {})] }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Modal, { show: osMShow, children: (0, jsx_runtime_1.jsxs)("div", { className: 'lg', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'modal-header', children: [(0, jsx_runtime_1.jsx)("h1", { className: 'modal-title fs-5', id: 'osModalLabel', children: "Ordem de servi\u00E7o criada!" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { id: 'fecharModalOS', type: 'button', className: 'btn-close', "aria-label": 'Close', onClick: function () { setOSMShow(false); closeModalOS(); } })] }), (0, jsx_runtime_1.jsx)("div", { className: 'modal-body', children: (0, jsx_runtime_1.jsxs)("p", { className: 'my-auto ms-2 p-2', children: ["OS gerada:", id] }) })] }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Modal, { show: alterarMOSShow, children: (0, jsx_runtime_1.jsxs)("div", { className: 'lg', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'modal-header', children: [(0, jsx_runtime_1.jsx)("h1", { className: 'modal-title fs-5', id: 'osModalLabel', children: "Ordem de servi\u00E7o alterada!" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { id: 'fecharModalOS', type: 'button', className: 'btn-close', "aria-label": 'Close', onClick: function () { setOSAMShow(false); closeModalOS(); } })] }), (0, jsx_runtime_1.jsx)("div", { className: 'modal-body', children: (0, jsx_runtime_1.jsxs)("p", { className: 'my-auto ms-2 p-2', children: ["OS alterada:", id] }) })] }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Toast, { show: toast400OSShow, className: 'toast align-items-center text-white bg-danger w-50', role: 'alert', "aria-live": 'assertive', "aria-atomic": 'true', id: 'toast400OS', children: (0, jsx_runtime_1.jsxs)("div", { className: 'd-flex', "data-bs-theme": 'dark', children: [(0, jsx_runtime_1.jsx)("p", { className: 'my-auto ms-2 p-2', children: "Usu\u00E1rio ou senha incorreto!" }), (0, jsx_runtime_1.jsx)("button", { type: 'button', className: 'btn-close btn-white me-2 m-auto', "data-bs-dismiss": 'toast', "aria-label": 'Close' })] }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Toast, { show: toast500OSShow, className: 'toast align-items-center text-white bg-danger w-50', role: 'alert', "aria-live": 'assertive', "aria-atomic": 'true', id: 'toast500OS', children: (0, jsx_runtime_1.jsxs)("div", { className: 'd-flex', "data-bs-theme": 'dark', children: [(0, jsx_runtime_1.jsx)("p", { className: 'my-auto ms-2 p-2', children: "Servi\u00E7o indisponivel!" }), (0, jsx_runtime_1.jsx)("button", { type: 'button', className: 'btn-close btn-white me-2 m-auto', "data-bs-dismiss": 'toast', "aria-label": 'Close' })] }) }), (0, jsx_runtime_1.jsx)("div", { className: 'col-md-2 my-0', children: (0, jsx_runtime_1.jsx)("button", { type: 'button', id: 'botaoAlterar', className: 'btn btn-primary', hidden: true, children: "Alterar" }) })] })] }) })] }), (0, jsx_runtime_1.jsxs)("section", { className: 'border rounded p-4 my-5', children: [(0, jsx_runtime_1.jsx)("h2", { children: "Realizar Busca" }), (0, jsx_runtime_1.jsx)("form", { action: '', method: 'get', id: 'formBusca', name: 'formBusca', className: 'mb-4', children: (0, jsx_runtime_1.jsxs)("div", { className: 'my-2 d-flex', children: [(0, jsx_runtime_1.jsx)("input", { type: 'text', className: 'form-control  me-2', id: 'txtBusca', name: 'textBusca', placeholder: 'Buscar aparelho...', required: true }), (0, jsx_runtime_1.jsx)("button", { className: 'btn btn-primary', onClick: searchOS, children: "Buscar" })] }) }), (0, jsx_runtime_1.jsx)("h2", { className: 'display-6', children: "Resultado da Busca" }), (0, jsx_runtime_1.jsx)("div", { className: 'table-responsive', children: (0, jsx_runtime_1.jsxs)("table", { id: 'osCadastradas', className: 'table table-bordered table-hover', children: [(0, jsx_runtime_1.jsx)("thead", { className: 'table-primary', children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "C\u00F3digo" }), (0, jsx_runtime_1.jsx)("th", { children: "Propriet\u00E1rio" }), (0, jsx_runtime_1.jsx)("th", { children: "Equipamento" }), (0, jsx_runtime_1.jsx)("th", { children: "Entrada" }), (0, jsx_runtime_1.jsx)("th", { children: "Defeito" }), (0, jsx_runtime_1.jsx)("th", { children: "Entrega" }), (0, jsx_runtime_1.jsx)("th", { children: "Status" }), (0, jsx_runtime_1.jsx)("th", { children: "Observa\u00E7\u00F5es" }), (0, jsx_runtime_1.jsx)("th", { children: "Para atualiaza\u00E7\u00F5es clique em:" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: searchResults.map(function (body, index) { return ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: body.id }), (0, jsx_runtime_1.jsx)("td", { children: body.proprietario }), (0, jsx_runtime_1.jsx)("td", { children: body.tipoEquipamento }), (0, jsx_runtime_1.jsx)("td", { children: body.entradaLab }), (0, jsx_runtime_1.jsx)("td", { children: body.defeito }), (0, jsx_runtime_1.jsx)("td", { children: body.previsaoEntrega }), (0, jsx_runtime_1.jsx)("td", { children: body.statusConcerto }), (0, jsx_runtime_1.jsx)("td", { children: body.observacoes }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("a", { href: '#', onClick: function (event) { return returnFormToAlter(event); }, children: "Alterar" }) })] }, index)); }) })] }) })] })] })] }));
}
