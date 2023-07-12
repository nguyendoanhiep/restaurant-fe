import React, {useEffect, useState} from 'react';
import {Layout, Menu, Image, Button, Dropdown, Breadcrumb} from 'antd';
import {NavLink, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {logout} from '../../redux/slice/LoginSlince';
import {MenuFoldOutlined, MenuUnfoldOutlined, ShoppingCartOutlined, UserOutlined} from '@ant-design/icons';
import myTomCatImage from '../../env/img/My-tom-cat.png';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const { Header } = Layout;

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
        {key: '1', label: 'Trang chủ', to: '/'},
        {key: '2', label: 'Sản phẩm', to: '/product'},
        {key: '3', label: 'Bài viết', to: '/post'},
        {key: '4', label: 'Khuyến mãi', to: '/sales'},
        {key: '5', label: 'Liên hệ', to: '/contact'},
        {key: '6', label: 'Về chúng tôi', to: '/about'},
    ]

    const listBeforeLogin = [
        {key: '7', label: 'Đăng ký', to: '/register'},
        {key: '8', label: 'Đăng nhập', to: '/login'},
    ];

    const listAfterLogin = [
        {key: '7', label: 'Thông tin cá nhân', to: '/profile'},
        {key: '8', label: 'Đăng xuất', danger: true, onClick: handleLogout},
    ];
    const toggleMenu = () => {
        setMenu(!menu);
    };
    const onHandleMenu = (e) => {
        const selectedMenuItem = items.find((item) => item.key === e.key);
        navigate(selectedMenuItem.to);
        // setMenu(!menu);
    };
    const onHandleList = (e) => {
        const selectedMenuItem = list.find((item) => item.key === e.key);
        navigate(selectedMenuItem.to);
    };
    useEffect(() => {
        setList(isLoggedIn ? listAfterLogin : listBeforeLogin);

    }, [isLoggedIn]);

    return (
        <div>
            <Header className="custom-header">
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
            </Header>
            <div style={{margin: '20px 0 50px 0', width: '100%'}}>
                <Menu
                    style={{
                        fontSize: '18px',
                        display: 'flex',
                        justifyContent: 'right',
                    }}
                    onClick={onHandleMenu}
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    theme="light"
                    items={items.map((value, index) => {
                        return {
                            key: index + 1,
                            label: value.label,
                            style: {
                                width: '13%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            },
                        };
                    })}
                ></Menu>
            </div>
        </div>
    );
};

export default HeaderComponent;
