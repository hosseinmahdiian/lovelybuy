import React, { useContext, useEffect, useReducer, useState } from "react";
import { reducerContext } from "../../constant/Context";
import Acconut from "./Accont";
import AcccountLogin from "./Acccount-Login";
import Vrify from "./Vrify";
import NewAccount from "./NewAccount";
import SinUp from "./SinUp";
import ChengPass from "./ChengPass";
import { otpService } from "./OTP";

const Pages = () => {
  const init = {
    Account: true,
    AcconutHave: false,
    SinUp: false,
    Login: false,
    Vrify: false,
    ChengPass: false,
    NewAccount: false,
  };

  const reducerFN = (state, action) => {
    switch (action.type) {
      case "Account":
        return {
          ...state,
          Account: !state.Account,
        };

      case "SinUp":
        return {
          ...state,
          SinUp: !state.SinUp,
        };

      case "Vrify":
        return {
          ...state,
          Vrify: !state.Vrify,
        };

      case "Login":
        return {
          ...state,
          Login: !state.Login,
        };

      case "ChengPass":
        return {
          ...state,
          ChengPass: !state.ChengPass,
        };

      case "NewAccount":
        return {
          ...state,
          NewAccount: !state.NewAccount,
        };
      default:
        break;
    }
  };

  const info = useReducer(reducerFN, init);
  const [data, dispach] = info;

  const reducer = useContext(reducerContext);
  const [reduce, dispachre] = reducer;

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

  const [mobile, setMobile] = useState(0);
  const [code, setCode] = useState(0);
  const [form, setForm] = useState({ mobile: "" });

  const Random = () => {
    let randomNumber = 1000 + Math.floor(Math.random() * (9999 - 1000));
    return randomNumber;
  };

  const sendSms = (data) => {
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

  const sendSMS = () => {
    if (!form.mobile) {
      setForm({
        ...form,
        severity: "error",
        summary: " شماره را وارد کنید  .",
      });

      console.log({
        severity: "error",
        summary: " شماره را وارد کنید        .",
      });
    } else if (form.mobile.length < 11) {
      setForm({
        ...form,
        severity: "error",
        summary: " شماره را به درستی وارد کنید  .",
      });
      console.log({
        severity: "error",
        summary: " شماره را به درستی وارد کنید  .",
      });
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
      // console.log(data);
      sendSms(data).then((result) => {
        // console.log(result);
      });
    }
  };

  // ===============================================
  return (
    <div className="h-full  bg-white  ">
      <Acconut
        data={data}
        dispach={dispach}
        sendSms={sendSMS}
        mobile={mobile}
        setMobile={setMobile}
        setForm={setForm}
      />
      <Vrify data={data} dispach={dispach} code={code} />
      <NewAccount data={data} dispach={dispach} />
      <SinUp data={data} dispach={dispach} />
      <ChengPass data={data} dispach={dispach} />
      <AcccountLogin data={data} dispach={dispach} />
    </div>
  );
};

export default Pages;
