const getProductPrice = (product) => {
    return product.dicont_price ?? product.price
}

export const filterProducts = (products, filters) => {
    let result = [...products]

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
        result.sort((a,b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })
    }

    if (filters.sort === 'price-high-low') {
        result.sort((a,b) => {
            return getProductPrice(b) - getProductPrice(a)
        })
    }

    if (filters.sort === 'price-low-low') {
        result.sort((a,b) => {
            return getProductPrice(a) - getProductPrice(b)
        })
    }

    return result
}