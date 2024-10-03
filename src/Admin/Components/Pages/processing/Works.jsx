import React from "react";
import ToDo from "./To-Do";
const Works = () => {
  return (
    <>
      <div className=" relative mt-5 w-[calc(100%-40px)] max-w-2xl mx-auto">
        <h2 className="my-5 text-red-500">نیاز به اقدام</h2>
        <div className="bg-white  rounded-lg mt-3">
          <ToDo check={false} />
          <ToDo check={false} />
          <h2 className="my-5 text-blue-600">انجام شده</h2>
          <ToDo check={true} />
          <ToDo check={true} />
        </div>
      </div>
    </>
  );
};

export default Works;
