import React, { useEffect } from "react";
import Users from "./Users";
import { useNavigate } from "react-router-dom";
import { getCurrentAdmin } from "../../../auth/localStoreage";

const SystemUserRegistration = () => {
   const navigate = useNavigate();

   useEffect(() => {
   if (!localStorage.getItem("authAdmin")) {
     navigate("/admin/loginAdmin");
   } else {
     getCurrentAdmin("authAdmin");
   }
   }, []);
  return (
    <>
      <Users />
      {/* ============================================================================== */}
    </>
  );
};

export default SystemUserRegistration;
