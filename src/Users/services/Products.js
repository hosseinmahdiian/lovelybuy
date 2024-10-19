import axios from "axios";
import { baseAPI, token } from "../auth/API";
import { LocalStorageService } from "../auth/localStoreage";

export const getProducts = async () => {
  // console.log(`${baseAPI}/admin/getProduct?${token}`);

  let rsult = await axios
    .get(`${baseAPI}/user/getProduct`)
    .catch((e) => console.log(e));

  return rsult;
};


