import React from 'react'
import s from './Message.module.sass'


const Message = (props) => {

    const textValueChange = e => {
        let action = {
            type: 'TEXT-VALUE-CHANGE',
            value: e.target.value
        }
        props.dispatch(action)
    }
    const sendMessage = () => {
        let action = {
            type: 'SEND-MESSAGE'
        }
        props.dispatch(action)
    }
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
                <button onClick={sendMessage.bind(this)}>Send message</button>
            </div>
        </article>


    )
}
export default Message
