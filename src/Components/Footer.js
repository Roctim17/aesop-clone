import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Footer.css'
import { AiOutlineArrowRight } from "react-icons/ai";

const Footer = () => {
    return (
        <>
            <div className='footer bg-dark'>
                <div className='footer-one p-5 m-0'>

                    <div className='one email'>
                        <div class="input-group">
                            <span class="input-group-text bg-dark text-light w-100 d-flex justify-content-between"> <span>Email address </span> <AiOutlineArrowRight/> </span>
                        </div>
                        <div>
                            <div class="form-check py-3">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Subscribe to receive communications from Aesop about our products and services. By subscribing, you confirm you have read and accept our <br /> <Link>privacy policy </Link>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='one Orders'>
                        <h6>Orders and support</h6>
                        <p className='before'></p>
                        <p>Contact us</p>
                        <p>FAQs </p>
                        <p>Shipping </p>
                        <p>Returns </p>
                        <p>Order history</p>
                        <p>Terms and conditions</p>

                    </div>

                    <div className='one Services'>
                        <h6>Services</h6>
                        <p className='before'></p>
                        <p>Live assistance</p>
                        <p>Corporate gifts</p>
                        <p>Facial appointments</p>
                        <p>Click and Collect</p>
                        <p>Video consultation</p>

                    </div>

                    <div className='one Location'>
                        <h6>Location preferences</h6>
                        <p className='before'></p>
                        <p>Shipping:</p>
                        <p>Hong Kong SAR, China</p>
                        <p></p>
                        <p>Language:</p>
                        <p>English</p>
                        <p>繁體中文</p>
                        <p>简体中文</p>
                    </div>



                    <div className='one Sustainability'>
                        <h6>Sustainability</h6>
                        <p className='before'></p>
                        <p>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
                    </div>

                    <div className='one About'>
                        <h6>About</h6>
                        <p className='before'></p>
                        <p>Our story</p>
                        <p>Foundation</p>
                        <p>Careers</p>
                        <p>Privacy policy</p>
                        <p>Accessibility</p>
                        <p>Cookie Policy</p>

                    </div>

                    <div className='one Social'>
                        <h6>Social media</h6>
                        <p className='before'></p>
                        <p>Instagram </p>
                        <p>Twitter </p>
                        <p>LinkedIn </p>
                        <p>WeChat</p>
                        <p>Weibo </p>

                    </div>

                </div>

            </div>
            <hr className='m-0' />
            <div className='footer-three px-5 aesop'> <p className='py-3'>© Aesop</p></div>
        </>
    );
};

export default Footer;