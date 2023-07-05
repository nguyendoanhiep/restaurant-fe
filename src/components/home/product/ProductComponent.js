import React from "react";
import {Pagination} from 'antd';

const ProductComponent = () => (
    <div>
        <div className="product-container">
            <div className="product-item">
            </div>
            <div className="product-item">
            </div>
            <div className="product-item">
            </div>
            <div className="product-item">
            </div>
            <div className="product-item">
            </div>
            <div className="product-item">
            </div>
        </div>
        <div style={{display : "flex", justifyContent : "right" , marginTop:'20px' , marginBottom:'20px'}}>
            <Pagination defaultCurrent={1} total={50} />
        </div>
    </div>
);
export default ProductComponent;