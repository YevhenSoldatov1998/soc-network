import React from 'react'
import style from './navbar.module.sass'

const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <div>Profile</div>
            <div>Message</div>
            <div>Friends</div>
            <div>Posts</div>
            <div>Music</div>
            <div>Setting</div>
        </nav>
    )
};
export default Navbar;