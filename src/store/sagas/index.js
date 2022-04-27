import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as Api from '../api'
import { AppActions } from '../actions'

function* performFetchExchanges(action) {
    try {
        const response = yield call(Api.GET_EXCHANGE_LIST, action.payload)
        yield put(AppActions.exchangeFetchSuccessAction, response)
    } catch (e) {
        yield put(AppActions.exchangeFetchFailAction, {message: e.message})
    }
}

function* fetchExchangesSaga() {
    yield takeLatest(AppActions.exchangeFetchAction.toString(), performFetchExchanges)
}

function* performSignUp(action) {
    try {
        const response = yield call(Api.SIGNUP_USER, action.payload)
        yield put(AppActions.userSignUpSuccessAction, response)
    } catch (e) {
        yield put(AppActions.userSignUpFailAction, {message: e.message})
    }
}

function* signUpSaga() {
    yield takeLatest(AppActions.userSignUpAction.toString(), performSignUp)
}

function* performLogIn(action) {
    try {
        const response = yield call(Api.LOGIN_USER, action.payload)
        yield put(AppActions.userLogInSuccessAction, response)
    } catch (e) {
        yield put(AppActions.userLogInFailAction, {message: e.message})
    }
}

function* logInSaga() {
    yield takeLatest(AppActions.userLogInAction.toString(), performLogIn)
}

function* performAddSignal(action) {
    try {
        const response = yield call(Api.ADD_NEW_SIGNAL, action.payload)
        yield put(AppActions.signalAddSuccessAction, response)
    } catch (e) {
        yield put(AppActions.signalAddFailAction, {message: e.message})
    }
}

function* addSignalSaga() {
    yield takeLatest(AppActions.signalAddAction.toString(), performAddSignal)
}

function* performUpdateSignal(action) {
    try {
        const response = yield call(Api.UPDATE_SIGNAL, action.payload)
        yield put(AppActions.signalUpdateSuccessAction, response)
    } catch (e) {
        yield put(AppActions.signalUpdateFailAction, {message: e.message})
    }
}

function* updateSignalSaga() {
    yield takeLatest(AppActions.signalUpdateAction.toString(), performUpdateSignal)
}

function* performFetchProfile(action) {
    try {
        const response = yield call(Api.GET_PROFILE, action.payload)
        yield put(AppActions.userProfileFetchSuccessAction, response)
    } catch (e) {
        yield put(AppActions.userProfileFetchFailAction, {message: e.message})
    }
}

function* fetchProfileSaga() {
    yield takeLatest(AppActions.userProfileFetchAction.toString(), performFetchProfile)
}

function* performExchangeCU(action) {
    try {
        const response = yield call(Api.ADD_UPDATE_EXCHANGE, action.payload)
        yield put(AppActions.exchangeCUSuccessAction, response)
    } catch (e) {
        yield put(AppActions.exchangeCUFailAction, {message: e.message})
    }
}

function* exchangeCUSaga() {
    yield takeLatest(AppActions.exchangeCUAction.toString(), performExchangeCU)
}

function* performRemoveExchange(action) {
    try {
        const response = yield call(Api.REMOVE_EXCHANGE, action.payload)
        yield put(AppActions.exchangeDeleteSuccessAction, response)
    } catch (e) {
        yield put(AppActions.exchangeDeleteFailAction, {message: e.message})
    }
}

function* removeExchangeSaga() {
    yield takeLatest(AppActions.exchangeDeleteAction.toString(), performRemoveExchange)
}

function* performUpdateUserInfo(action) {
    try {
        const response = yield call(Api.ADD_USER_INFO, action.payload)
        yield put(AppActions.userInfoUpdateSuccessAction, response)
    } catch (e) {
        yield put(AppActions.userInfoUpdateFailAction, {message: e.message})
    }
}

function* updateUserInfoSaga() {
    yield takeLatest(AppActions.userInfoUpdateAction.toString(), performUpdateUserInfo)
}

function* performEnableCopyTrader(action) {
    try {
        const response = yield call(Api.ENABLE_COPYTRADER, action.payload)
        yield put(AppActions.userEnableCopyTraderSuccessAction, response)
    } catch (e) {
        yield put(AppActions.userEnableCopyTraderFailAction, {message: e.message})
    }
}

function* enableCopyTraderSaga() {
    yield takeLatest(AppActions.userEnableCopyTraderAction.toString(), performEnableCopyTrader)
}

function* performSubscribe(action) {
    try {
        const response = yield call(Api.SUBSCRIBE_TO_COPYTRADER_OR_SIGNALPROVIDER, action.payload)
        yield put(AppActions.userSubscribeSuccessAction, response)
    } catch (e) {
        yield put(AppActions.userSubscribeFailAction, {message: e.message})
    }
}

function* subscribeSaga() {
    yield takeLatest(AppActions.userSubscribeAction.toString(), performSubscribe)
}

function* performEnableSignalProvider(action) {
    try {
        const response = yield call(Api.ENABLE_SIGNALPROVIDER, action.payload)
        yield put(AppActions.userEnableSignalProviderSuccessAction, response)
    } catch (e) {
        yield put(AppActions.userEnableSignalProviderFailAction, {message: e.message})
    }
}

function* enableSignalProviderSaga() {
    yield takeLatest(AppActions.userEnableSignalProviderAction.toString(), performEnableSignalProvider)
}

function* performUploadDocuments(action) {
    try {
        const response = yield call(Api.UPLOAD_DOCUMENTS, action.payload)
        yield put(AppActions.userUploadDocumentsSuccessAction, response)
    } catch (e) {
        yield put(AppActions.userUploadDocumentsFailAction, {message: e.message})
    }
}

function* uploadDocumentsSaga() {
    yield takeLatest(AppActions.userUploadDocumentsAction.toString(), performUploadDocuments)
}

function* performDeleteDocument(action) {
    try {
        const response = yield call(Api.DELETE_DOCUMENT, action.payload)
        yield put(AppActions.deleteDocumentSuccessAction, response)
    } catch (e) {
        yield put(AppActions.deleteDocumentFailAction, {message: e.message})
    }
}

function* deleteDocumentSaga() {
    yield takeLatest(AppActions.deleteDocumentAction.toString(), performDeleteDocument)
}

function* performConfigureSubscribe(action) {
    try {
        const response = yield call(Api.CONFIGURE_SUBSCRIPTION_STATUS, action.payload)
        yield put(AppActions.configureSubscriptionSuccessAction, response)
    } catch (e) {
        yield put(AppActions.configureSubscriptionFailAction, {message: e.message})
    }
}

function* configureSubscribeSaga() {
    yield takeLatest(AppActions.configureSubscriptionAction.toString(), performConfigureSubscribe)
}

function* performNewFAQ(action) {
    try {
        const response = yield call(Api.NEW_FAQ, action.payload)
        yield put(AppActions.addFAQSuccessAction, response)
    } catch (e) {
        yield put(AppActions.addFAQFailAction, {message: e.message})
    }
}

function* newFAQSaga() {
    yield takeLatest(AppActions.addFAQAction.toString(), performNewFAQ)
}

function* performUpdateFAQ(action) {
    try {
        const response = yield call(Api.UPDATE_FAQ, action.payload)
        yield put(AppActions.updateFAQSuccessAction, response)
    } catch (e) {
        yield put(AppActions.updateFAQFailAction, {message: e.message})
    }
}

function* updateFAQSaga() {
    yield takeLatest(AppActions.updateFAQAction.toString(), performUpdateFAQ)
}

function* performDeleteFAQ(action) {
    try {
        const response = yield call(Api.DELETE_FAQ, action.payload)
        yield put(AppActions.deleteFAQSuccessAction, response)
    } catch (e) {
        yield put(AppActions.deleteFAQFailAction, {message: e.message})
    }
}

function* deleteFAQSaga() {
    yield takeLatest(AppActions.deleteFAQAction.toString(), performDeleteFAQ)
}

function* performRefreshToken(action) {
    try {
        const response = yield call(Api.REFRESH_TOKEN, action.payload)
        yield put(AppActions.refreshTokenSuccessAction, response)
    } catch (e) {
        yield put(AppActions.refreshTokenFailAction, {message: e.message})
    }
}

function* refreshTokenSaga() {
    yield takeLatest(AppActions.refreshTokenAction.toString(), performRefreshToken)
}

function* performFetchCopyTraders(action) {
    try {
        const response = yield call(Api.GET_COPYTRADERS, action.payload)
        yield put(AppActions.copytradersFetchSuccessAction, response)
    } catch (e) {
        yield put(AppActions.copytradersFetchFailAction, {message: e.message})
    }
}

function* fetchCopyTradersSaga() {
    yield takeLatest(AppActions.copytradersFetchAction.toString(), performFetchCopyTraders)
}

function* performFetchSignalProviders(action) {
    try {
        const response = yield call(Api.GET_SIGNALPROVIDERS, action.payload)
        yield put(AppActions.signalProvidersFetchSuccessAction, response)
    } catch (e) {
        yield put(AppActions.signalProvidersFetchFailAction, {message: e.message})
    }
}

function* fetchSignalProvidersSaga() {
    yield takeLatest(AppActions.signalProvidersFetchAction.toString(), performFetchSignalProviders)
}

export default function* rootSaga() {
    yield all([
        logInSaga(),
        signUpSaga(),
        exchangeCUSaga(),
        fetchExchangesSaga(),
        addSignalSaga(),
        updateSignalSaga(),
        fetchProfileSaga(),
        exchangeCUSaga(),
        removeExchangeSaga(),
        updateUserInfoSaga(),
        enableCopyTraderSaga(),
        subscribeSaga(),
        enableSignalProviderSaga(),
        uploadDocumentsSaga(),
        deleteDocumentSaga(),
        configureSubscribeSaga(),
        newFAQSaga(),
        updateFAQSaga(),
        deleteFAQSaga(),
        refreshTokenSaga(),
        fetchCopyTradersSaga(),
        fetchSignalProvidersSaga(),
    ])
}