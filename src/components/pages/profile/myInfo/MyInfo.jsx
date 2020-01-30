import React from 'react'
import s from './MyInfo.module.sass'
import MyInfoItem from "./myInfoItem/MyInfoItem";
import {compose} from "redux";

const MyInfo = (props) => {
    console.log('MyInfo')

    return (
        <div className={s.user_descr}>
            <div className={s.cover}></div>
            <div className={s.avatar_wrap}>
                <div className={s.avatar}>
                    <img
                        src={props.userAPI.photos.large ? props.userAPI.photos.large : 'https://w5insight.com/wp-content/uploads/2014/07/placeholder-user-400x400.png'}/>
                </div>
                <div className={s.user_info}>
                    <MyInfoItem status={props.status}
                                userStatusUpdate={props.userStatusUpdate}
                                userAPI={props.userAPI}
                    />
                </div>
            </div>
        </div>
    )
}

export default compose(React.memo)(MyInfo)
