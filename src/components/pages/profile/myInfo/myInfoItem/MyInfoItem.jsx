import React from 'react'
import s from './MyInfoItem.module.sass'

const MyInfoItem = (props) => {
   //  let showDefault = 2;
   //  let userInfoDefaultShow = [];
   // for(let i=0 ; i<showDefault; i++){
   //     userInfoDefaultShow.push(props.userInfo[i])
   // }
    return (
        <article>
            <div className={s.name}>{props.userName.firstName + " " + props.userName.lastName}</div>
            {/*{props.allInfo ?*/}
            {/*    props.userInfo.map(el => <div className={s.info}><strong>{el.nameInfo}</strong> <span>{el.info}</span></div>):*/}
            {/*    userInfoDefaultShow.map(el => <div className={s.info}><strong>{el.nameInfo}</strong> <span>{el.info}</span></div>)*/}
            {/*}*/}
            { props.userInfo.map(el => <div className={s.info}><strong>{el.nameInfo}</strong> <span>{el.info}</span></div>)}
        </article>

    )
}
export default MyInfoItem