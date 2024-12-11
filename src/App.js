// export default App;
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import LoginPages from "./pages/LoginPages";
import BuildingEditPages from "./pages/BuildingEditPages";
import BuildingSearchPage from "./pages/BuildingSearchPage";
import HomePage from "./pages/HomePage";
import SecurityPolicy from "./pages/Security-Policy";
import Warehouse from "./pages/Warehouse.jsx";
import Land from "./pages/Land.jsx";
import BuildingDetail from "./pages/BuildingDetail.jsx";
import ListCustomer from "./pages/ListCustomer.jsx";
import BuildingCreatePage from "./pages/BuildingCreatePage.jsx";
import Admin from "./pages/Admin.jsx";
import EditProfile from "./pages/EditProfile.jsx";
import ChangePassword from "./pages/ChangePassword.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import UnauthorizedPage from "./pages/UnauthorizedPage.jsx";
import Blog1 from "./pages/Blog1.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="building-edit" element={<BuildingEditPages />} />
        <Route path="building-search" element={<BuildingSearchPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="sercurity-policy" element={<SecurityPolicy />} />
        <Route path="/login" index element={<LoginPages />} />
        <Route path="warehouse" element={<Warehouse />} />
        <Route path="land" element={<Land />} />
        <Route path="/detail" element={<BuildingDetail />} />
        <Route path="/customer" element={<ListCustomer />} />
        <Route path="/create-building" element={<BuildingCreatePage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="edit-profile" element={<EditProfile />} />
        <Route path="change-password" element={<ChangePassword />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="unauthorized" element={<UnauthorizedPage />} />
        <Route
          path="blog-meo-tiet-kiem-chi-phi-cho-sinh-vien"
          element={<Blog1 />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
