import './App.scss';
// Programmer Name: Daniel Mikhail, BSc(Hons) Software Engineering, TP061667, APD3F2211SE
// Program Name: App.js
// Description: to show the program
// First Written on: 2 june 2023
// Edited on: 20 july 2023


// for react router dom
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// for pages
import { Home, FoodDetails, Error, Category } from "./pages/index";
// for components
import Header from "./components/Header/Header";
import Sidebar from "./components/SideBar/Sidebar";

import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Rate from './components/Rate/Rate';
import Donate from './components/Donate/Donate';
import AdminPage from './admin/AdminPage';
import AdminShowData from './admin/AdminShowData';


function App() {
  return (
    
    <BrowserRouter>
     <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      
      <Header />
      <Sidebar />

    <Routes>
      <Route>
      
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/adminshow" element={<AdminShowData />} />
      <Route path="/donation" element={<Donate />} />
      
      <Route path="/" element={<Home />} />
       <Route path="/food/:id" element={<FoodDetails />} />
       <Route path="/food/category/:name" element={<Category />} />
       <Route path="*" element={<Error />} />
      </Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
