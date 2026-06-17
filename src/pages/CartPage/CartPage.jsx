import cls from './CartPage.module.scss'
import {useSelector} from "react-redux";
import {
    cartItemsSelector,
    cartTotalCountSelector,
    cartTotalPriceSelector
} from "../../entities/cart/model/selectors/cartSelectors.js";
import Container from "../../shared/ui/Container/Container.jsx";
import {Link} from "react-router-dom";
import {getRouteProducts} from "../../shared/config/router/routes.js";
import CartList from "../../entities/cart/ui/CartList/CartList.jsx";
import OrderForm from "../../features/cart/ui/OrderForm/OrderForm.jsx";
import {useState} from "react";
import Modal from "../../shared/ui/Modal/Modal.jsx";

const CartPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const items = useSelector(cartItemsSelector)
    const totalCount = useSelector(cartTotalCountSelector)
    const totalPrice = useSelector(cartTotalPriceSelector)

    const isCartEmpty = items.length === 0
    return (
        <main className={cls.CartPage}>
            <Container>
                <div className={cls.header}>
                    <h1>Shopping cart</h1>
                    <div className={cls.line}/>
                    <Link to={getRouteProducts()} className={cls.backLink}>
                        Back to the store
                    </Link>
                </div>

                {
                    isCartEmpty ? (
                        <div className={cls.empty}>
                            <p>Looks like you have no items in your basket currently.</p>
                            <Link to={getRouteProducts()} className={cls.continueLink}>
                                Continue Shopping
                            </Link>
                        </div>
                    ) : (
                        <div className={cls.content}>
                            <CartList items={items}/>

                            <div className={cls.orderDetails}>
                                <h2>Order details</h2>
                                <p className={cls.count}>{totalCount} items</p>
                                <div className={cls.total}>
                                    <span>Total</span>
                                    <strong>${totalPrice}</strong>
                                </div>

                                <OrderForm items={items}  onSuccess={()=> setIsModalOpen(true)}/>
                            </div>
                        </div>
                    )
                }
            </Container>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className={cls.successModal}>
                    <h2>Congratulations!</h2>

                    <p>Your order has been successfully placed on the website.</p>

                    <p>A manager will contact you shortly to confirm your order.</p>
                </div>
            </Modal>
        </main>
    );
};

export default CartPage;