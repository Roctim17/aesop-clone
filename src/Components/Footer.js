import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Footer.css'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='p-5 m-0'>
                    <div className='row '>
                        <div className='col-lg-5'>
                            <div class="input-group">
                                <span class="input-group-text w-100 d-flex justify-content-between"> <span>Email address </span> <i class="fas fa-arrow-right"></i></span>
                            </div>
                            <div>
                                <div class="form-check py-3">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                    Subscribe to receive communications from Aesop about our products and services. By subscribing, you confirm you have read and accept our <br/> <Link>privacy policy </Link>
                                    </label>
                                </div>
                               
                            </div>

                        </div>
                        <div className='col-lg-2'>
                            <h6>Orders and support</h6>
                            <hr />
                            <ul>
                                <li>Contact us</li>
                                <li>FAQs </li>
                                <li>Shipping </li>
                                <li>Returns </li>
                                <li>Order history</li>
                                <li>Terms and conditions</li>
                            </ul>
                        </div>
                        <div className='col-lg-2'>
                            <h6>Services</h6>
                            <hr />
                            <ul>
                                <li>Live assistance</li>
                                <li>Corporate gifts</li>
                                <li>Facial appointments</li>
                                <li>Click and Collect</li>
                                <li>Video consultation</li>
                            </ul>
                        </div>
                        <div className='col-lg-2'>
                            <h6>Location preferences</h6>
                            <hr />
                            <ul>
                                <li>Shipping:</li>
                                <li>Hong Kong SAR, China</li>
                                <li></li>
                                <li>Language:</li>
                                <li>English</li>
                                <li>繁體中文</li>
                                <li>简体中文</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='px-5'>
                    <div className='row'>
                        <div className='col-lg-5'>
                            <h6>Sustainability</h6>
                            <hr />
                            <p>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
                        </div>
                        <div className='col-lg-2'>
                            <h6>About</h6>
                            <hr />
                            <ul>
                                <li>Our story</li>
                                <li>Foundation</li>
                                <li>Careers</li>
                                <li>Privacy policy</li>
                                <li>Accessibility</li>
                                <li>Cookie Policy</li>
                            </ul>
                        </div>
                        <div className='col-lg-2'>
                            <h6>Social media</h6>
                            <hr />
                            <ul>
                                <li>Instagram </li>
                                <li>Twitter </li>
                                <li>LinkedIn </li>
                                <li>WeChat</li>
                                <li>Weibo </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <hr className='m-0' />
            <div className='px-5 aesop'> <p className='py-3'>© Aesop</p></div>
        </>
    );
};

export default Footer;