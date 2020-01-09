
const GET_AUTH_USER = 'GET_AUTH_USER';
export const getAuthUser = (userId, login, email) => ({GET_AUTH_USER, data: {userId, login, email}});

let initialState = {
    id: null,
    login: null,
    email: null
}
const reducerAuth = (state = initialState, action) => {
    switch(action.type) {
        case GET_AUTH_USER:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}
export default reducerAuth