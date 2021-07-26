import axiosClient from './axiosClient'

const seachAPI = {
    getMovieSearch: (value) => {
        const url = `/movie/search?name=${value}`
        return axiosClient.get(url)
    }
}

export default seachAPI