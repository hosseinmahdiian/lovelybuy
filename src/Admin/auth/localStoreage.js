import { decrypt, encrypt } from "./crypto";

export const LocalStorageService = {
  userJson: "",
  userType: "",
  userToken: "",
  userID: "",
  userEmail: "",
  userMobile: "",
};

export const saveCurrentAdmin = (key, value) =>
  localStorage.setItem(key, encrypt(value));

export const getCurrentAdmin = (key) => {
  let data = localStorage.getItem(key) || "";
  if (data !== undefined && data !== null && data !== "") {
    LocalStorageService.adminJson = JSON.parse(decrypt(data));
    console.log(LocalStorageService.adminJson);
    
    // LocalStorageService.adminType = LocalStorageService.adminJson.type;
    // LocalStorageService.adminToken = LocalStorageService.adminJson.token;
    // LocalStorageService.adminID = LocalStorageService.adminJson._id;
    // LocalStorageService.adminMobile = LocalStorageService.adminJson.mobile;
    return LocalStorageService.adminJson;
  } else {
    return false;
  }
};

export const removeCurrentAdmin = () => localStorage.removeItem("authAdmin");
