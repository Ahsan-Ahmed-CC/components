import React from 'react';

type propTypes = {
    className?: string;
    activeIndex: number,
}

const Pagination: React.FC<propTypes> = React.memo((props: React.PropsWithChildren<propTypes>) => {
    return (
        <div className={`${props.className}`}>
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link" href="#">&laquo;</a>
                </li>
                <li className="page-item active">
                    <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">3</a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">4</a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">5</a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">&raquo;</a>
                </li>
            </ul>
        </div>
    );
},
);

Pagination.defaultProps = {
    className: '',
};

export default Pagination;