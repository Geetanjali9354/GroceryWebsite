import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPhone, FaDirections } from 'react-icons/fa';
import TopBar from './TopBar';
import { BaselineHome } from '../Images/SvgImages';
import './ContactPage.css';
import CustomText from './CustomText';
import ServiceHighlights from './ServiceHighlights';
import Footer from './Footer';
const ContactPage = () => {
    return (
        <div className="container-fluid  g-0" style={{ overflowX: 'hidden' }}>
            <TopBar />
            <div className="d-flex justify-content-between align-items-center" style={{
                height: '80px',
                backgroundColor: '#E9EEFB',
                padding: '0 20px'
            }}>
                <h4 className="m-0 fw-bold" style={{ fontFamily: 'Quicksand' }}>Contact Page</h4>
                <div className="d-flex align-items-center text-muted" style={{ fontSize: '14px', fontFamily: 'Quicksand' }}>
                    <BaselineHome height="18px" width="18px" className="me-2" />
                    <a className="me-1" href="/" style={{ textDecoration: 'none' }}>Home</a>
                    <span className="mx-1">{'>'}</span>
                    <span className="text-primary">Contact Page</span>
                </div>
            </div>
            <div className="row bg-white  rounded p-4 mt-5">
                {/* Left Side - Form */}
                <div className="col-lg-8 col-sm-12 MainLeftDiv p-4">
                    <CustomText Text="Make Custom Request" fontSize="22px" fontFamily="Quicksand" fontWeight={700} />
                    <form className='Font'>
                        <div className="row mb-3 mt-4">
                            <div className="col-md-6 mb-3 ">
                                <label className="form-label input-Text">Full Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control input-box" placeholder="Full name" required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label input-Text">Email Address <span className="text-danger">*</span></label>
                                <input type="email" className="form-control input-box" placeholder="Email address" required />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6 mb-3">
                                <label className="form-label input-Text">Phone Number <span className="text-danger">*</span></label>
                                <input type="text" className="form-control input-box" placeholder="Phone Number" required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label input-Text">Subject <span className="text-danger">*</span></label>
                                <input type="text" className="form-control input-box" placeholder="Subject" required />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label input-Text">Message <span className="text-danger">*</span></label>
                            <textarea className="form-control input-box" rows="4" placeholder="Type your message" required></textarea>
                        </div>

                        <button type="submit" className="btn Quote-btn px-4 py-2 mt-2">
                            Get a Quote
                        </button>
                    </form>
                </div>

                {/* Right Side - Contact Info */}
                <div className="col-lg-4 col-sm-12  mt-lg-0">
                    <div className="border rounded p-4 h-75 d-flex flex-column justify-content-between">
                        <div >
                            <CustomText Text={"Get In Touch"} fontSize="22px" fontFamily="Quicksand" fontWeight={700} />
                            <div className='mt-4 contact-details p-2'>
                                <div className="d-flex align-items-center mb-3">
                                    <FaPhoneAlt className="text-primary me-3 mb-2" />
                                    <span>+00 123 456 789</span>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <FaEnvelope className="text-primary me-3 mb-2" />
                                    <span>support24arketpro.com</span>
                                </div>
                                <div className="d-flex align-items-center mb-4">
                                    <FaMapMarkerAlt className="text-primary me-3 mb-2" />
                                    <span>789 Inner Lane, California, USA</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="d-flex gap-3 mt-4 button-div">
                        <button className="btn contact-btn d-flex align-items-center gap-2 w-50">
                            <span> Get Support On Call </span><FaPhone />
                        </button>
                        <button className="btn contact-btn d-flex align-items-center gap-2 w-50">
                            <span> Get Direction </span><FaDirections />
                        </button>
                    </div>
                </div>

            </div>
            <ServiceHighlights />
            <Footer />
        </div>
    );
};

export default ContactPage;
