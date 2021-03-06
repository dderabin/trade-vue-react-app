import { createReducer } from "@reduxjs/toolkit"
import { AppActions } from "../actions";
import { COPY_TRADER } from "../consts";

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
    historyList: [],
    totalTrades: 0,
    totalInvestment: 0,
    profit: 0,
    portfolioValue: 0,
    avgProfit: 0,
    avgLoss: 0,
    monthlyScorecard: [],
    subscribersForCopyTraders: [],
    subscribersForSignalProviders: [],
    traderSubscription: {},
    signalSubscription: {},
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
        state.historyList = [];
        state.totalTrades = 0;
        state.totalInvestment = 0;
        state.profit = 0;
        state.portfolioValue = 0;
        state.avgProfit = 0;
        state.avgLoss = 0;
        state.monthlyScorecard = [];
        state.subscribersForCopyTraders = [];
        state.subscribersForSignalProviders = [];
        state.traderSubscription = {};
        state.signalSubscription = {};
    },
    [AppActions.loadingAction]: (state) => {
        state.loading = true;
    },
    [AppActions.traderSubscriptionFetchSuccessAction]: (state, action) => {
        state.loading = false;
        state.traderSubscription = action.payload
    },
    [AppActions.signalSubscriptionFetchSuccessAction]: (state, action) => {
        state.loading = false;
        state.signalSubscription = action.payload
    },
    [AppActions.subscribersFetchSuccessAction]: (state, action) => {
        state.loading = false
        const { subscribers, type } = action.payload;
        if (type === 'copyTrader') state.subscribersForCopyTraders = subscribers;
        else state.subscribersForSignalProviders = subscribers;
    },
    [AppActions.userSubscribeSuccessAction]: (state, action) => {
        state.loading = false
        const { type, userId, exchange, capitalPercent } = action.payload
        let { 
            copyTrader: { subscriptedTo: copySubscriptedTo },
            signalProvider: { subscriptedTo: signalSubscriptedTo },
        } = state;
        if (type === COPY_TRADER) {
            copySubscriptedTo = [...copySubscriptedTo, {userId, capitalPercent, exchange}];
            state.copyTrader.subscriptedTo = [...copySubscriptedTo];
            state.copyTraders = state.copyTraders.map(item => ({...item, subscribersCount: item.subscribersCount + item._id === userId ? 1 : 0}))
        } else {
            signalSubscriptedTo = [...signalSubscriptedTo, {userId, capitalPercent, exchange}];
            state.signalProvider.subscriptedTo = [...signalSubscriptedTo];
            state.signalProviders = state.signalProviders.map(item => ({...item, subscribersCount: item.subscribersCount + item._id === userId ? 1 : 0}))
        }
    },
    [AppActions.monthlyScorecardFetchSuccessAction]: (state, action) => {
        state.loading = false
        state.monthlyScorecard = action.payload
    },
    [AppActions.portfolioValueFetchSuccessAction]: (state, action) => {
        state.loading = false
        state.totalTrades = action.payload.totalTrades
        state.totalInvestment = action.payload.totalInvestment
        state.profit = action.payload.profit
        state.portfolioValue = action.payload.portfolioValue
        state.avgProfit = action.payload.avgProfit
        state.avgLoss = action.payload.avgLoss
    },
    [AppActions.userUploadDocumentsSuccessAction]: (state, action) => {
        state.loading = false
        state.userInfo.files = action.payload
    },
    [AppActions.signalHistoryFetchSuccessAction]: (state, action) => {
        state.loading = false
        state.historyList = action.payload
    },
    [AppActions.updateFAQSuccessAction]: (state, action) => {
        state.loading = false
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
        state.loading = false
        const { type, faqId } = action.payload
        if (type === 'copyTrader') {
            state.copyTrader.FAQs = state.copyTrader.FAQs.filter(({_id}) => _id !== faqId)
        } else {
            state.signalProvider.FAQs = state.signalProvider.FAQs.filter(({_id}) => _id !== faqId)
        }
    },
    [AppActions.addFAQSuccessAction]: (state, action) => {
        state.loading = false
        const { type } = action.payload
        if (type === 'copyTrader') {
            state.copyTrader.FAQs = [...state.copyTrader.FAQs, action.payload]
        } else {
            state.signalProvider.FAQs = [...state.signalProvider.FAQs, action.payload]
        }       
    },
    [AppActions.userInfoUpdateSuccessAction]: (state, action) => {
        state.loading = false
        const { userName } = action.payload;
        state.userInfo = {...state.userInfo, ...action.payload}
        state.userName = userName;
    },
    [AppActions.apiFecthingAction]: (state, action) => {
        state.loading = false
        state.loading = true;
    },
    [AppActions.deleteDocumentSuccessAction]: (state, action) => {
        state.loading = false
        delete state.userInfo.files[action.payload];
        state.successMessage = "Success";
    },
    [AppActions.exchangePlatformCUSuccessAction]: (state, action) => {
        state.loading = false
        const { msg = "Performed successfully" } = action.payload;
        state.successMessage = msg;
    },
    [AppActions.sagaSuccessAction]: (state, action) => {
        state.loading = false
        const { msg = null } = action.payload;
        const { message = null } = action.payload;
        state.successMessage = msg || message || "Performed successfully";
    },
    [AppActions.sagaFailAction]: (state, action) => {
        state.loading = false
        const { error = null } = action.payload;
        const msg = error?.msg || null;
        state.failMessage = msg || error || "Something went wrong";
    },
    [AppActions.exchangePlatformsFetchSuccessAction]: (state, action) => {
        state.loading = false
        state.exchangePlatforms = action.payload;
    },
    [AppActions.copyTradersFetchSuccessAction]: (state, action) => {
        state.loading = false
        state.copyTraders = action.payload
    },
    [AppActions.signalProvidersFetchSuccessAction]: (state, action) => {
        state.loading = false
        state.signalProviders = action.payload
    },
    [AppActions.exchangeComparisonFetchSuccessAction]: (state, action) => {
        state.loading = false
        state.coinList = action.payload
    },
    [AppActions.messageConsumedAction]: (state) => {
        state.loading = false
        state.successMessage = null
        state.failMessage = null
        state.loading = false
    },
    [AppActions.signalAddSuccessAction]: (state, action) => {
        state.loading = false
        state.historyList = [...state.historyList, action.payload.signalObject]
    },
    [AppActions.signalUpdateSuccessAction]: (state, action) => {
        const { id, entryPrice, stopLoss, targets } = action.payload;
        let updateItem = state.historyList.find(item => item._id === id)
        const restOrders = state.historyList.filter((item => item._id !== id))
        updateItem = {...updateItem, entryPrice, stopLoss, targets}
        state.historyList = [...restOrders, updateItem]
    },
    [AppActions.userProfileFetchSuccessAction]: (state, action) => {
        state.loading = false
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