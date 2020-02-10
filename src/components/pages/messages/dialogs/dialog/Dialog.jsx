import React from 'react'
import {NavLink} from "react-router-dom";

const Dialog = ({dialogs}) => {
    return (
        <React.Fragment>
            {dialogs.map(el => {
                return <NavLink key={el.id} to={`/messages/${el.id}`}>{el.userName}</NavLink>
            })}
        </React.Fragment>
    )
}
export default Dialog
