import React from "react";
import ItemSettingUser from "./Item-Setting-User";

const SettingUser = () => {
  return (
    <div className="mt-6 w-[calc(100%-40px)] max-w-2xl mx-auto">
      <ItemSettingUser />
      <ItemSettingUser />
      <ItemSettingUser />
      <ItemSettingUser />
      <ItemSettingUser />
      <ItemSettingUser />
      <ItemSettingUser />

      <button className="w-full  mx-auto h-12 bg-blue-500 block  mt-5 rounded-[10px] text-white ">
        ذخیره اطلاعات
      </button>

      {/* <Counter /> */}
    </div>
  );
};

export default SettingUser;
