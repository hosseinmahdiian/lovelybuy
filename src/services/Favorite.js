import axios from "axios";
import { baseAPI, token } from "../API/API";
import { Await } from "react-router-dom";
let get;

// export const getUniqueIds = (array) => {
//   const uniqueIds = new Set();
//   const result = [];

//   array?.map((item) => {
//     if (!uniqueIds.has(item.id)) {
//       uniqueIds.add(item.id);
//       result.push(item);
//     }
//   });

//   return result;
// };
export const getFavorite = async (id, set) => {
  // console.log(`${baseAPI}/user/getFavorite/${id}?${token}`);

  let rsult = await axios
    .get(`${baseAPI}/user/getFavorite/${id}?${token}`)
    .then((res) => {
      // console.log("get favorite");
      set(res);
    })
    .catch((e) => console.log(e));

  return rsult;
};

// console.log(get);
export const addFavorite = async (data) => {
  let rsult = await axios
    .post(`${baseAPI}/user/addFavorite?${token}`, data)
    .then((res) => console.log(res.data))
    .catch((e) => console.log(e));
  return rsult;
};

export const deleteFavorite = (id) => {
  console.log(id);

  return axios
    .delete(`${baseAPI}/user/deleteFavorite/${id}?${token}`)
    .then((res) => console.log(res.data))
    .catch((e) => console.log(e));
};
