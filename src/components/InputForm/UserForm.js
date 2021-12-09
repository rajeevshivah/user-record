import React, { useState } from "react";
import Button from "../UI/Button/Button";
import InputCrad from "../UI/Cards/InputCrad";
import WrapperCard from "../UI/Cards/WrapperCard";

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
      console.log(event.target.value);
      setNewEntry((prevNewEntry) => {
        const age = {
          age: Number(event.target.value.trim()),
          id: Math.random() * 20,
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
    <WrapperCard>
      <form onSubmit={formSubmitHandler}>
        <InputCrad>
          <label>Username</label>
          <input
            type="text"
            name="username"
            onChange={(event) => userRecordHandler(event)}
          />
        </InputCrad>
        <InputCrad>
          <label>Age(Years)</label>
          <input
            type="number"
            name="age"
            onChange={(event) => userRecordHandler(event)}
          />
        </InputCrad>
        <Button type="submit">Add User</Button>
      </form>
    </WrapperCard>
  );
};

export default UserForm;
