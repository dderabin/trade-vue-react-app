import { createReducer } from "@reduxjs/toolkit"
import { AppActions } from "../actions";

const defaultState = {
    loading: false,
    exchangePlatforms: [],
    copyTraders: [],
    signalProviders: [],
    coinList: [],
    successMessage: null,
    failMessage: null,
    userInfo: {},
    copyTrader: {},
    signalProvider: {},
    notifications: [],
    email: null,
    userName: null,
    selfSignals: [],
    traderHistory: [],
    totalTrades: 0,
    totalInvestment: 0,
    profit: 0,
    portfolioValue: 0,
    avgProfit: 0,
    avgLoss: 0,
    monthlyScorecard: [],
}

const appReducer = createReducer(defaultState, {
    [AppActions.terminateStatesAction]: (state) => {
        state.loading = false;
        state.exchangePlatforms = [];
        state.copyTraders = [];
        state.signalProviders = [];
        state.coinList = [];
        state.successMessage = null;
        state.failMessage = null;
        state.userInfo = {};
        state.copyTrader = {};
        state.signalProvider = {};
        state.notifications = [];
        state.email = null;
        state.userName = null;
        state.selfSignals = [];
        state.traderHistory = [];
        state.totalTrades = 0;
        state.totalInvestment = 0;
        state.profit = 0;
        state.portfolioValue = 0;
        state.avgProfit = 0;
        state.avgLoss = 0;
        state.monthlyScorecard = [];
    },
    [AppActions.monthlyScorecardFetchSuccessAction]: (state, action) => {
        state.monthlyScorecard = action.payload
    },
    [AppActions.portfolioValueFetchSuccessAction]: (state, action) => {
        state.totalTrades = action.payload.totalTrades
        state.totalInvestment = action.payload.totalInvestment
        state.profit = action.payload.profit
        state.portfolioValue = action.payload.portfolioValue
        state.avgProfit = action.payload.avgProfit
        state.avgLoss = action.payload.avgLoss
    },
    [AppActions.userUploadDocumentsSuccessAction]: (state, action) => {
        state.userInfo.files = action.payload
    },
    [AppActions.updateFAQSuccessAction]: (state, action) => {
        const {faqId, ...faq} = action.payload
        let removedOld = [];
        if (faq.type === 'copyTrader') {
            removedOld = state.copyTrader.FAQs.filter(item => item._id !== faqId)
            state.copyTrader.FAQs = [...removedOld, faq]
        } else {
            removedOld = state.signalProvider.FAQs.filter(item => item._id !== faqId)
            state.signalProvider.FAQs = [...removedOld, faq]
        }
    },
    [AppActions.deleteFAQSuccessAction]: (state, action) => {
        const { type, faqId } = action.payload
        if (type === 'copyTrader') {
            state.copyTrader.FAQs = state.copyTrader.FAQs.filter(({_id}) => _id !== faqId)
        } else {
            state.signalProvider.FAQs = state.signalProvider.FAQs.filter(({_id}) => _id !== faqId)
        }
    },
    [AppActions.addFAQSuccessAction]: (state, action) => {
        const { type } = action.payload
        if (type === 'copyTrader') {
            state.copyTrader.FAQs = [...state.copyTrader.FAQs, action.payload]
        } else {
            state.signalProvider.FAQs = [...state.signalProvider.FAQs, action.payload]
        }       
    },
    [AppActions.userInfoUpdateSuccessAction]: (state, action) => {
        const { userName } = action.payload;
        state.userInfo = {...state.userInfo, ...action.payload}
        state.userName = userName;
    },
    [AppActions.apiFecthingAction]: (state, action) => {
        state.loading = true;
    },
    [AppActions.deleteDocumentSuccessAction]: (state, action) => {
        delete state.userInfo.files[action.payload];
        state.successMessage = "Success";
    },
    [AppActions.exchangePlatformCUSuccessAction]: (state, action) => {
        const { msg = "Performed successfully" } = action.payload;
        state.successMessage = msg;
    },
    [AppActions.sagaSuccessAction]: (state, action) => {
        const { msg = null } = action.payload;
        const { message = null } = action.payload;
        state.successMessage = msg || message || "Performed successfully";
    },
    [AppActions.sagaFailAction]: (state, action) => {
        const { error = null } = action.payload;
        const { msg = null } = error;
        state.failMessage = msg || error || "Something went wrong";
    },
    [AppActions.exchangePlatformsFetchSuccessAction]: (state, action) => {
        state.exchangePlatforms = action.payload;
    },
    [AppActions.copyTradersFetchSuccessAction]: (state, action) => {
        state.copyTraders = action.payload
    },
    [AppActions.signalProvidersFetchSuccessAction]: (state, action) => {
        state.signalProviders = action.payload
    },
    [AppActions.exchangeComparisonFetchSuccessAction]: (state, action) => {
        state.coinList = action.payload
    },
    [AppActions.messageConsumedAction]: (state) => {
        state.successMessage = null
        state.failMessage = null
    },
    [AppActions.userProfileFetchSuccessAction]: (state, action) => {
        const { 
            userInfo, 
            copyTrader,
            signalProvider,
            notifications,
            email,
            userName,
            selfSignals,
            _id,
        } = action.payload
        state.userInfo = userInfo
        state.copyTrader = copyTrader
        state.signalProvider = signalProvider
        state.notifications = notifications
        state.email = email
        state.userName = userName
        state.selfSignals = selfSignals
        state.userId = _id
    }
});

export default appReducer