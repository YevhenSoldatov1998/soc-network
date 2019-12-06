import React from 'react'
import s from "../MyPosts.module.sass";
const AddPost  = (props) => {
    return(
        <div className={s.addPost}>
            <textarea placeholder="Add something on wall"></textarea>
            <button>add post</button>
        </div>
    )
}
export default AddPost