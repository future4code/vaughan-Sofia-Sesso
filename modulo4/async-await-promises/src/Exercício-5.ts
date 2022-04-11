import axios from 'axios'
import { baseURL } from './baseURL'

const notifySubscribers = async (subscriberIds: string[]): Promise<void> => {
    try {
        for (const subscriberId of subscriberIds) {
            axios.post(`${baseURL}/notifications`, {
                subscriberId,
                message: "Novas notícias!"
            })
            console.log(`Notificação enviada para subscriber ${subscriberId}`)
        }
        console.log("Notificações enviadas!")
    }
    catch (err: any) {
        console.log(err.response?.data || err.message)
    }
}