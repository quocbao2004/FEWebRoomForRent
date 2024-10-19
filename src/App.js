import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import LoginPages from './pages/LoginPages';
import BuildingEditPages from './pages/BuildingEditPages';
import BuildingSearchPage from './pages/BuildingSearchPage';
import HomePage from './pages/HomePage';
import SecurityPolicy from './pages/Security-Policy';
import Warehouse from './pages/Warehouse.jsx';
import Land from './pages/Land.jsx';
import MoreService from './pages/MoreService.jsx';

const api = "http://localhost:8080/api";

function App() {
  return (
    <BrowserRouter>
      <Routes>  
        {/* <Route index element = {<LoginPages api = { api }/>}/> */}
        <Route index element = {<HomePage api = { api }/>}/>
        <Route path = 'building-edit' element = {<BuildingEditPages/>}/>
        <Route path = 'building-search' element = {<BuildingSearchPage/>}/>
        <Route path = 'home' element = {<HomePage/>}/>
        <Route path = 'sercurity-policy' element = {<SecurityPolicy/>}/>
        <Route path = 'login' element = {<LoginPages/>}/>
        <Route path = 'warehouse' element = {<Warehouse/>}/>
        <Route path = 'land' element = {<Land/>}/>
        <Route path = 'more-service' element = {<MoreService/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
