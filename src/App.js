// import { Route, BrowserRouter, Routes } from 'react-router-dom';
// import './App.css';
// import LoginPages from './pages/LoginPages';
// import BuildingEditPages from './pages/BuildingEditPages';
// import BuildingSearchPage from './pages/BuildingSearchPage';
// import BuildingCreatePage from './pages/BuildingCreatePage';

// const api = "http://localhost:8080/api";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>  
//         <Route index element = {<LoginPages api = {api}/>}/>
//         {/* <Route index element = {<BuildingSearchPage api = { api }/>}/> */}
//         {/* <Route index element = {<BuildingEditPages api = { api }/>}/> */}
//         <Route path = 'building-edit' element = {<BuildingEditPages api = { api }/>}/>
//         <Route path = 'building-create' element = {<BuildingCreatePage api = { api }/>}/>
//         <Route path = 'building-search' element = {<BuildingSearchPage api = {api}/>}/>
//         <Route path = 'login' element = {<LoginPages/>}/>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import BuildingCreatePage from './pages/BuildingCreatePage';
import './App.css';
import LoginPages from './pages/LoginPages';
import BuildingEditPages from './pages/BuildingEditPages';
import BuildingSearchPage from './pages/BuildingSearchPage';
import HomePage from './pages/HomePage';
import SecurityPolicy from './pages/Security-Policy';
import Warehouse from './pages/Warehouse.jsx';
import Land from './pages/Land.jsx';
import BuildingDetail from './pages/BuildingDetail.jsx';
import ListCustomer from './pages/ListCustomer.jsx';
import Admin from './pages/Admin.jsx';
import { useRef } from 'react';
import EditProfile from './pages/EditProfile.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';

const api = "http://localhost:8080/api";

function App() {
  const useRefAPI = useRef();
  useRefAPI.current = api;

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPages useRefAPI={useRefAPI} />} />
        <Route path='building-edit' element={<BuildingEditPages useRefAPI={useRefAPI}/>} />
        <Route path='building-search' element={<BuildingSearchPage useRefAPI={useRefAPI} />} />
        <Route path='home' element={<HomePage useRefAPI={useRefAPI} />} />
        <Route path='sercurity-policy' element={<SecurityPolicy />} />
        <Route path='login' element={<LoginPages useRefAPI={useRefAPI} />} />
        <Route path='warehouse' element={<Warehouse api={api} />} />
        <Route path='land' element={<Land api={api} />} />
        <Route path='/detail' element={<BuildingDetail api={api} />} />
        <Route path='/customer' element={<ListCustomer />} />
        <Route path='/building-create' element={<BuildingCreatePage api={api} />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/edit-profile" element={<EditProfile useRefAPI={useRefAPI} />} />
        <Route path="/forgot-password" element={<ForgotPassword useRefAPI={useRefAPI} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;