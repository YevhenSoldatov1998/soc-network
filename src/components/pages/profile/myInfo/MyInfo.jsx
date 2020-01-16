import React from 'react'
import s from './MyInfo.module.sass'
import MyInfoItem from "./myInfoItem/MyInfoItem";
import Preloader from "../../../common/preloader";

class MyInfo extends React.Component {

    // callIsShowFullInformation = () =>{
    //     this.props.isShowFullInformation()
    // }

    render() {
        return (
            <div className={s.user_descr}>
                <div className={s.cover}></div>
                <div className={s.avatar_wrap}>
                    <div className={s.avatar}>
                        <img
                            src={this.props.userAPI.photos.large?this.props.userAPI.photos.large:'https://w5insight.com/wp-content/uploads/2014/07/placeholder-user-400x400.png'}/>
                            <span>{this.props.userAPI.aboutMe}</span>
                    </div>
                    <div className={s.user_info}>
                        <MyInfoItem userAPI = {this.props.userAPI}
                         />
                        <div className={`${s.show}`}>
                            <span onClick={this.callIsShowFullInformation}>Show full information</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default MyInfo
