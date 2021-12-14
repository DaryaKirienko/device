const openMessageModal = document.querySelector('.write-button')
const closeMessageModal = document.querySelector('.close-button')
const messageModal = document.querySelector('.modal-write-us')
const openModalMap = document.querySelector('.contacts-image')
const modalMap = document.querySelector('.modal-map')
const closeMapModal = document.querySelector('.close-map')

openMessageModal.addEventListener('click', () => {
    messageModal.classList.add('modal-active');
})

closeMessageModal.addEventListener('click', () => {
    messageModal.classList.remove('modal-active')
})


openModalMap.addEventListener('click', () => {
    modalMap.classList.add('modal-active')
})

closeMapModal.addEventListener('click', () => {
    modalMap.classList.remove('modal-active')
})