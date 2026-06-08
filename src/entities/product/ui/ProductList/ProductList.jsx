import cls from './ProductList.module.scss'
import ProductCard from "../ProductCard/ProductCard.jsx";

const ProductList = ({products}) => {
  return (
    <div className={cls.ProductList}>
        {products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default ProductList;