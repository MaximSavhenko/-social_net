import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.scss";
import { addPost } from "../../redux/state";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts 
        posts={props.profilePage.posts}
        newPostText = {props.profilePage.newPostText}
        addPost = { props.addPost }
        updateNewPostText = { props.updateNewPostText }
      />
    </div>
  );
};

export default Profile;
