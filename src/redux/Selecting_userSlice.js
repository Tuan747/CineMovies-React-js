import { createSlice } from "@reduxjs/toolkit";
import { TAB_USER_INFOMATION } from "../constants";

const selectTabs = createSlice({
    name: 'selectTabs',
    initialState: {
        tabs: TAB_USER_INFOMATION,
        historys: null,
    },
    reducers: {
        getTabs: (state, action) => {
            return {
                ...state,
                tabs: action.payload
            }
        },
        getHistory: (state, action) => {
            return {
                ...state,
            }
        },
        history: (state, action) => {
            return {
                ...state,
                historys: action.payload
            }
        }
    }
})

const { actions, reducer } = selectTabs
export const { getTabs, getHistory, history } = actions;
export default reducer;

