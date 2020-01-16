import {authMeAPI} from "../services/authMe";

const GET_AUTH_USER = 'GET_AUTH_USER';

export const getAuthUser = (id, login, email) => ({type: GET_AUTH_USER, data: {id, login, email}});

export const authMeThunk = () => dispatch => {
    authMeAPI.authMe()
        .then(res => {
            let {id,login,email} = res.data;
            dispatch(getAuthUser(id,login,email))
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
      return {...state, ...action.data , isAuth: true};
    default:
      return state
  }
}
export default reducerAuth
