import React from 'react';
declare type propTypes = {
    onPreviousClick?: Function;
    onNextClick?: Function;
    activeIndex: number;
    total: number;
    showNumberLength?: number;
    onItemClick: Function;
    className?: string;
    style?: React.CSSProperties;
};
declare const Pagination: React.FC<propTypes>;
export default Pagination;
