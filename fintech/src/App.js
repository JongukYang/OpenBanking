import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NewsPage from "./pages/NewsPage";
import AuthPage from "./pages/AuthPage";
import AuthResultPage from "./pages/AuthResultPage";
import MainPage from "./pages/MainPage";
import BalancePage from "./pages/BalancePage";
import QrCodePage from "./pages/QrCodePage";
import QrReaderPage from "./pages/QrReaderPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<NewsPage></NewsPage>}></Route> */}
        <Route path="/" element={<AuthPage />}></Route>
        <Route path="/main" element={<MainPage />}></Route>
        <Route path="/balance" element={<BalancePage />}></Route>
        <Route path="/authResult" element={<AuthResultPage />}></Route>
        <Route path="/qrcode" element={<QrCodePage />}></Route>
        <Route path="/qrreader" element={<QrReaderPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
