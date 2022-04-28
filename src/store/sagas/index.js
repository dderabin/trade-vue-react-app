import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AppActions } from '../actions'
import * as Api from '../api'

function* performFetchExchanges(action) {
    try {
        const response = yield call(Api.GET_EXCHANGE_LIST, action.payload)
        yield put(AppActions.exchangeFetchSuccessAction(response.data))
    } catch (e) {
        yield put(AppActions.exchangeFetchFailAction(e.message))
    }
}

function* fetchExchangesSaga() {
    yield takeLatest(AppActions.exchangeFetchAction.toString(), performFetchExchanges)
}

function* performSignUp(action) {
    try {
        const response = yield call(Api.SIGNUP_USER, action.payload)
        yield put(AppActions.userSignUpSuccessAction(response.data))
    } catch (e) {
        yield put(AppActions.userSignUpFailAction(e.message))
    }
}

function* signUpSaga() {
    yield takeLatest(AppActions.userSignUpAction.toString(), performSignUp)
}

function* performLogIn(action) {
    try {
        const response = yield call(Api.LOGIN_USER, action.payload)
        yield put(AppActions.userLogInSuccessAction(response.data))
    } catch (e) {
        yield put(AppActions.userLogInFailAction(e.message))
    }
}

function* logInSaga() {
    yield takeLatest(AppActions.userLogInAction.toString(), performLogIn)
}

function* performAddSignal(action) {
    try {
        const response = yield call(Api.ADD_NEW_SIGNAL, action.payload)
        yield put(AppActions.signalAddSuccessAction(response.data))
    } catch (e) {
        yield put(AppActions.signalAddFailAction(e.message))
    }
}

function* addSignalSaga() {
    yield takeLatest(AppActions.signalAddAction.toString(), performAddSignal)
}

function* performUpdateSignal(action) {
    try {
        const response = yield call(Api.UPDATE_SIGNAL, action.payload)
        yield put(AppActions.signalUpdateSuccessAction(response.data))
    } catch (e) {
        yield put(AppActions.signalUpdateFailAction(e.message))
    }
}

function* updateSignalSaga() {
    yield takeLatest(AppActions.signalUpdateAction.toString(), performUpdateSignal)
}

function* performFetchProfile(action) {
    try {
        const response = yield call(Api.GET_PROFILE, action.payload)
        yield put(AppActions.userProfileFetchSuccessAction(response.data))
    } catch (e) {
        yield put(AppActions.userProfileFetchFailAction(e.message))
    }
}

function* fetchProfileSaga() {
    yield takeLatest(AppActions.userProfileFetchAction.toString(), performFetchProfile)
}

function* performExchangeCU(action) {
    try {
        const response = yield call(Api.ADD_UPDATE_EXCHANGE, action.payload)
        yield put(AppActions.exchangeCUSuccessAction(response.data))
    } catch (e) {
        yield put(AppActions.exchangeCUFailAction(e.message))
    }
}

function* exchangeCUSaga() {
    yield takeLatest(AppActions.exchangeCUAction.toString(), performExchangeCU)
}

function* performRemoveExchange(action) {
    try {
        const response = yield call(Api.REMOVE_EXCHANGE, action.payload)
        yield put(AppActions.exchangeDeleteSuccessAction(response.data))
    } catch (e) {
        yield put(AppActions.exchangeDeleteFailAction(e.message))
    }
}

function* removeExchangeSaga() {
    yield takeLatest(AppActions.exchangeDeleteAction.toString(), performRemoveExchange)
}

function* performUpdateUserInfo(action) {
    try {
        const response = yield call(Api.ADD_USER_INFO, action.payload)
        yield put(AppActions.userInfoUpdateSuccessAction(response.data))
    } catch (e) {
        yield put(AppActions.userInfoUpdateFailAction(e.message))
    }
}

function* updateUserInfoSaga() {
    yield takeLatest(AppActions.userInfoUpdateAction.toString(), performUpdateUserInfo)
}

function* performEnableCopyTrader(action) {
    try {
        const response = yield call(Api.ENABLE_COPYTRADER, action.payload)
        yield put(AppActions.userEnableCopyTraderSuccessAction(response.data))
    } catch (e) {
        yield put(AppActions.userEnableCopyTraderFailAction(e.message))
    }
}

function* enableCopyTraderSaga() {
    yield takeLatest(AppActions.userEnableCopyTraderAction.toString(), performEnableCopyTrader)
}

function* performSubscribe(action) {
    try {
        const response = yield call(Api.SUBSCRIBE_TO_COPYTRADER_OR_SIGNALPROVIDER, action.payload)
        yield put(AppActions.userSubscribeSuccessAction(response.data))
    } catch (e) {
        yield put(AppActions.userSubscribeFailAction(e.message))
    }
}

function* subscribeSaga() {
    yield takeLatest(AppActions.userSubscribeAction.toString(), performSubscribe)
}

function* performEnableSignalProvider(action) {
    try {
        const response = yield call(Api.ENABLE_SIGNALPROVIDER, action.payload)
        yield put(AppActions.userEnableSignalProviderSuccessAction(response.data))
    } catch (e) {
        yield put(AppActions.userEnableSignalProviderFailAction(e.message))
    }
}

function* enableSignalProviderSaga() {
    yield takeLatest(AppActions.userEnableSignalProviderAction.toString(), performEnableSignalProvider)
}

function* performUploadDocuments(action) {
    try {
        const response = yield call(Api.UPLOAD_DOCUMENTS, action.payload)
        yield put(AppActions.userUploadDocumentsSuccessAction(response.data))
    } catch (e) {
        yield put(AppActions.userUploadDocumentsFailAction(e.message))
    }
}

function* uploadDocumentsSaga() {
    yield takeLatest(AppActions.userUploadDocumentsAction.toString(), performUploadDocuments)
}

function* performDeleteDocument(action) {
    try {
        const response = yield call(Api.DELETE_DOCUMENT, action.payload)
        yield put(AppActions.deleteDocumentSuccessAction(response.data))
    } catch (e) {
        yield put(AppActions.deleteDocumentFailAction(e.message))
    }
}

function* deleteDocumentSaga() {
    yield takeLatest(AppActions.deleteDocumentAction.toString(), performDeleteDocument)
}

function* performConfigureSubscribe(action) {
    try {
        const response = yield call(Api.CONFIGURE_SUBSCRIPTION_STATUS, action.payload)
        yield put(AppActions.configureSubscriptionSuccessAction(response.data))
    } catch (e) {
        yield put(AppActions.configureSubscriptionFailAction(e.message))
    }
}

function* configureSubscribeSaga() {
    yield takeLatest(AppActions.configureSubscriptionAction.toString(), performConfigureSubscribe)
}

function* performNewFAQ(action) {
    try {
        const response = yield call(Api.NEW_FAQ, action.payload)
        yield put(AppActions.addFAQSuccessAction(response.data))
    } catch (e) {
        yield put(AppActions.addFAQFailAction(e.message))
    }
}

function* newFAQSaga() {
    yield takeLatest(AppActions.addFAQAction.toString(), performNewFAQ)
}

function* performUpdateFAQ(action) {
    try {
        const response = yield call(Api.UPDATE_FAQ, action.payload)
        yield put(AppActions.updateFAQSuccessAction(response.data))
    } catch (e) {
        yield put(AppActions.updateFAQFailAction(e.message))
    }
}

function* updateFAQSaga() {
    yield takeLatest(AppActions.updateFAQAction.toString(), performUpdateFAQ)
}

function* performDeleteFAQ(action) {
    try {
        const response = yield call(Api.DELETE_FAQ, action.payload)
        yield put(AppActions.deleteFAQSuccessAction(response.data))
    } catch (e) {
        yield put(AppActions.deleteFAQFailAction(e.message))
    }
}

function* deleteFAQSaga() {
    yield takeLatest(AppActions.deleteFAQAction.toString(), performDeleteFAQ)
}

function* performRefreshToken(action) {
    try {
        const response = yield call(Api.REFRESH_TOKEN, action.payload)
        yield put(AppActions.refreshTokenSuccessAction(response.data))
    } catch (e) {
        yield put(AppActions.refreshTokenFailAction(e.message))
    }
}

function* refreshTokenSaga() {
    yield takeLatest(AppActions.refreshTokenAction.toString(), performRefreshToken)
}

function* performFetchCopyTraders(action) {
    try {
        const response = yield call(Api.GET_COPYTRADERS, action.payload)
        yield put(AppActions.copytradersFetchSuccessAction(response.data))
    } catch (e) {
        yield put(AppActions.copytradersFetchFailAction(e.message))
    }
}

function* fetchCopyTradersSaga() {
    yield takeLatest(AppActions.copytradersFetchAction.toString(), performFetchCopyTraders)
}

function* performFetchSignalProviders(action) {
    try {
        const response = yield call(Api.GET_SIGNALPROVIDERS, action.payload)
        yield put(AppActions.signalProvidersFetchSuccessAction(response.data))
    } catch (e) {
        yield put(AppActions.signalProvidersFetchFailAction(e.message))
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