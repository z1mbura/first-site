const galleryButton = document.querySelectorAll('.gallery-but')
const galleryItem = document.querySelectorAll('.gallery-item')

galleryButton.forEach((item, index) => {
    item.addEventListener('mouseover', (event) => {
        if(galleryItem.classList != 'shadow') {
            galleryItem[index].classList.add('shadow')
            item[index].classList.add('hover')
        }
    })
    item.addEventListener('mouseout', (event) => {
        galleryItem[index].classList.remove('shadow')
        item[index].classList.remove('hover')
    })
})


