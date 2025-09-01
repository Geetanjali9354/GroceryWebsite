import React from "react";
import { getCartItemQuantity, addToCart, getCart } from "../Utils/cartUtils";
import QuantityBox from "./QuantityBox";
import { CartOutline } from "../Images/SvgImages";
import { toast } from "react-toastify";

const CartButton = ({
    product,
    setCartItems,
    addBtnClass = "",       // Add button ki styling
    qtyBoxClass = "",
    title=""     // QuantityBox ki styling
}) => {
    const quantity = getCartItemQuantity(product.id);

    if (quantity > 0) {
        // ✅ Agar cart me product hai → QuantityBox with custom style
        return (
            <QuantityBox
                product={product}
                setCartItems={setCartItems}
                className={qtyBoxClass}
            />
        );
    }

    // ✅ Agar cart me nahi hai → Add Button with custom style
    return (
        <button
            className={addBtnClass}
            onClick={(e) => {
                e.stopPropagation();
                addToCart(product);
                setCartItems(getCart());
                toast.success(`${product.name} added to cart!`);
            }}
        >
            {title}
            <CartOutline height="20" width="20" />
        </button>
    );
};

export default CartButton;
