//construtor de string
// toda string possui as propriedades 

const comida = 'pizza';
const agua = new String('agua') //retorna um objeto
const frase = 'a melhor comida'

//PROPRIEDADES -- alguns exemples

//lenght
console.log(comida.length); //5
console.log(comida[3]); //z
console.log(frase[frase.length - 1]); //a


// charAt(n)
console.log(comida.charAt(0)); //p


//concat()
const fraseFinal = comida.concat(frase)
console.log(fraseFinal)


//includes == procura na string
const fruta = 'banana';
const lista = 'banana, maça, laranja';
console.log(lista.includes(fruta)) //true
console.log(fruta.includes(lista)) //false
console.log(lista.includes(fruta, 14)) //coeçar a partir do index 14 = false


//começa com
console.log(fruta.startsWith('ba'));  //true

//termina com 
console.log(fruta.endsWith('na')); //true


// corta a string com os valores de inicio e fim
const transação = 'depósito do cliente';
console.log(transação.slice(0, 3)) //dep
console.log(transação.slice(2, 8)) //pósito
console.log(transação.slice(-4)) //ente =>  pegou 4 ultimos caracteres