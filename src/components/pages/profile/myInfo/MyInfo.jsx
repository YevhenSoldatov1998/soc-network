import React from 'react'
import s from './MyInfo.module.sass'
import MyInfoItem from "./myInfoItem/MyInfoItem";

class MyInfo extends React.Component{

   constructor(props){
       super(props);
       debugger

       this.state = {
           allInfo: false
       }
   }

    hadleShowMore(){
      this.setState({
          allInfo: !this.state.allInfo
      })
    }
    render(){
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
                        <MyInfoItem allInfo={this.state.allInfo} user={this.props.userInfo}/>
                        <div className={`${s.show}`}><span onClick={this.hadleShowMore.bind(this)}>Show full information</span></div>
                    </div>
                </div>
            </div>
        )
    }

}
export default MyInfo