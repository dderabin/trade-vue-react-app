import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from './reducers';
import rootSaga from './sagas';
import 'antd/dist/antd.min.css';
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the store
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(sagaMiddleware, logger)
})

sagaMiddleware.run(rootSaga);

export default store;