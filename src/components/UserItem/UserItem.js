import style from "./UserItem.module.css";
import React from "react";

const UserItem = (props) => {
  return (
    <li className={style.li}>
      <label
        className={style.label}
      >{`${props.name} (${props.age} Years old)`}</label>
    </li>
  );
};

export default UserItem;
