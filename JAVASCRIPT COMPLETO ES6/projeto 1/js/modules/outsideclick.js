export default function outSideClick(element, event, callback) {
  const html = document.documentElement;
  const outside = "data-outside";
  if (!element.hasAttribute(outside)) {
    event.forEach(userevent => {
      setTimeout(() => html.addEventListener(userevent, handleOutSide))
    })
    element.setAttribute(outside, '')
  }

  function handleOutSide(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside)
      event.forEach(userevent => {
        html.removeEventListener(userevent, handleOutSide)
      })
      callback()
    }

  }
}