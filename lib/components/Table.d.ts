import React from 'react';
import { IColumnHeading } from '../types/Table';
interface propTypes {
    className?: string;
    pageSize?: number;
    columnHeading?: IColumnHeading;
}
declare const Table: React.FC<propTypes>;
export default Table;
