import React from 'react'
import s from "../MyPosts.module.sass";

const AddPost = (props) => {

    const handleValue = (e) => {
        let action = {type: 'GET-VALUE-TEXT', target: e.target.value}
        props.methots.dispatch(action)
    }
    const addPostItem = () => {
        let action = {type: 'ADD-POST'}
        props.methots.dispatch(action)

    }
    return (
        <div className={s.addPost}>
                <textarea onChange={handleValue.bind(this)}
                          value={props.textareaValue}
                          placeholder="Add something on wall"/>
            <button
                onClick={addPostItem.bind(this)}>add post
            </button>
        </div>
    )

}

export default AddPost