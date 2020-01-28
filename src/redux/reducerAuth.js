import {authMeAPI} from "../services/authMe";
import {getCaptchaUrl} from "../services/captcha"
import { stopSubmit } from 'redux-form';

const GET_AUTH_USER = 'GET_AUTH_USER';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';
const CLEAN_CAPTCHA = 'CLEAN_CAPTCHA';


export const getAuthUser = (id, login, email, auth) => ({type: GET_AUTH_USER, data: {id, login, email}, auth});
export const getCaptcha = (url) => ({type: GET_CAPTCHA_URL, url});
export const cleanCaptcha = () => ({type: CLEAN_CAPTCHA});
export const authMeThunk = () => dispatch => {
    return authMeAPI.authMe()
        .then(res => {
            let {id, login, email} = res.data.data;
            let auth = res.data.resultCode === 0 ? true : false;
            dispatch(getAuthUser(id, login, email, auth))
        })
}
export const signInThunk = (email, password, rememberMe = false, captcha) => dispatch => {
    authMeAPI.signIn(email, password, rememberMe, captcha).then(res => {
        switch (res.data.resultCode) {
                case 0:
                    dispatch(authMeThunk());
                case 1:
                    dispatch(stopSubmit('login', { _error: res.data.messages[0]}));
                case 10:
                    getCaptchaUrl().then(url => {
                        dispatch(getCaptcha(url))
                    })
            }
        }
    )
}
export const logout = () => dispatch => {
    authMeAPI.logout().then(res => {
        if (res.data.resultCode === 0) {
            dispatch(getAuthUser(null, null, null, false))
            dispatch(cleanCaptcha())
        }
    })
}
let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchURL: null
}

const reducerAuth = (state = initialState, action) => {
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

export default reducerAuth
