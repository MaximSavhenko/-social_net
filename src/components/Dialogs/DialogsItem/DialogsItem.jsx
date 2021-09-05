import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.scss";

const DialogsItem = (props) => {
  let path = "/messages/" + props.id;
  return (
    <li>
      <NavLink to={path}>{props.name}</NavLink>
    </li>
  );
};


export default DialogsItem;
