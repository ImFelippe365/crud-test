import axios from "axios"

const homologUrl = "http://localhost:8080/"

export const api = axios.create({
    baseURL: homologUrl
})