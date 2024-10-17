import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Conection from "../Conection";

const Privacy = () => {
  return (
    <div className="  max-w-3xl  mx-auto">
      <div className=" mt-5  mx-auto   ">
        <NavLink
          to="/user"
          className="flex  item-center align-middle gap-2  "
        >
          <IoIosArrowForward className=" mt-1 text-2xl" />
          <span className="text-red-500 font-bold text-xl">حریم خصوصی</span>
        </NavLink>

        <div className=" mx-5 mt-8 text-justify">
          <div>
            <span className="font-bold mb-5 ">با سلام و احترام،</span>
            <p className="mt-4">
              ما به حریم خصوصی شما اهمیت می‌دهیم. حفاظت از حریم خصوصی شما برای
              ما مهم است.در این بخش به طور خلاصه به شما توضیح می‌دهیم که ما چه
              اطلاعاتی از شما جمع‌آوری می‌کنیم و چگونه از آن استفاده می‌کنیم:
              وقتی در فروشگاه ما ثبت‌نام می‌کنید یا خرید انجام می‌دهید، اطلاعات
              شخصی‌تان مثل نام، ایمیل و آدرس را با ما به اشتراک می‌گذارید. ما
              این اطلاعات را با نهایت دقت محافظت می‌کنیم و تنها برای موارد زیر
              از آن‌ها استفاده می‌کنیم:
            </p>
          </div>
          <div className="mt-8">
            <span className="font-bold mb-5 ">اطلاعات جمع‌آوری شده:</span>
            <p className="mt-4">
              اطلاعات شخصی مانند نام، کد ملی، شماره تلفن، شهر و استان در هنگام
              ثبت‌نام یا خرید . اطلاعات مربوط به خریدهای شمامحصولات خریداری شده،
              تاریخ خرید، آدرس ارسال . اطلاعات مربوط به تعامل شما با وبسایتصفحات
              بازدید شده، کلیک‌ها
            </p>
          </div>
          <div className="mt-8">
            <span className="font-bold mb-5 ">نحوه استفاده از اطلاعات:</span>
            <p className="mt-4">
              پردازش سفارشات و ارسال محصولات نیاز به اطلاعات نام ،آدرس ،تماس شما
              داریم. . بهبود تجربه کاربری و شخصی‌سازی وبسایت . ارسال ایمیل‌های
              اطلاع‌رسانی یا پیامک مانند تایید سفارش، تخفیفات و محصولات جدید و
              پیشنهادات ویژه . بهبود تجربه خرید: با تحلیل اطلاعات‌تان، سعی
              می‌کنیم تجربه خرید بهتری را برای‌تان فراهم کنیم و پیشنهادهای
              شخصی‌سازی شده به شما ارائه دهیم
            </p>
          </div>
          <div className="mt-8">
            <span className="font-bold mb-5 ">امنیت اطلاعات:</span>
            <p className="mt-4">
              ما از اقدامات امنیتی لازم برای محافظت از اطلاعات شخصی شما استفاده
              می‌کنیم.ما اقدامات امنیتی قوی‌ای را برای محافظت از اطلاعات شما در
              برابر دسترسی‌های غیرمجاز انجام می‌دهیم.اطلاعات شما برای ما محرمانه
              است و ما آن را با هیچ شخص ثالثی به اشتراک نمی‌گذاریم، مگر اینکه
              قانون به ما چنین اجباری کند.
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
            <span className="font-bold mb-5 ">حقوق شما:</span>
            <p className="mt-4">
              شما حق دارید به اطلاعات شخصی خود دسترسی داشته باشید، آن‌ها را
              ویرایش کنید یا درخواست حذف‌شان را بدهید.برای اطلاعات دقیق‌تر، لطفا
              به{" "}
              <NavLink
                to="/user/Rules"
                className="font-bold text-blue-500 px-1"
              >
                شرایط و قوانین استفاده
              </NavLink>{" "}
              مراجعه کنید.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
