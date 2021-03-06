import React, { useState } from 'react';
import _ from 'lodash';
import { IColumnHeading } from '../types/Table';
import Pagination from './Pagination'
import { css, StyleSheet } from '../helpers/aphrodite';

type propTypes = {
    className?: string;
    style?: React.CSSProperties;
    pageSize?: number;
    columnHeadings: Array<IColumnHeading>;
    data: Array<any>;
    onSortData?: (orderKey: IColumnHeading['sortIndex'], orderDirectionTemp: boolean | "desc" | "asc") => void;
    onPageChange?: (index: number) => void;
    onRowItemClick?: (row: any, index: number) => void;
    rowStyle?: React.CSSProperties;
    ref?: React.Ref<HTMLTableElement>
}

const Table: React.FC<propTypes> = React.memo(React.forwardRef<HTMLTableElement, propTypes>((props: React.PropsWithoutRef<React.PropsWithChildren<propTypes>>, ref: propTypes['ref']) => {
    const [orderBy, setOrderKey] = useState<IColumnHeading['sortIndex']>();
    const [orderDirection, setOrderDirection] = useState<boolean | "desc" | "asc">("asc");
    const [paginationIndex, setPageNumber] = useState<number>(0);
    const styles = useStyles(props);
    
    const setOrderStatus = (orderKey: IColumnHeading['sortIndex'], event: React.MouseEvent<HTMLTableHeaderCellElement, MouseEvent>) => {
        let orderDirectionTemp: boolean | "desc" | "asc" = "asc"
        if (orderKey === orderBy && orderDirection === orderDirectionTemp) {
            orderDirectionTemp = "desc"
        } else {
            orderDirectionTemp = "asc"
        }
        setOrderDirection(orderDirectionTemp);
        setOrderKey(`${orderKey}`)
        
        if (props.onSortData)
            props.onSortData(orderKey, orderDirectionTemp);
    }

    const onPageChange = (index: number) => {
        setPageNumber(index)
        if (props.onPageChange)
            props.onPageChange(index)
    }

    const onRowItemClick = (row: any, index: number) => {
        if (props.onRowItemClick)
            props.onRowItemClick(row, index + (paginationIndex * (props.pageSize || 1)))
    }

    const renderRowData = (column: IColumnHeading<any>, row: any, rowKey: number) => {
        const orSplit = _.split(`${column.keyIndex}`, ",");
        // Case: Where the additional data is required to be passed
        const dataIndeces = _.reduce(orSplit, (resultIndeces, orIndex) => {
            const nestingSplit = _.split(`${orIndex}`, ".");
            // Case: Where the nesting data value should be retrieved.
            if (_.size(nestingSplit) > 0) {
                const nestedValue = _.reduce(nestingSplit, (result, nestingIndex) => {
                    result = result ? result[nestingIndex] : result;
                    return result
                }, row)
                resultIndeces[orIndex] = nestedValue;
                return resultIndeces
            } else {
                resultIndeces[column.keyIndex] = `${orIndex || ""}`
                return resultIndeces
            }
        }, {} as any)
        return column.render ? column.render(_.size(dataIndeces) > 1 ? dataIndeces : dataIndeces[column.keyIndex], column.keyIndex, rowKey + (paginationIndex * (props.pageSize || 1))) : dataIndeces[column.keyIndex] || "N/A"
    }

    const totalData = _.chunk(props.data, props.pageSize);

    const getSortKey = (value: IColumnHeading, index: number) => {
        if (typeof value.sortIndex === "function") return value.sortIndex(value, value.keyIndex, index)
        if (typeof value.sortIndex === "undefined") return value.keyIndex;
        return value.sortIndex
    }

    return (
        <>
            <table ref={ref} className={`${props.className || ""}`} style={props.style}>
                <thead>
                    <tr>
                        {_.map(props.columnHeadings, (value, key) => {
                            const sortKey = getSortKey(value, key)
                            return (
                                <th scope="col" key={value.keyIndex} onClick={(e) => value.sortable ? setOrderStatus(sortKey, e) : null} style={{cursor: value.sortable ? "pointer" : "default", ...value.headerStyle}}>
                                    {value.renderColumn ? value.renderColumn(value, key) : (value.label || value.keyIndex)}
                                    {value.sortable ? <svg width="12px" height="12px" viewBox="0 0 16 16" className={`bi ${orderDirection === "asc" ? "bi-caret-up-fill" : "bi-caret-down-fill"}`} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        {orderDirection === "asc" && orderBy === sortKey ?
                                            (
                                                <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                            ) :
                                            (
                                                <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                            )
                                        }
                                    </svg> : null}
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {_.map(_.orderBy(totalData[paginationIndex], _.split(`${orderBy}`, ","), [orderDirection]), (row, key) => {
                        return (
                            <tr key={`${key}-${paginationIndex}`} onClick={() => onRowItemClick(row, key)} style={props.rowStyle} className={`${css(styles.tableRowClass)}`}>
                                {_.map(props.columnHeadings, (column, columnKeyIndex) => {
                                    return (
                                        <td key={`${key}-${columnKeyIndex}`} style={column.columnStyle}>
                                            {renderRowData(column, row, key)}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {_.size(props.data) > (props.pageSize || 0) ?
                <Pagination
                    onItemClick={onPageChange}
                    total={_.size(totalData)}
                    activeIndex={paginationIndex}
                />
                : null}
        </>
    );
}
));

const useStyles = (props: propTypes) => React.useMemo(() => {
    return StyleSheet.create({
        tableRowClass: {
            cursor: props.onRowItemClick ? "pointer" : "default"
        }
    })
}, [props])

Table.defaultProps = {
    className: 'table table-hover',
    pageSize: 10,
};

export default Table;