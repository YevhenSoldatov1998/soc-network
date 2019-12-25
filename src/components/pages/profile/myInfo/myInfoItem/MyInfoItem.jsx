import React from 'react'
import s from './MyInfoItem.module.sass'

const MyInfoItem = (props) => {
    debugger
    return (
        <article>
            <div className={s.name}>{props.userName.firstName + " " + props.userName.lastName}</div>
            {props.userInfo.map(el =>
                props.allInfo?
                <div className={s.info}><strong>{el.nameInfo}</strong> <span>{el.info}</span></div>
                :false

            )}
        </article>

    )
}
export default MyInfoItem