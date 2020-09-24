import React from 'react';
import _ from 'lodash';

type propTypes = {
    onPreviousClick?: Function;
    onNextClick?: Function;
    activeIndex: number;
    total: number;
    showNumberLength?: number;
    onItemClick: Function;
    className?: string;
    style?: React.CSSProperties
}

const Pagination: React.FC<propTypes> = React.memo((props: React.PropsWithChildren<propTypes>) => {

    const getPageNumbers = (total: number, current: number) => {
        const pageIndex = props.showNumberLength || 3
        let startIndex = 0;
        let endIndex = total;

        if (current - Math.floor(pageIndex / 2) >= 0) {
            startIndex = current - Math.floor(pageIndex / 2)
        }

        if (!(current > total - pageIndex)) {
            endIndex = (current + pageIndex) - Math.floor(pageIndex / 2)
        }

        const generatedArray: Array<number | string> = _.range(startIndex, endIndex);

        if (startIndex > 0) {
            generatedArray.unshift("...")
            generatedArray.unshift(0);
        }
        if (endIndex !== total) {
            generatedArray.push("...")
            generatedArray.push(total - 1);
        }

        return generatedArray
    }

    const onNextClick = () => {
        if (props.activeIndex + 1 < props.total) {
            if (props.onNextClick)
                props.onNextClick(props.activeIndex + 1);
            props.onItemClick(props.activeIndex + 1)
        }
    }

    const onPreviousClick = () => {
        if (props.activeIndex - 1 > 0) {
            if (props.onPreviousClick)
                props.onPreviousClick(props.activeIndex - 1);
            props.onItemClick(props.activeIndex - 1)
        }
    }

    return (
        <ul className={`pagination ${props.className}`} style={props.style}>
            <li className="page-item" onClick={onPreviousClick}>
                <button className="page-link" >&laquo;</button>
            </li>
            {_.map(getPageNumbers(props.total, props.activeIndex), (index) => {
                return (
                    <li key={index} className={`page-item ${index === props.activeIndex ? "active" : ""}`} onClick={() => typeof index === "number" ? props.onItemClick(index) : null}>
                        <button className="page-link">{typeof index === "number" ? index + 1 : index}</button>
                    </li>
                )
            })}
            <li className="page-item" onClick={onNextClick}>
                <button className="page-link" >&raquo;</button>
            </li>
        </ul>
    );
},
);

Pagination.defaultProps = {
    className: '',
    showNumberLength: 3,
};

export default Pagination;