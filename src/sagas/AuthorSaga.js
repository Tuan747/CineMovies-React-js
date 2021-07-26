import { call, delay, put, takeEvery } from 'redux-saga/effects';
import LoginAPI from '../api/login';
import { FETCH_DATA_SUCCESS } from '../constants/index'
import { hidenLoading, showLoading } from '../redux/LoadingSlice';
import { getValueLogin, loginSuccess, loginStatus, getUser } from '../redux/authorSlice';
import { getHistory, history } from '../redux/Selecting_userSlice';

function* handleLoginSuccess(value) {
    yield put(showLoading())
    const data = yield call(LoginAPI.login, value.payload)
    if (data.status === FETCH_DATA_SUCCESS) {
        if (data.data.user) {
            localStorage.setItem('token', data.data.token)
            yield put(loginSuccess(data.data.user))
            yield put(loginStatus(data.statusCode))
        } else {
            yield put(loginStatus(data.statusCode))
        }
    }
    yield delay(300)
    yield put(hidenLoading())
}

function* handleGetUser() {
    yield put(showLoading())
    const data = yield call(LoginAPI.getUSer)
    if (data.status === FETCH_DATA_SUCCESS) {
        if (data.data) {
            yield put(loginSuccess(data.data))
            yield put(loginStatus(data.statusCode))
        } else {
            yield put(loginStatus(data.statusCode))
        }
    }
    yield delay(300)
    yield put(hidenLoading())
}

function* handleGetHistory() {
    yield put(showLoading())
    const data = yield call(LoginAPI.getHistory)
    if (data.status === FETCH_DATA_SUCCESS) {
        if (data.data) {
            yield put(history(data.data))
        } else {
            yield put(loginStatus(data.statusCode))
        }
    }
    yield delay(300)
    yield put(hidenLoading())
}

function* movieSaga() {
    yield takeEvery(getValueLogin, handleLoginSuccess)
    yield takeEvery(getUser, handleGetUser)
    yield takeEvery(getHistory, handleGetHistory)
}

export default movieSaga