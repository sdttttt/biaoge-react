import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
    'timeout': 10000,
    'responseType': 'json',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    }
};

const instance: AxiosInstance = axios.create(config);

export default instance;
