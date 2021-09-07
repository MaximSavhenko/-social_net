import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.scss";
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {  

  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogsItem name={d.name} id={d.id} />
  ));
  let messagesElements = props.state.messages.map((m) => (
    <Messages message={m.message} id={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_title}>Dialogs</div>
      <div className={s.dialogs_wrap}>
        <div className={s.dialogs_items}>
          <ul>{dialogsElements}</ul>
        </div>
        <div className={s.messages}>
          <ul>{messagesElements}</ul>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;