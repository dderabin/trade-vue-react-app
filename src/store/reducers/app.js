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
    },
    [AppActions.apiFecthingAction]: (state, action) => {
        state.loading = true;
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
            email
        } = action.payload
        state.userInfo = userInfo
        state.copyTrader = copyTrader
        state.signalProvider = signalProvider
        state.notifications = notifications
        state.email = email
    }
});

export default appReducer