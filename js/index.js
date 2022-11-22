const navBurger = document.querySelector('.con')
const navBlock = document.querySelector('.header-nav')
const galleryButton = document.querySelector('.gallery-but')
const galleryItem = document.querySelector('.gallery-item')
navBurger.addEventListener('click', () => {
    if(navBurger.classList != 'active'){
        navBurger.classList.toggle('active')
        navBlock.classList.toggle('open')
    }

})

galleryButton.addEventListener('mouseover', () => {
    console.log("True")
})

