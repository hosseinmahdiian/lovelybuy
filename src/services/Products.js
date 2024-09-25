import axios from "axios";
import { baseAPI, token } from "../API/API";

export const getProducts = async () => {
  // console.log(`${baseAPI}/admin/getProduct?${token}`);

  let rsult=
  await axios
    .get(`${baseAPI}/user/getProduct`)
    // .then((json) => ( json.json()))
    .catch((e) => console.log(e));

  return rsult;
};

export const checkToten = async () => {
  // console.log(`${baseAPI}/admin/getProduct?${token}`);

  let rsult = await axios
    .get(`${baseAPI}/user/getProduct?${token}`)
    // .then((json) => console.log(json))
    .catch((e) => console.log(e));

  // setM(rsult?.data.data);
  return rsult;
};
