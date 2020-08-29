export default function menuMobile() {

}

const menuButton = document.querySelector('[data-menu="button"]')
const menuList = document.querySelector('[data-menu="list"]')

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