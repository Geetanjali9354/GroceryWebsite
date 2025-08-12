import React from "react";
import './Content.css';
import basket from '../Images/BANNER IMAGE.png';
import { CartOutline } from "../Images/SvgImages";
import CustomText from "./CustomText";
function Content() {
    return (
        <div className="special-offer-container mt-5">
            {/* Banner Content */}
            <div className="banner-item__content " style={{ marginTop: '20px' }}>
                <div className="container">
                    <div className="row align-items-center">
                        {/* Text Content (Left side) */}
                        <div className="col-lg-6 col-md-12 text-content"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-delay="100"
                        >
                            <CustomText Text="Save up to 50% off on your first order" className='text-success-600 fw-semibold' fontWeight='bold' fontSize="20px" />
                            <CustomText Text="Daily Grocery Order and Get Express Delivery" className='banner-item__title' fontWeight='bold' fontSize='50px' />
                            <div className="d-flex align-items-center gap-16">
                                <button
                                    style={{ backgroundColor: '#1C799B' }}
                                    className="exploreNowBtn rounded-pill text-white px-2 "
                                >
                                    <span style={{ fontSize: '20px' }}>
                                        Explore Shop
                                        <span><CartOutline height="25" width="25" /></span>
                                    </span>
                                </button>
                                <div className="d-flex align-items-end gap-1">
                                    <CustomText Text="Starting at" className='text-black' fontWeight='normal' fontSize="20px" />
                                    <CustomText Text="$60.99" className='text-danger mb-0' fontWeight='bold' fontSize="20px" />
                                </div>
                            </div>
                        </div>

                        {/* Image (Right side) */}
                        <div className="col-lg-6 col-md-12 image-container d-flex justify-content-end align-items-end position-relative"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            data-aos-delay="100"
                        >
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img
                                    src={basket} // Replace with the correct path of your image
                                    alt="Grocery Basket"
                                    className="image-style " // Ensures image fits in container
                                // style={{marginLeft:'140px'}}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
