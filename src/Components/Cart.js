import { useState, useEffect } from "react";
import TopBar from "./TopBar";
import ServiceHighlights from "./ServiceHighlights";
import Footer from "./Footer";
import { BaselineHome } from "../Images/SvgImages";
import './Cart.css';
function Cart() {
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCart);
    }, []);

    const handleRemoveItem = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleIncreaseQty = (id) => {
        const updatedCart = cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleDecreaseQty = (id) => {
        const updatedCart = cartItems.map(item =>
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        );
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const estimatedTax = 10; // or calculate it dynamically if needed
    const total = subtotal + estimatedTax;

    return (
        <div className="container-fluid g-0">
            <TopBar />

            <div className="d-flex justify-content-between align-items-center" style={{
                height: '80px',
                backgroundColor: '#E9EEFB',
                padding: '0 20px'
            }}>
                <h4 className="m-0 fw-bold" style={{ fontFamily: 'Quicksand' }}>Cart</h4>
                <div className="d-flex align-items-center text-muted" style={{ fontSize: '14px', fontFamily: 'Quicksand' }}>
                    <BaselineHome height="18px" width="18px" className="me-2" />
                    <a className="me-1" href="/" style={{ textDecoration: 'none' }}>Home</a>
                    <span className="mx-1">{'>'}</span>
                    <span className="text-primary">Cart</span>
                </div>
            </div>
            <div className="container-fluid py-4">
                <div className="row p-3">
                    {/* 🛒 Cart Items */}
                    <div className="col-lg-9 border rounded" style={{ border: '1px solid #dee2e6' }}>
                        <div className="cart-list-container">
                            {/* ✅ Header row */}
                            <div className="cart-row cart-header d-none d-md-flex">
                                <div className="cart-col col-delete">Delete</div>
                                <div className="cart-col col-name">Product Name</div>
                                <div className="cart-col col-price">Price</div>
                                <div className="cart-col col-qty">Quantity</div>
                                <div className="cart-col col-subtotal">Subtotal</div>
                            </div>

                            {/* ✅ Items */}
                            {cartItems.map((item) => (
                                <div className="cart-row cart-item" key={item.id}>
                                    <div className="cart-col col-delete">
                                        <a className="text-danger fw-bold" onClick={() => handleRemoveItem(item.id)}>
                                            ❌ Remove
                                        </a>
                                    </div>

                                    <div className="cart-col col-name d-flex gap-3">
                                        <div className="img-box">
                                            <img src={Array.isArray(item.image) ? item.image[0] : item.image} alt={item.name} />
                                        </div>
                                        <div className="Detail">
                                            <h6>{item.name}</h6>
                                            <div className="small text-muted d-flex gap-2 Rating">
                                                <span><strong>⭐ {item.rating || "4.8"} </strong>|   {item.reviews || "128 Reviews"}</span>
                                            </div>
                                            <div className="mt-1">
                                                <span className="badge bg-light text-dark me-1">Camera</span>
                                                <span className="badge bg-light text-dark">Videos</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="cart-col col-price fw-bold" style={{ fontSize: '20px' }}>${item.price}</div>

                                    <div className="cart-col col-qty">
                                        <div className="input-group quantity-control ">
                                            <button className="btn " onClick={() => handleDecreaseQty(item.id)} style={{ border: '1px solid #DBDBDB' }}>−</button>
                                            <input type="text" className="form-control text-center" value={item.quantity} readOnly />
                                            <button className="btn " onClick={() => handleIncreaseQty(item.id)} style={{ border: '1px solid #DBDBDB' }}>+</button>
                                        </div>
                                    </div>

                                    <div className="cart-col col-subtotal fw-bold" style={{ fontSize: '20px' }}>${(item.price * item.quantity).toFixed(2)}</div>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* 📦 Cart Summary */}
                    <div className="col-lg-3">
                        <div className="cart-summary-container">
                            <h5 className="summary-title">Cart Totals</h5>

                            <div className="summary-box">
                                <div className="summary-item">
                                    <span>Subtotal</span>
                                    <p>${subtotal.toFixed(2)}</p>
                                </div>

                                <div className="summary-item">
                                    <span>Estimated Delivery</span>
                                    <p>Free</p>
                                </div>

                                <div className="summary-item mb-3">
                                    <span>Estimated Taxes</span>
                                    <p>USD {estimatedTax.toFixed(2)}</p>
                                </div>
                            </div>

                            <div className="summary-total-box">
                                <div className="summary-total">
                                    <p>Total</p>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>

                            <button className="checkout-btn w-100 mt-3">Proceed to checkout</button>
                        </div>


                    </div>
                </div>
            </div>

            <ServiceHighlights />
            <Footer />
        </div>
    )
};
export default Cart;