import { trendingMovi } from './header.js'
import { trendingPrew } from './trendingPrew.js'
import { genreMovi } from './genre.js'
import { search } from './search.js'


// Informacion inicial

trendingMovi()
trendingPrew()
genreMovi()
search()

//Interectividad Base

const nav = document.querySelector('nav.nav-main')

window.addEventListener("scroll",() => nav.classList.toggle("sticky",window.scrollY > 100))

const B_prev = document.querySelector('#B_prev'), B_next = document.querySelector('#B_next')

B_prev.onclick = () => Move()
B_next.onclick = () => Move(true)

function Move(value = false){
    const carousel = document.querySelector('.carousel-container')
    if(!value)
        carousel.scroll(carousel.scrollLeft - 266,0)
    else
        carousel.scroll(carousel.scrollLeft + 266,0)
}
