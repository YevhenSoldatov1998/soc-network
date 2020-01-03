import Profile from "./Profile";
import {connect} from 'react-redux'
import {SET_USER_API_CREATOR , TOGGLE_IS_FETCHING_PROFILE_CREATOR} from './../../../redux/reducerProfile'

const mapStateToProps = (state) => {
    return {
        userAPI: state.profile.userAPI,
        isFetchingProfile: state.profile.isFetchingProfile
    }
}
const ProfileContainer = connect(mapStateToProps, {
    setUserAPI: SET_USER_API_CREATOR,
    toggleIsFetchingProfile: TOGGLE_IS_FETCHING_PROFILE_CREATOR
})(Profile)
export default ProfileContainer