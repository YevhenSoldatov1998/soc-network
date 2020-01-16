import React from 'react'
import './header.sass'
import {NavLink} from "react-router-dom";
function Header(props){
    debugger
    return (
        <header className="header">
            <div className="logo">
                HEADER
            </div>
            <div className={`login`}>
                {props.header.isAuth
                    ?props.header.login
                    : <NavLink to='/login'>Login</NavLink>}
            </div>

        </header>
    )
}
export default Header;
