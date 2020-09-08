import React from 'react';
import { IColumnHeading } from '../types/Table';
declare type propTypes = {
    className?: string;
    pageSize?: number;
    columnHeadings: Array<IColumnHeading>;
    data: Array<any>;
    onSortData?: Function;
};
declare const Table: React.FC<propTypes>;
export default Table;
