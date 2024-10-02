import React, { useContext } from "react";
import { reducerContext } from "../../constant/Context";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const ChengPass = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  const navigate =useNavigate()
  return (
    <div className={`  max-w-xl bg-white  mx-auto relative pt-1`}>
      {" "}
      <div className={``}>
        <div className="w-[calc(100%-40px)] mx-auto  mt-28">
          <div
            className="flex gap-3 items-center mb-6"
            onClick={() => navigate(-1)}
          >
            <IoIosArrowForward className="text-xl" />
            <h1 className=" text-lg text-red-500 font-bold mb-1"> رمز عبور </h1>
          </div>{" "}
          <p className="mb-16">رمز عبور جدید را وارد کنید</p>
        </div>

        <div className=" ">
          <div className="relative w-[calc(100%-40px)] mx-auto ">
            <input
              className="peer border px-5 rounded-[10px] outline-gray-300 h-14 w-full "
              placeholder=" "
              id="pass"
              type="password"
            />
            <label
              htmlFor="pass"
              className="absolute start-1 IrHomama top-4 rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
            >
              رمز عبور جدید
            </label>
          </div>

          <button
            onClick={() => {
              navigate(-1);
            }}
            className="w-[calc(100%-40px)]  h-14 bg-blue-500 block mx-auto mt-8 rounded-[10px] text-white font-IrHoma"
          >
            ادامه
          </button>
          <p
            href=""
            className=" mt-5 mx-auto text-blue-500 block w-fit "
            onClick={() => {
              dispach({ type: "Conection" });
            }}
          >
            {" "}
            نیاز به کمک دارم
          </p>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default ChengPass;
