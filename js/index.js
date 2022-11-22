const galleryButton = document.querySelectorAll('.gallery-but')
const galleryItem = document.querySelectorAll('.gallery-item')

galleryButton.forEach(function(item) {
    item.addEventListener('mouseover', (event) => {
        if(galleryItem.classList != 'shadow') {
            galleryItem[event.target].classList.add('shadow')
        }
    })
    item.addEventListener('mouseout', (event) => {
        galleryItem[event.target].classList.remove('shadow')
    })
})


