import {authMeAPI} from "../services/authMe";
import {getCaptchaUrl} from "../services/captcha"
import {stopSubmit} from 'redux-form';

const GET_AUTH_USER = 'soc-network/auth/GET_AUTH_USER';
const GET_CAPTCHA_URL = 'soc-network/auth/GET_CAPTCHA_URL';
const CLEAN_CAPTCHA = 'soc-network/auth/CLEAN_CAPTCHA';


export const getAuthUser = (id, login, email, auth) => ({type: GET_AUTH_USER, data: {id, login, email}, auth});
export const getCaptcha = (url) => ({type: GET_CAPTCHA_URL, url});
export const cleanCaptcha = () => ({type: CLEAN_CAPTCHA});
export const authMeThunk = () => async dispatch => {
    let res = await authMeAPI.authMe()
    let {id, login, email} = res.data.data;
    let auth = res.data.resultCode === 0 ? true : false;
    dispatch(getAuthUser(id, login, email, auth))
}
export const signInThunk = (email, password, rememberMe = false, captcha) => async dispatch => {
    let res = await authMeAPI.signIn(email, password, rememberMe, captcha);
    switch (res.data.resultCode) {
        case 0:
            dispatch(authMeThunk());
        case 1:
            dispatch(stopSubmit('login', {_error: res.data.messages[0]}));
        case 10:
            getCaptchaUrl().then(url => {
                dispatch(getCaptcha(url))
            })
        default:
            return false
    }

}
export const logout = () => async dispatch => {
    let res = await authMeAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(getAuthUser(null, null, null, false))
        dispatch(cleanCaptcha())
    }
}


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchURL: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_AUTH_USER:
            return {...state, ...action.data, isAuth: action.auth};
        case CLEAN_CAPTCHA:
            return {...state, captchURL: null};
        case GET_CAPTCHA_URL:
            return {...state, captchURL: action.url};

        default:
            return state
    }
}

export default authReducer
