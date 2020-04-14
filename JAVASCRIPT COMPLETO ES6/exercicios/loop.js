//Criar um array com os anos que o Brasil ganhou a copa
//1959, 1962, 1970, 1994, 2002
//utilize lopp para mostrar no console "O brasil ganhou a copa de" + 

 let anosCopa = [1959, 1962, 1970, 1994, 2002];
 for(let i=0; i < anosCopa.length; i++){
    console.log("O Brasil ganhou a copa de " + anosCopa[i]) 
}

//Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
let frutas = ["banana", "maça", "pera", "uva", "melancia"]

for(let i=0; i < frutas.length; i++){
    console.log(frutas[i])
     if (frutas[i] === "pera") {
         break
    }
}

//Coloque a última fruta do array de frutas em uma variável sem remover a mesma do array

let frutas = ["banana", "maça", "pera", "uva", "melancia"]
let ultima_frutas = frutas[frutas.length-1]

for(let i=0; i < frutas.length; i++){
    console.log(frutas[i])
}
