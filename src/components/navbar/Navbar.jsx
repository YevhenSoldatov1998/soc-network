import React from 'react'
import {NavLink } from 'react-router-dom'
import style from './navbar.module.sass'

const Navbar = (props) => {
    return (
        <nav className={style.navbar}>
            {props.navLink.map(el => {
                return <NavLink key={el.id} exact={el.id === 1} to={el.link === "Profile"?'/': `/${el.link.toLowerCase()}`} activeClassName={style.active}>{el.link}</NavLink>
            })}
        </nav>
    )
};
export default Navbar;