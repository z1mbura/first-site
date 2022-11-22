const galleryButton = document.querySelectorAll('.gallery-but')
const galleryItem = document.querySelectorAll('.gallery-item')

galleryButton.forEach(function(item) {
    item.addEventListener('mouseover', () => {
        if(galleryItem.classList != 'shadow') {
            galleryItem[1].classList.add('shadow')
        }
    })
    item.addEventListener('mouseout', () => {
        galleryItem[1].classList.remove('shadow')
    })
})


