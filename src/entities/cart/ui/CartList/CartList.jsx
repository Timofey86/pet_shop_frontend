import cls from './CartList.module.scss'
import CartItem from "../CartItem/CartItem.jsx";

const CartList = ({ items }) => {
  return (
    <div className={cls.CartList}>
        {
            items.map((item) => (
                <CartItem key={item.id} item={item} />
            ))
        }
    </div>
  );
};

export default CartList;