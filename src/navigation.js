import { trendingMovi } from './header.js'
import { trendingPrew,trending} from './trendingPrew.js'
import { genreMovi } from './genre.js'
import { search } from './search.js'
import { api } from './api.js'

const main = document.querySelector('main')


function navigator(){

    if(location.hash.startsWith('#trends'))
        console.log('TRENDS')
    else if(location.hash.startsWith('#search='))
        console.log('SEARCH')
    else if(location.hash.startsWith('#movie='))
        movie()
    else if(location.hash.startsWith('#category='))
        category() 
    else
        home()
    
}

async function getMoviesByCategory (id,categoryName) {
    const { data } = await api('discover/movie',{
        params:{
            with_genres:id
        },
    })
    
    const boxMovi = trending(data)
    const categoryContainer = document.createElement('div')
    categoryContainer.className = 'generic'
    categoryContainer.append(...boxMovi)
    document.querySelector('#home').append(categoryContainer)

}

const home = () =>{
    main.classList.remove('inactive')
    trendingMovi()
    trendingPrew()
    genreMovi()
    search()
}

const movie = () => {
    document.querySelector('#home .home-text').classList.remove('inactive')
    main.classList.add('inactive')
}

const category = () =>{
    document.querySelector('#home .home-text').classList.add('inactive')
    main.classList.add('inactive')
    const data = location.hash.split('=')[1]
    const [id,name] =  data.split('-')
    getMoviesByCategory(id,name)

}






export const runNav = () =>{
    window.addEventListener('DOMContentLoaded',navigator,false)
    window.addEventListener('hashchange',navigator,false)
}