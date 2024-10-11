import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeUser from "../Users/components/Home";
import NotFind from "../Users/components/NotFind";
import Save from "../Users/components/Save/Save";
import Search from "../Users/components/Search/Search";
import MainPage from "../Main/MainPage";
import AcccountLogin from "../Users/components/Account/UserInformation/Acccount-Login";
import ChengPass from "../Users/components/Account/ChengPass";
import Place from "../Users/components/Account/Place/Place";
import Chose from "../Users/components/Account/Duti/Chose";
import ShowHistoryProducts from "../Users/components/Account/UserInformation/Items/History/Show-producs";
import EE from "../Users/components/InShope/eeeeee";
import Info from "../Users/components/Info/Info";
import Login from "../Users/components/Account/Login/Login";

import HomeAdmin from "../Admin/Components/HomeAdmin";
import Acconut from "../Admin/Components/Account";
import Bill from "../Admin/Components/Pages/Bill/Bill";
import Edit from "../Admin/Components/Pages/Edit/Edit";
import Charge from "../Admin/Components/Pages/Charge/Charge ";
import BuyerUserRegistration from "../Admin/Components/Pages/Buyer-User-Registration/Buyer-User-Registration";
import AccessManagement from "../Admin/Components/Pages/Access-Management";
import CreateAccess from "../Admin/Components/Pages/Create-Access";
import UserInformation from "../Admin/Components/Pages/User-Information";
import StoreRegistration from "../Admin/Components/Pages/Store-Registration";
import OrganizationRegistration from "../Admin/Components/Pages/Organization-Registration";
import WarehouseHandling from "../Admin/Components/Pages/Warehouse-Handling";
import WarehouseInformation from "../Admin/Components/Pages/Warehouse-Information";
import Orders from "../Admin/Components/Pages/Orders";
import Archive from "../Admin/Components/Pages/Archive";
import Notices from "../Admin/Components/Pages/Notices";
import ProgramManagement from "../Admin/Components/Pages/Program-Management";
import Advertise from "../Admin/Components/Pages/Advertise";
import DiscountCode from "../Admin/Components/Pages/Discount-Code";
import DataMonitoring from "../Admin/Components/Pages/Data-Monitoring";
import EmployeeManagement from "../Admin/Components/Pages/Employee-Management";
import Dispacher from "../Admin/Components/Pages/Dispacher/Dispacher";
import StoreWarehouse from "../Admin/Components/Pages/Store-arehouse";
import SystemUserRegistration from "../Admin/Components/Pages/System-User-Registration/System-User-Registration";
import History from "../Admin/Components/Pages/History";
import ProductRegistration from "../Admin/Components/Pages/Product-Registration/Product-Registration";
import RegistrationDispacher from "../Admin/Components/Pages/Dispacher/Registration-Dispacher";
import RegisterationDeliveryProducts from "../Admin/Components/Pages/Dispacher/Registeration-Delivery-Products";
import ShowProducts from "../Admin/Components/Pages/Dispacher/Show-Products";
import Processing from "../Admin/Components/Pages/processing/Processing";
import AddProdoct from "../Admin/Components/Pages/Product-Registration/AddProdoct";
import ChargeProducts from "../Admin/Components/Pages/Charge/ChargeProducts";
import Works from "../Admin/Components/Pages/processing/Works";
import Printer from "../Admin/Components/Pages/processing/BillPrinter";
import EditUsers from "../Admin/Components/Pages/System-User-Registration/Edite-User";
import SettingUser from "../Admin/Components/Pages/System-User-Registration/Setting-User";
import EditUser from "../Admin/Components/Pages/Buyer-User-Registration/Edit-User";
import Detail from "../Admin/Components/Pages/Dispacher/Detail";
import CategoryPage from "../Admin/Components/Pages/Edit/CategoryPage";
import BillPrenter from "../Admin/Components/Pages/processing/BillPrinter";
import EditProdoct from "../Admin/Components/Pages/Edit/EditProdoct";
import Privacy from "../Users/components/Privacy/Private ";

const Routers = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      {/*  ============================ user pages ====================== */}
      <Route path="*" element={<NotFind />} />
      <Route path="/user" element={<HomeUser />} />
      <Route path="user/Privacy" element={<Privacy />} />
      <Route path="user/Save" element={<Save />} />
      <Route path="user/Search" element={<Search />} />
      <Route path="user/ProductID/:ID" element={<Info />} />
      <Route path="user/LoginUser" element={<Login />} />
      <Route path="user/Account" element={<AcccountLogin />} />
      <Route path="user/Account/ChengPasseord" element={<ChengPass />} />
      <Route path="user/Account/Place" element={<Place />} />
      <Route
        path="user/Account/History/:ID"
        element={<ShowHistoryProducts />}
      />
      <Route path="user/chose" element={<Chose />} />
      <Route path="ee" element={<EE />} />
      {/*  ============================ admin pages ====================== */}

      <Route path="admin" element={<HomeAdmin />} />
      <Route path="admin/loginAdmin" element={<Acconut />} />
      {/* ====================================================================== */}
      <Route
        path="admin/Product-Registration"
        element={<ProductRegistration />}
      />
      {/* ======================================================================= */}
      <Route path="admin/Bill" element={<Bill />} />
      <Route path="admin/Bill/Printer/:id" element={<BillPrenter />} />
      {/* ============================================================ */}
      <Route path="admin/Edit" element={<Edit />} />
      <Route path="admin/Edit/Category/:id" element={<CategoryPage />} />
      <Route path="admin/EditProdoct/:id" element={<EditProdoct />} />

      {/* ================================================== */}
      <Route path="admin/Charge" element={<Charge />} />
      <Route path="admin/ChargeProduct/:id" element={<ChargeProducts />} />
      <Route path="admin/AddProdoct" element={<AddProdoct />} />
      {/* ==================================================================== */}
      <Route
        path="admin/Buyer-User-Registration"
        element={<BuyerUserRegistration />}
      />
      <Route
        path="admin/Buyer-User-Registration/Edit-User/:id"
        element={<EditUser />}
      />
      {/* ==================================================================== */}
      <Route
        path="admin/System-User-Registration"
        element={<SystemUserRegistration />}
      />
      <Route
        path="admin/System-User-Registration/:id"
        element={<EditUsers />}
      />
      <Route
        path="admin/System-User-Registration/Setting-User/:id"
        element={<SettingUser />}
      />

      {/* =================================================================== */}
      <Route path="admin/Access-Management" element={<AccessManagement />} />
      <Route path="admin/Create-Access" element={<CreateAccess />} />
      <Route path="admin/User-Information" element={<UserInformation />} />
      <Route path="admin/Store-Registration" element={<StoreRegistration />} />
      <Route
        path="admin/Organization-Registration"
        element={<OrganizationRegistration />}
      />
      <Route path="admin/Warehouse-Handling" element={<WarehouseHandling />} />
      <Route
        path="admin/Warehouse-Information"
        element={<WarehouseInformation />}
      />
      <Route path="admin/History" element={<History />} />
      <Route path="admin/Orders" element={<Orders />} />
      <Route path="admin/Archive" element={<Archive />} />
      <Route path="admin/Notices" element={<Notices />} />
      <Route path="admin/Program-Management" element={<ProgramManagement />} />
      <Route path="admin/Advertise" element={<Advertise />} />
      <Route path="admin/Discount-Code" element={<DiscountCode />} />
      <Route path="admin/Data-Monitoring" element={<DataMonitoring />} />
      <Route
        path="admin/Employee-Management"
        element={<EmployeeManagement />}
      />
      <Route path="admin/Store-arehouse" element={<StoreWarehouse />} />
      {/* =================================================================================== */}
      <Route path="admin/Processing" element={<Processing />} />
      <Route path="admin/Processing/Printer/:id" element={<Printer />} />
      <Route path="admin/Processing/Location/:id" element={<Works />} />
      {/* ==================================================================================== */}
      <Route path="admin/Dispacher" element={<Dispacher />} />
      <Route path="admin/Dispacher/Loaction/:id" element={<Detail />} />
      <Route
        path="admin/Dispacher/Detil/:id"
        element={<RegistrationDispacher />}
      />
      <Route
        path="admin/Dispacher/:id/RegisterationDeliveryProducts"
        element={<RegisterationDeliveryProducts />}
      />
      <Route
        path="admin/Dispacher/:id/ُShowProducts"
        element={<ShowHistoryProducts />}
      />
    </Routes>
  );
};

export default Routers;
