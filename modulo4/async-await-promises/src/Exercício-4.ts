import axios from 'axios'
import { baseURL } from './baseURL'

// a) É uma função assíncrona que devolve uma Promise<void>, pois ela não retorna nada.
// b)

export const postNews = async (title: string, content: string): Promise<void> => {
    await axios.put(`${baseURL}/news`, {
        title,
        content,
        date: new Date().getTime()
    })
}