import axios from "axios";
import { baseAPI, token } from "../auth/API";
import { LocalStorageService } from "../auth/localStoreage";
export const getCategory = async () => {
  console.log(LocalStorageService.token);
  
  const rsult = await axios.get(
    `${baseAPI}/user/getCat`
  );
  return rsult;
};
