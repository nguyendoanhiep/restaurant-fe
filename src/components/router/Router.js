import React from "react";
import { Routes, Route } from 'react-router-dom';
import HomeComponent from "../home/HomeComponent";
import LoginComponent from "../login/LoginComponent";
import  RegisterComponent from '../register/RegisterComponent'
import ProductComponent from "../product/ProductComponent";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/register" element={<RegisterComponent />} />
            <Route path="/product" element={<ProductComponent />} />
        </Routes>
    )
};
export default Router;