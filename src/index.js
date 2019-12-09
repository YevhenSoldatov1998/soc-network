import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/state'
import {addPost} from "./redux/state";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App addPost={addPost} data={store}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
