import React, { useEffect, useState } from "react";
import axios from "axios";
import AppHeader from "../components/common/AppHeader";
import MainAccountCard from "../components/main/MainAccountCard";

const MainPage = () => {
  let accessToken = "";
  let userSeqNo = "";
  let [accountList, setAccountList] = useState([]);

  useEffect(() => {
    console.log(localStorage.getItem("accessToken"));
    console.log(localStorage.getItem("userSeqNo"));
    accessToken = localStorage.getItem("accessToken");
    userSeqNo = localStorage.getItem("userSeqNo");
    getAccountList();
  }, []);

  const getAccountList = () => {
    let requestOption = {
      url: `/v2.0/user/me?user_seq_no=${userSeqNo}`,
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    // 가져오기
    axios(requestOption)
      .then((result) => {
        console.log(result);
        setAccountList(result.data.res_list);
      })
      .catch((err) => {
        console.log("메인 실패");
      });
  };

  return (
    <div>
      {accountList.map((account) => {
        return (
          <>
            <AppHeader title={"메인"} />
            <MainAccountCard
              bankName={account.bank_name}
              fintechUseNo={account.fintech_use_num}
            ></MainAccountCard>
          </>
        );
      })}
    </div>
  );
};

export default MainPage;
