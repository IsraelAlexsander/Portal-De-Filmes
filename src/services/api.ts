import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '36d44517d96a698e5baa1b1acb03c479',
        language: 'pt-BR',
        include_adult: true,
    }
})