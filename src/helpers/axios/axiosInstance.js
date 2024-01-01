

import axios from "axios";
import { authKey } from "../../constants/storageKey";
import { getFromLocalStorage } from "../../utils/local-storage";
const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    const accessToken = getFromLocalStorage(authKey);
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    if (config.url.split('/').pop() === "login") {
      config.headers.ipAddress = "103.143.242.209";
      config.headers.browserName = "Google Chrome";
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  //@ts-ignore
  function (response) {
    const responseObject = {
      data: response?.data,
      meta: response?.data?.meta,
    };
    return responseObject;
  },
  async function (error) {
    if (error?.data?.response?.status === 400) { /* empty */ } else {
      const responseObject = {
        statusCode: error?.data.response?.data?.statusCode || 500,
        message: error?.data?.response?.data?.message || "Something went wrong",
        errorMessages: error?.data.response.data?.message,
      };
      return responseObject;
    }

    // return Promise.reject(error);
    // return error;
  }
);

export { instance };