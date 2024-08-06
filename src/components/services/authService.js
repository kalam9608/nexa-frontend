import axios from "axios"

export const createUser = async (url, payload) => {

    return axios.post(url, payload)
}