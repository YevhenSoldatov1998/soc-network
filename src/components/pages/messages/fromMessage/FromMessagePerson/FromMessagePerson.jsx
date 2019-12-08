import React from 'react'
import {NavLink} from "react-router-dom";

const FromMessagePerson = (props) => {
    return (
        <React.Fragment>
            {props.fromMessage.map(el => {
                return <NavLink to={`/messages/${el.id}`}>{el.name}</NavLink>
            })}
        </React.Fragment>
    )
}
export default FromMessagePerson