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
            const direction = tabContent[index].dataset.anime;
            tabContent[index].classList.add('ativo', direction);
        }
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index)
            })
        })
    }
}
export default initTabNav;