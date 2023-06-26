import React from "react";
import { Routes, Route} from 'react-router-dom';
import HomeComponent from "../home/HomeComponent";
import LoginComponent from "../home/login/LoginComponent";


const Router: React.FC = () => (
    <Routes>
        <Route exact path="/" component={HomeComponent}/>
        <Route path="/login" component={LoginComponent}/>
    </Routes>
);
export default Router;