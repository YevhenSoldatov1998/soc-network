import React from 'react'
import s from './Profile.module.sass'
import Preloader from "../../common/preloader";
import * as axios from 'axios'
import MyInfo from "./myInfo/MyInfo";

class Profile extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetchingProfile(true);
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                debugger
                this.props.setUserAPI(response.data);
                this.props.toggleIsFetchingProfile(false);
            });
    }

    render() {
        return (
            <div className={s.profile}>
                {this.props.isFetchingProfile ?
                    <Preloader/> :
                    <React.Fragment>
                        {!this.props.userAPI ?
                            false :
                            <MyInfo userAPI={this.props.userAPI}/>

                        }
                    </React.Fragment>
                }

            </div>
        )
    }

}

export default Profile