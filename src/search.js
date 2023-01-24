import { api, URL_IMG } from './api.js'

export async function search(){
    const { data } = await api('trending/movie/day')
    const  trending  = data.results.sort((a,b) => b.vote_average - a.vote_average)[8]
    searchBanner(trending)
}

function searchBanner(movi){
    const bannerSearch = document.querySelector('.search')
    const src = URL_IMG() + movi.backdrop_path

    bannerSearch.style.backgroundImage = `url(${src})`
}