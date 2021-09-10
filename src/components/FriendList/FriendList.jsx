import classNames from "classnames";
import React from "react";
import s from "./FriendList.module.scss";
import Friends from "./Friends/Friends";

const cx = classNames.bind(s);

const FriendList = (props) => {
  let friendsElements = props.friends.map((f) => (
    <Friends name={f.name} id={f.id} />
  ));

  return (
    <div className={s.Friend}>
      <h2>Friends</h2>
      <ul className={s.FriendList}>{friendsElements}</ul>
    </div>
  );
};

export default FriendList;
