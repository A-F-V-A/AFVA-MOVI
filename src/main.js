import { trendingMovi } from './header.js'
import { trendingPrew } from './trendingPrew.js'

trendingMovi()
trendingPrew()

const nav = document.querySelector('nav.nav-main')

window.addEventListener("scroll",()=>{
    nav.classList.toggle("sticky",window.scrollY > 100)
})

const B_prev = document.querySelector('#B_prev')
const B_next = document.querySelector('#B_next')
const carousel = document.querySelector('.carousel-container')




B_prev.onclick = () => Move(1)
B_next.onclick = () => Move(2)


function Move(value){
    if(value == 1)
        carousel.scroll(carousel.scrollLeft - 266,0)
    else
        carousel.scroll(carousel.scrollLeft + 266,0)
}