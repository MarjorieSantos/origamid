//listar 5 objetos nativos
// object
// string
// Array
// function
// number

// listar 5 objetos do browser
// window
// history
// document
// nodeList
// HTMLCollection

//listar 2 métodos, propriedadas ou objetos presentes do chrome que não existem no firefox

if (typeof window.onafterprint !== 'undefined') {
    console.log('existe')
} else {
    console.log('não existe')
}


if (typeof document.adoptNode !== 'undefined') {
    console.log('existe')
} else {
    console.log('não existe')
}


//firefox não existe
if (typeof document.webkistVisibilityState !== 'undefined') {
    console.log('existe')
} else {
    console.log('não existe')
}