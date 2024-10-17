import React, { useContext, useEffect, useReducer, useState } from "react";
import { reducerContext } from "../../../constant/Context";
import Acconut from "./Accont";
import Vrify from "./Vrify";
import { sendSMS } from "../../../services/OTP";

const Login = () => {
  const [timer, setTimer] = useState(null);
  const [mobile, setMobile] = useState(0);
  const [code, setCode] = useState(0);
  const [form, setForm] = useState({ mobile: "" });
  const [vrify, setVrify] = useState(false);
  const [account, setAccount] = useState(true);
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
        setAccount={setAccount}
        setVrify={setVrify}
        account={account}
      />
      <Vrify
        code={code}
        mobile={mobile}
        timer={timer}
        sendSms={sendSms}
        setTimer={setTimer}
        setAccount={setAccount}
        setVrify={setVrify}
        vrify={vrify}
      />
    </div>
  );
};

export default Login;
