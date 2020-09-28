"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Collapse = react_1.default.memo(react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement("div", { className: "" + props.className },
        react_1.default.createElement("div", { "data-toggle": "collapse", "data-target": "#" + props.collapseKey.toLowerCase(), "aria-expanded": "false", "aria-controls": "collapseExample" }, props.renderHeading ? props.renderHeading(props.collapseKey) : "Collapse"),
        react_1.default.createElement("div", { className: "collapse", id: props.collapseKey.toLowerCase() }, props.children)));
}));
Collapse.defaultProps = {
    className: '',
};
exports.default = Collapse;
