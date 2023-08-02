import React, { useState } from "react";
import AppHeader from "../components/common/AppHeader";
import { useLocation } from "react-router-dom";
import axios from "axios";
import queryString from "query-string";

const AuthResultPage = () => {
  const queryParams = useLocation().search;
  console.log(queryParams);
  const parsed = queryString.parse(queryParams);
  console.log(parsed.code);
  const authCode = parsed.code;
  const [accessToken, setAccessToken] = useState("");
  const [userSeqNo, setUserSeqNo] = useState("");

  const handleClick = () => {
    let requestOption = {
      url: "/oauth/2.0/token",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      data: {
        code: authCode,
        client_id: "ae54d977-b726-4415-a864-6a7855add9d3",
        client_secret: "d47bb13d-c275-491f-9eb1-09f7c0509e31",
        redirect_uri: "http://localhost:3000/authResult",
        grant_type: "authorization_code",
      },
    };
    axios(requestOption).then(({ data }) => {
      setAccessToken(data.access_token);
      setUserSeqNo(data.user_seq_no);
      if (data.rsp_code !== "O0001") {
        localStorage.setItem("accessToken", data.access_token);
        localStorage.setItem("userSeqNo", data.user_seq_no);
        alert("저장 완료");
      } else {
        alert("인증에 실패했습니다 다시 시도해 주세요");
      }
    });
  };

  return (
    <div>
      <AppHeader title={"인증 결과 / 토큰 생성"}></AppHeader>
      AppResultPage
      <p>code : {authCode}</p>
      <button onClick={handleClick}>accessToken 요청</button>
      <p>accessToken : {accessToken}</p>
      <p>userSeqNo : {userSeqNo}</p>
      <p>
        <a href="localhost:3000/main">main에서 계좌 목록 불러오기</a>
      </p>
    </div>
  );
};

export default AuthResultPage;
