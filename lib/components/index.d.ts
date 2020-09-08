/// <reference types="react" />
import Button from './Button';
import Table from './Table';
import Pagination from './Pagination';
export { Button, Table, Pagination };
declare const _default: {
    Button: import("react").FC<{
        className?: string | undefined;
    }>;
    Table: import("react").FC<{
        className?: string | undefined;
        pageSize?: number | undefined;
        columnHeadings: import("../types/Table").IColumnHeading<any>[];
        data: any[];
        onSortData?: Function | undefined;
    }>;
    Pagination: import("react").FC<{
        className?: string | undefined;
        activeIndex: number;
    }>;
};
export default _default;
