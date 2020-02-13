import React from 'react'
import s from "./Message.module.sass";
import {Field} from "redux-form";
import {withFormControl} from "../../../../hoc/formControl";
import {maxLength, minLength, required} from "../../../../utility/validation";

const maxLength50 = maxLength(50);
const minLength2 = minLength(2)
const Textarea = withFormControl("textarea");

const MessageForm = ({startDialogs, handleSubmit, userId}) => {
    const call_startDialogs = () => {
        startDialogs(userId)
    }
    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <Field name="textareaBody"
                   onChange={call_startDialogs}
                   placeholder="Enter your message"
                   validate={[required, maxLength50, minLength2]}
                   component={Textarea}/>
            <button>Send message</button>
        </form>

    )
};
export default MessageForm
