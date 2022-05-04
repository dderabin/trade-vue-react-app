import { all, call, put, takeLatest, takeLeading } from 'redux-saga/effects';
import { AppActions } from '../actions'
import * as Api from '../api'

function* performFetchExchangePlatforms(action) {
    try {
        const response = yield call(Api.GET_EXCHANGE_LIST, action.payload)
        yield put(AppActions.exchangePlatformsFetchSuccessAction(response.data))
    } catch (e) {
        yield put(AppActions.sagaFailAction(e))
    }
}

function* fetchExchangePlatformsSaga() {
    yield takeLatest(AppActions.exchangePlatformsFetchAction.toString(), performFetchExchangePlatforms)
}

function* performSignUp(action) {
    try {
        const response = yield call(Api.SIGNUP_USER, action.payload)
        yield put(AppActions.userSignUpSuccessAction(response.data))
    } catch (e) {
        yield put(AppActions.sagaFailAction(e))
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
        yield put(AppActions.sagaFailAction(e))
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
        yield put(AppActions.sagaFailAction(e))
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
        yield put(AppActions.sagaFailAction(e))
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
        yield put(AppActions.sagaFailAction(e))
    }
}

function* fetchProfileSaga() {
    yield takeLatest(AppActions.userProfileFetchAction.toString(), performFetchProfile)
}

function* performExchangePlatformCU(action) {
    try {
        const response = yield call(Api.ADD_UPDATE_EXCHANGE, action.payload)
        yield put(AppActions.sagaSuccessAction(response.data))
    } catch (e) {
        yield put(AppActions.sagaFailAction(e))
    }
}

function* exchangePlatformCUSaga() {
    yield takeLeading(AppActions.exchangePlatformCUAction.toString(), performExchangePlatformCU)
}

function* performRemoveExchangePlatform(action) {
    try {
        const response = yield call(Api.REMOVE_EXCHANGE, action.payload)
        yield put(AppActions.sagaSuccessAction(response.data))
    } catch (e) {
        yield put(AppActions.sagaFailAction(e))
    }
}

function* removeExchangePlatformSaga() {
    yield takeLatest(AppActions.exchangePlatformDeleteAction.toString(), performRemoveExchangePlatform)
}

function* performUpdateUserInfo(action) {
    try {
        const response = yield call(Api.ADD_USER_INFO, action.payload)
        yield put(AppActions.userInfoUpdateSuccessAction(response.data))
    } catch (e) {
        yield put(AppActions.sagaFailAction(e))
    }
}

function* updateUserInfoSaga() {
    yield takeLatest(AppActions.userInfoUpdateAction.toString(), performUpdateUserInfo)
}

function* performEnableCopyTrader(action) {
    try {
        const response = yield call(Api.ENABLE_COPYTRADER, action.payload)
        yield put(AppActions.sagaSuccessAction(response.data))
    } catch (e) {
        yield put(AppActions.sagaFailAction(e))
    }
}

function* enableCopyTraderSaga() {
    yield takeLatest(AppActions.userEnableCopyTraderAction.toString(), performEnableCopyTrader)
}

function* performSubscribe(action) {
    try {
        const response = yield call(Api.SUBSCRIBE_TO_COPYTRADER_OR_SIGNALPROVIDER, action.payload)
        yield put(AppActions.sagaSuccessAction(response.data))
    } catch (e) {
        yield put(AppActions.sagaFailAction(e))
    }
}

function* subscribeSaga() {
    yield takeLatest(AppActions.userSubscribeAction.toString(), performSubscribe)
}

function* performEnableSignalProvider(action) {
    try {
        const response = yield call(Api.ENABLE_SIGNALPROVIDER, action.payload)
        yield put(AppActions.sagaSuccessAction(response.data))
    } catch (e) {
        yield put(AppActions.sagaFailAction(e))
    }
}

function* enableSignalProviderSaga() {
    yield takeLatest(AppActions.userEnableSignalProviderAction.toString(), performEnableSignalProvider)
}

function* performUploadDocuments(action) {
    try {
        const response = yield call(Api.UPLOAD_DOCUMENTS, action.payload)
        yield put(AppActions.sagaSuccessAction(response.data))
    } catch (e) {
        yield put(AppActions.sagaFailAction(e))
    }
}

function* uploadDocumentsSaga() {
    yield takeLatest(AppActions.userUploadDocumentsAction.toString(), performUploadDocuments)
}

function* performDeleteDocument(action) {
    try {
        yield call(Api.DELETE_DOCUMENT, action.payload)
        yield put(AppActions.deleteDocumentSuccessAction(action.payload))
    } catch (e) {
        yield put(AppActions.sagaFailAction(e))
    }
}

function* deleteDocumentSaga() {
    yield takeLatest(AppActions.deleteDocumentAction.toString(), performDeleteDocument)
}

function* performConfigureSubscribe(action) {
    try {
        const response = yield call(Api.CONFIGURE_SUBSCRIPTION_STATUS, action.payload)
        yield put(AppActions.sagaSuccessAction(response.data))
    } catch (e) {
        yield put(AppActions.sagaFailAction(e))
    }
}

function* configureSubscribeSaga() {
    yield takeLatest(AppActions.configureSubscriptionAction.toString(), performConfigureSubscribe)
}

function* performNewFAQ(action) {
    try {
        const response = yield call(Api.NEW_FAQ, action.payload)
        yield put(AppActions.sagaSuccessAction(response.data))
    } catch (e) {
        yield put(AppActions.sagaFailAction(e))
    }
}

function* newFAQSaga() {
    yield takeLatest(AppActions.addFAQAction.toString(), performNewFAQ)
}

function* performUpdateFAQ(action) {
    try {
        const response = yield call(Api.UPDATE_FAQ, action.payload)
        yield put(AppActions.sagaSuccessAction(response.data))
    } catch (e) {
        yield put(AppActions.sagaFailAction(e))
    }
}

function* updateFAQSaga() {
    yield takeLatest(AppActions.updateFAQAction.toString(), performUpdateFAQ)
}

function* performDeleteFAQ(action) {
    try {
        const response = yield call(Api.DELETE_FAQ, action.payload)
        yield put(AppActions.sagaSuccessAction(response.data))
    } catch (e) {
        yield put(AppActions.sagaFailAction(e))
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
        yield put(AppActions.sagaFailAction(e))
    }
}

function* refreshTokenSaga() {
    yield takeLatest(AppActions.refreshTokenAction.toString(), performRefreshToken)
}

function* performFetchCopyTraders(action) {
    try {
        const response = yield call(Api.GET_COPYTRADERS, action.payload)
        yield put(AppActions.copyTradersFetchSuccessAction(response.data))
    } catch (e) {
        yield put(AppActions.sagaFailAction(e))
    }
}

function* fetchCopyTradersSaga() {
    yield takeLatest(AppActions.copyTradersFetchAction.toString(), performFetchCopyTraders)
}

function* performFetchSignalProviders(action) {
    try {
        const response = yield call(Api.GET_SIGNALPROVIDERS, action.payload)
        yield put(AppActions.signalProvidersFetchSuccessAction(response.data))
    } catch (e) {
        yield put(AppActions.sagaFailAction(e))
    }
}

function* fetchSignalProvidersSaga() {
    yield takeLatest(AppActions.signalProvidersFetchAction.toString(), performFetchSignalProviders)
}

function* performFetchExchangeComparison(action) {
    try {
        const response = yield call(Api.GET_COMPARISON_PAGE_COINS, action.payload)
        yield put(AppActions.exchangeComparisonFetchSuccessAction(response.data))
    } catch (e) {
        yield put(AppActions.sagaFailAction(e))
    }    
}

function* fetchExchangeComparisonSaga() {
    yield takeLatest(AppActions.exchangeComparisonFetchAction.toString(), performFetchExchangeComparison)
}

export default function* rootSaga() {
    yield all([
        logInSaga(),
        signUpSaga(),
        fetchExchangePlatformsSaga(),
        addSignalSaga(),
        updateSignalSaga(),
        fetchProfileSaga(),
        exchangePlatformCUSaga(),
        removeExchangePlatformSaga(),
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
        fetchExchangeComparisonSaga(),
    ])
}