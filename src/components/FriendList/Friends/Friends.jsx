import React from 'react';
import s from './Friends.module.scss'


const Friends = (props) => {
    return (
       <li className={ s.friendsItem}>
           {props.name}
       </li>
    )
}

export default Friends;