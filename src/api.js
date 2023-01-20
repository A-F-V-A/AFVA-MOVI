import { API_KEY } from "./secrets.js";

export const api = axios.create({
    baseURL : 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
    },
    params: {
        'api_key': API_KEY,
        "language": "es-ES",
    },
})

export const URL_IMG = (endPoint = 'original') => `https://image.tmdb.org/t/p/${endPoint}/`
