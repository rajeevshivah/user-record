import "./App.css";
import UserForm from "./components/InputForm/UserForm";
import React, { useState } from "react";
import UserList from "./components/UserList/UserList";

function App() {
  const [records, setRecords] = useState([
    { name: "Anuj", age: 19, id: "a1" },
    { name: "Ankit", age: 25, id: "a2" },
    { name: "anush", age: 18, id: "a3" },
    { name: "anush", age: 18, id: "a3" },
    { name: "anush", age: 18, id: "a3" },
  ]);
  return (
    <>
      <UserForm />
      <UserList userRecords={records} />
    </>
  );
}

export default App;
