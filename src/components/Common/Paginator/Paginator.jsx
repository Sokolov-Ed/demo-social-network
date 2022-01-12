import React from "react";
import classes from './Paginator.module.css';
import ReactPaginate from 'react-paginate';

const Paginator = ({ totalItemsCount, pageSize, onPageGhanged, currentPage }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const handlePageClick = (e) => {
        onPageGhanged(pages[e.selected]);
    };
    
    return (
        <div className={classes.content}>
            <ReactPaginate
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pagesCount}
                previousLabel="<"
                pageClassName={classes.pageItem}
                pageLinkClassName={classes.pageLink}
                previousClassName={classes.previousPageItem}
                previousLinkClassName={classes.previousPageLink}
                nextClassName={classes.nextPageItem}
                nextLinkClassName={classes.nextPageLink}
                breakLabel="..."
                breakClassName={classes.breakPageItem}
                breakLinkClassName={classes.breakPageLink}
                containerClassName={classes.pagination}
                activeClassName={classes.active}
                disabledClassName={classes.disabled}
                renderOnZeroPageCount={null}
                forcePage={currentPage - 1}
            />
        </div>
    )
}

export default Paginator;