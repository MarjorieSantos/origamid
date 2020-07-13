// criando objetos 
const pessoa = new Object({
    nome: 'MARJ'
})

const carros = {
    marca: 'bmw',
    rodas: 4,
    acelerar() {
        return this.marca + 'acelerou'
    },
    buzinar() {
        return this.marca + 'buzinou'
    }
}


const honda = Object.create(carro)
honda.marca = honda;

//definindo ropriedades
const motos = {
}

Object.defineProperty(moto, {
    rodas: {
        value: 2,
        configurable: false, //não e editável
    }
})


