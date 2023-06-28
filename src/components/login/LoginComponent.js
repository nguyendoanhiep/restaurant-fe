import React from "react";
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/thunk/LoginThunk'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = (values) => {
        dispatch(loginUser(values.username, values.password)).then(res => {
            if (res.code === 200) {
                sessionStorage.setItem('isLoggedIn', 'true');
                navigate('/')
            } else {
                // Đăng nhập không thành công
                toast.error('Đăng nhập không thành công!');
            }
        });

    };

    return (
        <Form
            name="loginForm"
            onFinish={onSubmit}
            className="login-form"
            style={{ maxWidth: '400px', margin: '0 auto', marginTop: '50px' }}
        >
            <h2>Login</h2>

            <Form.Item
                name="username"
                rules={[
                    { required: true, message: 'Please input your username!' },
                ]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                />
            </Form.Item>

            <Form.Item
                name="password"
                rules={[
                    { required: true, message: 'Please input your password!' },
                ]}
            >
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Password"
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" danger >
                    Log in
                </Button>
                <ToastContainer />

            </Form.Item>
        </Form>
    )
};

export default LoginComponent;