import React, { useContext } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoInformationCircleOutline } from "react-icons/io5";
import logo from "../../assets/images/logo.png";
import { reducerContext } from "../../constant/Context";
import { GoUnlock } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { MdOutlineLogout } from "react-icons/md";
import { BsFileEarmarkText } from "react-icons/bs";

const Acconut = ({ data,dispach }) => {
  // const [data, dispach] = info
  // console.log(data.Account);

  return (
    <div
      className={` h-full bg-white border mx-auto relative ${
        !data.Account ? `hidden` : `block`
      }`}
    >
      <div className={``}>
        <img src={logo} alt="" className="mx-auto mb-20 mt-28 " />

        <div className=" ">
          <div className="relative w-[calc(100%-40px)] mx-auto ">
            <input
              className="peer border px-5 rounded-[10px] outline-gray-300 h-14 w-full "
              placeholder=" "
              id="phone"
            />
            <label
              htmlFor="phone"
              className="absolute start-1 IrHomama top-4 rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
            >
              شماره موبایل
            </label>
          </div>

          <button
            onClick={() => {
              // console.log(data.Account);
              dispach({ type: "Account" });
              dispach({ type: "Vrify" });

              // console.log(data.Account);
            }}
            className="w-[calc(100%-40px)]  h-14 bg-blue-500 block mx-auto mt-8 rounded-[10px] text-white font-IrHoma"
          >
            ادامه
          </button>
          <a href="" className=" mt-5 mx-auto text-blue-500 block w-fit ">
            {" "}
            نیاز به کمک دارم
          </a>
        </div>

        <div className="flex w-fit right-0 left-0 mx-auto items-center  absolute gap-2 bottom-6 ">
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
      </div>

      {/*  */}
    </div>
  );
};

export default Acconut;
