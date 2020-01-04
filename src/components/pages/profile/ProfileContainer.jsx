import Profile from "./Profile";
import {connect} from 'react-redux';
import {SET_USER_API_CREATOR, TOGGLE_IS_FETCHING_PROFILE_CREATOR} from './../../../redux/reducerProfile';
import {withRouter} from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        userAPI: state.profile.userAPI,
        isFetchingProfile: state.profile.isFetchingProfile
    }
};
const mapUserUrlToProps = withRouter(Profile)
const ProfileContainer = connect(mapStateToProps, {
    setUserAPI: SET_USER_API_CREATOR,
    toggleIsFetchingProfile: TOGGLE_IS_FETCHING_PROFILE_CREATOR
})(mapUserUrlToProps);

export default ProfileContainer