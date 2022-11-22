const galleryButton = document.querySelectorAll('.gallery-but')
const galleryItem = document.querySelectorAll('.gallery-item')

galleryButton.forEach(element => {
    element.addEventListener('mouseover', () => {
        if(galleryItem.classList != 'shadow') {
            console.log('hui')
            galleryItem.classList.add('shadow')
            }else {
                galleryItem.classList.remove('shadow')    
            }
    })
})


