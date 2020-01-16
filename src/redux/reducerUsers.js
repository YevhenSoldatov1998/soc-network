import {UsersAPI} from "../services/users";

const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const CURRENT_PAGE = 'CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';

export const follow = (userId) => ({type: FOLLOW, userId});
export const unFollow = (userId) => ({type: UN_FOLLOW, userId});
export const setUsers = (users, totalCount) => ({type: SET_USERS, users, totalCount});
export const currentPage = (current) => ({type: CURRENT_PAGE, current});
export const isFetching = (isFetch) => ({type: TOGGLE_IS_FETCHING, isFetch});
export const toggleIsFollowing = (isFetch, id) => ({type: TOGGLE_IS_FOLLOWING, isFetch, id});

export const getUsersThunk = (currentPage, countPage) =>{
    return (dispatch) => {
        dispatch(isFetching(true));
        UsersAPI.getUser(currentPage, countPage)
            .then(response => {
                dispatch(setUsers(response.items, response.totalCount));
                dispatch(isFetching(false));
            })
    }
}
export const followThunk = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowing(true, userId));
        UsersAPI.followUser(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(userId))
            }
            dispatch(toggleIsFollowing(false, userId));
        })
    }
}
export const unFollowThunk = (userId) => (dispatch) => {
    dispatch(toggleIsFollowing(true, userId));
    UsersAPI.unFollowUser(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(unFollow(userId))
        }
        dispatch(toggleIsFollowing(false, userId ));
    })
}
const initialState = {
    users: [],
    totalCountUsers: 20,
    countPage: 5,
    currentPage: 1,
    isFetching: true,
    isFollowing: []
};
const reducerUsers = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: [...state.users.map(e => {
                    if (e.id === action.userId) {
                        return {...e, followed: true}
                    }
                    return {...e}
                })]
            };
        case UN_FOLLOW:
            return {
                ...state,
                users: [...state.users.map(e => {
                    if (e.id === action.userId) {
                        return {...e, followed: false}
                    }
                    return {...e}
                })]
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
export default reducerUsers
