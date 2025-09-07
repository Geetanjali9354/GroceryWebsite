import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './FlashSales.css';
import { HeartOutline } from '../Images/SvgImages';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { ProductCollection } from './CategoryCollection';
import CustomText from './CustomText';
import { useNavigate } from 'react-router-dom';
import { getCart } from '../Utils/cartUtils';
import { toast } from 'react-toastify';
import { addToWishlist, removeFromWishlist, isInWishlist } from "../Utils/Wishlist";
import CartButton from './CartButton';

const FlashSales = ({ title = "Flash Sales Today", linkText = "View All Deals" }) => {
    const navigate = useNavigate();
    const [wishlist, setWishlist] = useState([]);
    const [cartItems, setCartItems] = useState(getCart());

    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    const handleLinkClick = () => {
        navigate(`/shop`);
    };

    useEffect(() => {
        AOS.init({
            duration: 700,
            once: true,
        });
        const updateCartState = () => {
            setCartItems(getCart());
        };
        window.addEventListener("cartUpdated", updateCartState);
    }, []);

    const SaleProducts = ProductCollection.filter(product => product.isSale === true);

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 2 } },
        ]
    };

    return (
        <div>
            <div className="flash-sales-container">
                <div className="flash-sales-header">
                    <CustomText Text={title} className='text-dark' fontWeight='bold' fontSize='30px' />
                    <a href="#" onClick={handleLinkClick}>{linkText}</a>
                </div>

                <Slider {...settings}>
                    {SaleProducts.map((product, idx) => (
                        <div
                            key={product.id}
                            className="flash-sales-slide"
                            data-aos="fade-up"
                            data-aos-delay={idx * 100}
                        >
                            <div className="flash-sales-card" onClick={() => handleProductClick(product.id)}>
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

                                <div className="flash-sales-image-container">
                                    <img src={(product.images?.[0] || '')} alt={product.name} />
                                </div>
                                <CartButton product={product} setCartItems={setCartItems} addBtnClass='flash-sales-add-button' qtyBoxClass='quantity-box' title='Add' />
                                <p className="flash-sales-price">
                                    ${product.price}
                                    <span className="original-price">${product.originalPrice}</span>
                                    <span className="per-qty">/Qty</span>
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
