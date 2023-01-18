const navMobile = document.querySelector('.nav-mobile')

export const startMobile = () =>{
    const menu = document.querySelector('.bar')
    menu.addEventListener('click',function(){
        navMobile.classList.toggle('inactive')
        this.classList.toggle('bar-active')
    })
}