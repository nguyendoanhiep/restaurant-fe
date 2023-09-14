import React from "react";
import {Routes, Route} from 'react-router-dom';
import HomeComponent from "../home/HomeComponent";
import LoginComponent from "../login/LoginComponent";
import RegisterComponent from '../register/RegisterComponent'
import ProductComponent from "../product/ProductComponent";
import DetailsProductComponent from "../product/details-product/DetailsProductComponent";
import AboutComponent from "../about/AboutComponent";
import PromotionComponent from "../promotion/PromotionComponent"
const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeComponent/>}/>
            <Route path="/login" element={<LoginComponent/>}/>
            <Route path="/register" element={<RegisterComponent/>}/>
            <Route path="/product" element={<ProductComponent/>}/>
            <Route path="/details-product" element={<DetailsProductComponent/>}/>
            <Route path="/about" element={<AboutComponent/>}/>
            <Route path="/promotion" element={<PromotionComponent/>}/>
        </Routes>
    )
};
export default Router;