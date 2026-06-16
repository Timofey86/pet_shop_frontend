export const cartSelectors = (state) => state.cart;
export const cartItemsSelector = (state) => state.cart.items;
export const cartTotalCountSelector = (state) =>
    state.cart.items.reduce((total, item) => total + item.count, 0);
export const cartTotalPriceSelector = (state) =>
    state.cart.items.reduce((total, item) => {
        const price = item.discont_price ?? item.price;
        return total + price * item.count;
    }, 0);