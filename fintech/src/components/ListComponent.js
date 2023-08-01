import React, { useState } from "react";
import Welcome from "./Welcome";

const ListComponent = () => {
  const [users, setUsers] = useState([
    { username: "홍길동", age: 12, major: "경영학" },
    { username: "고길동", age: 14, major: "수리학" },
    { username: "김길동", age: 16, major: "천문학" },
  ]);
  return (
    <div>
      {users.map((user) => {
        console.log(user);
        return (
          <Welcome
            userName={user.username}
            age={user.age}
            major={user.major}
          ></Welcome>
        );
      })}
    </div>
  );
};

export default ListComponent;
