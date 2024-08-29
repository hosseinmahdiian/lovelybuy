import axios from "axios";
import { baseAPI, token } from "../API/API";

export const getProducts = async () => {
  // console.log(`${baseAPI}/admin/getProduct?${token}`);
  
  const rsult = await axios.get(`${baseAPI}/admin/getProduct?${token}`);
  return rsult;
};
