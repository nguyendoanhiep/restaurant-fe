import React from 'react';
import {Form, Input, Button} from 'antd';
import {UserOutlined, LockOutlined, PhoneOutlined} from '@ant-design/icons';
import {registerUser} from "../../redux/thunk/UserThunk";
import {useNavigate} from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch} from 'react-redux';
import {useState} from "react";
import rooftop from "../../env/img/rooftop-skyline.jpg";

const RegisterComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [roles, setRoles] = useState(['ROLE_USER']);
    const onSubmit = (values) => {
        dispatch(registerUser(values.username, values.password, values.numberPhone, roles)).then(res => {
            console.log(res)
            if (res.code === 200) {
                sessionStorage.setItem('isRegister', 'true');
                navigate('/login')
            } else {
                // Đăng nhập không thành công
                toast.error('Đăng Ký không thành công!', {
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
                            Register
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

                                        <Form.Item
                                            name="confirmPassword"
                                            dependencies={['password']}
                                            hasFeedback
                                            rules={[
                                                {required: true, message: 'Please confirm your password!'},
                                                ({getFieldValue}) => ({
                                                    validator(_, value) {
                                                        if (!value || getFieldValue('password') === value) {
                                                            return Promise.resolve();
                                                        }
                                                        return Promise.reject('Mật khẩu và xác nhận mật khẩu không khớp!');
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
                                            name="Number Phone"
                                            rules={[
                                                {required: true, message: 'Please input your Number Phone!'},
                                            ]}
                                        >
                                            <Input
                                                style={{height: '35px'}}
                                                prefix={<PhoneOutlined className="site-form-item-icon"/>}
                                                placeholder="Number Phone"
                                            />
                                        </Form.Item>
                                        <Form.Item>
                                            <Button type="primary" htmlType="submit" className="login-form-button"
                                                    style={{width: '80px', height: '40px'}}
                                                    danger>
                                                Register
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
export default RegisterComponent;