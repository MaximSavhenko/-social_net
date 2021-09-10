import React from "react";
import s from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} id={p.id} likeCount={p.likeCount} />
  ));


  let newPostElement = React.createRef()

  let onAddPost = () => {
    let text = newPostElement.current.value
    props.addPost(text)
  };

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
  } 

  return (
    <div className={s.my_post}>
      <span className={s.title}>My posts</span>
      <div className={s.post_messages}>
        <textarea 
          className={s.my_post_text}
          onChange= { onPostChange }
          ref={newPostElement} 
          value= { props.newPostText }
        />
        <button
          type="submit"
          className={s.post_messages_btn}
          onClick={onAddPost}
        >
          Send
        </button>
      </div>
      <ul className={s.posts}>
        {postsElements}
      </ul>
    </div>
  );
};

export default MyPosts;
