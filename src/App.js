import HeaderComponent from './components/header/HeaderComponent'
import React from "react";
import FooterComponent from "./components/footer/FooterComponent";
import Router from './components/router/Router';
import './App.css'
const App = () => {
  return (
    <div className="app-container">
      <HeaderComponent />
      <Router />
      <FooterComponent />
    </div>
  )
};
export default App;
