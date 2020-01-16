import {connect} from "react-redux";
import {
    currentPage,
    follow,
    toggleIsFollowing,
    unFollow,
    getUsersThunk, followThunk, unFollowThunk
} from "../../../redux/reducerUsers";
import UsersAPIComponent from './UsersAPIComponent'

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        totalCountUsers: state.users.totalCountUsers,
        countPage: state.users.countPage,
        currentPageNumber: state.users.currentPage,
        isFetching: state.users.isFetching,
        isFollowing: state.users.isFollowing
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleFollow: (userId) => {
            dispatch(follow(userId))
        },
        handleUnFollow: (userId) => {
            dispatch(unFollow(userId))
        },
        currentPage: (current) => {
            dispatch(currentPage(current));
        },
        toggleIsFollowing: (isFetch, id) => {
            dispatch(toggleIsFollowing(isFetch, id))
        },
        getUsers: (currentPage, countPage) => {
            dispatch(getUsersThunk(currentPage, countPage))
        },
        follow: (userId) => {
            dispatch(followThunk(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowThunk(userId))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
export default UsersContainer
