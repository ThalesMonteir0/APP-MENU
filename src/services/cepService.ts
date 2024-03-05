import axios from "axios"
import {API_VIA_CEP_URL,TYPE_JSON } from '../composables/consts'

export const useGetCepService = async (cep: string) => {
    const urlViaCepCompleted = `${API_VIA_CEP_URL}${cep}/${TYPE_JSON}`
    return await axios.get(urlViaCepCompleted)
}