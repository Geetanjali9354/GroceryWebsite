// utils/cartUtils.js

// ✅ Add product to cart in localStorage
export const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingIndex = cart.findIndex(item => item.id === product.id);

    if (existingIndex >= 0) {
        // If already in cart, increase quantity
        cart[existingIndex].quantity += 1;
    } else {
        // Else, add new product with quantity 1
        cart.push({
            id: product.id,
            name: product.name,
            image: product.image?.[0] || product.images?.[0] || '', // should be image URL or path
            price: product.price,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
};
