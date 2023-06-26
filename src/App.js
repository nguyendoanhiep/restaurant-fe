import HeaderComponent from './components/header/HeaderComponent'
import HomeComponent from "./components/home/HomeComponent";
import React from "react";
import FooterComponent from "./components/footer/FooterComponent";

const App: React.FC = () => (
  <>
      <HeaderComponent/>
      <HomeComponent/>
      <FooterComponent/>
  </>
);
export default App;
