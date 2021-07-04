import React from 'react';
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.scss'


const Profile = () => {
    return (
        <div>
            <div className={s.prewiev_img}>
            <img src="https://cs8.pikabu.ru/post_img/big/2017/01/17/4/1484627060165753156.jpg" alt="images" />
            </div>
            <div className={s.profile_wrap}>
            <div className={s.avatar}>
                <img src="https://s1.1zoom.ru/big3/330/The_Witcher_3_Wild_Hunt_Cirilla_Blonde_girl_Glance_532123_1941x2600.jpg" alt="avatar" />
            </div>
            <div className={s.profile}>
                <span className={s.name}>Tsirilla Maksimovna</span>
                <ul className={s.info}>
                <li className={s.item_info}>Birthday: 2 May 1252</li>
                <li className={s.item_info}>Citi: Cintra</li>
                <li className={s.item_info}>Education: Kaer Morhen</li>
                <li className={s.item_info}>Web Site: Tiwtter</li>
                </ul>
            </div>
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;