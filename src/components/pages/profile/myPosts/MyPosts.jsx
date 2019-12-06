import React from 'react'
import s from './MyPosts.module.sass'
import AddPost from "./addPost/AddPost";
import Post from './post/Post'

class MyPosts extends React.Component {
    render() {
        return (
            <div className={`${s.myposts} padding`}>
                <AddPost/>
                <div className={s.posts}>
                    <Post
                        src="https://cdn.iconscout.com/wordpress/2018/01/cyberpunk-girl-infographic-element-by-csaba-gyulai.png"
                        text="I love this page!!!)"/>
                    <Post
                        src="https://icon-library.net/images/cyberpunk-icon/cyberpunk-icon-8.jpg"
                        text = "Hi, man!!! How are you?)" />
                </div>
            </div>


        )
    }
}

export default MyPosts