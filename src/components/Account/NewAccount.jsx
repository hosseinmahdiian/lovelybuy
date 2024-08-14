import React from "react";

const NewAccount = () => {
  return (
    <div className="bg-white h-full">
      <div className="pt-20">
        <div className="mx-auto w-[calc(100%-80px)] ">
          <h1 className="mb-6 font-bold">مشخصات خود را وارد کنید</h1>
          <p className="mb-6">تکمیل اطلاعات کاربری</p>
        </div>

        <div className="mt-6 child:mb-5 mx-8 ">
          <div className="relative   ">
            <input
              className="peer border rounded-[10px] outline-gray-300 h-12 w-full  px-5"
              placeholder=" "
              id="name"
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
              className="absolute start-1 IrHomama top-3 rounded-[10px] transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
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
            <option value="">----------</option>
            <option value="">بیمارستان عشایر</option>
            <option value=""> دانشگاه علوم پزشکی لرستان</option>
          </select>
          {/* -------------------- */}
          <div className="relative    ">
            <input
              className="peer border rounded-[10px] outline-gray-300 h-12 w-full px-5"
              placeholder=" "
              id="duty"
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
            <option value="">----------</option>
            <option value="">خوزستان</option>
            <option value="">لرستان</option>
          </select>
          {/*  */}
          <select
            name=""
            id=""
            className=" w-full  p-2 block  border mx-auto h-12 rounded-[10px]  appearance-none "
          >
            <option value="">----------</option>
            <option value="">خرم آباد</option>
            <option value="">بروجرد</option>
            <option value="">دزفول</option>
            <option value="">اهواز</option>
          </select>
          {/*  */}
        </div>
        <button className="w-[calc(100%-60px)] mx-auto  h-12 bg-blue-500 block  mt-5 rounded-[10px] text-white ">
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
