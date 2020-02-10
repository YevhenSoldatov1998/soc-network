import React from 'react'
import s from './Messages.module.sass'
import MessageContainer from "./message/MessageContainer";
import DialogsContainer from "./dialogs/DialogsContainer";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

const Messages = (props) => {
    return (
        <div className={s.wrapMessage}>
            <DialogsContainer/>
            <MessageContainer/>
        </div>
    )
}

export default withAuthRedirect(Messages)

