import axios from "axios";
import { baseAPI } from "../auth/API";
import { LocalStorageService } from "../auth/localStoreage";

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
  console.log(
    `${baseAPI}/user/getFavorite/${id}?token=${LocalStorageService.userToken}`
  );

  let rsult = await axios
    .get(
      `${baseAPI}/user/getFavorite/${id}?token=${LocalStorageService.userToken}`
    )
    .then((res) => {
      set(res);
    })
    .catch((e) => console.log(e));

  return rsult;
};

// console.log(get);
export const addFavorite = async (data) => {
  let rsult = await axios
    .post(
      `${baseAPI}/user/addFavorite?token=${LocalStorageService.userToken}`,
      data
    )
    .then((res) => console.log(res.data))
    .catch((e) => console.log(e));
  return rsult;
};

export const deleteFavorite = (id) => {
  // console.log(id);

  return axios
    .delete(
      `${baseAPI}/user/deleteFavorite/${id}?token=${LocalStorageService.userToken}`
    )
    .then((res) => console.log(res.data))
    .catch((e) => console.log(e));
};
