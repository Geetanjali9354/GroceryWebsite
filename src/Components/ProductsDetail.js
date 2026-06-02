import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductCollection } from './CategoryCollection';
import TopBar from './TopBar';
import Footer from './Footer';
import ServiceHighlights from './ServiceHighlights';
import { BaselineHome } from '../Images/SvgImages';
import './ProductsDetail.css'; // create and style separately
import { HeartOutline, ShuffleOutline, ShareAndroid, Heart } from '../Images/SvgImages';
import { FaTruck, FaUndo, FaStore, FaCheck, FaCreditCard, FaShieldAlt, FaBox } from 'react-icons/fa';
import FlashSales from './FlashSales';
import BannerImage from './BannerImage';
import { getCart } from '../Utils/cartUtils';
import { getWishlist, addToWishlist, removeFromWishlist, isInWishlist } from "../Utils/Wishlist";
import { toast } from 'react-toastify';
import CartButton from './CartButton';
const ProductsDetail = () => {
    
    const [setWishlist] = useState([]);
    const [setCartItems] = useState(getCart());
    const [timeLeft, setTimeLeft] = useState({
        days: 832,
        hours: 8,
        minutes: 29,
        seconds: 34,
    });
    // for timer countdown
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
    // Load wishlist from localStorage on component load
    useEffect(() => {
        setWishlist(getWishlist());
    }, []);
    const { id } = useParams();
    const product = ProductCollection.find(p => p.id === id);
    return (
        <div>
            <TopBar />
            <div className="d-flex justify-content-between align-items-center p-3" style={{
                height: '80px',
                backgroundColor: '#E9EEFB',
                padding: '0 20px'
            }}>
                <h4 className="m-0 fw-bold" style={{ fontFamily: 'Quicksand' }}>{product.name}</h4>
                <div className="d-flex align-items-center text-muted" style={{ fontSize: '14px', fontFamily: 'Quicksand' }}>
                    <BaselineHome height="18px" width="18px" className="me-2" />
                    <span className="me-1">Home</span>
                    <span className="mx-1">{'>'}</span>
                    <span className="text-primary">{product.name}</span>
                </div>
            </div>

            {/* Product Info Section */}
            <div className="container-fluid my-5">
                <div className="row gy-4 p-3 ">
                    {/* Left - Product Image */}
                    <div className="col-lg-4 col-sm-12 col-md-12 text-center h-100">
                        <div className='row g-0 p-0 m-0 imagediv d-flex align-items-center justify-content-center'>
                            <img
                                src={product.images?.[0]}
                                alt={product.name}
                                className="img-fluid product-detail-img h-75 w-75"
                            />
                        </div>
                        <div className='row mt-4' >
                            <div className='col-3'>
                                <div className=' Small-image-div'>
                                    <img
                                        src={product.images?.[0]}
                                        alt={product.name}
                                        className="img-fluid  h-100 w-100"
                                    />
                                </div>
                            </div>
                            <div className='col-3 '>
                                <div className=' Small-image-div'>
                                    <img
                                        src={product.images?.[1]}
                                        alt={product.name}
                                        className="img-fluid  h-100 w-100"
                                    />
                                </div>
                            </div>
                            <div className='col-3 '>
                                <div className=' Small-image-div'>
                                    <img
                                        src={product.images?.[2]}
                                        alt={product.name}
                                        className="img-fluid  h-100 w-100"
                                    />
                                </div>
                            </div>
                            <div className='col-3 '>
                                <div className=' Small-image-div'>
                                    <img
                                        src={product.images?.[3]}
                                        alt={product.name}
                                        className="img-fluid  h-100 w-100"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Right - Details */}
                    <div className="col-lg-5 col-sm-12 col-md-12 p-3 MainDiv">
                        <h2 className="Product-name ">{product.name}</h2>
                        <div className="d-flex align-items-center mb-2 product-rating-border" >
                            <span className="text-warning fw-bold me-2 mb-4">{product.rating} ⭐⭐⭐⭐⭐</span>
                        </div>
                        <p className="text-muted mb-2 mt-4">{product.description}</p>
                        <div className='d-flex product-price-section'>
                            <div className="d-flex align-items-center mb-3 mt-4 ">
                                <p className=" text-dark me-3 product-price">${product.price.toFixed(2)}</p>
                                <del className="text-muted fs-8">${product.originalPrice}</del>
                            </div>
                            <button className="mb-3 mt-4 order-whatsapp-btn"><span>Order on WhatsApp</span></button>
                        </div>
                        {/* Countdown Timer */}
                        <div className="p-3  rounded mb-3  mt-5 offer-timer" style={{ backgroundColor: '#F3FAF2' }}>
                            <span className="me-2 offer-label">Special Offer:</span>
                            <span className="badge me-1 text-black offer-badge" >{timeLeft.days}</span>:
                            <span className="badge mx-1 text-black offer-badge" >{timeLeft.hours}</span>:
                            <span className="badge  mx-1 text-black offer-badge" >{timeLeft.minutes}</span>:
                            <span className="badge  ms-1 text-black offer-badge" >{timeLeft.seconds}</span>
                            <span className="ms-2 offer-time-left" >Remains until  end of the offer</span>
                        </div>

                        {/* Stock bar */}
                        <p className="text-black mt-3 product-stock-warning">Products are almost sold out</p>
                        <div className="progress-bar mt-3 mb-2 bg-light">
                            <div className="progress-bar-inner"></div>
                        </div>
                        <p className="text-muted">Available only: <strong>{product.sold?.split('/')?.[1] - product.sold?.split('/')?.[0]}</strong></p>

                        {/* Quantity & Add To Cart */}
                        <p className='mt-3 product-qty-label'>Quantity:</p>
                        <div className="d-flex align-items-center mt-3 p-2 product-qty-box justify-content-between">
                            {/* Cart Button */}
                            <CartButton
                                product={product}
                                setCartItems={setCartItems}
                                addBtnClass="Add-To-Cart-Button-Detail mb-4 "
                                qtyBoxClass="qty-input-group mb-4 Quantity-Box-detail"
                                title="Add To Cart"
                            />

                            {/*  Wishlist and Social Icons  */}
                            <div className="social-icons-Detail d-flex gap-2 ms-3 mb-4 justify-content-end">
                                <div
                                    className="icon-circle"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if (isInWishlist(product.id)) {
                                            const updated = removeFromWishlist(product.id);
                                            setWishlist(updated);
                                            toast.info(`${product.name} removed from wishlist`);
                                        } else {
                                            const updated = addToWishlist(product);
                                            setWishlist(updated);
                                            toast.success(`${product.name} added to wishlist`);
                                        }
                                    }}
                                >
                                    {isInWishlist(product.id) ? (
                                        <Heart height="30" width="30" color="red" />
                                    ) : (
                                        <HeartOutline height="30" width="30" color="#616161" />
                                    )}
                                </div>
                                <div className="icon-circle">
                                    <ShuffleOutline height="25" width="25" />
                                </div>

                                <div className="icon-circle">
                                    <ShareAndroid height="25" width="25" />
                                </div>
                            </div>

                        </div>

                        {/* Coupon Section */}
                        <div className="coupon-box d-flex justify-content-between align-items-center p-2 mt-2">
                            <div className="d-flex align-items-center">
                                <span className="coupon-icon">＋</span>
                                <span className="ms-2">Mfr. coupon. <strong>$3.00 off 5</strong></span>
                            </div>
                            <a href="#coupon-details" className="view-details-link">View Details</a>
                        </div>

                        {/* Offer List */}
                        <ul className="mt-3" style={{ fontSize: '15px', fontFamily: 'Quicksand' }}>
                            <li>Buy 1, Get 1 FREE</li>
                            <li>Buy 1, Get 1 FREE</li>
                        </ul>

                    </div>

                    {/* ---------------------------third div---------------------- */}
                    <div className="col-lg-3 col-md-12 col-sm-12 p-3 ">
                        <div className="card-box p-3">
                            <div className="store-header d-flex align-items-center mb-4  w-100">
                                <div className="icon-circle">
                                    <FaStore className="store-icon" />
                                </div>
                                <span className="store-text">by Marketpro</span>
                                <button className=" view-store-btn ms-auto">VIEW STORE</button>
                            </div>

                            <div className="info-box p-4">
                                <div className='icon-circle  shadow '>
                                    <FaTruck className="icon" />
                                </div>
                                <div className='ms-2 w-75'>
                                    <h5>Fast Delivery</h5>
                                    <p className='mt-2'>Lightning-fast shipping,<br /> guaranteed.</p>
                                </div>
                            </div>

                            <div className="info-box p-4">
                                <div className='icon-circle  shadow '>
                                    <FaUndo className="icon" />
                                </div>
                                <div className='w-75 ms-2'>
                                    <h5>Free 90-day returns</h5>
                                    <p className='mt-2'>Shop risk-free with easy returns.</p>
                                </div>
                            </div>

                            <div className="info-box p-4">
                                <div className='icon-circle  shadow '>
                                    <FaCheck className="icon" />
                                </div>
                                <div className='w-75 ms-2'>
                                    <h5>Pickup available at Shop location</h5>
                                    <p className='mt-2'>Usually ready in 24 hours</p>
                                </div>
                            </div>

                            <div className="info-box p-4">
                                <div className='icon-circle  shadow '>
                                    <FaCreditCard className="icon" />
                                </div>
                                <div className='w-75 ms-2'>
                                    <h5>Payment</h5>
                                    <p className='mt-2'>Payment upon receipt of goods, Payment by card in the department, Google Pay, Online card.</p>
                                </div>
                            </div>

                            <div className="info-box p-4">
                                <div className='icon-circle  shadow '>
                                    <FaShieldAlt className="icon" />
                                </div>
                                <div className='w-75 ms-2'>
                                    <h5>Warranty</h5>
                                    <p className='mt-2'>The Consumer Protection Act does not provide for the return of...</p>
                                </div>
                            </div>
                            <div className="info-box p-4">
                                <div className='icon-circle  shadow '>
                                    <FaBox className="icon" />
                                </div>
                                <div className='w-75 ms-2'>
                                    <h5>Packaging</h5>
                                    <p className='mt-2'>Research & development value proposition graphical user interface investor.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <FlashSales title='You Might Also Like' linkText='All Products' />
            <ServiceHighlights />
            <BannerImage />
            <Footer />
        </div>
    );
};

export default ProductsDetail;
