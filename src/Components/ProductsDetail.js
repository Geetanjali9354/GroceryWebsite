import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {ProductCollection} from './CategoryCollection';
import TopBar from './TopBar';
import Footer from './Footer';
import ServiceHighlights from './ServiceHighlights';
import { BaselineHome } from '../Images/SvgImages';
import './ProductsDetail.css'; // create and style separately
import { CartOutline } from '../Images/SvgImages';
import { HeartOutline } from '../Images/SvgImages';
import { ShuffleOutline } from '../Images/SvgImages';
import { ShareAndroid } from '../Images/SvgImages';
import { FaTruck, FaUndo, FaStore, FaCheck, FaCreditCard, FaShieldAlt, FaBox } from 'react-icons/fa';
import FlashSales from './FlashSales';
import BannerImage from './BannerImage';
import { addToCart } from '../Utils/cartUtils';
import { getWishlist, addToWishlist, removeFromWishlist, isInWishlist } from "../Utils/Wishlist";
import { toast } from 'react-toastify';

const ProductsDetail = () => {
    const [wishlist, setWishlist] = useState([]);
    useEffect(() => {
        setWishlist(getWishlist());
    }, []);
    const { id } = useParams();
    // const allProducts = CategoryCollection.flatMap(category => category.products || []);
    const product = ProductCollection.find(p => p.id === id);

    if (!product) return <h2 className='text-center mt-5'>Product Not Found</h2>;
    const HandleAddToCart = (product => {
        addToCart(product);
        toast.success(`${product.name} added to cart!`);
    })
    
    return (
        <>
            <TopBar />

            {/* Breadcrumb + Title */}
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
                    <div className="col-md-4 text-center h-100 ">
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
                                </div>                        </div>
                            <div className='col-3 '>
                                <div className=' Small-image-div'>
                                    <img
                                        src={product.images?.[2]}
                                        alt={product.name}
                                        className="img-fluid  h-100 w-100"
                                    />
                                </div>                            </div>
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
                    <div className="col-md-5 p-3 MainDiv">
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
                        {/* Countdown (Static Example) */}
                        <div className="p-3  rounded mb-3  mt-5 offer-timer" style={{ backgroundColor: '#F3FAF2' }}>
                            <span className="me-2 offer-label">Special Offer:</span>
                            <span className="badge me-1 text-black offer-badge" >821</span> :
                            <span className="badge mx-1 text-black offer-badge" >08</span> :
                            <span className="badge  mx-1 text-black offer-badge" >33</span> :
                            <span className="badge  ms-1 text-black offer-badge" >22</span>
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
                        <div className="d-flex align-items-center mt-3 p-2 product-qty-box">
                            <div className="input-group mb-4  qty-input-group" style={{ width: '120px', borderRadius: '25px', border: '1px solid #DBDBDB' }}>
                                <button className="btn ">−</button>
                                <input type="text" className="form-control text-center qty-input" value="1" readOnly />
                                <button className="btn ">+</button>
                            </div>
                            <button className="Add-To-Cart-Button-Detail mb-4" onClick={() => HandleAddToCart(product)}>
                                <span className="add-cart-text">
                                    Add To Cart
                                </span>
                                <CartOutline height="20" width="20" style={{ marginLeft: '10px' }} />
                            </button>
                            <div className="social-icons-Detail d-flex gap-2 ms-3 mb-4">
                                {/* Facebook */}
                                <a href="#" className="icon-circle" onClick={(e) => {
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
                                    <HeartOutline
                                        height="30"
                                        width="30"
                                        className={isInWishlist(product.id) ? "red-heart" : ""}
                                    />
                                </a>

                                {/* Twitter */}
                                <a href="#" className="icon-circle" >
                                    <ShuffleOutline height="25" width="25" />
                                </a>

                                {/* Instagram */}
                                <a href="#" className="icon-circle" >
                                    <ShareAndroid height="25" width="25" />
                                </a>
                            </div>
                        </div>
                        {/* Coupon Section */}
                        <div className="coupon-box d-flex justify-content-between align-items-center p-2 mt-2">
                            <div className="d-flex align-items-center">
                                <span className="coupon-icon">＋</span>
                                <span className="ms-2">Mfr. coupon. <strong>$3.00 off 5</strong></span>
                            </div>
                            <a href="#" className="view-details-link">View Details</a>
                        </div>

                        {/* Offer List */}
                        <ul className="mt-3" style={{ fontSize: '15px', fontFamily: 'Quicksand' }}>
                            <li>Buy 1, Get 1 FREE</li>
                            <li>Buy 1, Get 1 FREE</li>
                        </ul>

                    </div>

                    {/* ---------------------------third div---------------------- */}
                    <div className="col-lg-3 col-md-6 col-sm-12 p-3">
                        <div className="card-box p-3">
                            <div className="store-header d-flex align-items-center mb-4 ms-4">
                                <div className="icon-circle">
                                    <FaStore className="store-icon" />
                                </div>
                                <span className="store-text">by Marketpro</span>
                                <button className=" view-store-btn ms-auto">VIEW STORE</button>
                            </div>

                            <div className="info-box p-4">
                                <FaTruck className="icon" />
                                <div>
                                    <h5>Fast Delivery</h5>
                                    <p className='mt-2'>Lightning-fast shipping,<br /> guaranteed.</p>
                                </div>
                            </div>

                            <div className="info-box p-4">
                                <FaUndo className="icon" />
                                <div>
                                    <h5>Free 90-day returns</h5>
                                    <p className='mt-2'>Shop risk-free with easy returns.</p>
                                </div>
                            </div>

                            <div className="info-box p-4">
                                <FaCheck re className="icon" />
                                <div>
                                    <h5>Pickup available at Shop location</h5>
                                    <p className='mt-2'>Usually ready in 24 hours</p>
                                </div>
                            </div>

                            <div className="info-box p-4">
                                <FaCreditCard className="icon" />
                                <div>
                                    <h5>Payment</h5>
                                    <p className='mt-2'>Payment upon receipt of goods, Payment by card in the department, Google Pay, Online card.</p>
                                </div>
                            </div>

                            <div className="info-box p-4">
                                <FaShieldAlt className="icon" />
                                <div>
                                    <h5>Warranty</h5>
                                    <p className='mt-2'>The Consumer Protection Act does not provide for the return of...</p>
                                </div>
                            </div>
                            <div className="info-box p-4">
                                <FaBox className="icon" />
                                <div>
                                    <h5>Packaging</h5>
                                    <p className='mt-2'>Research & development value proposition graphical user interface investor.

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FlashSales title='You Might Also Like' linkText='All Products' />
            <ServiceHighlights />

            {/* ----------------NewsLETTER IMAGE SECTION--------- */}
            <BannerImage />
            <Footer />
        </>
    );
};

export default ProductsDetail;
