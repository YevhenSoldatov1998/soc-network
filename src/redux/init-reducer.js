import {authMeThunk} from "./auth-reducer";

const INIT = 'social-network/init/INIT';

let initialState = {
    initialized: false,
};
const InitializedSuccess = () => ({type: INIT});

export const InitializationApp = (promise) => dispatch => {
    promise = dispatch(authMeThunk());
    promise.then(() => {
        dispatch(InitializedSuccess())
    })
}

const initReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT:
            return {...state, initialized: true};
        default:
            return state
    }
}

export default initReducer
