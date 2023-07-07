import React, {useState, useEffect} from "react";
import {Button, Pagination, Image} from 'antd';
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

const ProductComponent = () => {
    const [productList, setProductList] = useState([])
    const res = useSelector((state) => state.product.data);
    useEffect(() => {
        setProductList(res)
    }, [res])

    return (
        <div style={{width: '75%'}}>
            <div className="product-container">
                {productList.content && productList.content.map((product) => (
                    <div key={product.id} className="product-item">
                        <NavLink to="/">
                            <Image
                                width={200}
                                height={200}
                                preview={false}
                                src={product.images.map((value) => {
                                    if (value.priority === 1) {
                                        return value.urlImage
                                    }
                                })}
                            />
                        </NavLink>
                        <h3>{product.name}</h3>
                        <div>Giá: {product.price}</div>
                    </div>
                ))}
            </div>
            {productList.content &&
                <div style={{display: "flex", justifyContent: "right", marginTop: '20px', marginBottom: '20px'}}>
                    <Pagination defaultCurrent={1} total={50}/>
                </div>
            }
        </div>
    )

};
export default ProductComponent;