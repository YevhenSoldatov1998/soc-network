import {combineReducers, createStore,  applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import reducerProfile from "./reducerProfile";
import reducerMessage from "./reducerMessage";
import reducerSidebar from "./reducerSidebar";
import reducerUsers from "./reducerUsers";
import reducerAuth from "./reducerAuth";

export let reducers = combineReducers({
    messages: reducerMessage,
    profile: reducerProfile,
    sidebar: reducerSidebar,
    users: reducerUsers,
    auth: reducerAuth
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store
window.store = store

