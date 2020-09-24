/// <reference types="react" />
import Button from './Button';
import Table from './Table';
import Pagination from './Pagination';
import Collapse from './Collapse';
export { Button, Table, Pagination, Collapse, };
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
    Collapse: import("react").FC<{
        className?: string | undefined;
        renderHeading?: ((collapseKey: string) => string | number | JSX.Element) | undefined;
        collapseKey: string;
    }>;
};
export default _default;
