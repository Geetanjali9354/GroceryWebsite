import React, { useState, useEffect } from 'react';
import './Wishlist.css'; // You can style the wishlist page here
import TopBar from './TopBar';
import ServiceHighlights from './ServiceHighlights';
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';
import { BaselineHome } from '../Images/SvgImages';
import { addToCart } from '../Utils/cartUtils';
import { removeFromWishlist, getWishlist } from '../Utils/Wishlist';
import { toast } from 'react-toastify';
const Wishlist = () => {
    const navigate = useNavigate();
    const [wishlist, setWishlist] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };
    const HandleAddToCart = (product) => {
        //  Cart mein add hora hai
        const UpdateCart = addToCart(product);
        setCartItems(UpdateCart);

        //  Wishlist se remove hora hai 
        const updatedWishlist = removeFromWishlist(product.id);
        setWishlist(updatedWishlist);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));

        //  toast message
        toast.success(`${product.name} has been added to your cart !`);
    };


    const handleRemoveItem = (id) => {
        const updated = removeFromWishlist(id);
        setWishlist(updated);
        toast.error('Item removed from wishlist.');
    };
    // Retrieve wishlist data from localStorage
    useEffect(() => {
        const savedWishlist = getWishlist();
        setWishlist(savedWishlist);
    }, []);
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
            <div style={{ overflowX: 'auto' }} className='p-4'>
                {wishlist.length > 0 ? (
                    <div>
                        {/* ✅ Header Row */}
                        <div style={{ width: '1500px' }}>
                            <div className="row w-100 h-100 py-4 headings" >
                                <div className="col-2 CenterElement TextClass"><h5 className="TextClass">Delete</h5></div>
                                <div className="col-3 CenterElement"><h5 className="TextClass">Product Name</h5></div>
                                <div className="col-2 CenterElement"><h5 className="TextClass">Price</h5></div>
                                <div className="col-2 CenterElement"><h5 className="TextClass">Stock Status</h5></div>
                                <div className="col-3 CenterElement"><h5 className="TextClass">Cart</h5></div>
                            </div>
                        </div>

                        <div style={{ width: '1500px' }}>
                            <div className="row w-100 h-100">
                                {wishlist.map((item) => (
                                    <div className="wishlist-row " style={{ border: '1px solid #DBDBDB' }} key={item.id}>
                                        <div className="col-2 CenterElement">
                                            <a className="text-danger TextClass" onClick={() => handleRemoveItem(item.id)}>❌ Remove</a>
                                        </div>
                                        <div className="col-3 d-flex" onClick={() => handleProductClick(item.id)}>
                                            <div className="wishlist-item-image">
                                                <img src={item.images[0]} alt={item.name} />
                                            </div>
                                            <div className="Detail ms-2">
                                                <h6>{item.name}</h6>
                                                <div className="small text-muted d-flex gap-2 Rating">
                                                    <span><strong>⭐ {item.rating || "4.8"} </strong>| {item.reviews || "128 Reviews"}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" col-2 CenterElement TextClass">
                                            <p className="wishlist-item-price">${item.price}</p>
                                        </div>
                                        <div className=" col-2 CenterElement TextClass">
                                            <p className="">In stock</p>
                                        </div>
                                        <div className="wishlist-item-actions col-3 CenterElement">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    HandleAddToCart(item);
                                                }}
                                                className="Add-to-wishlist-btn"
                                            >
                                                Move to Cart
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className="no-items" style={{ fontSize: '25px', fontFamily: 'Quicksand', padding: '10px', fontWeight: 'bold' }}>Your wishlist is empty. Explore products to add to your wishlist!</p>
                )}
            </div>
            <ServiceHighlights />
            <Footer />
        </div>
    );
};

export default Wishlist;
