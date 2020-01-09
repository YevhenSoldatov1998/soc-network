import {combineReducers, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

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

let store = createStore(reducers, composeWithDevTools() );
export default store
window.store = store

