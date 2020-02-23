import React from 'react'
import {createField} from "../../../../../common/form/createField";
import {withFormControl} from "../../../../../../hoc/formControl";
import {minLength, required} from "../../../../../../utility/validation";
import {Field} from "redux-form";
const ContactsForm = ({contacts}) => {
    const minLength1 = minLength(1);
    const Input = withFormControl('input');
    let arr = Object.keys(contacts);
    return (
        <div>
            {
                arr.map((el, index) => {
                    return <p key={index}>{el}:
                        <Field name={"name" + el}
                               placeholder={'link on ' + el}
                               component={Input}
                               validate={[minLength1]}
                        />
                       </p>

            })}
        </div>
    )
}
export default ContactsForm
