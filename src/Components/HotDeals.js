import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HotdealBannerImg from "../Images/HotDealBanner.png";
import { CartOutline } from "../Images/SvgImages";
import "./HotDeals.css";
import CustomText from "./CustomText";
import AOS from 'aos';
import 'aos/dist/aos.css';
import CategoryCollection from "./CategoryCollection";
import { BaselineContentCopy } from "../Images/SvgImages";// Sample Product Data (replace with actual dynamic data if needed)
const selectedCategoryIds = ["drinks", "desserts"];
const products = CategoryCollection
    .filter(cat => selectedCategoryIds.includes(cat.id))
    .flatMap(cat => cat.products || []);

const copyCode = () => {
    navigator.clipboard.writeText("FREE25BAC");
    alert("Code copied to clipboard!");
};
function HotDeals() {

    useEffect(() => {
        AOS.init({ duration: 700, once: true });
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div>
            <div className="container-fluid ">
                <div className="hotdeals-header">
                    <CustomText Text="Hot Deals Todays" fontWeight="bold" fontSize="30px" />
                    <a href="#">View All Deals</a>
                </div>
                <div className="row p-3">
                    {/* LEFT SECTION */}
                    <div className="col-md-4 hotdeal-card text-white d-flex flex-column justify-content-between">
                        <div className="h-100 position-relative d-flex align-items-end justify-content-end">
                            <img
                                src={HotdealBannerImg}
                                alt="Hot Deal"
                                className="hotdeal-img img-fluid"
                            />
                        </div>

                        {/* Content Positioned Over Image */}
                        <div className="hotdeal-content position-absolute mt-3 p-5">
                            <span className=" hotdeal-badge mb-3 text-black">
                                Medical equipment
                            </span>

                            <CustomText Text="Deals of the day" className="hotdeal-title mt-3" fontWeight="bold" />
                            <CustomText Text="Save up to 50% off on your first order" className="hotdeal-subtitle" />

                            <div className="d-flex align-items-center gap-2 mt-3">
                                {["821 D", "17 H", "50 M", "38 S"].map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="hotdeal-timer-box bg-white text-dark fw-bold rounded px-2 py-1"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <button className="d-flex align-items-center rounded-pill px-4 py-2 mt-4 hotdeal-btn">
                                <span className="hotdeal-btn-text">
                                    Explore Shop <CartOutline height="20" width="20" />
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* RIGHT SECTION - SLIDER */}
                    <div className="col-md-8 ">
                        <div className="hotdeals-container">
                            <Slider {...settings}>
                                {products.map((product, idx) => (
                                    <div
                                        key={product.id}
                                        className="hotdeals-slide"
                                        data-aos="fade-up"
                                        data-aos-delay={idx * 100}
                                    >
                                        <div className="hotdeals-card ">
                                            <div className="hotdeals-image-container mt-5">
                                                <img src={product.images?.[0]} alt={product.name} />

                                            </div>

                                            <button className="hotdeals-add-button">
                                                Add
                                                <CartOutline height="20" width="20" />
                                            </button>

                                            <p className="hotdeals-price">
                                                ${product.price}{" "}
                                                <span className="original-price">${product.originalPrice}</span>{" "}
                                                <span className="per-qty">/Qty</span>
                                            </p>

                                            <p className="hotdeals-rating">
                                                <strong>{product.rating}</strong> ⭐ (17k)
                                            </p>

                                            <CustomText Text={product.name} className="hotdeals-product-name" fontWeight="bold" />

                                            <div className="hotdeals-progress-bar">
                                                <div className="hotdeals-progress-bar-inner"></div>
                                            </div>

                                            <CustomText
                                                Text={`Sold: ${product.sold}`}
                                                className="hotdeals-sold-text"
                                                fontWeight="bold"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>

            {/* ----------------------------PROMO BANNER----------------------- */}



            <div className="promo-banner container-fluid py-3 p-5 mt-5 mb-5 ">
                <div className="row align-items-center text-center text-md-start">
                    <div className="col-12 col-md-5 mb-2 mb-md-0">
                        Super discount for your <strong><u>first purchase</u></strong>
                    </div>

                    <div
                        className="col-12 col-md-3 promo-code d-flex justify-content-center justify-content-md-center mb-2 mb-md-0"
                        onClick={copyCode}
                        role="button"
                        tabIndex={0}
                        style={{ maxWidth: '180px', margin: '0 auto' }} // limit width & center horizontally on desktop
                    >
                        <CustomText Text="FREE25BAC" fontSize="18px" />
                        <BaselineContentCopy height="20" width="20" className="ms-2" />
                    </div>
                    <div className="col-12 col-md-5 text-center text-md-end">
                        <span style={{ fontSize: '16px', color: '#1c799b', fontWeight: '500' }}>
                            Use discount code to get <strong>20%</strong> discount for any item
                        </span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-3 p-3" style={{ backgroundColor: '#f8d7da' }}>
                    {/* Content or empty */}
                </div>
                <div className="col-3 p-3" style={{ backgroundColor: '#d1ecf1' }}>
                    {/* Content or empty */}
                </div>
                <div className="col-3 p-3" style={{ backgroundColor: '#d4edda' }}>
                    {/* Content or empty */}
                </div>
                <div className="col-3 p-3" style={{ backgroundColor: '#fff3cd' }}>
                    {/* Content or empty */}
                </div>
            </div>
        </div>
    );
}

export default HotDeals;
