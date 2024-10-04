import { decrypt } from "./crypto";

let token;

export const baseAPI = "https://lovelybuy.liara.run";

if (!!localStorage.getItem("authAdmin")) {
  token = `token=${
    JSON.parse(decrypt(localStorage.getItem("authAdmin"))).token
  }`;
} else {
  // window.location.replace ("http://localhost:5173/LoginUser");
}
export { token };
