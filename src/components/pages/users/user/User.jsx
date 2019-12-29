import React from 'react'
import s from "../users.module.sass";
const User = (props) => {
    const callHandleUnFollow = (user) => {
        let id = user.id;
        props.handleUnFollow(id)
    }
    const callHandleFollow = (user) => {
        let id = user.id;
        props.handleFollow(id)
    }
    return (
        <article key={props.user.id} className={s.user}>
            <div>
                <img
                    className={s.photo}
                    src={props.user.photos.small === null ? `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS61kNrhKiJZAbnnrkEvtuzclNCU8RxIbkDqp3I3Ibz5cJlSXA-yw&s` : props.user.photos.small}
                    alt=""/>
                {props.user.followed ?
                    <button onClick={callHandleUnFollow.bind(this, props.user)} className={s.btn}>Un
                        follow</button>
                    : <button onClick={callHandleFollow.bind(this, props.user)}
                              className={s.btn}>Follow</button>
                }
            </div>
            <div>
                <h3>{`${props.user.name} `}</h3>
                <p>{`${props.user.status}`}</p>
                <div>
                    <span>{props.user.country}</span>
                    <span>{props.user.location}</span>
                </div>
            </div>
        </article>
    )
}
export default User