const navBurger = document.querySelector('.con')
const navBlock = document.querySelector('.header-nav')

navBurger.addEventListener('click', () => {
    if(navBurger.classList != 'active'){
        navBurger.classList.toggle('active')
        navBlock.classList.toggle('open')
    }

})


const galleryButton = document.querySelector('.gallery-but')
const galleryItem = document.querySelector('.gallery-item')


galleryButton.addEventListener('mouseout', () => {
    if(galleryItem.classList != 'shadow') {
        console.log('hui')
        galleryItem.classList.add('shadow')
        }else {
            galleryItem.classList.remove('shadow')    
        }
    })

