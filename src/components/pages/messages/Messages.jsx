import React from 'react'
import s from './Messages.module.sass'
import FromMessage from "./fromMessage/FromMessage";
import Message from "./message/Message";

const Messages = () => {
    return (
        <div className={s.wrapMessage}>
            <FromMessage/>
            <Message/>
        </div>
    )
}
export default Messages