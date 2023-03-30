import type { AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";

export const fetchApi = (
  options: AxiosRequestConfig
): Promise<AxiosResponse> => {
  return new Promise((resolve, reject) => {
    axios(options)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        const defaultError = {
          code: err.code,
          status: "error",
          message: err.message,
        };

        if (
          err.response?.data.code === 401 ||
          err.response?.data.error_code === 401
        ) {
          return reject(err.response.data);
        }

        if (typeof err.response === "undefined") {
          return reject(defaultError);
        }

        if (typeof err.response.data === "undefined") {
          return reject(defaultError);
        }

        return reject(err.response.data);
      });
  });
};
