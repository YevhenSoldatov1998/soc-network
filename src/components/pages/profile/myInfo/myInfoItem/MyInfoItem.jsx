import React from 'react'
import s from './MyInfoItem.module.sass'
import StatusProfile from "./StatusProfile";
const MyInfoItem = (props) => {
    return (
        <article>
            <div className={s.name}>{props.userAPI.fullName}</div>
              <StatusProfile status = {props.status}
                             userStatusUpdate = {props.userStatusUpdate}
              />
            <div><strong>About me</strong> {props.userAPI.aboutMe}</div>
            <div>looking for a job: {props.userAPI.lookingForAJob?'Yes': 'No'}</div>
        </article>

    )
}
export default MyInfoItem
