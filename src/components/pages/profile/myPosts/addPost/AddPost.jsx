import React from 'react'
import s from "../MyPosts.module.sass";

const AddPost = (props) => {
    debugger
    const handleValue = (e) => {
        props.methots.getValueText(e.target.value)
    }
    const addPostItem = () => {
        props.methots.addPost()

    }
    return (
        <div className={s.addPost}>
                <textarea onChange={handleValue.bind(this)}
                          value={props.textareaValue}
                          placeholder="Add something on wall"/>
            <button
                onClick={addPostItem.bind(this)}>add post</button>
        </div>
    )

}

export default AddPost