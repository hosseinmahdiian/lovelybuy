import { decrypt, encrypt } from "./crypto";

export const LocalStorageService = {
  userJson: "",
  userType: "",
  userToken: "",
  userID: "",
  userEmail: "",
  userMobile: "",
};

export const saveCurrentUser = (key, value) =>
  localStorage.setItem(key, encrypt(value));

export const getCurrentUser = (key) => {
  let data = localStorage.getItem(key) || "";
  if (data !== undefined && data !== null && data !== "") {
    LocalStorageService.userJson = JSON.parse(decrypt(data));
    LocalStorageService.userType = LocalStorageService.userJson.type;
    LocalStorageService.userToken = LocalStorageService.userJson.token;
    LocalStorageService.userID = LocalStorageService.userJson._id;
    LocalStorageService.userMobile = LocalStorageService.userJson.mobile;
    return LocalStorageService.userJson;
  } else {
    return false;
  }
};

export const removeCurrentUser = () => localStorage.clear();
