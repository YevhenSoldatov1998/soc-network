import React from 'react'
import s from './MyInfoItem.module.sass'
// fullName: "samurai d new name"
// lookingForAJob: true
// lookingForAJobDescription: "не ищу, а дурачусь"
// photos: {small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0", large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"}
// userId: 2
const MyInfoItem = (props) => {
   //  let showDefault = 2;
   //  let userInfoDefaultShow = [];
   // for(let i=0 ; i<showDefault; i++){
   //     userInfoDefaultShow.push(props.userInfo[i])
   // }
    return (
        <article>
            <div className={s.name}>{props.userAPI.fullName}</div>
           <div>looking for a job: {props.userAPI.lookingForAJob?'Yes': 'No'}</div>
        </article>

    )
}
export default MyInfoItem