import React from "react";
import s from "./Dialogs.module.scss";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_title}>Dialogs</div>
      <div className={s.dialogs_wrap}>
          <div className={s.dialogs_items}>
            <ul>
              <li className={s.active}>Marina A</li>
              <li>Anton</li>
              <li>Sasha A</li>
              <li>Viktoria</li>
              <li>Max</li>
            </ul>
          </div>
          <div className={s.messages}>
            <ul>
              <li>Hi</li>
              <li>Marina</li>
              <li>Drigailo</li>
              <li>Dostala</li>
              <li>Menia</li>
            </ul>
          </div>
      </div>
    </div>
  );
};

export default Dialogs;
