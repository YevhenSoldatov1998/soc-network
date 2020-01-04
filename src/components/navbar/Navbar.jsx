import React from 'react'
import {NavLink } from 'react-router-dom'
import style from './navbar.module.sass'

const Navbar = (props) => {
    return (
        <nav className={style.navbar}>
            {props.sidebar.navLink.map(el => {
                return <NavLink key={el.id}  to={`/${el.link.toLowerCase()}`} activeClassName={style.active}>{el.link}</NavLink>
            })}
        </nav>
    )
};
export default Navbar;