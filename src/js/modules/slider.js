import {Swiper} from "swiper";

export function popularSlider() {
    const swiper = new Swiper('.popular-slider', {
        spaceBetween: 20,
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.popular-slider-next',
            prevEl: '.popular-slider-prev',
        },
        breakpoints: {
            992: {
                slidesPerView: 3
            },
            660: {
                slidesPerView: 2
            }
        }
    });
}

export function reviewsSlider() {
    const swiper = new Swiper('.slider-reviews', {
        spaceBetween: 20,
        slidesPerView: 1,
        autoHeight: true,
        loop: false,
        navigation: {
            nextEl: '.slider-reviews-next',
            prevEl: '.slider-reviews-prev',
        },
    });
}

export function gallerySlider() {
    const galleryItems = document.querySelectorAll('.gallery__item')

    if (galleryItems.length > 0) {
        galleryItems.forEach(item => {
            new Swiper(item, {
                slidesPerView: 1,
                loop: true,
                autoplay: {
                    delay: 5000
                },
                effect: 'fade'
            })
        })
    }
}