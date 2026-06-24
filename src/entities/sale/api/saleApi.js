
import { api } from '../../../shared/api/api.js';

export const sendSaleRequest = async (formData) => {
    const { data } = await api.post('/sale/send', formData);
    return data;
};