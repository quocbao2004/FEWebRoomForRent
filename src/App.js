import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import LoginPages from './pages/LoginPages';
import BuildingEditPages from './pages/BuildingEditPages';
import BuildingSearchPage from './pages/BuildingSearchPage';
import BuildingCreatePage from './pages/BuildingCreatePage';

const api = "http://localhost:8080/api";

function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route index element = {<LoginPages api = {api}/>}/>
        {/* <Route index element = {<BuildingSearchPage api = { api }/>}/> */}
        {/* <Route index element = {<BuildingEditPages api = { api }/>}/> */}
        <Route path = 'building-edit' element = {<BuildingEditPages api = { api }/>}/>
        <Route path = 'building-create' element = {<BuildingCreatePage api = { api }/>}/>
        <Route path = 'building-search' element = {<BuildingSearchPage api = {api}/>}/>
        <Route path = 'login' element = {<LoginPages/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
