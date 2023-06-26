import React from 'react';
import {Layout, Menu, Input} from 'antd';
const items = [
    {key: '1', label: 'Home', style: {width: '80px', margin: '0 20px'}, to:'/home'},
    {key: '2', label: 'About', style: {width: '80px', margin: '0 20px'}, to: '/about'},
    {key: '3', label: 'Register', style: {width: '80px', margin: '0 20px'}, to: '/about'},
    {key: '4', label: 'Login', style: {width: '80px', margin: '0 20px'}, to: '/login'},
];

const HeaderComponent: React.FC = () => (
    <Layout style={{background: '#fff', padding: '0 16px'}}>
        <Menu theme="light" mode="horizontal" style={{lineHeight: '70px', marginLeft: 'auto'}} items={items.map((item, index)=>{
            const key = index + 1;
            return {
                key,
                label: item.label,
                style: item.style,
                to : item.to
            };
        })}>
        </Menu>
    </Layout>
);


export default HeaderComponent;