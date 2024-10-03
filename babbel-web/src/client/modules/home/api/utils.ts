import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import { ApiErrorResponse, ApiResponse } from "../types";

const domain = process.env.REACT_APP_SERVER_ADDRESS ?? "http://localhost:3001";

const axiosInstance = axios.create({
  baseURL: `${domain}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const HandleApiRequest = async <T>(
  endpoint: string,
  method: "get" | "post" | "put" | "delete",
  data?: any,
): Promise<T> => {
  try {
    const config: AxiosRequestConfig = {
      url: endpoint,
      method,
      data,
    };
    const response: AxiosResponse<ApiResponse<T>> = await axiosInstance(config);

    if (response.status === 200 && response.data.status === "success") {
      return response.data.data;
    }
    throw new Error(response.data.message || "Request failed");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const errorData: ApiErrorResponse = error.response.data;
        throw new Error(`${errorData.message}`);
      } else if (error.request) {
        throw new Error("No response from server");
      } else {
        throw new Error(`Request error: ${error.message}`);
      }
    } else {
      throw new Error(`Unexpected error: ${(error as Error).message}`);
    }
  }
};
