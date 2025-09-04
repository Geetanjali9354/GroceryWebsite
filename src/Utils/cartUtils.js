// 🔥 Emit event to notify other components
export const emitCartChange = () => {
    window.dispatchEvent(new Event('cartUpdated'));
};

// ✅ Add product to cart in localStorage
export const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingIndex = cart.findIndex(item => item.id === product.id);


    if (existingIndex >= 0) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            image: product.image?.[0] || product.images?.[0] || '',
            price: product.price,
            quantity: 1
        });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    emitCartChange(); // 🔔 Trigger event
};

// ✅ Get cart
export const getCart = () => {
    return JSON.parse(localStorage.getItem('cart')) || [];
};

// ✅ Remove from cart
export const removeFromCart = (productId) => {
    const cart = getCart().filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    emitCartChange();
    return cart;
};

// ✅ Update quantity
export const updateCartQuantity = (productId, quantity) => {
    const cart = getCart().map(item =>
        item.id === productId ? { ...item, quantity } : item
    );
    localStorage.setItem('cart', JSON.stringify(cart));
    emitCartChange();
    return cart;
};
// ✅ Get quantity of a product in the cart
export const getCartItemQuantity = (productId) => {
    const cart = getCart();
    const item = cart.find(item => item.id === productId);
    return item?.quantity || 0;
};
