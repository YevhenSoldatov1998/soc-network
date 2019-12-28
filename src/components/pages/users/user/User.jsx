import React, {Fragment} from 'react'
import s from './user.module.sass'
const User = (props) => {
  if(props.users.length === 0) {
      props.setUsers([
          {
              id: 1,
              isFollow: true,
              firstName: 'Alex',
              lastName: 'Merser',
              status: 'I am FrontEnd developer',
              country: 'Ukraine',
              location: 'Lviv'
          },
          {
              id: 2,
              isFollow: false,
              firstName: 'John',
              lastName: 'Keiv',
              status: 'I am BackEnd developer',
              country: 'USA',
              location: 'New York'
          },
          {
              id: 3,
              isFollow: true,
              firstName: 'Anastasia',
              lastName: 'Kovtun',
              status: 'I am not developer',
              country: 'Ukraine',
              location: 'Lviv'
          },
          {
              id: 4,
              isFollow: false,
              firstName: 'Yevhen',
              lastName: 'Soldatov',
              status: 'I am FrontEnd developer too',
              country: 'Ukraine',
              location: 'Lviv'
          },
      ])    
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
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS61kNrhKiJZAbnnrkEvtuzclNCU8RxIbkDqp3I3Ibz5cJlSXA-yw&s"
                                alt=""/>
                            {user.isFollow ?
                                <button onClick={callHandleUnFollow.bind(this , user)} className={s.btn}>Un follow</button> :
                                <button onClick={callHandleFollow.bind(this , user)} className={s.btn}>Follow</button>
                            }
                        </div>
                        <div>
                            <h3>{`${user.firstName} ${user.lastName}`}</h3>
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