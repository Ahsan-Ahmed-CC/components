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
        style?: import("react").CSSProperties | undefined;
        pageSize?: number | undefined;
        columnHeadings: import("../types/Table").IColumnHeading<any>[];
        data: any[];
        onSortData?: Function | undefined;
        onPageChange?: Function | undefined;
        onRowItemClick?: Function | undefined;
        rowStyle?: import("react").CSSProperties | undefined;
    }>;
    Pagination: import("react").FC<{
        onPreviousClick?: Function | undefined;
        onNextClick?: Function | undefined;
        activeIndex: number;
        total: number;
        showNumberLength?: number | undefined;
        onItemClick: Function;
        className?: string | undefined;
        style?: import("react").CSSProperties | undefined;
    }>;
};
export default _default;
