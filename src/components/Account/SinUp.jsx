import React from "react";
import { BsFileEarmarkText } from "react-icons/bs";

const SinUp = () => {
  return (
    <div className=" h-full bg-white border mx-auto relative">
      <div className={``}>
        <div className=" ">
          <div className="relative w-[calc(100%-64px)] mx-auto ">
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
              رمز عبور
            </label>
          </div>

          <button
            // onClick={() => {
            //   dispach({ type: "acconut" });
            // }}
            className="w-[calc(100%-64px)]  h-14 bg-blue-500 block mx-auto mt-8 rounded-[10px] text-white font-IrHoma"
          >
            ادامه
          </button>
          <a href="" className=" mt-5 mx-auto text-blue-500 block w-fit ">
            {" "}
            نیاز به کمک دارم
          </a>
        </div>
      </div>

      {/*  */}
    </div>
  );
};

export default SinUp;
