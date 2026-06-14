import cls from './ProductCard.module.scss'
import {Link} from "react-router-dom";
import {getRouteProduct} from "../../../../shared/config/router/routes.js";
import {API_URL} from "../../../../shared/config/api.js";

const ProductCard = ({product}) => {
    const discount = Math.round((1 - product.discont_price / product.price) * 100)
    const hasDiscount = product.discont_price !== null;
    const currentPrice = hasDiscount ? product.discont_price : product.price;
    return (
        <Link
            to={getRouteProduct(product.id)}
            className={cls.ProductCard}
        >
            <div className={cls.ImageBox}>
                <img src={`${API_URL}${product.image}`} alt={product.title}/>
                {hasDiscount && (
                    <span className={cls.discount}>-{discount}%</span>
                )}
            </div>

            <div className={cls.info}>
                <h3 className={cls.title}>{product.title}</h3>
                <div className={cls.priceBox}>
                    <span className={cls.price}> ${currentPrice || ''}</span>
                    {hasDiscount && (
                        <span className={cls.oldPrice}>
                            ${product.price}
                         </span>
                    )}
                </div>
            </div>

        </Link>
    );
};

export default ProductCard;