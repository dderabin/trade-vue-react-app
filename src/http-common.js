import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers.Authorization = `Bearer ${your_token}`;
    // OR config.headers.common['Authorization'] = `Bearer ${your_token}`;
    config.baseURL = 'http://1-traderpro.eu-4.evennode.com/api/v1';

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);


export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch
};
