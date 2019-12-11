import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

export let rerenderEntireTree = (store, addPost, getValueText) => {
    ReactDOM.render(<App data={store} addPost={addPost} getValueText={getValueText}/>, document.getElementById('root'));
}
