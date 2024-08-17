import React, { useContext } from "react";
import { BsFileEarmarkText } from "react-icons/bs";
import { reducerContext } from "../../constant/Context";

const SinUp = ({ data, dispach }) => {
  const reducer = useContext(reducerContext);
  const [reduce, dispachre] = reducer;
  return (
    <>
      <div
        className={`  bg-white  mx-auto relative pt-52 ${
          !data.SinUp ? `hidden` : `block`
        }`}
      >
        {" "}
        <div className={``}>
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
                رمز عبور
              </label>
            </div>

            <button
              onClick={() => {
                dispach({ type: "SinUp" });
                // dispach({ type: "Account" });
                dispach({ type: "Login" });
                // dispacher({ type: "logIn" });

              }}
              className="w-[calc(100%-40px)]  h-14 bg-blue-500 block mx-auto mt-8 rounded-[10px] text-white font-IrHoma"
            >
              ادامه
            </button>
            <p
              onClick={() => {
                // console.log(data.Account);
                dispach({ type: "SinUp" });
                dispach({ type: "ChengPass" });

                // console.log(data.Account);
              }}
              className=" mt-5 mx-auto text-blue-500 block w-fit "
            >
              {" "}
              نیاز به کمک دارم
            </p>
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
};

export default SinUp;
