import React from "react";
import axios from "axios";

const AxiosComponent = () => {
  const handleClick = () => {
    console.log("1");
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        console.log(response);
      });
    console.log("2");
  };
  return (
    <div>
      <button onClick={handleClick}>클릭</button>
    </div>
  );
};
export default AxiosComponent;
