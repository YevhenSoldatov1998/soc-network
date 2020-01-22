import React from 'react'
import './header.sass'
import {NavLink} from "react-router-dom";

function Header(props) {
    const call_logout = () => {
        props.logout();
    }
    return (
        <header className="header">
            <div className="logo">
                HEADER
            </div>
            <div className={`login`}>
                {props.header.isAuth
                    ?
                    <div>
                        <button onClick={call_logout}>Log Out</button>
                        <span>{props.header.login}</span>
                    </div>

                    : <NavLink to='/login'>Login</NavLink>}
            </div>

        </header>
    )
}

export default Header;
