import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import LoginPages from './pages/LoginPages';
import BuildingEditPages from './pages/BuildingEditPages';
import BuildingSearchPage from './pages/BuildingSearchPage';


const api = "http://localhost:8080/api";

function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route index element = {<LoginPages api = { api }/>}/>
        <Route path = 'building-edit' element = {<BuildingEditPages/>}/>
        <Route path = 'building-search' element = {<BuildingSearchPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
