import axios from 'axios';
const axiosURL = axios.create({
    // axiosURL: 'https://demo.matasushilainstitute.com/api',
    baseURL: 'http://127.0.0.1:8000/api',
});
axiosURL.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('AUTH_TOKEN');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosURL;
