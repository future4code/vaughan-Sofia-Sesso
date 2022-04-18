import axios from 'axios'
import { baseURL } from './baseURL'

// a) Ela envia um array de Promises de uma vez só, e nesse caso faz com que as requisições para cada noticação sejam enviadas mesmo que outras
// não tenham recebido uma resposta ainda.
// b) A vantagem de usar Promise.all é que não precisamos esperar pela resposta de uma requisição para enviarmos a próxima.
// c)

export const notifySubscribersPromiseAll = async (subscriberIds: string[]): Promise<void> => {
    try {
        const requests = subscriberIds.map((subscriberId: string) => {
            return axios.post(`${baseURL}/notifications`, {
                subscriberId,
                message: "Novas notícias!"
            })
        })
        await Promise.all(requests)
        console.log("Notificações enviadas!")
    }
    catch (err: any) {
        console.log(err.response?.data || err.message)
    }
}