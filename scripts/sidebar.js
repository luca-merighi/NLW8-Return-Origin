const body = document.querySelector('body')
const sidebar = document.querySelector('#sidebar') 
const toggleSidebarIcons = document.querySelector('.toggle-sidebar-icons')
const sidebarLinks = document.querySelectorAll('#sidebar .container .sidebar-links li a')
const socialMediaLinks = document.querySelectorAll('#sidebar .container .social-media-links li a')

const header = document.querySelector('.header')
const navHeight = header.offsetHeight

const logo = document.querySelector('.header .nav .logo')
const menuIcon = document.querySelector('.menu-icon')
const closeIcon = document.querySelector('.close-icon')

function addHeaderColors() {
    header.classList.add('scrolling')
    menuIcon.classList.add('scrolling')
    logo.classList.add('scrolling')
}

function removeHeaderColors() {
    header.classList.remove('scrolling')
    menuIcon.classList.remove('scrolling')
    logo.classList.remove('scrolling')
}

function openOrCloseSidebar() {
    body.classList.toggle('lock-scroll')
    sidebar.classList.toggle('show')

    menuIcon.classList.toggle('hide')
    closeIcon.classList.toggle('hide')
}

toggleSidebarIcons.addEventListener('click', () => {
    openOrCloseSidebar()
    addHeaderColors()

    if(!sidebar.classList.contains('show') && window.scrollY <= navHeight) {
        removeHeaderColors()
    }
})

sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        openOrCloseSidebar()
    })
})

socialMediaLinks.forEach(link => {
    link.addEventListener('click', () => {
        openOrCloseSidebar()
        if(window.scrollY == 0) {
            removeHeaderColors()
        }
    })
})

// Acessibilidade
toggleSidebarIcons.addEventListener('keypress', (event) => {
    if(event.keyCode === 13) {
        openOrCloseSidebar()
        addHeaderColors()
    }

    if(!sidebar.classList.contains('show') && window.scrollY <= navHeight) {
        removeHeaderColors()
    }
})

sidebarLinks.forEach(link => {
    link.addEventListener('keypress', (event) => {
        if(event.keyCode === 13) {
            openOrCloseSidebar()
            addHeaderColors()
        }
    })
})

socialMediaLinks.forEach(link => {
    link.addEventListener('keypress', (event) => {
        if(event.keyCode === 13) {
            openOrCloseSidebar()
            if(window.scrollY == 0) {
                removeHeaderColors()
            }
        }
    })
})