import apiClient from '../http-common';

export const ADD_NEW_SIGNAL = () => {
    // raw json body
    const body = {
        "type": "copyTrader",
        "exchangePlatform": "testnet-binanceusdm",
        "from": "BTC",
        "to": "USDT",
        "signalType": "Spot",
        "stopLoss": 28000,
        "leverage": 5,
        "entryPrice": 30000,
        "amount": 10,
        "targets": [
            {
                "price": 31000,
                "amount": 50
            },
            {
                "price": 32000,
                "amount": 50
            }
        ]
    }
    return apiClient.put(`/user/trade/signal`, body)
}

export const UPDATE_SIGNAL = () => {
    // raw json body
    const body = {
        "id": "624dfb860248548c445927eb",
        "entryPrice": 2200,
        "stopLoss": 25000,
        "targets": [
            {
                "price": 31000,
                "amount": 5
            },
            {
                "price": 32000,
                "amount": 5
            }
        ]
    }
    return apiClient.post(`/user/trade/signal`, body)
}

export const SIGNUP_USER = () => {
    // form data body
    const body = {
        "email": "asdasd@dasd.con",
        "password": "asdasdasd"
    }
    return apiClient.post(`/user/new`, body)
}

export const LOGIN_USER = () => {
    // raw json body
    const body = {
        "email": "asdasd@dasd.con",
        "password": "asdasdasd"
    }
    return apiClient.post(`/user/login`, body);
}

export const GET_PROFILE = () => {
    return apiClient.get(`/user/profile`);
}

export const ADD_UPDATE_EXCHANGE = () => {
    // raw json body
    const body = {
        "exchangePlatform": "testnet-binanceusdm",
        "apiKey": "asdsa",
        "apiSecret": "sad"
    }
    return apiClient.put(`/user/exchanges`, body)
}

export const REMOVE_EXCHANGE = () => {
    // raw json body
    const body = {
        "exchangePlatform": "testnet-binanceusdm"
    }
    return apiClient.delete(`/user/exchanges`, body)
}

export const ADD_USER_INFO = () => {
    // raw json body
    const body = {
        "userName": "JohnDoe3",
        "firstName": "John",
        "middleName": "dd", 
        "lastName": "Doe",
        "gender": "male", 
        "birthDate": "1997-07-16",
        "country": "US",
        "state":"somewhere",
        "city":"someCity",
        "zipCode":123465,
        "address":"adssss"
    }
    return apiClient.put(`/user/user-info`, body)
}

export const ENABLE_COPYTRADER = () => {
    // no body
    const body = {        
    }
    return apiClient.post(`/user/enable-copy-trader`, body)
}

export const SUBSCRIBE_TO_COPYTRADER_OR_SIGNALPROVIDER = () => {
    // raw json body
    const body = {
        "userId": "6201272e317b3c88d760a64d",
        "type": "copyTrader",
        "exchange": "testnet-binanceusdm",
        "capitalPercent": 10
    }
    return apiClient.post(`/user/subscribe`, body)
}

export const ENABLE_SIGNALPROVIDER = () => {
    // no body
    const body = {        
    }
    return apiClient.post(`/user/enable-signal-provider`, body)
}

export const UPLOAD_DOCUMENTS = () => {
    const file1 = {}
    const file2 = {}
    // form-data body
    const body = {
        "nationalId": file1,
        "drivingLicense": file2,
    }
    return apiClient.put(`/user/upload-documents`, body)
}

export const DELETE_DOCUMENT = () => {
    // raw json body
    const body = {
        "documentType": "drivingLisence"
    }
    return apiClient.delete(`/user/upload-documents`, body)
}

export const CONFIGURE_SUBSCRIPTION_STATUS = () => {
    // raw json body
    const body = {
        "userId": "6201272e317b3c88d760a64d",
        "type": "copyTrader",
        "exchange": "testnet-binanceusdm",
        "capitalPercent": 10
    }
    return apiClient.post(`/user/configure-subscription`, body)
}

export const NEW_FAQ = () => {
    // raw json body
    const body = {
        "type": "copyTrader",
        "title": "Question 1",
        "answer": "answer to Question 1"
    }
    return apiClient.put(`/user/faq`, body)
}

export const UPDATE_FAQ = () => {
    // raw json body
    const body = {
        "type": "copyTrader",
        "title": "Question 4",
        "answer": "answer to Question 4",
        "faqId": "6228ce89d4ae0e26f138bbcc"
    }
    return apiClient.post(`/user/faq`, body)
}

export const DELETE_FAQ = () => {
    // raw json body
    const body = {
        "type": "copyTrader",
        "faqId": "6228ce89d4ae0e26f138bbcc"
    }
    return apiClient.delete(`/user/faq`, body)
}

export const REFRESH_TOKEN = () => {
    // raw json body
    const body = {
        "refreshToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjVkMjY0ZGUzNmQ2ZmEyY2M5MDRlNWMiLCJpYXQiOjE2NTAyNzE4MjF9.7oa1IXb2WEZCgmyADF2DKCweYFvgTkSwEezR0rAtm2A"
    }
    return apiClient.post(`/user/refresh-token`, body)
}

export const GET_EXCHANGE_LIST = () => {
    return apiClient.get(`/exchanges/list`)
}

export const GET_COPYTRADERS = () => {
    const page = 0
    const pagination = 5
    const orderBy = "lname"
    const type = "highToLow"
    return apiClient.get(`/users/copy-traders?page=${page}&pagination=${pagination}&orderBy=${orderBy}&type=${type}`)
}

export const GET_SIGNALPROVIDERS = () => {
    const page = 0
    const pagination = 5
    const orderBy = "lname"
    const type = "highToLow"
    return apiClient.get(`/users/signal-providers?page=${page}&pagination=${pagination}&orderBy=${orderBy}&type=${type}`)
}

export const TEST_SERVER = () => {
    return apiClient.get(`/test`);
}