import { api } from '../../../shared/api/api';

export const getProducts = async () => {
    const { data } = await api.get('/products/all');
    return data;
};