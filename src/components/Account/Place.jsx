import React, { useContext } from "react";
import { reducerContext } from "../../constant/Context";

const Place = () => {
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;
  return (
    reduce.Place && (
      <div
        className={` overflow-y-scroll h-screen  bg-white  mx-auto relative pb-4 ${
          !reduce.Place ? `hidden` : `block`
        }`}
      >
        {" "}
        <div className="w-[calc(100%-40px)] mx-auto  mt-28">
          <h1 className="mb-6 text-lg"> محل تحویل</h1>
          <p className="mb-16"> مکان و واحد خدمت را وارد کنید</p>
        </div>
        {/* ============================================ */}
        <div className="mx-4">
          <select
            name=""
            id=""
            className="w-full  p-2 block  border mx-auto h-12 rounded-[10px]  appearance-none  mb-2 "
          >
            <option selected disabled value={0}>
              ارگان
            </option>
            <option value="1">بیمارستان عشایر</option>
            <option value="2"> دانشگاه علوم پزشکی لرستان</option>
          </select>
          {/* ========================== */}
          <div className="relative  !mb-3 ">
            <textarea
              className="peer border px-5 py-2 rounded-[10px] outline-gray-300 h-20 w-full "
              placeholder=" "
              type="text"
              id="unit"
            />
            <label
              htmlFor="unit"
              className="absolute  start-1 IrHomama top-3 rounded-[10px] transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
            >
              واحد خدمت
            </label>

            <button
              onClick={() => {
                // console.log(reduce.Account);
                dispach({ type: "Place" });
                dispach({ type: "Login" });

                // console.log(reduce.Account);
              }}
              className="w-full mx-auto  h-12 bg-blue-500 block  mt-5 rounded-[10px] text-white "
            >
              ذخیره اطلاعات
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
      </div>
    )
  );
};

export default Place;
