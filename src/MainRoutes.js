import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Header/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='experience' element={<Experience/>}/>
                <Route path='services' element={<Services/>}/>
            </Route>
        </Routes>
    );
};

export default MainRoutes;