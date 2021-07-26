import { call, delay, put, takeEvery, select } from 'redux-saga/effects';
import timeAPI from '../api/time';
import { FETCH_DATA_FAIL, FETCH_DATA_SUCCESS } from '../constants/index'
import { hidenLoading, showLoading } from '../redux/LoadingSlice';
import { getIdMovies, getIdTheater, getAllIdTheater, getAllDate, getDate, getAllHour, getHour, getAllSeats, getTimeError } from '../redux/TimeSlice';

function* handleGetAllIdTheaters() {
    yield put(showLoading())
    const data = yield call(timeAPI.getApiAllTheart)
    if (data.status === FETCH_DATA_SUCCESS) {
        yield put(getAllIdTheater(data.data))
    }
    if (data.status === FETCH_DATA_FAIL) {
        yield put(getTimeError(data.error))
    }
    yield delay(300)
    yield put(hidenLoading())
}

function* handleGetAllDate() {
    yield put(showLoading())
    const { idMovies, idTheater } = yield select(state => state.AllTime)
    const data = yield call(timeAPI.getApiAllDate, idMovies, idTheater)
    if (data.status === FETCH_DATA_SUCCESS) {
        yield put(getAllDate(data.data))
    }
    if (data.status === FETCH_DATA_FAIL) {
        yield put(getTimeError(data.error))
    }
    yield delay(300)
    yield put(hidenLoading())
}

function* handleGetAllHours() {
    yield put(showLoading())
    const { idMovies, idTheater, date } = yield select(state => state.AllTime)
    const data = yield call(timeAPI.getApiAllHour, idMovies, idTheater, date)
    if (data.status === FETCH_DATA_SUCCESS) {
        yield put(getAllHour(data.data))
    }
    if (data.status === FETCH_DATA_FAIL) {
        yield put(getTimeError(data.error))
    }
    yield delay(300)
    yield put(hidenLoading())
}

function* handleGetAllSeats() {
    yield put(showLoading())
    const { idMovies, idTheater, date, hour } = yield select(state => state.AllTime)
    const data = yield call(timeAPI.getApiAllSeats, idMovies, idTheater, date, hour)
    if (data.status === FETCH_DATA_SUCCESS) {
        yield put(getAllSeats(data.data))
    }
    if (data.status === FETCH_DATA_FAIL) {
        yield put(getTimeError(data.error))
    }
    yield delay(300)
    yield put(hidenLoading())
}

function* timeSaga() {
    yield takeEvery(getIdMovies, handleGetAllIdTheaters)
    yield takeEvery(getIdTheater, handleGetAllDate)
    yield takeEvery(getDate, handleGetAllHours)
    yield takeEvery(getHour, handleGetAllSeats)
}

export default timeSaga