import { baseURL } from '../baseURL'
import axios from 'axios'
import { Address } from '../types'

export const getAddress = async (zipcode: string, number: string, complement: string | null): Promise<Address | null> => {
    try {
        const addressInfo = await axios.get(`${baseURL}/${zipcode}/json`)

        const address: Address = {
            street: addressInfo.data.logradouro,
            neighbourhood: addressInfo.data.bairro,
            city: addressInfo.data.localidade,
            state: addressInfo.data.uf,
            zipcode,
            number,
            complement
        }
        return address
    }
    catch (err: any) {
        return null
    }
}