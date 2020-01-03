import {connect} from "react-redux";
import {CURRENT_PAGE_CREATOR, FOLLOW_CREATOR, SET_USERS_CREATOR, UN_FOLLOW_CREATOR, TOGGLE_IS_FETCHING_CREATOR} from "../../../redux/reducerUsers";
import UsersAPIComponent from './UsersAPIComponent'
const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        totalCountUsers: state.users.totalCountUsers,
        countPage: state.users.countPage,
        currentPageNumber: state.users.currentPage,
        isFetching: state.users.isFetching
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
        },
        toggleIsFetching: (isFetching) => {
            dispatch(TOGGLE_IS_FETCHING_CREATOR(isFetching))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
export default UsersContainer