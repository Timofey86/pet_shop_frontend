const getProductPrice = (product) => {
    return product.discont_price ?? product.price
}

export const filterProducts = (products, filters) => {
    let result = [...products]

    if (filters.search?.trim()) {
        const query = filters.search.trim().toLowerCase();

        result = result.filter((product) =>
            product.title.toLowerCase().startsWith(query)
        );
    }

    if (filters.minPrice) {
        result = result.filter((product) => {
            return getProductPrice(product) >= Number(filters.minPrice)
        })
    }

    if (filters.maxPrice) {
        result = result.filter((product) => {
            return getProductPrice(product) <= Number(filters.maxPrice)
        })
    }

    if (filters.discountedOnly) {
        result = result.filter((product) => product.discont_price !== null)
    }

    if (filters.sort === 'newest') {
        result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    }

    if (filters.sort === 'price-high-low') {
        result.sort((a, b) => getProductPrice(b) - getProductPrice(a))
    }

    if (filters.sort === 'price-low-high') {
        result.sort((a, b) => getProductPrice(a) - getProductPrice(b))
    }

    return result;
};