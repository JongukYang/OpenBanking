import { useState } from "react";

const StateComponent = () => {
  //   let username = "양종욱";
  let [username, setUserName] = useState("양종욱");
  setInterval(() => {
    setUserName("고길동");
    console.log(username);
  }, 3000);

  return (
    <div>
      <p>상태 관련 코드</p>
      이름 : {username}
    </div>
  );
};
export default StateComponent;
