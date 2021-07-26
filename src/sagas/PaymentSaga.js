import { call, delay, put, takeEvery } from 'redux-saga/effects';
import paymentAPI from '../api/payment';
import { FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from '../constants/index'
import { hidenLoading, showLoading } from '../redux/LoadingSlice';
import { getData, paymentSuccess, paymentError } from '../redux/PaymentSlice';

function* handlePayment(action) {
    yield put(showLoading())
    const data = yield call(paymentAPI.payment, action.payload)
    if (data.status === FETCH_DATA_SUCCESS) {
        yield put(paymentSuccess(data.data))
    }
    if (data.status === FETCH_DATA_FAIL) {
        yield put(paymentError(data.error))
    }
    yield delay(300)
    yield put(hidenLoading())
}

function* paymentSaga() {
    yield takeEvery(getData, handlePayment)
}

export default paymentSaga;