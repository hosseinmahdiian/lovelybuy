import { decrypt } from "./crypto";

let token;

export const baseAPI = "https://lovelybuy.liara.run";

if (!!localStorage.getItem("authAdmin")) {
  token = `token=${
    JSON.parse(decrypt(localStorage.getItem("authAdmin"))).token
  }`;
  console.log(JSON.parse(decrypt(localStorage.getItem("authAdmin"))).token);
}
export { token };
