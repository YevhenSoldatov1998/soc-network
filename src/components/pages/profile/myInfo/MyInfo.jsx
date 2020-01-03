import React from 'react'
import s from './MyInfo.module.sass'
import MyInfoItem from "./myInfoItem/MyInfoItem";
import Preloader from "../../../common/preloader";

class MyInfo extends React.Component {

    // callIsShowFullInformation = () =>{
    //     this.props.isShowFullInformation()
    // }

    render() {
    debugger
        return (
            <div className={s.user_descr}>
                <div className={s.cover}></div>
                <div className={s.avatar_wrap}>
                    <div className={s.avatar}>
                        <img
                            src="https://preview.redd.it/upfimbkddh331.jpg?auto=webp&s=ff4f6d455aa1652ad9ec50c4b753dd2932d901e5"
                            alt=""/>
                    </div>
                    <div className={s.user_info}>
                        <MyInfoItem
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