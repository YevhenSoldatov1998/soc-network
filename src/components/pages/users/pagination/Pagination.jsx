import React from 'react'
import s from "../users.module.sass";

const Pagination = (props) => {

    let allPages = Math.ceil(props.totalCountUsers / props.countPage);
    let pages = [];
    let minShowPage = props.currentPageNumber - 3;
    let maxShowPage = props.currentPageNumber + 3;
    for (let i = 1; i <= allPages; i++) {
        if (i >= minShowPage && i <= maxShowPage) {
            pages.push(i);

        } else if (i > maxShowPage) {
            pages.push('...');
            pages.push(allPages);
            break
        }
    }

    const callParentCurrentPage = (i) => {
        if (i !== '...') props.callCurrentPage(i)
    };

    return (
        <div className={s.pagination}>
            {pages.map(i => {
                return <span key={i}
                             className={props.currentPageNumber === i ? `${s.active}` : ``}
                             onClick={callParentCurrentPage.bind(this, i)}
                >{i}</span>
            })}
        </div>
    )
}
export default Pagination
