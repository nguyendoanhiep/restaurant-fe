import React from "react";
import {Footer} from "antd/es/layout/layout";

const FooterComponent = () => {
    return (
        <Footer style={{
            backgroundColor: '#f5f5f5',
            padding: '20px',
            position: 'fixed',
            bottom: '0',
            width: '100%',
            textAlign: 'center',
        }}>
            <div style={{maxWidth: '600px',
                margin: '0 auto',
            }}>
                <p>&copy; 2023 Your Website. All rights reserved.</p>
            </div>
        </Footer>
    )
};
export default FooterComponent;