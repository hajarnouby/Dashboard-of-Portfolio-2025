import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import Login from './Pages/Login';
import Content from './Pages/ContentM';
import ProjectsTable from './Pages/ProjectsTable';
import Cpm from './Pages/Cpm';
const Routing = () => {
    return ( 
        <BrowserRouter>
        <Routes>
             <Route path="/" element={<Login />} />   
             <Route path="/home" element={<Home />} />  
             <Route path="/ProjectsTable" element={<ProjectsTable />} />  
             <Route path="/pages-management" element={<Cpm />} />  
             <Route path="/content-management" element={<Content />} />  
            <Route path="*" element={<ErrorPage />} />

        </Routes>
        </BrowserRouter>
     );
}
 
export default Routing;