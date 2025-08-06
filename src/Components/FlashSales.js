import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './FlashSales.css';
import CarouselImage1 from '../Images/CarousalImg1.png';
import CarouselImage2 from '../Images/CarousalImg2.png';
import CarouselImage3 from '../Images/CarousalImg3.png';
import CarouselImage4 from '../Images/CarousalImg4.png';
import CarouselImage5 from '../Images/CarousalImg5.png';
import CarouselImage6 from '../Images/CarousalImg6.png';
import { CartOutline } from '../Images/SvgImages';
import Banner1 from '../Images/Banner1.png';
import Banner2 from '../Images/Banner2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const products = [
    {
        price: 14.99,
        originalPrice: 28.99,
        rating: 4.8,
        sold: "18/35",
        name: "Taylor Farms Broccoli Florets Vegetables",
        image: CarouselImage1,
    },
    {
        price: 14.99,
        originalPrice: 28.99,
        rating: 4.8,
        sold: "18/35",
        name: "Taylor Farms Broccoli Florets Vegetables",
        image: CarouselImage2,
    },
    {
        price: 14.99,
        originalPrice: 28.99,
        rating: 4.8,
        sold: "18/35",
        name: "Taylor Farms Broccoli Florets Vegetables",
        image: CarouselImage3,
    },
    {
        price: 14.99,
        originalPrice: 28.99,
        rating: 4.8,
        sold: "18/35",
        name: "Taylor Farms Broccoli Florets Vegetables",
        image: CarouselImage4,
    },
    {
        price: 14.99,
        originalPrice: 28.99,
        rating: 4.8,
        sold: "18/35",
        name: "Taylor Farms Broccoli Florets Vegetables",
        image: CarouselImage5,
    },
    {
        price: 14.99,
        originalPrice: 28.99,
        rating: 4.8,
        sold: "18/35",
        name: "Taylor Farms Broccoli Florets Vegetables",
        image: CarouselImage6,
    },
];

const FlashSales = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 2 } },
        ]
    };
    const TwoBanner = [
        { image: Banner1 },
        { image: Banner2 }
    ]
    useEffect(() => {
        AOS.init({
            duration: 700, // Animation duration in ms
            once: true,    // Only once animation
        });
    }, []);

    return (
        // --------------------------------Flash Sales Section--------------------------------
        <div>
            <div className="flash-sales-container">
                <div className="flash-sales-header">
                    <h3>Flash Sales Today</h3>
                    <a href="#">View All Deals</a>
                </div>
                <Slider {...settings}>
                    {products.map((product, idx) => (
                        <div
                            key={idx}
                            className="flash-sales-slide"
                            data-aos="fade-up"
                            data-aos-delay={idx * 100} // 100ms staggered delay
                        >
                            <div className="flash-sales-card">
                                <div className="flash-sales-image-container">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                    />
                                </div>
                                <button className="flash-sales-add-button">
                                    Add
                                    <CartOutline height="20" width="20" />
                                </button>
                                <p className="flash-sales-price">
                                    ${product.price} <span className="original-price">${product.originalPrice}</span> <span className="per-qty">/Qty</span>
                                </p>
                                <p className="flash-sales-rating">
                                    <strong>{product.rating}</strong> ⭐ (17k)
                                </p>
                                <p className="flash-sales-product-name">
                                    {product.name}
                                </p>
                                <div className="flash-sales-progress-bar">
                                    <div className="flash-sales-progress-bar-inner"></div>
                                </div>
                                <p className="flash-sales-sold-text">
                                    Sold: {product.sold}
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* <div className="container  my-4">
                <div className="row">
                    <div className="col-md-6">
                        <div
                            className="rectangle-box banner-box"
                            style={{
                                backgroundImage: `url(${Banner1})`,
                            }}
                        >
                        </div>

                    </div>
                    <div className="col-md-6">
                        <div
                            className="rectangle-box banner-box"
                            style={{
                                backgroundImage: `url(${Banner2})`,
                            }}
                        >
                        </div>

                    </div>
                </div>
            </div> */}


        </div>

        // -------------------------------- TWO RECTANGLE BANNER---------------------------------

    );
};

export default FlashSales;
