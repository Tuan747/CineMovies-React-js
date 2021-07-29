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
    rePayment: (action) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        }
        const url = `/ticket/repaymentMoMo`
        return axiosClient.post(url, action, config)
    },
}

export default paymentAPI