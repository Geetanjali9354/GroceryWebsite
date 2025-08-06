import React from "react";
import './Content.css';
import basket from '../Images/BANNER IMAGE.png';
import { CartOutline } from "../Images/SvgImages";
function Content() {
    return (
        <div className="special-offer-container">
            {/* Banner Content */}
            <div className="banner-item__content" style={{ marginTop: '20px' }}>
                <div className="container">
                    <div className="row align-items-center">
                        {/* Text Content (Left side) */}
                        <div className="col-lg-6 col-md-12 text-content"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-delay="100"
                        >
                            <span className="fw-semibold text-success-600" style={{ fontFamily: 'quicksand' }}>
                                Save up to 50% off on your first order
                            </span>
                            <h2 className="banner-item__title max-w-700">
                                Daily Grocery Order and Get <span className="text-main-600">Express</span> Delivery
                            </h2>
                            <div className="d-flex align-items-center gap-16">
                                <button
                                    style={{ backgroundColor: '#1C799B' }}
                                    className="btn btn-main rounded-pill gap-8 text-white"
                                >
                                    Explore Shop
                                    <span><CartOutline height="25" width="25" /></span>
                                </button>
                                <div className="d-flex align-items-end gap-1">
                                    <span style={{ color: 'black' }}>Starting at </span>
                                    <h6 className="text-danger mb-0 " style={{ fontSize: '18px', fontWeight: 'bold' }}> $60.99</h6>
                                </div>
                            </div>
                        </div>

                        {/* Image (Right side) */}
                        <div className="col-lg-6 col-md-12 image-container"
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
