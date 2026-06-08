import { api } from '../../../shared/api/api';

export const getCategories = async () => {
    const { data } = await api.get('/categories/all');
    return data;
};