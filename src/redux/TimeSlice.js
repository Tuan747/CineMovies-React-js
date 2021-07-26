import { createSlice } from "@reduxjs/toolkit";

const AllTime = createSlice({
    name: 'AllTime',
    initialState: {
        idMovies: '',
        allTheater: [],
        idTheater: '',
        allDate: [],
        date: '',
        allHour: [],
        hour: '',
        allSeats: [],
        seats: [],
        price: 0,
        amount: 0,
        cost: 0,
        error: null,
    },
    reducers: {
        getIdMovies: (state, action) => {
            return {
                ...state,
                idMovies: action.payload
            }
        },
        getAllIdTheater: (state, action) => {
            return {
                ...state,
                allTheater: action.payload
            }
        },
        getIdTheater: (state, action) => {
            return {
                ...state,
                idTheater: action.payload
            }
        },
        getAllDate: (state, action) => {
            return {
                ...state,
                allDate: action.payload
            }
        },
        getDate: (state, action) => {
            return {
                ...state,
                date: action.payload
            }
        },
        getAllHour: (state, action) => {
            return {
                ...state,
                allHour: action.payload
            }
        },
        getHour: (state, action) => {
            return {
                ...state,
                hour: action.payload
            }
        },
        getAllSeats: (state, action) => {
            return {
                ...state,
                allSeats: action.payload
            }
        },
        getSeats: (state, action) => {
            return {
                ...state,
                seats: [...state.seats, action.payload.seat],
                price: state.price + action.payload.price,
                amount: state.amount + 1,
                cost: action.payload.price
            }
        },
        removeSeats: (state, action) => {
            return {
                ...state,
                seats: [...state.seats.filter(seat => seat !== action.payload.seat)],
                price: state.price - action.payload.price,
                amount: state.amount - 1
            }
        },
        resetSeats: (state, action) => {
            return {
                ...state,
                seats: [],
                price: 0,
                amount: 0,
                cost: 0
            }
        },
        resetHour: (state, action) => {
            return {
                ...state,
                allHour: [],
                hour: '',
            }
        },
        resetDate: (state, action) => {
            return {
                ...state,
                allDate: [],
                date: '',
            }
        },
        resetAllTime: (state, action) => {
            return {
                ...state,
                allTheater: [],
                idTheater: '',
                allDate: [],
                date: '',
                allHour: [],
                hour: '',
                allSeats: [],
                seats: [],
                price: 0,
                amount: 0,
                cost: 0
            }
        },
        getTimeError: (state, action) => {
            return {
                ...state,
                error: action.payload
            }
        }
    }
})

const { actions, reducer } = AllTime
export const { getIdMovies, getTimeError, resetHour, resetDate, getAllDate, getIdTheater, getDate, getHour, getSeats, getAllIdTheater, getAllHour, getAllSeats, removeSeats, resetSeats, resetAllTime } = actions;
export default reducer;

