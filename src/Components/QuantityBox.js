import { getCartItemQuantity, removeFromCart, updateCartQuantity } from '../Utils/cartUtils';
import { toast } from 'react-toastify';

const QuantityBox = ({ product, setCartItems, className = '' }) => {
    const quantity = getCartItemQuantity(product.id);

    const handleDecrease = (e) => {
        e.stopPropagation();
        if (quantity === 1) {
            const updatedCart = removeFromCart(product.id);
            setCartItems(updatedCart);
            toast.error(`${product.name} removed from cart`);
        } else {
            const updatedCart = updateCartQuantity(product.id, quantity - 1);
            setCartItems(updatedCart);
        }
    };

    const handleIncrease = (e) => {
        e.stopPropagation();
        const updatedCart = updateCartQuantity(product.id, quantity + 1);
        setCartItems(updatedCart);
    };
    if (quantity > 0) {
        return (
            <div className={`${className}`} onClick={(e) => e.stopPropagation()}>
                <button onClick={handleDecrease} style={{ borderRight: '1px solid #DBDBDB' }}>-</button>
                <span>{quantity}</span>
                <button onClick={handleIncrease} style={{ borderLeft: '1px solid #DBDBDB' }}>+</button>
            </div>
        );
    }
};

export default QuantityBox;
