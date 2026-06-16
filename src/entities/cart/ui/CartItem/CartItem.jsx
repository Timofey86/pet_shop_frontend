import cls from './CartItem.module.scss'
import {useDispatch} from "react-redux";
import {API_URL} from "../../../../shared/config/api.js";
import {decreaseCartItem, increaseCartItem, removeCartItem} from "../../model/slice/cartSlice.js";
import removeImg from '../../../../shared/assets/remove.svg'

const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    const currentPrice = item.discont_price ?? item.price;
    const hasDiscount = item.discont_price !== null;
  return (
    <div className={cls.CartItem}>
        <img
            src={`${API_URL}${item.image}`}
            alt={item.title}
            className={cls.image}
        />

        <div className={cls.content}>
            <div className={cls.top}>
                <h3>{item.title}</h3>
                <button
                    type="button"
                    className={cls.remove}
                    onClick={() => dispatch(removeCartItem(item.id))}
                >
                    <img src={removeImg} alt='remove button'/>
                </button>
            </div>
            <div className={cls.bottom}>
                <div className={cls.counter}>
                    <button
                        type="button"
                        onClick={() => dispatch(decreaseCartItem(item.id))}
                    >
                      -
                    </button>
                    <span>{item.count}</span>
                    <button
                        type="button"
                        onClick={() => dispatch(increaseCartItem(item.id))}
                    >
                        +
                    </button>
                </div>
                <div className={cls.priceBox}>
                    <span className={cls.price}>${currentPrice * item.count}</span>

                    {hasDiscount && (
                        <span className={cls.oldPrice}>${item.price * item.count}</span>
                    )}
                </div>
            </div>
        </div>
    </div>
  );
};

export default CartItem;