import createSagaMiddleware from 'redux-saga'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootSaga from './sagas/rootSaga'
import MovieReducer from './redux/MovieSlice'
import TimeReducer from './redux/TimeSlice'
import LoadingReducer from './redux/LoadingSlice'
import authorReducer from './redux/authorSlice'
import PaymentReducer from './redux/PaymentSlice'
import TabReducer from './redux/Selecting_userSlice'
import SearchReducer from './redux/SearchSlice'

const rootReducer = {
    AllMovies: MovieReducer,
    AllTime: TimeReducer,
    Loading: LoadingReducer,
    Author: authorReducer,
    Payment: PaymentReducer,
    SelectTabs: TabReducer,
    Search: SearchReducer,
}
const sagaMiddleware = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
    reducer: rootReducer,
    middleware
})

sagaMiddleware.run(rootSaga)

export default store