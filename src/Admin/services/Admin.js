import axios from "axios";
import { baseAPI, token } from "../auth/API";
import { getCurrentAdmin, saveCurrentAdmin } from "../auth/localStoreage.js";

export const PostRole = async (Role, set) => {
  let result;
  await axios
    .post(`${baseAPI}/admin/login?${token}`, Role)
    .then((json) => {
      localStorage.removeItem("authUser");
      saveCurrentAdmin("authAdmin", JSON.stringify(json.data.data));
      getCurrentAdmin("authAdmin");
      result = json;
    })
    .catch((error) => console.log(error));
  set(result);
  console.log(result);

  return result;
};
