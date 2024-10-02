import { decrypt } from "../auth/crypto";

let token;

export const baseAPI = "https://lovelybuy.liara.run";

if (!!localStorage.getItem("authUser")) {
  token = `token=${
    JSON.parse(decrypt(localStorage.getItem("authUser"))).token
  }`;
} else {
  // window.location.replace ("http://localhost:5173/LoginUser");
}
export { token };
