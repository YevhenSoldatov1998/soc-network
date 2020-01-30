import {UsersAPI} from "../services/users";

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

const subscribeToUserFlow = async (userId , methodAPI, action , dispatch) => {
    dispatch(toggleIsFollowing(true, userId));

    let data = await methodAPI;
    if (data.resultCode === 0) {
        dispatch(action)
    }
    dispatch(toggleIsFollowing(false, userId));
}
export const followThunk = userId =>  dispatch => {
    const methodAPI =  UsersAPI.followUser(userId);
    const action = follow(userId);
    subscribeToUserFlow(userId, methodAPI, action, dispatch)

}
export const unFollowThunk = userId =>  dispatch => {
    const methodAPI =  UsersAPI.unFollowUser(userId);
    const action = unFollow(userId);
    subscribeToUserFlow(userId, methodAPI, action, dispatch)

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
export default usersReducer
