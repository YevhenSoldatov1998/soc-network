import React from 'react'
import s from './MyPosts.module.sass'
import AddPost from "./addPost/AddPost";
import Posts from "./posts/posts";


const MyPosts = (props) => {
    return (
        <div className={`${s.myPosts} padding`}>
            <AddPost addPostItem={props.addPostItem}
                     handleValue = {props.handleValue}
                     textareaValue = {props.profile.textareaValue}
            />
            <Posts posts={props.profile.posts}/>
        </div>
    )
}


export default MyPosts