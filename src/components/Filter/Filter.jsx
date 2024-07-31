import { space } from "postcss/lib/list";
import React from "react";

const Filter = ({ item, select }) => {
  const { title, name } = item;
  return (
    // <div className={`mt-6 items-center max-w-none relative`} name={name}>
      <div
        id={name}
        name={name}
        // style={{}}
        className={` font-IrSans  rounded-xl items-center h-7 px-2  w-fit border  mt-6 whitespace-nowrap ${
          name == select.name ? `text-white bg-black bg-opacity-80` : ``
        }  `}
      >
        {title}
      {/* </div> */}
    </div>
  );
};

export default Filter;
