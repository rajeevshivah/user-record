import React, { useState } from "react";
import style from "./Popup.module.css";

const Popup = (props) => {
  const [trigger, setTrigger] = useState(props.trigger);
  document.addEventListener("click", () => {
    trigger && setTrigger(!trigger);
  });

  return trigger ? (
    <div className={style.popup}>
      <div className={style.popup_inner}>
        <button
          className={style.class_btn}
          onClick={() => setTrigger(!trigger)}
        >
          close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
