import axios from "axios";
import { useState } from "react";
import { baseAPI } from "../../../auth/API";
import { saveCurrentUser } from "../../../auth/localStoreage";

export const Random = () => {
  let randomNumber = 1000 + Math.floor(Math.random() * (9999 - 1000));
  return randomNumber;
};
const API = "https://api.sms.ir/v1/send/verify";
let intervalId;
export const sendSms = (data) => {
  const headers = {
    "X-API-KEY":
      "L40UGRICQDvHN3F93OuDafT0xiom3okCphDgtrAfYjpng77f9ZzNaahQGyp9wI5b",
    "Content-Type": "application/json",
    ACCEPT: "text/plain",
  };

  return fetch(API, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  })
    .then((response) => response.text())
    .catch((e) => console.log(e));
};

export const sendSMS = (setCode, form, setTimer) => {
  if (!form.mobile) {
    setForm({
      ...form,
      severity: "error",
      summary: " شماره را وارد کنید  .",
    });
  } else if (form.mobile.length < 11) {
    setForm({
      ...form,
      severity: "error",
      summary: " شماره را به درستی وارد کنید  .",
    });
  } else {
    const Code = Random();
    setCode(Code);
    const data = {
      Mobile: form.mobile,
      TemplateId: 312572,
      Parameters: [
        {
          Name: "Code",
          Value: Code,
        },
      ],
    };
    // sendSms(data).then((result) => {
    //   if (JSON.parse(result).status == 1) {
    //     setTimer(120);
    //     clearInterval(intervalId);
    //     startTimer(setTimer, setCode);
    //   }
    // });
  }
};

const startTimer = (setTimer, setCode) => {
  const id = setInterval(() => {
    setTimer((prevTimer) => {
      if (prevTimer > 0) {
        return prevTimer - 1;
      } else {
        setCode("");
        clearInterval(id);
        return 0;
      }
    });
  }, 1000);
  intervalId = id;
};

export const authUser = async (mobile) => {
  const rsult = await axios
    .post(`${baseAPI}/user/authUser`, { mobile })
    .then((json) => {
      console.log(json);

      saveCurrentUser("authUser", JSON.stringify(json.data.data));
      return rsult;
    });
};
