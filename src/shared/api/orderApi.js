import {api} from "./api.js";

export const sendOrder = async (orderData) => {
    const { data } = await api.post('/order/send', orderData)
    return data;
}