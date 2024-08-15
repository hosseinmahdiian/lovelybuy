import React from "react";

const Vrify = ({ data, dispach }) => {
  console.log(data.Vrify);

  return (
    <div
      className={`  bg-white  mx-auto relative px-8 ${
        !data.Vrify ? `hidden` : `block`
      }`}
    >
      {" "}
      <div className="mt-36">
        <h2 className="mb-6">کد تایید را وارد کنید</h2>
        <p>کد تایید را به شماره موبایل 09216919291 ارسال گردید</p>
        <p>
          شماره موبایل اشتباه است ؟{" "}
          <span className="text-blue-500">ویرایش شماره</span>
        </p>
      </div>
      <div className=" flex gap-3 mt-8 mx-auto w-fit  child:w-12 child:h-12 child:border child:border-blue-600 child:rounded-[10px] child:px-4 ">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
      <button
        onClick={() => {
          if (data.AcconutHave) {
            dispach({ type: "Vrify" });
            dispach({ type: "SinUp" });
          } else {
            dispach({ type: "Vrify" });
            dispach({ type: "NewAccount" });
          }
        }}
        className="w-full  h-14 bg-blue-500 block mx-auto mt-8 rounded-[10px] text-white font-IrHoma"
      >
        ادامه
      </button>
      <div className="flex justify-between mt-7 items-center">
        <p> ارسال مجدد کد تا {}</p>
        <button className={`px-2 h-12 bg-blue-500 text-white rounded-[10px] `}>
          ارسال مجدد
        </button>
      </div>
    </div>
  );
};

export default Vrify;
