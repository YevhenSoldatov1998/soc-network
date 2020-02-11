import React, {useEffect, useState} from 'react'
import s from './Message.module.sass'
import MessageForm from "./MessageForm";
import {reduxForm} from "redux-form";
import Preloader from "../../../common/preloader";
import '../../../common/popup/popup.sass'
import Popup from "../../../common/popup/Popup";

const Message = ({messages, sendMessage, isFetching, deleteMessage, match}) => {
    const handleSubmit = value => {
        sendMessage( match.params.userId, value.textareaBody)
    };
    const [acceptForDeleteMessage, setAcceptForDeleteMessage] = useState(false);
    const [messageId, setMessageId] = useState(null);
    const handleDeleteMessage = () => {
        if(messageId){
            deleteMessage(messageId, match.params.userId)
        }
        setAcceptForDeleteMessage(false);
    };
    const closePopup = () => {
        setAcceptForDeleteMessage(false);
        setMessageId(null);
    };
    const callAcceptForDeleteMessage = (id) => {
        setMessageId(id);
        setAcceptForDeleteMessage(true)
    };

    return (
        <>
            <article className={s.message}>
                {!isFetching && messages.length > 0 && messages.map(message => {
                    return (

                        <div key={message.id} className={s.message_item}>
                            <p><b>{message.senderName}:</b> {message.body}  <span onClick={()=>callAcceptForDeleteMessage(message.id)}>&times;</span></p>
                        </div>

                    )
                })}
                {!isFetching && messages.length > 0 && <MessageReduxForm onSubmit={handleSubmit}/>}
                {!isFetching && messages.length === 0 && 'Please selected Chat'}
                {isFetching && <Preloader/>}
            </article>
            {acceptForDeleteMessage && <Popup>
                You really want delete this message?
                <button onClick={handleDeleteMessage}>Yes</button>
                <button onClick={closePopup}>No</button>
            </Popup>}
        </>
    );
}
const MessageReduxForm = reduxForm({
    form: 'messages'
})(MessageForm);

export default Message
