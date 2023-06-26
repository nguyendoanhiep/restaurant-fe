import React from "react";
import ProductComponent from "./product/ProductComponent";
import PostComponent from "./post/PostComopnent";
const HomeComponent: React.FC = () => (
    <div>
        <ProductComponent/>
        <PostComponent/>
    </div>
);
export default HomeComponent;