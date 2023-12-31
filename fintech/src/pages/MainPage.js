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

// 004
// 형식 : 이용기관코드(10자리) + 생성주체구분코드(“U”)*+ 이용기관 부여번호(9자리)
// * U: 이용기관에서 생성한 거래고유번호(참가기관), O: 오픈뱅킹에서 생성한 거래고유번호(참가기관)
// 예) F123456789 U 4BC34239Z

// 20230802114253 -> 14자리
// 120230165988951154772045

// M202301659U000000001

// 1100034736
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIxMTAwMDM0NzM2Iiwic2NvcGUiOlsiaW5xdWlyeSIsImxvZ2luIiwidHJhbnNmZXIiXSwiaXNzIjoiaHR0cHM6Ly93d3cub3BlbmJhbmtpbmcub3Iua3IiLCJleHAiOjE2OTg3MzI2NjgsImp0aSI6IjdjNmQ3YTU1LTViMDYtNDVkYi1hNTk5LTg1MDQ2Y2FjZDNmNSJ9.UHVSxOs1aQ1pNkG_VffBr0_KEKrn7o-rj-VZA-A8EmY
