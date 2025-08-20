import { React, useEffect, useState } from "react";
import './RecommendedSection.css';
import Banner3 from '../Images/Banner3.jpeg';
import Banner4 from '../Images/Banner4.jpeg';
import CustomText from "./CustomText";
import Banner34Logo from '../Images/Banner3&4Logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './FlashSales.css';
import { CartOutline } from '../Images/SvgImages';
import { ProductCollection } from './CategoryCollection';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../Utils/cartUtils';
import { HeartOutline } from "../Images/SvgImages";
import { getWishlist, addToWishlist, removeFromWishlist, isInWishlist } from "../Utils/Wishlist";
import { toast } from 'react-toastify';
function RecommendedSection() {

    const [activeCategory, setActiveCategory] = useState("All");
    const categories = ["All", "Grocery", "Fruits", "Juices", "Vegetables", "Snacks", "Organic Foods"];
    const selectedCategoryIds = ["yummycandy", "desserts", "fruit", "drinks"];

    // 🔹 Un categories ke products collect kar lo
    const selectedProducts = ProductCollection.filter(
        (product) => selectedCategoryIds.includes(product.categoryId)
    );
    const [wishlist, setWishlist] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setWishlist(getWishlist());
    }, []);
    // Load wishlist from localStorage on page load
    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };
    const HandleAddToCart = (product => {
        addToCart(product);
        toast.success(`${product.name} added to cart!`);
    })

    // const recommendedProducts = CategoryCollection
    //     .filter(category => selectedCategoryIds.includes(category.id))
    //     .flatMap(category => category.products);
    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };
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
    useEffect(() => {
        AOS.init({
            duration: 700, // Animation duration in ms
            once: true,    // Only once animation
        });
    }, []);
    useEffect(() => {
        AOS.init({
            duration: 700,
            once: true,
        });
    }, []);
    return (
        <div>
            <div className="Recommended-header ">
                <h3>Recommended For You</h3>
            </div>


            <div className="four-box-grid-recommended">
                {selectedProducts.map((item, index) => (
                    <div
                        key={item?.id || index}
                        className="box-Recommended"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-anchor-placement="top-bottom"
                        onClick={() => handleProductClick(item.id)}
                    // style={{ backgroundColor: 'pink' }}
                    >

                        <div className="Recommended-image-container"
                        >
                            <img src={item.images?.[0]} alt={item.name} />
                        </div>
                        <div
                            className="wishlist-icon"
                            onClick={(e) => {
                                e.stopPropagation();
                                if (isInWishlist(item.id)) {
                                    const updated = removeFromWishlist(item.id);
                                    setWishlist(updated);
                                    toast.error(`${item.name} removed from wishlist`);
                                } else {
                                    const updated = addToWishlist(item);
                                    setWishlist(updated);
                                    toast.success(`${item.name} added to wishlist`);
                                }
                            }}
                        >
                            <HeartOutline
                                height="30"
                                width="30"
                                className={isInWishlist(item.id) ? "red-heart" : ""}
                            />
                        </div>


                        <CustomText Text={item.name} className='Recommended-product-name' fontWeight='bold' fontSize='20px' />

                        <p className="Recommended-price">
                            ${item.price} <span className="per-qty">/Qty</span><span className="original-price">${item.originalPrice}</span>
                            {/* <CustomText Text={`$${product.price}`} className='flash-sales-price' fontWeight='bold' /> */}
                        </p>
                        <p className="Recommended-rating">
                            <strong>{item.rating}</strong> ⭐ (17k)
                        </p>

                        <button className="Add-To-Cart-Button" onClick={(e) => {
                            e.stopPropagation();
                            HandleAddToCart(item);
                        }}>
                            Add To Cart
                            <CartOutline height="20" width="20" style={{ marginLeft: '10px' }} />
                        </button>
                    </div>
                ))}
            </div>

            {/* -----------------------------------Two Banner---------------------------- */}


            <div className="p-3 my-4">
                <div className="row">
                    <div className="col-md-6"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-anchor-placement="top-bottom"
                    >
                        <div
                            className="rectangle-box_banner3 "
                            style={{
                                backgroundImage: `url(${Banner3})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                display: 'flex',
                                justifyContent: 'end',
                            }}
                        >
                            <div className="banner-content">
                                <div className="logo-circle">
                                    <img src={Banner34Logo} alt="Logo" />
                                </div>
                                <CustomText Text="$5 off your first order" fontWeight='bold' className='banner-contentText' />
                                <CustomText Text="Delivery by 6:15 am" className='subtext' fontWeight='normal' />
                                <button className="shop-now-btn-banner1 mt-2">Shop Now →</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-anchor-placement="top-bottom"
                    >
                        <div
                            className="rectangle-box_banner3 "
                            style={{
                                backgroundImage: `url(${Banner4})`,
                            }}
                        >
                            <div className="banner-content ">
                                <div className="logo-circle">
                                    <img src={Banner34Logo} alt="Logo" />
                                </div>

                                <CustomText Text="$5 off your first order" fontWeight='bold' className='banner-contentText' />
                                <CustomText Text="Delivery by 6:15 am" className='subtext' fontWeight='normal' />
                                <button className="shop-now-btn-banner2 mt-2">Shop Now →</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
};
export default RecommendedSection;