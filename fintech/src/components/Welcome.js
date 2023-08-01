const Welcome = (props) => {
  return (
    <div>
      <p>안녕 {props.userName}님! Welcome</p>
      <p>나이 : {props.age}세</p>
      <hr></hr>
    </div>
  );
};

export default Welcome;
