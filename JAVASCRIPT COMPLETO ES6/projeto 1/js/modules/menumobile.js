import outSideClick from './outsideclick.js'

export default function menuMobile() {

}

const menuButton = document.querySelector('[data-menu="button"]')
const menuList = document.querySelector('[data-menu="list"]')

function OpenMenu(event) {
    menuList.classList.add('ativo')
    menuButton.classList.add('ativo')
    outSideClick(menuList, ['click', 'touchstart'], () => {
        menuList.classList.remove('ativo')
        menuButton.classList.remove('ativo')
    })

}

menuButton.addEventListener("click", OpenMenu)