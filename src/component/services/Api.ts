import axios from "axios";

const api = axios.create({
  baseURL: "https://task-follow-up.v2202305135856227727.ultrasrv.de",
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

//Add a response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log("errorrefresh", error.response);
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // const refreshToken = localStorage.getItem("refreshToken");
        const response = await axios.post(
          "https://task-follow-up.v2202305135856227727.ultrasrv.de/api/Auth/refresh-token",
          {
            "refreshToken": localStorage.getItem("refreshToken")
          }
        );

        console.log("res", response);
        const { Token } = response.data.Data;
        const { RefreshToken } = response.data.Data;
        console.log("t",Token)
        localStorage.setItem("token", Token);
        localStorage.setItem("refreshToken", RefreshToken);
        originalRequest.headers.Authorization = `Bearer ${Token}`;
        console.log("org",originalRequest);
        return axios(originalRequest);
      } catch (error) {}
    }

    return Promise.reject(error);
  }
);
export default api;
