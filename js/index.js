const galleryButton = document.querySelector('.gallery-but')
const galleryItem = document.querySelector('.gallery-item')

galleryButton.addEventListener('mouseover', () => {
    if(galleryItem.classList != 'shadow') {
        console.log('hui')
        galleryItem.classList.add('shadow')
        }else {
            galleryItem.classList.remove('shadow')    
        }
})

