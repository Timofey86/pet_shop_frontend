import {API_URL} from "../config/api.js";

export const getProductImage = (product) => `${API_URL}${product.image}`

export const getCategoryImage = (category) => `${API_URL}${category.image}`