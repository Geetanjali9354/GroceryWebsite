import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CustomText from './CustomText';
import './Wishlist.css'; // You can style the wishlist page here
import TopBar from './TopBar';
import ServiceHighlights from './ServiceHighlights';
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';
import { BaselineHome } from '../Images/SvgImages';
import { addToCart } from './cartUtils';

const Wishlist = () => {
    const navigate = useNavigate();
    const [wishlist, setWishlist] = useState([]);
    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };
    const HandleAddToCart = (product => {
        addToCart(product);
        alert(`${product.name} has been added to your cart!`);
    })

    // Retrieve wishlist data from localStorage
    useEffect(() => {
        const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        setWishlist(savedWishlist);
    }, []);

    // Handle remove from wishlist
    const handleRemoveFromWishlist = (productId) => {
        const updatedWishlist = wishlist.filter(item => item.id !== productId);
        setWishlist(updatedWishlist);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    };

    return (
        <div className="container-fluid g-0">
            <TopBar />
            <div className="d-flex justify-content-between align-items-center" style={{
                height: '80px',
                backgroundColor: '#E9EEFB',
                padding: '0 20px'
            }}>
                <h4 className="m-0 fw-bold" style={{ fontFamily: 'Quicksand' }}>Wishlist</h4>
                <div className="d-flex align-items-center text-muted" style={{ fontSize: '14px', fontFamily: 'Quicksand' }}>
                    <BaselineHome height="18px" width="18px" className="me-2" />
                    <a className="me-1" href="/" style={{ textDecoration: 'none' }}>Home</a>
                    <span className="mx-1">{'>'}</span>
                    <span className="text-primary">Wishlist</span>
                </div>
            </div>

            {/* Show wishlist items */}
            <div className="wishlist-items mt-4">
                {wishlist.length > 0 ? (
                    wishlist.map((item) => (
                        <div key={item.id} className="wishlist-item"
                        >
                            <div className="wishlist-item-image" onClick={() => handleProductClick(item.id)}>
                                <img src={item.images[0]} alt={item.name} />
                            </div>
                            <div className="wishlist-item-info" onClick={() => handleProductClick(item.id)}>
                                <CustomText Text={item.name} fontWeight="500" fontSize="20px" />
                                <p className="wishlist-item-price">${item.price}</p>
                            </div>
                            <div className="wishlist-item-actions">
                                <button onClick={() => handleRemoveFromWishlist(item.id)} className="remove-from-wishlist-btn">
                                    Remove
                                </button>
                                <button onClick={() => HandleAddToCart(item)} className="Add-to-wishlist-btn">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p style={{ fontSize: '25px', fontFamily: 'Quicksand', padding: '10px' }}>Your wishlist is empty. Explore products to add to your wishlist!</p>
                )}
            </div>

            {/* Optionally, you could add a button to proceed to checkout or the cart */}
            {wishlist.length > 0 && (
                <div className="wishlist-footer mb-5 mt-5">
                    <Link to="/cart" className="proceed-to-cart-btn">
                        Proceed to Cart
                    </Link>
                </div>
            )}
            <ServiceHighlights />
            <Footer />
        </div>
    );
};

export default Wishlist;
