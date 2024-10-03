import device from "../assets/images/device.png";
import glosery from "../assets/images/glosery.png";
import electic from "../assets/images/electic.png";
import fruts from "../assets/images/fruts.png";
import tomato from "../assets/images/tomato.png";
import yogurt from "../assets/images/yogurt.png";
import can from "../assets/images/can.jpg";
import milk from "../assets/images/milk.jpg";
import meet from "../assets/images/meet.jpg";
import oil from "../assets/images/oil.jpg";

const slideDadta = [
  {
    image: device,
    name: "device",
    title: "لوازم خانگی",
    select: true,
  },
  {
    image: glosery,
    name: "glosery",
    title: "سوپرمارکت",
    select: false,
  },
  {
    image: fruts,
    name: "fruts",
    title: " میوه و تره بار",
    select: false,
  },
  {
    image: electic,
    name: "ele33ctic",
    title: "الکترونیک",
    select: false,
  },
];

const CategoryData = [
  {
    image: can,
    name: "can",
    title: "کنسرو",
    select: true,
  },
  {
    image: meet,
    name: "meet",
    title: "گوشت",
    select: false,
  },
  {
    image: milk,
    name: "milk",
    title: "شیر",
    select: false,
  },
  {
    image: oil,
    name: "oil",
    title: "روغن",
    select: false,
  },
];

const itemsData = [
  {
    name: "bread",
    title: "نان",
    select: true,
  },
  {
    name: "rice",
    title: "برنج",
    select: false,
  },
  {
    name: "spaghetti",
    title: "ماکارونی و رشته",
    select: false,
  },
  {
    name: "oil",
    title: "روغن",
    select: false,
  },
];

const productsData = [
  {
    image: tomato,
    name: "tomato",
    title: " رب گوجه فرنگی چین چین",
    paylod: 2,
    pay: 200000,
    offer: 180000,
  },
  {
    image: yogurt,
    name: "yogurt",
    title: " ماست چکیده کاله",
    paylod: 0,
    pay: 250000,
    offer: 195000,
  },
  {
    image: can,
    name: "can",
    title: "کنسرو لوبیا دلپذیر",
    paylod: 1,
    pay: 600000,
    offer: 550000,
  },
  {
    image: tomato,
    name: "tomato",
    title: " رب گوجه فرنگی چین چین",
    paylod: 2,
    pay: 200000,
    offer: 180000,
  },
  {
    image: yogurt,
    name: "yogurt",
    title: " ماست چکیده کاله",
    paylod: 0,
    pay: 250000,
    offer: 195000,
  },
  {
    image: can,
    name: "can",
    title: "کنسرو لوبیا دلپذیر",
    paylod: 1,
    pay: 600000,
    offer: 550000,
  },
  {
    image: tomato,
    name: "tomato",
    title: " رب گوجه فرنگی چین چین",
    paylod: 2,
    pay: 200000,
    offer: 180000,
  },
  {
    image: yogurt,
    name: "yogurt",
    title: " ماست چکیده کاله",
    paylod: 0,
    pay: 250000,
    offer: 195000,
  },
  {
    image: can,
    name: "can",
    title: "کنسرو لوبیا دلپذیر",
    paylod: 1,
    pay: 600000,
    offer: 550000,
  },
  {
    image: tomato,
    name: "tomato",
    title: " رب گوجه فرنگی چین چین",
    paylod: 2,
    pay: 200000,
    offer: 180000,
  },
  {
    image: yogurt,
    name: "yogurt",
    title: " ماست چکیده کاله",
    paylod: 0,
    pay: 250000,
    offer: 195000,
  },
  {
    image: can,
    name: "can",
    title: "کنسرو لوبیا دلپذیر",
    paylod: 1,
    pay: 600000,
    offer: 550000,
  },
  {
    image: tomato,
    name: "tomato",
    title: " رب گوجه فرنگی چین چین",
    paylod: 2,
    pay: 200000,
    offer: 180000,
  },
  {
    image: yogurt,
    name: "yogurt",
    title: " ماست چکیده کاله",
    paylod: 0,
    pay: 250000,
    offer: 195000,
  },
  {
    image: can,
    name: "can",
    title: "کنسرو لوبیا دلپذیر",
    paylod: 1,
    pay: 600000,
    offer: 550000,
  },
];

const BuyProDuctsData = [
  {
    image: tomato,
    name: "tomato",
    title: " رب گوجه فرنگی چین چین",
    paylod: 2,
    pay: 200000,
    offer: 180000,
  },
  {
    image: yogurt,
    name: "yogurt",
    title: " ماست چکیده کاله",
    paylod: 1,
    pay: 250000,
    offer: 195000,
  },
  {
    image: can,
    name: "can",
    title: "کنسرو لوبیا دلپذیر",
    paylod: 4,
    pay: 600000,
    offer: 550000,
  },
];

const DeliveryData = [
  { day: "satueday", title: "شنبه", date: "7مرداد", id: 1 },
  {
    day: "sunday",
    title: "یکشنیه",
    date: "8مرداد",
    id: 2,
  },
  {
    day: "monday",
    title: "دوشنبه",
    date: "9مرداد",
    id: 3,
  },
  { day: "tuesday", title: "سه شنبه", date: "10مرداد", id: 4 },
  {
    day: "wendesday",
    title: "چهار شنبه",
    date: "11مرداد",
    id: 5,
  },
  {
    day: "thursday",
    title: "پنجشنبه",
    date: "12مرداد",
    id: 6,
  },
  {
    day: "friday",
    title: "جمعه",
    date: "13مزداد",
    id: 7,
  },
];

const FilterData = [
  { title: "همه محصولات", name: "all" },
  { title: "پر فروش ترین", name: "top-sell" },
  { title: "پر تخفیف", name: "top-offer" },
  { title:  "فقط برای تو", name: "for-you" },
  { title: " نخری رفته", name: "last-time" },
  { title: " ارزانترین", name: "cheap" },
  { title: " گرانترین", name: "expensive" },
];

const OrderData = [
  {
    image: tomato,
    name: "tomato",
    title: " رب گوجه فرنگی چین چین",
    paylod: 2,
    pay: 200000,
    offer: 180000,
  },
  {
    image: yogurt,
    name: "yogurt",
    title: " ماست چکیده کاله",
    paylod: 1,
    pay: 250000,
    offer: 195000,
  },
  {
    image: can,
    name: "can",
    title: "کنسرو لوبیا دلپذیر",
    paylod: 4,
    pay: 600000,
    offer: 550000,
  },
  {
    image: tomato,
    name: "tomato",
    title: " رب گوجه فرنگی چین چین",
    paylod: 5,
    pay: 200000,
    offer: 180000,
  },
  {
    image: yogurt,
    name: "yogurt",
    title: " ماست چکیده کاله",
    paylod: 8,
    pay: 250000,
    offer: 195000,
  },
  {
    image: can,
    name: "can",
    title: "کنسرو لوبیا دلپذیر",
    paylod: 3,
    pay: 600000,
    offer: 550000,
  },
];
export {
  slideDadta,
  itemsData,
  CategoryData,
  productsData,
  BuyProDuctsData,
  DeliveryData,
  FilterData,
  OrderData,
};
