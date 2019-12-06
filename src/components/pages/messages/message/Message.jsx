import React from 'react'
import s from './Message.module.sass'

const Message = () => {
    return (
        <article className={s.message}>
            <div className={s.self}>
                Hello!!
            </div>
            <div className={s.person}>Hello how are you)</div>
        </article>

    )
}
export default Message