import React from 'react';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from 'react-redux'

let rerenderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>, document.getElementById('root'));
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree)
