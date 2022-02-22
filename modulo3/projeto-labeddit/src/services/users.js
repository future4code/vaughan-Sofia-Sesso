import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToFeed } from '../routes/coordinator'

export const login = (form, clear, navigate, setButtonText) => {
    axios.post(`${BASE_URL}/users/login`, form)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            clear()
            goToFeed(navigate)
            setButtonText("Logout")
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
}

export const signUp = (form, clear, navigate, setButtonText) => {
    axios.post(`${BASE_URL}/users/signup`, form)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            clear()
            goToFeed(navigate)
            setButtonText("Logout")
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
}