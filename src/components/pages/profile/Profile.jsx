import React from 'react'
import s from './Profile.module.sass'
import MyPostsContainer from "./myPosts/MyPostsContainer";
import MyInfoContainer from "./myInfo/MyInfoContainer";

const Profile = () => {
    return (
        <div className={s.profile}>
            <MyInfoContainer/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile