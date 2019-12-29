import {connect} from "react-redux";
import {CURRENT_PAGE_CREATOR, FOLLOW_CREATOR, SET_USERS_CREATOR, UN_FOLLOW_CREATOR} from "../../../redux/reducerUsers";
import Users from './Users'
const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        totalCountUsers: state.users.totalCountUsers,
        countPage: state.users.countPage,
        currentPageNumber: state.users.currentPage
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
        setUsers: (users, totalCount) => {
            dispatch(SET_USERS_CREATOR(users, totalCount))
        },
        currentPage: (current) => {
            dispatch(CURRENT_PAGE_CREATOR(current));
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer