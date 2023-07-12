import {Breadcrumb, Button, Dropdown, Input, Menu, Slider} from 'antd'
import {useDispatch} from 'react-redux';

const {Search} = Input;
import '../../App.css'
import React, {useState, useEffect} from "react";
import {getAllProduct} from "../../redux/thunk/ProductThuck";

import search from '../../redux/slice/ProductSlince'

const SearchComponent = () => {
    const dispatch = useDispatch();
    const [fromPrice, setFromPrice] = useState()
    const [toPrice, setToPrice] = useState()
    const [searchValue, setSearchValue] = useState('');
    useEffect(() => {
        dispatch(getAllProduct(1, 6, searchValue))
    }, [searchValue])

    function getItem(label, key, icon, children, style) {
        return {
            key,
            icon,
            children,
            label,
            style,
        };
    }

    const itemsOnMobile = [
        getItem('Đồ ăn cho mèo', '2', null, [
                getItem('Hạt cho mèo', '3'),
                getItem('Pate gói', '4'),
                getItem('Pate tươi', '11'),
                getItem('Súp thưởng', '5')
            ]
        ),
        getItem('Cát mèo', '6', null, [
                getItem('Cát đất sét', '7',),
                getItem('Cát đậu nành', '8',)
            ]
        ),
        getItem('Đồ chơi ', '9',),
        getItem('Phụ kiện', '10',)

    ]

    const items = [
        getItem('Danh sách sản phẩm', '1', null, [
                getItem('Đồ ăn cho mèo', '2', null, [
                        getItem('Hạt cho mèo', '3'),
                        getItem('Pate gói', '4'),
                        getItem('Pate tươi', '11'),
                        getItem('Súp thưởng', '5')
                    ]
                ),
                getItem('Cát mèo', '6', null, [
                        getItem('Cát đất sét', '7',),
                        getItem('Cát đậu nành', '8',)
                    ]
                ),
                getItem('Đồ chơi ', '9',),
                getItem('Phụ kiện', '10',)

            ]),
        getItem('Cẩm nang nuôi mèo', '12')
    ]

    const onSearch = (value) => {
        console.log(value)
        setSearchValue(value);
    };
    const onClick = (event) => {
        const selectedMenuItemMobile = findMenuItemByKey(itemsOnMobile, event.key);
        console.log(selectedMenuItemMobile)
    };
    const handleGetPrice = (event) => {
        setFromPrice(event[0].toLocaleString())
        setToPrice(event[1].toLocaleString())
    };
    const handleGetFromPrice = (event) => {
        const input = event.target.value.replace(/[^0-9]/g, '')
        const formattedValue = Number(input).toLocaleString()
        setFromPrice(formattedValue)
    };
    const handleGetToPrice = (event) => {
        const input = event.target.value.replace(/[^0-9]/g, '')
        const formattedValue = Number(input).toLocaleString()
        setToPrice(formattedValue)
    };
    const [currentLabel, setCurrentLabel] = useState('Chọn sản phẩm');

    const handleItemClick = (event) => {
        const selectedMenuItemMobile = findMenuItemByKey(itemsOnMobile, event.key);
        console.log(selectedMenuItemMobile)
        setCurrentLabel(selectedMenuItemMobile.label);
    };
    const findMenuItemByKey = (items, key) => {
        for (const item of items) {
            if (item.key === key) {
                return item;
            }
            if (item.children) {
                const foundItem = findMenuItemByKey(item.children, key);
                if (foundItem) {
                    return foundItem;
                }
            }
        }
        return null;
    };
    return (
        <div className="component-search">
            <div className="input-search">
                <Search placeholder="Search" onSearch={onSearch}/>
            </div>
            <div className="input-price">
                <div className="category-product-mobile">
                    <Dropdown
                        menu={{
                            items: itemsOnMobile,
                            selectable: true,
                            onClick: (event) => handleItemClick(event),
                        }}
                    >
                        <Button
                            style={{
                                color: '#FF6600',
                                borderColor: '#FF6600',
                            }}
                        >
                            {currentLabel}
                        </Button>
                    </Dropdown>
                </div>
                <div className="input-slider-price">
                    <Slider
                        range
                        defaultValue={[0, 6000000]}
                        max={6000000}
                        onAfterChange={handleGetPrice}
                    />
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Input
                        style={{marginRight: '16px', width: '90px'}}
                        value={fromPrice}
                        onChange={handleGetFromPrice}
                        placeholder="Giá từ"
                    />
                    <Input
                        style={{marginLeft: '16px', width: '90px'}}
                        value={toPrice}
                        onChange={handleGetToPrice}
                        placeholder="Đến giá"
                    />
                </div>
            </div>
            <div className="category-product-web">
                <Menu
                    onClick={onClick}
                    defaultSelectedKeys={['1']}
                    style={{
                        width: '100%',
                        marginTop: '20px',
                    }}
                    mode="inline"
                    items={items}
                />
            </div>
        </div>
    );
}
export default SearchComponent;