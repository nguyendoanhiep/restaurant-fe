import React from 'react';
import { Layout, Menu, Input } from 'antd';
import { NavLink ,useNavigate} from 'react-router-dom';
import { useEffect, useState } from "react";
import { useSelector,  useDispatch } from 'react-redux';
import { logout } from '../../redux/slice/LoginSlince';


const HeaderComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = JSON.parse(localStorage.getItem('Token'));
  const updateHeader = useSelector(state => state.user.isLoggedIn); 

  const [mergedItems, setMergedItems] = useState([]);  

  const handleLogout = () => {
    dispatch(logout());
    navigate('/')

  };

  const items = [
    { key: '1', label: 'Home', style: { width: '80px', margin: '0 20px' }, to: '/' },
    { key: '2', label: 'About', style: { width: '80px', margin: '0 20px' }, to: '/about' },
    { key: '3', label: 'Register', style: { width: '80px', margin: '0 20px' }, to: '/register' },
    { key: '4', label: 'Login', style: { width: '80px', margin: '0 20px' }, to: '/login' },
  ];
  const authItems = [
    { key: '3', label: 'Profile', style: { width: '80px', margin: '0 20px' }, to: '/profile' },
    { key: '4', label: 'Logout', style: { width: '80px', margin: '0 20px' }, to: '/', onClick: handleLogout },
  ];

  useEffect(() => {
    if (isLoggedIn) {
      const filteredItems = items.filter((item) => item.key !== '3' && item.key !== '4');
      setMergedItems([...filteredItems, ...authItems]);
    } else {
      setMergedItems([...items]);
    }
  }, [updateHeader]);


  return (
    <Layout style={{ background: '#fff', padding: '0 16px' }} >
      <Menu theme="light" mode="horizontal" style={{ lineHeight: '70px', marginLeft: 'auto', color: 'red' }}>
        {mergedItems.map((item) => (
          <Menu.Item key={item.key} style={item.style}>
            <NavLink to={item.to} onClick={item.onClick}>
              {item.label}
            </NavLink>
          </Menu.Item>
        ))}
      </Menu>
    </Layout>
  )
};


export default HeaderComponent;