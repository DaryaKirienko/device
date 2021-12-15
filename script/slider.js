const openFirstSlide = document.querySelector('.first-slide-btn')
const openSecondSlide = document.querySelector('.second-slide-btn')
const openThirdSlide = document.querySelector('.third-slide-btn')
const firstSlide = document.querySelector('.first-slide')
const secondSlide = document.querySelector('.second-slide')
const thirdSlide = document.querySelector('.third-slide')

openFirstSlide.addEventListener('click', () => {
    openFirstSlide.classList.add('active-button')
    openSecondSlide.classList.remove('active-button')
    openThirdSlide.classList.remove('active-button')
    firstSlide.classList.add('active-slide')
    secondSlide.classList.remove('active-slide')
    thirdSlide.classList.remove('active-slide')
})

openSecondSlide.addEventListener('click', () => {
    openFirstSlide.classList.remove('active-button')
    openSecondSlide.classList.add('active-button')
    openThirdSlide.classList.remove('active-button')
    firstSlide.classList.remove('active-slide')
    secondSlide.classList.add('active-slide')
    thirdSlide.classList.remove('active-slide')
})

openThirdSlide.addEventListener('click', () => {
    openFirstSlide.classList.remove('active-button')
    openSecondSlide.classList.remove('active-button')
    openThirdSlide.classList.add('active-button')
    firstSlide.classList.remove('active-slide')
    secondSlide.classList.remove('active-slide')
    thirdSlide.classList.add('active-slide')
})