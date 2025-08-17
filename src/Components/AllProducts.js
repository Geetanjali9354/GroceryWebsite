// src/components/AllProducts.js
import React, { useEffect } from 'react';
import './AllProducts.css';
import { CartOutline } from '../Images/SvgImages';
import CategoryCollection from './CategoryCollection';
import CustomText from './CustomText';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { addToCart } from './cartUtils';
import TopBar from './TopBar';
import ServiceHighlights from './ServiceHighlights';
import Footer from './Footer';
import { ImOpt } from 'react-icons/im';
import { BaselineHome } from '../Images/SvgImages';
const AllProducts = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 700, once: true });
    }, []);

    const allProducts = CategoryCollection.flatMap(category => category.products || []);

    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    const handleAddToCart = (product) => {
        addToCart(product);
        alert(`${product.name} has been added to your cart!`);
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
                {allProducts.map((product, idx) => (
                    <div
                        key={product.id}
                        className="all-products-card-wrapper p-3"
                        data-aos="fade-up"
                    // data-aos-delay={idx * 50}
                    >
                        <div className="all-products-card " onClick={() => handleProductClick(product.id)}>
                            <div className="all-products-image-container">
                                <img src={(product.image?.[0] || product.images?.[0])} alt={product.name} />
                            </div>
                            {/* <button className="all-products-add-button" onClick={(e) => {
                                e.stopPropagation();
                                handleAddToCart(product);
                            }}>
                                Add
                                <CartOutline height="20" width="20" />
                            </button> */}
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
                            <button className="Add-To-Cart-Button" onClick={() =>handleAddToCart(product)}>
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
