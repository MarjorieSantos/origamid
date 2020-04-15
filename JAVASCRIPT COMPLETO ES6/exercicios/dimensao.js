//Verificar a distância da primeira imagem em relação ao topo da página
const img = document.querySelector("img") //selecionou a primeira imagem!
const imgtop = img.offsetTop //pegou a distâcia entre a imagem e o topo da página

console.log(imgtop)

//Retornar a soma da largura de todas as imagens

function somaImagens() {
    const imgs = document.querySelectorAll("img")  //pegou todas as imagens
    let soma = 0
    imgs.forEach((imagem) => {//pegou a largura de CADA imagem 
        soma =+ imagem.offsetWidth
    });
    console.log(soma)
}

window.onload = function () {
    somaImagens()
}


//Verificar se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo.  48px/48px de acordo com o google

const link = document.querySelectorAll("a")

links.forEach((link) =>{
    const linkWidth = link.offsetWidth
    const linkHeight = link.offsetWidth
    if(linkWidth >= 48 && linkHeight >= 48){
        console.log(link, "possui acessibilidade")
    } else{
        console.log(link, "não possui boa acessibilidade")
    }
})

//se o brrowser for menor que 720

const browserSmall = window.matchMedia("(max-width: 720px)").matches
if (browserSmall){
    const manu = document.querySelector(".menu")
    menu.classList.add("menu-mobile")
}
