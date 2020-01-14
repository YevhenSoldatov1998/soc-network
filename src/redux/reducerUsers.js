const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const CURRENT_PAGE = 'CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

export const follow = (userId) => ({type: FOLLOW, userId});
export const unFollow = (userId) => ({type: UN_FOLLOW, userId});
export const setUsers = (users, totalCount) => ({type: SET_USERS, users, totalCount});
export const currentPage = (current) => ({type: CURRENT_PAGE , current})
export const isFetching = (isFetch) => ({type: TOGGLE_IS_FETCHING , isFetch})

const initialState = {
    users: [],
    totalCountUsers: 20,
    countPage: 5,
    currentPage: 1,
    isFetching: true
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
                users: action.users,
                totalCountUsers: action.totalCount
            };
        case CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.current
            };
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetch}
        default:
            return state
    }
}
export default reducerUsers
