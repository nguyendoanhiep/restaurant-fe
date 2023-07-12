import React, {useState, useEffect} from "react";
import {Button, Pagination, Image, Breadcrumb} from 'antd';
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

const ProductComponent = () => {
    const [productList, setProductList] = useState([])
    const res = useSelector((state) => state.product.data);
    useEffect(() => {
        setProductList(res)
    }, [res])

    return (
        <div style={{ width: '75%', maxWidth: '1000px', minWidth: '600px' }}>
            <div className="custom-product">
                {productList.content?.map((product) => (
                    <div key={product.id} className="custom-product-item">
                        <NavLink to="/">
                            <Image
                                width={160}
                                height={160}
                                preview={false}
                                src={product.images?.find((image) => image.priority === 1)?.urlImage}
                            />
                        </NavLink>
                        <p>{product.name}</p>
                        <p>Giá: {product.price}</p>
                    </div>
                ))}
            </div>
            {productList.content && (
                <div style={{ display: 'flex', justifyContent: 'right', marginTop: '20px', marginBottom: '20px' }}>
                    <Pagination defaultCurrent={1} total={50} />
                </div>
            )}
        </div>
    )

};
export default ProductComponent;