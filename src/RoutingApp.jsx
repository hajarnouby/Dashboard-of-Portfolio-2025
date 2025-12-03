import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import Login from './Pages/Login';
const Routing = () => {
    return ( 
        <BrowserRouter>
        <Routes>
             <Route path="/" element={<Login />} />   
             <Route path="/home" element={<Home />} />  
            <Route path="*" element={<ErrorPage />} />

        </Routes>
        </BrowserRouter>
     );
}
 
export default Routing;