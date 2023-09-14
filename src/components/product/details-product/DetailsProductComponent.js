import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import steak from '../../../env/img/steak.jpg';
import hero2 from '../../../env/img/hero-2.jpg';
import Image from "react-bootstrap/Image";

const DetailsProductComponent = () => {

    useEffect(() => {

    }, [])
    return (
        <div id="gtco-welcome" className="bg-white section-padding">
            <div className="container">
                <div className="section-content">
                    <div className="row">
                        <div
                            className="col-sm-5 img-bg d-flex shadow align-items-center justify-content-center justify-content-md-end img-2"
                            style={{backgroundImage: `url(${hero2})` , borderRadius:10}}>
                        </div>
                        <div className="col-sm-7 py-5 pl-md-0 pl-4">
                            <div className="heading-section pl-lg-5 ml-md-5">
                                <h2>
                                    Welcome to Resto
                                </h2>
                            </div>
                            <div className="pl-lg-5 ml-md-5">
                                <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came
                                    from
                                    it would have been rewritten a thousand times and everything that was left from its
                                    origin would be the word "and" and the Little Blind Text should turn around and
                                    return
                                    to its own, safe country. A small river named Duden flows by their place and
                                    supplies it
                                    with the necessary regelialia. It is a paradisematic country, in which roasted parts
                                    of
                                    sentences fly into your mouth.</p>
                                <h3 className="mt-5">Special Recipe</h3>
                                <div className="row">
                                    <div className="col-4">
                                        <a href="#" className="thumb-menu">
                                            <Image className="img-fluid img-cover" src={steak} style={{borderRadius:10}}/>
                                            <h6>Australian Organic Beef</h6>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a href="#" className="thumb-menu">
                                            <Image className="img-fluid img-cover" src={steak} style={{borderRadius:10}}/>
                                            <h6>Australian Organic Beef</h6>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a href="#" className="thumb-menu">
                                            <Image className="img-fluid img-cover" src={steak} style={{borderRadius:10}}/>
                                            <h6>Australian Organic Beef</h6>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};
export default DetailsProductComponent;