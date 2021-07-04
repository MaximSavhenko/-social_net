import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Sidebar.module.scss'

const Sidebar = () => {
    return (
        <nav className={s.sidebar}>
            <ul className={s.menu}>
            <li className={s.item}><NavLink to='/profile' activeClassName={s.active}>Profile</NavLink></li>
            <li className={s.item}><NavLink to='/messages' activeClassName={s.active}>Messages</NavLink></li>
            <li className={s.item}><NavLink to='/news' activeClassName={s.active}>News</NavLink></li>
            <li className={s.item}><NavLink to='/music' activeClassName={s.active}>Music</NavLink></li>
            </ul>
            <ul className={s.settings}>
            <li className={s.item}><NavLink to='/settings' activeClassName={s.active}>Settings</NavLink></li>
            </ul>
        </nav>
    )
}

export default Sidebar;