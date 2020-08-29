import outSideClick from './outsideclick';

export default function dropdownMenu() {

  const subMenu = document.querySelectorAll('[data-dropdown]')

  subMenu.forEach((item) => {
    ['touchstart', 'click'].forEach((userEvent) => {
      item.addEventListener(userEvent, handleClick)
    })
  })

  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle('active')
    outSideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active')
    })
  }
}
