import React from 'react'
import * as axios from "axios";
import Users from "./user/Users";
import Preloader from "../../common/preloader";

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPageNumber}&count=${this.props.countPage}`)
            .then(response => {
                this.props.setUsers(response.data.items, response.data.totalCount);
                this.props.toggleIsFetching(false);
            })
    }

    callCurrentPage = (i) => {
        this.props.toggleIsFetching(true);

        this.props.currentPage(i);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${i}&count=${this.props.countPage}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items, response.data.totalCount);
            })
    }

    render() {
        let allPages = Math.ceil(this.props.totalCountUsers / this.props.countPage);
        let pages = [];
        for (let i = 1; i <= allPages; i++) {
            pages.push(i);
        }
        return (
            <div>
                {this.props.isFetching ?
                   <Preloader/>:
                    <Users pages={pages}
                           currentPageNumber={this.props.currentPageNumber}
                           users={this.props.users}
                           handleFollow={this.props.handleFollow}
                           handleUnFollow={this.props.handleUnFollow}
                           callCurrentPage={this.callCurrentPage}
                    />}

            </div>
        )
    }

}

export default UsersAPIComponent