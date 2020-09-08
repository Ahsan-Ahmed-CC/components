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
var Table = react_1.default.memo(function (props) {
    var _a = react_1.useState(), orderBy = _a[0], setOrderKey = _a[1];
    var _b = react_1.useState("asc"), orderDirection = _b[0], setOrderDirection = _b[1];
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
    return (react_1.default.createElement("table", { className: "table table-hover " + props.className },
        react_1.default.createElement("thead", null,
            react_1.default.createElement("tr", null, lodash_1.default.map(props.columnHeadings, function (value, key) {
                return (react_1.default.createElement("th", { scope: "col", key: value.keyIndex, onClick: function (e) { return setOrderStatus(value, e); } }, value.renderColumn ? value.renderColumn(value, key) : (value.label || value.keyIndex)));
            }))),
        react_1.default.createElement("tbody", null, lodash_1.default.map(lodash_1.default.orderBy(props.data, [orderBy], [orderDirection]), function (row, key) {
            return (react_1.default.createElement("tr", { key: "" + key }, lodash_1.default.map(props.columnHeadings, function (column, columnKeyIndex) {
                return (react_1.default.createElement("td", { key: key + "-" + columnKeyIndex }, column.render ? column.render(row, key) : row[column.keyIndex] || "N/A"));
            })));
        }))));
});
Table.defaultProps = {
    className: '',
    pageSize: 10,
};
exports.default = Table;
