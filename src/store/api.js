import AxiosInstance from '../axiosClient';

export const ADD_NEW_SIGNAL = (data) => {
    // raw json data
    // const data = {
    //     "type": "copyTrader",
    //     "exchangePlatform": "testnet-binanceusdm",
    //     "from": "BTC",
    //     "to": "USDT",
    //     "signalType": "Spot",
    //     "stopLoss": 28000,
    //     "leverage": 5,
    //     "entryPrice": 30000,
    //     "amount": 10,
    //     "targets": [
    //         {
    //             "price": 31000,
    //             "amount": 50
    //         },
    //         {
    //             "price": 32000,
    //             "amount": 50
    //         }
    //     ]
    // }
    return AxiosInstance.put(`/user/trade/signal`, data)
}

export const UPDATE_SIGNAL = (data) => {
    // raw json data
    // const data = {
    //     "id": "624dfb860248548c445927eb",
    //     "entryPrice": 2200,
    //     "stopLoss": 25000,
    //     "targets": [
    //         {
    //             "price": 31000,
    //             "amount": 5
    //         },
    //         {
    //             "price": 32000,
    //             "amount": 5
    //         }
    //     ]
    // }
    return AxiosInstance.post(`/user/trade/signal`, data)
}

export const SIGNUP_USER = (data) => {
    // form data data
    return AxiosInstance.post(`/user/new`, data)
}

export const LOGIN_USER = (data) => {
    // raw json data
    return AxiosInstance.post(`/user/login`, data);
}

export const GET_PROFILE = () => {
    return AxiosInstance.get(`/user/profile`);
}

export const ADD_UPDATE_EXCHANGE = (data) => {
    // raw json data
    return AxiosInstance.put(`/user/exchanges`, data)
}

export const REMOVE_EXCHANGE = (data) => {
    // raw json data
    // const data = {
    //     "exchangePlatform": "testnet-binanceusdm"
    // }
    return AxiosInstance.delete(`/user/exchanges`, data)
}

export const ADD_USER_INFO = (data) => {
    // raw json data
    return AxiosInstance.put(`/user/user-info`, data)
}

export const ENABLE_COPYTRADER = () => {
    // no data
    return AxiosInstance.post(`/user/enable-copy-trader`)
}

export const SUBSCRIBE_TO_COPYTRADER_OR_SIGNALPROVIDER = (data) => {
    // raw json data
    // const data = {
    //     "userId": "6201272e317b3c88d760a64d",
    //     "type": "copyTrader",
    //     "exchange": "testnet-binanceusdm",
    //     "capitalPercent": 10
    // }
    return AxiosInstance.post(`/user/subscribe`, data)
}

export const ENABLE_SIGNALPROVIDER = (data) => {
    // no data
    // const data = {        
    // }
    return AxiosInstance.post(`/user/enable-signal-provider`, data)
}

export const UPLOAD_DOCUMENTS = (data) => {
    // form-data data
    const { passport, drivingLicense, nationalId } = data;
    const formData = new FormData();
    passport && formData.append("passport", passport);
    drivingLicense && formData.append("drivingLicense", drivingLicense);
    nationalId && formData.append("nationalId", nationalId);
    return AxiosInstance.put(`/user/upload-documents`, formData)
}

export const DELETE_DOCUMENT = (data) => {
    // raw json data
    return AxiosInstance.delete(`/user/upload-documents`, {data})
}

export const CONFIGURE_SUBSCRIPTION_STATUS = (data) => {
    // raw json data
    // const data = {
    //     "userId": "6201272e317b3c88d760a64d",
    //     "type": "copyTrader",
    //     "exchange": "testnet-binanceusdm",
    //     "capitalPercent": 10
    // }
    return AxiosInstance.post(`/user/configure-subscription`, data)
}

export const NEW_FAQ = (data) => {
    // raw json data
    return AxiosInstance.put(`/user/faq`, data)
}

export const UPDATE_FAQ = (data) => {
    // raw json data
    // const data = {
    //     "type": "copyTrader",
    //     "title": "Question 4",
    //     "answer": "answer to Question 4",
    //     "faqId": "6228ce89d4ae0e26f138bbcc"
    // }
    return AxiosInstance.post(`/user/faq`, data)
}

export const DELETE_FAQ = (data) => {
    // raw json data
    // const data = {
    //     "type": "copyTrader",
    //     "faqId": "6228ce89d4ae0e26f138bbcc"
    // }
    return AxiosInstance.delete(`/user/faq`, {data})
}

export const REFRESH_TOKEN = (data) => {
    // raw json data
    // const data = {
    //     "refreshToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjVkMjY0ZGUzNmQ2ZmEyY2M5MDRlNWMiLCJpYXQiOjE2NTAyNzE4MjF9.7oa1IXb2WEZCgmyADF2DKCweYFvgTkSwEezR0rAtm2A"
    // }
    return AxiosInstance.post(`/user/refresh-token`, data)
}

export const GET_EXCHANGE_LIST = (data) => {
    return AxiosInstance.get(`/exchanges/list`)
}

export const GET_COPYTRADERS = (data) => {
    const page = 0
    const pagination = 5
    const orderBy = "lname"
    const type = "highToLow"
    return AxiosInstance.get(`/users/copy-traders?page=${page}&pagination=${pagination}&orderBy=${orderBy}&type=${type}`)
}

export const GET_SIGNALPROVIDERS = (data) => {
    const page = 0
    const pagination = 5
    const orderBy = "lname"
    const type = "highToLow"
    return AxiosInstance.get(`/users/signal-providers?page=${page}&pagination=${pagination}&orderBy=${orderBy}&type=${type}`)
}

export const GET_COMPARISON_PAGE_COINS = () => {
    return AxiosInstance.get(`/exchanges/comparison-page-coins`)   
}

export const UPLOAD_AVATAR = (data) => {
    const { avatar } = data
    const formData = new FormData();
    formData.append("avatar", avatar)
    return AxiosInstance.put(`/user/upload-avatar`, formData)
}

export const GET_SIGNAL_HISTORY = (data) => {
    const page = 0, count = 5;
    return AxiosInstance.get(`/user/signal-history?page=${page}&pagination=${count}`)
}

export const GET_PORTFOLIO_VALUE = () => {
    return AxiosInstance.get(`/user/portfolio/portfolio-value`)
}

export const GET_BEST_COPTY_TRADERS = () => {
    return AxiosInstance.get(`/user/portfolio/best-copytraders`)
}

export const GET_BEST_SIGNAL_PROVIDERS = () => {
    return AxiosInstance.get(`/user/portfolio/best-signalproviders`)
}

export const GET_MONTHLY_SCORE_CARD = () => {
    return AxiosInstance.get(`/user/portfolio/monthly-score-card`)
}

export const GET_MONTHLY_SIGNAL_SUBSCRIBERS_COUNT = () => {
    return AxiosInstance.get(`/user/portfolio/monthly-signal-subscribers-count`)
}

export const GET_MONTHLY_COPYTRADER_SUBSCRIBERS_COUNT = () => {
    return AxiosInstance.get(`/user/portfolio/monthly-copytrader-subscribers-count`)
}

export const TEST_SERVER = () => {
    return AxiosInstance.get(`/test`);
}