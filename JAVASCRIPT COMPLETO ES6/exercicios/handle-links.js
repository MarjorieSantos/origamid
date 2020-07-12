//exemplo
const img = document.querySelector("img");

function callback(){
    console.log ("clicou")
}

img.addEventListener("click", callback)


//prevent default -- previne o comportamento padrão do browser

const linkEx = document.querySelector('a[href^="http"]');

function handleLinkEx(event){  
    event.preventDefault()
    console.log('clicou')
}

linkEx.addEventListener('click', handleLinkEx)

//this  --- faz referência ao elemento 
const linkEx = document.querySelector('a[href^="http"]');

function handleLinkEx(event){  
    event.preventDefault()
    console.log(this);
    console.log(event.currentTarget)
}

linkEx.addEventListener('click', handleLinkEx) 


//quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma, Previna o padrão desses links
const linkInterno = document.querySelectorAll('a[href^="#"]')

function handleLink(event){
    event.preventDefault()
    linkInterno.forEach((link) => {
        link.classList.remove("ativo")
    })
    event.currentTarget.classList.add("ativo")
}

linkInterno.forEach((link) => {
    linkInterno.addEventListener("click", handleLink)
})


///selecione todos os elementos do site começando a partir do body, ao clicar mostre exatamente quais elementos estão sendo clicados

const elementos = document.querySelectorAll("body *")

function handleElement(event){
    console.log(current.target)
}

todosElementos.forEach((elemento) => {
    elementos.addEventListener("click", handleElement)
})


//utilizando o código anterior, ao invés de mostrar no console, remova o elemento que está sendo clicado, o método remove() remove um elemento

event.target.remove() //só substitui isso

// se o usuário clicar na tecla T. aumente todo o texto do site
//para isso acontecer, tem que colocar no CSS o tamanho da font do HTML
function hanldeClickT(event){
    if(event.key === "t"){
        document.documentElement.classList.toggle("texto maior")
    }
 }

 window.addEventListener("keydown", hanldeClickT)
 







