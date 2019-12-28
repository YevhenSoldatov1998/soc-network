import React from 'react'
import s from './Users.module.sass'
import User from "./user/User";

const Users = (props) => {
    return (
        <div className={s.users}>
          <User users={props.users}
                setUsers = {props.setUsers}
                handleUnFollow={props.handleUnFollow}
                handleFollow = {props.handleFollow}
          />
        </div>
    )
}
export default Users