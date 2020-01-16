import {authMeAPI} from "../services/authMe";

const GET_AUTH_USER = 'GET_AUTH_USER';

export const getAuthUser = (id, login, email ,auth) => ({type: GET_AUTH_USER, data: {id, login, email},auth});

export const authMeThunk = () => dispatch => {
    authMeAPI.authMe()
        .then(res => {
            let {id,login,email} = res.data.data;
            let auth = res.data.resultCode === 0?true:false;
            dispatch(getAuthUser(id,login,email, auth))
        })
}

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
}
const reducerAuth = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTH_USER:
      return {...state, ...action.data , isAuth: action.auth};
    default:
      return state
  }
}
export default reducerAuth
