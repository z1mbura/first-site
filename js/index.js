const galleryButton = document.querySelectorAll('.gallery-but')
const galleryItem = document.querySelectorAll('.gallery-item')

galleryButton.forEach(function(item) {
    item.addEventListener('mouseover', (event) => {
        if(galleryItem.classList != 'shadow') {
            galleryItem[int(item)].classList.add('shadow')
        }
    })
    item.addEventListener('mouseout', (event) => {
        galleryItem[int(item)].classList.remove('shadow')
    })
})


