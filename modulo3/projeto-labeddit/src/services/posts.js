import axios from 'axios'
import { BASE_URL } from '../constants/urls'

export const createPost = (form, clear, getData) => {

    const token = localStorage.getItem('token')
    axios.post(`${BASE_URL}/posts`, form, {
        headers: {
            Authorization: token
        }
    })
        .then(() => {
            getData(`${BASE_URL}/posts`)
            clear()
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
}