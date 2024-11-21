import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface ApiResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
}

/**
 * Makes a dynamic API call using axios, supporting query params, body data, and base URL.
 *
 * @param url - The relative API endpoint
 * @param method - HTTP method (GET, POST, PUT, DELETE, etc.)
 * @param data - Body data for POST, PUT, DELETE requests (optional)
 * @param headers - Custom headers (optional)
 * @param params - Query parameters for GET requests (optional)
 * @param baseUrl - Dynamic base URL for the request (optional)
 * @returns The response from the API call
 */
async function serverSideApiCall<T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  data: any = {},
  headers: Record<string, string> = {},
  params: Record<string, any> = {},
  baseUrl?: string
): Promise<ApiResponse<T>> {
  try {
    // Constructing Axios config dynamically
    const config: AxiosRequestConfig = {
      method, // HTTP method
      url: baseUrl ? `${baseUrl}${url}` : url, // Dynamic base URL
      headers: {
        "Content-Type": "application/json",
        ...headers, // Add custom headers
      },
      params, // For GET requests, query params are passed here
      data, // For POST, PUT, DELETE, data is passed here
    };

    // Make the API call with Axios
    const response: AxiosResponse<T> = await axios(config);

    // Return structured response
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  } catch (error: any) {
    // Handle error, structured error response
    console.error("API call error:", error);
    throw new Error(
      error.response
        ? `${error.response.status}: ${error.response.statusText}`
        : "Network Error"
    );
  }
}

export default serverSideApiCall;
