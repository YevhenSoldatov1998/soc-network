import React from 'react'
import {Field} from "redux-form";
import {withFormControl} from "../../../../../hoc/formControl";
import {required} from "../../../../../utility/validation";

const Textarea = withFormControl("textarea");
const AddPostForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name="textareaBody"
                validate = {[required]}
                placeholder="Add something on wall"/>
            <button>add post</button>
        </form>
    )
}
export default AddPostForm
