import { createSlice } from "@reduxjs/toolkit";

const Search = createSlice({
    name: 'Search',
    initialState: {
        value: null,
        result: [],
        error: null
    },
    reducers: {
        getValue: (state, action) => {
            return {
                ...state,
                value: action.payload
            }
        },
        getResult: (state, action) => {
            return {
                ...state,
                result: action.payload
            }
        },
        errorSearch: (state, action) => {
            return {
                ...state,
                error: action.payload
            }
        },
    }
})

const { actions, reducer } = Search
export const { getValue, errorSearch, getResult } = actions;
export default reducer;

