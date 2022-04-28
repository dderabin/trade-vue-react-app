import { createAction } from "@reduxjs/toolkit";

export const initAction = createAction('app/init')
export const logoutAction = createAction('user/logout');

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

export const exchangeCUAction = createAction('exchange/create/update')
export const exchangeCUSuccessAction = createAction('exchange/create/update/success')
export const exchangeCUFailAction = createAction('exchange/create/update/fail')

export const exchangeFetchAction = createAction('exchange/fetch')
export const exchangeFetchSuccessAction = createAction('exchange/fetch/success')
export const exchangeFetchFailAction = createAction('exchange/fetch/fail')

export const exchangeDeleteAction = createAction('exchange/delete')
export const exchangeDeleteSuccessAction = createAction('exchange/delete/success')
export const exchangeDeleteFailAction = createAction('exchange/delete/fail')

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

export const copytradersFetchAction = createAction('copytraders/fetch')
export const copytradersFetchSuccessAction = createAction('copytraders/fetch/success')
export const copytradersFetchFailAction = createAction('copytraders/fetch/fail')

export const signalProvidersFetchAction = createAction('signalproviders/fetch')
export const signalProvidersFetchSuccessAction = createAction('signalproviders/fetch/success')
export const signalProvidersFetchFailAction = createAction('signalproviders/fetch/fail')
