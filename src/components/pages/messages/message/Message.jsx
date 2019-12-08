import React from 'react'
import s from './Message.module.sass'


const Message = (props) => {
    return (
        <div>
            {props.message.map(message => {
                return (
                    <article key={message.id} className={s.message}>
                        {message.message}
                    </article>
                )
            })}
        </div>


    )
}
export default Message