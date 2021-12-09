import style from "./UserList.module.css";
import React from "react";
import WrapperCard from "../UI/Cards/WrapperCard";
import UserItem from "../UserItem/UserItem";

const UserList = (props) => {
  return (
    <WrapperCard>
      <ul className={style.ul}>
        {props.userRecords.map((record) => (
          <UserItem
            name={record.name}
            age={record.age}
            id={record.id}
            key={record.id}
          />
        ))}
      </ul>
    </WrapperCard>
  );
};

export default UserList;
