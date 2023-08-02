import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";
import AuthPage from "./pages/AuthPage";
import AuthResultPage from "./pages/AuthResultPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<NewsPage></NewsPage>}></Route> */}
        <Route path="/" element={<AuthPage />}></Route>
        <Route path="/main" element={<MainPage />}></Route>
        <Route path="/authResult" element={<AuthResultPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
