// 이 페이지에서 계좌 거래 내역 조회 구현하기

import React, { useEffect, useState } from "react";
import AppHeader from "../components/common/AppHeader";
import { useLocation } from "react-router-dom";
import axios from "axios";
import queryString from "query-string";

const BalancePage = () => {
  const [balance, setBalance] = useState("아직 없음");

  const queryParams = useLocation().search;
  console.log(queryParams);

  const parsed = queryString.parse(queryParams);
  console.log(parsed.fintechUseNo);

  const fintechUseNum = parsed.fintechUseNo;
  const bankTranId = "M202301659U000000001";

  let accessToken = "";
  let userSeqNo = "";

  useEffect(() => {
    console.log(localStorage.getItem("accessToken"));
    console.log(localStorage.getItem("userSeqNo"));
    accessToken = localStorage.getItem("accessToken");
    userSeqNo = localStorage.getItem("userSeqNo");
    getAccountBalance();
  }, []);

  const getAccountBalance = () => {
    let requestOption = {
      url: `/v2.0/account/balance/fin_num?bank_tran_id=${bankTranId}&fintech_use_num=${fintechUseNum}&tran_dtime=20230802161956`,
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    // 가져오기
    axios(requestOption)
      .then(({ data }) => {
        console.log(data);
        setBalance(data.balance_amt);
      })
      .catch((err) => {
        console.log("메인 실패");
      });
  };

  return (
    <div>
      <AppHeader title={"잔액조회"} />
      {balance}
    </div>
  );
};

export default BalancePage;
