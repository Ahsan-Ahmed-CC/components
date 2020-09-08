import React, { useState } from 'react';
import _ from 'lodash';
var Table = React.memo(function (props) {
    var _a = useState(), orderBy = _a[0], setOrderKey = _a[1];
    var _b = useState("asc"), orderDirection = _b[0], setOrderDirection = _b[1];
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
    return (React.createElement("table", { className: "table table-hover " + props.className },
        React.createElement("thead", null,
            React.createElement("tr", null, _.map(props.columnHeadings, function (value, key) {
                return (React.createElement("th", { scope: "col", key: value.keyIndex, onClick: function (e) { return setOrderStatus(value, e); } }, value.renderColumn ? value.renderColumn(value, key) : (value.label || value.keyIndex)));
            }))),
        React.createElement("tbody", null, _.map(_.orderBy(props.data, [orderBy], [orderDirection]), function (row, key) {
            return (React.createElement("tr", { key: "" + key }, _.map(props.columnHeadings, function (column, columnKeyIndex) {
                return (React.createElement("td", { key: key + "-" + columnKeyIndex }, column.render ? column.render(row, key) : row[column.keyIndex] || "N/A"));
            })));
        }))));
});
Table.defaultProps = {
    className: '',
    pageSize: 10,
};
export default Table;
