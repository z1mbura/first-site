const galleryButton = document.querySelectorAll('.gallery-but')
const galleryItem = document.querySelectorAll('.gallery-item')

galleryButton.forEach(function(item) {
    item.addEventListener('mouseover', () => {
        if(galleryItem.classList != 'shadow') {
            console.log('hui')
            galleryItem[1].classList.add('shadow')
            }else {
                galleryItem[1].classList.remove('shadow')    
            }
        
    })
})


