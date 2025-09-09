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
import { ProductCollection } from './CategoryCollection';
import { useNavigate } from 'react-router-dom';
import { addToCart, getCart } from '../Utils/cartUtils';
import { HeartOutline } from "../Images/SvgImages";
import { getWishlist, addToWishlist, removeFromWishlist, isInWishlist } from "../Utils/Wishlist";
import { toast } from 'react-toastify';
import CartButton from "./CartButton";
function RecommendedSection() {
    const categories = [
        'All',
        'Animal Food',
        'Fruits',
        'Drinks',
        'Vegetables',
        'Snacks',
        'Desserts',
    ];

    const selectedCategoryIds = ["yummycandy", "desserts", "fruit", "drinks"];
    const [cartItems, setCartItems] = useState(getCart());
    const [active, setActive] = useState('All');

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
    useEffect(() => {
        AOS.init({
            duration: 700, // Animation duration in ms
            once: true,    // Only once animation
        });
    }, []);
    return (
        <div >
            <div className="Recommended-header row g-0 p-0 m-0 justify-content-between">
                <div className="col-lg-4 col-sm-12 col-md-12">
                    <CustomText Text="Recommended For You" fontWeight="bold" fontSize="30px" className="text-dark ms-3" />
                </div>
                <div className=" d-flex flex-wrap col-lg-7 col-sm-12 col-md-12 CategoryAlign ">
                    {categories.map((item) => (
                        <button
                            key={item}
                            className={`category-btn ${active === item ? 'active' : ''}`}
                            onClick={() => setActive(item)}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>

            <div className="four-box-grid-recommended">
                {selectedProducts.map((item, index) => (
                    <div
                        key={item?.id || index}
                        className="box-Recommended"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        data-aos-anchor-placement="top-bottom"
                        onClick={() => handleProductClick(item.id)}
                    >
                        <div >
                            {item.isSale && (
                                <span className="sale-badge">Sale 50%</span>
                            )}
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
                        </div>

                        <div className="Recommended-image-container">
                            <img src={item.images?.[0]} alt={item.name} />
                        </div>

                        <CustomText
                            Text={item.name}
                            className="Recommended-product-name"
                            fontWeight="bold"
                            fontSize="20px"
                        />

                        <p className="Recommended-price">
                            ${item.price} <span className="per-qty">/Qty</span>
                            <span className="original-price">${item.originalPrice}</span>
                        </p>
                        <p className="Recommended-rating">
                            <strong>{item.rating}</strong> ⭐ (17k)
                        </p>

                        <CartButton
                            product={item}
                            setCartItems={setCartItems}
                            qtyBoxClass="Add-To-Cart-Quantity-Box"
                            addBtnClass="Add-To-Cart-Button"
                            title="Add To Cart"
                        />
                    </div>
                ))}
            </div>


            {/* -----------------------------------Two Banner---------------------------- */}


            <div className="p-3 my-4">
                <div className="row">
                    <div className="col-md-6"
                        data-aos="zoom-in"
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
                                <CustomText Text="Delivery by 6:15 am" className='subtext' fontWeight='600' />
                                <button className="shop-now-btn-banner1 mt-2">Shop Now →</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6"
                        data-aos="zoom-in"
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