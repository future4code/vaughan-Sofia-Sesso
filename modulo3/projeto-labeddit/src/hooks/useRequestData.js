import axios from 'axios'
import { useEffect, useState } from 'react'

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)
    const [isLoading, setIsLoading] = useState(false)
    const token = localStorage.getItem('token')

    const getData = (url) => {
        setIsLoading(true)
        axios.get(url, {
            headers: {
                Authorization: token
            }
        })
            .then((res) => {
                setData(res.data)
                setIsLoading(false)
            })
            .catch((err) => {
                alert(err.response)
                setIsLoading(false)
            })
    }

    useEffect(() => {
        getData(url)
    }, [url])

    return { data, isLoading, getData }
}

export default useRequestData