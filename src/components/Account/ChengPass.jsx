import React, { useContext } from "react";
import { reducerContext } from "../../constant/Context";

const ChengPass = ({ data, dispach }) => {

   const reducer = useContext(reducerContext);
   const [reduce, dispacher] = reducer;
  return (
    <div
      className={`  bg-white  mx-auto relative pt-1 ${
        !data.ChengPass ? `hidden` : `block`
      }`}
    >
      {" "}
      <div className={``}>
        <div className="w-[calc(100%-40px)] mx-auto  mt-28">
          <h1 className="mb-6 text-lg">رمز عبور</h1>
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
              dispach({ type: "ChengPass" });
              dispach({ type: "Account" });
            }}
            className="w-[calc(100%-40px)]  h-14 bg-blue-500 block mx-auto mt-8 rounded-[10px] text-white font-IrHoma"
          >
            ادامه
          </button>
          <p
            href=""
            className=" mt-5 mx-auto text-blue-500 block w-fit "
            onClick={() => {
              dispacher({ type: "Conection" });
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
