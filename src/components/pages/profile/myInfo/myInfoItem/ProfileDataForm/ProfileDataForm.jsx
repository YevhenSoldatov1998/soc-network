import React from 'react'
import s from "../MyInfoItem.module.sass";
import Contacts from "../Contacts";
import {createField} from "../../../../../common/form/createField";
import ContactsForm from "./ContactsForm";

const ProfileDataForm = ({handleSubmit, userAPI: {fullName, aboutMe, lookingForAJob, lookingForAJobDescription, contacts}}) => {
    return (
        <form onSubmit={handleSubmit}>
            <button  type="submit" >Save Info &#10000;</button>
            <div
                className={s.name}>{createField('fullName', 'new name', 'input', [], 'text', '', fullName, 'Name: ')}</div>
            <div>{createField('aboutMe', 'About yourself', 'input', [], 'text', '', aboutMe, 'About me: ')}</div>
            <div>{createField('lookingForAJob', '', 'input', [], 'checkbox', '', '', 'looking for a job: ')}</div>
            {<div>{createField('lookingForAJobDescription', 'work-description',
                'input', [], 'text', '', '', 'work description: ')}</div>
            }
            <div>Contacts: <ContactsForm contacts={contacts}/>
            </div>
        </form>
    )
}
export default ProfileDataForm
