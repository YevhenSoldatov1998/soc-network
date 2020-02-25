import React, {PureComponent} from 'react'
import s from './Profile.module.sass'
import Preloader from "../../common/preloader";
import MyInfo from "./myInfo/MyInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import {StateUserAPIType} from "../../../types/types";

type PropsType = {
    match: any
    history: any
    isFetchingProfile: boolean
    status: string | null
    myId: number
    userAPI: StateUserAPIType

    getUserProfileThunk: (userId: string) => void
    getUserStatus: (userId: string) => void
    userStatusUpdate: (status: string) => void
    sendMessage: (userId: string, body: any) => void
    updateProfileData: (entireObj: any, userId: string) => void
}

class Profile extends PureComponent<PropsType> {
    componentDidMount() {
        const {myId, history, match: {params}, getUserProfileThunk, getUserStatus} = this.props;
        let userId = params.userId;
        if (!userId) {
            userId = myId;
            if (!userId) {
                history.push('/login')
            }
        }
        getUserProfileThunk(userId);
        getUserStatus(userId);

    }

    render() {
        const {
            isFetchingProfile, userAPI, status, userStatusUpdate, sendMessage, updateProfileData,
            myId, match: {params}
        } = this.props;
        return (
            <div className={s.profile}>
                {isFetchingProfile ?
                    <Preloader/> :
                    <React.Fragment>
                        {!userAPI ?
                            false :
                            <>
                                <MyInfo status={status}
                                        userStatusUpdate={userStatusUpdate}
                                        userAPI={userAPI}
                                        userId={params.userId}
                                        myId={myId}
                                        sendMessage={sendMessage}
                                        updateProfileData={updateProfileData}
                                />
                                <MyPostsContainer/>
                            </>
                        }
                    </React.Fragment>
                }

            </div>
        )
    }

}

export default Profile
