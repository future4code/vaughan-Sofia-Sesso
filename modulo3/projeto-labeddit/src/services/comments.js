import axios from 'axios'
import { BASE_URL } from '../constants/urls'

const token = localStorage.getItem('token')

export const createComment = (form, clear, id, getData) => {
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

export const createCommentVote = (id, getData, params, setIsVotedUp) => {
    axios.post(`${BASE_URL}/comments/${id}/votes`, {
        direction: 1
    }, {
        headers: {
            Authorization: token
        }
    })
        .then(() => {
            getData(`${BASE_URL}/posts/${params.id}/comments`)
            setIsVotedUp(true)
        })
        .catch((err) => {
            console.log(err.response)
        })
}

export const changeCommentVote = (id, getData, params, setIsVotedDown) => {
    axios.put(`${BASE_URL}/comments/${id}/votes`, {
        direction: -1
    }, {
        headers: {
            Authorization: token
        }
    })
        .then(() => {
            getData(`${BASE_URL}/posts/${params.id}/comments`)
            setIsVotedDown(true)
        })
        .catch((err) => {
            console.log(err.response)
        })
}

export const deleteCommentVote = (id, getData, params) => {
    axios.delete(`${BASE_URL}/comments/${id}/votes`, {
        headers: {
            Authorization: token
        }
    })
        .then(() => {
            getData(`${BASE_URL}/posts/${params.id}/comments`)
        })
        .catch((err) => {
            console.log(err.response)
        })
}