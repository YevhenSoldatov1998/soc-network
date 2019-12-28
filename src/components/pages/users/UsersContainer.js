import {connect} from "react-redux";
import Users from "./Users";
import {FOLLOW_CREATOR, SET_USERS_CREATOR, UN_FOLLOW_CREATOR} from "../../../redux/reducerUsers";

const mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleFollow: (userId) => {
            dispatch(FOLLOW_CREATOR(userId))
        },
        handleUnFollow: (userId) => {
            dispatch(UN_FOLLOW_CREATOR(userId))
        },
        setUsers: (users) => {
            dispatch(SET_USERS_CREATOR(users))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer