import axios from "axios";
import { baseAPI, token } from "../API/API";

export const getCategory = async () => {
  const rsult = await axios.get(`${baseAPI}/admin/getCat?${token}`);
  return rsult;
};
