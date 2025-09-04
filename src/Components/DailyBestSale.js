import BestSaleOfferImage from '../Images/BestSaleOffer.png';
import Banner34Logo from '../Images/Banner3&4Logo.png';
import './DailyBestSale.css';
import NewsletterImage from '../Images/NewsLetterImage.png';
import CustomText from './CustomText';
import { ProductCollection } from './CategoryCollection';
import { useNavigate } from 'react-router-dom';
import { addToCart, getCartItemQuantity, getCart } from '../Utils/cartUtils';
import { toast } from 'react-toastify';
import { HeartOutline } from "../Images/SvgImages";
import { addToWishlist, removeFromWishlist, isInWishlist } from "../Utils/Wishlist";
import { useState,useEffect } from 'react';
import CartButton from './CartButton';
const DailyBestSale = () => {
    const [wishlist, setWishlist] = useState([]);
    const [cartItems, setCartItems] = useState(getCart());
    const navigate = useNavigate();
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
    const HandleAddToCart = (product => {
        addToCart(product);
        setCartItems(getCart());
        toast.success(`${product.name} added to cart!`);
    })
    const selectedProducts = ProductCollection.slice(0, 4);

    return (
        <div className="container-fluid my-4">
            <div className="Shop-brand-header">
                <h3>Daily Best Sells</h3>
            </div>
            <div className="row g-3 ">
                <div className="col-12 col-lg-8">
                    <div className="row g-3">
                        {selectedProducts.map((prod) => (
                            <div key={prod.id} className="col-12 col-md-6 "
                                data-aos="fade-up"
                                data-aos-delay="100"
                                data-aos-anchor-placement="top-bottom"
                            >
                                <div className="product-card p-3 rounded border"
                                    onClick={() => handleProductClick(prod.id)}
                                >
                                    <div
                                        className="wishlist-icon1"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (isInWishlist(prod.id)) {
                                                const updated = removeFromWishlist(prod.id);
                                                setWishlist(updated);
                                                toast.error(`${prod.name} removed from wishlist`);
                                            } else {
                                                const updated = addToWishlist(prod);
                                                setWishlist(updated);
                                                toast.success(`${prod.name} added to wishlist`);
                                            }
                                        }}
                                    >
                                        <HeartOutline
                                            height="26"
                                            width="26"
                                            className={isInWishlist(prod.id) ? "red-heart1" : ""}
                                        />
                                    </div>
                                    <div className="row">
                                        {/* LEFT SIDE: IMAGE + TIMER */}
                                        <div className="col-6 d-flex flex-column align-items-center justify-content-between Daily-image-container">
                                            <img
                                                src={prod.images?.[0]}
                                                alt={prod.name}
                                                className="img-fluid mb-3"
                                                style={{ maxHeight: "150px", objectFit: "contain" }}
                                            />
                                            <div className="d-flex gap-2 flex-wrap justify-content-center">
                                                <div className="timer TextElement">{timeLeft.days} d</div>
                                                <div className="timer TextElement">{timeLeft.hours} h</div>
                                                <div className="timer TextElement">{timeLeft.minutes} m</div>
                                                <div className="timer TextElement">{timeLeft.seconds} s</div>
                                            </div>
                                        </div>

                                        {/* RIGHT SIDE: TEXT + ADD TO CART */}
                                        <div className="col-6 d-flex flex-column justify-content-between">
                                            <div className='ProductDetails'>
                                                <div className="d-flex align-items-center gap-2 mb-2 price">
                                                    <span className="text-muted text-decoration-line-through">${prod.originalPrice?.toFixed(2)}</span>
                                                    <span className="fw-bold text-dark">${prod.price?.toFixed(2)}</span>
                                                    <span className="text-muted">/Qty</span>
                                                </div>

                                                <div className="d-flex align-items-center gap-1 mb-1">
                                                    <p className="hotdeals-rating">
                                                        <strong>{prod.rating}</strong> ⭐
                                                    </p>
                                                    <span className="text-muted">({prod.sold || "1k"})</span>
                                                </div>

                                                <p className=" text-dark mb-1 " >
                                                    {prod.name}
                                                </p>

                                                <div className="d-flex align-items-center gap-1 text-muted mb-1" style={{ fontSize: "12px" }}>
                                                    {/* <i className="bi bi-shop"></i> */}
                                                    <span>By Supermarket</span>
                                                </div>

                                                <div className="mb-2">
                                                    <div className="progress" style={{ height: "3px" }}>
                                                        <div className="progress-bar bg-info" style={{ width: "50%" }}></div>
                                                    </div>
                                                    <small className="text-muted">Sold: {prod.sold}</small>
                                                </div>
                                            </div>

                                            <div>
                                                <CartButton
                                                    product={prod}
                                                    setCartItems={setCartItems}
                                                    qtyBoxClass="Add-To-Cart-Quantity-Box"
                                                    addBtnClass="Add-To-Cart-Button"
                                                    title='Add to Cart'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>




                {/* Banner */}
                <div
                    className="col-12 col-lg-4 banner-container d-flex flex-column bg-danger"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="100"
                    style={{
                        backgroundImage: `url(${BestSaleOfferImage})`,
                        // backgroundSize: 'contain',
                        borderRadius: '20px'
                    }}
                >
                    <div className="banner-content mt-5">
                        <div className="logo-circle">
                            <img src={Banner34Logo} alt="Logo" />
                        </div>
                        <CustomText Text="$5 off your first order" fontSize="30px" fontWeight="bold" />
                        <p>Delivery by 6:15am <span className="expire-text">Expire Aug 5</span></p>
                        <button className="shop-now-btn-banner">Shop Now →</button>
                    </div>
                </div>
            </div>

            {/* -----------------------------------NEWSLETTER PORTION-------------------------------- */}
            <section className="newsletter-new mt-5">
                <div className="container-fluid container-fluid-lg Main">
                    <div className="py-5 px-4 px-md-5  rounded-4 d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap gap-4">
                        <div className="max-w-700 Text">
                            <h3 className="mb-5">Stay home & get your daily needs  <br /> from our shop</h3>
                            <form action="#" className="d-flex gap-2 flex-wrap flex-sm-nowrap">
                                <input
                                    type="text"
                                    placeholder="Enter your mail"
                                    className="form-control bg-white px-3 py-3 shadow-none rounded"
                                />
                                <button
                                    type="submit"
                                    className="py-3 px-4 flex-shrink-0 flex-grow-1 SubscribeButton"
                                >
                                    Subscribe now
                                </button>
                            </form>
                            <p className=" mt-3 small fw-medium">
                                I agree that my submitted data is being collected and stored.
                            </p>
                        </div>
                        <div className="d-none d-lg-block">
                            <img src={NewsletterImage} alt="Thumbnail" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DailyBestSale;
