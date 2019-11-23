import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import getConfig from '@/configuration';

const env = getConfig();
const baseURL = env.baseUrl;

const config: AxiosRequestConfig = {
    baseURL,
    timeout: 10000,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    }
};

const instance: AxiosInstance = axios.create(config);

export default instance;
