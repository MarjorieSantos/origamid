export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');
    numeros.forEach(numeros => {
      const total = +numeros.innerText;
      const incremento = Math.floor(total / 100)
      let start = 0
      const timer = setInterval(() => {
        start = start + incremento
        numeros.innerText = start;
        if (start > total) {
          numeros.innerText = total;
          clearInterval(timer)
        }
      }, 50)
    })
  }


  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect()
      animaNumeros()
    }
  }

  const observeTarget = document.querySelector('.numeros')
  const observer = new MutationObserver(handleMutation)


  observer.observe(observeTarget, { attributes: true })
}
