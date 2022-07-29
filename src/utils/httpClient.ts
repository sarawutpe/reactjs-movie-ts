import axios from "axios";

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_NODE_URL,
});

// Add a request interceptor
httpClient.interceptors.request.use(
  function (config: any) {
    // Todo
    return config;
    // Do something before request is sent
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default httpClient;
