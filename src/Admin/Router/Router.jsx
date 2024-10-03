import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Acconut from "../Components/Account";
import Bill from "../Components/Pages/Bill/Bill";
import Edit from "../Components/Pages/Edit/Edit";
import Charge from "../Components/Pages/Charge/Charge ";
import BuyerUserRegistration from "../Components/Pages/Buyer-User-Registration/Buyer-User-Registration";
import AccessManagement from "../Components/Pages/Access-Management";
import CreateAccess from "../Components/Pages/Create-Access";
import UserInformation from "../Components/Pages/User-Information";
import StoreRegistration from "../Components/Pages/Store-Registration";
import OrganizationRegistration from "../Components/Pages/Organization-Registration";
import WarehouseHandling from "../Components/Pages/Warehouse-Handling";
import WarehouseInformation from "../Components/Pages/Warehouse-Information";
import Orders from "../Components/Pages/Orders";
import Archive from "../Components/Pages/Archive";
import Notices from "../Components/Pages/Notices";
import ProgramManagement from "../Components/Pages/Program-Management";
import Advertise from "../Components/Pages/Advertise";
import DiscountCode from "../Components/Pages/Discount-Code";
import DataMonitoring from "../Components/Pages/Data-Monitoring";
import EmployeeManagement from "../Components/Pages/Employee-Management";
import Dispacher from "../Components/Pages/Dispacher/Dispacher";
import StoreWarehouse from "../Components/Pages/Store-arehouse";
import SystemUserRegistration from "../Components/Pages/System-User-Registration/System-User-Registration";
import History from "../Components/Pages/History";
import ProductRegistration from "../Components/Pages/Product-Registration/Product-Registration";
import RegistrationDispacher from "../Components/Pages/Dispacher/Registration-Dispacher";
import RegisterationDeliveryProducts from "../Components/Pages/Dispacher/Registeration-Delivery-Products";
import ShowProducts from "../Components/Pages/Dispacher/Show-Products";
import Processing from "../Components/Pages/processing/Processing";
import AddProdoct from "../Components/Pages/Product-Registration/AddProdoct";
import ChargeProducts from "../Components/Pages/Charge/ChargeProducts";
import ToDos from "../Components/Pages/processing/To-Dos";
import Printer from "../Components/Pages/processing/BillPrinter";
import EditUsers from "../Components/Pages/System-User-Registration/Edite-User";
import SettingUser from "../Components/Pages/System-User-Registration/Setting-User";
import EditUser from "../Components/Pages/Buyer-User-Registration/Edit-User";
import Detail from "../Components/Pages/Dispacher/Detail";
import CategoryPage from "../Components/Pages/Edit/CategoryPage";
import BillPrenter from "../Components/Pages/processing/BillPrinter";
import EditProdoct from "../Components/Pages/Edit/EditProdoct";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/loginAdmin" element={<Acconut />} />
        <Route index element={<Home />} />
        {/* ====================================================================== */}
        <Route path="/Product-Registration" element={<ProductRegistration />} />
        {/* ======================================================================= */}
        <Route path="/Bill" element={<Bill />} />
        <Route path="/Bill/Printer/:id" element={<BillPrenter />} />
        {/* ============================================================ */}
        <Route path="/Edit" element={<Edit />} />
        <Route path="/Edit/Category/:id" element={<CategoryPage />} />
        <Route path="/EditProdoct/:id" element={<EditProdoct />} />

        {/* ================================================== */}
        <Route path="/Charge" element={<Charge />} />
        <Route path="/ChargeProduct/:id" element={<ChargeProducts />} />
        <Route path="/AddProdoct" element={<AddProdoct />} />
        {/* ==================================================================== */}
        <Route
          path="/Buyer-User-Registration"
          element={<BuyerUserRegistration />}
        />
        <Route
          path="/Buyer-User-Registration/Edit-User/:id"
          element={<EditUser />}
        />
        {/* ==================================================================== */}
        <Route
          path="/System-User-Registration"
          element={<SystemUserRegistration />}
        />
        <Route path="/System-User-Registration/:id" element={<EditUsers />} />
        <Route
          path="/System-User-Registration/Setting-User/:id"
          element={<SettingUser />}
        />

        {/* =================================================================== */}
        <Route path="/Access-Management" element={<AccessManagement />} />
        <Route path="/Create-Access" element={<CreateAccess />} />
        <Route path="/User-Information" element={<UserInformation />} />
        <Route path="/Store-Registration" element={<StoreRegistration />} />
        <Route
          path="/Organization-Registration"
          element={<OrganizationRegistration />}
        />
        <Route path="/Warehouse-Handling" element={<WarehouseHandling />} />
        <Route
          path="/Warehouse-Information"
          element={<WarehouseInformation />}
        />
        <Route path="/History" element={<History />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Archive" element={<Archive />} />
        <Route path="/Notices" element={<Notices />} />
        <Route path="/Program-Management" element={<ProgramManagement />} />
        <Route path="/Advertise" element={<Advertise />} />
        <Route path="/Discount-Code" element={<DiscountCode />} />
        <Route path="/Data-Monitoring" element={<DataMonitoring />} />
        <Route path="/Employee-Management" element={<EmployeeManagement />} />
        <Route path="/Store-arehouse" element={<StoreWarehouse />} />
        {/* =================================================================================== */}
        <Route path="/Processing" element={<Processing />} />
        <Route path="/Processing/Printer/:id" element={<Printer />} />
        <Route path="/Processing/Location/:id" element={<ToDos />} />
        {/* ==================================================================================== */}
        <Route path="/Dispacher" element={<Dispacher />} />

        <Route path="/Dispacher/Loaction/:id" element={<Detail />} />

        <Route
          path="/Dispacher/Detil/:id"
          element={<RegistrationDispacher />}
        />

        <Route
          path="/Dispacher/:id/RegisterationDeliveryProducts"
          element={<RegisterationDeliveryProducts />}
        />
        <Route path="/Dispacher/:id/ُShowProducts" element={<ShowProducts />} />
        {/* ==================================================================================== */}
      </Routes>
    </>
  );
};

export default Routers;
