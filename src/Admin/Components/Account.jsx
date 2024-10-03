import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowBack, IoMdEye, IoMdEyeOff } from "react-icons/io";
import logo from "../../assets/images/logo.png";
import { reducerContext } from "../Context/Context";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { ChengHandler } from "../Functions/Fonctions";
import { PostRole } from "../services/Admin";
import Loader from "./Loader";

const Acconut = () => {
  const navegate = useNavigate();
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  const [role, setRole] = useState({ userName: "", password: "" });
  const [res, setRes] = useState();
  const [eye, setEye] = useState(true);

  useEffect(() => {
    navegate(res?.data.success && `/home`);
  }, [res?.data.success]);

  return false ? (
    <Loader />
  ) : (
    <div className="  h-full bg-white  relative ont-IrSans mt-16 max-w-2xl mx-auto">
      <div className={`${reduce.acconut ? `hidden` : `block`}`}>
        <NavLink>

          <img src={logo} alt="" className="mx-auto mb-20 mt-10 " />
        </NavLink>
        

        <div className=" ">
          <div className="relative  mx-[20px] ">
            <input
              className="peer px-5 border rounded-[10px] outline-gray-300 h-12 w-full  "
              placeholder=" "
              id="userName"
              name="userName"
              onChange={(e) => ChengHandler(e, setRole)}
            />
            <label
              htmlFor="userName"
              className={`absolute start-1 IrHomama    rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2 ${
                !!role.userName ? `start-2.5 -top-2 !text-sm` : `top-2.5`
              }`}
            >
              نام کابری
            </label>
          </div>

          <div className="relative mx-[20px]  h-10 mt-5">
            <input
              className="peer border rounded-[10px] outline-gray-300 h-12 w-full px-5"
              placeholder=" "
              id="password"
              name="password"
              type={eye ? "Password" : "text"}
              onChange={(e) => ChengHandler(e, setRole)}
            />
            <label
              htmlFor="password"
              className={`absolute start-1 IrHomama    rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2 ${
                !!role.password ? `start-2.5 -top-2 !text-sm` : `top-2.5`
              }`}
            >
              رمز عبور
            </label>
            <label
              className={`absolute end-1  w-10 h-full    bg-white px-2 pt-3 mt-1`}
              onClick={() => {
                setEye((i) => !i);
              }}
            >
              {eye ? <IoMdEyeOff /> : <IoMdEye />}
            </label>{" "}
          </div>
          {res?.data.data === "اطلاعات وارد شده صحیح نیست" && (
            <p className="text-red-500 mt-5 mx-5">
              رمز عبور یا نام کار بری اشتباه است
            </p>
          )}
          {/* <NavLink to=""> */}
          <button
            disabled={!(!!role.userName && role.password.length >= 8)}
            onClick={async () => {
              // dispach({ type: "acconut" });
              await PostRole(role, setRes);
            }}
            className={` ${
              !(!!role.userName && role.password.length >= 8)
                ? ` bg-gray-200 text-gray-600`
                : ` bg-blue-500 text-white`
            } w-[calc(100%-40px)] mx-auto h-12  block mt-10 rounded-[10px]  `}
          >
            ورود به فروشگاه
          </button>
          {/* </NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default Acconut;
