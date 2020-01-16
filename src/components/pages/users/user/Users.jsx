import React from 'react'
import s from "../users.module.sass";
import User from "./User";
import Pagination from "../pagination/Pagination";
const Users = (props) => {
    return (
        <div className={s.users}>
            <Pagination callCurrentPage={props.callCurrentPage}
                        currentPageNumber={props.currentPageNumber}
                        totalCountUsers={props.totalCountUsers}
                        countPage={props.countPage} />

            {props.users.map(user => {
                return (
                    <User
                        isAuth={props.isAuth}
                        user={user}
                        follow={props.follow}
                        unFollow = {props.unFollow}
                        isFollowing = {props.isFollowing}

                    />
                )
            })}
        </div>
    )
}
export default Users
