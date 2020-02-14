import React, {useState} from 'react'
import StatusProfileHook from "./StatusProfile/StatusProfileHook";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";
import {reduxForm} from "redux-form";

const MyInfoItem = ({userAPI, status, userStatusUpdate, updateProfileData, myId}) => {
    const [isModeEditInfo, setIsModeEditInfo] = useState(false);
    const editInfo = () => {
        setIsModeEditInfo(true)
    };
    const saveInfo = () => {
        setIsModeEditInfo(false);

    };
    const handleSubmit = (obj) => {
        updateProfileData(obj, myId);
        setIsModeEditInfo(true);

    }
    return (
        <article>
            <StatusProfileHook status={status}
                               userStatusUpdate={userStatusUpdate}
            />
            {isModeEditInfo ?
                <ProfileDataFormRedux onSubmit={handleSubmit}
                                      saveInfo={saveInfo}
                                      updateProfileData={updateProfileData}
                                      userAPI={userAPI}/>
                : <ProfileData editInfo={editInfo} userAPI={userAPI}/>}
        </article>

    )
}
const ProfileDataFormRedux = reduxForm({form: 'profileData'})(ProfileDataForm);

export default MyInfoItem
