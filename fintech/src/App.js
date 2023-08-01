import "./App.css";
import Welcome from "./components/Welcome.js";
import StateComponent from "./components/StateComponent.js";
import InputComponent from "./components/InputComponent.js";
import ListComponent from "./components/ListComponent";

function App() {
  return (
    <div className="App">
      {/* <Welcome userName="양종욱" age={26}></Welcome>
      <Welcome userName="김길동" age={20}></Welcome>
      <StateComponent></StateComponent>
      <hr></hr> */}
      {/* <InputComponent></InputComponent> */}
      <ListComponent></ListComponent>
    </div>
  );
}

export default App;
