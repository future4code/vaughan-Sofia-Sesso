import axios from 'axios'
import { BASE_URL } from '../constants/urls'

const token = localStorage.getItem('token')
const auth = { headers: { Authorization: token } }

export const createPost = (form, clear, getData) => {
    axios.post(`${BASE_URL}/posts`, form, auth)
        .then(() => {
            getData(`${BASE_URL}/posts`)
            clear()
        })
        .catch((err) => {
            alert(err.response.data)
        })
}

export const createPostVote = (id, getData, setIsVotedUp) => {
    axios.post(`${BASE_URL}/posts/${id}/votes`, {
        direction: 1
    }, auth)
        .then(() => {
            getData(`${BASE_URL}/posts`)
            setIsVotedUp(true)
        })
        .catch((err) => {
            alert(err.response.data)
        })
}

export const changePostVote = (id, getData, setIsVotedDown) => {
    axios.put(`${BASE_URL}/posts/${id}/votes`, {
        direction: -1
    }, auth)
        .then(() => {
            getData(`${BASE_URL}/posts`)
            setIsVotedDown(true)
        })
        .catch((err) => {
            alert(err.response.data)
        })
}

export const deletePostVote = (id, getData) => {
    axios.delete(`${BASE_URL}/posts/${id}/votes`, auth)
        .then(() => {
            getData(`${BASE_URL}/posts`)
        })
        .catch((err) => {
            alert(err.response.data)
        })
}