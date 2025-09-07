// Get cart
export const getCart = () => {
    return JSON.parse(localStorage.getItem('cart')) || [];
};
//Emit event to notify other components
export const emitCartChange = () => {
    window.dispatchEvent(new Event('cartUpdated'));
};

// Add product to cart in localStorage
export const addToCart = (product) => {
    const cart = getCart();
    const existingIndex = cart.findIndex(item => item.id === product.id);
    if (existingIndex >= 0) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            image: product.images?.[0] || '',
            price: product.price,
            quantity: 1
        });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    emitCartChange(); // 🔔 Trigger event
};

// Remove from cart
export const removeFromCart = (productId) => {
    const Cart = getCart();
    const Updated = Cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(Updated));
    emitCartChange();
    return Updated;
};

// Update quantity
export const updateCartQuantity = (productId, quantity) => {
    const cart = getCart().map(item =>
        item.id === productId ? { ...item, quantity }
            : item
    );
    localStorage.setItem('cart', JSON.stringify(cart));
    emitCartChange();
    return cart;
};
// Get quantity of a product in the cart
export const getCartItemQuantity = (productId) => {
    const cart = getCart();
    const item = cart.find(item => item.id === productId);
    return item?.quantity || 0;
};
