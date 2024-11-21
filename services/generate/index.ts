import axios, { AxiosRequestConfig, Method } from 'axios';

let BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

// Set the base URL dynamically
export const setBaseUrl = (newBaseUrl?: string): void => {
  BASE_URL = newBaseUrl || BASE_URL;
};

// Define a custom error class
export class ApiError extends Error {
  constructor(message: string, public statusCode: number, public details?: any) {
    super(message);
    this.name = 'ApiError';
  }
}

// Axios instance with interceptors
const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    // Add token to headers if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized errors (e.g., redirect to login)
      console.error('Session expired. Redirecting to login.');
    }
    return Promise.reject(error);
  }
);

export interface ApiCallOptions extends AxiosRequestConfig {
  headers?: Record<string, string>;
  params?: Record<string, any>;
  data?: Record<string, any>;
}

const dynamicApiCall = async (
  endpoint: string,
  method: Method,
  options: ApiCallOptions = {}
): Promise<any> => {
  const { headers = {}, params = {}, data = {}, ...config } = options;

  try {
    const response = await axiosInstance({
      baseURL: BASE_URL,
      url: endpoint,
      method,
      headers,
      params,
      data,
      ...config,
    });

    return response.data;
  } catch (error: any) {
    console.error('API Error:', error.response?.data || error.message);
    throw new ApiError(error.message, error.response?.status, error.response?.data);
  }
};

export default dynamicApiCall;
