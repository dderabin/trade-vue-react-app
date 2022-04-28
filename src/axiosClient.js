import axios from 'axios';

const AxiosInstance = axios.create({baseURL: 'http://1-traderpro.eu-4.evennode.com/api/v1'});

AxiosInstance.interceptors.request.use(
    (config) => config,
    (error) =>
        Promise.reject(
            (error.response && error.response.data) || 'Something went wrong!'
        )
)

AxiosInstance.interceptors.response.use(    
    (response) => response,
    (error) =>
        Promise.reject(
            (error.response && error.response.data) || 'Something went wrong!'
        )
)

export default AxiosInstance
