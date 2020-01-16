import Profile from "./Profile";
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {getUserProfileThunk} from "../../../redux/reducerProfile";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
    return {
        userAPI: state.profile.userAPI,
        isFetchingProfile: state.profile.isFetchingProfile,
    }
};
let ProfileOrderComponent = withAuthRedirect(Profile);

const mapUserUrlToProps = withRouter(ProfileOrderComponent);
const ProfileContainer = connect(mapStateToProps, {
    getUserProfileThunk
})(mapUserUrlToProps);

export default ProfileContainer
