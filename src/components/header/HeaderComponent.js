import React from 'react';
import { Layout, Menu, Input } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/slice/LoginSlince';


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
    { key: '1', label: 'Home', style: { width: '80px', margin: '0 20px', fontSize: '17px' }, to: '/' },
    { key: '2', label: 'About', style: { width: '80px', margin: '0 20px', fontSize: '17px' }, to: '/about' },
    { key: '3', label: 'Register', style: { width: '80px', margin: '0 20px', fontSize: '17px' }, to: '/register' },
    { key: '4', label: 'Login', style: { width: '80px', margin: '0 20px', fontSize: '17px' }, to: '/login' },
  ];
  const authItems = [
    { key: '3', label: 'Profile', style: { width: '80px', margin: '0 20px', fontSize: '17px' }, to: '/profile' },
    { key: '4', label: 'Logout', style: { width: '80px', margin: '0 20px', fontSize: '17px' }, to: '/', onClick: handleLogout },
  ];

  useEffect(() => {
    if (isLoggedIn) {
      const filteredItems = items.filter((item) => item.key !== '3' && item.key !== '4');
      setMergedItems([...filteredItems, ...authItems]);
    } else {
      setMergedItems([...items]);
    }
  }, [isLoggedIn]);
  const onSeacrch = () => {

  }

  return (
    <Layout style={{ background: '#fff', padding: '0 16px'}}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center' ,height:'60px'}}>
        <div style={{ justifySelf: 'end', marginLeft: '50px' }}>
          <Input placeholder="Search" onChange={onSeacrch} style={{ width: '500px' , height:'40px' }} />
        </div>
        <div style={{ justifySelf: 'end', marginRight: '20px' }}>
          <Menu theme="light" mode="horizontal">
            {mergedItems.map((item) => (
              <Menu.Item key={item.key} style={item.style}>
                <NavLink to={item.to} onClick={item.onClick} >
                  {item.label}
                </NavLink>
              </Menu.Item>
            ))}
          </Menu>
        </div>
      </div>
    </Layout>
  )
};


export default HeaderComponent;