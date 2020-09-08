import React from 'react';

export interface IColumnHeading<T = any> {
    label?: string;
    keyIndex : string | number,
    sortable?: boolean,
    filterable?: boolean,
    render?: (value: T, key: number | string) => JSX.Element | React.ReactNode,
    renderColumn? :(value: IColumnHeading<T>, key: number | string) => JSX.Element | React.ReactNode
}