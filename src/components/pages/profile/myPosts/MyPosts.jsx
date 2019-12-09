import React from 'react'
import s from './MyPosts.module.sass'
import AddPost from "./addPost/AddPost";
import Post from './post/Post'


const MyPosts = (props) => {
    return (
        <div className={`${s.myposts} padding`}>
            <AddPost addPost={props.addPost}/>
            <div className={s.posts}>
                {props.posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        </div>


    )
}


export default MyPosts