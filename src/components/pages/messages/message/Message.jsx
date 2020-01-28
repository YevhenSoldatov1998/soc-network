import React from 'react'
import s from './Message.module.sass'
import MessageForm from "./MessageForm";
import {reduxForm} from "redux-form";

const Message = (props) => {
    const handleSubmit = value => {
      props.sendMessage(value.textareaBody)
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

            <MessageReduxForm onSubmit={handleSubmit} />
        </article>
    )
}
const MessageReduxForm = reduxForm({
    form: 'messages'
})(MessageForm);

export default Message
