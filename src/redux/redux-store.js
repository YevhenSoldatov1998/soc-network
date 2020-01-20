import {combineReducers, createStore,  applyMiddleware, compose} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from "redux-form";
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
    auth: reducerAuth,
    form: formReducer
})

let store = createStore(reducers,  compose(applyMiddleware(thunkMiddleware) , composeWithDevTools()));

export default store
window.store = store

