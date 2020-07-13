//array

const instrumentos = ["Guitarra", "Baixo", "Violão"]
const carros = new Array("Corola", "Mustang", "Honda")

carros[1] //Mustang
carros[2] = "ferrari"  //vai substituir o item 3 do array
carros[10] = "parati" // vai adicionar espaços até o item 10
carros.length //11 - tamanho da array

const dados = [new String("Tipo 1"), ["carro", "portas", { cor: "azul", preco: 2000 }]]

//array.from()
// vai tranformar um objeto que parece uma Array, em uma array de verdade

//fazer uma lista (li) no html

const li = document.querySelectorAll("li");
const arrayLi = Array.from(li)

const obj = {
    0: "andre",
    1: "rafael",
    2: "marjore",
    length: 3,
}

const objetArray = Array.from(obj)

//Array.isArray()  ----> para verificar se é um array ou não

Array.isArray(instrumentos) //vai retornar verdadeiro
Array.isArray(obj) //vai retornar falso

//Array.of(), Array() e new Array()  ---> retorna um valor booleano após verificar se é um array

Array.of(10)          //[10]
Array(5)            //[,,,,,]  --> vai retornar um array vazio com 5 itens
Array(1, 2, 3, 4)     // [1,2,3,4] --->   se passar mais de um argumente, vai criar um array
new Array(5)     //[,,,,]

const frutas = ["banana", "pera"["uva roxa", "uva verde"]]
console.log(frutas.length) //3   ---> array dentro de array conta como 1

console.log(frutas[0].length) //vai retornar o comprimento do primeiro elemento