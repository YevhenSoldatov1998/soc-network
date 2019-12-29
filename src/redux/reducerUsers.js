const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const CURRENT_PAGE = 'CURRENT_PAGE'

export const FOLLOW_CREATOR = (userId) => ({type: FOLLOW, userId});
export const UN_FOLLOW_CREATOR = (userId) => ({type: UN_FOLLOW, userId});
export const SET_USERS_CREATOR = (users, totalCount) => ({type: SET_USERS, users, totalCount});
export const CURRENT_PAGE_CREATOR = (current) => ({type: CURRENT_PAGE , current})

const initialState = {
    users: [],
    totalCountUsers: 20,
    countPage: 5,
    currentPage: 1
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
                users: [...state.users, ...action.users],
                // totalCountUsers: action.totalCount
            };
        case CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.current
            };
        default:
            return state
    }
}
export default reducerUsers
