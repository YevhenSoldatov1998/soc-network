import React from 'react'
import s from './Messages.module.sass'
import MessageContainer from "./message/MessageContainer";
import FromMessageContainer from "./fromMessage/FromMessageContainer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

const Messages = (props) => {
    return (
        <div className={s.wrapMessage}>
            <FromMessageContainer/>
            <MessageContainer/>
        </div>
    )
}

let drawWithAuthRedirect = withAuthRedirect(Messages)
export default connect({})(drawWithAuthRedirect)
