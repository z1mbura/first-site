const galleryButton = document.querySelectorAll('.gallery-but')
const galleryItem = document.querySelectorAll('.gallery-item')

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

galleryButton.forEach((item, index) => {
    item.addEventListener('mouseover', (event) => {
        if(galleryItem.classList != 'shadow') {
            galleryItem[index].classList.add('shadow')
            galleryButton[index].classList.add('hover')
        }
    })
    item.addEventListener('mouseout', (event) => {
        galleryItem[index].classList.remove('shadow')
        galleryButton[index].classList.remove('hover')
    })
})


