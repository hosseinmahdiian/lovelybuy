import React from "react";
const Slide = ({ item ,select}) => {
  const { image, title, name } = item;

  return (
    <div>
      <div className={`relative `} name={name}>
        <img
          src={image}
          className={`md:w-[245px] md:h-[118px] sm:w-[205px] sm:h-[90px]  es:w-[170px] sm:h-[75px]${
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
    </div>
  );
};

export default Slide;
