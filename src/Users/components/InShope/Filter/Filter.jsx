import { space } from "postcss/lib/list";
import React from "react";

const Filter = ({ item, select }) => {
  const { title, name } = item;
  // console.log(select);
  
  return (
    // <div className={`mt-6 items-center max-w-none relative`} name={name}>
      <div
        id={name}
        name={name}
        // style={{}}
        className={` font-IrSans  rounded-full items-center h-8 px-4  pt-0.5 cursor-pointer w-fit border   whitespace-nowrap ${
          name == select.name ? `text-white bg-black bg-opacity-80` : `bg-white`
        }  `}
      >
        {title}
      {/* </div> */}
    </div>
  );
};

export default Filter;
