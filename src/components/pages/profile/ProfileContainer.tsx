import Profile from "./Profile";
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {getUserProfileThunk, getUserStatus, updateProfileData, userStatusUpdate} from "../../../redux/profile-reducer";
import {compose} from "redux";
import {sendMessage} from "../../../redux/message-reducer";
import {AppState} from "../../../redux/redux-store";
import {StateUserAPIType} from "../../../types/types";

type MapStateToPropsType = {
    isFetchingProfile: boolean
    status: string | null
    myId: number | null
    userAPI: StateUserAPIType
}
const mapStateToProps = (state: AppState): MapStateToPropsType => {
    return {
        userAPI: state.profile.userAPI,
        isFetchingProfile: state.profile.isFetchingProfile,
        status: state.profile.status,
        myId: state.auth.id
    }
};
type OwnPropsType = {
}
type MapDispatchToPropsType = {
    getUserProfileThunk: (userId: string) => void
    getUserStatus: (userId: string) => void
    userStatusUpdate: (status: string) => void
    sendMessage: (userId: string, body: any) => void
    updateProfileData: (entireObj: any, userId: string) => void
}

export default compose(
    withRouter,
    connect
    <MapStateToPropsType, MapDispatchToPropsType,OwnPropsType, AppState>
    (mapStateToProps,{
            getUserProfileThunk, getUserStatus, userStatusUpdate, sendMessage, updateProfileData
        }),
)(Profile);
