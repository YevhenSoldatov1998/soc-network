import {combineReducers, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import reducerProfile from "./reducerProfile";
import reducerMessage from "./reducerMessage";
import reducerSidebar from "./reducerSidebar";

export let reducers = combineReducers({
    messages: reducerMessage,
    profile: reducerProfile,
    sidebar: reducerSidebar
})

let store = createStore(reducers, composeWithDevTools() );
export default store
window.store = store

