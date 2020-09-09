"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var lodash_1 = __importDefault(require("lodash"));
var Pagination_1 = __importDefault(require("./Pagination"));
var Table = react_1.default.memo(function (props) {
    var _a = react_1.useState(), orderBy = _a[0], setOrderKey = _a[1];
    var _b = react_1.useState("asc"), orderDirection = _b[0], setOrderDirection = _b[1];
    var _c = react_1.useState(0), paginationIndex = _c[0], setPageNumber = _c[1];
    var setOrderStatus = function (value, event) {
        var orderKey = value.keyIndex;
        if (!value.sortable) {
            return;
        }
        var orderDirectionTemp = "asc";
        if (orderKey == orderBy && orderDirection == orderDirectionTemp) {
            orderDirectionTemp = "desc";
        }
        else {
            orderDirectionTemp = "asc";
        }
        setOrderDirection(orderDirectionTemp);
        setOrderKey("" + orderKey);
        if (props.onSortData)
            props.onSortData(orderKey, orderDirectionTemp);
    };
    var onPageChange = function (index) {
        setPageNumber(index);
        if (props.onPageChange)
            props.onPageChange(index);
    };
    var onRowItemClick = function (row, keyIndex) {
        if (props.onRowItemClick)
            props.onRowItemClick(row, keyIndex);
    };
    var renderRowData = function (column, row, rowKey) {
        var orSplit = lodash_1.default.split("" + column.keyIndex, ",");
        // Case: Where the additional data is required to be passed
        var dataIndeces = lodash_1.default.reduce(orSplit, function (resultIndeces, orIndex) {
            var nestingSplit = lodash_1.default.split("" + orIndex, ".");
            // Case: Where the nesting data value should be retrieved.
            if (lodash_1.default.size(nestingSplit) > 0) {
                var nestedValue = lodash_1.default.reduce(nestingSplit, function (result, nestingIndex) {
                    result = result ? result[nestingIndex] : result;
                    return result;
                }, row);
                resultIndeces[orIndex] = nestedValue;
                return resultIndeces;
            }
            else {
                resultIndeces[column.keyIndex] = "" + (orIndex || "");
                return resultIndeces;
            }
        }, {});
        return column.render ? column.render(lodash_1.default.size(dataIndeces) > 1 ? dataIndeces : dataIndeces[column.keyIndex], column.keyIndex, rowKey) : dataIndeces[column.keyIndex] || "N/A";
    };
    var totalData = lodash_1.default.chunk(props.data, props.pageSize);
    return (react_1.default.createElement("div", { className: "" + (props.className || ""), style: props.style },
        react_1.default.createElement("table", { className: "table table-hover" },
            react_1.default.createElement("thead", null,
                react_1.default.createElement("tr", { className: "table-active" }, lodash_1.default.map(props.columnHeadings, function (value, key) {
                    return (react_1.default.createElement("th", { scope: "col", key: value.keyIndex, onClick: function (e) { return setOrderStatus(value, e); } },
                        value.renderColumn ? value.renderColumn(value, key) : (value.label || value.keyIndex),
                        value.sortable ? react_1.default.createElement("svg", { width: "12px", height: "12px", viewBox: "0 0 16 16", className: "bi " + (orderDirection == "asc" ? "bi-caret-up-fill" : "bi-caret-down-fill"), fill: "currentColor", xmlns: "http://www.w3.org/2000/svg" }, orderDirection == "asc" && orderBy == value.keyIndex ?
                            (react_1.default.createElement("path", { d: "M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" })) :
                            (react_1.default.createElement("path", { d: "M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" }))) : null));
                }))),
            react_1.default.createElement("tbody", null, lodash_1.default.map(lodash_1.default.orderBy(totalData[paginationIndex], [orderBy], [orderDirection]), function (row, key) {
                return (react_1.default.createElement("tr", { key: "" + key }, lodash_1.default.map(props.columnHeadings, function (column, columnKeyIndex) {
                    return (react_1.default.createElement("td", { key: key + "-" + columnKeyIndex, onClick: function () { return onRowItemClick(row, column.keyIndex); } }, renderRowData(column, row, key)));
                })));
            }))),
        react_1.default.createElement(Pagination_1.default, { onItemClick: onPageChange, total: lodash_1.default.size(totalData), activeIndex: paginationIndex })));
});
Table.defaultProps = {
    className: '',
    pageSize: 2,
};
exports.default = Table;
