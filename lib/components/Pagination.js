"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var lodash_1 = __importDefault(require("lodash"));
var Pagination = react_1.default.memo(function (props) {
    var getPageNumbers = function (total, current) {
        var pageIndex = props.showNumberLength || 3;
        var startIndex = 0;
        var endIndex = total;
        if (current - Math.floor(pageIndex / 2) >= 0) {
            startIndex = current - Math.floor(pageIndex / 2);
        }
        if (!(current > total - pageIndex)) {
            endIndex = (current + pageIndex) - Math.floor(pageIndex / 2);
        }
        var generatedArray = lodash_1.default.range(startIndex, endIndex);
        if (startIndex > 0) {
            generatedArray.unshift("...");
            generatedArray.unshift(0);
        }
        if (endIndex !== total) {
            generatedArray.push("...");
            generatedArray.push(total - 1);
        }
        return generatedArray;
    };
    var onNextClick = function () {
        if (props.activeIndex + 1 < props.total) {
            if (props.onNextClick)
                props.onNextClick(props.activeIndex + 1);
            props.onItemClick(props.activeIndex + 1);
        }
    };
    var onPreviousClick = function () {
        if (props.activeIndex - 1 > 0) {
            if (props.onPreviousClick)
                props.onPreviousClick(props.activeIndex - 1);
            props.onItemClick(props.activeIndex - 1);
        }
    };
    return (react_1.default.createElement("ul", { className: "pagination " + props.className, style: props.style },
        react_1.default.createElement("li", { className: "page-item", onClick: onPreviousClick },
            react_1.default.createElement("button", { className: "page-link" }, "\u00AB")),
        lodash_1.default.map(getPageNumbers(props.total, props.activeIndex), function (index) {
            return (react_1.default.createElement("li", { key: index, className: "page-item " + (index === props.activeIndex ? "active" : ""), onClick: function () { return typeof index === "number" ? props.onItemClick(index) : null; } },
                react_1.default.createElement("button", { className: "page-link" }, typeof index === "number" ? index + 1 : index)));
        }),
        react_1.default.createElement("li", { className: "page-item", onClick: onNextClick },
            react_1.default.createElement("button", { className: "page-link" }, "\u00BB"))));
});
Pagination.defaultProps = {
    className: '',
    showNumberLength: 3,
};
exports.default = Pagination;
