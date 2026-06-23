import cls from './ProductDetails.module.scss'
import {useDispatch} from "react-redux";
import {useState} from "react";
import {addProductToCart} from "../../../cart/model/slice/cartSlice.js";
import {getProductImage} from "../../../../shared/utils/imageHelper.js";

const ProductDetails = ({ product }) => {
    const dispatch = useDispatch();

    const [count, setCount] = useState(1);
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

    const hasDiscount = product.discont_price !== null;
    const currentPrice = hasDiscount ? product.discont_price : product.price;
    const discountPercent = hasDiscount ?  Math.round((1 - product.discont_price / product.price) * 100) : null

    const increase = () => {
        setCount(prev => prev + 1)
    }

    const decrease = () => {
        setCount(prev => Math.max(1, prev - 1))
    }

    const onAddToCart = () => {
        dispatch(addProductToCart({ product, count }));
    };

    const descriptionText = isDescriptionOpen ?
        product.description : `${product.description.slice(0,420)}...`;

  return (
    <div className={cls.ProductDetails}>

            <div className={cls.imageBox}>
                <img
                    src={getProductImage(product)}
                    alt={product.title}
                />
            </div>

            <div className={cls.info}>
                <h1>{product.title}</h1>

                <div className={cls.priceBlock}>
                    <span className={cls.price}>${currentPrice || ''}</span>
                    {hasDiscount && (
                        <>
                            <span className={cls.oldPrice}>${product.price}</span>
                            <span className={cls.discount}>-{discountPercent}%</span>
                        </>
                    )}
                </div>
                <div className={cls.actions}>
                    <div className={cls.counter}>
                        <button type='button' onClick={decrease}>-</button>
                        <span>{count}</span>
                        <button type='button' onClick={increase}>+</button>
                    </div>

                    <button
                        type='button'
                        className={cls.addButton}
                        onClick={onAddToCart}
                    >
                        Add to cart
                    </button>
                </div>
                <div className={cls.description}>
                    <h2>Description</h2>
                    <p>{descriptionText}</p>
                    {
                        product.description.length > 420 && (
                            <button
                                type='button'
                                className={cls.readMore}
                                onClick={() => setIsDescriptionOpen(prev => !prev)}
                            >
                                {isDescriptionOpen ? 'Hide' : 'Read more'}
                            </button>
                        )
                    }
                </div>
            </div>
    </div>
  );
};

export default ProductDetails;