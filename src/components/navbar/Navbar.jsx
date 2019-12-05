import React from 'react'
import {NavLink } from 'react-router-dom'
import style from './navbar.module.sass'

const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <NavLink exact={true} activeClassName={style.active} to='/'>Profile</NavLink >
            <NavLink  activeClassName={style.active} to='/messages'>Messages</NavLink >
            <NavLink  activeClassName={style.active} to="/news">News</NavLink >
            <NavLink  activeClassName={style.active} to="/music">Music</NavLink >
            <NavLink  activeClassName={style.active} to="/setting">Setting</NavLink >
        </nav>
    )
};
export default Navbar;