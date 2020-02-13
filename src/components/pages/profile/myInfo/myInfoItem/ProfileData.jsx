import React from 'react'
import s from "./MyInfoItem.module.sass";
import Contacts from "./Contacts";
const ProfileData = ({fullName, aboutMe, lookingForAJob, lookingForAJobDescription, contacts})=> {
    debugger
    return (
        <div>
            <div className={s.name}>{fullName}</div>
            <p><strong>About me</strong> {aboutMe}</p>
            <p><strong>looking for a job:</strong> {lookingForAJob ? 'Yes' : 'No'}</p>
            {lookingForAJob && <p><strong>My work description:</strong> {lookingForAJobDescription}</p>}
            <div>Contacts: <Contacts contacts={contacts}/>
            </div>
        </div>
    )
}
export default ProfileData
