"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Pagination = react_1.default.memo(function (props) {
    return (react_1.default.createElement("div", { className: "" + props.className },
        react_1.default.createElement("ul", { className: "pagination" },
            react_1.default.createElement("li", { className: "page-item" },
                react_1.default.createElement("a", { className: "page-link", href: "#" }, "\u00AB")),
            react_1.default.createElement("li", { className: "page-item active" },
                react_1.default.createElement("a", { className: "page-link", href: "#" }, "1")),
            react_1.default.createElement("li", { className: "page-item" },
                react_1.default.createElement("a", { className: "page-link", href: "#" }, "2")),
            react_1.default.createElement("li", { className: "page-item" },
                react_1.default.createElement("a", { className: "page-link", href: "#" }, "3")),
            react_1.default.createElement("li", { className: "page-item" },
                react_1.default.createElement("a", { className: "page-link", href: "#" }, "4")),
            react_1.default.createElement("li", { className: "page-item" },
                react_1.default.createElement("a", { className: "page-link", href: "#" }, "5")),
            react_1.default.createElement("li", { className: "page-item" },
                react_1.default.createElement("a", { className: "page-link", href: "#" }, "\u00BB")))));
});
Pagination.defaultProps = {
    className: '',
};
exports.default = Pagination;
