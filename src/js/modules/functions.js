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

  if(burger && menu){
    burger.addEventListener('click', ()=>{
      burger.classList.toggle('--active')
      menu.classList.toggle('--active')
      body.classList.toggle('lock')
    })
  }
}





