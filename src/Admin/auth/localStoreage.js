import { decrypt, encrypt } from "./crypto";

export const LocalStorageService = {
  adminJson: "",
  userName: "",
  token: "",
  ID: "",
  type: "",
};

export const saveCurrentAdmin = (key, value) =>
  localStorage.setItem(key, encrypt(value));

export const getCurrentAdmin = (key) => {
  let data = localStorage.getItem(key) || "";
  if (data !== undefined && data !== null && data !== "") {
    LocalStorageService.adminJson = JSON.parse(decrypt(data));
    LocalStorageService.userName = LocalStorageService.adminJson.userName;
    LocalStorageService.type = LocalStorageService.adminJson.type;
    LocalStorageService.token = LocalStorageService.adminJson.token;
    LocalStorageService.ID = LocalStorageService.adminJson._Id;

    return LocalStorageService.adminJson;
  } else {
    return false;
  }
};

export const removeCurrentAdmin = () => localStorage.removeItem("authAdmin");
