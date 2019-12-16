import React from 'react'
import s from "../MyPosts.module.sass";
import {addPostCreator, getValueTextCreator} from "../../../../../redux/store";

const AddPost = (props) => {

    const handleValue = (e) => {
        let text = e.target.value
        props.dispatch(getValueTextCreator(text))
    }
    const addPostItem = () => {
        props.dispatch(addPostCreator())
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