import React from "react";
import chef1 from '../../env/img/chef-1.jpg';
import chef2 from '../../env/img/chef-2.jpg';
import chef3 from '../../env/img/chef-3.jpg';
import Image from "react-bootstrap/Image";

const AboutComponent = () => {
    return (
        <div id="gtco-team" className="bg-white section-padding">
            <div className="container">
                <div className="section-content">
                    <div className="heading-section text-center">
                        <h2>
                            Our Team
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="team-card mb-5">
                                <Image className="img-fluid" src={chef1}/>
                                <div className="team-desc">
                                    <h4 className="mb-0">Aaron Patel</h4>
                                    <p className="mb-1">CEO</p>
                                    <ul className="list-inline mb-0 team-social-links">
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fab fa-facebook-f"/>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fab fa-twitter"/>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fab fa-instagram"/>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fab fa-google-plus-g"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="team-card mb-5">
                                <Image className="img-fluid" src={chef2}/>
                                <div className="team-desc">
                                    <h4 className="mb-0">Daniel Tebas</h4>
                                    <p className="mb-1">Chef</p>
                                    <ul className="list-inline mb-0 team-social-links">
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fab fa-facebook-f"/>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fab fa-twitter"/>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fab fa-instagram"/>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fab fa-google-plus-g"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="team-card mb-5">
                                <Image className="img-fluid" src={chef3}/>
                                <div className="team-desc">
                                    <h4 className="mb-0">Jon Snow</h4>
                                    <p className="mb-1">Chef</p>
                                    <ul className="list-inline mb-0 team-social-links">
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fab fa-facebook-f"/>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fab fa-twitter"/>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fab fa-instagram"/>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fab fa-google-plus-g"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default AboutComponent;