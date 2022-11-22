const galleryButton = document.querySelectorAll('.gallery-but')
const galleryItem = document.querySelectorAll('.gallery-item')

galleryButton.addEventListener('mouseover', () => {
    if(galleryItem.classList != 'shadow') {
        console.log('hui')
        galleryItem.classList.add('shadow')
        }else {
            galleryItem.classList.remove('shadow')    
        }
})

