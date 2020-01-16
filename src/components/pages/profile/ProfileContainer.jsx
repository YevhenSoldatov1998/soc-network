import Profile from "./Profile";
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {getUserProfileThunk} from "../../../redux/reducerProfile";

const mapStateToProps = (state) => {
    return {
        userAPI: state.profile.userAPI,
        isFetchingProfile: state.profile.isFetchingProfile
    }
};
const mapUserUrlToProps = withRouter(Profile)
const ProfileContainer = connect(mapStateToProps, {
    getUserProfileThunk
})(mapUserUrlToProps);

export default ProfileContainer
