import React from 'react'
import s from './Profile.module.sass'
import Preloader from "../../common/preloader";
import MyInfo from "./myInfo/MyInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import {sendMessage} from "../../../redux/message-reducer";

class Profile extends React.PureComponent {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.myId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfileThunk(userId);
        this.props.getUserStatus(userId);

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
                                <MyInfo status={this.props.status}
                                        userStatusUpdate={this.props.userStatusUpdate}
                                        userAPI={this.props.userAPI}
                                        userId={this.props.match.params.userId}
                                        myId={this.props.myId}
                                        sendMessage = {this.props.sendMessage}
                                />
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
