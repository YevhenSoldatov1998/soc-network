import React, {Fragment} from 'react'
import s from './user.module.sass'
import * as axios from "axios";

const User = (props) => {
    if (props.users.length < 10) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)

        })

    }
    const callHandleUnFollow = (user) => {
        let userId = user.id;
        props.handleUnFollow(userId)
    };
    const callHandleFollow = (user) => {
        let userId = user.id;
        props.handleFollow(userId)
    };
    return (
        <Fragment>
            {props.users.map(user => {
                return (
                    <article key={user.id} className={s.user}>
                        <div>
                            <img
                                className={s.photo}
                                src={user.photos.small === null ? `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS61kNrhKiJZAbnnrkEvtuzclNCU8RxIbkDqp3I3Ibz5cJlSXA-yw&s` : user.photos.small}
                                alt=""/>
                            {user.followed ?
                                <button onClick={callHandleUnFollow.bind(this, user)} className={s.btn}>Un follow</button>
                                :<button onClick={callHandleFollow.bind(this, user)} className={s.btn}>Follow</button>
                            }
                        </div>
                        <div>
                            <h3>{`${user.name} `}</h3>
                            <p>{`${user.status}`}</p>
                            <div>
                                <span>{user.country}</span>
                                <span>{user.location}</span>
                            </div>
                        </div>
                    </article>
                )
            })}
        </Fragment>


    )
}
export default User