import React, {FC, useState} from 'react'
import s from './MyInfo.module.sass'
import MyInfoItem from "./myInfoItem/MyInfoItem";
import {compose} from "redux";
import PopupSendMessage from "../../../common/popup/PopupSendMessage";
import {StateUserAPIType} from "../../../../types/types";

type PropsType = {
    userAPI: StateUserAPIType
    myId: number
    userId: number
    status: string | null
    sendMessage: (userId: number, body: any) => void
    userStatusUpdate: (status: string) => void
    updateProfileData: (entireObj: any, userId: string) => void
}


const MyInfo: FC<PropsType> = (
    {
        userId, myId, sendMessage,userStatusUpdate,
        updateProfileData, status , userAPI, userAPI: {photos: {large, small}}}
) => {
    const [showPopupSendMessage, setShowPopupSendMessage] = useState(false);
    const [isModeEditPhoto, setIsModeEditPhoto] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleSubmit = (value: any) => {
        sendMessage(userId, value.sendMessage);
        setShowPopupSendMessage(false)
    }
    const changeImage = (e: any) => {
        let files = e.target.files[0];
        setSelectedFile(files);
    }
    const handleUpload = () => {
        setIsModeEditPhoto(false);
    }
    return (
        <div className={s.user_descr}>
            {showPopupSendMessage && <PopupSendMessage handleSubmit={handleSubmit}/>}
            <div className={s.cover}>
                {/* BG IMAGE*/}
            </div>
            <div className={s.avatar_wrap}>
                <div className={s.avatar}>
                    <img
                        src={large ? large : 'https://w5insight.com/wp-content/uploads/2014/07/placeholder-user-400x400.png'}/>
                    <div>
                        {
                            isModeEditPhoto ?
                                <div>
                                    <input type="file" name="file" onChange={changeImage}/>
                                    <button onClick={handleUpload}>upload image</button>
                                </div> :
                                <span onClick={() => setIsModeEditPhoto(true)}>&#10000;</span>
                        }

                    </div>

                    {userId && <p>
                        <button onClick={() => {
                            setShowPopupSendMessage(true)
                        }}>
                            Send message
                        </button>
                    </p>}
                </div>
                <div className={s.user_info}>
                    <MyInfoItem status={status}
                                userStatusUpdate={userStatusUpdate}
                                userAPI={userAPI}
                                myId={myId}
                                updateProfileData={updateProfileData}
                    />

                </div>
            </div>
        </div>
    )
}

export default compose(React.memo)(MyInfo)
