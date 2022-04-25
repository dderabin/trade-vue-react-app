import { combineReducers } from "redux";
import app from './app';

const rootReducer = combineReducers({
    appState: app
})

export default rootReducer;