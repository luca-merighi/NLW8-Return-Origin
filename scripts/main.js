function changeHeaderWhenScrolling() {
    const header = document.querySelector('.header')
    
    const logo = document.querySelector('.header .nav .logo')
    const menuIcon = document.querySelector('.menu-icon')

    const sidebar = document.querySelector('#sidebar') 

    if(window.scrollY > 0 || sidebar.classList.contains('show')) {
        header.classList.add('scrolling')
        menuIcon.classList.add('scrolling')
        logo.classList.add('scrolling')
    } else {
        header.classList.remove('scrolling')
        menuIcon.classList.remove('scrolling')
        logo.classList.remove('scrolling')
    }
}

function backToTop() {
    const backToTopButton = document.querySelector('.back-to-top-button')

    if(window.scrollY >= 900) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

const sections = document.querySelectorAll('main section[id]')
function activateLinkAtCurrentSection() {
    const checkpoint = window.scrollY + (window.innerHeight / 8) * 4

    for(const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop 
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight
        
        if(checkpointStart && checkpointEnd) {
            document
            .querySelector('.header .nav .links li a[href*=' + sectionId + ']')
            .classList.add('active')
        } else {
            document
            .querySelector('.header .nav .links li a[href*=' + sectionId + ']')
            .classList.remove('active')
        }
    }
}

window.addEventListener('scroll', () => {
    changeHeaderWhenScrolling()
    backToTop()
    activateLinkAtCurrentSection()
})