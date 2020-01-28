import {authMeThunk} from "./reducerAuth";

const INIT = 'INIT';

let initialState = {
    initialized: false,
}
const InitializedSuccess = () => ({type: INIT});

export const InitializationApp = (promise) => dispatch => {
    promise = dispatch(authMeThunk());
    promise.then(() => {
        dispatch(InitializedSuccess())
    })
}
const reducerInit = (state = initialState, action) => {
    switch (action.type) {
        case INIT:
            return {...state, initialized: true};
        default:
            return state
    }
}

export default reducerInit
