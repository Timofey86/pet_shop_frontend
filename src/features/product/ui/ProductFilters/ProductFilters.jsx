import cls from './ProductFilters.module.scss'

const ProductFilters = ({filters, setFilters, showDiscounted = true}) => {
    const onChange = (event) => {
        const {name, value, type, checked} = event.target

        setFilters((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }))
    }
    return (
        <div className={cls.ProductFilters}>
            <div className={cls.price}>
                <span>Price</span>

                <input
                    type="number"
                    name="minPrice"
                    placeholder="from"
                    value={filters.minPrice}
                    onChange={onChange}
                />

                <input
                    type="number"
                    name="maxPrice"
                    placeholder="to"
                    value={filters.maxPrice}
                    onChange={onChange}
                />

            </div>

            {showDiscounted && (
                <label className={cls.discount}>
                    <span>Discounted items</span>

                    <input
                        type="checkbox"
                        name="discountedOnly"
                        checked={filters.discountedOnly}
                        onChange={onChange}
                    />
                </label>
            )}

            <div className={cls.sort}>
                <span>Sorted</span>

                <select name="sort" value={filters.sort} onChange={onChange}>
                    <option value="default">by default</option>
                    <option value="newest">newest</option>
                    <option value="price-high-low">price: high-low</option>
                    <option value="price-low-high">price: low-high</option>
                </select>
            </div>

            <div className={cls.search}>
                <span>Search</span>

                <input
                    type="text"
                    name="search"
                    placeholder="Product name"
                    value={filters.search}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

export default ProductFilters;