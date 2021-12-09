import React from "react";
import style from "./WrapperCard.module.css";

const WrapperCard = (props) => {
  return <div className={style.style}>{props.children}</div>;
};

export default WrapperCard;
