import { React, useEffect } from 'react';
import './Footer.css'; // Import custom CSS if needed
import Logo from '../Images/MarketPro Logo.png';
import PaymentImg from '../Images/PaymentImg.png';
import PlaystoreImg from '../Images/playstore.png';
import AppleImg from '../Images/apple-logo.png'
import QrImg from '../Images/QR-Code.png';
import { BaselineFacebook } from '../Images/SvgImages';
import { Instagram } from '../Images/SvgImages';
import { TwitterSolid } from '../Images/SvgImages';
import { LinkedinBoxLine } from '../Images/SvgImages';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CustomText from './CustomText';
const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 700, // Animation duration in ms
            once: true,    // Only once animation
        });
    }, []);
    return (
        <footer className="footer  py-4">
            <div className="container-fluid p-3">
                <div className="row " style={{ borderBottom: '1px solid #eee' }} >
                    {/* Left side: Brand Information */}
                    <div className="col-lg-3 col-md-6 left-content 
                        flash-sales-slide"
                        data-aos="fade-up"
                        data-aos-delay="50"
                    >
                        <div className="logo ">
                            <img src={Logo} alt="Marketpro Logo" className="img-fluid" />
                        </div>
                        <CustomText Text="We're Grocery Shop, an innovative team of food suppliers." className="mt-3" fontSize="18px" fontWeight="500" />
                        <address className='mt-4'>
                            2972 Westheimer Rd. Santa Ana, Illinois 85486
                            <br />
                            <a href="mailto:support@example.com">support@example.com</a>
                            <br />
                            <a href="tel:+14065550120">+ (406) 555-0120</a>
                        </address>
                    </div>

                    {/* Information Column */}
                    <div className="col-lg-2 col-md-6 mb-4 heading-column 
                     flash-sales-slide"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <CustomText Text="Information" fontSize="22px" fontWeight="bold" className="mb-1" />
                        <ul className="list-unstyled">
                            <li><a href="#vendors">Become a Vendor</a></li>
                            <li><a href="#affiliate">Affiliate Program</a></li>
                            <li><a href="#privacy">Privacy Policy</a></li>
                            <li><a href="#suppliers">Our Suppliers</a></li>
                            <li><a href="#extended">Extended Plan</a></li>
                            <li><a href="#community">Community</a></li>
                        </ul>
                    </div>

                    {/* Customer Support Column */}
                    <div className="col-lg-2 col-md-6 mb-4 heading-column  flash-sales-slide"
                        data-aos="fade-up"
                        data-aos-delay="150">
                        <CustomText Text="Customer Support" fontSize="22px" fontWeight="bold" className="mb-1" />
                        <ul className="list-unstyled">
                            <li><a href="#help-center">Help Center</a></li>
                            <li><a href="#contact-us">Contact Us</a></li>
                            <li><a href="#report-abuse">Report Abuse</a></li>
                            <li><a href="#submit-dispute">Submit and Dispute</a></li>
                            <li><a href="#policies-rules">Policies & Rules</a></li>
                            <li><a href="#online-shopping">Online Shopping</a></li>
                        </ul>
                    </div>

                    {/* My Account Column */}
                    <div className="col-lg-2 col-md-6 mb-4 heading-column  flash-sales-slide"
                        data-aos="fade-up"
                        data-aos-delay="200">
                        <CustomText Text="My Account" fontSize="22px" fontWeight="bold" className="mb-1" />
                        <ul className="list-unstyled">
                            <li><a href="#my-account">My Account</a></li>
                            <li><a href="#order-history">Order History</a></li>
                            <li><a href="#shopping-cart">Shopping Cart</a></li>
                            <li><a href="#compare">Compare</a></li>
                            <li><a href="#help-ticket">Help Ticket</a></li>
                            <li><a href="#wishlist">Wishlist</a></li>
                        </ul>
                    </div>

                    {/* Daily Groceries Column */}
                    <div className="col-lg-2 col-md-6 mb-4 heading-column  flash-sales-slide"
                        data-aos="fade-up"
                        data-aos-delay="250">
                        <CustomText Text="Daily Groceries" fontSize="22px" fontWeight="bold" className="mb-1" />
                        <ul className="list-unstyled">
                            <li><a href="#dairy-eggs">Dairy & Eggs</a></li>
                            <li><a href="#meat-seafood">Meat & Seafood</a></li>
                            <li><a href="#breakfast-food">Breakfast Food</a></li>
                            <li><a href="#household-supplies">Household Supplies</a></li>
                            <li><a href="#bread-bakery">Bread & Bakery</a></li>
                            <li><a href="#pantry-staples">Pantry Staples</a></li>
                        </ul>
                    </div>
                    {/* Shop on The Go Column */}
                    <div className="col-lg-3 col-md-6 mb-4 heading-column mt-5  flash-sales-slide"
                        data-aos="fade-up"
                        data-aos-delay="300">
                        <CustomText Text="Shop on The Go" fontSize="22px" fontWeight="bold" className="mb-1" />
                        <CustomText Text="MarketPro App is available. Get it now" className="text-muted"/>
                        <div className="d-flex align-items-start mt-3">
                            {/* QR Code */}
                            <img src={QrImg} alt="QR Code" width="80" className="me-3 mt-2" />
                            {/* App Download Buttons */}
                            <div className="d-flex flex-column">
                                <a href="#apple-store" className="d-flex align-items-center mb-2 px-3 py-2 shadow-sm app-download-btn">
                                    <img src={AppleImg} alt="Apple Store" width="20" className="me-2" />
                                    <span style={{ fontSize: '14px' }}>Apple Store</span>
                                </a>
                                <a href="#google-play" className=" d-flex align-items-center px-3 py-2 shadow-sm app-download-btn">
                                    <img src={PlaystoreImg} alt="Google Play" width="20" className="me-2" />
                                    <span style={{ fontSize: '14px' }}>Google Play</span>
                                </a>
                            </div>

                        </div>
                        {/* Payment method logos */}
                        <div className="payment-methods mt-4">
                            <img
                                src={PaymentImg}
                                alt="Payment Methods"
                                className="img-fluid"
                                style={{ height: '40px', width: '80%' }}
                            />
                        </div>
                    </div>

                </div>

                {/* Bottom copyright */}
                <div className="footer-bottom mt-4 d-flex justify-content-between align-items-center flex-wrap">
                    <p className="mb-2 mb-md-0">
                        Copyright &copy; <span style={{ color: 'green' }}>2025</span> Ui-drops All Rights Reserved
                    </p>

                    <div className="social-icons d-flex gap-3">
                        {/* Facebook */}
                        <a href="#facebook" className="icon-circle" aria-label="Facebook">
                            <BaselineFacebook height="18" width="18" />
                        </a>

                        {/* Twitter */}
                        <a href="#twitter" className="icon-circle" aria-label="Twitter">
                            <TwitterSolid height="18" width="18" />
                        </a>

                        {/* Instagram */}
                        <a href="#instagram" className="icon-circle" aria-label="Instagram">
                            <Instagram height="18" width="18" />
                        </a>

                        {/* LinkedIn */}
                        <a href="#linkedin" className="icon-circle" aria-label="LinkedIn">
                            <LinkedinBoxLine height="18" width="18" />

                        </a>
                    </div>
                </div>

            </div>
        </footer >
    );
};

export default Footer;
