import Profile from "./Profile";
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {getUserProfileThunk, getUserStatus, userStatusUpdate} from "../../../redux/reducerProfile";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        userAPI: state.profile.userAPI,
        isFetchingProfile: state.profile.isFetchingProfile,
        status: state.profile.status
    }
};


export default compose(
    withRouter,
    // withAuthRedirect,
    connect(mapStateToProps, {getUserProfileThunk, getUserStatus, userStatusUpdate}),
)(Profile);
