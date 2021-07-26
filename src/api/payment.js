import axiosClient from './axiosClient'

const paymentAPI = {
    payment: (action) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        }
        const url = `/ticket/paymentMoMo/${action.id}`
        return axiosClient.post(url, action.body, config)
    },
}

export default paymentAPI