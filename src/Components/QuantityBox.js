import React from 'react';
import './QuantityBox.css';
import {
    getCartItemQuantity,
    removeFromCart,
    updateCartQuantity,
    addToCart,
    getCart
} from '../Utils/cartUtils';
import { toast } from 'react-toastify';

const QuantityBox = ({ product, setCartItems }) => {
    const quantity = getCartItemQuantity(product.id);

    const handleDecrease = (e) => {
        e.stopPropagation();
        if (quantity === 1) {
            const updatedCart = removeFromCart(product.id);
            setCartItems && setCartItems(updatedCart);
            toast.info(`${product.name} removed from cart`);
        } else {
            const updatedCart = updateCartQuantity(product.id, quantity - 1);
            setCartItems && setCartItems(updatedCart);
        }
    };

    const handleIncrease = (e) => {
        e.stopPropagation();
        const updatedCart = updateCartQuantity(product.id, quantity + 1);
        setCartItems && setCartItems(updatedCart);
    };

    const handleAdd = (e) => {
        e.stopPropagation();
        addToCart(product);
        setCartItems && setCartItems(getCart());
        toast.success(`${product.name} added to cart!`);
    };

    if (quantity > 0) {
        return (
            <div className="quantity-box" onClick={(e) => e.stopPropagation()}>
                <button onClick={handleDecrease}>-</button>
                <span>{quantity}</span>
                <button onClick={handleIncrease}>+</button>
            </div>
        );
    } else {
        return (
            <button className="flash-sales-add-button" onClick={handleAdd}>
                Add
            </button>
        );
    }
};

export default QuantityBox;
