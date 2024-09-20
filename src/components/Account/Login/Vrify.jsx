import React, { useContext, useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { reducerContext } from "../../../constant/Context";
import { useNavigate, useSearchParams } from "react-router-dom";
import { authUser } from "./OTP";

const Vrify = ({ code, mobile, timer, sendSms }) => {
  const [otp, setOtp] = useState(code);
  const [messeage, setMesseage] = useState("");
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  const navigate = useNavigate();
  useEffect(() => {
    setOtp(() => code);
  }, [code]);
  const [searchPrams, setSearchPrams] = useSearchParams();

  var minutes = Math.floor(timer % 60);
  var seconds = Math.floor(timer / 60);

  return (
    reduce.Vrify && (
      <div className={` max-w-xl bg-white  mx-auto relative px-5 pt-1 block `}>
        {" "}
        <div className="mt-28">
          <h2 className="mb-6">کد تایید را وارد کنید</h2>
          <p>کد تایید را به شماره موبایل {mobile} ارسال گردید</p>
          <p>
            شماره موبایل اشتباه است ؟{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => {
                // console.log(reduce.Account);
                dispach({ type: "Account" });
                dispach({ type: "Vrify" });
                clearInterval();
                setMesseage("");
              }}
            >
              ویرایش شماره
            </span>
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
            renderInput={(props) => (
              <input
                {...props}
                type="number"
                autoFocus
                className=" !w-12 h-12 border border-blue-600 rounded-[10px]  mx-2"
                inputMode="numeric"
              />
            )}
          />
        </div>
        <button
          onClick={() => {
            if (code != "") {
              if (otp == code) {
                authUser(mobile);
                navigate("/");
              } else if (!otp || otp.length < 4) {
                setMesseage("کد را وارد کنید");
              } else {
                setMesseage("کد اشتباه است");
              }
            }
          }}
          disabled={timer == 0}
          className={`w-full  h-14 block mx-auto mt-8 rounded-[10px]  font-IrHoma ${
            timer == 0
              ? ` bg-gray-200 text-gray-600`
              : ` bg-blue-500 text-white`
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
    )
  );
};

export default Vrify;
