import React from 'react'
import s from './Message.module.sass'
import {textValueChangeCreator , sendMessageCreator} from "../../../../redux/reducerMessage";


const Message = (props) => {
    debugger
    const textValueChange = e => {
        let message = e.target.value;
        props.dispatch(textValueChangeCreator(message))
    }
    const sendMessageItem = () => {
        props.dispatch(sendMessageCreator())
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
                <button onClick={sendMessageItem.bind(this)}>Send message</button>
            </div>
        </article>


    )
}
export default Message
