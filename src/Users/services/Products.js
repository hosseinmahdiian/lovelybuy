import axios from "axios";
import { baseAPI, token } from "../auth/API";
import { LocalStorageService } from "../auth/localStoreage";

export const getProducts = async () => {
  // console.log(`${baseAPI}/admin/getProduct?${token}`);

  let rsult = await axios
    .get(`${baseAPI}/user/getProduct`)
    // .then((json) => ( json.json()))
    .catch((e) => console.log(e));

  return rsult;
};


export const checkToken = async (id, set) => {
 
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
