import cls from './OrderForm.module.scss'
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {orderSelectors} from "../../../../entities/order/model/selectors/orderSelectors.js";
import {sendOrderThunk} from "../../../../entities/order/model/slice/orderSlice.js";
import {clearCart} from "../../../../entities/cart/model/slice/cartSlice.js";

const OrderForm = ({ items, onSuccess }) => {
    const dispatch = useDispatch();
    const { status, error } = useSelector(orderSelectors);
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({
        defaultValues: {
            name: '',
            phone: '',
            email: '',
        }
    })

    const onSubmit = async (data) => {
        const orderData = {
            ...data,
            products: items
        }

        const result = await dispatch(sendOrderThunk(orderData))

        if (sendOrderThunk.fulfilled.match(result)) {
            reset()
            dispatch(clearCart())
            onSuccess()
        }
    }

    return (
        <form
            className={cls.OrderForm}
            onSubmit={handleSubmit(onSubmit)}
        >
            <input
                placeholder='Name'
                {...register('name', {
                    required: 'Name is required',
                    minLength: {
                        value: 2,
                        message: 'Name must be at least 2 characters'
                    }
                })}
            />
            {errors.name && <span>{errors.name.message}</span>}

            <input
            placeholder='Phone number'
            {...register('phone', {
                required: 'Phone number is required',
                pattern: {
                    value: /^[+0-9\s()-]{7,20}$/,
                    message: 'Enter a valid phone number'
                }
            })}
            />
            {errors.phone && <span>{errors.phone.message}</span>}

            <input
                placeholder='Email'
                {...register('email', {
                    required: 'Email is required',
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Enter a valid email',
                    }
                })}
            />
            {errors.email && <span>{errors.email.message}</span>}

            {status === 'failed' && <span>{error}</span>}

            <button
                type="submit"
                disabled={status === 'loading'}
            >
                {status === 'loading' ? 'Ordering...' : 'Order'}
            </button>
        </form>
    );
};

export default OrderForm;