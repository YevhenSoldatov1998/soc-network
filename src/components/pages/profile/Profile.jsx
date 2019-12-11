import React from 'react'
import MyPosts from "./myPosts/MyPosts";
import MyInfo from "./myInfo/MyInfo"
import s from './Profile.module.sass'

const Profile = (props) => {
    let {user, textareaValue, posts } = props.profile
    return (
        <div className={s.profile}>
            <MyInfo userInfo={user}/>
            <MyPosts addPost={props.addPost} getValueText={props.getValueText}
                     textareaValue={textareaValue} posts={posts}/>
        </div>
    )
}
export default Profile