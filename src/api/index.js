import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type":
      "multipart/form-data; application/x-www-form-urlencoded; charset=UTF-8;application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    // Authorization: `Bearer ${token}`,
  },
});

// instance.interceptors.request.use((config) => {
//   config.headers.Authorization = `Baerer ${localStorage.getItem("token")}`;
// });

// instance.interceptors.response.use(
//   (config) => config,
//   async (error) => {
//     console.log(error.config);
//     const originalRequest = error.config;
//     if (error.response.status == 401 && !originalRequest?._isRetry) {
//       try {
//         // refresh old token here
//         const response = await axios.get(`${baseURL}/refresh`, {
//           withCredentials: true,
//         });
//         localStorage.setItem("token", response.data.accessToken);
//         return instance.request(originalRequest)
//       } catch (e) {
//         console.log(e);
//       }
//     }
//     throw error;
//   }
// );

export default instance;
