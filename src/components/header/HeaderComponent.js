import React from 'react';
import {Layout, Menu, Input, Image} from 'antd';
import {NavLink, useNavigate} from 'react-router-dom';
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../../redux/slice/LoginSlince';
const { Search } = Input;


const HeaderComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isLoggedIn = JSON.parse(localStorage.getItem('Token'));
    const [mergedItems, setMergedItems] = useState([]);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/')

    };

    const items = [
        {key: '1', label: 'Home', to: '/'},
        {key: '2', label: 'About', to: '/about'},
        {key: '3', label: 'Register', to: '/register'},
        {key: '4', label: 'Login', to: '/login'},
    ];
    const authItems = [
        {key: '3', label: 'Profile', to: '/profile'},
        {key: '4', label: 'Logout', to: '/', onClick: handleLogout},
    ];

    useEffect(() => {
        if (isLoggedIn) {
            const filteredItems = items.filter((item) => item.key !== '3' && item.key !== '4');
            setMergedItems([...filteredItems, ...authItems]);
        } else {
            setMergedItems([...items]);
        }
    }, [isLoggedIn]);
    const onSearch = () => {

    }
    return (
        <Layout className='custom-layout'>
            <div style={{display: 'flex', justifyContent: 'center', marginBottom: '10px', width: '100%'}}>
                <Image
                    style={{borderRadius: '10%'}}
                    width={120}
                    height={60}
                    src={'https://toiyeumeo.com/wp-content/uploads/2021/03/hinh-anh-meo-xinh-ngo-nghinh.jpg'}
                />
            </div>
            <div style={{marginBottom: '10px', width: '100%' , height:'40px'}}>
                <Search placeholder="Search" onSearch={onSearch} style={{width: '100%'}}/>
            </div>
            <div style={{marginBottom: '10px', width: '100%'}}>
                <Menu theme="light" mode="horizontal"
                      style={{fontSize: '16px', justifyContent: 'center', width: '100%'}}>
                    {mergedItems.map((item) => (
                        <Menu.Item key={item.key} style={{width: '24%', display: 'flex', justifyContent: 'center', color : 'red'}}>
                            <NavLink to={item.to} onClick={item.onClick}>
                                {item.label}
                            </NavLink>
                        </Menu.Item>
                    ))}
                </Menu>
            </div>
        </Layout>
    );


}
export default HeaderComponent;