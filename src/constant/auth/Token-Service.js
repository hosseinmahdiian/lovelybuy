import { Navigate, useNavigate } from "react-router-dom";
import { removeCurrentUser } from "./localStoreage";
// const navigate = useNavigate();

export const checkTokenExamination = (responseData, userType,navigate) => {
  console.log(responseData);
  if (responseData === "Failed to authenticate token.") {
    if (userType === "user") {
      removeCurrentUser();
      navigate("/LoginUser");
    } else if (userType === "admin") {
      // removeCurrentUser();
      // window.location.href = "http://localhost:5173/LoginUser";
    }
  }
};
