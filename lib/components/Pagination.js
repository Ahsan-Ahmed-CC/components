import React from 'react';
var Pagination = React.memo(function (props) {
    return (React.createElement("div", { className: "" + props.className },
        React.createElement("ul", { className: "pagination" },
            React.createElement("li", { className: "page-item" },
                React.createElement("a", { className: "page-link", href: "#" }, "\u00AB")),
            React.createElement("li", { className: "page-item active" },
                React.createElement("a", { className: "page-link", href: "#" }, "1")),
            React.createElement("li", { className: "page-item" },
                React.createElement("a", { className: "page-link", href: "#" }, "2")),
            React.createElement("li", { className: "page-item" },
                React.createElement("a", { className: "page-link", href: "#" }, "3")),
            React.createElement("li", { className: "page-item" },
                React.createElement("a", { className: "page-link", href: "#" }, "4")),
            React.createElement("li", { className: "page-item" },
                React.createElement("a", { className: "page-link", href: "#" }, "5")),
            React.createElement("li", { className: "page-item" },
                React.createElement("a", { className: "page-link", href: "#" }, "\u00BB")))));
});
Pagination.defaultProps = {
    className: '',
};
export default Pagination;
