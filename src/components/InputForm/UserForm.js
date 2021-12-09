import React from "react";
import Button from "../UI/Button/Button";
import InputCrad from "../UI/Cards/InputCrad";
import WrapperCard from "../UI/Cards/WrapperCard";
import style from "./UserForm.module.css";

const UserForm = () => {
  return (
    <WrapperCard>
      <InputCrad>
        <label>Username</label>
        <input type="text" name="username" />
      </InputCrad>
      <InputCrad>
        <label>Age(Years)</label>
        <input type="number" name="age" />
      </InputCrad>
      <Button>Add User</Button>
    </WrapperCard>
  );
};

export default UserForm;
