import React from 'react'
import MyPosts from "./myPosts/MyPosts";
import MyInfo from "./myInfo/MyInfo"
import s from './Profile.module.sass'

const Profile = (props) => {
    debugger
    let {user, textareaValue, posts} = props.profile
    return (
        <div className={s.profile}>
            <MyInfo userInfo={user}/>
            <MyPosts methots={props.dispatch}
                     textareaValue={textareaValue}
                     posts={posts}
            />
        </div>
    )
}
export default Profile