import axiosClient from './axiosClient'

const timeAPI = {
    getApiAllTheart: () => {
        const url = 'theater/all'
        return axiosClient.get(url)
    },
    getApiAllDate: (idMovie, idTheater) => {
        const url = `/movietime/${idMovie}/${idTheater}`
        return axiosClient.get(url)
    },
    getApiAllHour: (idMovie, idTheater, date) => {
        const url = `/movietime/${idMovie}/${idTheater}/${date}`
        return axiosClient.get(url)
    },
    getApiAllSeats: (idMovie, idTheater, date, hour) => {
        const url = `/movietime/${idMovie}/${idTheater}/${date}/${hour}`
        return axiosClient.get(url)
    },
}

export default timeAPI