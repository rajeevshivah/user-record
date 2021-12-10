import style from "./App.module.css";
import UserForm from "./components/InputForm/UserForm";
import React, { useState } from "react";
import UserList from "./components/UserList/UserList";

function App() {
  const [records, setRecords] = useState([]);

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
      {records.length > 0 ? (
        <UserList userRecords={records} />
      ) : (
        <h2 className={style.no_record}>No record available</h2>
      )}
    </>
  );
}

export default App;
