import React from 'react';
import s from './MyPosts.module.scss'
import Post from './Post/Post';


const MyPosts = () => {
    return (
            <div className={s.my_post}>
                <span className={s.title}>My posts</span>
                <div className={s.post_messages}>
                    <textarea className={s.my_post_text}></textarea>
                    <button type='submit' className={s.post_messages_btn}>Send</button>
                </div>
                <ul className={s.posts}>
                    <Post message='hi, how are you?' likeCount='15'/>
                    <Post message='its my first post?' likeCount='20'/>
                </ul>
            </div>
    )
}

export default MyPosts;