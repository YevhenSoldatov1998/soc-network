import React from 'react'
import s from './users.module.sass'
import * as axios from "axios";
import User from "./user/User";

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPageNumber}&count=${this.props.countPage}`).then(response => {
            this.props.setUsers(response.data.items, response.data.totalCount)
        })
    }
    callCurrentPage = (i) => {
        this.props.currentPage(i)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${i}&count=${this.props.countPage}`).then(response => {
            this.props.setUsers(response.data.items, response.data.totalCount)
        })
    }

    render() {
        let allPages = Math.ceil(this.props.totalCountUsers / this.props.countPage);
        let pages = [];
        for (let i = 1; i <= allPages; i++) {
            pages.push(i)
        }
        return (
            <div className={s.users}>
                <div className={s.pagination}>
                    {pages.map(i => {
                        return <span key={i}
                                     className={this.props.currentPageNumber === i ? `${s.active}`: ``}
                                    onClick={this.callCurrentPage.bind(this, i)}
                        >{i}</span>
                    })}
                </div>
                {this.props.users.map(user => {
                    return (
                       <User
                           handleFollow={this.props.handleFollow}
                           handleUnFollow = {this.props.handleUnFollow}
                           user={user}

                       />
                    )
                })}
            </div>
        )
    }

}

export default Users