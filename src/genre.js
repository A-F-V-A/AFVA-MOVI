import { api } from './api.js'

export async function genreMovi(){
    const { data } = await api('genre/movie/list')
    const box = genreDom(data)
    const containerBox = document.querySelector('.genre-box')
    containerBox.innerHTML = '' //Limpia el contennido
    containerBox.append(...box)
    containerBox.addEventListener('click',genreOnclick)
}

function genreDom ({genres:gen}){
    const HTML = []
    for(let i = 0; i < 6; i++){
        const box = document.createElement('div')
        box.classList.add('box')
        box.dataset.id_genre = gen[i].id
        const h3 = document.createElement('h3')
        h3.textContent = gen[i].name
        box.append(h3)
        HTML.push(box)
    }
    return HTML
}

function genreOnclick (event){
    const id_genre = event.target.dataset.id_genre
    const [ name ] = event.target.children
    if(event.target.classList.contains('box')){
        location.hash = `#category=${id_genre}-${name.textContent}`
    }
}
