import { combineReducers } from "redux";
import app from './app';
import auth from './auth';

const rootReducer = combineReducers({
    appState: app,
    authState: auth
})

export default rootReducer;