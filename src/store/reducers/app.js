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
    [AppActions.messageConsumedAction]: (state) => {
        state.successMessage = null
        state.failMessage = null
    },
});

export default appReducer