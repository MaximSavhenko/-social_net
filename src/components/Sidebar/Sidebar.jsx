import React from 'react';
import s from './Sidebar.module.scss'

const Sidebar = () => {
    return (
        <nav className={s.sidebar}>
            <ul className={s.menu}>
            <li className={s.item}><a href='#'>Profile</a></li>
            <li className={s.item}><a href='#'>Messages</a></li>
            <li className={s.item}><a href='#'>News</a></li>
            <li className={s.item}><a href='#'>Music</a></li>
            </ul>
            <ul className={s.settings}>
            <li className={s.item}><a href='#'>Settings</a></li>
            </ul>
        </nav>
    )
}

export default Sidebar;