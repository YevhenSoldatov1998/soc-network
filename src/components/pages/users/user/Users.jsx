import React from 'react'
import s from "../users.module.sass";
import User from "./User";
const Users = (props) => {
    const callParentCurrentPage = (i) => {
        props.callCurrentPage(i)
    }
    return (
        <div className={s.users}>
            <div className={s.pagination}>
                {props.pages.map(i => {
                    return <span key={i}
                                 className={props.currentPageNumber === i ? `${s.active}`: ``}
                                 onClick={callParentCurrentPage.bind(this, i)}
                    >{i}</span>
                })}
            </div>
            {props.users.map(user => {
                return (
                    <User
                        handleFollow={props.handleFollow}
                        handleUnFollow = {props.handleUnFollow}
                        user={user}

                    />
                )
            })}
        </div>
    )
}
export default Users