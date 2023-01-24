import { api, URL_IMG } from './api.js'

export async function search(){
    const { data } = await api('trending/movie/day')
    const  trending  = data.results
    searchBanner(trending[random(0,trending.length)])
    btn.addEventListener('click',searchMovi)
}

function searchBanner(movi){
    const bannerSearch = document.querySelector('.search')
    const src = URL_IMG() + movi.backdrop_path

    bannerSearch.style.backgroundImage = `url(${src})`
}

const random = (min, max) => {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}


function searchMovi(){
    const nameMovi = document.querySelector('input.I_search')
    if(nameMovi.value  !== ""){
        location.hash = `#search=${nameMovi.value}`
        nameMovi.value = ''
    }
    
}



const btn = document.querySelector('#B_search')