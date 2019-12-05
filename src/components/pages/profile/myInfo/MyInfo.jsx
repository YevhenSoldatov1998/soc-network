import React from 'react'
import s from './MyInfo.module.sass'
const MyInfo = () => {
    return (
        <div className={s.user_descr}>
            <div className={s.cover}></div>
            <div className={s.avatar_wrap}>
                <div className={s.avatar}>
                    <img src="https://preview.redd.it/upfimbkddh331.jpg?auto=webp&s=ff4f6d455aa1652ad9ec50c4b753dd2932d901e5" alt=""/>
                </div>
                <div className={s.user_info} >
                    <div className={s.name}>Yevhen Soldatov</div>
                    <div className={s.info}><strong>Birthday</strong> <span>26.10.1998</span></div>
                    <div className={s.info}><strong>Hometown</strong> <span>Lviv</span></div>
                    <div className={`${s.show} ${s.info}`}><strong></strong> <span>Show full information</span></div>
                </div>
            </div>
        </div>
    )
}
export default MyInfo