import React from 'react'
import s from "../MyPosts.module.sass";

const AddPost = (props) => {
    const handleValue = (e) => {
        props.getValueText(e.target.value)
    }
    const addPostItem = () => {
        props.addPost()

    }
    return (
        <div className={s.addPost}>
                <textarea onChange={handleValue.bind(this)}
                          value={props.textareaValue}
                          placeholder="Add something on wall"/>
            <button
                onClick={addPostItem.bind(this) }>add post</button>
        </div>
    )

}

export default AddPost