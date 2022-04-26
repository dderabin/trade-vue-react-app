import { createAction } from "@reduxjs/toolkit";

export const apiFecthingAction = createAction('api/fetching')
export const exchangeCUAction = createAction('exchange/create/update')
export const exchangeCUSuccessAction = createAction('exchange/create/update/success')
export const exchangeCUFailAction = createAction('exchange/create/update/fail')