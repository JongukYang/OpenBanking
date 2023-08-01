import { useState } from "react";

const InputComponent = () => {
  let [username, setUserName] = useState("양조욱");
  const handleClick = () => {
    console.log(username);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    console.log(event);
    console.log(value);
    setUserName(value);
  };

  return (
    <div>
      <p>{username}</p>
      <input onChange={handleChange}></input>
      <button onClick={handleClick}>검색</button>
    </div>
  );
};
export default InputComponent;
