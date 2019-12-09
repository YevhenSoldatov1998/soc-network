import React from 'react'
import s from './Message.module.sass'


const Message = (props) => {
    return (
        <article  className={s.message}>
            {props.message.map(message => {
                return (
                    <div key={message.id}  className={s.message_item}>
                        {message.message}
                    </div>
                )
            })}
        </article>


    )
}
export default Message