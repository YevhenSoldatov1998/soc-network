import {combineReducers, createStore,  applyMiddleware, compose} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from "redux-form";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import initReducer from "./init-reducer";

export let reducers = combineReducers({
    messages: messageReducer,
    profile: profileReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer,
    init: initReducer
})

let store = createStore(reducers,  compose(applyMiddleware(thunkMiddleware) , composeWithDevTools()));

export default store
window.store = store

