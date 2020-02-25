import {authMeAPI} from "../services/authMe";
import {getCaptchaUrl} from "../services/captcha"
import {stopSubmit} from 'redux-form';

//CONSTANTS
const GET_AUTH_USER = 'soc-network/auth/GET_AUTH_USER';
const GET_CAPTCHA_URL = 'soc-network/auth/GET_CAPTCHA_URL';
const CLEAN_CAPTCHA = 'soc-network/auth/CLEAN_CAPTCHA';

//ACTION TYPES || INTERFACES
type UserDataType = {
    id: number | null
    login: string | null
    email: string | null
}
type GetAuthUserType = {
    type: typeof GET_AUTH_USER
    data: UserDataType
    auth: boolean
}
type GetCaptchaType = {
    type: typeof GET_CAPTCHA_URL
    url: string
}
type CleanCaptchaType = {
    type: typeof CLEAN_CAPTCHA
}
type ActionAllTypes =  GetAuthUserType
    | GetCaptchaType
    | CleanCaptchaType

//ACTION CREATORS
export const getAuthUser = (id: number | null, login: string | null, email: string | null, auth: boolean): GetAuthUserType => ({
    type: GET_AUTH_USER,
    data: {id, login, email},
    auth
});
export const getCaptcha = (url: string): GetCaptchaType => ({type: GET_CAPTCHA_URL, url});
export const cleanCaptcha = (): CleanCaptchaType => ({type: CLEAN_CAPTCHA});

//THUNK
export const authMeThunk = () => async (dispatch: any) => {
    let res = await authMeAPI.authMe()
    let {id, login, email} = res.data.data;
    let auth = res.data.resultCode === 0;
    dispatch(getAuthUser(id, login, email, auth))
}
export const signInThunk = (email: string, password: string, rememberMe: boolean = false, captcha: string) => async (dispatch: any) => {
    let res = await authMeAPI.signIn(email, password, rememberMe, captcha);
    switch (res.data.resultCode) {
        case 0:
            dispatch(authMeThunk());
        case 1:
            dispatch(stopSubmit('login', {_error: res.data.messages[0]}));
        case 10:
            getCaptchaUrl().then((url:any) => {
                dispatch(getCaptcha(url))
            })
        default:
            return false
    }

}
export const logout = () => async (dispatch: any) => {
    let res = await authMeAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(getAuthUser(null, null, null, false))
        dispatch(cleanCaptcha())
    }
}

//STATE TYPE
export type InitialStateType = {
    id: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean,
    captchURL: string | null
}

//INITIAL STATE
let initialState: InitialStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchURL: null
}

// REDUCER
const authReducer = (state: InitialStateType = initialState, action: ActionAllTypes):InitialStateType => {
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
