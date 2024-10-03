import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeUser from "../Users/components/Home";
import NotFind from "../Users/components/NotFind";
import Save from "../Users/components/Save/Save";
import Search from "../Users/components/Search/Search";
import InPerson from "../MainPage";
import AcccountLogin from "../Users/components/Account/UserInformation/Acccount-Login";
import ChengPass from "../Users/components/Account/ChengPass";
import Place from "../Users/components/Account/Place/Place";
import Chose from "../Users/components/Account/Duti/Chose";
import ShowHistoryProducts from "../Users/components/Account/UserInformation/Items/History/Show-producs";
import EE from "../Users/components/InShope/eeeeee";
import Info from "../Users/components/Info/Info";
import Login from "../Users/components/Account/Login/Login";

import HomeAdmin from "../Admin/Components/Home";
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

const Routers = () => {
  return (
    <Routes>
      <Route index element={<InPerson />} />
      {/*  ============================ user pages ====================== */}
      <Route path="*" element={<NotFind />} />
      <Route path="/user" element={<HomeUser />} />
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

      <Route path="/loginAdmin" element={<Acconut />} />
      <Route path="/Admin" element={<HomeAdmin />} />
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
      <Route path="/Warehouse-Information" element={<WarehouseInformation />} />
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
      <Route path="/Processing/Location/:id" element={<Works />} />
      {/* ==================================================================================== */}
      <Route path="/Dispacher" element={<Dispacher />} />

      <Route path="/Dispacher/Loaction/:id" element={<Detail />} />

      <Route path="/Dispacher/Detil/:id" element={<RegistrationDispacher />} />

      <Route
        path="/Dispacher/:id/RegisterationDeliveryProducts"
        element={<RegisterationDeliveryProducts />}
      />
      <Route
        path="/Dispacher/:id/ُShowProducts"
        element={<ShowHistoryProducts />}
      />
    </Routes>
  );
};

export default Routers;
