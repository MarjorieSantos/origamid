//OBJETOS

//NATIVE
//objevt
// string
// Array
// function


//HOST
//nodeList é um objeto do browser

//USER
//qualquer objeto que você criar ou que importar de alguma biblioteca externa

//browsers diferentes e versoês de browsers possuem objetos com propriedades e métodos diferentes
//babel - tranforma em código antigo, mesmo em código novo, para poder rodar em vários browsers 


//BIBLIOTECAS
//jquery - surgiu para resolver inconsistência entre browsers

if (typeof Array.from !== 'undefined') {
    console.log('existe');
} else {
    // vai ser executado mesmo se o primeiro não existir, assim adaptando ao browser que está sendo usado
    console.log('não existe');
}

//API - interface de aplicativo de programação 
// utiliza um programa de computador para interagindo com a itnerface através de códigos