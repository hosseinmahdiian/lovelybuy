import axios from "axios";
import { baseAPI } from "../auth/API";

export const getCategory = async () => {
  // console.log(`${baseAPI}/user/getcat`);
  
  let rsult;
  await axios
    .get(`${baseAPI}/user/getcat`)
    .then((res) => {
      rsult = res;
      // console.log(res);
    })
    .catch((e) => console.log(e));
  // console.log(rsult);

  return rsult;
};
