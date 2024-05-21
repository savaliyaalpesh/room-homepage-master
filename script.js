const headingSection = document.querySelector('.heading_section')
const burgerMenu = document.getElementById('burgerMenu')
const gray = document.querySelector('.gray')
const closeMenu = document.getElementById('closeMenu')
const leftArrow = document.getElementById('leftArrow')
const rightArrow = document.getElementById('rightArrow')
const discoverSectionH1 = document.querySelector('.discover_section > h1')
const discoverSectionP = document.querySelector(".discover_section > p")


let page = 0

const content = [
    {
        h1: "Discover innovative ways to decorate",
        p: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
        h1: "We are available all across the globe",
        p: "With stores all over the world, it'seasy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country, Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        h1: "Manufactured with the best materials",
        p: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
]

const changeContent = () => {
    discoverSectionH1.textContent = content[page].h1
    discoverSectionP.textContent = content[page].p
}

const removeClass = () => {
    headingSection.classList.remove('hero1')
    headingSection.classList.remove('hero2')
    headingSection.classList.remove('hero3')
}

const changeClass = () => {
    removeClass()
    headingSection.classList.add(`hero${page + 1}`)
}

burgerMenu.addEventListener('click', () => {
    gray.classList.toggle('active')
})

gray.addEventListener('click', e => {
    if (e.target !== gray) return
    gray.classList.toggle('active')
})

closeMenu.addEventListener('click', () => {
    gray.classList.toggle('active')
})

leftArrow.addEventListener('click', () => {
    page === 0 ? page = 2 : page--
    changeContent()
    changeClass()
})
rightArrow.addEventListener('click', () => {
    page === 2 ? page = 0 : page++
    changeContent()
    changeClass()
})
