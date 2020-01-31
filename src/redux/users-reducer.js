import {UsersAPI} from "../services/users";
import {updateObjectInArray} from "../utility/objectUpdate";

const FOLLOW = 'social-network/user/FOLLOW';
const UN_FOLLOW = 'social-network/user/UN_FOLLOW';
const SET_USERS = 'social-network/user/SET_USERS';
const CURRENT_PAGE = 'social-network/user/CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'social-network/user/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'social-network/user/TOGGLE_IS_FOLLOWING';

export const follow = (userId) => ({type: FOLLOW, userId});
export const unFollow = (userId) => ({type: UN_FOLLOW, userId});
export const setUsers = (users, totalCount) => ({type: SET_USERS, users, totalCount});
export const currentPage = (current) => ({type: CURRENT_PAGE, current});
export const isFetching = (isFetch) => ({type: TOGGLE_IS_FETCHING, isFetch});
export const toggleIsFollowing = (isFetch, id) => ({type: TOGGLE_IS_FOLLOWING, isFetch, id});

export const getUsersThunk = (currentPage, countPage) => async dispatch => {
    dispatch(isFetching(true));

    let response = await UsersAPI.getUser(currentPage, countPage);
    dispatch(setUsers(response.items, response.totalCount));
    dispatch(isFetching(false));
}

const subscribeToUserFlow = async (userId, methodAPI, action, dispatch) => {
    dispatch(toggleIsFollowing(true, userId));
    let data = await methodAPI;
    if (data.resultCode === 0) {
        dispatch(action)
    }
    dispatch(toggleIsFollowing(false, userId));
}
export const followThunk = userId => dispatch => {
    subscribeToUserFlow(userId, UsersAPI.followUser(userId), follow(userId), dispatch)

}
export const unFollowThunk = userId => dispatch => {
    subscribeToUserFlow(userId, UsersAPI.unFollowUser(userId), unFollow(userId), dispatch)

};

const initialState = {
    users: [],
    totalCountUsers: 20,
    countPage: 5,
    currentPage: 1,
    isFetching: true,
    isFollowing: []
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            };
        case UN_FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users,
                totalCountUsers: action.totalCount
            };
        case CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.current
            };
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetch};
        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                isFollowing: action.isFetch ? [...state.isFollowing, action.id] : state.isFollowing.filter(el => el !== action.id)
            };
        default:
            return state
    }
}
export default usersReducer
