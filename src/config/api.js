
import axios from 'axios';
// const LOCALHOST='https://clothify-backend-production.up.railway.app/'

export const API_BASE_URL = 'https://clothify-backend-production.up.railway.app'

const api = axios.create({
  baseURL: API_BASE_URL,
});

const token = localStorage.getItem('jwt');

api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;
