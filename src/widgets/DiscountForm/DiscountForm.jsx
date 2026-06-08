import cls from './DiscountForm.module.scss'
import petsImg from '../../shared/assets/discountImage.png'
import {useForm} from "react-hook-form";
import {sendSaleRequest} from "../../shared/api/saleApi.js";

const DiscountForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitting},
    } = useForm({
        defaultValues: {
            name: '',
            phone: '',
            email: '',
        },
    });

    const onSubmit = async (data) => {
        try {
            const response = await sendSaleRequest(data);
            console.log('BACKEND RESPONSE:', response);
            reset();
        } catch (error) {
            console.log('ERROR:', error);

            if (error.response) {
                console.log('STATUS:', error.response.status);
                console.log('DATA:', error.response.data);
            }
        }
    };
    return (
        <section className={cls.DiscountForm}>
            <div className={cls.container}>
                <h2>5% off on the first order</h2>

                <div className={cls.content}>
                    <img src={petsImg} alt="Pets"/>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className={cls.form}
                    >
                        <input
                            placeholder='Name'
                            {...register('name', {
                                required: 'Name is required',
                                minLength: {
                                    value: 3,
                                    message: 'Name must be at least 3 characters long',
                                },
                            })}
                        />
                        {errors.name && <span>{errors.name.message}</span>}

                        <input
                            placeholder='Phone number'
                            {...register('phone', {
                                required: 'Phone is required',
                                pattern: {
                                    value: /^[+0-9\s()-]{7,20}$/,
                                    message: 'Enter a valid phone number',
                                },
                            })}
                        />
                        {errors.phone && <span>{errors.phone.message}</span>}

                        <input
                            placeholder="Email"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Enter a valid email',
                                },
                            })}
                        />
                        {errors.email && <span>{errors.email.message}</span>}

                        <button
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Get a discount'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default DiscountForm;