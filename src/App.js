import HeaderComponent from './components/header/HeaderComponent'
import React, {useEffect, useState} from "react";
import FooterComponent from "./components/footer/FooterComponent";
import Router from './components/router/Router';
import SearchComponent from "./components/search/SearchComponent";
import './App.css'
import {useLocation} from 'react-router-dom';
import {ToastContainer} from "react-toastify";

const App = () => {
    const location = useLocation();
    const pathname = location.pathname
    const [checkForm, setCheckForm] = useState(false);
    useEffect(() => {
        if (pathname === '/login' || pathname === '/register') {
            setCheckForm(true)
        }else {
            setCheckForm(false)
        }
    }, [pathname]);
    return (
        <div className="custom-body">
            <HeaderComponent/>
            <div className="custom-body-app">
                {!checkForm && <SearchComponent/>}
                <Router/>
            </div>
            <FooterComponent/>
            <ToastContainer/>
        </div>
    )
};
export default App;
