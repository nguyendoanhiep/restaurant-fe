import React, {useEffect, useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {logout} from '../../redux/slice/LoginSlince';
import logo from '../../env/img/logo.png';
import 'bootstrap-4-react';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Image from "react-bootstrap/Image";
import '../../App.css';
import {Nav} from "bootstrap-4-react/lib/components";

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
    const itemsLeft = [
        {key: '1', label: 'Trang chủ', to: '/'},
        {key: '2', label: 'Sản phẩm', to: '/product'},
        {key: '3', label: 'Khuyến mãi', to: '/promotion'},
        {key: '4', label: 'Bài viết', to: '/post'},
    ]
    const itemsRight = [
        {key: '5', label: 'Liên hệ', to: '/contact'},
        {key: '6', label: 'Về chúng tôi', to: '/about'},
        {key: '7', label: 'Đăng Ký', to: '/register', style: 'red'},
        {key: '8', label: 'Đăng nhập', to: '/login', style: 'red'},
    ]

    useEffect(() => {

    }, []);

    return (
        <div id="navbar-header" className="navbar navbar-expand-lg">
            <div className="container">
                <div className="navbar-brand navbar-brand-center d-flex align-items-center p-0 only-mobile">
                    <Image src={logo} href="/"/>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="lnr lnr-menu"/>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                    <Nav className="navbar-nav d-flex justify-content-between">
                        <div/>
                        <div className="d-flex flex-lg-row flex-column">
                            {itemsLeft.map((item) => (
                                <Nav.Item key={item.key}>
                                    <Nav.Link as={NavLink} href={item.to}>
                                        {item.label}
                                    </Nav.Link>
                                </Nav.Item>
                            ))}
                        </div>
                    </Nav>
                    <Nav.Link className="navbar-brand navbar-brand-center d-flex align-items-center only-desktop"
                              href="/">
                        <Image src={logo} width={117} height={50}/>
                    </Nav.Link>
                    <Nav className="navbar-nav d-flex justify-content-between">
                        <div className="d-flex flex-lg-row flex-column">
                            {itemsRight.map((item) => (
                                <Nav.Item key={item.key}>
                                    <Nav.Link as={NavLink} href={item.to} style={{color: item.style}}>
                                        {item.label}
                                    </Nav.Link>
                                </Nav.Item>
                            ))}
                        </div>
                    </Nav>
                </div>
            </div>
        </div>
    );
};

export default HeaderComponent;
