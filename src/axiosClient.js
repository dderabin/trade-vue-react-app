import axios from 'axios';

const AxiosInstance = axios.create({
    baseURL: 'https://api.server.traderpro.live/api/v1',
    // baseURL: 'http://2-traderpro.eu-4.evennode.com/api/v1',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});

AxiosInstance.interceptors.request.use(
    (config) => config,
    (error) => {
        return Promise.reject(
            (error.response && error.response.data) || 'Something went wrong!'
        )
    }
)

AxiosInstance.interceptors.response.use(    
    (response) => response,
    (error) => {
        return Promise.reject(
            (error.response && error.response.data) || 'Something went wrong!'
        )
    }
)

export default AxiosInstance
