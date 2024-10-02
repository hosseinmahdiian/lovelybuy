import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Location = () => {
  const navigate = useNavigate();
  const [someElse, setSomeElse] = useState(false);

  return (
    <div>
      <div className="border border-orange-400 bg-orange-50 mx-5 mb-6 rounded-[10px] p-4 ">
        <p className="text-orange-500">Location</p>
      </div>
      <div className="relative w-[calc(100%-40px)] mx-auto ">
        <input
          className="peer border px-5 rounded-[10px] outline-gray-300 h-14 w-full "
          placeholder=" "
          id="phone"
          name="phone"
          type="number"
          // onChange={chenchHandeler}
          inputMode="numeric"
        />
        <label
          htmlFor="phone"
          className={`absolute start-1 IrHomama    rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2 ${
            !!true ? `start-2.5 -top-2 !text-sm` : `top-4`
          }`}
        >
          جزئیات آدرس
        </label>
      </div>

      <div>
        <div className="flex gap-6 mx-5 my-5">
          <div className="relative w-[calc(100%-40px)] mx-auto ">
            <input
              className="peer border px-5 rounded-[10px] outline-gray-300 h-14 w-full "
              placeholder=" "
              id="phone"
              name="phone"
              type="number"
              // onChange={chenchHandeler}
              inputMode="numeric"
            />
            <label
              htmlFor="phone"
              className={`absolute start-1 IrHomama    rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2 ${
                true ? `start-2.5 -top-2 !text-sm` : `top-4`
              }`}
            >
              پلاک
            </label>
          </div>{" "}
          <div className="relative w-[calc(100%-40px)] mx-auto ">
            <input
              className="peer border px-5 rounded-[10px] outline-gray-300 h-14 w-full "
              placeholder=" "
              id="phone"
              name="phone"
              type="number"
              // onChange={chenchHandeler}
              inputMode="numeric"
            />
            <label
              htmlFor="phone"
              className={`absolute start-1 IrHomama    rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2 ${
                true ? `start-2.5 -top-2 !text-sm` : `top-4`
              }`}
            >
              واحد
            </label>
          </div>
        </div>
        <div className="relative w-[calc(100%-40px)] mx-auto ">
          <input
            className="peer border px-5 rounded-[10px] outline-gray-300 h-14 w-full "
            placeholder=" "
            id="phone"
            name="phone"
            type="number"
            // onChange={chenchHandeler}
            inputMode="numeric"
          />
          <label
            htmlFor="phone"
            className={`absolute start-1 IrHomama    rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2 ${
              true ? `start-2.5 -top-2 !text-sm` : `top-4`
            }`}
          >
            عنوان آدرس
          </label>
        </div>
        <div className="mx-5 my-3 gap-2 flex  ">
          <input
            type="checkbox"
            id="check"
            onChange={(e) => setSomeElse(e.target.checked)}
          />
          <label htmlFor="check">دریافت کننده شخص دیگری است</label>
        </div>
        <div className={`flex gap-6 mx-5 my-5 ${!someElse && `hidden`}`}>
          <div className="relative w-[calc(100%-40px)] mx-auto ">
            <input
              className="peer border px-5 rounded-[10px] outline-gray-300 h-14 w-full "
              placeholder=" "
              id="phone"
              name="phone"
              type="number"
              // onChange={chenchHandeler}
              inputMode="numeric"
            />
            <label
              htmlFor="phone"
              className={`absolute start-1 IrHomama    rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2 ${
                true ? `start-2.5 -top-2 !text-sm` : `top-4`
              }`}
            >
              گیرنده
            </label>
          </div>{" "}
          <div className="relative w-[calc(100%-40px)] mx-auto ">
            <input
              className="peer border px-5 rounded-[10px] outline-gray-300 h-14 w-full "
              placeholder=" "
              id="phone"
              name="phone"
              type="number"
              // onChange={chenchHandeler}
              inputMode="numeric"
            />
            <label
              htmlFor="phone"
              className={`absolute start-1 IrHomama    rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2 ${
                true ? `start-2.5 -top-2 !text-sm` : `top-4`
              }`}
            >
              شماره تماس
            </label>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className=" w-[calc(100%-20px)] mx-auto  h-12 bg-blue-500 block  mt-5 rounded-[10px] text-white "
      >
        ذخیره اطلاعات
      </button>

      <p
        href=""
        className=" mt-5 mx-auto text-blue-500 block w-fit "
        //   onClick={() => {
        //     dispach({ type: "Conection" });
        //   }}
      >
        {" "}
        نیاز به کمک دارم
      </p>
    </div>
  );
};

export default Location;
