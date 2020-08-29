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



  function outSideClick(element, event, callback) {
    const html = document.documentElement;
    const outside = "data-outside";
    if (element.hasAttribute(outside)) {
      event.forEach(userevent => {
        html.addEventListener('click', handleOutSide)
      })

      element.setAttribute(outside, '')
    }

    function handleOutSide(event) {
      if (!element.contains(event.target)) {
        event.forEach(userevent => {
          html.removeEventListener('click', handleOutSide)
        })

        element.removeAttribute(outside)
        callback()
      }

    }
  }
}
