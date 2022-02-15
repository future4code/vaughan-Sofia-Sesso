import axios from 'axios'

export const usePostData = (url, body) => {

    axios.post(url, body)
        .then((res) => {
        })
        .catch((err) => {
            console.log(err.data)
        })

    // return postData
}