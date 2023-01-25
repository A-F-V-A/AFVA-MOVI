import { trendingMovi, homeTrending } from './header.js'
import { trendingPrew, trending, movieOnclick} from './trendingPrew.js'
import { genreMovi } from './genre.js'
import { search } from './search.js'
import { api, URL_IMG } from './api.js'

const main = document.querySelector('main')


function navigator(){

    if(location.hash.startsWith('#search='))
        searchNav()
    else if(location.hash.startsWith('#movie='))
        movie()
    else if(location.hash.startsWith('#category='))
        category() 
    else
        home()
    
}



const home = () =>{
    main.classList.remove('inactive')
    document.querySelector('#home .home-text').classList.remove('inactive')
    document.querySelector('.generic')?.remove()
    trendingMovi()
    trendingPrew()
    genreMovi()
    search()
}

const movie = () => {
    document.querySelector('#home .home-text').classList.remove('inactive')
    document.querySelector('.generic')?.remove()
    document.querySelector('.temp')?.remove()
    main.classList.add('inactive')


    const [,id] = location.hash.split('=')

    getMovieById(id)

}

async function getMovieById (id){
    const { data:movie } = await api(`movie/${id}`)
    homeTrending(movie)
}

const category = () =>{
    document.querySelector('#home .home-text').classList.add('inactive')
    main.classList.add('inactive')
    document.querySelector('.temp')?.remove()
    const data = location.hash.split('=')[1]
    const [id,name] =  data.split('-')
    getMoviesByCategory(id,name)

}

async function getMoviesByCategory (id,categoryName) {
    const { data } = await api('discover/movie',{
        params:{
            with_genres:id
        },
    })
    const [ img ] = data.results
    const boxMovi = trending(data)
    const h2 = document.createElement('h2')
    h2.textContent = categoryName
    const categoryContainer = document.createElement('div')
    categoryContainer.className = 'generic'
    categoryContainer.append(h2,...boxMovi)   
    document.querySelector('#home').style.backgroundImage = `url(${URL_IMG() + img.backdrop_path})`
    document.querySelector('#home').append(categoryContainer)
    categoryContainer.addEventListener('click',movieOnclick)
    window.scroll(0, 0);

}

const searchNav = () =>{
    document.querySelector('.generic')?.remove()
    document.querySelector('#home .home-text').classList.add('inactive')
    main.classList.add('inactive')
    const [,name] = location.hash.split('=')
    getMoviesBysearch(name.replace('%20',' '))


}

async function getMoviesBysearch(name){
    const { data } = await api('search/movie',{
        params:{
            query:name
        },
    })
    if(data.results.length == 0){
        document.querySelector('#home').innerHTML +=`
            <div class="temp" style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    z-index: 2;
                "
            >
                <h2>No se encuentran resultados con ${name}</h2>
            </div>
        ` 
    }else{
        document.querySelector('.temp')?.remove()
        const [ img ] = data.results
        const boxMovi = trending(data)
        const categoryContainer = document.createElement('div')
        categoryContainer.className = 'generic'
        categoryContainer.append(...boxMovi)   
        if(img.backdrop_path != null)
            document.querySelector('#home').style.backgroundImage = `url(${URL_IMG() + img?.backdrop_path})`
        document.querySelector('#home').append(categoryContainer)
        categoryContainer.addEventListener('click',movieOnclick)
    }

    window.scroll(0, 0);
}




export const runNav = () =>{
    window.addEventListener('DOMContentLoaded',navigator,false)
    window.addEventListener('hashchange',navigator,false)
}