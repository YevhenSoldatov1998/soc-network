import Profile from "./Profile";
import {connect} from 'react-redux'
import {SET_USER_API_CREATOR , TOGGLE_IS_FETCHING_CREATOR} from './../../../redux/reducerProfile'

const mapStateToProps = (state) => {
    return {
        userAPI: state.userAPI,
        isFetching: state.isFetching
    }
}
const ProfileContainer = connect(mapStateToProps, {
    setUserAPI: SET_USER_API_CREATOR,
    toggleIsFetching: TOGGLE_IS_FETCHING_CREATOR
})(Profile)
export default ProfileContainer