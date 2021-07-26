import { call, delay, put, takeEvery } from 'redux-saga/effects';
import movieAPI from '../api/movie';
import { getAllMovies, getStatus, detailMovie, getSlug } from '../redux/MovieSlice'
import { FETCH_DATA_SUCCESS } from '../constants/index'
import { hidenLoading, showLoading } from '../redux/LoadingSlice';

function* getMovies(action) {
    yield put(showLoading())
    const data = yield call(movieAPI.getApiAllMovies, action.payload)
    if (data.status === FETCH_DATA_SUCCESS) {
        yield put(getAllMovies(data.data))
    }
    yield delay(300)
    yield put(hidenLoading())
}

function* getDetailMovie(slug) {
    yield put(showLoading())
    const data = yield call(movieAPI.getApiDetailMovie, slug.payload)
    if (data.status === FETCH_DATA_SUCCESS) {
        yield put(detailMovie(data.data))
    }
    yield delay(300)
    yield put(hidenLoading())
}

function* movieSaga() {
    yield takeEvery(getStatus, getMovies)
    yield takeEvery(getSlug, getDetailMovie)
}

export default movieSaga