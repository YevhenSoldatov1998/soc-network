import React from 'react';
import store, {subscribe , addPost , getValueText} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

let rerenderEntireTree = () => {
    ReactDOM.render(<App data={store} addPost={addPost} getValueText={getValueText}/>, document.getElementById('root'));
}
rerenderEntireTree()
subscribe(rerenderEntireTree)
