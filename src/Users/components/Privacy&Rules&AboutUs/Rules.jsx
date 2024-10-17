import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Rules = () => {
  return (
    <div>
      <div className="  max-w-3xl  mx-auto">
        <div className=" mt-5  mx-auto   ">
          <NavLink
            to="/user"
            className="flex  item-center align-middle gap-2  "
          >
            <IoIosArrowForward className=" mt-1 text-2xl" />
            <span className="text-red-500 font-bold text-xl">
              شرایط و قوانین استفاده
            </span>
          </NavLink>

          <div className=" mx-5 mt-8 text-justify">
            <div>
              <span className="font-bold mb-5 ">
                با تشکر از بازدید شما از وبسایت ما.
              </span>
              <p className="mt-4">
                استفاده از این وبسایت به معنی پذیرش کامل شرایط و قوانین زیر است
              </p>
            </div>
            <div className="mt-8">
              <span className="font-bold mb-5 ">اطلاعات شخصی: </span>
              <p className="mt-4">
                اطلاعاتی که شما در اختیار ما قرار می‌دهید، مانند نام، ایمیل و
                آدرس، به صورت محرمانه نگه داشته می‌شود و تنها برای پردازش
                سفارشات و ارتباط با شما استفاده می‌شود.
              </p>
            </div>
            <div className="mt-8">
              <span className="font-bold mb-5 ">محصولات و خدمات: </span>
              <p className="mt-4">
                اطلاعات ارائه شده درباره محصولات و خدمات ممکن است بدون اطلاع
                قبلی تغییر کند.
              </p>
            </div>
            <div className="mt-8">
              <span className="font-bold mb-5 ">حق کپی‌رایت: </span>
              <p className="mt-4">
                تمامی مطالب و محتواهای این وبسایت، متعلق به نام وبسایت بوده و
                هرگونه کپی‌برداری بدون مجوز، غیرقانونی است.
              </p>
            </div>
            <div className="mt-8">
              <span className="font-bold mb-5 ">اشتراک‌گذاری اطلاعات:</span>
              <p className="mt-4">
                ما اطلاعات شخصی شما را با اشخاص ثالث به اشتراک نمی‌گذاریم، مگر
                اینکه برای پردازش سفارش شما یا به دلایل قانونی الزامی باشد.
              </p>
            </div>
            <div className="mt-8">
              <span className="font-bold mb-5 ">مسئولیت‌ها: </span>
              <p className="mt-4">
                لاولی بای هیچ مسئولیتی در قبال خسارات احتمالی ناشی از استفاده نا
                مناسب یا کلاهبرداری افراد سودجو با نام شرکت از این وبسایت یا
                محصولات آن ندارد
              </p>
            </div>
            <div className="mt-8">
              <span className="font-bold mb-5 ">قوانین حاکم: </span>
              <p className="mt-4">
                این شرایط و قوانین مطابق با قوانین جمهوری اسلامی ایران تنظیم شده
                است و هرگونه اختلاف احتمالی، تابع قوانین دادگاه‌های صالح در
                ایران خواهد بود.
              </p>
              <br />
              <p className="mt-4">
                با استفاده از این وبسایت، شما موافقت خود را با این شرایط و
                قوانین اعلام می‌دارید.
              </p>
              <br />
              <p className="mt-4">
                برای اطلاعات بیشتر، لطفا به صفحه
                <NavLink
                  to="/user/Privacy"
                  className="font-bold text-blue-500 px-1"
                >
                  سیاست حریم خصوصی
                </NavLink>
                ما مراجعه کنید.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
