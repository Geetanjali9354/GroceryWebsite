import { getCartItemQuantity, addToCart, getCart } from "../Utils/cartUtils";
import QuantityBox from "./QuantityBox";
import { CartOutline } from "../Images/SvgImages";
import { toast } from "react-toastify";

const CartButton = ({
    product,
    setCartItems,
    addBtnClass = "",
    qtyBoxClass = "",
    title = ""
}) => {
    const quantity = getCartItemQuantity(product.id);

    if (quantity > 0) {
        // Agar cart me product hai then QuantityBox
        return (
            <QuantityBox
                product={product}
                setCartItems={setCartItems}
                className={qtyBoxClass}
            />
        );
    }
    else {
        // Agar cart me nahi hai → Add to cart button
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
    }
};

export default CartButton;
