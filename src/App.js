import "./App.css";
import UserForm from "./components/InputForm/UserForm";
import React, { useState } from "react";
import UserList from "./components/UserList/UserList";

function App() {
  const [records, setRecords] = useState([
    { name: "Anuj", age: 19, id: "a1" },
    { name: "Ankit", age: 25, id: "a2" },
    { name: "anush", age: 1, id: "a3" },
    { name: "anush", age: 148, id: "a4" },
    { name: "anush", age: 182, id: "a5" },
  ]);

  const addRecord = (record) => {
    setRecords((prevState) => {
      const updatedRecord = [...records];

      updatedRecord.unshift({
        name: record.name,
        age: record.age,
        id: Math.random() * 20,
      });

      return updatedRecord;
    });
  };
  return (
    <>
      <UserForm addRecord={addRecord} />
      <UserList userRecords={records} />
    </>
  );
}

export default App;
