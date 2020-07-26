
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
export default initAccordion;