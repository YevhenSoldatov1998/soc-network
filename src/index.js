import React from 'react';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
export const FAKE = ({type: 'FAKE'})
let rerenderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>, document.getElementById('root'));
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree)
