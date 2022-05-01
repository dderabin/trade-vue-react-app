import { createReducer } from "@reduxjs/toolkit"
import { AppActions } from "../actions";

export const defaultState = {
    isAuthenticated: false,
    isInitialised: false,
    user: null,
}

const authReducer = createReducer(defaultState, {
    [AppActions.apiFecthingAction]: (state, action) => {
        state.loading = true;
    },
    [AppActions.initAction]: (state, action) => {
        const { isAuthenticated, user } = action.payload
        state.isAuthenticated = isAuthenticated
        state.user = user
        state.isInitialised = true
    },
    [AppActions.userLogInSuccessAction]: (state, action) => {
        const { user } = action.payload
        state.isAuthenticated = true
        state.user = user
    },
    [AppActions.userLogInFailAction]: (state, action) => {
        console.log(action)
    },
    [AppActions.logoutAction]: (state, action) => {
        state.isAuthenticated = false
        state.user = null
    },
    [AppActions.userSignUpSuccessAction]: (state, action) => {
        const { user } = action.payload
        state.isAuthenticated = true
        state.user = user
    }
});

export default authReducer