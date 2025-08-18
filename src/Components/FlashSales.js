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
import { useNavigate } from 'react-router-dom';
import { addToCart } from './cartUtils';
const FlashSales = ({ title = "Flash Sales Today", linkText = "View All Deals" }) => {
    const navigate = useNavigate();

    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };
    const HandleAddToCart = (product => {
        addToCart(product);
        alert(`${product.name} has been added to your cart!`);
    })
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
                    <h3>{title}</h3>
                    <a href="#">{linkText}</a>
                </div>
                <Slider {...settings}>
                    {flashSaleProducts.map((product, idx) => (
                        <div
                            key={product.id}
                            className="flash-sales-slide"
                            data-aos="fade-up"
                            data-aos-delay={idx * 100} // 100ms staggered delay
                        >
                            <div className="flash-sales-card"
                                onClick={() => handleProductClick(product.id)}
                            >
                                <div className="flash-sales-image-container">
                                    <img src={(product.image?.[0] || product.images?.[0])} alt={product.name} />

                                </div>
                                <button className="flash-sales-add-button" onClick={(e) => {
                                    e.stopPropagation(); // Prevent bubbling
                                    HandleAddToCart(product);
                                }}>
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
                                <CustomText Text={product.name} className='flash-sales-product-name' fontWeight='bold' />
                                <div className="flash-sales-progress-bar">
                                    <div className="flash-sales-progress-bar-inner"></div>
                                </div>
                                <CustomText Text={`Sold: ${product.sold}`} className='flash-sales-sold-text' fontWeight='bold' />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>


    );
};

export default FlashSales;
