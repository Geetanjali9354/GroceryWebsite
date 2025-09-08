import { FaTruck, FaHandHoldingHeart, FaCreditCard, FaHeadset } from 'react-icons/fa';
import './ServiceHighlights.css';
import CustomText from './CustomText';
const ServiceHighlights = () => {
    return (
        <div className="container-fluid w-100 mb-5 py-4 ">
            <div className="row g-0">
                {/* 1. Free Shipping */}
                <div className="col-lg-3 col-sm-12 col-md-6 p-3" data-aos="zoom-in" data-aos-duration="400">
                    <div className="feature-card  ">
                        <div className="d-flex p-3 align-items-center">
                            <div className="feature-icon me-3">
                                <FaTruck size={20} />
                            </div>
                            <div className="feature-text">
                                <p>Free Shipping</p>
                                <CustomText Text="Free shipping all over the US" fontSize="14px" fontWeight="400" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. 100% Satisfaction */}
                <div className="col-lg-3 col-sm-12 col-md-6 p-3" data-aos="zoom-in" data-aos-duration="600">
                    <div className="feature-card ">
                        <div className="d-flex p-3 align-items-center">
                            <div className="feature-icon me-3">
                                <FaHandHoldingHeart size={20} />
                            </div>
                            <div className="feature-text">
                                <p>100% Satisfaction</p>
                                <CustomText Text="Free shipping all over the US" fontSize="14px" fontWeight="400" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Secure Payments */}
                <div className="col-lg-3 col-sm-12 col-md-6 p-3" data-aos="zoom-in" data-aos-duration="800">
                    <div className="feature-card ">
                        <div className="d-flex p-3 align-items-center">
                            <div className="feature-icon me-3">
                                <FaCreditCard size={20} />
                            </div>
                            <div className="feature-text">
                                <p>Secure Payments</p>
                                <CustomText Text="Free shipping all over the US" fontSize="14px" fontWeight="400" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. 24/7 Support */}
                <div className="col-lg-3 col-sm-12 col-md-6 p-3" data-aos="zoom-in" data-aos-duration="1000">
                    <div className="feature-card ">
                        <div className="d-flex p-3 align-items-center">
                            <div className="feature-icon me-3">
                                <FaHeadset size={20} />
                            </div>
                            <div className="feature-text">
                                <p>24/7 Support</p>
                                <CustomText Text="Free shipping all over the US" fontSize="14px" fontWeight="400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceHighlights;
