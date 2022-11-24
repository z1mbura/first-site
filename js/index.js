const galleryButton = document.querySelectorAll('.gallery-but')
const galleryItem = document.querySelectorAll('.gallery-item')

const anchors = document.querySelectorAll('a.nav_item')
function Skroll() {
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href')
    if(id === 0 && page===true){
        document.querySelector(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
        setPage(false);
      } 
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
