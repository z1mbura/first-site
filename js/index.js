const navBurger = document.querySelector('.con')
const navBlock = document.querySelector('.header-nav')

navBurger.addEventListener('click', () => {
    if(navBurger.classList != 'active'){
        navBurger.classList.toggle('active')
        navBlock.classList.toggle('open')
    }

})