import React, {useEffect, useState} from 'react';
import {Layout, Menu, Image, Button, Dropdown} from 'antd';
import {NavLink, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {logout} from '../../redux/slice/LoginSlince';
import {MenuFoldOutlined, MenuUnfoldOutlined, ShoppingCartOutlined, UserOutlined} from '@ant-design/icons';
import myTomCatImage from '../../env/img/My-tom-cat.png';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const HeaderComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = JSON.parse(localStorage.getItem('Token'));
    const [list, setList] = useState([]);
    const [menu, setMenu] = useState(false);
    const handleLogout = () => {
        dispatch(logout());
        toast.error('Đăng xuất thành công!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            className: 'my-toast'
        });
        navigate('/');
    };
    const items = [
        {key: '1', label: 'Home', to: '/'},
        {key: '2', label: 'About', to: '/about'},
        {key: '3', label: 'About', to: '/about'},
        {key: '4', label: 'About', to: '/about'},
    ];

    const listBeforeLogin = [
        {key: '3', label: 'Register', to: '/register'},
        {key: '4', label: 'Login', to: '/login'},
    ];

    const listAfterLogin = [
        {key: '5', label: 'Profile', to: '/profile'},
        {key: '6', label: 'Logout', danger: true, onClick: handleLogout},
    ];
    const toggleMenu = () => {
        setMenu(!menu);
    };
    const onHandleMenu = (e) => {
        const selectedMenuItem = items.find((item) => item.key === e.key);
        navigate(selectedMenuItem.to);
        setMenu(!menu);
    };
    const onHandleList = (e) => {
        const selectedMenuItem = list.find((item) => item.key === e.key);
        navigate(selectedMenuItem.to);
    };
    useEffect(() => {
        setList(isLoggedIn ? listAfterLogin : listBeforeLogin);

    }, [isLoggedIn]);

    return (
        <Layout className="custom-layout">
            <div style={{width: '20%', display: 'flex', alignContent: 'center'}}>
                <Button onClick={toggleMenu}>
                    {menu ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                </Button>
                {menu && <Menu
                            onClick={onHandleMenu}
                            mode="inline"
                            theme="light"
                            inlineCollapsed={!menu}
                            items={items}
                            className="menu-layout"/>
                }
            </div>
            <div style={{display: 'flex', justifyContent: 'center', width: '60%'}}>
                <NavLink to="/">
                    <Image style={{borderRadius: '10%'}} width={100} height={100} src={myTomCatImage}
                           preview={false}/>
                </NavLink>
            </div>
            <div style={{display: 'flex', justifyContent: 'right', width: '20%'}}>
                <Button style={{border: 'none'}}>
                    <ShoppingCartOutlined style={{fontSize: '20px', alignSelf: 'center'}}/>
                </Button>
                <Dropdown
                    menu={{
                        items: list,
                        selectable: true,
                        onClick: onHandleList,
                    }}
                    style={{alignSelf: 'center'}}
                >
                    <UserOutlined style={{fontSize: '20px', alignSelf: 'center'}}/>
                </Dropdown>
            </div>
        </Layout>
    );
};

export default HeaderComponent;
