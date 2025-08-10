import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './FlashSales.css';
import OrangeJuice from '../Images/OrangeJuice.png';
import DogFood from '../Images/DogFood.png';
import Milk from '../Images/Milk.png';
import ChocoLava from '../Images/Chocolava.png';
import GreenPeas from '../Images/GreenPeas.jpeg'
import { CartOutline } from '../Images/SvgImages';
import Banner1 from '../Images/Banner1.png';
import Banner2 from '../Images/Banner2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import CategoryCollection from './CategoryCollection';
import CustomText from './CustomText';
const FlashSales = () => {
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
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
    const carouselImages = [
        // CarouselImage1,
        OrangeJuice,
        DogFood,
        Milk,
        ChocoLava,
        GreenPeas,
    ];
    const flashSaleProducts = CategoryCollection.flatMap(category =>
        category.products?.filter(product => {
            const images = product.image || product.images || []; // in some you used 'image', others 'images'
            return images.some(img => carouselImages.includes(img));
        }) || []
    );
    return (
        // --------------------------------Flash Sales Section--------------------------------
        <div>
            <div className="flash-sales-container">
                <div className="flash-sales-header">
                    <h3>Flash Sales Today</h3>
                    <a href="#">View All Deals</a>
                </div>
                <Slider {...settings}>
                    {flashSaleProducts.map((product, idx) => (
                        <div
                            key={product.id}
                            className="flash-sales-slide"
                            data-aos="fade-up"
                            data-aos-delay={idx * 100} // 100ms staggered delay
                        >
                            <div className="flash-sales-card">
                                <div className="flash-sales-image-container">
                                    <img src={(product.image?.[0] || product.images?.[0])} alt={product.name} />

                                </div>
                                <button className="flash-sales-add-button">
                                    Add
                                    <CartOutline height="20" width="20" />
                                </button>
                                <p className="flash-sales-price">
                                    ${product.price} <span className="original-price">${product.originalPrice}</span> <span className="per-qty">/Qty</span>
                                    {/* <CustomText Text={`$${product.price}`} className='flash-sales-price' fontWeight='bold' /> */}
                                </p>
                                <p className="flash-sales-rating">
                                    <strong>{product.rating}</strong> ⭐ (17k)
                                </p>
                                {/* <p className="flash-sales-product-name">
                                    {product.name}
                                </p> */}
                                <CustomText Text={product.name} className='flash-sales-product-name' fontWeight='bold' />
                                <div className="flash-sales-progress-bar">
                                    <div className="flash-sales-progress-bar-inner"></div>
                                </div>
                                {/* <p className="flash-sales-sold-text">
                                    Sold: {product.sold}
                                </p> */}
                                <CustomText Text={`Sold: ${product.sold}`} className='flash-sales-sold-text' fontWeight='bold' />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            {/* // -------------------------------- TWO RECTANGLE BANNER--------------------------------- */}

            <div className="p-3 my-4">
                <div className="row">
                    <div className="col-md-6"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-anchor-placement="top-bottom"
                    >
                        <div
                            className="rectangle-box banner-box"
                            style={{
                                backgroundImage: `url(${Banner1})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                display: 'flex',
                                justifyContent: 'end',
                            }}
                        >
                            <div className="banner-content">
                                <CustomText Text="X-Connect Smart Television" fontWeight='bold' className='banner-contentText' />
                                {/* <p className="subtext">Time remaining until the end of the offer.</p> */}
                                <CustomText Text="Time remaining until the end of the offer." className='subtext' fontWeight='bold' />
                                <div className="countdown1 ">
                                    <div className="countdown-item-Baner1 mt-3"><span style={{ fontFamily: 'quicksand' }}>874</span > D</div>
                                    <div className="countdown-item-Baner1 mt-3"><span style={{ fontFamily: 'quicksand' }}>16</span> H</div>
                                    <div className="countdown-item-Baner1 mt-3"><span style={{ fontFamily: 'quicksand' }}>28</span> M</div>
                                    <div className="countdown-item-Baner1 mt-3"><span style={{ fontFamily: 'quicksand' }}>17</span> S</div>
                                </div>
                                <button className="shop-now-btn-banner1">Shop Now →</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-anchor-placement="top-bottom"
                    >
                        <div
                            className="rectangle-box banner-box"
                            style={{
                                backgroundImage: `url(${Banner2})`,
                            }}
                        >
                            <div className="banner-content ">
                                {/* <h2>Vegetables Combo Box</h2> */}
                                <CustomText Text="Vegetables Combo Box" fontWeight='bold' className='banner-contentText' />
                                {/* <p className="subtext">Time remaining until the end of the offer.</p> */}
                                <CustomText Text="Time remaining until the end of the offer." className='subtext' fontWeight='bold' />
                                <div className="countdown1 ">
                                    <div className="countdown-item-Baner2 mt-3"><span style={{ fontFamily: 'quicksand' }}>874</span > D</div>
                                    <div className="countdown-item-Baner2 mt-3"><span style={{ fontFamily: 'quicksand' }}>16</span> H</div>
                                    <div className="countdown-item-Baner2 mt-3"><span style={{ fontFamily: 'quicksand' }}>28</span> M</div>
                                    <div className="countdown-item-Baner2 mt-3"><span style={{ fontFamily: 'quicksand' }}>17</span> S</div>
                                </div>
                                <button className="shop-now-btn-banner2">Shop Now →</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>


    );
};

export default FlashSales;
