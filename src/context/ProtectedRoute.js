"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtectedRoute = ProtectedRoute;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
function ProtectedRoute(_a) {
    var children = _a.children;
    var isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    return isAuthenticated ? children : (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: "/Home", replace: true });
}
