import { createSlice } from "@reduxjs/toolkit";

const AllPayment = createSlice({
    name: 'AllPayment',
    initialState: {
        sendData: null,
        payment: {},
        error: {},
        method: null,
    },
    reducers: {
        getData: (state, action) => {
            return {
                ...state,
                sendData: action.payload
            }
        },
        paymentSuccess: (state, action) => {
            return {
                ...state,
                payment: action.payload,
                error: null,
            }
        },
        paymentError: (state, action) => {
            return {
                ...state,
                error: action.payload
            }
        },
        paymentReset: (state, action) => {
            return {
                ...state,
                sendData: null,
                payment: {},
                error: {},
                method: null,
            }
        },
        paymentMethode: (state, action) => {
            return {
                ...state,
                method: action.payload
            }
        },
        rePayment: () => {

        }
    }
})

const { actions, reducer } = AllPayment;
export const { getData, rePayment, paymentSuccess, paymentError, paymentReset, paymentMethode } = actions;
export default reducer;

