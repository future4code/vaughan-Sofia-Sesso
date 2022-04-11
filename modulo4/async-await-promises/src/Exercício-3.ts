import axios from 'axios'
import { baseURL } from './baseURL'

// a) Não teremos erro, porque os assinantes retornados na requisição dos exercícios anteriores vem com os mesmos tipos que estão descritos no 
// type user.
// b) Porque quando mapeamos o tipo retornado de uma Promise fica mais fácil para encontrarmos erros na requisição.
// c) 

export type Subscriber = {
    id: string,
    name: string,
    email: string
}

export const getAllSubscribersTyped = async (): Promise<Subscriber[]> => {
    const result = await axios.get(`${baseURL}/subscribers`)

    return result.data
}