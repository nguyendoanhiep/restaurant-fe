import React from "react";
import breakfast from '../../env/img/breakfast-1.jpg'
import Image from "react-bootstrap/Image";

const PromotionComponent = () => {
    return (
        <div id="gtco-menu" className="section-padding">
            <div className="container">
                <div className="section-content">
                    <div className="row mb-5">
                        <div className="col-md-12">
                            <div className="heading-section text-center">
                                <h2>
                                    Promotion
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 menu-wrap">
                            <div className="heading-menu">
                                <h4 className="text-center mb-5">Breakfast</h4>
                            </div>
                            <div className="menus d-flex align-items-center">
                                <div className="menu-img rounded-circle">
                                    <Image className="img-fluid" src={breakfast}/>
                                </div>
                                <div className="text-wrap">
                                    <div className="row align-items-start">
                                        <div className="col-8">
                                            <h6>Egg Sandwich</h6>
                                        </div>
                                        <div className="col-4">
                                            <h6 className="text-muted menu-price">$30</h6>
                                        </div>
                                    </div>
                                    <p>Meat Ball, Mie</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 menu-wrap">
                            <div className="heading-menu">
                                <h4 className="text-center mb-5">Breakfast</h4>
                            </div>
                            <div className="menus d-flex align-items-center">
                                <div className="menu-img rounded-circle">
                                    <Image className="img-fluid" src={breakfast}/>
                                </div>
                                <div className="text-wrap">
                                    <div className="row align-items-start">
                                        <div className="col-8">
                                            <h6>Egg Sandwich</h6>
                                        </div>
                                        <div className="col-4">
                                            <h6 className="text-muted menu-price">$30</h6>
                                        </div>
                                    </div>
                                    <p>Meat Ball, Mie</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 menu-wrap">
                            <div className="heading-menu">
                                <h4 className="text-center mb-5">Breakfast</h4>
                            </div>
                            <div className="menus d-flex align-items-center">
                                <div className="menu-img rounded-circle">
                                    <Image className="img-fluid" src={breakfast}/>
                                </div>
                                <div className="text-wrap">
                                    <div className="row align-items-start">
                                        <div className="col-8">
                                            <h6>Egg Sandwich</h6>
                                        </div>
                                        <div className="col-4">
                                            <h6 className="text-muted menu-price">$30</h6>
                                        </div>
                                    </div>
                                    <p>Meat Ball, Mie</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};
export default PromotionComponent;