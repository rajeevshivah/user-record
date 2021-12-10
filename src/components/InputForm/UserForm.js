import React, { useState } from "react";

import Button from "../UI/Button/Button";
import InputCrad from "../UI/Cards/InputCrad";
import WrapperCard from "../UI/Cards/WrapperCard";
import style from "./UserForm.module.css";

const UserForm = (props) => {
  const [newEntry, setNewEntry] = useState({});

  const userRecordHandler = (event) => {
    if (event.target.name === "username") {
      setNewEntry((prevNewEntry) => {
        const name = {
          name: event.target.value.trim(),
        };
        const updatedNewEntry = Object.assign(newEntry, name);
        return updatedNewEntry;
      });
    }
    if (event.target.name === "age") {
      setNewEntry((prevNewEntry) => {
        const age = {
          age: Number(event.target.value.trim()),
        };

        const updatedNewEntry = Object.assign(newEntry, age);

        return updatedNewEntry;
      });
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    props.addRecord(newEntry);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <WrapperCard>
        <InputCrad>
          <label className={style.label}>Username</label>
          <input
            className={style.input}
            type="text"
            name="username"
            onChange={(event) => userRecordHandler(event)}
          />
        </InputCrad>
        <InputCrad>
          <label className={style.label}>Age(Years)</label>
          <input
            className={style.input}
            type="number"
            name="age"
            onChange={(event) => userRecordHandler(event)}
          />
        </InputCrad>
        <Button type="submit" trigger={true}>
          Add User
        </Button>
      </WrapperCard>
    </form>
  );
};

export default UserForm;
