import { createReducer } from "@reduxjs/toolkit"
import { AppActions } from "../actions";
const defaultState = {
    loading: false
}

const appReducer = createReducer(defaultState, {
    [AppActions.apiFecthingAction]: (state, action) => {
        state.loading = true;
    },
    [AppActions.exchangeCUSuccessAction]: (state, action) => {
        console.log(action)
    },
    [AppActions.exchangeCUFailAction]: (state, action) => {
        console.log(action)
    }
});

export default appReducer