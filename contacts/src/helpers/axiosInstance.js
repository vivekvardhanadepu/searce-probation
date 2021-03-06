import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import envs from '../config/env';

let headers = {};

const axiosInstance = axios.create({
  baseURL: envs.apiUrl,
  headers,
});

axiosInstance.interceptors.request.use(
  async function (config) {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
