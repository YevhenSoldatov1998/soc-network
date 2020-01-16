import React from 'react'
import s from './Profile.module.sass'
import Preloader from "../../common/preloader";
import * as axios from 'axios'
import MyInfo from "./myInfo/MyInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import {Redirect} from "react-router-dom";

class Profile extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
       this.props.getUserProfileThunk(userId)
    }

    render() {

        return (
            <div className={s.profile}>
                {this.props.isFetchingProfile ?
                    <Preloader/> :
                    <React.Fragment>
                        {!this.props.userAPI ?
                            false :
                            <>
                            <MyInfo userAPI={this.props.userAPI}/>
                            <MyPostsContainer/>
                            </>
                        }
                    </React.Fragment>
                }

            </div>
        )
    }

}

export default Profile
