import React, {useEffect} from 'react'
import {NavLink} from "react-router-dom";

const Dialog = ({dialogs,getMessages, userId}) => {
    useEffect(() => {
        getMessages(userId)
    }, [userId]);

    return (
        <React.Fragment>
            {dialogs.map(el => {
                return (
                    <NavLink key={el.id} to={`/messages/${el.id}`}>
                        <div className={userId ===el.id ? 'selected': ''}>
                            {el.userName}
                        </div>
                    </NavLink>
            )})}
        </React.Fragment>
    )
}
export default Dialog
