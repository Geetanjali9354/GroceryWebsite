export const getWishlist = () => {
    return JSON.parse(localStorage.getItem('wishlist')) || [];
};

export const addToWishlist = (product) => {
    const wishlist = getWishlist();
    if (!wishlist.some(item => item.id === product.id)) {
        const updated = [...wishlist, product];
        localStorage.setItem('wishlist', JSON.stringify(updated));
        emitWishlistChange(); // 🔥 Notify others
        return updated;
    }
    return wishlist;
};

export const removeFromWishlist = (productId) => {
    const wishlist = getWishlist();
    const updated = wishlist.filter(item => item.id !== productId);
    localStorage.setItem('wishlist', JSON.stringify(updated));
    emitWishlistChange(); // 🔥 Notify others
    return updated;
};

export const isInWishlist = (productId) => {
    const wishlist = getWishlist();
    return wishlist.some(item => item.id === productId);
};

// 🔥 Emit change event
export const emitWishlistChange = () => {
    window.dispatchEvent(new Event('wishlistUpdated'));
};
