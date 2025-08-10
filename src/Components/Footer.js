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
const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 700, // Animation duration in ms
            once: true,    // Only once animation
        });
    }, []);
    return (
        <footer className="footer bg-light py-4">
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
                        <p className='mt-3'>We're Grocery Shop, an innovative team of food suppliers.</p>
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
                        <h4>Information</h4>
                        <ul className="list-unstyled">
                            <li><a href="#">Become a Vendor</a></li>
                            <li><a href="#">Affiliate Program</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Our Suppliers</a></li>
                            <li><a href="#">Extended Plan</a></li>
                            <li><a href="#">Community</a></li>
                        </ul>
                    </div>

                    {/* Customer Support Column */}
                    <div className="col-lg-2 col-md-6 mb-4 heading-column  flash-sales-slide"
                        data-aos="fade-up"
                        data-aos-delay="150">
                        <h4>Customer Support</h4>
                        <ul className="list-unstyled">
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Report Abuse</a></li>
                            <li><a href="#">Submit and Dispute</a></li>
                            <li><a href="#">Policies & Rules</a></li>
                            <li><a href="#">Online Shopping</a></li>
                        </ul>
                    </div>

                    {/* My Account Column */}
                    <div className="col-lg-2 col-md-6 mb-4 heading-column  flash-sales-slide"
                        data-aos="fade-up"
                        data-aos-delay="200">
                        <h4 >My Account</h4>
                        <ul className="list-unstyled">
                            <li><a href="#">My Account</a></li>
                            <li><a href="#">Order History</a></li>
                            <li><a href="#">Shopping Cart</a></li>
                            <li><a href="#">Compare</a></li>
                            <li><a href="#">Help Ticket</a></li>
                            <li><a href="#">Wishlist</a></li>
                        </ul>
                    </div>

                    {/* Daily Groceries Column */}
                    <div className="col-lg-2 col-md-6 mb-4 heading-column  flash-sales-slide"
                        data-aos="fade-up"
                        data-aos-delay="250">
                        <h4>Daily Groceries</h4>
                        <ul className="list-unstyled">
                            <li><a href="#">Dairy & Eggs</a></li>
                            <li><a href="#">Meat & Seafood</a></li>
                            <li><a href="#">Breakfast Food</a></li>
                            <li><a href="#">Household Supplies</a></li>
                            <li><a href="#">Bread & Bakery</a></li>
                            <li><a href="#">Pantry Staples</a></li>
                        </ul>
                    </div>

                    {/* Right Side: Shop on The Go */}
                    {/* Right Side: Shop on The Go */}
                    <div className="col-lg-3 col-md-6 mb-4 heading-column mt-5  flash-sales-slide"
                        data-aos="fade-up"
                        data-aos-delay="300">
                        <h4>Shop on The Go</h4>
                        <p className="text-muted">MarketPro App is available. Get it now</p>
                        <div className="d-flex align-items-start mt-3">
                            {/* QR Code */}
                            <img src={QrImg} alt="QR Code" width="80" className="me-3 mt-2" />
                            {/* App Download Buttons */}
                            <div className="d-flex flex-column">
                                <a href="#" className="d-flex align-items-center mb-2 px-3 py-2 shadow-sm app-download-btn">
                                    <img src={AppleImg} alt="Apple Store" width="20" className="me-2" />
                                    <span style={{ fontSize: '14px' }}>Apple Store</span>
                                </a>
                                <a href="#" className=" d-flex align-items-center px-3 py-2 shadow-sm app-download-btn">
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
                        <a href="#" className="icon-circle" aria-label="Facebook">
                            <BaselineFacebook height="18" width="18" />
                        </a>

                        {/* Twitter */}
                        <a href="#" className="icon-circle" aria-label="Twitter">
                            <TwitterSolid height="18" width="18" />
                        </a>

                        {/* Instagram */}
                        <a href="#" className="icon-circle" aria-label="Instagram">
                            <Instagram height="18" width="18" />
                        </a>

                        {/* LinkedIn */}
                        <a href="#" className="icon-circle" aria-label="LinkedIn">
                            <LinkedinBoxLine height="18" width="18" />

                        </a>
                    </div>
                </div>

            </div>
        </footer >
    );
};

export default Footer;
