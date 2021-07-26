import axiosClient from './axiosClient'

const LoginAPI = {
    login: (body) => {
        const url = '/account/login'
        return axiosClient.post(url, body)
    },
    getUSer: () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        }
        const url = `/account/me`
        return axiosClient.get(url, config)
    },
    getHistory: () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        }
        const url = '/ticket/history'
        return axiosClient.get(url, config)
    },
}

export default LoginAPI