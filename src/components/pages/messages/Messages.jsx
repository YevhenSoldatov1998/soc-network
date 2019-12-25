import React from 'react'
import s from './Messages.module.sass'
import MessageContainer from "./message/MessageContainer";
import FromMessageContainer from "./fromMessage/FromMessageContainer";

const Messages = (props) => {
    return (
        <div className={s.wrapMessage}>
            <FromMessageContainer/>
            <MessageContainer/>
        </div>
    )
}
export default Messages