import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// Set your API base URL
axios.defaults.baseURL = process.env.API_URL;

// Create an Axios instance
const api = axios.create();

// Intercept requests to add the authorization token
api.interceptors.request.use(
  async (config) => {
    try {
      const auth = await AsyncStorage.getItem('@auth');
      const { token } = JSON.parse(auth || '{}');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    } catch (error) {
      console.error('Error fetching token:', error);
      return config;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
