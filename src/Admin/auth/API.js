import { decrypt } from "./crypto";

export let token;

if (!!localStorage.getItem("authAdmin")) {
  token = `token=${
    JSON.parse(decrypt(localStorage.getItem("authAdmin"))).token
  }`;
}
export const baseAPI = "https://lovelybuy.liara.run";
