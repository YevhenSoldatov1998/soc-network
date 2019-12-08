import React from 'react'
import MyPosts from "./myPosts/MyPosts";
import MyInfo from "./myInfo/MyInfo"
import s from './Profile.module.sass'
class Profile extends React.Component{
    render(){
        return (
            <div className={s.profile}>
                <MyInfo />
                <MyPosts posts={this.props.posts} />
            </div>
        )
    }
}
export default Profile