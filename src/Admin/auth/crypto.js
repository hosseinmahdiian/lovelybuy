import CryptoJS from "crypto-js";
const SECRET_KEY = "bcxvbxcbxcbxcbxcb";

export const encrypt = (txt) =>
  CryptoJS.AES.encrypt(txt, SECRET_KEY).toString();

export const decrypt = (txtToDecrypt) =>
  CryptoJS.AES.decrypt(txtToDecrypt, SECRET_KEY).toString(CryptoJS.enc.Utf8);
