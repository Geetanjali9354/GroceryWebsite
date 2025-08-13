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
                    <div className="col-md-4 hotdeal-card text-white d-flex flex-column justify-content-between"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        data-aos-delay="100"
                    >
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
                                        className="hotdeals-slide "
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

            {/* -----------------------------FEATURED PRODUCTS/ TOP SELLING PRODUCTS/ON-SALE PRODUCTS----------- */}



            <div className="four-box-grid-Hot row  container-fluid p-3 m-0">
                {/* Featured Products */}
                <div className="col-12 col-lg-3 mb-4 ">
                    <div className="box-Hot p-3">
                        <div style={{ backgroundColor: '#E3F4FA', borderRadius: '15px' }}>
                            <CustomText
                                Text="Featured Products"
                                fontSize="25px"
                                fontWeight="bold"
                                className="px-4 pt-3"
                            />
                            <div className="px-4 pb-3">
                                <div
                                    style={{
                                        height: '2px',
                                        backgroundColor: 'white',
                                        borderRadius: '10px',
                                        width: '70%',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '40%',
                                            backgroundColor: '#1c799b',
                                            height: '100%',
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>

                        <div className="p-3">
                            {/* Product 1 */}
                            <div className="row bg-white rounded p-2 mb-2">
                                <div className="col-4">
                                    <div
                                        className="d-flex align-items-center justify-content-center border rounded"
                                        style={{ backgroundColor: '#f8f9fa', height: '90px' }}
                                    >
                                        <img
                                            src={CategoryCollection[0]?.products[0]?.images?.[0]}
                                            alt="Product"
                                            height="70"
                                        />
                                    </div>
                                </div>
                                <div className="col-8 product-details">
                                    <div className="text-muted product-rating">
                                        {CategoryCollection[0]?.products[0]?.rating || '4.8'} ★ (
                                        {CategoryCollection[0]?.products[0]?.sold?.split('/')?.[0]})
                                    </div>
                                    <div className=" product-name">{CategoryCollection[0]?.products[0]?.name}</div>
                                    <div className="product-price">${CategoryCollection[0]?.products[0]?.price}</div>
                                </div>
                            </div>

                            {/* Product 2 */}
                            <div className="row bg-white rounded p-2">
                                <div className="col-4">
                                    <div
                                        className="d-flex align-items-center justify-content-center border rounded"
                                        style={{ backgroundColor: '#f8f9fa', height: '90px' }}
                                    >
                                        <img
                                            src={CategoryCollection[0]?.products[1]?.images?.[0]}
                                            alt="Product"
                                            height="70"
                                        />
                                    </div>
                                </div>
                                <div className="col-8 product-details">
                                    <div className="text-muted product-rating">
                                        {CategoryCollection[0]?.products[1]?.rating || '4.8'} ★ (
                                        {CategoryCollection[0]?.products[1]?.sold?.split('/')?.[0]})
                                    </div>
                                    <div className="product-name">{CategoryCollection[0]?.products[1]?.name}</div>
                                    <div className=" product-price">${CategoryCollection[0]?.products[1]?.price}</div>
                                </div>
                            </div>

                            {/* Product 3 */}
                            <div className="row bg-white rounded p-2 mb-2">
                                <div className="col-4">
                                    <div
                                        className="d-flex align-items-center justify-content-center border rounded"
                                        style={{ backgroundColor: '#f8f9fa', height: '90px' }}
                                    >
                                        <img
                                            src={CategoryCollection[0]?.products[2]?.images?.[0]}
                                            alt="Product"
                                            height="70"
                                        />
                                    </div>
                                </div>
                                <div className="col-8 product-details">
                                    <div className="text-muted product-rating">
                                        {CategoryCollection[0]?.products[2]?.rating || '4.8'} ★ (
                                        {CategoryCollection[0]?.products[2]?.sold?.split('/')?.[0]})
                                    </div>
                                    <div className=" product-name">{CategoryCollection[0]?.products[2]?.name}</div>
                                    <div className="product-price">${CategoryCollection[0]?.products[2]?.price}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Top Selling Products */}
                <div className="col-12 col-lg-3 mb-4 ">
                    <div className="box-Hot p-3">
                        <div style={{ backgroundColor: '#E3F4FA', borderRadius: '15px' }}>
                            <CustomText
                                Text="Top Selling Products"
                                fontSize="25px"
                                fontWeight="bold"
                                className="px-4 pt-3"
                            />
                            <div className="px-4 pb-3">
                                <div style={{ height: '2px', backgroundColor: 'white', borderRadius: '10px', width: '70%' }}>
                                    <div style={{ width: '40%', backgroundColor: '#1c799b', height: '100%' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="p-3">
                            {/* Product 1 */}
                            <div className="row bg-white rounded p-2 mb-2">
                                <div className="col-4">
                                    <div
                                        className="d-flex align-items-center justify-content-center border rounded"
                                        style={{ backgroundColor: '#f8f9fa', height: '90px' }}
                                    >
                                        <img
                                            src={CategoryCollection[1]?.products[0]?.images?.[0]}
                                            alt="Product"
                                            height="70"
                                        />
                                    </div>
                                </div>
                                <div className="col-8 product-details">
                                    <div className="text-muted product-rating">
                                        {CategoryCollection[1]?.products[0]?.rating || "4.8"} ★ (
                                        {CategoryCollection[1]?.products[0]?.sold?.split('/')?.[0]})
                                    </div>
                                    <div className="product-name">{CategoryCollection[1]?.products[0]?.name}</div>
                                    <div className="product-price">${CategoryCollection[1]?.products[0]?.price}</div>
                                </div>
                            </div>

                            {/* Product 2 */}
                            <div className="row bg-white rounded p-2">
                                <div className="col-4">
                                    <div
                                        className="d-flex align-items-center justify-content-center border rounded"
                                        style={{ backgroundColor: '#f8f9fa', height: '90px' }}
                                    >
                                        <img
                                            src={CategoryCollection[1]?.products[1]?.images?.[0]}
                                            alt="Product"
                                            height="70"
                                        />
                                    </div>
                                </div>
                                <div className="col-8 product-details">
                                    <div className="text-muted product-rating">
                                        {CategoryCollection[1]?.products[1]?.rating || "4.8"} ★ (
                                        {CategoryCollection[1]?.products[1]?.sold?.split('/')?.[0]})
                                    </div>
                                    <div className=" product-name">{CategoryCollection[1]?.products[1]?.name}</div>
                                    <div className=" product-price">${CategoryCollection[1]?.products[1]?.price}</div>
                                </div>
                            </div>
                            {/* Product 3 */}
                            <div className="row bg-white rounded p-2 mb-2">
                                <div className="col-4">
                                    <div
                                        className="d-flex align-items-center justify-content-center border rounded"
                                        style={{ backgroundColor: '#f8f9fa', height: '90px' }}
                                    >
                                        <img
                                            src={CategoryCollection[1]?.products[2]?.images?.[0]}
                                            alt="Product"
                                            height="70"
                                        />
                                    </div>
                                </div>
                                <div className="col-8 product-details">
                                    <div className="text-muted product-rating">
                                        {CategoryCollection[1]?.products[2]?.rating || "4.8"} ★ (
                                        {CategoryCollection[1]?.products[2]?.sold?.split('/')?.[0]})
                                    </div>
                                    <div className="product-name">{CategoryCollection[1]?.products[2]?.name}</div>
                                    <div className="product-price">${CategoryCollection[1]?.products[2]?.price}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* On-sale Products */}
                <div className="col-12 col-lg-3 mb-4 ">
                    <div className="box-Hot p-3">
                        <div style={{ backgroundColor: '#E3F4FA', borderRadius: '15px' }}>
                            <CustomText
                                Text="On-sale Products"
                                fontSize="25px"
                                fontWeight="bold"
                                className="px-4 pt-3"
                            />
                            <div className="px-4 pb-3">
                                <div
                                    style={{
                                        height: '2px',
                                        backgroundColor: 'white',
                                        borderRadius: '10px',
                                        width: '70%',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '40%',
                                            backgroundColor: '#1c799b',
                                            height: '100%',
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>

                        <div className="p-3">
                            {/* Product 1 */}
                            <div className="row bg-white rounded p-2 mb-2">
                                <div className="col-4">
                                    <div
                                        className="d-flex align-items-center justify-content-center border rounded"
                                        style={{ backgroundColor: '#f8f9fa', height: '90px' }}
                                    >
                                        <img
                                            src={CategoryCollection[2]?.products[0]?.images?.[0]}
                                            alt="Product"
                                            height="70"
                                        />
                                    </div>
                                </div>
                                <div className="col-8 product-details">
                                    <div className="text-muted product-rating" >
                                        {CategoryCollection[2]?.products[0]?.rating || '4.8'} ★ (
                                        {CategoryCollection[2]?.products[0]?.sold?.split('/')?.[0]})
                                    </div>
                                    <div className=" product-name">{CategoryCollection[2]?.products[0]?.name}</div>
                                    <div className=" product-price">${CategoryCollection[2]?.products[0]?.price}</div>
                                </div>
                            </div>

                            {/* Product 2 */}
                            <div className="row bg-white rounded p-2">
                                <div className="col-4">
                                    <div
                                        className="d-flex align-items-center justify-content-center border rounded"
                                        style={{ backgroundColor: '#f8f9fa', height: '90px' }}
                                    >
                                        <img
                                            src={CategoryCollection[2]?.products[1]?.images?.[0]}
                                            alt="Product"
                                            height="70"
                                        />
                                    </div>
                                </div>
                                <div className="col-8 product-details">
                                    <div className="text-muted product-rating" >
                                        {CategoryCollection[2]?.products[1]?.rating || '4.8'} ★ (
                                        {CategoryCollection[2]?.products[1]?.sold?.split('/')?.[0]})
                                    </div>
                                    <div className=" product-name">{CategoryCollection[2]?.products[1]?.name}</div>
                                    <div className="product-price">${CategoryCollection[2]?.products[1]?.price}</div>
                                </div>
                            </div>

                            {/* Product 3 */}
                            <div className="row bg-white rounded p-2 mb-2">
                                <div className="col-4">
                                    <div
                                        className="d-flex align-items-center justify-content-center border rounded"
                                        style={{ backgroundColor: '#f8f9fa', height: '90px' }}
                                    >
                                        <img
                                            src={CategoryCollection[2]?.products[2]?.images?.[0]}
                                            alt="Product"
                                            height="70"
                                        />
                                    </div>
                                </div>
                                <div className="col-8 product-details">
                                    <div className="text-muted product-rating" >
                                        {CategoryCollection[2]?.products[2]?.rating || '4.8'} ★ (
                                        {CategoryCollection[2]?.products[2]?.sold?.split('/')?.[0]})
                                    </div>
                                    <div className=" product-name">{CategoryCollection[2]?.products[2]?.name}</div>
                                    <div className=" product-price">${CategoryCollection[2]?.products[2]?.price}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Fourth Box (Optional / Custom) */}
                <div className="col-12 col-lg-3 mb-4">
                    <div className="box-Hot">
                        <div className="p-3 h-100 d-flex flex-column justify-content-between border rounded shadow-sm" style={{ backgroundColor: '#fff', borderRadius: '15px' }}>
                            {/* Title and Countdown */}
                            <div>
                                <h5 className="fw-bold mb-3">Deals of the week</h5>
                                <div className="d-flex gap-2 mb-2 flex-wrap">
                                    <div className=" text-white px-3 py-1 rounded text-center fw-bold" style={{ backgroundColor: '#1C799B' }}>823 D</div>
                                    <div className=" text-white px-3 py-1 rounded text-center fw-bold" style={{ backgroundColor: '#1C799B' }}>5 H</div>
                                    <div className="text-white px-3 py-1 rounded text-center fw-bold" style={{ backgroundColor: '#1C799B' }}>34 M</div>
                                    <div className=" text-white px-3 py-1 rounded text-center fw-bold" style={{ backgroundColor: '#1C799B' }}>27 S</div>
                                </div>
                                <p className="text-muted small mb-3">Don't miss this opportunity at a special</p>
                            </div>

                            {/* Product Image */}
                            <div className="text-center my-3">
                                <img src={CategoryCollection[3]?.products[0]?.images?.[0]} alt="Product" className="img-fluid" style={{ maxHeight: '150px', objectFit: 'contain' }} />
                            </div>

                            {/* Rating and Info */}
                            <div>
                                <div className="text-warning mb-1 small">
                                    ★★★★☆ ({CategoryCollection[3]?.products[0]?.sold?.split('/')?.[0] || '3'})
                                </div>

                                <div className="mb-1">
                                    <span className="text-danger fw-bold me-2">${CategoryCollection[3]?.products[0]?.price || '60.99'}</span>
                                    <span className="text-muted text-decoration-line-through small">$79.99</span>
                                </div>

                                <div className="fw-bold small mb-2">
                                    {CategoryCollection[3]?.products[0]?.name || 'Perfectly Packed Meat Combos for Delicious and Flavorful Meals Every Day'}
                                </div>

                                <div className="text-muted small mb-2">This product is about to run out</div>

                                {/* Stock progress bar */}
                                <div className="progress mb-1" style={{ height: '6px' }}>
                                    <div className="progress-bar bg-success" style={{ width: '60%' }}></div>
                                </div>

                                <div className="text-muted small mb-3">Available only: <span className="text-danger fw-bold">${CategoryCollection[3]?.products[0]?.price || '60.99'}</span></div>
                            </div>

                            {/* Add to Cart Button */}
                            <div className="mt-auto">
                                <button className="btn btn-success w-100 fw-bold">
                                    Add To Cart <i className="bi bi-cart-fill ms-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default HotDeals;
