import { createReducer } from "@reduxjs/toolkit"
import { AppActions } from "../actions";

const defaultState = {
    loading: false,
    exchangePlatforms: [],
    successMessage: null,
    failMessage: null,
}

const appReducer = createReducer(defaultState, {
    [AppActions.apiFecthingAction]: (state, action) => {
        state.loading = true;
    },
    [AppActions.exchangePlatformCUSuccessAction]: (state, action) => {
        state.successMessage = action.payload.msg || "Message arrived"
    },
    [AppActions.exchangePlatformCUFailAction]: (state, action) => {
        state.failMessage = action.payload.msg || "Something went wrong"
    },
    [AppActions.exchangePlatformsFetchSuccessAction]: (state, action) => {
        state.exchangePlatforms = action.payload;
    },
    [AppActions.messageConsumedAction]: (state) => {
        state.successMessage = null
        state.failMessage = null
    },
    [AppActions.exchangePlatformsFetchFailAction]: (state, action) => {
        console.log(action)
    }
});

export default appReducer