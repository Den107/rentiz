import {Swiper} from "swiper";

export function slider() {
    const swiper = new Swiper('.popular-slider', {
        spaceBetween: 20,
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
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