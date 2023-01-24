import { api, URL_IMG } from './api.js'

const container = document.querySelector('#trending .carousel-container')


export function movieOnclick(event){
    const id_movi = event.target.dataset.id_movi
    if(event.target.classList.contains('box-img')){
        location.hash = `#movie=${id_movi}`
    }
}

export function trending ({results:movi}){

    const HTML = []
    movi.forEach(movi => {

        const boxContainer = document.createElement('div')
        boxContainer.classList.add('box-container')

        const boxImg = document.createElement('div')
        boxImg.classList.add('box-img')
        boxImg.dataset.id_movi = movi.id
        boxImg.style.backgroundImage = `url(${URL_IMG('w300') + movi.poster_path})`

        const boxText = document.createElement('div')
        boxText.classList.add('box-text')

        const h4 = document.createElement('h4')
        h4.textContent = movi.title

        const aside = document.createElement('div')
        aside.classList.add('aside')

        const span = document.createElement('span')
        span.textContent = movi.release_date

        const boxIconts = document.createElement('div')
        boxIconts.classList.add('box-iconts')

        const show = document.createElement('i')
        show.classList ='bx bx-show'

        const star = document.createElement('i')
        star.classList = 'bx bx-star'

        boxIconts.append(show,star)
        aside.append(span,boxIconts)
        boxText.append(h4,aside)
        boxContainer.append(boxImg,boxText)


        HTML.push(boxContainer)
        
    })
    return HTML

}

export async function trendingPrew(){
    const { data } = await api('trending/movie/day')
    container.innerHTML = ''
    container.append(...trending(data))
    container.addEventListener('click',movieOnclick)
}

