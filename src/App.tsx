import React from 'react';
import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/Header';
import ProductBar from './components/Product Bar';
import SignIn from './pages/Sign In';
import SignUp from './pages/Sign Up';
import {   Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Equipment from './pages/Equipment';
import Parts from './pages/Parts';
import Rentals from './pages/Rentals';
import Contact from './pages/Contact';
import RequireAuth from './utils/auth/requirAuth';


function App() {
  return (
    <>
<ResponsiveAppBar/>
    <ProductBar/>
    <Routes>
<Route path='/'  element={ <RequireAuth> <Home/> </RequireAuth>}/>
<Route path='About'  element={<About/>}/>
<Route path='Services'  element={<Services/>}/>
<Route path='Equipment'  element={<Equipment/>}/>
<Route path='Parts'  element={<Parts/>}/>
<Route path='Rentals'  element={<Rentals/>}/>
<Route path='Contact'  element={<Contact/>}/>
<Route path='login'  element={<SignIn/>}/>
<Route path='signup'  element={<SignUp/>}/>


    </Routes>

    
   
    </>
  );
}

export default App;
