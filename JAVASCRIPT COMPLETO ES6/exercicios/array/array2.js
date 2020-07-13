//procura ate achar o primeiro verdadeiro

const frutas = ['Banana, Uva, Maça']

const temUva = frutas.some((item)=> {
    return item === Uva; 
})//true



//está procurando o primeiro false para retornar e quebra o loop
const every = frutas.every((fruta) => {
    return fruta //false
})

//find = quando retornar true, vai pegar o valor disso e nos retornar


const frutas = ['Banana, Uva, Maça'] 
const buscaUva = frutas.findIndex(item => {
    return item === uva //1
})