import React from 'react'
import s from './Messages.module.sass'
import FromMessage from "./fromMessage/FromMessage";
import Message from "./message/Message";

const Messages = (props) => {
    return (
        <div className={s.wrapMessage}>
            <FromMessage fromMessage={props.messages.fromMessage}/>
            <Message message={props.messages.message}/>
        </div>
    )
}
export default Messages