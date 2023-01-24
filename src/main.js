import { runNav } from './navigation.js'


// Informacion inicial

runNav()

//Interectividad Base

const nav = document.querySelector('nav.nav-main')

const B_nav = document.querySelector('.menu-icono')

B_nav.addEventListener('click',() =>{
    B_nav.classList.toggle('active')
    document.querySelector('.nav-list').classList.toggle('open')
})

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
