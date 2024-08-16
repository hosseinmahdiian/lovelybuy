import React from "react";

const NewAccount = ({ data, dispach }) => {
  return (
    <div
      className={`   bg-white  mx-auto relative pb-4 ${
        !data.NewAccount ? `hidden` : `block`
      }`}
    >
      {" "}
      <div className="pt-12">
        <div className="mx-auto w-[calc(100%-40px)] ">
          <h1 className="mb-6 font-bold">مشخصات خود را وارد کنید</h1>
          <p className="mb-6">تکمیل اطلاعات کاربری</p>
        </div>

        <div className="mt-6 child:mb-5 mx-5 ">
          <div className="relative   ">
            <input
              className="peer border rounded-[10px] outline-gray-300 h-12 w-full  px-5"
              placeholder=" "
              id="name"
              type="text"
            />
            <label
              htmlFor="name"
              className="absolute start-1 IrHomama top-3 rounded-[10px] transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
            >
              نام
            </label>
          </div>
          {/*  */}
          <div className="relative   ">
            <input
              className="peer border rounded-[10px] outline-gray-300 h-12 w-full px-5 "
              placeholder=" "
              type="text"
              id="lastName"
            />
            <label
              htmlFor="lastName"
              className="absolute start-1 IrHomama top-3 rounded-[10px] transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
            >
              نام خانوادگی{" "}
            </label>
          </div>
          {/*  */}
          <div className="relative   ">
            <input
              className="peer border rounded-[10px] outline-gray-300 h-12 w-full px-5 "
              placeholder=" "
              id="personId"
              type="text"
            />
            <label
              htmlFor="personId"
              className="absolute start-1 IrHomama top-3 rounded-[10px] transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
            >
              کدملی{" "}
            </label>
          </div>
          {/*  */}{" "}
          <div className="relative    ">
            <input
              className="peer border rounded-[10px] outline-gray-300 h-12 w-full px-5"
              placeholder=" "
              id="pass"
              type="password"
            />
            <label
              htmlFor="pass"
              className="absolute start-1 IrHomama top-2.5 rounded-[10px] transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
            >
              رمزعبور{" "}
            </label>
          </div>
          {/*  */}
          <select
            name=""
            id=""
            className="w-full  p-2 block  border mx-auto h-12 rounded-[10px]  appearance-none  "
          >
            <option selected disabled value={0}>
              ارگان
            </option>
            <option value="1">بیمارستان عشایر</option>
            <option value="2"> دانشگاه علوم پزشکی لرستان</option>
          </select>
          {/* -------------------- */}
          <div className="relative    ">
            <input
              className="peer border rounded-[10px] outline-gray-300 h-12 w-full px-5"
              placeholder=" "
              id="duty"
              type="text"
            />
            <label
              htmlFor="duty"
              className="absolute start-1 IrHomama top-3 rounded-[10px] transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
            >
              خدمت
            </label>
          </div>
          {/*  */}
          <select
            name=""
            id=""
            className=" w-full  p-2 block  border mx-auto h-12 rounded-[10px]  appearance-none "
          >
            <option selected disabled value={0}>
              استان
            </option>
            <option value="1">خوزستان</option>
            <option value="2">لرستان</option>
          </select>
          {/*  */}
          <select
            name=""
            id=""
            className=" w-full  p-2 block  border mx-auto h-12 rounded-[10px]  appearance-none "
          >
            <option selected disabled value={0}>
              شهر
            </option>
            <option value="1">خرم آباد</option>
            <option value="2">بروجرد</option>
            <option value="3">دزفول</option>
            <option value="4">اهواز</option>
          </select>
          {/*  */}
          <div className="relative   ">
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
          </div>
          {/*  */}
        </div>
        <button
          onClick={() => {
            // console.log(data.Account);
            dispach({ type: "NewAccount" });
            dispach({ type: "SinUp" });

            // console.log(data.Account);
          }}
          className="w-[calc(100%-60px)] mx-auto  h-12 bg-blue-500 block  mt-5 rounded-[10px] text-white "
        >
          ذخیره اطلاعات
        </button>

        <a href="" className=" mt-5 mx-auto text-blue-500 block w-fit ">
          {" "}
          نیاز به کمک دارم
        </a>
      </div>
    </div>
  );
};

export default NewAccount;
