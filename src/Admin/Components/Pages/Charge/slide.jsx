import React from "react";
const Slide = ({ item ,select}) => {
  const { image, title, name } = item;

  return (
    <div>
      <div className={`relative w-[170px] h-[75px] `} name={name}>
        <img
          src={image}
          className={` w-[170px] h-[75px] ${
            !(name == select.name) && ` opacity-25`
          } `}
          id={name}
        />
        <span
          id={name}
          className="absolute bottom-2 left-0 right-0 font-IrSansleft-6 inline-block mx-auto  w-[125px] h-[30px] text-white bg-slate-600 bg-opacity-50 rounded-md border-white border-2 text-center pt-1"
        >
          {title}
        </span>
      </div>
    </div>
  );
};

export default Slide;
