import { decrypt } from "./crypto";

let token;

export const baseAPI = "https://lovelybuy.liara.run";

if (!!localStorage.getItem("Admin")) {
  token = `token=${
    JSON.parse(decrypt(localStorage.getItem("Admin"))).token
  }`;
} else {
  // window.location.replace ("http://localhost:5173/LoginUser");
}
export { token };
