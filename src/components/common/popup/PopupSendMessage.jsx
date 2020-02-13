import React, {useState} from 'react'
import Popup from "./Popup";
import {reduxForm} from "redux-form";
import FormSendMessage from "../../pages/profile/myInfo/FormSendMessage";
const PopupSendMessage = ({handleSubmit}) =>{
    return (
        <Popup>
            <FormSendMessageRedux onSubmit={handleSubmit}/>
        </Popup>
    )
}
const FormSendMessageRedux = reduxForm({form: 'sendMessage'})(FormSendMessage);

export default PopupSendMessage
