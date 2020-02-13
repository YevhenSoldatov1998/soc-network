import React from 'react'
import {createField} from "../../../common/form/createField";
const FormSendMessage = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            {createField('sendMessage', 'Input Your message', 'textarea')}
            <button>Send Message</button>
        </form>
    )
}
export default FormSendMessage
