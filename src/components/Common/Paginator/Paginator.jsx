import React, { useState } from "react";
import classes from './Paginator.module.css';
import cn from 'classnames';
import { useEffect } from "react";

const Paginator = ({ totalItemsCount, pageSize, onPageGhanged, currentPortion, 
                    currentPage, setCurrentPortion, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    setCurrentPortion(portionNumber);

    useEffect(() => {
        setPortionNumber(currentPortion);
    }, []);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    return (
        <div className={classes.content}>
            {portionNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span className={cn({[classes.selected]: currentPage === p})}
                        key={p}
                        onClick={(e) => {
                            onPageGhanged(p);
                        }}> {p} </span>
                })}
            {portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}
        </div>
    )
}

export default Paginator;