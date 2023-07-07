import React from "react";
import {Footer} from "antd/es/layout/layout";

const FooterComponent = () => {
    return (
        <Footer style={{
            backgroundColor: '#f5f5f5',
            marginTop:'10px',
            bottom: 0,
            left: 0,
            right: 0,
            textAlign: 'center',
        }}>
            <div>
                <p>&copy; 2023 Your Website. All rights reserved.</p>
            </div>
        </Footer>
    )
};
export default FooterComponent;