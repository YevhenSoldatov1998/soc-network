import React, {useState} from 'react'
import s from "../users.module.sass";
import User from "./User";
import Pagination from "../pagination/Pagination";
import PopupSendMessage from "../../../common/popup/PopupSendMessage";

const Users = (props) => {
    const [showPopupSendMessage, setShowPopupSendMessage] = useState(false);
    const [currentUserId, setCurrentUserId] = useState(null);
    const handleSubmit = (body) => {
        if (currentUserId) {
            props.sendMessage(currentUserId, body.sendMessage);
            setShowPopupSendMessage(false);
        }
    }
    return (
        <div className={s.users}>
            {showPopupSendMessage && <PopupSendMessage handleSubmit={handleSubmit}/>}
            <Pagination callCurrentPage={props.callCurrentPage}
                        currentPageNumber={props.currentPageNumber}
                        totalCountUsers={props.totalCountUsers}
                        countPage={props.countPage}/>

            {props.users.map(user => {
                return (
                    <User
                        isAuth={props.isAuth}
                        user={user}
                        follow={props.follow}
                        unFollow={props.unFollow}
                        isFollowing={props.isFollowing}
                        setShowPopupSendMessage={setShowPopupSendMessage}
                        setCurrentUserId={setCurrentUserId}
                    />
                )
            })}
        </div>
    )
}
export default Users
