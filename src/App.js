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
import { useRef } from "react";

function App() {
  const api = "http://localhost:8080/api";
  const useRefAPI = useRef();
  useRefAPI.current = api;
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage api={api} />} />
        <Route path="building-edit/:id" element={<BuildingEditPages />} />
        <Route
          path="building-search"
          element={<BuildingSearchPage api={api} />}
        />
        <Route path="home" element={<HomePage useRefAPI={useRefAPI} />} />
        <Route path="sercurity-policy" element={<SecurityPolicy />} />
        <Route
          path="/login"
          index
          element={<LoginPages useRefAPI={useRefAPI} />}
        />
        <Route path="warehouse" element={<Warehouse api={api} />} />
        <Route path="land" element={<Land api={api} />} />
        <Route
          path="/detail"
          element={<BuildingDetail useRefAPI={useRefAPI} />}
        />
        <Route path="/customer" element={<ListCustomer />} />
        <Route
          path="/create-building"
          element={<BuildingCreatePage api={api} />}
        />
        <Route path="/admin" element={<Admin />} />
        <Route path="edit-profile" element={<EditProfile api={api} />} />
        <Route path="change-password" element={<ChangePassword api={api} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
