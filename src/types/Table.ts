import React from 'react';

export interface IColumnHeading<T = any> {
    label?: string;
    keyIndex : string | number, // use "," to get multiple values and "." to access childs
    sortable?: boolean,
    filterable?: boolean,
    render?: (value: Array<T>, key: number | string, index: number | string) => JSX.Element | React.ReactNode,
    renderColumn? :(value: IColumnHeading<T>, key: number | string) => JSX.Element | React.ReactNode
}