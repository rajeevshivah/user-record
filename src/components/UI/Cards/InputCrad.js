import style from "./InputCard.module.css";
import React from "react";

const InputCrad = (props) => {
  return <div className={style.input_card}>{props.children}</div>;
};

export default InputCrad;
