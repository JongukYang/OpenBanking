import React from "react";
import AppHeader from "../components/common/AppHeader";

const AuthPage = () => {
  const handleClick = () => {
    // let tmpwindow = window.open("about:blank");
    let tmpwindow = window.open("about:self");
    const clientId = "ae54d977-b726-4415-a864-6a7855add9d3"; // <- 클라이언트 아이디 입력
    let state = "12312312312312312312312312312311";
    tmpwindow.location.href = `https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=http://localhost:3000/authResult&scope=login inquiry transfer&state=${state}&auth_type=0`;
  };

  return (
    <div>
      <AppHeader title={"인증시작"}> </AppHeader>
      <button onClick={handleClick}>인증하기</button>
    </div>
  );
};

export default AuthPage;
