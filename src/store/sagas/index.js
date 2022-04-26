import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as Api from '../api'
import { AppActions } from '../actions'

function* performExchangeCU(action) {
    try {
        console.log('saga calling')
        const result = yield call(Api.ADD_UPDATE_EXCHANGE, action.payload)
        yield put(AppActions.exchangeCUSuccessAction, result)
    } catch (e) {
        yield put(AppActions.exchangeCUFailAction, {message: e.message})
    }
}

function* exchangeCU() {
    yield takeLatest(AppActions.exchangeCUAction.toString(), performExchangeCU)
}

export default function* rootSaga() {
    yield all([
        exchangeCU()
    ])
}