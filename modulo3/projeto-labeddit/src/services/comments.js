import axios from 'axios'
import { BASE_URL } from '../constants/urls'

export const createComment = (form, clear, id, getData) => {

    const token = localStorage.getItem('token')
    axios.post(`${BASE_URL}/posts/${id}/comments`, form, {
        headers: {
            Authorization: token
        }
    })
        .then(() => {
            getData(`${BASE_URL}/posts/${id}/comments`)
            clear()
        })
        .catch((err) => {
            alert(err.response.data)
        })
}