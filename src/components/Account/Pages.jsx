import React, { useContext, useEffect, useReducer, useState } from "react";
import { reducerContext } from "../../constant/Context";
import Acconut from "./Accont";
import AcccountLogin from "./Acccount-Login";
import Vrify from "./Vrify";
import NewAccount from "./NewAccount";
import SinUp from "./SinUp";
import ChengPass from "./ChengPass";
import { sendSMS } from "./OTP";
import Place from "./Place";
import Chose from "./Duti/Chose";
// import { otpService } from "./OTP";

const Pages = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;

  useEffect(() => {
    if (reduce.logIn) {
      document.documentElement.classList.add("overflow-y-hidden");
    } else {
      document.documentElement.classList.remove("overflow-y-hidden");
    }
  }, [reduce.logIn]);
  // console.log({ dispach });

  //  dispach({ type: "Account" });

  // ===============================================
  const [timer, setTimer] = useState(null);

  const [mobile, setMobile] = useState(0);
  const [code, setCode] = useState(0);
  const [form, setForm] = useState({ mobile: "" });

  const sendSms = () => {
    sendSMS(setCode, form, setTimer);
  };
  // ===============================================
  return (
    <div className="h-full  bg-white  ">
      <Acconut
        sendSms={sendSms}
        mobile={mobile}
        setMobile={setMobile}
        setForm={setForm}
      />
      <Vrify
        code={code}
        mobile={mobile}
        timer={timer}
        sendSms={sendSms}
        setTimer={setTimer}
      />
      <NewAccount />
      <SinUp />
      <Chose />
      <ChengPass />
      <Place />
      <AcccountLogin />
    </div>
  );
};

export default Pages;
