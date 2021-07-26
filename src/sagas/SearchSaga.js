import { call, delay, put, takeEvery } from 'redux-saga/effects';
import searchAPI from '../api/searchAPI';
import { FETCH_DATA_FAIL, FETCH_DATA_SUCCESS } from '../constants/index'
import { hidenLoading, showLoading } from '../redux/LoadingSlice';
import { getValue, errorSearch, getResult } from '../redux/SearchSlice';

function* handleGetValueSearch(value) {
    yield put(showLoading())
    const data = yield call(searchAPI.getMovieSearch, value.payload)
    if (data.status === FETCH_DATA_SUCCESS) {
        yield put(getResult(data.data))
    }
    if (data.status === FETCH_DATA_FAIL) {
        yield put(errorSearch(data.error))
    }
    yield delay(300)
    yield put(hidenLoading())
}

function* searchSaga() {
    yield takeEvery(getValue, handleGetValueSearch)
}

export default searchSaga