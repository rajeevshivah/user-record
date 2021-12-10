import React from "react";

import style from "./Button.module.css";

const Button = (props) => {
  return (
    <div className={style.button_wrapper}>
      <button
        className={style.button_style}
        value="submit"
        type={props.submit}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
