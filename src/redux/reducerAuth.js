
const GET_AUTH_USER = 'GET_AUTH_USER';

export const getAuthUser = (data) => {
  debugger
  return  {GET_AUTH_USER, data}
};

let initialState = {
    id: null,
    login: null,
    email: null
}
const reducerAuth = (state = initialState, action) => {
    switch(action.type) {
        case GET_AUTH_USER:
          debugger
          alert('er')
            return {
                ...state,
            }
        default:
            return state
    }
}
export default reducerAuth
