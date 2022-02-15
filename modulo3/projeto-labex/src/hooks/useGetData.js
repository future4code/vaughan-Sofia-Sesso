import { useEffect, useState } from 'react'
import axios from 'axios'

export const useGetData = (url) => {
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)

    const getData = (url) => {
        setIsLoading(true)
        axios.get(url)
            .then((res) => {
                setData(res.data.trips)
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err.data)
                setIsLoading(false)
            })
    }

    useEffect(() => {
        getData(url)
    }, [url])

    return [data, isLoading]
}