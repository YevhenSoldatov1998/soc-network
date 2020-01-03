import React from 'react'
import s from './Profile.module.sass'
import MyPostsContainer from "./myPosts/MyPostsContainer";
import Preloader from "../../common/preloader";
import * as axios from 'axios'
import MyInfo from "./myInfo/MyInfo";

class Profile extends React.Component {

    constructor(props) {
        debugger
        super(props)
    }


    componentDidMount() {
        debugger
        this.props.toggleIsFetchingProfile(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                debugger
                this.props.setUserAPI(response.data);
                this.props.toggleIsFetchingProfile(false);
            });
    }

    render() {
        debugger
        return (
            <div className={s.profile}>
                {this.props.isFetchingProfile ?
                    <Preloader/> :
                    <React.Fragment>
                        {!this.props.userAPI ?
                            false :
                            <MyInfo userAPI={this.props.userAPI}/>
                        }
                         {/*<MyInfo userAPI={this.props.userAPI}/>
                         <MyPostsContainer/>*/}
                    </React.Fragment>
                }

            </div>
        )
    }

}

export default Profile