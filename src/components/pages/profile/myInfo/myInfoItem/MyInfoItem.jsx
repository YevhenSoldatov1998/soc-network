import React from 'react'
import s from './MyInfoItem.module.sass'

const MyInfoItem = (props) => {
    return (
        <article>
            <div className={s.name}>{props.user.userName.firstName + " " + props.user.userName.lastName}</div>
            {props.user.userInfo.map(el =>
                props.allInfo?
                <div className={s.info}><strong>{el.nameInfo}</strong> <span>{el.info}</span></div>
                :false

            )}
        </article>

    )
}
export default MyInfoItem