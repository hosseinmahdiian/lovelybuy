import React from "react";

const InputSearch = () => {
  return (
    <>
      <div className="relative w-[calc(100%-66px)] ">
        <input
          className="peer border px-5 rounded-[10px] outline-gray-300 h-14 w-full "
          placeholder=" "
          id="search"
        />
        <label
          htmlFor="search"
          className="absolute start-1 IrHomama top-4 rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
        >
          جستجو با نام یا کد ملی
        </label>
      </div>
    </>
  );
};

export default InputSearch;
