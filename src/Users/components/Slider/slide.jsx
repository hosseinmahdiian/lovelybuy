import React from "react";
const Slide = ({ item ,selectCatgory}) => {
  const { image, title, name,id } = item;

  // console.log(selectCatgory?.id);
  

  return (
      <div className={`relative   w-[270px] h-36 rounded-xl overflow-hidden  border `} id={id}>
        <img
          src={image}
          className={` w-full h-full bg ${
            (id!=selectCatgory?.id) && ` opacity-25 !bg-black `
          } `}
          id={id}
        />
        <span
          id={id}
          className="absolute bottom-1 font-IrSans left-0 right-0  inline-block mx-auto md:w-[179px] md:h-[40px]  \\ sm:w-[149px] sm:h-[30px] \\ w-[125px] h-[30px] text-white bg-slate-600 bg-opacity-50 rounded-md border-white border-2 text-center pt-1"
        >
          {title}
        </span>
      </div>
  );
};

export default Slide;
