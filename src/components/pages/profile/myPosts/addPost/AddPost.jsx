import React from 'react'
import s from "../MyPosts.module.sass";

const AddPost = (props) => {
    const handleValueCurrent = (e) => {
        debugger
        let text = e.target.value
        props.handleValue(text)
    }
    const addPostItemCurrent = () => {
        props.addPostItem()
    }
    return (
        <div className={s.addPost}>
                <textarea onChange={handleValueCurrent.bind(this)}
                          value={props.textareaValue}
                          placeholder="Add something on wall"/>
            <button
                onClick={addPostItemCurrent.bind(this)}>add post
            </button>
        </div>
    )

}

export default AddPost