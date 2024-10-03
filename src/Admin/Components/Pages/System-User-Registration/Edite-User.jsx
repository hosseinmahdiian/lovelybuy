import React from "react";
const EditUsers = () => {
  return (
    <>
      <div className="mt-6 child:mb-5 w-[calc(100%-40px)] max-w-2xl mx-auto ">
        <div className="relative mx-2  ">
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
        <div className="relative mx-2  ">
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
        <div className="relative mx-2   ">
          <input
            className="peer border rounded-[10px] outline-gray-300 h-12 w-full px-5  "
            placeholder=" "
            id="phone"
          />
          <label
            htmlFor="phone"
            className="absolute start-1 IrHomama top-3 rounded-[10px] transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
          >
            تلفن{" "}
          </label>
        </div>
        {/*  */}
        <div className="relative mx-2  ">
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
        <div className="relative mx-2  ">
          <input
            className="peer border rounded-[10px] outline-gray-300 h-12 w-full px-5"
            placeholder=" "
            id="pass"
          />
          <label
            htmlFor="pass"
            className="absolute start-1 IrHomama top-3 rounded-[10px] transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
          >
            رمزعبور{" "}
          </label>
        </div>
        <div className="relative mx-2   ">
          <select
            name=""
            id=""
            className="peer border px-5 rounded-[10px] outline-gray-300 h-12 w-full  appearance-none "
          >
            <option selected disabled value={0}>
              استان
            </option>
            <option value="1">خوزستان</option>
            <option value="2">لرستان</option>
          </select>
        </div>
        {/*  */}
        <div className="relative mx-2  !mb-0 ">
          {/* <span>{arrowCity ? <IoIosArrowDown /> : <IoIosArrowUp />}</span> */}
          <select
            name=""
            id=""
            className=" w-full p-2 block  border mx-auto h-12 rounded-[10px]  appearance-none "
            // onClick={() => {
            //   console.log(arrowCity);
            //   setArrowCity((item) => !item);
            // }}
          >
            <option selected disabled value={0}>
              شهر
            </option>
            <option value="1">خرم آباد</option>
            <option value="2">بروجرد</option>
            <option value="3">دزفول</option>
            <option value="4">اهواز</option>
          </select>
        </div>
      </div>
      {/* -------------------- */}
      <button className="w-[calc(100%-40px)] mx-auto  h-12 bg-blue-500 block  mt-5 rounded-[10px] text-white ">
        ذخیره اطلاعات
      </button>

      {/* <Counter /> */}
    </>
  );
};

export default EditUsers;
