import React, {Fragment} from 'react'
import s from './user.module.sass'
import * as axios from "axios";

class User extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPageNumber}&count=${this.props.countPage}`).then(response => {
            this.props.setUsers(response.data.items, response.data.totalCount)
        })
    }

    callHandleUnFollow = (user) => {
        let userId = user.id;
        this.props.handleUnFollow(userId)
    };
    callHandleFollow = (user) => {
        let userId = user.id;
        this.props.handleFollow(userId)
    };
    callCurrentPage = (i) => {
        debugger
        this.props.currentPage(i)
    }

    render() {
        let allPages = Math.ceil(this.props.totalCountUsers / this.props.countPage);
        let pages = [];
        for (let i = 1; i <= allPages; i++) {
            pages.push(i)
        }
        return (
            <Fragment>
                <div className={s.pagination}>
                    {pages.map(i => {
                        return <span onClick={this.callCurrentPage.bind(this, i)}
                                     className={this.props.currentPageNumber === i && s.active}>{i}</span>
                    })}
                </div>
                {this.props.users.map(user => {
                    return (
                        <article key={user.id} className={s.user}>
                            <div>
                                <img
                                    className={s.photo}
                                    src={user.photos.small === null ? `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS61kNrhKiJZAbnnrkEvtuzclNCU8RxIbkDqp3I3Ibz5cJlSXA-yw&s` : user.photos.small}
                                    alt=""/>
                                {user.followed ?
                                    <button onClick={this.callHandleUnFollow.bind(this, user)} className={s.btn}>Un
                                        follow</button>
                                    : <button onClick={this.callHandleFollow.bind(this, user)}
                                              className={s.btn}>Follow</button>
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

}

export default User