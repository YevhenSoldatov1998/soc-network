import React from 'react'
import s from './Message.module.sass'

const Message = (props) => {
    const textValueChange = e => {
        let message = e.target.value;
        props.textValueChange(message)
    };
    const sendMessageItem = () => {
        props.sendMessage()
    };
    return (
        <article className={s.message}>
            {props.messages.message.map(message => {
                return (
                    <div key={message.id} className={s.message_item}>
                        {message.message}
                    </div>
                )
            })}
            <div className={s.form}>
                <textarea onChange={textValueChange.bind(this)}
                          value={props.messages.textValue}/>
                <button onClick={sendMessageItem.bind(this)}>Send message</button>
            </div>
        </article>


    )
}
export default Message
