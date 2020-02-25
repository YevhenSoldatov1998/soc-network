import {UsersAPI} from "../services/users";
import {updateObjectInArray} from "../utility/objectUpdate";
import {UserType} from "../types/types";

// CONSTANTS
const FOLLOW = 'social-network/user/FOLLOW';
const UN_FOLLOW = 'social-network/user/UN_FOLLOW';
const SET_USERS = 'social-network/user/SET_USERS';
const CURRENT_PAGE = 'social-network/user/CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'social-network/user/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'social-network/user/TOGGLE_IS_FOLLOWING';

// ACTION TYPES
type SetUserType = {
    type: typeof SET_USERS
    users: Array<UserType>
    totalCount: number
}
type FollowType = {
    type: typeof FOLLOW
    userId: number
}
type Un_FollowType = {
    type: typeof UN_FOLLOW
    userId: number
}
type CurrentPageType = {
    type: typeof CURRENT_PAGE
    current: number
}
type IsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetch: boolean
}
type ToggleIsFollowingType = {
    type: typeof TOGGLE_IS_FOLLOWING
    isFetch: boolean
    id: number
}

// ACTION TYPE ALL
type ActionTypeAll = FollowType
    | Un_FollowType
    | SetUserType
    | CurrentPageType
    | IsFetchingType
    | ToggleIsFollowingType

// ACTION CREATOR
export const follow = (userId: number): FollowType => ({type: FOLLOW, userId});
export const unFollow = (userId: number):Un_FollowType  => ({type: UN_FOLLOW, userId});
export const setUsers = (users: Array<UserType>, totalCount: number):SetUserType  => ({type: SET_USERS, users, totalCount});
export const currentPage = (current: number): CurrentPageType => ({type: CURRENT_PAGE, current});
export const isFetching = (isFetch: boolean): IsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetch});
export const toggleIsFollowing = (isFetch: boolean, id: number):ToggleIsFollowingType => ({type: TOGGLE_IS_FOLLOWING, isFetch, id});

// ACTION THUNK
export const getUsersThunk = (currentPage: number, countPage: number) => async (dispatch:any) => {
    dispatch(isFetching(true));

    let response = await UsersAPI.getUser(currentPage, countPage);
    dispatch(setUsers(response.items, response.totalCount));
    dispatch(isFetching(false));
}
const subscribeToUserFlow = async (userId: number, methodAPI:any , action: any, dispatch: any) => {
    dispatch(toggleIsFollowing(true, userId));
    let data = await methodAPI;
    if (data.resultCode === 0) {
        dispatch(action)
    }
    dispatch(toggleIsFollowing(false, userId));
}
export const followThunk = (userId: number) => (dispatch: any) => {
    subscribeToUserFlow(userId, UsersAPI.followUser(userId), follow(userId), dispatch)

}
export const unFollowThunk = (userId: number) => (dispatch: any) => {
    subscribeToUserFlow(userId, UsersAPI.unFollowUser(userId), unFollow(userId), dispatch)

};

// STATE TYPE
type InitialStateType = {
    users: Array<UserType>
    totalCountUsers: number
    countPage: number
    currentPage: number
    isFetching: boolean
    isFollowing: Array<number> //array of users id
}

// INITIAL STATE
const initialState: InitialStateType = {
    users: [],
    totalCountUsers: 20,
    countPage: 5,
    currentPage: 1,
    isFetching: true,
    isFollowing: []
};

//REDUCER
const usersReducer = (state = initialState, action: ActionTypeAll): InitialStateType => {
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
