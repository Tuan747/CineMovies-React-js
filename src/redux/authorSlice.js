import { createSlice } from "@reduxjs/toolkit";

const author = createSlice({
    name: 'author',
    initialState: {
        isLogin: false,
        dataUser: {},
        status: null
    },
    reducers: {
        getValueLogin: () => {
        },
        getUser: () => {
        },
        loginSuccess: (state, action) => {
            return {
                ...state,
                dataUser: action.payload,
                isLogin: true
            }
        },
        loginError: (state, action) => {
            return {
                ...state,
                isLogin: false,
            }
        },
        loginStatus: (state, action) => {
            return {
                ...state,
                status: action.payload,
            }
        },
        logOut: (state, action) => {
            return {
                ...state,
                isLogin: false,
                dataUser: {},
                status: null
            }
        }
    }
})

const { reducer, actions } = author
export const { getValueLogin, loginError, loginSuccess, getDataValueLogin, loginStatus, getUser, logOut } = actions
export default reducer