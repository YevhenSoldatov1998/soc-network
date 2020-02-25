import {profileAPI} from "../services/profile";
import {stopSubmit} from "redux-form";
import {InitialStateType} from "../types/types";

//CONSTANTS
const GET_VALUE_TEXT = 'social-network/profile/GET_VALUE_TEXT';
const ADD_POST = 'social-network/profile/ADD_POST';
const SET_USER_API = 'social-network/profile/SET_USER_API';
const TOGGLE_IS_FETCHING = 'social-network/profile/TOGGLE_IS_FETCHING_PROFILE';
const USER_STATUS = 'social-network/profile/USER_STATUS';

//ACTION TYPES
type GetValueTextCreatorActionType = {
    type: typeof GET_VALUE_TEXT
    target: string
}
type AddPostItemActionType = {
    type: typeof ADD_POST
    body: string
}
type SetUserAPIActionType = {
    type: typeof SET_USER_API
    userAPI: any
}
type ToggleIsFetchingProfile = {
    type: typeof TOGGLE_IS_FETCHING
    isFetchingProfile: boolean
}
type UserStatusType = {
    type: typeof USER_STATUS
    status: string
}

//ACTION TYPE All
type ActionAllTypes = GetValueTextCreatorActionType
    | AddPostItemActionType
    | SetUserAPIActionType
    | ToggleIsFetchingProfile
    | UserStatusType

//ACTION CREATOR
export const getValueTextCreator = (text:string):GetValueTextCreatorActionType => ({type: GET_VALUE_TEXT, target: text});
export const addPostItem = (body:string): AddPostItemActionType => ({type: ADD_POST, body});
export const setUserAPI = (userAPI: any): SetUserAPIActionType => ({type: SET_USER_API, userAPI});
export const toggleIsFetchingProfile = (isFetchingProfile:boolean): ToggleIsFetchingProfile => ({type: TOGGLE_IS_FETCHING, isFetchingProfile});
export const UserStatus = (status:string): UserStatusType => ({type: USER_STATUS, status});

//THUNK ACTION
export const getUserProfileThunk = (userId:string) => async (dispatch:any) => {
    dispatch(toggleIsFetchingProfile(true));
    let response = await profileAPI.getUserProfile(userId);
    dispatch(setUserAPI(response.data));
    dispatch(toggleIsFetchingProfile(false));
}
export const getUserStatus = (userId:string) => async (dispatch:any) => {
    let data = await profileAPI.getUserStatus(userId);
    dispatch(UserStatus(data))
};
export const userStatusUpdate = (status:string) => async (dispatch:any) => {
    let res = await profileAPI.setUserStatus(status);
    if (res.data.resultCode === 0) {
        dispatch(UserStatus(status))
    }
};
export const updateProfileData = (entireObj: any, userId: string) => (dispatch: any, getState: any) => {
    let id = getState().auth.id;

    profileAPI.updateProfileData(entireObj).then((res: any) => {
            if (res.data.resultCode === 0) {
                dispatch(getUserProfileThunk(id))
            }
            else if(res.data.resultCode === 1){
               dispatch(stopSubmit('profileData', {_error: res.data.messages[0]}))
            }
        }
    );
}

// STATE TYPE

//INITIAL STATE
let initialState:InitialStateType = {
    userAPI: {
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: null,
        userId: null,
        photos: {
            small: null,
            large: null
        }
    },
    posts: [
        {
            id: 1,
            src: 'https://cdn.iconscout.com/wordpress/2018/01/cyberpunk-girl-infographic-element-by-csaba-gyulai.png',
            text: 'I love this page!!!)'
        },
        {
            id: 2,
            src: 'https://icon-library.net/images/cyberpunk-icon/cyberpunk-icon-8.jpg',
            text: 'Hi!!! How are you?)'
        },
        {
            id: 3,
            src: 'https://cdn.iconscout.com/wordpress/2018/01/cyberpunk-girl-infographic-element-by-csaba-gyulai.png',
            text: 'I am OK!!)'
        },
    ],
    isFetchingProfile: false,
    status: ''

}

//REDUCER
const profileReducer = (state = initialState, action: ActionAllTypes): InitialStateType=> {
    switch (action.type) {
        case GET_VALUE_TEXT:
            return {...state};
        case ADD_POST:
            let getLastElement = state.posts[state.posts.length - 1].id;
            let obj = {
                id: getLastElement++,
                src: 'https://icon-library.net/images/cyberpunk-icon/cyberpunk-icon-8.jpg',
                text: action.body,
            };
            return {...state, posts: [...state.posts, obj]};

        case SET_USER_API:
            return {
                ...state,
                userAPI: action.userAPI
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetchingProfile: action.isFetchingProfile
            };
        case USER_STATUS:
            return {
                ...state, status: action.status
            }

        default:
            return state
    }

}
export default profileReducer
