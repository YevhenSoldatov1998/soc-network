import React from 'react'
import StatusProfileHook from "./StatusProfile/StatusProfileHook";
import ProfileData from "./ProfileData";

const MyInfoItem = ({userAPI, status, userStatusUpdate}) => {
    return (
        <article>
            <StatusProfileHook status={status}
                               userStatusUpdate={userStatusUpdate}
            />
            <ProfileData userAPI={userAPI}/>
        </article>

    )
}
export default MyInfoItem
