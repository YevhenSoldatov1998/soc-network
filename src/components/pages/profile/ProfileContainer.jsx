import Profile from "./Profile";
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {getUserProfileThunk, getUserStatus, updateProfileData, userStatusUpdate} from "../../../redux/profile-reducer";
import {compose} from "redux";
import {sendMessage} from "../../../redux/message-reducer";

const mapStateToProps = (state) => {
    return {
        userAPI: state.profile.userAPI,
        isFetchingProfile: state.profile.isFetchingProfile,
        status: state.profile.status,
        myId: state.auth.id
    }
};


export default compose(
    withRouter,
    connect(mapStateToProps, {getUserProfileThunk, getUserStatus, userStatusUpdate, sendMessage , updateProfileData}),
)(Profile);
