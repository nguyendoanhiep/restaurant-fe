import React from 'react';
import {Form, Input, Button} from 'antd';
import {UserOutlined, LockOutlined, PhoneOutlined} from '@ant-design/icons';
import {loginUser} from "../../redux/thunk/UserThunk";
import {useNavigate} from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch} from 'react-redux';
import {useState} from "react";
import rooftop from "../../env/img/reservation-bg.jpg";

const LoginComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onSubmit = (values) => {
        dispatch(loginUser(values.username, values.password)).then(res => {
            console.log(res)
            if (res.code === 200) {
                sessionStorage.setItem('isLoggedIn', 'true');
                navigate('/')
            } else {
                toast.error('Đăng Nhập không thành công!', {
                    className: 'my-toast',
                });
            }
        });
    };
    return (
        <div style={{maxWidth: 1500}} className="container">
            <div id="gtco-reservation" className="bg-fixed bg-white section-padding overlay"
                 style={{backgroundImage: `url(${rooftop})`, maxHeight: 600, maxWidth: 1500}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="section-content bg-white p-5 shadow">
                                <div className="heading-section text-center">
                        <span className="subheading">
                            Login
                        </span>
                                    <Form
                                        name="loginForm"
                                        onFinish={onSubmit}
                                        className="form"
                                    >
                                        <Form.Item
                                            name="username"
                                            rules={[
                                                {required: true, message: 'Please input your username!'},
                                            ]}
                                        >
                                            <Input
                                                style={{height: '35px'}}
                                                prefix={<UserOutlined className="site-form-item-icon"/>}
                                                placeholder="Username"
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            name="password"
                                            rules={[
                                                {required: true, message: 'Please input your password!'},
                                            ]}
                                        >
                                            <Input.Password
                                                style={{height: '35px'}}

                                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                                placeholder="Password"
                                            />
                                        </Form.Item>

                                        <Form.Item>
                                            <Button type="primary" htmlType="submit" className="login-form-button"
                                                    style={{width: '80px', height: '40px'}}
                                                    danger>
                                                Log in
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default LoginComponent;