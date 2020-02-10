import React, {useEffect} from 'react'
import s from './Messages.module.sass'
import MessageContainer from "./message/MessageContainer";
import DialogsContainer from "./dialogs/DialogsContainer";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {messageAPI} from "../../../services/message";

const Messages = (props) => {
    useEffect(() => {
        messageAPI.sendMessage()
        messageAPI.getMessage().then(res=> {debugger})
    }, []);
    return (
        <div className={s.wrapMessage}>
            <DialogsContainer/>
            <MessageContainer/>
        </div>
    )
}

export default withAuthRedirect(Messages)

