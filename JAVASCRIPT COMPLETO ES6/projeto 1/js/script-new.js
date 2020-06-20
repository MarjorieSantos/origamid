const initTabNav = () => {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  //varificar se os itens estão rpesentes na página
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo')

    const activeTab = (index) => {
      tabContent.forEach((section) => {
        section.classList.remove('ativo')
      })
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index)
      })
    })
  }
}
initTabNav()

const initAccordion = () => {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const classActive = 'ativo';

  if (accordionList.length) {
    accordionList[0].classList.add(classActive);
    accordionList[0].nextElementSibling.classList.add(classActive);

    function activeAccordion() {
      //this = referência ao item que está sendo clicado
      this.classList.toggle(classActive);
      this.nextElementSibling.classList.toggle(classActive);
      console.log(this.nextElementSibling);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    })
  }
}
initAccordion();

const initScrollSuave = () => {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  const scrollToSection = (event) => {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    //forma alternativa
    // const topSection = section.offsetTop;
    // window.scrollTo({
    //   top: topSection,
    //   behavior: 'smooth',
    // })
  }

  linksInternos.forEach((item) => {
    item.addEventListener('click', scrollToSection)
  })
}
initScrollSuave();

const initAnimaScroll = () => {
  const sections = document.querySelectorAll('.js-scroll');
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    const animaScroll = () => {
      sections.forEach((section) => {
        //getBoundingClientRect = relação do elemento ao topo da página
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade;
        if (isSectionVisible < 0) {
          section.classList.add('ativo')
        }

      })
    }

    window.addEventListener('scroll', animaScroll)
  }
}
initAnimaScroll();

