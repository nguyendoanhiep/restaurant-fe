import React from "react";
import {useEffect} from "react";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import hero1 from '../../env/img/hero-1.jpg';
import Image from "react-bootstrap/Image";

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
        <div className="hero">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 hero-left">
                        <h1 className="display-4 mb-5">We Love <br/>Delicious Foods!</h1>
                        <div className="mb-2">
                            <a className="btn btn-primary btn-shadow btn-lg" href="#" role="button">Explore Menu</a>
                            <a className="btn btn-icon btn-lg" href="https://player.vimeo.com/video/33110953"
                               data-featherlight="iframe" data-featherlight-iframe-allowfullscreen="true">
                                <span className="lnr lnr-film-play"/>
                                Play Video
                            </a>
                        </div>

                        <ul className="hero-info list-unstyled d-flex text-center mb-0">
                            <li className="border-right">
                                <span className="lnr lnr-rocket"/>
                                <h5>
                                    Fast Delivery
                                </h5>
                            </li>
                            <li className="border-right">
                                <span className="lnr lnr-leaf"/>
                                <h5>
                                    Fresh Food
                                </h5>
                            </li>
                            <li className="">
                                <span className="lnr lnr-bubble"/>
                                <h5>
                                    24/7 Support
                                </h5>
                            </li>
                        </ul>

                    </div>
                    <div className="col-lg-6 hero-right">
                        <div className="owl-carousel owl-theme hero-carousel">
                            <div className="item">
                                <Image className="img-fluid" src={hero1} style={{borderRadius:10}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default HomeComponent;