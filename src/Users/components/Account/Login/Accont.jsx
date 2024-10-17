import React, { useContext, useEffect, useState } from "react";
import logo from "../../../../assets/images/logo.png";
import { BsFileEarmarkText } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Conection from "../../Conection";

const Acconut = ({
  sendSms,
  setMobile,
  mobile,
  setForm,
  account,
  setVrify,
  setAccount,
}) => {
  const [mobileAlert, setMobileAlert] = useState("");
  const navigate = useNavigate();

  const chenchHandeler = (e) => {
    setMobile(e.target.value);
    setForm({ mobile: e.target.value });
  };

  return (
    account && (
      <div
        className={`  bg-white w-full fixed max-w-xl mx-auto right-0 left-0  mt-3 `}
      >
        <div className={``}>
          <NavLink
            onClick={() => navigate(-1)}
            className="flex  mt-10  gap-2  "
          >
            <IoIosArrowForward className=" mt-1 lg:mt-0 lg:text-2xl" />
            <span className="text-red-500 font-bold lg:text-xl ">برگشت</span>
          </NavLink>
          <img src={logo} alt="" className="mx-auto mb-20 mt-36 w-56 " />

          <div className=" ">
            <div className="relative w-[calc(100%-40px)] mx-auto ">
              <input
                className="peer border px-5 rounded-[10px] outline-gray-300 h-14 w-full "
                placeholder=" "
                id="phone"
                name="phone"
                type="number"
                onChange={chenchHandeler}
                inputMode="numeric"
              />
              <label
                htmlFor="phone"
                className={`absolute start-1 IrHomama    rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2 ${
                  !!mobile ? `start-2.5 -top-2 !text-sm` : `top-4`
                }`}
              >
                شماره موبایل
              </label>
            </div>
            <p htmlFor="" className=" h-4 py-2 mx-8 w-full text-red-500">
              {mobileAlert}
            </p>

            <button
              onClick={() => {
                if (mobile?.length == 11 && !!mobile) {
                  setVrify((vrify) => !vrify);
                  setAccount((account) => !account);

                  setMobileAlert("");
                  sendSms();
                } else if (!mobile) {
                  setMobileAlert("شماره موبایل را وارد کنید");
                } else {
                  setMobileAlert("شماره موبایل را به درستی وارد کنید");
                }
              }}
              className="w-[calc(100%-40px)]  h-14 bg-blue-500 block mx-auto mt-8 rounded-[10px] text-white font-IrHoma"
            >
              ادامه
            </button>

            <div
              className="flex w-fit  mt-10  mx-5 items-right gap-2 "
              onClick={() => navigate("/user/Rules")}
            >
              <span>
                <BsFileEarmarkText className="text-xl" />
              </span>
              <p className=" mb-0.5">
                با ورود به فروشگاه
                <a href="" className="text-blue-500 inline-block mx-1">
                  قوانین و مقررات
                </a>
                آن را می پذیرم
              </p>
            </div>
            <p
              href=""
              className=" mt-5 pl-5 font-bold w-full text-blue-500 text-left block "
              onClick={() => {
                dispach({ type: "Conection" });
              }}
            >
              {" "}
              نیاز به کمک دارم
            </p>
          </div>
        </div>
        <Conection />
        {/*  */}
      </div>
    )
  );
};

export default Acconut;
