import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import LoginPages from './pages/LoginPages';
import BuildingEditPages from './pages/BuildingEditPages';
import BuildingSearchPage from './pages/BuildingSearchPage';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import SecurityPolicy from './pages/Security-Policy';

const api = "http://localhost:8080/api";

function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route index element = {<LoginPages api = { api }/>}/>
        <Route path = 'building-edit' element = {<BuildingEditPages/>}/>
        <Route path = 'building-search' element = {<BuildingSearchPage/>}/>
        <Route path = 'home' element = {<HomePage/>}/>
        <Route path = 'about-us' element = {<AboutUs/>}/>
        <Route path = 'sercurity-policy' element = {<SecurityPolicy/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
