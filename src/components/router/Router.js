import React from "react";
import { Routes, Route } from 'react-router-dom';
import HomeComponent from "../home/HomeComponent";
import LoginComponent from "../login/LoginComponent";


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/login" element={<LoginComponent />} />
        </Routes>
    )
};
export default Router;