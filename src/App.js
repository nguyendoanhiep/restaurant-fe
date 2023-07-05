import HeaderComponent from './components/header/HeaderComponent'
import React from "react";
import FooterComponent from "./components/footer/FooterComponent";
import Router from './components/router/Router';
import SearchComponent from "./components/search/SearchComponent";
import './App.css'

const App = () => {
    return (
        <div className="custom-body">
            <HeaderComponent/>
            <Router/>
            <FooterComponent/>
        </div>
    )
};
export default App;
