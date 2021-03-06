import { createAction } from "@reduxjs/toolkit";

export const initAction = createAction('app/init')
export const loadingAction = createAction('api/loading')
export const logoutAction = createAction('user/logout');
export const terminateStatesAction = createAction('terminate/states/action');

export const sagaSuccessAction = createAction('saga/success');
export const sagaFailAction = createAction('saga/fail');

export const messageConsumedAction = createAction('message/consumed');

export const apiFecthingAction = createAction('api/fetching')

export const signalAddAction = createAction('signal/add')
export const signalAddSuccessAction = createAction('signal/add/success')
export const signalAddFailAction = createAction('signal/add/fail')

export const signalUpdateAction = createAction('signal/update')
export const signalUpdateSuccessAction = createAction('signal/update/success')
export const signalUpdateFailAction = createAction('signal/update/fail')

export const userSignUpAction = createAction('user/signup')
export const userSignUpSuccessAction = createAction('user/signup/success')
export const userSignUpFailAction = createAction('user/signup/fail')

export const userLogInAction = createAction('user/login')
export const userLogInSuccessAction = createAction('user/login/success')
export const userLogInFailAction = createAction('user/login/fail')

export const userProfileFetchAction = createAction('user/profile/fetch')
export const userProfileFetchSuccessAction = createAction('user/profile/fetch/success')
export const userProfileFetchFailAction = createAction('user/profile/fetch/fail')

export const exchangePlatformCUAction = createAction('exchangePlatform/create/update')
export const exchangePlatformCUSuccessAction = createAction('exchangePlatform/create/update/success')
export const exchangePlatformCUFailAction = createAction('exchangePlatform/create/update/fail')

export const exchangePlatformsFetchAction = createAction('exchangePlatform/fetch')
export const exchangePlatformsFetchSuccessAction = createAction('exchangePlatform/fetch/success')
export const exchangePlatformsFetchFailAction = createAction('exchangePlatform/fetch/fail')

export const exchangeComparisonFetchAction = createAction('exchangeComparison/fetch')
export const exchangeComparisonFetchSuccessAction = createAction('exchangeComparison/fetch/success')
export const exchangeComparisonFetchFailAction = createAction('exchangeComparison/fetch/fail')

export const exchangePlatformDeleteAction = createAction('exchangePlatform/delete')
export const exchangePlatformDeleteSuccessAction = createAction('exchangePlatform/delete/success')
export const exchangePlatformDeleteFailAction = createAction('exchangePlatform/delete/fail')

export const userInfoUpdateAction = createAction('user/user-info/update')
export const userInfoUpdateSuccessAction = createAction('user/user-info/update/success')
export const userInfoUpdateFailAction = createAction('user/user-info/update/fail')

export const userEnableCopyTraderAction = createAction('user/enable/copytrader')
export const userEnableCopyTraderSuccessAction = createAction('user/enable/copytrader/success')
export const userEnableCopyTraderFailAction = createAction('user/enable/copytrader/fail')

export const userSubscribeAction = createAction('user/subscribe')
export const userSubscribeSuccessAction = createAction('user/subscribe/success')
export const userSubscribeFailAction = createAction('user/subscribe/fail')

export const userEnableSignalProviderAction = createAction('user/enable/signalprovider')
export const userEnableSignalProviderSuccessAction = createAction('user/enable/signalprovider/success')
export const userEnableSignalProviderFailAction = createAction('user/enable/signalprovider/fail')

export const userUploadDocumentsAction = createAction('user/upload/documents')
export const userUploadDocumentsSuccessAction = createAction('user/upload/documents/success')
export const userUploadDocumentsFailAction = createAction('user/upload/documents/fail')

export const deleteDocumentAction = createAction('user/document/delete')
export const deleteDocumentSuccessAction = createAction('user/document/delete/success')
export const deleteDocumentFailAction = createAction('user/document/delete/fail')

export const configureSubscriptionAction = createAction('configure/subscribe')
export const configureSubscriptionSuccessAction = createAction('configure/subscribe/success')
export const configureSubscriptionFailAction = createAction('configure/subscribe/fail')

export const addFAQAction = createAction('add/faq')
export const addFAQSuccessAction = createAction('add/faq/success')
export const addFAQFailAction = createAction('add/faq/fail')

export const updateFAQAction = createAction('update/faq')
export const updateFAQSuccessAction = createAction('update/faq/success')
export const updateFAQFailAction = createAction('update/faq/fail')

export const deleteFAQAction = createAction('delete/faq')
export const deleteFAQSuccessAction = createAction('delete/faq/success')
export const deleteFAQFailAction = createAction('delete/faq/fail')

export const refreshTokenAction = createAction('refresh/token')
export const refreshTokenSuccessAction = createAction('refresh/token/success')
export const refreshTokenFailAction = createAction('refresh/token/fail')

export const copyTradersFetchAction = createAction('copytraders/fetch')
export const copyTradersFetchSuccessAction = createAction('copytraders/fetch/success')
export const copyTradersFetchFailAction = createAction('copytraders/fetch/fail')

export const signalProvidersFetchAction = createAction('signalproviders/fetch')
export const signalProvidersFetchSuccessAction = createAction('signalproviders/fetch/success')
export const signalProvidersFetchFailAction = createAction('signalproviders/fetch/fail')

export const uploadAvatarAction = createAction('upload/avatar')
export const uploadAvatarSuccessAction = createAction('upload/avatar/success')
export const uploadAvatarFaileAction = createAction('upload/avatar/faile')

export const signalHistoryFetchAction = createAction('signal/history/fetch')
export const signalHistoryFetchSuccessAction = createAction('signal/history/fetch/success')
export const signalHistoryFetchFailAction = createAction('signal/history/fetch/fail')

export const portfolioValueFetchAction = createAction('portfolio/value/fetch')
export const portfolioValueFetchSuccessAction = createAction('portfolio/value/fetch/success')
export const portfolioValueFetchFailAction = createAction('portfolio/value/fetch/fail')

export const monthlyScorecardFetchAction = createAction('monthly/scorecard/fetch')
export const monthlyScorecardFetchSuccessAction = createAction('monthly/scorecard/fetch/success')
export const monthlyScorecardFetchFailAction = createAction('monthly/scorecard/fetch/fail')

export const changePasswordAction = createAction('change/password')
export const changePasswordSuccessAction = createAction('change/password/success')
export const changePasswordFailAction = createAction('change/password/fail')

export const subscribersFetchAction = createAction('subscribers/fetch')
export const subscribersFetchSuccessAction = createAction('subscribers/fetch/success')
export const subscribersFetchFailAction = createAction('subscribers/fetch/fail')

export const traderSubscriptionFetchAction = createAction('trade/subscription/fetch')
export const traderSubscriptionFetchSuccessAction = createAction('trade/subscription/fetch/success')
export const traderSubscriptionFetchFailAction = createAction('trade/subscription/fetch/fail')

export const signalSubscriptionFetchAction = createAction('signal/subscription/fetch')
export const signalSubscriptionFetchSuccessAction = createAction('signal/subscription/fetch/success')
export const signalSubscriptionFetchFailAction = createAction('signal/subscription/fetch/fail')