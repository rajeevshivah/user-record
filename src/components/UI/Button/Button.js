import React from "react";
import style from "./Button.module.css";

const Button = (props) => {
  return (
    <div className={style.button_wrapper}>
      <button className={style.button_style} type="submit" value="submit">
        {props.children}
      </button>
    </div>
  );
};

export default Button;
