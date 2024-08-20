import React, { useEffect, useState } from "react";
import OTPInput from "react-otp-input";

const Vrify = ({ data, dispach, code, mobile, timer, sendSms, setTimer }) => {
  const [otp, setOtp] = useState(code);
  const [messeage, setMesseage] = useState("");
  // setOtp(code)
  // useEffect(() => {
  //   // console.log(code);
  //   setOtp(()=>code);
  // }, [code]);

  var minutes = Math.floor(timer % 60);
  var seconds = Math.floor(timer / 60);

  // console.log( seconds,":",minutes);

  return (
    <div
      className={`  bg-white  mx-auto relative px-5 pt-1 ${
        !data.Vrify ? `hidden` : `block`
      }`}
    >
      {" "}
      <div className="mt-28">
        <h2 className="mb-6">کد تایید را وارد کنید</h2>
        <p>کد تایید را به شماره موبایل {mobile} ارسال گردید</p>
        <p>
          شماره موبایل اشتباه است ؟{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => {
              // console.log(data.Account);
              dispach({ type: "Account" });
              dispach({ type: "Vrify" });
              clearInterval();
              setMesseage("");
            }}
          >
            ویرایش شماره
          </span>
          {/* <div className="font-bold"> کد ورود : {code}</div> */}
          {!!messeage && (
            <div className="font-bold text-red-500">{messeage}</div>
          )}
        </p>
      </div>
      <div className=" child:flex-row-reverse gap-3 mt-8 mx-auto w-fit   ">
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          shouldAutoFocus={true}
          lastInputFocused={true}
          // renderSeparator={<span>-</span>}
          renderInput={(props) => (
            <input
              {...props}
              type="number"
              autoFocus
              // onFocus
              className=" !w-12 h-12 border border-blue-600 rounded-[10px]  mx-2"
            />
          )}
        />
      </div>
      <button
        onClick={() => {
          console.log(otp, code);
          if (code != "") {
            if (otp == code) {
              if (data.AcconutHave) {
                dispach({ type: "Vrify" });
                dispach({ type: "SinUp" });
              } else {
                dispach({ type: "Vrify" });
                dispach({ type: "NewAccount" });
              }
            } else if (!otp || otp.length < 4) {
              setMesseage("کد را وارد کنید");
            } else {
              setMesseage("کد اشتباه است");
            }
          }
        }}
        disabled={timer == 0}
        className={`w-full  h-14 block mx-auto mt-8 rounded-[10px]  font-IrHoma ${
          timer == 0 ? ` bg-gray-200 text-gray-600` : ` bg-blue-500 text-white`
        }`}
      >
        ادامه
      </button>
      <div className="flex justify-between mt-7 items-center">
        <div
          className={` ${
            timer == 0 ? `  text-gray-300` : `  text-black`
          }  flex gap-4`}
        >
          <p className=" text-nowrap   "> ارسال مجدد کد تا </p>
          <span className="    ">{`  ${minutes} : ${seconds}`}</span>
        </div>
        <button
          disabled={timer != 0}
          className={`px-8 h-10 text-nowrap rounded-[10px] ${
            timer != 0
              ? ` bg-gray-200 text-gray-600`
              : ` bg-blue-500 text-white`
          } `}
          onClick={() => {
            sendSms();
          }}
        >
          ارسال مجدد
        </button>
      </div>
    </div>
  );
};

export default Vrify;
