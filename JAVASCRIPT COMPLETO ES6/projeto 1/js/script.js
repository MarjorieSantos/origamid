function initTabNav() {
    const tabMenu = document.querySelectorAll(".js-tabmenu li")
    const tabContent = document.querySelectorAll(".js-tabcontent section")

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo')


        function activeTab(index) { //função que ativa a tab de navegação
            tabContent.forEach((content) => {
                content.classList.remove("ativo")
            })

            tabContent[index].classList.add("ativo")
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener("click", function () {
                activeTab(index)
            });
        })
    }
}

initTabNav()

function initAccordion() {
    const accordionList = document.querySelectorAll(".js-accordion dt")
    const activeClass = "ativo"
    if (accordionList.length) {
        accordionList[0].classList.add(activeClass)
        accordionList[0].nextElementSibling.classList.add(activeClass)

        function activeAccordion(event) {
            event.currentTarget.classList.toggle(activeClass)
            event.currentTarget.nextElementSibling.classList.toggle(activeClass)
        }
        accordionList.forEach((item) => {
            item.addEventListener("click", activeAccordion)
        })
    }
}

initAccordion()

function initScroolSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

    function scrollToSection(event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })

    }
    linksInternos.forEach((link) => {
        link.addEventListener("click", scrollToSection)
    })
}

initScroolSuave()

function initAnimationToScroll() {
    const section = document.querySelectorAll(".js-scroll")
    if (section.length) {
        const windowMetade = window.innerHeight * 0.6

    function animaScroll() {
        section.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top - windowMetade
            if (sectionTop < 0) {
                section.classList.add("ativo")
            }
        })
    }
    animaScroll()
    window.addEventListener("scroll", animaScroll)
    }
}
initAnimationToScroll()