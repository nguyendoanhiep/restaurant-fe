import HeaderComponent from './components/header/HeaderComponent'
import React, {useEffect, useState} from "react";
import FooterComponent from "./components/footer/FooterComponent";
import Router from './components/router/Router';
import './App.css'
import {useLocation} from 'react-router-dom';
import {ToastContainer} from "react-toastify";

const App = () => {
    const location = useLocation();
    useEffect(() => {
    }, []);
    return (
        <div className="boxed-page">
            <HeaderComponent/>
            <Router/>
            <FooterComponent/>
            <ToastContainer/>
        </div>
    )
};
export default App;
