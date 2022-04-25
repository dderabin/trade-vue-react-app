import { all, call, put, takeLatest } from 'redux-saga/effects';
import Api from '..'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
    try {
        const user = yield call(Api.fetchUser, action.payload.userId);
        yield put({type: "USER_FETCH_REQUESTED", user: user});
    } catch (e) {
        yield put({type: "USER_FETCH_FAILED", message: e.message})
    }
}

function* performFetchUser() {
    yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

function* rootSaga() {
    yield all([
        performFetchUser
    ])
}

export default rootSaga;