import axios from "axios";
import { baseAPI, token } from "../auth/API";
import { saveCurrentUser } from "../auth/localStoreage.js";

export const PostRole = async (Role, set) => {
  //   console.log(Role);

  let result;
  await axios
    .post(`${baseAPI}/admin/login?${token}`, Role)
    .then((json) => {
      saveCurrentUser("authAdmin", JSON.stringify(json.data.data));
      result = json;
    })
    .catch((error) => console.log(error));
  set(result);
  console.log(result);

  return result;
};
