import React from "react";
const Slide = ({ item ,select}) => {
  const { image, title, name,id } = item;

  // console.log(select?.id==id);
  

  return (
      <div className={`relative md:w-[245px]  sm:w-[205px]   w-[170px]  `} id={id}>
        <img
          src={image}
          className={` w-72 h-20 ${
            (id==select?.id) && ` opacity-25 bg-black `
          } `}
          id={id}
        />
        <span
          id={id}
          className="absolute bottom-1 font-IrSans ms:left-9 left-6 inline-block mx-auto md:w-[179px] md:h-[40px]  \\ sm:w-[149px] sm:h-[30px] \\ w-[125px] h-[30px] text-white bg-slate-600 bg-opacity-50 rounded-md border-white border-2 text-center pt-1"
        >
          {title}
        </span>
      </div>
  );
};

export default Slide;
