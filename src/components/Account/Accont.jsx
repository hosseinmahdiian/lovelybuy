import React, { useContext } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoInformationCircleOutline } from "react-icons/io5";
import logo from "../../assets/images/logo.png";
import { reducerContext } from "../../constant/Context";
import { GoUnlock } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { MdOutlineLogout } from "react-icons/md";

const Acconut = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  return (
    <div className=" h-full bg-white border mx-auto relative">
      <div className={`${reduce.acconut ? `hidden` : `block`}`}>
        <div
          className={` py-10 flex items-center justify-between px-3 border-b`}
        >
          <h1 className="font-IrSana text-red-600">ورود به فروشگاه</h1>
          <span
            className=" w-8 h-8 text-center cursor-pointer"
            onClick={() => {
              dispach({ type: "logIn" });
            }}
          >
            <IoIosArrowBack className=" mt-1.5" />
          </span>
        </div>
        <img src={logo} alt="" className="mx-auto mb-20 mt-10 " />

        <div className=" ">
          <div className="relative  w-3/4 mx-auto ">
            <input
              className="peer border-2 rounded-lg outline-gray-300 h-10 w-full "
              placeholder=" "
              id="user"
            />
            <label
              htmlFor="user"
              className="absolute start-1 IrHomama top-1.5 transition-all ease-linear peer-focus:start-2 peer-focus:-top-3.5 peer-focus:text-sm bg-white px-2"
            >
              نام کابری
            </label>
          </div>

          <div className="relative w-3/4 mx-auto h-10 mt-5">
            <input
              className="peer border-2 rounded-lg outline-gray-300 h-10 w-full"
              placeholder=" "
              id="pass"
            />
            <label
              htmlFor="pass"
              className="absolute font-IrHomama start-1 top-1.5 transition-all ease-linear peer-focus:start-2 peer-focus:-top-3.5 peer-focus:text-sm bg-white px-2"
            >
              رمز عبور
            </label>
          </div>

          <button
            onClick={() => {
              dispach({ type: "acconut" });
            }}
            className="w-3/4 h-10 bg-blue-500 block mx-auto mt-5 rounded-lg text-white font-IrHoma"
          >
            ورود به فروشگاه
          </button>
          <a href="" className="font-IrHoma mx-auto text-blue-500 block w-fit ">
            {" "}
            نیاز به کمک دارم
          </a>
        </div>

        <div className="flex items-center absolute bottom-3 right-3">
          <span>
            <IoInformationCircleOutline />
          </span>
          <p className="text-lg">
            باورد به فذوشگاه
            <a href="" className="text-blue-500">
              قوانین و مقررات
            </a>
            آن را می پذیرم
          </p>
        </div>
      </div>

      {/*  */}
      <div
        className={`font-IrHoma child:w-5/6 w-full ${
          reduce.acconut ? `block` : `hidden`
        }`}
      >
        <div className="py-10 flex !w-full items-center justify-between px-3 border-b">
          <h1 className="font-IrSana text-red-600">حساب کار بری</h1>
          <span
            className=" w-8 h-8 text-center cursor-pointer"
            onClick={() => {
              dispach({ type: "logIn" });
            }}
          >
            <IoIosArrowBack className="  mt-1.5" />
          </span>
        </div>

        <div className="  bg-gray-600 my-4 text-white border rounded-xl mx-auto">
          <div className="w-11/12 my-3 mx-auto border-b border-white ">
            <h2>اشکان حسنوند</h2>
            <p>4060405531</p>
          </div>
          <div className="w-11/12 my-3 mx-auto flex  justify-between">
            <p>اعتبار شما</p>
            <span className="flex gap-2">
              <h2>3.125.000</h2>
              <p>تومان</p>
            </span>
          </div>

          <div className=" flex justify-around my-4 child:border child:rounded-lg w-11/12 mx-auto">
            <p className="w-3/4 h-10  pt-2 pr-2"> واریز مبلغ</p>
            <span>
              <IoIosArrowBack className="w-1/4  h-10 mx-auto text-2xl " />
            </span>
          </div>
        </div>

        <div className="mx-auto">
          <div>
            <div className="flex items-center gap-3">
              <span>
                <GoUnlock />
              </span>
              <p>رمز عبور</p>
            </div>
            <p className="text-gray-600">**********</p>
          </div>

          <div className="relative  mx-auto h-10 mt-5 flex  justify-around my-4  w-11/12 ">
            <div className="w-3/4">
              <input
                className="peer border-2  rounded-lg outline-gray-300 h-10 w-full"
                placeholder=" "
                id="pass"
              />
              <label
                htmlFor="pass"
                className="absolute text-sm  font-IrHomama start-3 top-1.5 transition-all ease-linear peer-focus:start-4 peer-focus:-top-3 peer-focus:text-[12px] bg-white mx-2"
              >
                تعییر رمز عبور
              </label>
            </div>
            <span className="border rounded-lg ">
              <IoIosArrowBack className="w-1/4  h-10 mx-auto text-2xl " />
            </span>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <span>
                <GrLocation />
              </span>
              <p> محل تحویل</p>
            </div>
            <p className="text-gray-600">محل پخش بیمارستان شهدی عشایر</p>
          </div>

          <div
            className="flex gap-3 text-red-600 items-center mt-4"
            onClick={() => {
              dispach({ type: "acconut" });
            }}
          >
            <span>
              <MdOutlineLogout />
            </span>
            <p>خروج از حساب کار بری</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acconut;
