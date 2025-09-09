import { useState, useEffect } from "react";
import TopBar from "./TopBar";
import ServiceHighlights from "./ServiceHighlights";
import Footer from "./Footer";
import { BaselineHome } from "../Images/SvgImages";
import './Cart.css';
import { removeFromCart, getCart, updateCartQuantity } from "../Utils/cartUtils";

function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const loadCart = () => setCartItems(getCart());
        loadCart();
        window.addEventListener('cartUpdated', loadCart);
        return () => window.removeEventListener('cartUpdated', loadCart);
    }, []);

    const handleRemoveItem = (id) => {
        const updated = removeFromCart(id);
        setCartItems(updated);
    };

    const handleIncreaseQty = (id) => {
        const current = cartItems.find(item => item.id === id);
        if (current) {
            const updated = updateCartQuantity(id, current.quantity + 1);
            setCartItems(updated);
        }
    };

    const handleDecreaseQty = (id) => {
        const current = cartItems.find(item => item.id === id);
        if (current && current.quantity > 1) {
            const updated = updateCartQuantity(id, current.quantity - 1);
            setCartItems(updated);
        } else {
            removeFromCart(id);
        }
    };

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const estimatedTax = 10;
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
                    <div className="col-lg-9 col-md-12 col-sm-12 border rounded" style={{ border: '1px solid #DBDBDB' }}>
                        {/* 🛒 Agar cart empty hai to message show hoga */}
                        {cartItems.length === 0 ? (
                            <div className="text-center p-5 TextElement">
                                <h4>No items in cart 🛒</h4>
                                <p className="text-muted">Looks like you haven’t added anything yet.</p>
                                <a href="/" className="btn mt-3 text-white" style={{ backgroundColor: '#1C799B' }}>Continue Shopping</a>
                            </div>
                        ) : (
                            <div style={{ overflowX: 'auto' }}>
                                {/* ✅ Header Row */}
                                <div  style={{ width: '1500px' }}>
                                    <div className="row w-100 h-100 py-4">
                                        <div className="col-2 CenterElement TextClass"><h5 className="TextClass">Delete</h5></div>
                                        <div className="col-3 CenterElement"><h5 className="TextClass">Product Name</h5></div>
                                        <div className="col-2 CenterElement"><h5 className="TextClass">Price</h5></div>
                                        <div className="col-3 CenterElement"><h5 className="TextClass">Quantity</h5></div>
                                        <div className="col-2 CenterElement"><h5 className="TextClass">Subtotal</h5></div>
                                    </div>
                                </div>

                                {/* ✅ Cart Items */}
                                <div style={{ width: '1500px' }}>
                                    <div className="row w-100 h-100">
                                        {cartItems.map((item) => (
                                            <div className="cart-row cart-item" key={item.id}>
                                                <div className="col-2 CenterElement">
                                                    <a className="text-danger TextClass" onClick={() => handleRemoveItem(item.id)}>❌ Remove</a>
                                                </div>

                                                <div className="col-3 d-flex">
                                                    <div className="img-box">
                                                        <img src={Array.isArray(item.image) ? item.image[0] : item.image} alt={item.name} />
                                                    </div>
                                                    <div className="Detail ms-2">
                                                        <h6>{item.name}</h6>
                                                        <div className="small text-muted d-flex gap-2 Rating">
                                                            <span><strong>⭐ {item.rating || "4.8"} </strong>| {item.reviews || "128 Reviews"}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-2 CenterElement TextClass">${item.price}</div>

                                                <div className="col-3 CenterElement">
                                                    <div className="input-group quantity-control w-50">
                                                        <button className="btn" onClick={() => handleDecreaseQty(item.id)} style={{ border: '1px solid #DBDBDB' }}>−</button>
                                                        <input type="text" className="form-control text-center" value={item.quantity} readOnly />
                                                        <button className="btn" onClick={() => handleIncreaseQty(item.id)} style={{ border: '1px solid #DBDBDB' }}>+</button>
                                                    </div>
                                                </div>

                                                <div className="col-2 TextClass CenterElement">${(item.price * item.quantity).toFixed(2)}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* 📦 Cart Summary */}
                    <div className="col-lg-3 col-md-12 col-sm-12">
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
    );
}

export default Cart;
