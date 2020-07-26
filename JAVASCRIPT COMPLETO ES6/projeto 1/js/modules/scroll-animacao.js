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
export default initAnimaScroll;