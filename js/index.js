const galleryButton = document.querySelectorAll('.gallery-but')
const galleryItem = document.querySelectorAll('.gallery-item')

const anchors = document.querySelectorAll('a.nav_item')
function Skroll() {
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href')
        setTimeout(() => document.querySelector(blockID).scrollIntoView({
          behavior:'smooth',
          block: 'start'
        }), 1000); 
    })
  }
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

Skroll()
