import { createReducer } from "@reduxjs/toolkit"
import { AppActions } from "../actions";
const defaultState = {
    loading: false
}

const appReducer = createReducer(defaultState, {
    [AppActions.setLoadingAction]: (state, action) => {
        state.loading = true;
    }
});

export default appReducer