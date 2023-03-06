export function isWebp() {
    function testWebP(callback) {

        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    testWebP(function (support) {

        let className = support === true ? 'webp' : 'no-webp'
        document.documentElement.classList.add(className)
    });
}

export function burger() {
    const burger = document.querySelector('.menu__icon')
    const menu = document.querySelector('.menu')
    const body = document.body

    if (burger && menu) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('--active')
            menu.classList.toggle('--active')
            body.classList.toggle('lock')
        })
    }
}

export function dropDown() {
    const filter = document.querySelector('.filter')

    if (filter) {
        const items = document.querySelectorAll('.block-filter')

        items.forEach(item => {
            item.addEventListener('click', e => {
                item.querySelector('.block-filter__dropdown').classList.toggle('--active')
                item.querySelector('.block-filter__icon').classList.toggle('--active')

                if (e.target.classList.contains('block-filter__item')) {
                    item.querySelector('.block-filter__value').textContent = e.target.textContent
                }
            })
        })
    }
}




