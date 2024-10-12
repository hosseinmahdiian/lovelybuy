import { decrypt } from "../auth/crypto";

let token;

export const baseAPI = "https://lovelybuy.liara.run";

if (!!localStorage.getItem("authUser")) {
  token = `token=${
    JSON.parse(decrypt(localStorage.getItem("authUser"))).token
  }`;
} 
export { token };
