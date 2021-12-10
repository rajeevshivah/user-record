import style from "./UserItem.module.css";
import React from "react";
import Popup from "../UI/popup/Popup";

const UserItem = (props) => {
  const validateData = () => {
    if (!props.name) {
      return <Popup trigger={true}>Enter the valid Name.</Popup>;
    }
    if (!props.age || props.age <= 0) {
      return <Popup trigger={true}>Enter the valid Age.</Popup>;
    }
    return (
      <li className={style.li}>
        <label
          className={style.label}
        >{`${props.name} (${props.age} Years old)`}</label>
      </li>
    );
  };
  return validateData();
};

export default UserItem;
