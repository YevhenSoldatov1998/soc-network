const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';

export const FOLLOW_CREATOR = (userId) => ({type: FOLLOW, userId});
export const UN_FOLLOW_CREATOR = (userId) => ({type: UN_FOLLOW, userId});
export const SET_USERS_CREATOR = (users) => ({type: SET_USERS, users});


const initialState = {
    users: []
};
const reducerUsers = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: [...state.users.map(e => {
                    if (e.id === action.userId) {
                        return {...e, followed: true}
                    }
                    return {...e}
                })]
            };
        case UN_FOLLOW:
            return {
                ...state,
                users: [...state.users.map(e => {
                    if (e.id === action.userId) {
                        return {...e, followed: false}
                    }
                    return {...e}
                })]
            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}
export default reducerUsers
