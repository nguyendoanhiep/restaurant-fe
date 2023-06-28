import React from 'react';
import {Form, Input, Button} from 'antd';
import {UserOutlined, LockOutlined, PhoneOutlined} from '@ant-design/icons';
import {registerUser} from "../../redux/thunk/UserThunk";
import {useNavigate} from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch} from 'react-redux';
import {useState} from "react";

const RegisterComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [roles ,setRoles] = useState(['user']);
    const onSubmit = (values) => {
        dispatch(registerUser(values.username, values.password, values.numberPhone, values.fullName,roles)).then(res => {
            console.log(res)
            if (res.code === 200) {
                sessionStorage.setItem('isRegister', 'true');
                navigate('/login')
            } else {
                // Đăng nhập không thành công
                toast.error('Đăng Ký không thành công!');
            }
        });
    };
    return (
        <Form
            name="registerForm"
            onFinish={onSubmit}
            className="register-form"
            style={{maxWidth: '400px', margin: '0 auto'}}
        >
            <h2>Register</h2>

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

            <Form.Item
                name="confirmPassword"
                dependencies={['password']}
                rules={[
                    {required: true, message: 'Please confirm your password!'},
                    ({getFieldValue}) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject('The two passwords do not match!');
                        },
                    }),
                ]}
            >
                <Input.Password
                    style={{height: '35px'}}
                    prefix={<LockOutlined className="site-form-item-icon"/>}
                    placeholder="Confirm Password"
                />
            </Form.Item>

            <Form.Item
                name="numberPhone"
                rules={[
                    {required: true, message: 'Please input your phone number!'},
                ]}
            >
                <Input
                    style={{height: '35px'}}
                    prefix={<PhoneOutlined className="site-form-item-icon"/>}
                    placeholder="Phone Number"
                />
            </Form.Item>

            <Form.Item
                name="fullName"
                rules={[
                    {required: true, message: 'Please input your full name!'},
                ]}
            >
                <Input
                    style={{height: '35px'}}
                    prefix={<UserOutlined className="site-form-item-icon"/>}
                    placeholder="Full Name"
                />
            </Form.Item>

            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="register-form-button"
                    style={{width: '80px', height: '40px'}}
                    danger
                >
                    Register
                </Button>
                <ToastContainer/>
            </Form.Item>
        </Form>

    )
}
export default RegisterComponent;