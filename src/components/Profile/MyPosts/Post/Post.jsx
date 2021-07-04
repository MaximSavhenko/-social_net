import React from 'react';
import s from "./Post.module.scss";

const Post = (props) => {
  return (
    <li className={s.posts_item}>
      <div className={s.wrap}>
          <div className={s.post_avatar}>
            <img src="https://via.placeholder.com/40" alt="postys avatar" />
          </div>
          <span className={s.post_text}>{props.message}</span>
      </div>
      <span>like {props.likeCount}</span>
    </li>
  );
};

export default Post;
