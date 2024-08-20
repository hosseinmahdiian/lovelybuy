import React from "react";
const Slide = ({ item ,select}) => {
  const { image, title, name } = item;

  return (
      <div className={`relative md:w-[245px]  sm:w-[205px]   es:w-[170px]  `} name={name}>
        <img
          src={image}
          className={`${
            !(name == select.name) && ` opacity-25`
          } `}
          id={name}
        />
        <span
          id={name}
          className="absolute bottom-1 font-IrSans ms:left-9 left-6 inline-block mx-auto md:w-[179px] md:h-[40px]  \\ sm:w-[149px] sm:h-[30px] \\ w-[125px] h-[30px] text-white bg-slate-600 bg-opacity-50 rounded-md border-white border-2 text-center pt-1"
        >
          {title}
        </span>
      </div>
  );
};

export default Slide;
