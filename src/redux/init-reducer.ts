import {authMeThunk} from "./auth-reducer";

const INIT = 'social-network/init/INIT';

type InitialStateType = {
    initialized: boolean
}
type InitializedSuccessActionType = {
    type: typeof INIT
}
type ActionAllType = InitializedSuccessActionType

let initialState: InitialStateType = {
    initialized: false,
};
const InitializedSuccess = ():InitializedSuccessActionType => ({type: INIT});
export const InitializationApp = (promise: any) => (dispatch:any) => {
    promise = dispatch(authMeThunk());
    promise.then(() => {
        dispatch(InitializedSuccess())
    })
}


const initReducer = (state = initialState, action: ActionAllType):InitialStateType => {
    switch (action.type) {
        case INIT:
            return {...state, initialized: true};
        default:
            return state
    }
}

export default initReducer
