import React from 'react'
import {createField} from "../../../../../common/form/createField";

const Contacts = ({contacts}) => {
    let arr = Object.keys(contacts);
    return (
        <div>
            {arr.map((el, index) => {
                    return <p key={index}>{el}: {createField("contacts." + )}{contacts[el]}</p>

            })}
        </div>
    )
}
export default Contacts
