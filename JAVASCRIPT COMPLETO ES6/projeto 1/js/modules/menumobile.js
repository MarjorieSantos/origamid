import outSideClick from './outsideclick.js'

export default function menuMobile() {
  const eventos = ['click', 'touchstart']
  const menuButton = document.querySelector('[data-menu="button"]')
  const menuList = document.querySelector('[data-menu="list"]')

  if (menuButton) {
    function OpenMenu(event) {
      menuList.classList.add('ativo')
      menuButton.classList.add('ativo')
      outSideClick(menuList, eventos, () => {
        menuList.classList.remove('ativo')
        menuButton.classList.remove('ativo')
      })
    }
    eventos.forEach((evento) => menuButton.addEventListener(evento, OpenMenu))
  }
}

