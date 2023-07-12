import React from "react";
import {useEffect} from "react";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomeComponent = () => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    sessionStorage.removeItem('isLoggedIn');
    useEffect(() => {
        if (isLoggedIn) {
            toast.success('Đăng nhập thành công!', {
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
    return (
          <div>

          </div>
    )
};
export default HomeComponent;