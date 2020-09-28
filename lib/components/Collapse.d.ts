import React from 'react';
declare type propTypes = {
    className?: string;
    renderHeading?: (collapseKey: string) => JSX.Element | React.ReactText;
    collapseKey: string;
    ref?: React.Ref<HTMLDivElement>;
};
declare const Collapse: React.FC<propTypes>;
export default Collapse;
