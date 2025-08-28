// src/components/AllProducts.js
import React, { useEffect, useState } from 'react';
import './AllProducts.css';
import { CartOutline } from '../Images/SvgImages';
import { ProductCollection } from './CategoryCollection';
import CustomText from './CustomText';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { addToCart, getCartItemQuantity, getCart } from '../Utils/cartUtils';
import TopBar from './TopBar';
import ServiceHighlights from './ServiceHighlights';
import Footer from './Footer';
import { BaselineHome, HeartOutline } from '../Images/SvgImages';
import { toast } from 'react-toastify';
import { getWishlist, addToWishlist, removeFromWishlist, isInWishlist } from "../Utils/Wishlist";
import FilterSection from './FilterSection';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import QuantityBox from './QuantityBox';

const AllProducts = () => {
    const navigate = useNavigate();
    const [wishlist, setWishlist] = useState([]);
    const [cartItems, setCartItems] = useState(getCart());

    useEffect(() => {
        setWishlist(getWishlist());
    }, []);
    useEffect(() => {
        AOS.init({ duration: 700, once: true });
    }, []);

    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    const handleAddToCart = (product) => {
        addToCart(product);
        toast.success(`${product.name} added to cart!`);
    };
    const handleCategoryClick = (id) => {
        navigate(`/category/${id}`);
    };
    return (
        <div className="all-products container-fluid p-0 m-0 g-0" style={{ overflowX: 'hidden' }}>
            <TopBar />
            <div className="d-flex justify-content-between align-items-center" style={{
                height: '80px',
                backgroundColor: '#E9EEFB',
                padding: '0 20px'
            }}>
                <h4 className="m-0 fw-bold" style={{ fontFamily: 'Quicksand' }}>All Products</h4>
                <div className="d-flex align-items-center text-muted" style={{ fontSize: '14px', fontFamily: 'Quicksand' }}>
                    <BaselineHome height="18px" width="18px" className="me-2" />
                    <a className="me-1" href="/" style={{ textDecoration: 'none' }}>Home</a>
                    <span className="mx-1">{'>'}</span>
                    <span className="text-primary">All Products</span>
                </div>
            </div>
            <div className="container-fluid m-0 g-0 mt-4">
                <div className="row p-4">

                    <FilterSection handleCategoryClick={handleCategoryClick} />
                    {/* Right Column (col-7) - Product List */}
                    <div className="col-7">
                        <div className="four-box-grid-AllProduct">
                            {ProductCollection.map((item, index) => (
                                <div
                                    key={index}
                                    className="box-AllProduct "
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                    data-aos-anchor-placement="top-bottom"
                                    onClick={() => handleProductClick(item.id)}
                                    style={{ width: '250px' }}
                                >
                                    <div className="AllProduct-image-container">
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
                                    <CustomText Text={item.name} className='AllProduct-product-name' fontWeight='bold' fontSize='20px' />

                                    <p className="AllProduct-price">
                                        ${item.price} <span className="per-qty">/Qty</span>
                                        <span className="original-price">${item.originalPrice}</span>
                                    </p>
                                    <p className="AllProduct-rating">
                                        <strong>{item.rating}</strong> ⭐ (17k)
                                    </p>

                                    {/* <button className="Add-To-Cart-Button-AllProduct" onClick={(e) => {
                                        e.stopPropagation();
                                        handleAddToCart(item);
                                    }}>
                                        Add To Cart
                                        < CartOutline height="20" width="20" style={{ marginLeft: '10px' }
                                        } />
                                    </button> */}
                                    {(() => {
                                        const quantity = getCartItemQuantity(item.id);
                                        if (quantity > 0) {
                                            return (
                                                <QuantityBox
                                                    product={item}
                                                    setCartItems={setCartItems}
                                                    className="Add-To-Cart-Quantity-Box"
                                                />
                                            );
                                        } else {
                                            return (
                                                <button className="Add-To-Cart-Button" onClick={(e) => {
                                                    e.stopPropagation();
                                                    addToCart(item);
                                                    setCartItems(getCart());
                                                    toast.success(`${item.name} added to cart!`);
                                                }}>
                                                    Add To Cart
                                                    <CartOutline height="20" width="20" style={{ marginLeft: '10px' }} />
                                                </button>
                                            );
                                        }
                                    })()}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mt-4 mb-5">
                <div className="col-auto">
                    <div className="pagination-static d-flex align-items-center gap-2">
                        {/* Left Arrow */}
                        <button className="pagination-btn disabled"><FaArrowLeft color='black' /></button>

                        {/* Static Pages */}
                        <button className="pagination-btn active">01</button>
                        <button className="pagination-btn">02</button>
                        <button className="pagination-btn">03</button>
                        <button className="pagination-btn">04</button>
                        <button className="pagination-btn">05</button>
                        <button className="pagination-btn">06</button>
                        <button className="pagination-btn">07</button>

                        {/* Right Arrow */}
                        <button className="pagination-btn"><FaArrowRight /></button>
                    </div>
                </div>
            </div>
            <ServiceHighlights />
            <Footer />
        </div>
    );
};

export default AllProducts;