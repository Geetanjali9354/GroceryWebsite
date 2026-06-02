import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HotdealBannerImg from "../Images/HotDealBanner.png";
import { CartOutline, BaselineContentCopy, HeartOutline } from "../Images/SvgImages";
import "./HotDeals.css";
import CustomText from "./CustomText";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ProductCollection } from "./CategoryCollection";
import { useNavigate } from 'react-router-dom';
import { getCart } from '../Utils/cartUtils';
import { toast } from 'react-toastify';
import { addToWishlist, removeFromWishlist, isInWishlist } from "../Utils/Wishlist";
import CartButton from "./CartButton";

function HotDeals() {
    const navigate = useNavigate();
    const [setWishlist] = useState([]);
    const [setCartItems] = useState(getCart());
    const [timeLeft, setTimeLeft] = useState({
        days: 832,
        hours: 8,
        minutes: 29,
        seconds: 34,
    });
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                let { days, hours, minutes, seconds } = prev;
                seconds--;
                if (seconds < 0) {
                    seconds = 59;
                    minutes--;
                }
                if (minutes < 0) {
                    minutes = 59;
                    hours--;
                }
                if (hours < 0) {
                    hours = 23;
                    days--;
                }
                return { days, hours, minutes, seconds };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };
    const FeaturedProducts = ["dog-food-1", "cat-food-1", "bird-seed-1"];
    const selectedProducts1 = ProductCollection.filter((p) =>
        FeaturedProducts.includes(p.id)
    );
    const TopSellingProducts = ["dal-arhar", "basmati-rice", "sunflower-oil"];
    const selectedProducts2 = ProductCollection.filter((p) =>
        TopSellingProducts.includes(p.id)
    );
    const OnSaleProducts = ["banana-1", "grapes-1", "lollipop-1"];
    const selectedProducts3 = ProductCollection.filter((p) =>
        OnSaleProducts.includes(p.id)
    );

    const HotDealProducts = ProductCollection.filter(product => product.isSale === true);

    const copyCode = () => {
        alert("Code copied to clipboard!");
    };
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
    const carouselSetting = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <div>
            <div className="container-fluid ">
                <div className="hotdeals-header">
                    <CustomText Text="Hot Deals Todays" fontWeight="bold" fontSize="30px" />
                    <a href="#all-deals">View All Deals</a>
                </div>
                <div className="row p-3 ">
                    {/* LEFT SECTION */}
                    <div className="col-md-4 col-lg-4 hotdeal-card text-white d-flex flex-column justify-content-between"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        data-aos-delay="100"
                    >
                        <div className="h-100 position-relative d-flex align-items-end justify-content-end">
                            <img
                                src={HotdealBannerImg}
                                alt="Hot Deal"
                                className="img-fluid"
                            />
                        </div>

                        <div className="hotdeal-content p-4 p-md-5 position-absolute mt-3 ">
                            {/* Badge */}
                            <span className="hotdeal-badge mb-3">
                                Medical equipment
                            </span>

                            {/* Title */}
                            <CustomText
                                Text="Deals of the day"
                                className="hotdeal-title mt-3"
                                fontWeight="bold"
                            />
                            <CustomText
                                Text="Save up to 50% off on your first order"
                                className="hotdeal-subtitle"
                            />

                            {/* Timer */}
                            <div className="d-flex align-items-center gap-2 mt-3 flex-wrap">
                                <div className="hotdeal-timer-box bg-white text-dark TextElement rounded px-2 py-1">
                                    <span>{timeLeft.days}</span> D
                                </div>
                                <div className="hotdeal-timer-box bg-white text-dark TextElement rounded px-2 py-1">
                                    <span>{timeLeft.hours}</span> H
                                </div>
                                <div className="hotdeal-timer-box bg-white text-dark TextElement rounded px-2 py-1">
                                    <span>{timeLeft.minutes}</span> M
                                </div>
                                <div className="hotdeal-timer-box bg-white text-dark TextElement rounded px-2 py-1">
                                    <span>{timeLeft.seconds}</span> S
                                </div>
                            </div>


                            {/* Button */}
                            <button className="d-flex rounded-pill p-2 mt-4 hotdeal-btn">
                                <span className="hotdeal-btn-text">
                                    Explore Shop <CartOutline height="20" width="20" />
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* RIGHT SECTION - SLIDER */}
                    <div className="col-md-8 col-lg-8 mt-4">
                        <div>
                            <Slider {...settings}>
                                {HotDealProducts.map((product, idx) => (
                                    <div
                                        key={product.id}
                                        className="hotdeals-slide "
                                        data-aos="fade-up"
                                        data-aos-delay={idx * 100}
                                    >
                                        <div className="hotdeals-card "
                                            onClick={() => handleProductClick(product.id)}
                                        >
                                            <div
                                                className="wishlist-icon-flash"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    if (isInWishlist(product.id)) {
                                                        const updated = removeFromWishlist(product.id);
                                                        setWishlist(updated);
                                                        toast.error(`${product.name} removed from wishlist`);
                                                    } else {
                                                        const updated = addToWishlist(product);
                                                        setWishlist(updated);
                                                        toast.success(`${product.name} added to wishlist`);
                                                    }
                                                }}
                                            >
                                                <HeartOutline
                                                    height="26"
                                                    width="26"
                                                    className={isInWishlist(product.id) ? "red-heart-flash" : ""}
                                                />
                                            </div>
                                            <div className="hotdeals-image-container mt-5">
                                                <img src={product.images?.[0]} alt={product.name} />

                                            </div>
                                            <CartButton product={product} setCartItems={setCartItems} qtyBoxClass='quantity-box' addBtnClass='hotdeals-add-button' title="Add" />

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
                    <div className="col-lg-4 col-md-5 mb-2 mb-md-0">
                        Super discount for your <strong><u>first purchase</u></strong>
                    </div>

                    <div
                        className="col-lg-3 col-md-3 promo-code d-flex justify-content-center justify-content-md-center mb-2 mb-md-0"
                        onClick={copyCode}
                        role="button"
                        tabIndex={0}
                        style={{ maxWidth: '180px', margin: '0 auto' }} // limit width & center horizontally on desktop
                    >
                        <CustomText Text="FREE25BAC" fontSize="18px" />
                        <BaselineContentCopy height="20" width="20" className="ms-2" />
                    </div>
                    <div className="col-lg-5 col-md-4 text-center text-md-end">
                        <span style={{ fontSize: '16px', color: '#1c799b', fontWeight: '500' }}>
                            Use discount code to get <strong>20%</strong> discount for any item
                        </span>
                    </div>
                </div>
            </div>

            {/* -----------------------------FEATURED PRODUCTS/ TOP SELLING PRODUCTS/ON-SALE PRODUCTS----------- */}

            <div className="four-box-grid-Hot row  m-0"
                data-aos="fade-up"
            >
                {/* ==========First Box========== */}
                <div className="col-sm-6 col-md-6 col-lg-3 mb-4">
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
                        {/* <Slider {...settings}> */}
                        <Slider
                            {...carouselSetting}
                        >
                            {/* 🔹 First Slide (All Products ek sath) */}
                            <div className="container-fluid ">
                                {selectedProducts1.map((product, index) => (
                                    <div key={`first-${index}`} className="row rounded mb-3 p-2  mt-4">
                                        <div className="col-4">
                                            <div
                                                className="d-flex align-items-center justify-content-center border rounded"
                                                style={{ backgroundColor: '#f8f9fa', height: '90px' }}
                                            >
                                                <img src={product?.images?.[0]} alt="Product" height="70" />
                                            </div>
                                        </div>
                                        <div className="col-8 product-details">
                                            <div className="text-muted product-rating ">
                                                {product?.rating || '4.8'} <span className="text-warning">★</span> ({product?.sold?.split('/')?.[0]})
                                            </div>
                                            <div className="product-name">{product?.name}</div>
                                            <div className="product-price">${product?.price}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* 🔹 Second Slide (Same products again) */}
                            <div className="container-fluid">
                                {selectedProducts1.map((product, index) => (
                                    <div key={`second-${index}`} className="row rounded mb-3 p-2 mt-4">
                                        <div className="col-4">
                                            <div
                                                className="d-flex align-items-center justify-content-center border rounded"
                                                style={{ backgroundColor: '#f8f9fa', height: '90px' }}
                                            >
                                                <img src={product?.images?.[0]} alt="Product" height="70" />
                                            </div>
                                        </div>
                                        <div className="col-8 product-details">
                                            <div className="text-muted product-rating">
                                                {product?.rating || '4.8'} <span className="text-warning">★</span> ({product?.sold?.split('/')?.[0]})
                                            </div>
                                            <div className="product-name">{product?.name}</div>
                                            <div className="product-price">${product?.price}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Slider>
                    </div>
                </div>

                {/* ==========Second Box========== */}
                <div className="col-sm-6 col-md-6 col-lg-3 mb-4 ">
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
                        <Slider
                            {...carouselSetting}
                        >
                            {/* 🔹 First Slide (All Products ek sath) */}
                            <div className="container-fluid">
                                {selectedProducts2.map((product, index) => (
                                    <div key={`first-${index}`} className="row rounded mb-3 p-2 mt-4">
                                        <div className="col-4">
                                            <div
                                                className="d-flex align-items-center justify-content-center border rounded"
                                                style={{ backgroundColor: '#f8f9fa', height: '90px' }}
                                            >
                                                <img src={product?.images?.[0]} alt="Product" height="70" />
                                            </div>
                                        </div>
                                        <div className="col-8 product-details">
                                            <div className="text-muted product-rating">
                                                {product?.rating || '4.8'} <span className="text-warning">★</span> ({product?.sold?.split('/')?.[0]})
                                            </div>
                                            <div className="product-name">{product?.name}</div>
                                            <div className="product-price">${product?.price}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* 🔹 Second Slide (Same products again) */}
                            <div className="container-fluid">
                                {selectedProducts2.map((product, index) => (
                                    <div key={`second-${index}`} className="row rounded mb-3 p-2 mt-4">
                                        <div className="col-4">
                                            <div
                                                className="d-flex align-items-center justify-content-center border rounded"
                                                style={{ backgroundColor: '#f8f9fa', height: '90px' }}
                                            >
                                                <img src={product?.images?.[0]} alt="Product" height="70" />
                                            </div>
                                        </div>
                                        <div className="col-8 product-details">
                                            <div className="text-muted product-rating">
                                                {product?.rating || '4.8'} <span className="text-warning">★</span> ({product?.sold?.split('/')?.[0]})
                                            </div>
                                            <div className="product-name">{product?.name}</div>
                                            <div className="product-price">${product?.price}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Slider>
                    </div>
                </div>

                {/* ==========Third Box========== */}
                <div className="col-sm-6 col-md-6 col-lg-3 mb-4 ">
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

                        <Slider
                            {...carouselSetting}
                        >
                            {/* 🔹 First Slide (All Products ek sath) */}
                            <div className="container-fluid">
                                {selectedProducts3.map((product, index) => (
                                    <div key={`first-${index}`} className="row rounded mb-3 p-2 mt-4">
                                        <div className="col-4">
                                            <div
                                                className="d-flex align-items-center justify-content-center border rounded"
                                                style={{ backgroundColor: '#f8f9fa', height: '90px' }}
                                            >
                                                <img src={product?.images?.[0]} alt="Product" height="70" />
                                            </div>
                                        </div>
                                        <div className="col-8 product-details">
                                            <div className="text-muted product-rating">
                                                {product?.rating || '4.8'} <span className="text-warning">★</span> ({product?.sold?.split('/')?.[0]})
                                            </div>
                                            <div className="product-name">{product?.name}</div>
                                            <div className="product-price">${product?.price}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* 🔹 Second Slide (Same products again) */}
                            <div className="container-fluid">
                                {selectedProducts3.map((product, index) => (
                                    <div key={`second-${index}`} className="row rounded mb-3 p-2 mt-4">
                                        <div className="col-4">
                                            <div
                                                className="d-flex align-items-center justify-content-center border rounded"
                                                style={{ backgroundColor: '#f8f9fa', height: '90px' }}
                                            >
                                                <img src={product?.images?.[0]} alt="Product" height="70" />
                                            </div>
                                        </div>
                                        <div className="col-8 product-details">
                                            <div className="text-muted product-rating">
                                                {product?.rating || '4.8'} <span className="text-warning">★</span> ({product?.sold?.split('/')?.[0]})
                                            </div>
                                            <div className="product-name">{product?.name}</div>
                                            <div className="product-price">${product?.price}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Slider>
                    </div>
                </div>

                {/* ==========Fourth Box===== */}
                <div className="col-sm-6 col-md-6 col-lg-3 mb-4 ">
                    <div className="box-Hot-4 bg-">
                        <div className="p-3 h-100 d-flex flex-column " >
                            <div>
                                <CustomText Text="Deals of the week" className="fw-bold mb-3" fontSize="25px" fontWeight="bold" />
                                <div className="d-flex gap-2 mb-2 flex-wrap">
                                    <div className="text-white px-3 py-1 rounded text-center TextElement" style={{ backgroundColor: '#1C799B' }}>{timeLeft.days} D</div>
                                    <div className="text-white px-3 py-1 rounded text-center TextElement" style={{ backgroundColor: '#1C799B' }}>{timeLeft.hours} H</div>
                                    <div className="text-white px-3 py-1 rounded text-center TextElement" style={{ backgroundColor: '#1C799B' }}>{timeLeft.minutes} M</div>
                                    <div className="text-white px-3 py-1 rounded text-center TextElement" style={{ backgroundColor: '#1C799B' }}>{timeLeft.seconds} S</div>
                                </div>
                                <CustomText Text="Don't miss this opportunity at a special" className="text-muted small mb-3" fontSize="14px" />
                            </div>

                            <div className="text-center my-3 image-container">
                                <img
                                    src={ProductCollection[3]?.images?.[0]}
                                    alt={ProductCollection[3]?.name}
                                    className="img-fluid"
                                    style={{ maxHeight: '130px', objectFit: 'contain' }}
                                />
                            </div>

                            <div>
                                <div className="text-warning mb-1 small" style={{ fontSize: '16px', fontFamily: 'Quicksand', fontWeight: 'bold' }}>
                                    ★★★★☆ ({ProductCollection[3]?.sold?.split('/')?.[0]})
                                </div>

                                <div className="mb-1">
                                    <span className="text-danger fw-bold me-2" style={{ fontFamily: 'Quicksand', fontSize: '20px' }}>
                                        ${ProductCollection[3]?.price}
                                    </span>
                                    <span className="text-muted text-decoration-line-through small" style={{ fontFamily: 'Quicksand', fontSize: '18px' }}>
                                        ${ProductCollection[3]?.originalPrice}
                                    </span>
                                </div>

                                <div className="fw-bold small mb-2" style={{ fontFamily: 'Quicksand', fontSize: '18px', fontWeight: 'bold' }}>
                                    {ProductCollection[3]?.name}
                                </div>

                                <div className="progress mb-1" style={{ height: '5px' }}>
                                    <div className="progress-bar bg-success" style={{ width: '60%' }}></div>
                                </div>
                                <p className="text-muted mt-2">Available only: <strong className="text-danger">{ProductCollection[3]?.sold?.split('/')?.[1] - ProductCollection[3]?.sold?.split('/')?.[0]}</strong></p>

                            </div>

                            <div className="mt-3">
                                <CartButton product={ProductCollection[3]} setCartItems={setCartItems} addBtnClass='w-100 fw-bold text-white Add-to-cart-hot' qtyBoxClass='w-100 Add-To-Cart-Quantity-Box ' title="Add To Cart" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HotDeals;
