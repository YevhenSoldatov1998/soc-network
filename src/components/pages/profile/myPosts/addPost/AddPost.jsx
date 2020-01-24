import React from 'react'
import s from "../MyPosts.module.sass";
import AddPostForm from "./AddPostFom";
import handleSubmit from "redux-form/lib/handleSubmit";
import {reduxForm} from "redux-form";

const AddPost = (props) => {

    const handleSubmit = (value) => {
        props.addPostItem(value.textareaBody)
    }
    return (
        <div className={s.addPost}>
             <AddPostReduxPost onSubmit = {handleSubmit}/>
        </div>
    )

}
const AddPostReduxPost = reduxForm({form: 'profilePost'})(AddPostForm);

export default AddPost
