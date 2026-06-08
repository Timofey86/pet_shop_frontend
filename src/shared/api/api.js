import axios from "axios";
import { API_URL } from '../config/api.js';

export const api = axios.create({
    baseURL: API_URL,
});