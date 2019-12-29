import React from 'react'
import s from './Users.module.sass'
import User from "./user/User";

const Users = (props) => {

    return (
        <div className={s.users}>

            <User users={props.users}
                  currentPageNumber={props.currentPageNumber}
                  totalCountUsers={props.totalCountUsers}
                  setUsers={props.setUsers}
                  handleUnFollow={props.handleUnFollow}
                  handleFollow={props.handleFollow}
                  currentPage={props.currentPage}
            />
        </div>
    )
}
export default Users