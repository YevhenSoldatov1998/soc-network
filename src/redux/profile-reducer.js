import {profileAPI} from "../services/profile";
import {stopSubmit} from "redux-form";

const GET_VALUE_TEXT = 'social-network/profile/GET_VALUE_TEXT';
const ADD_POST = 'social-network/profile/ADD_POST';
const SET_USER_API = 'social-network/profile/SET_USER_API';
const TOGGLE_IS_FETCHING = 'social-network/profile/TOGGLE_IS_FETCHING_PROFILE';
const USER_STATUS = 'social-network/profile/USER_STATUS';

export const getValueTextCreator = text => ({type: GET_VALUE_TEXT, target: text});
export const addPostItem = body => ({type: ADD_POST, body});
export const setUserAPI = userAPI => ({type: SET_USER_API, userAPI});
export const toggleIsFetchingProfile = isFetchingProfile => ({type: TOGGLE_IS_FETCHING, isFetchingProfile});
export const UserStatus = status => ({type: USER_STATUS, status});

export const getUserProfileThunk = userId => async dispatch => {
    dispatch(toggleIsFetchingProfile(true));

    let response = await profileAPI.getUserProfile(userId);
    dispatch(setUserAPI(response.data));
    dispatch(toggleIsFetchingProfile(false));
}
export const getUserStatus = userId => async dispatch => {
    let data = await profileAPI.getUserStatus(userId);
    dispatch(UserStatus(data))
};
export const userStatusUpdate = status => async dispatch => {
    let res = await profileAPI.setUserStatus(status);
    if (res.data.resultCode === 0) {
        dispatch(UserStatus(status))
    }
};
export const updateProfileData = (entireObj, userId) => (dispatch, getState) => {
    let id = getState().auth.id;

    profileAPI.updateProfileData(entireObj).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(getUserProfileThunk(id))
            }
            else if(res.data.resultCode === 1){
               dispatch(stopSubmit('profileData', {_error: res.data.messages[0]}))
            }
        }
    );
}
let initialState = {
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
    textareaValue: 'some text',
    isFetchingProfile: false,
    status: ''

}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VALUE_TEXT:
            return {...state, textareaValue: action.target};
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
