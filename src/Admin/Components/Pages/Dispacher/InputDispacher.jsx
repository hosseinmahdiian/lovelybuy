import React from 'react';

const InputDispacher = () => {
    return (
      <div className="relative w-[calc(100%-118px)]">
        <input
          className="peer border rounded-[10px] px-5 outline-gray-300 h-12 w-full "
          placeholder=" "
          id="do"
        />
        <label
          htmlFor="do"
          className="absolute whitespace-nowrap start-1 IrHomama top-2.5 rounded-2xl transition-all ease-linear peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-white px-2"
        >
          اسم باز گشتی
        </label>
      </div>
    );
}

export default InputDispacher;
