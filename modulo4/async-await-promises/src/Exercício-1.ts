import axios from 'axios'
import { baseURL } from './baseURL'

// a) Devemos usar o endpoint GET /subscribers.
// b) Com o Promise<any[]>.
// c)

async function getAllSubscribers(): Promise<any[]> {
    const result = await axios.get(`${baseURL}/subscribers`)

    return result.data
}