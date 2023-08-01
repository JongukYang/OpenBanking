import "./App.css";
import Welcome from "./components/WelcomeTemp.js";
import StateComponent from "./components/StateComponent.js";

function App() {
  return (
    <div className="App">
      <Welcome userName="양종욱" age={26}></Welcome>
      <Welcome userName="김길동" age={20}></Welcome>
      <StateComponent></StateComponent>
    </div>
  );
}

export default App;
