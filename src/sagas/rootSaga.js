import { all } from 'redux-saga/effects'
import MovieSaga from './MovieSaga'
import TimeSaga from './TimeSaga'
import AuthorSaga from './AuthorSaga'
import paymentSaga from './PaymentSaga';
import searchSaga from './SearchSaga';

function* rootSaga() {
    yield all([
        MovieSaga(),
        TimeSaga(),
        AuthorSaga(),
        paymentSaga(),
        searchSaga(),
    ]);
}
export default rootSaga