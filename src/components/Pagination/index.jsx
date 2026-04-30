import React from 'react';
import styles from './Pagination.module.scss';
import ReactPaginate from "react-paginate";

const Pagination = ({onChange}) => {
    return (
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            nextLabel=">"
            onPageChange={(e) => onChange(e.selected + 1)}
            pageRangeDisplayed={16}
            pageCount={2}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    );
};

export default Pagination;