import { useState } from "react";

export const Random = () => {
  let randomNumber = 1000 + Math.floor(Math.random() * (9999 - 1000));
  return randomNumber;
};

let intervalId;
export const sendSms = (data) => {
  const headers = {
    "X-API-KEY":
      "L40UGRICQDvHN3F93OuDafT0xiom3okCphDgtrAfYjpng77f9ZzNaahQGyp9wI5b",
    "Content-Type": "application/json",
    ACCEPT: "text/plain",
  };

  return fetch("https://api.sms.ir/v1/send/verify", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  }).then((response) => response.text());
};

export const sendSMS = (setCode, form, setTimer, dispach) => {
  if (!form.mobile) {
    setForm({
      ...form,
      severity: "error",
      summary: " شماره را وارد کنید  .",
    });

    // console.log({
    //   severity: "error",
    //   summary: " شماره را وارد کنید        .",
    // });
  } else if (form.mobile.length < 11) {
    setForm({
      ...form,
      severity: "error",
      summary: " شماره را به درستی وارد کنید  .",
    });
    // console.log({
    //   severity: "error",
    //   summary: " شماره را به درستی وارد کنید  .",
    // });
  } else {
    // setDisplay(true);
    const Code = Random();
    setCode(Code);
    // setCode(Code);
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
    sendSms(data).then((result) => {
      if (JSON.parse(result).status == 1) {
        setTimer(120);
        clearInterval(intervalId);
        startTimer(setTimer, setCode);
      }
    });
  }
};
// const [intervalId, setIntervalId] = useState(null);

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
