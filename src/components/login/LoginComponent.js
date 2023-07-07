import React, {useEffect} from "react";
import {Form, Input, Button} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {useDispatch} from 'react-redux';
import {loginUser} from '../../redux/thunk/LoginThunk'
import {useNavigate} from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isRegister = sessionStorage.getItem('isRegister') === 'true';
    sessionStorage.removeItem('isRegister');
    useEffect(() => {
        if (isRegister) {
            toast.success('Đăng Ký thành công!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                className: 'my-toast',
            });
        }
    }, [])
    const onSubmit = (values) => {
        dispatch(loginUser(values.username, values.password)).then(res => {
            if (res.code === 200) {
                sessionStorage.setItem('isLoggedIn', 'true');
                navigate('/')
            } else {
                // Đăng nhập không thành công
                toast.error('Đăng nhập không thành công!',{
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    className: 'my-toast'
                });
            }
        });

    };

    return (
           <Form
               name="loginForm"
               onFinish={onSubmit}
               className="form"
           >
               <h2>Login</h2>

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
    )
};

export default LoginComponent;