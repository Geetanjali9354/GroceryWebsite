// src/components/AllProducts.js
import React, { useEffect, useState } from 'react';
import './AllProducts.css';
import { CartOutline } from '../Images/SvgImages';
import {ProductCollection } from './CategoryCollection';
import CustomText from './CustomText';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { addToCart } from '../Utils/cartUtils';
import TopBar from './TopBar';
import ServiceHighlights from './ServiceHighlights';
import Footer from './Footer';
import { BaselineHome, HeartOutline } from '../Images/SvgImages';
import { toast } from 'react-toastify';
import { getWishlist, addToWishlist, removeFromWishlist, isInWishlist } from "../Utils/Wishlist";

const AllProducts = () => {
    const navigate = useNavigate();
    const [wishlist, setWishlist] = useState([]);
    useEffect(() => {
        setWishlist(getWishlist());
    }, []);
    useEffect(() => {
        AOS.init({ duration: 700, once: true });
    }, []);

    // const allProducts = ProductCollection;
    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    const handleAddToCart = (product) => {
        addToCart(product);
        toast.success(`${product.name} added to cart!`);
    };

    return (
        <div className="all-products g-0">
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

            <div className="all-products-grid mt-5">
                {ProductCollection.map((product, idx) => (
                    <div
                        key={product.id}
                        className="all-products-card-wrapper p-3"
                        data-aos="fade-up"
                    // data-aos-delay={idx * 50}
                    >
                        <div className="all-products-card " onClick={() => handleProductClick(product.id)}>
                            <div className="all-products-image-container">
                                <img src={(product.images?.[0] || product.images?.[0])} alt={product.name} />
                            </div>
                            <div
                                className="wishlist-icon"
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
                                    height="30"
                                    width="30"
                                    className={isInWishlist(product.id) ? "red-heart" : ""}
                                />
                            </div>
                            <p className="all-products-price">
                                ${product.price} <span className="original-price">${product.originalPrice}</span> <span className="per-qty">/Qty</span>
                            </p>
                            <p className="all-products-rating">
                                <strong>{product.rating}</strong> ⭐ (17k)
                            </p>
                            <CustomText Text={product.name} className='all-products-name' fontWeight='bold' />
                            <div className="all-products-progress-bar">
                                <div className="all-products-progress-bar-inner"></div>
                            </div>
                            <CustomText Text={`Sold: ${product.sold}`} className='all-products-sold' fontWeight='bold' />
                            <button className="Add-To-Cart-Button" onClick={(e) => {
                                e.stopPropagation(); // Prevent bubbling
                                handleAddToCart(product);
                            }}>
                                Add To Cart
                                <CartOutline height="20" width="20" style={{ marginLeft: '10px' }} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <ServiceHighlights />
            <Footer />
        </div>
    );
};

export default AllProducts;
