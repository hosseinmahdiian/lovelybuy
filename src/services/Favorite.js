import axios from "axios";
import { baseAPI, token } from "../API/API";
import { Await } from "react-router-dom";
let get;
export const getFavorite = async (id, set) => {
  await axios
    .get(`${baseAPI}/user/getFavorite/${id}?${token}`)
    .then((res) => {
      get = res;
      set(res);
    })
    // .then((data) => console.log(data))
    .catch((e) => console.log(e));
};

export const addFavorite = (data) => {
  let rsult = get?.data.data.filter((i) => i.productID == data.productID);
  console.log(rsult);

  // if (i.productID == data.productID) {
  // console.log("نبود")
  // axios
  //   .post(`${baseAPI}/user/addFavorite?${token}`, data)
  //   // .then((res) => console.log(res))
  //   .catch((e) => console.log(e));
  // }
};

export const deleteFavorite = (id) => {
  // console.log(`${baseAPI}/user/deleteFavorite/${id}?${token}`);

  return axios
    .delete(`${baseAPI}/user/deleteFavorite/${id}?${token}`)
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};
