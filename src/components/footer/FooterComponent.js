import React from "react";
import { Footer } from "antd/es/layout/layout";
import './Footer.css'
const FooterComponent = () => {
    return (
        <Footer  className="footer-container">
        <div className="footer-content">
          <p>&copy; 2023 Your Website. All rights reserved.</p>
        </div>
      </Footer >
    )
};
export default FooterComponent;