import React from 'react'
import s from './MyPosts.module.sass'
import Post from './post/Post'
import AddPostContainer from "./addPost/AddPostContainer";


const MyPosts = (props) => {

    return (
        <div className={`${s.myposts} padding`}>

            <AddPostContainer dispatch={props.methots} textareaValue={props.textareaValue}/>
            <div className={s.posts}>
                {props.posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        </div>


    )
}


export default MyPosts