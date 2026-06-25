import cls from './ProductCard.module.scss'
import {Link} from "react-router-dom";
import {getRouteProduct} from "../../../../shared/config/router/routes.js";
import {useDispatch, useSelector} from "react-redux";
import {addProductToCart} from "../../../cart/model/slice/cartSlice.js";
import {getProductImage} from "../../../../shared/utils/imageHelper.js";
import {cartItemsSelector} from "../../../cart/model/selectors/cartSelectors.js";

const ProductCard = ({product}) => {
    const dispatch = useDispatch();
    const discount = Math.round((1 - product.discont_price / product.price) * 100)
    const hasDiscount = product.discont_price !== null;
    const currentPrice = hasDiscount ? product.discont_price : product.price;
    const cartItems = useSelector(cartItemsSelector);
    const isAdded = cartItems.some((item) => item.id === product.id);

    const onAddToCart = (event) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(addProductToCart({ product, count: 1 }));
    };

    return (
        <Link
            to={getRouteProduct(product.id)}
            className={cls.ProductCard}
        >
            <div className={cls.ImageBox}>
                <img src={getProductImage(product)} alt={product.title}/>
                {hasDiscount && (
                    <span className={cls.discount}>-{discount}%</span>
                )}

                <button
                    type="button"
                    className={`${cls.addButton} ${isAdded ? cls.added : ''}`}
                    onClick={onAddToCart}
                    disabled={isAdded}
                >
                    {isAdded ? 'Added' :  'Add to cart'}
                </button>
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