import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    "Content-type": "application/json",
    'Accept': 'application/json',
  },
});

export default apiClient;