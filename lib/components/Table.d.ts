import React from 'react';
import { IColumnHeading } from '../types/Table';
declare type propTypes = {
    className?: string;
    style?: React.CSSProperties;
    pageSize?: number;
    columnHeadings: Array<IColumnHeading>;
    data: Array<any>;
    onSortData?: Function;
    onPageChange?: Function;
    onRowItemClick?: Function;
};
declare const Table: React.FC<propTypes>;
export default Table;
