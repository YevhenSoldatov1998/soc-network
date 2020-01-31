import React from 'react'
import Users from "./user/Users";
import Preloader from "../../common/preloader";

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPageNumber, this.props.countPage);
    }


    callCurrentPage = (i) => {
        this.props.currentPage(i);
        this.props.getUsers(i, this.props.countPage);
    };

    render() {
        return (
            <div>
                {this.props.isFetching ?
                    <Preloader/> :
                    <Users callCurrentPage={this.callCurrentPage}
                           {...this.props}

                    />}

            </div>
        )
    }

}

export default UsersAPIComponent
