import { Navigate, useNavigate } from "react-router-dom";
import { removeCurrentUser } from "./localStoreage";
// const navigate = useNavigate();

export const checkTokenExamination = (responseData, userType) => {
//   console.log(responseData);
  if (responseData === "Failed to authenticate token.") {
    if (userType === "user") {
      // removeCurrentUser();
        // Navigate.to("/LoginUser");
        Navigate("/LoginUser");
    } else if (userType === "admin") {
      // removeCurrentUser();
        // navigate("/LoginAdmin");
    }
  }
};
