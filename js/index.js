const galleryButton = document.querySelectorAll('.gallery-but')
const galleryItem = document.querySelectorAll('.gallery-item')

galleryButton.forEach(function(i, element) {
    element.addEventListener('mouseover', () => {
        if(galleryItem.classList != 'shadow') {
            console.log('hui')
            galleryItem[i].classList.add('shadow')
            }else {
                galleryItem[i].classList.remove('shadow')    
            }
        
    })
})


