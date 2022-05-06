const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    keyboard: true,
    breakpoints: {
        1024: {
            slidesPerView: 3,
            setWrapperSize: true
        }
    }
})