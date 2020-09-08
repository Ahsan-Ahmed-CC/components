import React from 'react';
var Button = React.memo(function (props) {
    return (React.createElement("div", { className: "" + props.className }, "Button"));
});
Button.defaultProps = {
    className: '',
};
export default Button;
