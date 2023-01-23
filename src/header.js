import { api, URL_IMG } from './api.js'

export async function trendingMovi(){
    const { data } = await api('trending/movie/day')
    const [ trending ] = data.results.sort((a,b) => b.vote_average - a.vote_average)
   // const  trending  = data.results.sort((a,b) => b.vote_average - a.vote_average)[3]
    homeTrending(trending)
}

const homeTrending = (movi) =>{
    
    const home = document.querySelector('#home')

    const score = document.querySelector('#home .one')  
    score.textContent = movi.vote_average

    const title = document.querySelector('#home h1')  
    title.textContent = movi.title

    const overview = document.querySelector('.home-text p')  
    overview.textContent = movi.overview

    const date = document.querySelector('.home-text h3')  
    date.textContent = movi.release_date

    const src = URL_IMG() + movi.backdrop_path

    home.style.backgroundImage = `url(${src})`
}

