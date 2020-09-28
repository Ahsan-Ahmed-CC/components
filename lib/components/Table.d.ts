import React from 'react';
import { IColumnHeading } from '../types/Table';
declare type propTypes = {
    className?: string;
    style?: React.CSSProperties;
    pageSize?: number;
    columnHeadings: Array<IColumnHeading>;
    data: Array<any>;
    onSortData?: (orderKey: IColumnHeading['sortIndex'], orderDirectionTemp: boolean | "desc" | "asc") => void;
    onPageChange?: (index: number) => void;
    onRowItemClick?: <T = any>(row: T, index: number) => void;
    rowStyle?: React.CSSProperties;
    ref?: React.Ref<HTMLTableElement>;
};
declare const Table: React.FC<propTypes>;
export default Table;
