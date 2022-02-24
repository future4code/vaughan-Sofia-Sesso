import axios from 'axios'
import { BASE_URL } from '../constants/urls'

const token = localStorage.getItem('token')
const auth = { headers: { Authorization: token } }

export const createComment = (form, clear, id, getData) => {
    axios.post(`${BASE_URL}/posts/${id}/comments`, form, auth)
        .then(() => {
            getData(`${BASE_URL}/posts/${id}/comments`)
            clear()
        })
        .catch((err) => {
            alert(err.response.data)
        })
}

export const createCommentVote = (id, getData, setIsVotedUp, params) => {
    axios.post(`${BASE_URL}/comments/${id}/votes`, {
        direction: 1
    }, auth)
        .then(() => {
            getData(`${BASE_URL}/posts/${params.id}/comments`)
            setIsVotedUp(true)
        })
        .catch((err) => {
            alert(err.response)
        })
}

export const changeCommentVote = (id, getData, setIsVotedDown, params) => {
    axios.put(`${BASE_URL}/comments/${id}/votes`, {
        direction: -1
    }, auth)
        .then(() => {
            getData(`${BASE_URL}/posts/${params.id}/comments`)
            setIsVotedDown(true)
        })
        .catch((err) => {
            alert(err.response)
        })
}

export const deleteCommentVote = (id, getData, params) => {
    axios.delete(`${BASE_URL}/comments/${id}/votes`, auth)
        .then(() => {
            getData(`${BASE_URL}/posts/${params.id}/comments`)
        })
        .catch((err) => {
            alert(err.response)
        })
}