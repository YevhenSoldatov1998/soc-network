import React from 'react'
import s from './Messages.module.sass'
import FromMessage from "./fromMessage/FromMessage";
import MessageContainer from "./message/MessageContainer";

const Messages = (props) => {
    return (
        <div className={s.wrapMessage}>
            <FromMessage fromMessage={props.messages.fromMessage}/>
            <MessageContainer />
        </div>
    )
}
export default Messages