import React, { useContext, useState } from "react";
import { reducerContext } from "../Users/constant/Context";
import { useQuery } from "react-query";
import { getCategory } from "../Users/services/Catgory";
import Loader from "../Users/components/Loader";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import Item from "./Item";

const navigation = [
  { name: "خانه", to: "/" },
  { name: "فروشگاه", to: "user" },
  { name: "فروشگاه حضوری", to: "ee" },
  { name: "ادمین", to: "admin" },
];

const items = [
  {
    name: "فروشگاه اینترنتی",
    to: "/",
    text: "اینجا همه‌چیز برای تجربه‌ای بی‌نظیر از خرید آسان و مطمئن فراهم شده. از محصولات باکیفیت و متنوع تا تخفیف‌های ویژه که هر بار شما را شگفت‌زده خواهد کرد. با ارسال رایگان، سفارشات خود را به راحتی درب منزل یا محل کار خود دریافت کنید. ما در خرید ارگانی بالاترین تخفیف و ارسال رایگان را به شما هدیه میدهیم و تیم پشتیبانی ما به صورت ۲۴ ساعته آماده است تا هرگونه سوال یا مشکلی را حل کند. همین حالا وارد شوید و خریدی لذت‌بخش را تجربه کنید!",
  },
  {
    name: "خرید حضوری",
    text: "با ورود به این پنل، دسترسی به اطلاعات کاملی از فروشندگان معتبر و لوکیشن دقیق فروشگاه‌ها همراه مسیریابی، ساعات کاری و ... خواهید داشت. هر فروشنده جزئیات و محصولات خود را به طور دقیق معرفی کرده و تخفیف‌های ویژه‌ای برای مشتریان ما ارائه می‌دهد پس به راحتی فروشگاه‌های نزدیک خود را پیدا کنید و از تجربه خرید حضوری بهره‌مند شوید. خرید حضوری هیچ‌گاه این‌قدر ساده و لذت‌بخش نبوده است!",
  },
  {
    name: "سرآشپز کوچولو ",
    text: "پیشگام در تغذیه سالم کودکان شما هستیم! با ثبت سفارش از بهترین و تازه‌ترین غذاهای خانگی بهره‌مند شوید و سلامتی و نشاط فرزندان‌تان را تضمین کنید. تمامی غذاها با عشق و دقت تهیه شده‌اند و از مواد اولیه با کیفیت استفاده می‌شود. والدین محترم می‌توانند با ورود به پنل ما، از تنوع و کیفیت بالای غذاها بهره‌مند شوند و نمونه غذا را دریافت کنند. با ما، مطمئن باشید که فرزندانتان همیشه بهترین تغذیه را در مدرسه، خانه و ... دریافت می‌کنند!",
  },
];

const MainPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const reducer = useContext(reducerContext);
  const [reduce, dispach] = reducer;

  const { isLoading: isLoadCategory, data: slid } = useQuery(
    ["get-category"],
    getCategory
  );

  return isLoadCategory ? (
    <Loader />
  ) : (
    <>
      <div class="rounded-full mt-2  relative isolate flex items-center gap-x-6 overflow-hidden bg-blue-600 px-6 py-2.5 sm:px-3.5 sm:before:flex-1 container  mx-auto">
        <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
          <h1 className="text-sm px-4 md:px-0 text-white">
            سفارش در حال انجام خرید اینترنتی / تاریخ تحویل/محل تحویل بیمارستان
            شهدای عشایر
          </h1>
          <a
            href="#"
            class="flex-none rounded-full bg-white px-3.5 py-1 text-sm font-semibold text-[#f90305] shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            کد تحویل 1243
          </a>
        </div>
        <div class="flex flex-1 justify-end">
          <button
            type="button"
            class="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          >
            <svg
              class="h-5 w-5 text-gray-900"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="bg-white  container mx-auto">
        <header className="absolute inset-x-0  z-50">
          <nav
            aria-label="Global"
            className="flex container mx-auto items-center justify-between p-6 lg:px-8"
          >
            <div className="flex lg:flex-1">
              <a to="#" className="-m-1.5 p-1.5">
                <img alt="" src={logo} className="h-8 w-auto" />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation?.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <NavLink
                to="/LoginUser"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                ورود <span aria-hidden="true">&rarr;</span>
              </NavLink>
            </div>
          </nav>
          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="lg:hidden "
          >
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
                <NavLink to="/" className="-m-1.5 p-1.5">
                  <img alt="" src={logo} className="h-8 w-auto" />
                </NavLink>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className="-mx-3 block rounded-lg px-3 py-2 text-left font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                  <div className="py-6">
                    <NavLink
                      to="/user/loginUser"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-left font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      ورود
                    </NavLink>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto  py-14 sm:py-28 lg:py-5 ">
            <div className="  sm:py-14">
              <div className="mx-auto  px-6 lg:px-8">
                <div className="mx-auto text-center ">
                  <h2 className="sm:text-2xl  text-xl text-nowrap font-bold tracking-tight text-[#f90305] ">
                    به خرید دوست داشتنی خوش آمدید{" "}
                  </h2>
                  <p className="mt-2 text-lg leading-8 text-gray-600">
                    ما بر این با وریم که می توانیم خدمات ارزنده ای در اختیار شما
                    قرار دهیم{" "}
                  </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                  {items.map((i) => (
                    <Item i={i} />
                  ))}
                  {items.map((i) => (
                    <Item i={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>

      <div className="bg-white ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className=" mb-8 text-justify  font-bold ">
            هر روز صدها نفر از وب‌سایت ما بازدید می‌کنند تا از اخبار و تخفیف‌های
            ویژه بهره‌مند شوند. همین حالا ثبت‌نام کنید و تجربه‌ای متفاوت از
            خدمات آنلاین را تجربه کنید!
          </div>
          <dl className="grid border  rounded-2xl px-10 py-5 mb-6 bg-gray-50 gap-x-8 gap-y-16 text-center grid-cols-3">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">فروشندگان </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                200 +{" "}
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">کاربران</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                46,000 +
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">
                {" "}
                کالا و خدمات{" "}
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                150 +{" "}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};

export default MainPage;
