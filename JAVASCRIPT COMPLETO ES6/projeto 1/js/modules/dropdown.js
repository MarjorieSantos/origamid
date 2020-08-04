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
    outSideClick((this) => {
      this.classList.remove('active')
    })
  }



  function outSideClick(element, callback) {
    const html = document.documentElement;
    html.addEventListener('click', handleOutSide)
    function handleOutSide(event) {
      if (!element.contains(event.target)) {
        html.removeEventListener('click', handleOutSide)

        callback()
      }

    }
  }
}
