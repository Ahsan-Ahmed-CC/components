import React, { useState } from 'react';
import _ from 'lodash';
import { IColumnHeading } from '../types/Table';

type propTypes = {
    className?: string;
    pageSize?: number,
    columnHeadings: Array<IColumnHeading>
    data: Array<any>,
    onSortData?: Function
}

const Table: React.FC<propTypes> = React.memo((props: React.PropsWithChildren<propTypes>) => {

    const [orderBy, setOrderKey] = useState<string>();
    const [orderDirection, setOrderDirection] = useState<boolean | "desc" | "asc">("asc");

    const setOrderStatus = (value: IColumnHeading, event: React.MouseEvent<HTMLTableHeaderCellElement, MouseEvent>) => {
        const orderKey = value.keyIndex;
        
        if(!value.sortable) {
            return
        }

        let orderDirectionTemp: boolean | "desc" | "asc" = "asc"
        if (orderKey == orderBy && orderDirection == orderDirectionTemp) {
            orderDirectionTemp = "desc"
        } else {
            orderDirectionTemp = "asc"
        }
        setOrderDirection(orderDirectionTemp);
        setOrderKey(`${orderKey}`)
        
        if(props.onSortData)
            props.onSortData(orderKey, orderDirectionTemp);
    }

    return (
        <table className={`table table-hover ${props.className}`}>
            <thead>
                <tr>
                    {_.map(props.columnHeadings, (value, key) => {
                        return (
                            <th scope="col" key={value.keyIndex} onClick={(e) => setOrderStatus(value, e)}>
                                {value.renderColumn ? value.renderColumn(value, key) : (value.label || value.keyIndex)}
                            </th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {_.map(_.orderBy(props.data, [orderBy], [orderDirection]), (row, key) => {
                    return (
                        <tr key={`${key}`}>
                            {_.map(props.columnHeadings, (column, columnKeyIndex) => {
                                return (
                                    <td key={`${key}-${columnKeyIndex}`}>
                                        {column.render ? column.render(row, key) : row[column.keyIndex] || "N/A"}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}
);

Table.defaultProps = {
    className: '',
    pageSize: 10,
};

export default Table;