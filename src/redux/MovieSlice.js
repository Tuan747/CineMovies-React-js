import { createSlice } from "@reduxjs/toolkit";

const AllMovies = createSlice({
    name: 'AllMovies',
    initialState: {
        status: '',
        slug: {},
        movies: [],
        detailMovie: {},

    },
    reducers: {
        getStatus: (state, action) => {
            return {
                ...state,
                status: action.payload
            }
        },
        getSlug: (state, action) => {
            return {
                ...state,
                slug: action.payload
            }
        },
        getAllMovies: (state, action) => {
            return {
                ...state,
                movies: action.payload
            }
        },
        detailMovie: (state, action) => {
            return {
                ...state,
                detailMovie: action.payload
            }
        }
    }
})

const { actions, reducer } = AllMovies
export const { getAllMovies, getStatus, detailMovie, getSlug } = actions;
export default reducer;

