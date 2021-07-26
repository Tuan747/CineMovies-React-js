import axiosClient from './axiosClient'

const movieAPI = {
    getApiAllMovies: (status) => {
        const url = `/movie/${status}`
        return axiosClient.get(url)
    },

    getApiDetailMovie: (slug) => {
        const url = `/movie/${slug}`
        return axiosClient.get(url)
    },
}

export default movieAPI