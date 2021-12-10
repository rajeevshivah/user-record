import style from "./UserItem.module.css";
import React from "react";
import Popup from "../UI/popup/Popup";

const UserItem = (props) => {
  const validateData = () => {
    console.log(props.name);
    if (!props.name) {
      if (!props.age) {
        return <Popup trigger={true}>Enter the valid Name and Age.</Popup>;
      } else {
        return <Popup trigger={true}>Enter the valid Name.</Popup>;
      }
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
