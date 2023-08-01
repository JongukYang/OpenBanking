import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome.js";
import StateComponent from "./components/StateComponent.js";
import InputComponent from "./components/InputComponent.js";
import ListComponent from "./components/ListComponent";
import AxiosComponent from "./components/AxiosComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Welcome userName="양종욱" age={26} />}
        ></Route>
        <Route path="/style" element={<StateComponent />}></Route>
        <Route path="/input" element={<InputComponent />}></Route>
        <Route path="/list" element={<ListComponent />}></Route>
        <Route path="/axios" element={<AxiosComponent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
