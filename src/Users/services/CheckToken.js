import axios from "axios";
import { baseAPI } from "../auth/API";
import { LocalStorageService } from "../auth/localStoreage";

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
