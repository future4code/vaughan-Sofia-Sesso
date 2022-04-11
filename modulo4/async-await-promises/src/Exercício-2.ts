import axios from 'axios'
import { baseURL } from './baseURL'

// a) A diferença na sintaxe das funções é que a função nomeada recebe um nome, e a arrow function é atribuída à uma variável.
// b)

const getAllSubscribersArrowFunction = async (): Promise<any[]> => {
    const result = await axios.get(`${baseURL}/subscribers`)

    return result.data
}