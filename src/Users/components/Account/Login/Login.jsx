import React, { useContext, useEffect, useReducer, useState } from "react";
import { reducerContext } from "../../../constant/Context";
import Acconut from "./Accont";
import Vrify from "./Vrify";
import { sendSMS } from "../../../services/OTP";

const Login = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;

  reduce.Derawer
    ? document.documentElement.classList.add("overflow-y-hidden")
    : document.documentElement.classList.remove("overflow-y-hidden");

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
    <div className="h-full w-full  bg-white   ">
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
    </div>
  );
};

export default Login;
