import React from 'react'
import {createField} from "../../../../../common/form/createField";

const ContactsForm = ({contacts}) => {
    let arr = Object.keys(contacts);
    return (
        <div>
            {
                arr.map((el, index) => {
                    return <p key={index}>{el}: {createField('contacts.')}</p>

            })}
        </div>
    )
}
export default ContactsForm
